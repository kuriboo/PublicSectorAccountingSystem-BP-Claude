import React from 'react';
import styled from '@emotion/styled';

type DentalTreatmentStatementProps = {
  patientName: string;
  patientBirthDate: string;
  insuranceType: string;
  treatments: {
    date: string;
    name: string;
    points: number;
    copayment: number;
  }[];
  totalPoints: number;
  totalCopayment: number;
  doctorName: string;
  doctorLicenseNumber: string;
};

const DentalTreatmentStatement: React.FC<DentalTreatmentStatementProps> = ({
  patientName,
  patientBirthDate,
  insuranceType,
  treatments,
  totalPoints,
  totalCopayment,
  doctorName,
  doctorLicenseNumber,
}) => {
  return (
    <StatementContainer>
      <StatementHeader>振替伝票（単票）</StatementHeader>
      <PatientInfo>
        <PatientName>{patientName || '-'}</PatientName>
        <PatientBirthDate>{patientBirthDate || '-'}</PatientBirthDate>
        <InsuranceType>{insuranceType || '-'}</InsuranceType>
      </PatientInfo>
      <TreatmentTable>
        <thead>
          <tr>
            <StatementHeaderCell>診療年月日</StatementHeaderCell>
            <StatementHeaderCell>傷病名称</StatementHeaderCell>
            <StatementHeaderCell>点数</StatementHeaderCell>
            <StatementHeaderCell>一部負担金</StatementHeaderCell>
          </tr>
        </thead>
        <tbody>
          {treatments.map((treatment, index) => (
            <tr key={index}>
              <StatementBodyCell>{treatment.date}</StatementBodyCell>
              <StatementBodyCell>{treatment.name}</StatementBodyCell>
              <StatementBodyCell>{treatment.points}</StatementBodyCell>
              <StatementBodyCell>{treatment.copayment}</StatementBodyCell>
            </tr>
          ))}
        </tbody>
      </TreatmentTable>
      <TotalRow>
        <TotalLabel>金額</TotalLabel>
        <TotalPoints>{totalPoints || '-'}</TotalPoints>
        <TotalCopayment>{totalCopayment || '-'}</TotalCopayment>
      </TotalRow>
      <DoctorInfo>
        <DoctorName>{doctorName || '-'}</DoctorName>
        <DoctorLicenseNumber>{doctorLicenseNumber || '-'}</DoctorLicenseNumber>
      </DoctorInfo>
    </StatementContainer>
  );
};

// Sample data for demonstration
const sampleData: DentalTreatmentStatementProps = {
  patientName: '田中太郎',
  patientBirthDate: '平成元年8月27日生',
  insuranceType: '社会保険 国民健康保険',
  treatments: [
    { date: '2/10', name: '処置', points: 200, copayment: 600 },
    { date: '2/17', name: '補綴', points: 500, copayment: 1500 },
  ],
  totalPoints: 1000000,
  totalCopayment: 1000000,
  doctorName: '山田花子',
  doctorLicenseNumber: '1234567890',
};

const SampleDentalTreatmentStatement: React.FC = () => {
  return <DentalTreatmentStatement {...sampleData} />;
};

// Styled components
const StatementContainer = styled.div`
  font-family: Arial, sans-serif;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;

  @media (max-width: 600px) {
    padding: 10px;
  }
`;

const StatementHeader = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;

const PatientInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const PatientName = styled.div``;

const PatientBirthDate = styled.div``;

const InsuranceType = styled.div``;

const TreatmentTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;

  th,
  td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: center;
  }

  th {
    background-color: #f2f2f2;
  }
`;

const StatementHeaderCell = styled.th``;

const StatementBodyCell = styled.td``;

const TotalRow = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 20px;
`;

const TotalLabel = styled.div`
  margin-right: 10px;
`;

const TotalPoints = styled.div`
  margin-right: 10px;
`;

const TotalCopayment = styled.div``;

const DoctorInfo = styled.div`
  text-align: right;
`;

const DoctorName = styled.div``;

const DoctorLicenseNumber = styled.div``;

export default SampleDentalTreatmentStatement;