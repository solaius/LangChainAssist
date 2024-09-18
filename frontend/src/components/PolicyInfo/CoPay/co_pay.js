// components/PolicyInfo/CoPay/copay.js

import React from 'react';
import './co_pay.css';

const CoPay = () => {
  return (
    <div className="copay-container">
      <h3>Co-Pay Information</h3>
      <p><strong>Procedure:</strong> External Beam Radiation Therapy</p>
      <p><strong>In-Network Provider:</strong> $50 per session</p>
      <p><strong>Out-of-Network Provider:</strong> 40% of allowed amount</p>
      <p><strong>Estimated Total Co-Pay:</strong> $300 for 6 sessions</p>
      <p><strong>Additional Information:</strong> The co-pay amount applies after the deductible has been met. Please refer to the policy document for specific details.</p>
    </div>
  );
};

export default CoPay;
