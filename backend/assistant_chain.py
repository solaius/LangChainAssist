# assistant_chain.py

import os
import requests
from langchain.chains.base import Chain
from dotenv import load_dotenv
from pydantic import Field

# Load environment variables
load_dotenv()

API_KEY = os.getenv('API_KEY')
API_ENDPOINT = os.getenv('ASSISTANT_API_ENDPOINT')

class AssistantAPIChain(Chain):
    assistant_name: str = Field(...)
    input_key: str = Field(...)
    output_key: str = Field(...)

    @property
    def input_keys(self):
        # Handle both single input key and list of input keys
        if isinstance(self.input_key, list):
            return self.input_key
        return [self.input_key]

    @property
    def output_keys(self):
        return [self.output_key]

    def _call(self, inputs):
        # Construct the prompt based on input_key(s)
        if isinstance(self.input_key, list):
            # Combine inputs into a single prompt
            prompt_parts = [str(inputs[key]) for key in self.input_key]
            prompt = "\n".join(prompt_parts)
            print(prompt)
        else:
            prompt = inputs[self.input_key]

        headers = {
            'Content-Type': 'application/json',
            # Include API_KEY if required by your API
            #'Authorization': f'Bearer {API_KEY}'
        }
        data = {
            "message": prompt,
            "assistantName": self.assistant_name
        }

        # Implement retry logic
        session = requests.Session()
        retries = requests.adapters.Retry(
            total=3,
            backoff_factor=1,
            status_forcelist=[502, 503, 504]
        )
        adapter = requests.adapters.HTTPAdapter(max_retries=retries)
        session.mount('https://', adapter)
        session.mount('http://', adapter)

        try:
            response = session.post(
                API_ENDPOINT,
                headers=headers,
                json=data,
                timeout=10  # seconds
            )
            response.raise_for_status()
            result = response.json()
            # Extract the text response from the API result
            text_response = result.get("response", "")
            return {self.output_key: text_response}
        except requests.exceptions.RequestException as e:
            # Handle API errors
            print(f"API call to {self.assistant_name} failed: {e}")
            return {self.output_key: ""}
