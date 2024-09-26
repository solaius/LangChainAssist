// components/PriorAuthRequest/prior_auth_request.js

import React, { useState, useEffect } from 'react';
import { Accordion, AccordionItem, AccordionContent, AccordionToggle } from '@patternfly/react-core';
import './prior_auth_request.css';

const PriorAuthRequest = ({ currentSection }) => {
  const [isExpanded, setIsExpanded] = useState(false); // State for Accordion toggle

  const onToggle = () => {
    setIsExpanded(!isExpanded);
  };

  useEffect(() => {
    setIsExpanded(currentSection === 0 ? true : false)
  }, [currentSection])

  return (
    <Accordion asDefinitionList>
      <AccordionItem>
        <AccordionToggle
          onClick={onToggle}
          isExpanded={isExpanded}
          id="toggle-1"
          className="custom-accordion-toggle"
        >
          Prior Authorization Request
        </AccordionToggle>
        <AccordionContent isHidden={!isExpanded}>
          <div className="prior-auth-request">
            <h2 className="prior-auth-title">External Beam Radiation Therapy</h2>
            <div className="auth-section">
              <h3>Patient Information:</h3>
              <div className="auth-content">
                <div className="auth-column">
                  <p><strong>Name:</strong> Sarah Burnside</p>
                  <p><strong>Date of Birth:</strong> January 1, 1926</p>
                  <p><strong>Insurance:</strong> Anthem Blue Cross</p>
                </div>
                <div className="auth-column">
                  <p><strong>SubjectID:</strong> 3419</p>
                  <p><strong>Admission ID:</strong> 194653</p>
                </div>
              </div>
            </div>

            <div className="auth-section">
              <h3>Provider Information:</h3>
              <div className="auth-content">
                <div className="auth-column">
                  <p><strong>Requesting Physician:</strong> Dr. Theodore Buck Barnswoggle III</p>
                  <p><strong>Facility Name:</strong> [Hospital/Clinic Name]</p>
                </div>
                <div className="auth-column">
                  <p><strong>Contact Information:</strong> [Phone, Fax, Email]</p>
                </div>
              </div>
            </div>

            <div className="auth-section">
              <h3>Diagnosis Information:</h3>
              <div className="auth-content">
                <div className="auth-column">
                  <p><strong>Primary Diagnosis:</strong> Secondary Malignant Neoplasm of Brain (ICD-9: 198.3)</p>
                  <p><strong>Secondary Diagnosis:</strong> Malignant Neoplasm of Breast, Unspecified (ICD-9: 174.9)</p>
                </div>
                <div className="auth-column">
                  <p><strong>Other Relevant Diagnoses:</strong> Hypertension (ICD-9: 401.9), Complete AV Block (ICD-9: 426.3)</p>
                </div>
              </div>
            </div>

            <div className="auth-section">
              <h3>Procedure Information:</h3>
              <div className="auth-content">
                <div className="auth-column">
                  <p><strong>Procedure:</strong> External Beam Radiation Therapy (ICD-9: 92.29)</p>
                  <p><strong>Start Date:</strong> [Date]</p>
                </div>
                <div className="auth-column">
                  <p><strong>Frequency/Duration:</strong> [Frequency] sessions over [Duration]</p>
                </div>
              </div>
            </div>

            <div className="auth-section">
              <h3>Medical Necessity Justification:</h3>
              <div className="auth-content">
                <p>The patient has been diagnosed with brain metastasis secondary to breast cancer. External beam radiation therapy is medically necessary for managing the progression of brain metastasis and alleviating symptoms such as neurological impairment and seizures. Without this treatment, the patient’s condition is expected to deteriorate, leading to further complications. Radiation therapy is a standard approach for brain metastasis in advanced-stage cancer.</p>
              </div>
            </div>

            <div className="auth-section">
              <h3>Supporting Documents Provided:</h3>
              <div className="auth-content">
                <ul>
                  <li>Physician's note</li>
                  <li>Recent imaging (CT/MRI)</li>
                  <li>Treatment plan</li>
                </ul>
              </div>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default PriorAuthRequest;
