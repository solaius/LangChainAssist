// components/PriorAuthorizationSummary/prior_authorization_summary.js

import React, { useState } from 'react';
import { Accordion, AccordionItem, AccordionContent, AccordionToggle } from '@patternfly/react-core';
import './prior_auth_summary.css';

const PriorAuthorizationSummary = () => {
  const [isExpanded, setIsExpanded] = useState(false); // State for Accordion toggle

  const onToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Accordion asDefinitionList>
      <AccordionItem>
        <AccordionToggle
          onClick={onToggle}
          isExpanded={isExpanded}
          id="toggle-2"
          className="custom-accordion-toggle"
        >
          Prior Authorization Summary
        </AccordionToggle>
        <AccordionContent isHidden={!isExpanded}>
          <div className="prior-authorization-summary">
            <div className="summary-section">
              <h3>Patient Overview:</h3>
              <p>
                The patient, Sarah Burnside, has a primary diagnosis of Secondary Malignant Neoplasm of Brain,
                with secondary diagnoses including Malignant Neoplasm of Breast, Unspecified. Additional conditions
                include Hypertension and Complete AV Block. Treatment is deemed necessary based on clinical assessment.
              </p>
            </div>
            
            <div className="summary-section">
              <h3>Clinical Practice Guidelines:</h3>
              <p>
                Based on the latest Clinical Practice Guidelines (CPGs) for treating brain metastasis secondary to breast cancer,
                External Beam Radiation Therapy (EBRT) is recommended as a first-line treatment. The guidelines support the use of 
                EBRT for symptom management and to improve neurological function.
              </p>
            </div>

            <div className="summary-section">
              <h3>Policy Coverage Analysis:</h3>
              <p>
                According to the patient's insurance policy with Anthem Blue Cross, the proposed procedure (External Beam Radiation Therapy)
                is generally covered under the current plan. Deductible and co-pay details have been reviewed, and the patient meets the
                criteria for coverage, pending any pre-authorization requirements.
              </p>
            </div>

            <div className="summary-section">
              <h3>Final Assessment:</h3>
              <p>
                The patient's condition and treatment plan align with current clinical guidelines and insurance policy coverage.
                Prior Authorization is recommended for approval based on the necessity and effectiveness of the proposed procedure.
                All supporting documents and physician notes have been provided, ensuring a comprehensive understanding of the case.
              </p>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default PriorAuthorizationSummary;
