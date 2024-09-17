# E:/code/LangAssist/backend/api.py

from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from assistant_chain import AssistantAPIChain
from langchain.chains import SequentialChain, TransformChain
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Enable CORS for all origins (adjust for production)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allows all origins; adjust this for production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Define request and response models
class SubjectIDRequest(BaseModel):
    subject_id: str

class AssistantResponse(BaseModel):
    patient_data: str = ""
    clinical_guidelines: str = ""
    policy_coverage: str = ""
    final_summary: str = ""

# Define your chain setup here
def get_overall_chain():
    # Initialize chains for each assistant
    patient_data_chain = AssistantAPIChain(
        assistant_name="Patient Data Assistant",
        input_key="subject_id",
        output_key="patient_data"
    )

    clinical_guidelines_chain = AssistantAPIChain(
        assistant_name="Clinical Practice Guidelines Assistant",
        input_key="patient_data",
        output_key="clinical_guidelines"
    )

    policy_coverage_chain = AssistantAPIChain(
        assistant_name="Policy Coverage Assistant",
        input_key="clinical_guidelines",
        output_key="policy_coverage"
    )

    combine_chain = TransformChain(
        input_variables=["patient_data", "clinical_guidelines", "policy_coverage"],
        output_variables=["combined_data"],
        transform=combine_data
    )

    prior_auth_summary_chain = AssistantAPIChain(
        assistant_name="Prior Auth Summary Assistant",
        input_key="combined_data",
        output_key="final_summary"
    )

    # Define the overall sequential chain
    overall_chain = SequentialChain(
        chains=[
            patient_data_chain,
            clinical_guidelines_chain,
            policy_coverage_chain,
            combine_chain,
            prior_auth_summary_chain
        ],
        input_variables=["subject_id"],
        output_variables=[
            "patient_data",
            "clinical_guidelines",
            "policy_coverage",
            "final_summary"
        ],
        verbose=True
    )

    return overall_chain

# Define the combine_data function
def combine_data(inputs):
    patient_data = inputs.get('patient_data', 'No patient data')
    clinical_guidelines = inputs.get('clinical_guidelines', 'No clinical guidelines')
    policy_coverage = inputs.get('policy_coverage', 'No policy coverage')

    combined = f"{patient_data}\n{clinical_guidelines}\n{policy_coverage}"
    return {"combined_data": combined}

@app.post("/process_subject_id", response_model=AssistantResponse)
async def process_subject_id(request: SubjectIDRequest):
    subject_id = request.subject_id
    overall_chain = get_overall_chain()

    try:
        result = overall_chain.invoke({"subject_id": subject_id})
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

    # Extract outputs
    response_data = {
        "patient_data": result.get("patient_data", ""),
        "clinical_guidelines": result.get("clinical_guidelines", ""),
        "policy_coverage": result.get("policy_coverage", ""),
        "final_summary": result.get("final_summary", ""),
    }
    return response_data
