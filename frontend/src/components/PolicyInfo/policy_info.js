// components/PolicyInfo/policy_info.js

import React, { useState, useEffect } from 'react';
import Deductible from './Deductible/deductible';
import CoPay from './CoPay/co_pay';
import PolicyCoverage from './PolicyCoverage/policy_coverage';
import { Accordion, AccordionItem, AccordionContent, AccordionToggle } from '@patternfly/react-core';
import './policy_info.css';

const PolicyInfo = ({ currentSection }) => {
  const [expandedSections, setExpandedSections] = useState({});

  const onToggle = (section) => {
    setExpandedSections(prevState => ({
      ...prevState,
      [section]: !prevState[section],
    }));
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
        <AccordionContent isHidden={!expandedSections.policyInfo}>
          <div className="policy-info-container">
            <div className="policy-header">
              <h2>Policy Number: ABC123456789</h2>
            </div>
            <Accordion asDefinitionList>
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
                  <Deductible />
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
            </Accordion>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default PolicyInfo;
