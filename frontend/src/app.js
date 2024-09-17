// src/app.js

import React from 'react';
import { ThemeProvider } from './theme-context';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import PriorAuthRequest from './components/PriorAuthRequest/prior_auth_request';
import { Divider } from '@patternfly/react-core';
import '@patternfly/react-core/dist/styles/base.css';
import './app.css'; // Import the CSS file

const App = () => {
  return (
    <ThemeProvider>
      <div className="app-container">
        <Header /> {/* Use the Header component */}
        <main className="app-main">
          <Divider />
          <div className="content-container">
            <div className="left-section">
              <PriorAuthRequest /> {/* Only include the component */}
            </div>
            <div className="right-section">
              <div className="right-item">
                <h2>Patient Data</h2>
                {/* Content for Patient Data */}
              </div>
              <div className="right-item">
                <h2>Clinical Practice Guidelines</h2>
                {/* Content for Clinical Practice Guidelines */}
              </div>
              <div className="right-item">
                <h2>Policy Coverage</h2>
                {/* Content for Policy Coverage */}
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
