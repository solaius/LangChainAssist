// components/PolicyInfo/policy_info.js

import React, { useState, useEffect } from 'react';
import Deductible from './Deductible/deductible';
import CoPay from './CoPay/co_pay';
import PolicyCoverage from './PolicyCoverage/policy_coverage';
import { Accordion, AccordionItem, AccordionContent, AccordionToggle, ExpandableSection, Grid, GridItem, Text, TextVariants } from '@patternfly/react-core';
// import './policy_info.css';

const PolicyInfo = ({ currentSection }) => {
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

            {/* <Accordion asDefinitionList>
              <AccordionItem>
                <AccordionToggle
                  onClick={() => onToggle('deductible')}
                  isExpanded={expandedSections.deductible}
                  id="toggle-deductible"
                  className="custom-accordion-toggle"
                >
                  Deductible
                </AccordionToggle>
                <AccordionContent isHidden={!expandedSections.deductible}>

                </AccordionContent>
              </AccordionItem>

              <AccordionItem>
                <AccordionToggle
                  onClick={() => onToggle('copay')}
                  isExpanded={expandedSections.copay}
                  id="toggle-copay"
                  className="custom-accordion-toggle"
                >
                  Co-Pay
                </AccordionToggle>
                <AccordionContent isHidden={!expandedSections.copay}>
                  <CoPay />
                </AccordionContent>
              </AccordionItem>

              <AccordionItem>
                <AccordionToggle
                  onClick={() => onToggle('policyCoverage')}
                  isExpanded={expandedSections.policyCoverage}
                  id="toggle-policy-coverage"
                  className="custom-accordion-toggle"
                >
                  Policy Coverage
                </AccordionToggle>
                <AccordionContent isHidden={!expandedSections.policyCoverage}>
                  <PolicyCoverage />
                </AccordionContent>
              </AccordionItem>

            </Accordion> */}
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default PolicyInfo;
