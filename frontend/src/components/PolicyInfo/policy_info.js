// components/PolicyInfo/policy_info.js

import React, { useState, useEffect } from 'react';
import Deductible from './Deductible/deductible';
import CoPay from './CoPay/co_pay';
import PolicyCoverage from './PolicyCoverage/policy_coverage';
import { ExpandableSection, Grid, GridItem, Text, TextVariants, Spinner, Popover, Button } from '@patternfly/react-core';
import InfoCircleIcon from '@patternfly/react-icons/dist/esm/icons/info-circle-icon';
import LogoNeo4J from '../../images/neo4j-logo_color.png'
// import './policy_info.css';

const PolicyInfo = ({ currentSection }) => {

  const [isProcessing, setIsProcessing] = useState(true)

  const [isPolicyCoverageExpanded, setIsPolicyCoverageExpanded] = React.useState(false);
  const onTogglePolicyCoverage = (_event, isPolicyCoverageExpanded) => {
    setIsPolicyCoverageExpanded(isPolicyCoverageExpanded);
  };

  useEffect(() => {
    if (currentSection === 3) {
      setIsProcessing(true)

      const timer = setTimeout(() => {
        setIsProcessing(false)
      }, 3000)

      return () => clearTimeout(timer)
    }
  }, [currentSection])

  return (
    <div>
      <Text component={TextVariants.h1} style={{ display: 'flex', alignItems: 'center', marginBottom: 24, fontFamily: 'Red Hat Display', fontWeight: 600, fontSize: 24 }}>
        Insurance
        <Popover
          bodyContent={
            <div>
              <div><img src={LogoNeo4J} alt="Neo4J logo" style={{ height: 24 }} / ></div>
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
        <div className="policy-info-container">
          <Text component={TextVariants.h2} style={{ fontFamily: 'Red Hat Display', fontSize: 24, fontWeight: 500 }}>Anthem&reg; BlueCross</Text>
          <Text component={TextVariants.h2} style={{ marginBottom: 24, fontFamily: 'Red Hat Display', fontSize: 24, fontWeight: 500 }}>Policy Number: ABC123456789</Text>

          <Grid hasGutter>
            <GridItem span={6}>
              <Text component={TextVariants.h3} style={{ marginBottom: 16, fontFamily: 'Red Hat Display', fontSize: 18, fontWeight: 500 }}>Deductible</Text>
              <Deductible />
            </GridItem>
            <GridItem span={6}>
              <Text component={TextVariants.h3} style={{ marginBottom: 16, fontFamily: 'Red Hat Display', fontSize: 18, fontWeight: 500 }}>Co-Pay</Text>
              <CoPay />
            </GridItem>
          </Grid>

          <ExpandableSection toggleText="Policy coverage" onToggle={onTogglePolicyCoverage} isExpanded={isPolicyCoverageExpanded}>
            <PolicyCoverage />
          </ExpandableSection>
        </div>
      )}
    </div>
  );
};

export default PolicyInfo;
