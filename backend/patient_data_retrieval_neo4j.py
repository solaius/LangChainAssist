import os
import neo4j
import json
from datetime import datetime, timezone
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

# Neo4j connection setup
uri = os.getenv('NEO4J_URL')
username = os.getenv('NEO4J_USERNAME')
password = os.getenv('NEO4J_PASSWORD')
driver = neo4j.GraphDatabase.driver(uri, auth=(username, password))

# Neo4j query with parameterized subject_id
neo4j_query = """
MATCH (p:Patient)-[:HAS_ADMISSION]->(a:Admission)
WHERE p.subject_id = $subject_id
OPTIONAL MATCH (a)-[:HAS_DIAGNOSIS]->(d:Diagnosis)
OPTIONAL MATCH (a)-[:HAS_PROCEDURE]->(proc:Procedure)
RETURN p.subject_id AS SubjectID,
       p.dob AS DateOfBirth,
       p.dod AS DateOfDeath,
       a.hadm_id AS AdmissionID,
       a.admission_type AS AdmissionType,
       a.admission_location AS AdmissionLocation,
       a.insurance AS Insurance,
       a.diagnosis AS Diagnosis,
       a.admission_time AS AdmissionDate,
       a.discharge_time AS DischargeDate, 
       COLLECT(DISTINCT d.icd9_code) AS Diagnosis_ICD9_Codes, 
       COLLECT(DISTINCT proc.icd9_code) AS Procedure_ICD9_Codes
"""

# Function to query Neo4j and pass the subject_id dynamically, specifying the 'patientdata' database
def query_neo4j(subject_id: str):
    with driver.session(database="patientdata") as session:  # Specify the 'patientdata' database here
        result = session.run(neo4j_query, {"subject_id": subject_id})
        return result.data()

# Function to format Unix timestamp to 'YYYY-MM-DD' or return 'Not a Date'
def format_unix_date(timestamp):
    try:
        # Convert from milliseconds to seconds and check if it's a valid date
        if timestamp and isinstance(timestamp, int) and timestamp > 0:
            return datetime.fromtimestamp(timestamp / 1000, timezone.utc).strftime('%Y-%m-%d')
        else:
            return 'Not a Date'
    except (ValueError, TypeError):
        return 'Not a Date'

# Formatting the patient data for context and converting dates using format_unix_date
def format_patient_data(data):
    if data:
        # List to store formatted admissions
        admissions = []

        for patient in data:
            admissions.append({
                "AdmissionID": patient['AdmissionID'],
                "AdmissionType": patient['AdmissionType'],
                "AdmissionLocation": patient['AdmissionLocation'],
                "Insurance": patient['Insurance'],
                "Diagnosis": patient['Diagnosis'],
                "AdmissionDate": format_unix_date(patient['AdmissionDate']),
                "DischargeDate": format_unix_date(patient['DischargeDate']),
                "DiagnosisICD9Codes": patient['Diagnosis_ICD9_Codes'],  # List of diagnosis codes
                "ProcedureICD9Codes": patient['Procedure_ICD9_Codes']   # List of procedure codes
            })

        return {
            "PatientID": data[0]['SubjectID'],  # PatientID is the same for all admissions
            "DateOfBirth": format_unix_date(data[0]['DateOfBirth']),
            "DateOfDeath": format_unix_date(data[0]['DateOfDeath']),
            "Admissions": admissions
        }
    return {"Error": "No patient data found."}

# Example usage
if __name__ == "__main__":
    # Example subject_id
    subject_id = '3419'
    
    # Run the query and format the result
    neo4j_response = query_neo4j(subject_id)
    
    # Output the raw response for debugging
    print("Raw Neo4j Response:", neo4j_response)
    
    # Format the patient context for readability and JSON output
    patient_context = format_patient_data(neo4j_response)
    
    # Convert to JSON format and print
    patient_json = json.dumps(patient_context, indent=4)
    print("Formatted Patient Data (JSON):")
    print(patient_json)

# Close the Neo4j driver connection
driver.close()
