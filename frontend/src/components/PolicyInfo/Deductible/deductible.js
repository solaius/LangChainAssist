// components/PolicyInfo/Deductible/deductible.js

import { DescriptionList, DescriptionListDescription, DescriptionListGroup, DescriptionListTerm } from '@patternfly/react-core';
import React from 'react';
// import './deductible.css';

const Deductible = () => {
  return (
    <DescriptionList>
      <DescriptionListGroup>
        <DescriptionListTerm>Annual Deductible</DescriptionListTerm>
        <DescriptionListDescription>$3,000 per person / $6,000 per family (In-Network)</DescriptionListDescription>
      </DescriptionListGroup>
      <DescriptionListGroup>
        <DescriptionListTerm>Out-of-Network Deductible</DescriptionListTerm>
        <DescriptionListDescription>$3,500 per person / $7,000 per family</DescriptionListDescription>
      </DescriptionListGroup>
      <DescriptionListGroup>
        <DescriptionListTerm>Current Status</DescriptionListTerm>
        <DescriptionListDescription>$1,200 met of $3,000 (In-Network)</DescriptionListDescription>
      </DescriptionListGroup>
      <DescriptionListGroup>
        <DescriptionListTerm>Additional Information</DescriptionListTerm>
        <DescriptionListDescription>The deductible applies to most services, including the requested External Beam Radiation Therapy. Once the deductible is met, co-pays and coinsurance apply.</DescriptionListDescription>
      </DescriptionListGroup>
    </DescriptionList>
  );
};

export default Deductible;
