import os
from assistant_chain_test import AssistantAPIChain
from langchain.chains import SequentialChain, TransformChain
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

def combine_data(inputs):
    # Check for None values and handle them
    patient_data = inputs.get('patient_data', 'No patient data')
    clinical_guidelines = inputs.get('clinical_guidelines', 'No clinical guidelines')
    policy_coverage = inputs.get('policy_coverage', 'No policy coverage')
    
    combined = f"{patient_data}\n{clinical_guidelines}\n{policy_coverage}"
    return {"combined_data": combined}

def main():
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
        chains=[patient_data_chain, clinical_guidelines_chain, policy_coverage_chain, combine_chain, prior_auth_summary_chain],
        input_variables=["subject_id"],
        output_variables=["patient_data", "clinical_guidelines", "policy_coverage","final_summary"],
        verbose=True
    )

    # Get SubjectID from user input
    subject_id = input("Enter SubjectID: ")

    # Run the chain with the initial input using invoke
    try:
        result = overall_chain.invoke({
            "subject_id": subject_id
        })
    except Exception as e:
        print(f"Error occurred during chain execution: {e}")
        return

    # Extract outputs
    patient_data = result.get("patient_data", "")
    clinical_guidelines = result.get("clinical_guidelines", "")
    policy_coverage = result.get("policy_coverage", "")
    final_summary = result.get("final_summary", "")
    
    # Display the results
    print("\nPatient Data:")
    print(patient_data)
    print("\nClinical Practice Guidelines:")
    print(clinical_guidelines)
    print("\nPolicy Coverage:")
    print(policy_coverage)
    print("\nFinal Summary:")
    print(final_summary)

if __name__ == "__main__":
    main()
