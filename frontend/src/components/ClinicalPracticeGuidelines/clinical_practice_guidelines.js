// components/ClinicalPracticeGuidelines/clinical_practice_guidelines.js

import React, { useState, useEffect } from 'react';
import { Text, TextVariants, List, ListItem, Spinner, Popover, Button } from '@patternfly/react-core';
import InfoCircleIcon from '@patternfly/react-icons/dist/esm/icons/info-circle-icon';
import LogoWeaviate from '../../images/weaviate-logo.png'
// import './clinical_practice_guidelines.css';

const ClinicalPracticeGuidelines = ({ currentSection }) => {

  const [isProcessing, setIsProcessing] = useState(true)

  useEffect(() => {
    if (currentSection === 2) {
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
        Clinical Practice Guidelines
        <Popover
          bodyContent={
            <div>
              <div><img src={LogoWeaviate} alt="Weaviated logo" style={{ height: 24 }} / ></div>
              <div><strong>Stored in Weaviate Vector Database</strong></div>
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
        <div className="clinical-practice-guidelines">
          <Text component={TextVariants.h2} style={{ marginBottom: 24, fontFamily: 'Red Hat Display', fontWeight: 500, fontSize: 20 }}>External Beam Radiation Therapy for Brain Metastasis</Text>
          <Text component={TextVariants.p} style={{ marginBottom: 16 }}>
            Based on the provided information, the patient is seeking External Beam Radiation Therapy for the treatment of brain metastasis secondary to breast cancer.
            The National Comprehensive Cancer Network (NCCN) Guidelines for Invasive Breast Cancer, Version 4.2024, do not directly address the use of radiation therapy for brain metastasis.
            However, the NCCN does provide guidelines for the management of brain metastasis in the context of other types of cancer.
          </Text>
          <Text component={TextVariants.p} style={{ marginBottom: 16 }}>
            According to the NCCN Guidelines for Central Nervous System (CNS) Malignancies, Version 4.2024, the recommended treatment for brain metastasis includes surgical resection,
            whole-brain radiation therapy (WBRT), stereotactic radiosurgery (SRS), or a combination of these approaches. The choice of treatment depends on various factors such as the number,
            size, and location of the metastases, the patient's performance status, and the presence of other comorbidities.
          </Text>
          <Text component={TextVariants.p} style={{ marginBottom: 32 }}>
            In the case of the patient, the presence of advanced-stage breast cancer and the need for radiation therapy to manage the progression of brain metastasis aligns with the standard approach
            for brain metastasis in advanced-stage cancer. The use of External Beam Radiation Therapy for managing brain metastasis is a reasonable and medically necessary treatment option in this case.
          </Text>
          <Text component={TextVariants.h3} style={{ marginBottom: 16, fontFamily: 'Red Hat Display', fontWeight: 500, fontSize: 18 }}>To further support the Prior Authorization claim, the following points can be emphasized:</Text>
          <List style={{ marginBottom: 32 }}>
            <ListItem>The patient's diagnosis of brain metastasis secondary to breast cancer necessitates the use of radiation therapy to manage the progression of the metastasis and alleviate symptoms such as neurological impairment and seizures.</ListItem>
            <ListItem>The use of External Beam Radiation Therapy for managing brain metastasis is a standard approach for advanced-stage cancer.</ListItem>
            <ListItem>The treatment plan provided by the requesting physician outlines the specific details of the proposed radiation therapy, including the start date, frequency, and duration.</ListItem>
            <ListItem>The patient's condition is expected to deteriorate without this treatment, leading to further complications.</ListItem>
            <ListItem>The Prior Authorization request is supported by the physician's note and recent imaging (CT/MRI).</ListItem>
          </List>
          <Text component={TextVariants.p} style={{ marginBottom: 16 }}>
            In conclusion, the use of External Beam Radiation Therapy for managing brain metastasis secondary to breast cancer is a reasonable and medically necessary treatment option in this case.
            The Prior Authorization request is supported by the NCCN Guidelines for CNS Malignancies, the treatment plan provided by the requesting physician, and the patient's diagnosis and condition.
          </Text>
          <Text component={TextVariants.h3} style={{ marginBottom: 16, fontFamily: 'Red Hat Display', fontWeight: 500, fontSize: 18 }}>Sources</Text>
          <a href="https://www.nccn.org/professionals/physician_gls/pdf/cns.pdf" target="_blank" rel="noopener noreferrer">NCCN Guidelines for CNS Malignancies</a>
        </div>
      )}
    </div>
  );
};

export default ClinicalPracticeGuidelines;
