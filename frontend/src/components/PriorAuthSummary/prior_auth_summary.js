// components/PriorAuthorizationSummary/prior_authorization_summary.js

import React from 'react';
import { Flex, FlexItem, Card, CardHeader, CardBody, Text, TextVariants } from '@patternfly/react-core';
// import './prior_auth_summary.css';


const PriorAuthorizationSummary = () => {
  return (
    <>
      <Card isRounded style={{  }}>
        <CardHeader>
          <Text component={TextVariants.h2} style={{ fontFamily: 'Red Hat Display', fontWeight: 600 }}>Prior Authorization Summary</Text>
        </CardHeader>
        <CardBody>
          <Flex style={{ gap: 24 }}>
            <FlexItem>
              <Text component={TextVariants.h3} style={{ marginBottom: 8, fontFamily: 'Red Hat Display', fontWeight: 500 }}>Patient Overview</Text>
              <Text component={TextVariants.p} style={{ fontSize: 14 }}>The patient, Sarah Burnside, has a primary diagnosis of Secondary Malignant Neoplasm of Brain, with secondary diagnoses including Malignant Neoplasm of Breast, Unspecified. Additional conditions include Hypertension and Complete AV Block. Treatment is deemed necessary based on clinical assessment.</Text>
            </FlexItem>
            <FlexItem>
              <Text component={TextVariants.h3} style={{ marginBottom: 8, fontFamily: 'Red Hat Display', fontWeight: 500 }}>Clinical Practice Guidelines</Text>
              <Text component={TextVariants.p} style={{ fontSize: 14 }}>Based on the latest Clinical Practice Guidelines (CPGs) for treating brain metastasis secondary to breast cancer, External Beam Radiation Therapy (EBRT) is recommended as a first-line treatment. The guidelines support the use of EBRT for symptom management and to improve neurological function.</Text>
            </FlexItem>
            <FlexItem>
              <Text component={TextVariants.h3} style={{ marginBottom: 8, fontFamily: 'Red Hat Display', fontWeight: 500 }}>Policy Coverage Analysis</Text>
              <Text component={TextVariants.p} style={{ fontSize: 14 }}>According to the patient's insurance policy with Anthem Blue Cross, the proposed procedure (External Beam Radiation Therapy) is generally covered under the current plan. Deductible and co-pay details have been reviewed, and the patient meets the criteria for coverage, pending any pre-authorization requirements.
              </Text>
            </FlexItem>
            <FlexItem>
              <Text component={TextVariants.h3} style={{ marginBottom: 8, fontFamily: 'Red Hat Display', fontWeight: 500 }}>Final Assessment</Text>
              <Text component={TextVariants.p} style={{ fontSize: 14 }}>The patient's condition and treatment plan align with current clinical guidelines and insurance policy coverage. Prior Authorization is recommended for approval based on the necessity and effectiveness of the proposed procedure. All supporting documents and physician notes have been provided, ensuring a comprehensive understanding of the case.
              </Text>
            </FlexItem>
          </Flex>
        </CardBody>
      </Card>
    </>

  );
};

export default PriorAuthorizationSummary;
