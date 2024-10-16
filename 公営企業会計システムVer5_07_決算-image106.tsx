import React from 'react';
import styled from '@emotion/styled';

interface TaxWithholdingFormProps {
  company?: string;
  fiscalYear?: string;
  startDate?: string;
  endDate?: string;
  assessmentMethod?: string;
  individualNumber?: string;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
  background-color: #f0f0f0;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 16px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  width: 100%;
`;

const Label = styled.label`
  font-size: 16px;
  margin-bottom: 8px;
`;

const Input = styled.input`
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const TaxWithholdingForm: React.FC<TaxWithholdingFormProps> = ({
  company,
  fiscalYear,
  startDate,
  endDate,
  assessmentMethod,
  individualNumber,
}) => {
  return (
    <Container>
      <Title>税源泉徴収の計算表(計算表5)</Title>
      <FormGroup>
        <Label>範囲指定</Label>
        <div>
          会計年度：
          <Input type="text" value={fiscalYear || ''} readOnly />
        </div>
        <div>
          課税期間：
          <Input type="text" value={`${startDate || ''} ～ ${endDate || ''}`} readOnly />
        </div>
      </FormGroup>
      <FormGroup>
        <Label>計算方法</Label>
        <div>
          {assessmentMethod ? (
            <>
              仕入控除税額計算：
              <Input type="text" value={assessmentMethod} readOnly />
            </>
          ) : (
            <Input type="text" value="個別対応方式" readOnly />
          )}
        </div>
      </FormGroup>
    </Container>
  );
};

export default TaxWithholdingForm;

// Usage example
const App: React.FC = () => {
  return (
    <div>
      <h1>税源泉徴収の計算表</h1>
      <TaxWithholdingForm
        company="ABC株式会社"
        fiscalYear="令和02年01月24日"
        startDate="平成31年04月01日"
        endDate="令和02年03月31日"
        assessmentMethod="個別対応方式"
        individualNumber="1234567890"
      />
    </div>
  );
};