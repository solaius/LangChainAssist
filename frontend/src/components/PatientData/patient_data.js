// components/PatientData/patient_data.js

import React, { useState, useEffect } from 'react';
import { Accordion, AccordionItem, AccordionContent, AccordionToggle, Text, TextVariants, Grid, GridItem, DescriptionList, DescriptionListGroup, DescriptionListTerm, DescriptionListDescription, Flex, FlexItem, List, ListItem, Spinner } from '@patternfly/react-core';
// import './patient_data.css';

const PatientData = ({ currentSection }) => {

  const [isProcessing, setIsProcessing] = useState(true)

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

    if (currentSection === 1) {
      setIsProcessing(true)

      const timer = setTimeout(() => {
        setIsProcessing(false)
      }, 3000)

      return () => clearTimeout(timer)
    }
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
        <AccordionContent isHidden={!isExpanded.patientInfo} style={{ color: '#151515', fontSize: 16 }}>

          {isProcessing && (
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Spinner />
            </div>
          )}

          {!isProcessing && (
            <div className="patient-data">
              <Flex gap={{ default: 'gap2xl' }}>
                <FlexItem style={{ width: '100%', margin: 0 }}>
                  <Text component={TextVariants.h2} style={{ marginBottom: 24, fontFamily: 'Red Hat Display', fontWeight: 500, fontSize: 20 }}>Patient Information</Text>
                  <Grid hasGutter>
                    <GridItem className="auth-column" span={6}>
                      <DescriptionList>
                        <DescriptionListGroup>
                          <DescriptionListTerm>Subject Name</DescriptionListTerm>
                          <DescriptionListDescription>Sarah Burnside</DescriptionListDescription>
                        </DescriptionListGroup>
                        <DescriptionListGroup>
                          <DescriptionListTerm>Date of Birth</DescriptionListTerm>
                          <DescriptionListDescription>January 1, 1926</DescriptionListDescription>
                        </DescriptionListGroup>
                        <DescriptionListGroup>
                          <DescriptionListTerm>Admission Type</DescriptionListTerm>
                          <DescriptionListDescription>Emergency</DescriptionListDescription>
                        </DescriptionListGroup>
                        <DescriptionListGroup>
                          <DescriptionListTerm>Insurance</DescriptionListTerm>
                          <DescriptionListDescription>Medicare</DescriptionListDescription>
                        </DescriptionListGroup>
                        <DescriptionListGroup>
                          <DescriptionListTerm>Discharge Date</DescriptionListTerm>
                          <DescriptionListDescription>March 16, 1992</DescriptionListDescription>
                        </DescriptionListGroup>
                      </DescriptionList>
                    </GridItem>
                    <GridItem className="auth-column" span={6}>
                      <DescriptionList>
                        <DescriptionListGroup>
                          <DescriptionListTerm>SubjectID</DescriptionListTerm>
                          <DescriptionListDescription>3419</DescriptionListDescription>
                        </DescriptionListGroup>
                        <DescriptionListGroup>
                          <DescriptionListTerm>Admission ID</DescriptionListTerm>
                          <DescriptionListDescription>194653</DescriptionListDescription>
                        </DescriptionListGroup>
                        <DescriptionListGroup>
                          <DescriptionListTerm>Admission Location</DescriptionListTerm>
                          <DescriptionListDescription>Transfer from Hospital/Extramural</DescriptionListDescription>
                        </DescriptionListGroup>
                        <DescriptionListGroup>
                          <DescriptionListTerm>Admission Date</DescriptionListTerm>
                          <DescriptionListDescription>March 5, 1992</DescriptionListDescription>
                        </DescriptionListGroup>
                      </DescriptionList>
                    </GridItem>
                  </Grid>
                </FlexItem>
                <FlexItem style={{ width: '100%', margin: 0 }}>
                  <div className="admission-summary" style={{ marginBottom: 32 }}>
                    <Text component={TextVariants.h2} style={{ marginBottom: 24, fontFamily: 'Red Hat Display', fontWeight: 500, fontSize: 20 }}>Admission Summary</Text>
                    <p>
                      The patient, an elderly individual born in 1926, was admitted on an emergency basis,
                      transferred from another hospital. The primary reason for this admission was a diagnosis
                      of advanced breast cancer that had metastasized to the brain and other parts of the nervous system.
                      The patient has a history of cerebrovascular disease and complete atrioventricular (AV) block,
                      indicating a complex medical background.
                    </p>
                  </div>

                  <Grid hasGutter>
                    <GridItem span={6}>
                      <Text component={TextVariants.h4} style={{ marginBottom: 16, fontFamily: 'Red Hat Display', fontWeight: 500 }}>Diagnoses</Text>
                      <List>
                        <ListItem>438.89: Other late effects of cerebrovascular disease</ListItem>
                        <ListItem>426.3: Complete AV block</ListItem>
                        <ListItem>198.5: Malignant neoplasm of breast, unspecified</ListItem>
                        <ListItem>198.89: Malignant neoplasm of brain and other parts of nervous system</ListItem>
                        <ListItem>174.9: Malignant neoplasm of breast, in situ</ListItem>
                        <ListItem>198.3: Malignant neoplasm of breast, operable</ListItem>
                        <ListItem>V45.71: Encounters for follow-up examination and management of new complications</ListItem>
                        <ListItem>401.9: Malignant neoplasm of breast, recurrence</ListItem>
                        <ListItem>250.00: Mammography, screening</ListItem>
                        <ListItem>278.00: Surgical removal of breast neoplasm</ListItem>
                      </List>
                    </GridItem>
                    <GridItem span={6}>
                      <Text component={TextVariants.h4} style={{ marginBottom: 16, fontFamily: 'Red Hat Display', fontWeight: 500 }}>Procedures</Text>
                      <List>
                        <ListItem>21.2: Mammography, diagnostic</ListItem>
                        <ListItem>83.32: Stereotactic biopsy, breast</ListItem>
                        <ListItem>38.93: Mastectomy, simple</ListItem>
                        <ListItem>32.0: Radiation therapy, external, to breast</ListItem>
                        <ListItem>96.6: Chemotherapy, single agent</ListItem>
                        <ListItem>15.9: Chemotherapy, combination therapy</ListItem>
                      </List>
                    </GridItem>
                  </Grid>
                </FlexItem>
              </Flex>
            </div>
          )}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default PatientData;
