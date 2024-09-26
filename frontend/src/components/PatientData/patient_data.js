// components/PatientData/patient_data.js

import React, { useState, useEffect } from 'react';
import { Accordion, AccordionItem, AccordionContent, AccordionToggle } from '@patternfly/react-core';
import './patient_data.css';

const PatientData = ({ currentSection }) => {
  const [isExpanded, setIsExpanded] = useState({
    patientInfo: false,
    diagnoses: false,
    procedures: false,
  });

  const toggleSection = (section) => {
    setIsExpanded(prevState => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  useEffect(() => {
    setIsExpanded(currentSection === 1 ? {
      patientInfo: true,
      diagnoses: false,
      procedures: false,
    } : {
      patientInfo: false,
      diagnoses: false,
      procedures: false,
    })
  }, [currentSection])

  return (
    <Accordion asDefinitionList>
      <AccordionItem>
        <AccordionToggle
          onClick={() => toggleSection('patientInfo')}
          isExpanded={isExpanded.patientInfo}
          id="toggle-patient-info"
          className="custom-accordion-toggle"
        >
          Patient Data
        </AccordionToggle>
        <AccordionContent isHidden={!isExpanded.patientInfo}>
          <div className="patient-data">
            <h2 className="data-title">Patient Information</h2>
            <div className="data-grid">
              <div className="data-row">
                <div className="data-field"><strong>Subject Name:</strong> Sarah Burnside</div>
                <div className="data-field"><strong>SubjectID:</strong> 3419</div>
              </div>
              <div className="data-row">
                <div className="data-field"><strong>Date of Birth:</strong> January 1, 1926</div>
                <div className="data-field"><strong>Admission ID:</strong> 194653</div>
              </div>
              <div className="data-row">
                <div className="data-field"><strong>Admission Type:</strong> Emergency</div>
                <div className="data-field"><strong>Admission Location:</strong> Transfer from Hospital/Extramural</div>
              </div>
              <div className="data-row">
                <div className="data-field"><strong>Insurance:</strong> Medicare</div>
                <div className="data-field"><strong>Admission Date:</strong> March 5, 1992</div>
              </div>
              <div className="data-row">
                <div className="data-field"><strong>Discharge Date:</strong> March 16, 1992</div>
              </div>
            </div>

            {/* Admission Summary Section */}
            <div className="admission-summary">
              <h2 className="data-title">Admission Summary</h2>
              <p>
                The patient, an elderly individual born in 1926, was admitted on an emergency basis, 
                transferred from another hospital. The primary reason for this admission was a diagnosis 
                of advanced breast cancer that had metastasized to the brain and other parts of the nervous system. 
                The patient has a history of cerebrovascular disease and complete atrioventricular (AV) block, 
                indicating a complex medical background.
              </p>
            </div>

            {/* Diagnoses and Procedures in collapsible sections side by side */}
            <div className="data-columns">
              <div className="data-column">
                <AccordionItem>
                  <AccordionToggle
                    onClick={() => toggleSection('diagnoses')}
                    isExpanded={isExpanded.diagnoses}
                    id="toggle-diagnoses"
                    className="custom-accordion-toggle"
                  >
                    Diagnoses
                  </AccordionToggle>
                  <AccordionContent isHidden={!isExpanded.diagnoses}>
                    <div className="data-section">
                      <ul>
                        <li>438.89: Other late effects of cerebrovascular disease</li>
                        <li>426.3: Complete AV block</li>
                        <li>198.5: Malignant neoplasm of breast, unspecified</li>
                        <li>198.89: Malignant neoplasm of brain and other parts of nervous system</li>
                        <li>174.9: Malignant neoplasm of breast, in situ</li>
                        <li>198.3: Malignant neoplasm of breast, operable</li>
                        <li>V45.71: Encounters for follow-up examination and management of new complications</li>
                        <li>401.9: Malignant neoplasm of breast, recurrence</li>
                        <li>250.00: Mammography, screening</li>
                        <li>278.00: Surgical removal of breast neoplasm</li>
                      </ul>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </div>
              <div className="data-column">
                <AccordionItem>
                  <AccordionToggle
                    onClick={() => toggleSection('procedures')}
                    isExpanded={isExpanded.procedures}
                    id="toggle-procedures"
                    className="custom-accordion-toggle"
                  >
                    Procedures
                  </AccordionToggle>
                  <AccordionContent isHidden={!isExpanded.procedures}>
                    <div className="data-section">
                      <ul>
                        <li>21.2: Mammography, diagnostic</li>
                        <li>83.32: Stereotactic biopsy, breast</li>
                        <li>38.93: Mastectomy, simple</li>
                        <li>32.0: Radiation therapy, external, to breast</li>
                        <li>96.6: Chemotherapy, single agent</li>
                        <li>15.9: Chemotherapy, combination therapy</li>
                      </ul>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </div>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default PatientData;
