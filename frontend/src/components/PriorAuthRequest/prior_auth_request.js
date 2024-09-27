// components/PriorAuthRequest/prior_auth_request.js

import React, { useState, useEffect } from 'react';
import { Accordion, AccordionItem, AccordionContent, AccordionToggle, TextVariants, Text, Grid, GridItem, FlexItem, Flex, DescriptionList, DescriptionListGroup, DescriptionListTerm, DescriptionListDescription, List, ListItem } from '@patternfly/react-core';
// import './prior_auth_request.css';

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
        <AccordionContent isHidden={!isExpanded} style={{ color: '#151515', fontSize: 16 }}>
          <div className="prior-auth-request">
            <Text component={TextVariants.h2} style={{ marginBottom: 24, fontFamily: 'Red Hat Display', fontWeight: 500, fontSize: 20 }}>External Beam Radiation Therapy</Text>

            <Flex gap={{ default: 'gap2xl' }}>
              <FlexItem style={{ width: '100%', margin: 0 }}>
                <Text component={TextVariants.h3} style={{ marginBottom: 16, fontFamily: 'Red Hat Display', fontWeight: 500 }}>Patient Information:</Text>
                <Grid hasGutter>
                  <GridItem className="auth-column" span={6}>
                    <DescriptionList>
                      <DescriptionListGroup>
                        <DescriptionListTerm>Name</DescriptionListTerm>
                        <DescriptionListDescription>Sarah Burnside</DescriptionListDescription>
                      </DescriptionListGroup>
                      <DescriptionListGroup>
                        <DescriptionListTerm>Date of Birth</DescriptionListTerm>
                        <DescriptionListDescription>January 1, 1926</DescriptionListDescription>
                      </DescriptionListGroup>
                      <DescriptionListGroup>
                        <DescriptionListTerm>Insurance</DescriptionListTerm>
                        <DescriptionListDescription>Anthem Blue Cross</DescriptionListDescription>
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
                    </DescriptionList>
                  </GridItem>
                </Grid>
              </FlexItem>

              <FlexItem style={{ width: '100%', margin: 0 }}>
                <Text component={TextVariants.h3} style={{ marginBottom: 16, fontFamily: 'Red Hat Display', fontWeight: 500 }}>Provider Information:</Text>
                <Grid hasGutter>
                  <GridItem className="auth-column" span={6}>
                    <DescriptionList>
                      <DescriptionListGroup>
                        <DescriptionListTerm>Requesting Physician</DescriptionListTerm>
                        <DescriptionListDescription>Dr. Theodore Buck Barnswoggle III</DescriptionListDescription>
                      </DescriptionListGroup>
                      <DescriptionListGroup>
                        <DescriptionListTerm>Facility Name</DescriptionListTerm>
                        <DescriptionListDescription>[Hospital/Clinic Name]</DescriptionListDescription>
                      </DescriptionListGroup>
                    </DescriptionList>
                  </GridItem>
                  <GridItem className="auth-column" span={6}>
                    <DescriptionList>
                      <DescriptionListGroup>
                        <DescriptionListTerm>Contact Information</DescriptionListTerm>
                        <DescriptionListDescription>[Phone, Fax, Email]</DescriptionListDescription>
                      </DescriptionListGroup>
                    </DescriptionList>
                  </GridItem>
                </Grid>
              </FlexItem>

              <FlexItem style={{ width: '100%', margin: 0 }}>
                <Text component={TextVariants.h3} style={{ marginBottom: 16, fontFamily: 'Red Hat Display', fontWeight: 500 }}>Diagnosis Information:</Text>
                <Grid hasGutter>
                  <GridItem className="auth-column" span={6}>
                    <DescriptionList>
                      <DescriptionListGroup>
                        <DescriptionListTerm>Primary Diagnosis</DescriptionListTerm>
                        <DescriptionListDescription>Secondary Malignant Neoplasm of Brain (ICD-9: 198.3)</DescriptionListDescription>
                      </DescriptionListGroup>
                      <DescriptionListGroup>
                        <DescriptionListTerm>Secondary Diagnosis</DescriptionListTerm>
                        <DescriptionListDescription>Malignant Neoplasm of Breast, Unspecified (ICD-9: 174.9)</DescriptionListDescription>
                      </DescriptionListGroup>
                    </DescriptionList>
                  </GridItem>
                  <GridItem className="auth-column" span={6}>
                    <DescriptionList>
                      <DescriptionListGroup>
                        <DescriptionListTerm>Other Relevant Diagnoses</DescriptionListTerm>
                        <DescriptionListDescription>Hypertension (ICD-9: 401.9), Complete AV Block (ICD-9: 426.3)</DescriptionListDescription>
                      </DescriptionListGroup>
                    </DescriptionList>
                  </GridItem>
                </Grid>
              </FlexItem>

              <FlexItem style={{ width: '100%', margin: 0 }}>
                <Text component={TextVariants.h3} style={{ marginBottom: 16, fontFamily: 'Red Hat Display', fontWeight: 500 }}>Procedure Information:</Text>
                <Grid hasGutter>
                  <GridItem className="auth-column" span={6}>
                    <DescriptionList>
                      <DescriptionListGroup>
                        <DescriptionListTerm>Procedure</DescriptionListTerm>
                        <DescriptionListDescription>External Beam Radiation Therapy (ICD-9: 92.29)</DescriptionListDescription>
                      </DescriptionListGroup>
                      <DescriptionListGroup>
                        <DescriptionListTerm>Start Date</DescriptionListTerm>
                        <DescriptionListDescription>[Date]</DescriptionListDescription>
                      </DescriptionListGroup>
                    </DescriptionList>
                  </GridItem>
                  <GridItem className="auth-column" span={6}>
                    <DescriptionList>
                      <DescriptionListGroup>
                        <DescriptionListTerm>Frequency/Duration</DescriptionListTerm>
                        <DescriptionListDescription>[Frequency] sessions over [Duration]</DescriptionListDescription>
                      </DescriptionListGroup>
                    </DescriptionList>
                  </GridItem>
                </Grid>
              </FlexItem>

              <FlexItem style={{ width: '100%', margin: 0 }}>
                <Text component={TextVariants.h3} style={{ marginBottom: 16, fontFamily: 'Red Hat Display', fontWeight: 500 }}>Medical Necessity Justification:</Text>
                <div className="auth-content">
                  <p>The patient has been diagnosed with brain metastasis secondary to breast cancer. External beam radiation therapy is medically necessary for managing the progression of brain metastasis and alleviating symptoms such as neurological impairment and seizures. Without this treatment, the patient’s condition is expected to deteriorate, leading to further complications. Radiation therapy is a standard approach for brain metastasis in advanced-stage cancer.</p>
                </div>
              </FlexItem>

              <FlexItem style={{ width: '100%', margin: 0 }}>
                <Text component={TextVariants.h3} style={{ marginBottom: 16, fontFamily: 'Red Hat Display', fontWeight: 500 }}>Supporting Documents Provided:</Text>
                <List>
                  <ListItem>Physician's note</ListItem>
                  <ListItem>Recent imaging (CT/MRI)</ListItem>
                  <ListItem>Treatment plan</ListItem>
                </List>
              </FlexItem>
            </Flex>

          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default PriorAuthRequest;
