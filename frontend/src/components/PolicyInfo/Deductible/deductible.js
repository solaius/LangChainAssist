// components/PolicyInfo/Deductible/deductible.js

import React from 'react';
import './deductible.css';

const Deductible = () => {
  return (
    <div className="deductible-container">
      <p><strong>Annual Deductible:</strong> $3,000 per person / $6,000 per family (In-Network)</p>
      <p><strong>Out-of-Network Deductible:</strong> $3,500 per person / $7,000 per family</p>
      <p><strong>Current Status:</strong> $1,200 met of $3,000 (In-Network)</p>
      <p><strong>Additional Information:</strong> The deductible applies to most services, including the requested External Beam Radiation Therapy. Once the deductible is met, co-pays and coinsurance apply.</p>
    </div>
  );
};

export default Deductible;
