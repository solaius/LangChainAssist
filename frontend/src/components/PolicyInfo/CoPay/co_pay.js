// components/PolicyInfo/CoPay/copay.js

import React from 'react';
import { DescriptionList, DescriptionListDescription, DescriptionListGroup, DescriptionListTerm } from '@patternfly/react-core';
// import './co_pay.css';

const CoPay = () => {
  return (
    <DescriptionList>
      <DescriptionListGroup>
        <DescriptionListTerm>Procedure</DescriptionListTerm>
        <DescriptionListDescription>External Beam Radiation Therapy</DescriptionListDescription>
      </DescriptionListGroup>
      <DescriptionListGroup>
        <DescriptionListTerm>In-Network Provider</DescriptionListTerm>
        <DescriptionListDescription>$50 per session</DescriptionListDescription>
      </DescriptionListGroup>
      <DescriptionListGroup>
        <DescriptionListTerm>Out-of-Network Provider</DescriptionListTerm>
        <DescriptionListDescription>40% of allowed amount</DescriptionListDescription>
      </DescriptionListGroup>
      <DescriptionListGroup>
        <DescriptionListTerm>Estimated Total Co-Pay</DescriptionListTerm>
        <DescriptionListDescription>$300 for 6 sessions</DescriptionListDescription>
      </DescriptionListGroup>
      <DescriptionListGroup>
        <DescriptionListTerm>Additional Information</DescriptionListTerm>
        <DescriptionListDescription>The co-pay amount applies after the deductible has been met. Please refer to the policy document for specific details.</DescriptionListDescription>
      </DescriptionListGroup>
    </DescriptionList>
  );
};

export default CoPay;
