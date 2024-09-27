// components/PolicyInfo/policy_info.js

import React, { useState, useEffect } from 'react';
import Deductible from './Deductible/deductible';
import CoPay from './CoPay/co_pay';
import PolicyCoverage from './PolicyCoverage/policy_coverage';
import { Accordion, AccordionItem, AccordionContent, AccordionToggle, ExpandableSection, Grid, GridItem, Text, TextVariants, Spinner } from '@patternfly/react-core';
// import './policy_info.css';

const PolicyInfo = ({ currentSection }) => {

  const [isProcessing, setIsProcessing] = useState(true)

  const [expandedSections, setExpandedSections] = useState({});

  const onToggle = (section) => {
    setExpandedSections(prevState => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  const [isPolicyCoverageExpanded, setIsPolicyCoverageExpanded] = React.useState(false);
  const onTogglePolicyCoverage = (_event, isPolicyCoverageExpanded) => {
    setIsPolicyCoverageExpanded(isPolicyCoverageExpanded);
  };

  useEffect(() => {
    setExpandedSections(currentSection === 3 ? {
      policyInfo: true,
      deductible: true,
      copay: true,
      policyCoverage: true,
    } : {
      policyInfo: false,
      deductible: false,
      copay: false,
      policyCoverage: false,
    })

    if (currentSection === 3) {
      setIsProcessing(true)

      const timer = setTimeout(() => {
        setIsProcessing(false)
      }, 3000)

      return () => clearTimeout(timer)
    }
  }, [currentSection])

  return (
    <Accordion asDefinitionList>
      <AccordionItem>
        <AccordionToggle
          onClick={() => onToggle('policyInfo')}
          isExpanded={expandedSections.policyInfo}
          id="toggle-policy-info"
          className="custom-accordion-toggle"
        >
          Anthem® BlueCross
        </AccordionToggle>
        <AccordionContent isHidden={!expandedSections.policyInfo} style={{ color: '#151515', fontSize: 16 }}>
          {isProcessing && (
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Spinner />
            </div>
          )}
          {!isProcessing && (
            <div className="policy-info-container">
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
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default PolicyInfo;
