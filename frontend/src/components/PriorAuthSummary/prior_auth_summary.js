// components/PriorAuthorizationSummary/prior_authorization_summary.js

import React, { useEffect, useState } from 'react';
import { Flex, FlexItem, Card, CardHeader, CardBody, Text, TextVariants, Spinner, Button, Grid, GridItem, Divider, Popover } from '@patternfly/react-core';
import { ChartBullet } from '@patternfly/react-charts';
import InfoCircleIcon from '@patternfly/react-icons/dist/esm/icons/info-circle-icon';
import LogoNeo4J from '../../images/neo4j-logo_color.png'
// import './prior_auth_summary.css';


const PriorAuthorizationSummary = ({ currentSection }) => {

  const [isProcessing, setIsProcessing] = useState(true)

  useEffect(() => {
    if (currentSection === 4) {
      setIsProcessing(true)

      const timer = setTimeout(() => {
        setIsProcessing(false)
      }, 3000)

      return () => clearTimeout(timer)
    }
  }, [currentSection])

  return (
    <>
      <div>
        <Text component={TextVariants.h1} style={{ display: 'flex', alignItems: 'center', marginBottom: 24, fontFamily: 'Red Hat Display', fontWeight: 600, fontSize: 24 }}>
          Prior Authorization Summary
          <Popover
            bodyContent={
              <div>
                <div><img src={LogoNeo4J} alt="Neo4J logo" style={{ height: 24 }} /></div>
                <div><strong>Stored in Neo4j Graph Database</strong></div>
                <Text component={TextVariants.pre}>System prompt</Text>
              </div>
            }
          >
            <Button variant="plain"><InfoCircleIcon /></Button>
          </Popover>
        </Text>

        {isProcessing && (
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Spinner />
          </div>
        )}
        {!isProcessing && (
          <>
            <Grid hasGutter style={{ gridGap: 32, marginBottom: 32 }}>
              <GridItem span={6}>
                <Card isFlat isRounded style={{ marginBottom: 32 }}>
                  <CardHeader>
                    <Text component={TextVariants.h3} style={{ marginBottom: 8, fontFamily: 'Red Hat Display', fontWeight: 500 }}>Rating score</Text>
                  </CardHeader>
                  <CardBody>
                    <ChartBullet
                      ariaDesc="Storage capacity"
                      ariaTitle="Bullet chart example"
                      comparativeWarningMeasureData={[{ name: 'Warning', y: 50 }]}
                      constrainToVisibleArea
                      // width={480}
                      // height={100}
                      labels={({ datum }) => `${datum.name}: ${datum.y}`}
                      maxDomain={{ y: 100 }}
                      name="chart1"
                      primarySegmentedMeasureData={[{ name: 'Measure', y: 60 }]}
                      qualitativeRangeData={[{ name: 'Range', y: 50 }, { name: 'Range', y: 75 }]}
                    />
                  </CardBody>
                </Card>
              </GridItem>
            </Grid>

            <Grid hasGutter style={{ gridGap: 32, marginBottom: 32 }}>
              <GridItem span={6}>
                <Text component={TextVariants.h3} style={{ marginBottom: 8, fontFamily: 'Red Hat Display', fontWeight: 500 }}>Patient Overview</Text>
                <Text component={TextVariants.p} style={{ fontSize: 14 }}>The patient, Sarah Burnside, has a primary diagnosis of Secondary Malignant Neoplasm of Brain, with secondary diagnoses including Malignant Neoplasm of Breast, Unspecified. Additional conditions include Hypertension and Complete AV Block. Treatment is deemed necessary based on clinical assessment.</Text>
              </GridItem>
              <GridItem span={6}>
                <Text component={TextVariants.h3} style={{ marginBottom: 8, fontFamily: 'Red Hat Display', fontWeight: 500 }}>Clinical Practice Guidelines</Text>
                <Text component={TextVariants.p} style={{ fontSize: 14 }}>Based on the latest Clinical Practice Guidelines (CPGs) for treating brain metastasis secondary to breast cancer, External Beam Radiation Therapy (EBRT) is recommended as a first-line treatment. The guidelines support the use of EBRT for symptom management and to improve neurological function.</Text>
              </GridItem>
              <GridItem span={6}>
                <Text component={TextVariants.h3} style={{ marginBottom: 8, fontFamily: 'Red Hat Display', fontWeight: 500 }}>Policy Coverage Analysis</Text>
                <Text component={TextVariants.p} style={{ fontSize: 14 }}>According to the patient's insurance policy with Anthem Blue Cross, the proposed procedure (External Beam Radiation Therapy) is generally covered under the current plan. Deductible and co-pay details have been reviewed, and the patient meets the criteria for coverage, pending any pre-authorization requirements.</Text>
              </GridItem>
              <GridItem span={6}>
                <Text component={TextVariants.h3} style={{ marginBottom: 8, fontFamily: 'Red Hat Display', fontWeight: 500 }}>Final Assessment</Text>
                <Text component={TextVariants.p} style={{ fontSize: 14 }}>The patient's condition and treatment plan align with current clinical guidelines and insurance policy coverage. Prior Authorization is recommended for approval based on the necessity and effectiveness of the proposed procedure. All supporting documents and physician notes have been provided, ensuring a comprehensive understanding of the case.</Text>
              </GridItem>
            </Grid>

            <Divider style={{ marginBottom: 32 }} />

            <Flex spaceItems={{ default: 'columnGapSm' }} justifyContent={{ default: 'justifyContentCenter' }}>
              <FlexItem>
                <Button>Approve claim</Button>
              </FlexItem>
              <FlexItem>
                <Button variant="secondary" isDanger>Decline claim</Button>
              </FlexItem>
            </Flex>
          </>
        )}
      </div>
    </>

  );
};

export default PriorAuthorizationSummary;
