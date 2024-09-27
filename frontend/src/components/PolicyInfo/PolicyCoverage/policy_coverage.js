// components/PolicyInfo/PolicyCoverage/policy_coverage.js

import React, { useState } from 'react';
import { Accordion, AccordionItem, AccordionContent, AccordionToggle } from '@patternfly/react-core';
// import './policy_coverage.css';

const PolicyCoverage = () => {
  const [expandedSections, setExpandedSections] = useState({});

  const onToggle = (section) => {
    setExpandedSections(prevState => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  return (
    <div className="policy-coverage-container">
      <Accordion asDefinitionList>
        <AccordionItem>
          <AccordionToggle
            onClick={() => onToggle('eligibility')}
            isExpanded={expandedSections.eligibility}
            id="toggle-eligibility"
            className="custom-accordion-toggle"
          >
            Eligibility for Coverage
          </AccordionToggle>
          <AccordionContent isHidden={!expandedSections.eligibility}>
            <ul>
              <li>Mammography, diagnostic (212) is a preventive care service, covered at no cost.</li>
              <li>Stereotactic biopsy, breast (8332) is a diagnostic procedure and should be covered, but specific coverage may depend on the policy's terms.</li>
              <li>Mastectomy, simple (3832) is a surgical procedure for breast cancer, which may require prior authorization.</li>
              <li>Radiation therapy, external, to breast (32) is a treatment for cancer and may require prior authorization.</li>
              <li>Chemotherapy, single agent (966) and Chemotherapy, combination therapy (159) are treatments for cancer and may require prior authorization.</li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem>
          <AccordionToggle
            onClick={() => onToggle('costSharing')}
            isExpanded={expandedSections.costSharing}
            id="toggle-cost-sharing"
            className="custom-accordion-toggle"
          >
            Deductibles and Cost-Sharing
          </AccordionToggle>
          <AccordionContent isHidden={!expandedSections.costSharing}>
            <p>
              The policy document does not provide specific information about the deductibles and cost-sharing for the procedures mentioned.
              However, the policy generally covers 100% of costs for in-network providers after the deductible is met.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem>
          <AccordionToggle
            onClick={() => onToggle('medicalNecessity')}
            isExpanded={expandedSections.medicalNecessity}
            id="toggle-medical-necessity"
            className="custom-accordion-toggle"
          >
            Medical Necessity and Documentation
          </AccordionToggle>
          <AccordionContent isHidden={!expandedSections.medicalNecessity}>
            <p>
              The patient's diagnosis and procedures are consistent with breast cancer treatment. The healthcare provider should provide necessary documentation,
              including diagnosis, treatment plans, and referrals, to support the prior authorization requests.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem>
          <AccordionToggle
            onClick={() => onToggle('limitations')}
            isExpanded={expandedSections.limitations}
            id="toggle-limitations"
            className="custom-accordion-toggle"
          >
            Policy-Specific Limitations and Exclusions
          </AccordionToggle>
          <AccordionContent isHidden={!expandedSections.limitations}>
            <p>
              The policy does not provide specific limitations or exclusions for the mentioned procedures. However, the patient should be aware of potential frequency limits on services,
              non-covered services, or alternative treatments covered under the plan.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem>
          <AccordionToggle
            onClick={() => onToggle('priorAuthorization')}
            isExpanded={expandedSections.priorAuthorization}
            id="toggle-prior-authorization"
            className="custom-accordion-toggle"
          >
            Prior Authorization Process Guidance
          </AccordionToggle>
          <AccordionContent isHidden={!expandedSections.priorAuthorization}>
            <p>
              The healthcare provider should submit the prior authorization requests with the required documentation, forms, and contact points for processing.
              The timeline for expected decisions and potential delays or additional reviews may vary.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem>
          <AccordionToggle
            onClick={() => onToggle('denialsAppeals')}
            isExpanded={expandedSections.denialsAppeals}
            id="toggle-denials-appeals"
            className="custom-accordion-toggle"
          >
            Denials and Appeals Information
          </AccordionToggle>
          <AccordionContent isHidden={!expandedSections.denialsAppeals}>
            <p>
              If a prior authorization request is denied, the reasons will be based on policy terms, and guidance on the appeal process will be provided.
              The healthcare provider or patient should follow the specific steps to appeal a denial.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem>
          <AccordionToggle
            onClick={() => onToggle('compliance')}
            isExpanded={expandedSections.compliance}
            id="toggle-compliance"
            className="custom-accordion-toggle"
          >
            Compliance and Regulatory Considerations
          </AccordionToggle>
          <AccordionContent isHidden={!expandedSections.compliance}>
            <p>
              All decisions should align with applicable regulations and legal requirements governing healthcare coverage and prior authorization processes.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem>
          <AccordionToggle
            onClick={() => onToggle('internalResources')}
            isExpanded={expandedSections.internalResources}
            id="toggle-internal-resources"
            className="custom-accordion-toggle"
          >
            Referral to Internal Resources
          </AccordionToggle>
          <AccordionContent isHidden={!expandedSections.internalResources}>
            <p>
              If additional support is needed, the team can refer to senior decision-makers or legal and compliance teams for further review of the authorization request.
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default PolicyCoverage;
