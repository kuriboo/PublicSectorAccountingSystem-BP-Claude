Here's a Next.js + TypeScript component based on the provided image:

import React from 'react';
import styled from 'styled-components';

// Define the props interface for the component
interface TaxExemptionFormProps {
  period: string;
  startDate: string;
  endDate: string;
  taxExemptionType: string;
  taxExemptionReason: string;
}

// Define the styled components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 24px;
  background-color: #f0f0f0;
  border-radius: 8px;
  max-width: 400px;
  margin: 0 auto;

  @media (max-width: 480px) {
    padding: 16px;
  }
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 16px;
  text-align: center;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Label = styled.label`
  font-weight: bold;
`;

const Input = styled.input`
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

const Select = styled.select`
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

// Define the main component
const TaxExemptionForm: React.FC<TaxExemptionFormProps> = ({
  period,
  startDate,
  endDate,
  taxExemptionType,
  taxExemptionReason,
}) => {
  return (
    <Container>
      <Title>課税期間内入寮税額算出</Title>
      <Section>
        <Label>範囲指定</Label>
        <Input type="text" value={period} readOnly />
      </Section>
      <Section>
        <Label>計算方法</Label>
        <Select>
          <option value={taxExemptionType}>{taxExemptionType}</option>
        </Select>
        <Input type="text" value={taxExemptionReason} readOnly />
      </Section>
    </Container>
  );
};

// Example usage of the component
const App: React.FC = () => {
  const sampleData: TaxExemptionFormProps = {
    period: '課税期間　平成31年04月01日　〜　令和02年03月31日',
    startDate: '平成31年04月01日',
    endDate: '令和02年03月31日',
    taxExemptionType: '税額計算(仕入)',
    taxExemptionReason: '個別対応方式',
  };

  return (
    <div>
      <TaxExemptionForm {...sampleData} />
    </div>
  );
};

export default App;