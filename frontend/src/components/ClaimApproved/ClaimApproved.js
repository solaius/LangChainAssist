// components/PatientData/patient_data.js

import React, { useState, useEffect } from 'react';
import { Spinner } from '@patternfly/react-core';
import approvedAnimation from '../../images/approved.mp4'
// import './patient_data.css';

const ClaimApproved = ({ currentSection }) => {

  const [isProcessing, setIsProcessing] = useState(true)

  useEffect(() => {
    setIsProcessing(true)

    const timer = setTimeout(() => {
      setIsProcessing(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [currentSection])

  return (
    <div>
      {isProcessing && (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Spinner />
        </div>
      )}
      {!isProcessing && (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: 64 }}>
          <h1 style={{ fontFamily: 'Red Hat Display', fontWeight: 600, fontSize: 24 }}>Approved</h1>
          <div style={{ color: '#707070' }}>You have successfully processed and approved Claim CL-2467802</div>
          <video autoPlay src={approvedAnimation} style={{ height: 256 }}></video>
        </div>
      )}
    </div>
  );
};

export default ClaimApproved;
