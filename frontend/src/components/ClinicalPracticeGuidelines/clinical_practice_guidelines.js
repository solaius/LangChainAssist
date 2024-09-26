// components/ClinicalPracticeGuidelines/clinical_practice_guidelines.js

import React, { useState, useEffect } from 'react';
import { Accordion, AccordionItem, AccordionContent, AccordionToggle } from '@patternfly/react-core';
import './clinical_practice_guidelines.css';

const ClinicalPracticeGuidelines = ({ currentSection }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const onToggle = () => {
    setIsExpanded(!isExpanded);
  };

  useEffect(() => {
    setIsExpanded(currentSection === 2 ? true : false)
  }, [currentSection])

  return (
    <Accordion asDefinitionList>
      <AccordionItem>
        <AccordionToggle
          onClick={onToggle}
          isExpanded={isExpanded}
          id="toggle-clinical-practice-guidelines"
          className="custom-accordion-toggle"
        >
          Clinical Practice Guidelines
        </AccordionToggle>
        <AccordionContent isHidden={!isExpanded}>
          <div className="clinical-practice-guidelines">
            <h2 className="guidelines-title">External Beam Radiation Therapy for Brain Metastasis</h2>
            <p>
              Based on the provided information, the patient is seeking External Beam Radiation Therapy for the treatment of brain metastasis secondary to breast cancer.
              The National Comprehensive Cancer Network (NCCN) Guidelines for Invasive Breast Cancer, Version 4.2024, do not directly address the use of radiation therapy for brain metastasis.
              However, the NCCN does provide guidelines for the management of brain metastasis in the context of other types of cancer.
            </p>
            <p>
              According to the NCCN Guidelines for Central Nervous System (CNS) Malignancies, Version 4.2024, the recommended treatment for brain metastasis includes surgical resection,
              whole-brain radiation therapy (WBRT), stereotactic radiosurgery (SRS), or a combination of these approaches. The choice of treatment depends on various factors such as the number,
              size, and location of the metastases, the patient's performance status, and the presence of other comorbidities.
            </p>
            <p>
              In the case of the patient, the presence of advanced-stage breast cancer and the need for radiation therapy to manage the progression of brain metastasis aligns with the standard approach
              for brain metastasis in advanced-stage cancer. The use of External Beam Radiation Therapy for managing brain metastasis is a reasonable and medically necessary treatment option in this case.
            </p>
            <h3>To further support the Prior Authorization claim, the following points can be emphasized:</h3>
            <ul>
              <li>The patient's diagnosis of brain metastasis secondary to breast cancer necessitates the use of radiation therapy to manage the progression of the metastasis and alleviate symptoms such as neurological impairment and seizures.</li>
              <li>The use of External Beam Radiation Therapy for managing brain metastasis is a standard approach for advanced-stage cancer.</li>
              <li>The treatment plan provided by the requesting physician outlines the specific details of the proposed radiation therapy, including the start date, frequency, and duration.</li>
              <li>The patient's condition is expected to deteriorate without this treatment, leading to further complications.</li>
              <li>The Prior Authorization request is supported by the physician's note and recent imaging (CT/MRI).</li>
            </ul>
            <p>
              In conclusion, the use of External Beam Radiation Therapy for managing brain metastasis secondary to breast cancer is a reasonable and medically necessary treatment option in this case.
              The Prior Authorization request is supported by the NCCN Guidelines for CNS Malignancies, the treatment plan provided by the requesting physician, and the patient's diagnosis and condition.
            </p>
            <h3>Sources:</h3>
            <ul>
              <li><a href="https://www.nccn.org/professionals/physician_gls/pdf/cns.pdf" target="_blank" rel="noopener noreferrer">NCCN Guidelines for CNS Malignancies</a></li>
            </ul>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default ClinicalPracticeGuidelines;
