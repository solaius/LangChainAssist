// src/app.js

import React from 'react';
import { ThemeProvider } from './theme-context';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import PriorAuthRequest from './components/PriorAuthRequest/prior_auth_request';
import PriorAuthSummary from './components/PriorAuthSummary/prior_auth_summary';
import PatientData from './components/PatientData/patient_data';
import { Divider } from '@patternfly/react-core';
import '@patternfly/react-core/dist/styles/base.css';
import './app.css'; // Import the CSS file
import ClinicalPracticeGuidelines from './components/ClinicalPracticeGuidelines/clinical_practice_guidelines';
import PolicyInfo from './components/PolicyInfo/policy_info';


const App = () => {
  return (
    <ThemeProvider>
      <div className="app-container">
        <Header /> {/* Use the Header component */}
        <main className="app-main">
          <div className="content-container">
            <div className="left-section">
              <PriorAuthRequest />
              <PriorAuthSummary />
              <PatientData />
              <ClinicalPracticeGuidelines />
            </div>
            <div className="right-section">
              <div className="right-item">
                <PolicyInfo />
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
