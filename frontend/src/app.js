// src/app.js

import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './theme-context';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import PriorAuthRequest from './components/PriorAuthRequest/prior_auth_request';
import PriorAuthSummary from './components/PriorAuthSummary/prior_auth_summary';
import PatientData from './components/PatientData/patient_data';
import { Button, Card, CardBody, CardHeader, Divider, Flex, FlexItem, ProgressStep, ProgressStepper } from '@patternfly/react-core';
import '@patternfly/react-core/dist/styles/base.css';
import './app.css'; // Import the CSS file
import ClinicalPracticeGuidelines from './components/ClinicalPracticeGuidelines/clinical_practice_guidelines';
import PolicyInfo from './components/PolicyInfo/policy_info';
import { ChartBullet } from '@patternfly/react-charts';

// Anthem BlueCross (move to left)
// Patient Summary (move to right)

const App = () => {

  const [currentSection, setCurrentSection] = useState(0);

  const handleNextSection = () => {
    if (currentSection < 3) {
      setCurrentSection((prevSection) => (prevSection + 1))
    }
  }

  return (
    <ThemeProvider>
      <div className="app-container">
        <Header /> {/* Use the Header component */}
        <main className="app-main">
          <div className="content-container">
            <div className="left-section">
              <ProgressStepper>
                <ProgressStep variant={currentSection > 0 ? 'success' : 'info'}>Prior Auth</ProgressStep>
                <ProgressStep variant={currentSection > 1 ? 'success' : currentSection === 1 ? 'info' : 'pending'}>Patient data</ProgressStep>
                <ProgressStep variant={currentSection > 2 ? 'success' : currentSection === 2 ? 'info' : 'pending'}>Guidelines</ProgressStep>
                <ProgressStep variant={currentSection > 3 ? 'success' : currentSection === 3 ? 'info' : 'pending'}>Insurance</ProgressStep>
              </ProgressStepper>
              <PriorAuthRequest currentSection={currentSection} />
              <PatientData currentSection={currentSection} />
              <ClinicalPracticeGuidelines currentSection={currentSection} />
              <PolicyInfo currentSection={currentSection} />
            </div>
            <div className="right-section">
              <div className="right-item">
                {currentSection === 3 && (
                  <Card isRounded>
                    <CardHeader>Rating Score - 60%</CardHeader>
                    <CardBody>
                      <ChartBullet
                        ariaDesc="Storage capacity"
                        ariaTitle="Bullet chart example"
                        comparativeWarningMeasureData={[{ name: 'Warning', y: 50 }]}
                        constrainToVisibleArea
                        height={150}
                        labels={({ datum }) => `${datum.name}: ${datum.y}`}
                        maxDomain={{ y: 100 }}
                        name="chart1"
                        primarySegmentedMeasureData={[{ name: 'Measure', y: 60 }]}
                        qualitativeRangeData={[{ name: 'Range', y: 50 }, { name: 'Range', y: 75 }]}
                        width={600}
                      />
                  <Flex spaceItems={{ default: 'columnGapSm' }} justifyContent={{ default: 'justifyContentCenter' }}>
                    <FlexItem>
                      <Button>Approve</Button>
                    </FlexItem>
                    <FlexItem>
                      <Button variant="tertiary">Decline</Button>
                    </FlexItem>
                  </Flex>
                    </CardBody>
                  </Card>
                )}

                {currentSection < 3 && (
                  <Button onClick={handleNextSection}>
                    {currentSection === 0 && 'Show patient info'}
                    {currentSection === 1 && 'Show guidelines'}
                    {currentSection === 2 && 'Show insurance'}
                  </Button>
                )}

                

                <PriorAuthSummary />
              </div>
            </div>
          </div>
        </main>
        <Divider /> {/* Place the divider here */}
        <Footer /> {/* Include the Footer here */}
      </div>
    </ThemeProvider>
  );
};

export default App;
