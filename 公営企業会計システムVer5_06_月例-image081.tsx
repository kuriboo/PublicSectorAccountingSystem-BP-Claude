import React from 'react';
import styled from '@emotion/styled';

interface TaxWithholdingFormProps {
  averageNumber?: number;
  filingDate?: string;
  taxAmount?: number;
  taxAmountWithheld?: number;
  consumptionTaxAmount?: number;
  onSubmit?: () => void;
  onCancel?: () => void;
}

const TaxWithholdingForm: React.FC<TaxWithholdingFormProps> = ({
  averageNumber = 547,
  filingDate = '令和01年12月17日',
  taxAmount = 1920,
  taxAmountWithheld = 1920,
  consumptionTaxAmount = 0,
  onSubmit,
  onCancel,
}) => {
  return (
    <Container>
      <Title>消費税仕訳伝票選択</Title>
      <Row>
        <FieldTitle>平成31</FieldTitle>
        <FieldValue>{averageNumber}</FieldValue>
      </Row>
      <Row>
        <FieldTitle>伝票日付</FieldTitle>
        <FieldValue>{filingDate}</FieldValue>
      </Row>
      <Row>
        <FieldTitle>摘要</FieldTitle>
        <FieldValue>{averageNumber}</FieldValue>
      </Row>
      <Row>
        <FieldTitle>税込金額</FieldTitle>
        <FieldValue>{taxAmount.toLocaleString()}</FieldValue>
      </Row>
      <Row>
        <FieldTitle>税抜金額</FieldTitle>
        <FieldValue>{taxAmountWithheld.toLocaleString()}</FieldValue>
      </Row>
      <Row>
        <FieldTitle>消費税額</FieldTitle>
        <FieldValue>{consumptionTaxAmount.toLocaleString()}</FieldValue>
      </Row>
      <Row>
        <Checkbox type="checkbox" id="transfer-consumption-tax" />
        <CheckboxLabel htmlFor="transfer-consumption-tax">
          特定課税仕入の返還伝票
        </CheckboxLabel>
      </Row>
      <Row>
        <Radio type="radio" id="deduction" name="tax-category" />
        <RadioLabel htmlFor="deduction">貸借区分 ・ 借方</RadioLabel>
        <Radio type="radio" id="addition" name="tax-category" />
        <RadioLabel htmlFor="addition">貸方</RadioLabel>
      </Row>
      <ButtonContainer>
        <Button onClick={onSubmit}>OK</Button>
        <Button onClick={onCancel}>クリア</Button>
        <Button>キャンセル</Button>
      </ButtonContainer>
    </Container>
  );
};

// Sample usage
const SampleUsage: React.FC = () => {
  const handleSubmit = () => {
    console.log('Submitted');
  };

  const handleCancel = () => {
    console.log('Cancelled');
  };

  return (
    <TaxWithholdingForm
      onSubmit={handleSubmit}
      onCancel={handleCancel}
    />
  );
};

// Styled components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-family: Arial, sans-serif;

  @media (min-width: 768px) {
    max-width: 500px;
    margin: 0 auto;
  }
`;

const Title = styled.h2`
  margin: 0 0 16px;
  font-size: 20px;
  text-align: center;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

const FieldTitle = styled.span`
  flex: 1;
  font-weight: bold;
`;

const FieldValue = styled.span`
  flex: 2;
`;

const Checkbox = styled.input`
  margin-right: 8px;
`;

const CheckboxLabel = styled.label`
  font-size: 14px;
`;

const Radio = styled.input`
  margin-right: 8px;
`;

const RadioLabel = styled.label`
  margin-right: 16px;
  font-size: 14px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 16px;
`;

const Button = styled.button`
  margin-left: 8px;
  padding: 8px 16px;
  font-size: 14px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export default TaxWithholdingForm;