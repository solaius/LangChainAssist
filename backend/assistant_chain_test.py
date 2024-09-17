# assistant_chain_test.py

import json
from langchain.chains.base import Chain
from dotenv import load_dotenv
from pydantic import Field

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
        try:
            if self.assistant_name == "Patient Data Assistant":
                file_path = 'tempdata/patient_data.json'
                print(f"Reading from: {file_path}")
                patient_data = read_json_to_string(file_path)
                return {self.output_key: patient_data}
            elif self.assistant_name == "Clinical Practice Guidelines Assistant":
                file_path = 'tempdata/clinical_guidelines.json'
                print(f"Reading from: {file_path}")
                clinical_guidelines = read_json_to_string(file_path)
                return {self.output_key: clinical_guidelines}
            elif self.assistant_name == "Policy Coverage Assistant":
                file_path = 'tempdata/policy_coverage.json'
                print(f"Reading from: {file_path}")
                policy_coverage = read_json_to_string(file_path)
                return {self.output_key: policy_coverage}
            elif self.assistant_name == "Prior Auth Summary Assistant":
                file_path = 'tempdata/prior_auth_summary.txt'
                print(f"Reading from: {file_path}")
                patient_data = load_report_to_string(file_path)
                return {self.output_key: patient_data}
            else:
                return {self.output_key: "NO ASSISTANT"}
        except Exception as e:
            print(f"Error in _call for assistant {self.assistant_name}: {e}")
            return {self.output_key: f"Error: {e}"}

def read_json_to_string(file_path):
    try:
        with open(file_path, 'r') as file:
            # Load JSON data from file
            data = json.load(file)
        
        # Convert JSON data to a formatted string
        json_string = json.dumps(data, indent=4)
        return json_string
    except Exception as e:
        return f"An error occurred: {e}"

def load_report_to_string(file_path):
    with open(file_path, 'r') as file:
        report_content = file.read()
    return report_content