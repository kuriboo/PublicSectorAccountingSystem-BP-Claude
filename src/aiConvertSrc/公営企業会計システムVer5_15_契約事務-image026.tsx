import React from 'react';
import styled from '@emotion/styled';

type TaxWithholdingFormProps = {
  area: string;
  taxRate: number;
  supportAmount: number;
  supportAmountSpouse: number;
  deductionAmount: number;
  rentAmount: number;
  rentDeductionAmount: number;
  mortgageAmount: number;
  mortgageDeductionAmount: number;
  otherDeductionAmount: number;
  withholding: number;
  startMonth: number;
  startYear: number;
  endMonth: number;
  endYear: number;
  withholdingRate: number;
};

const FormWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f7f7f7;
  font-size: 14px;

  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const FormSection = styled.div`
  display: grid;
  gap: 5px;
`;

const FormLabel = styled.label`
  font-weight: bold;
`;

const FormInput = styled.input`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
`;

const ButtonWrapper = styled.div`
  grid-column: 1 / -1;
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  
  &:hover {
    background-color: #0056b3;
  }
`;

const TaxWithholdingForm: React.FC<TaxWithholdingFormProps> = ({
  area,
  taxRate,
  supportAmount,
  supportAmountSpouse,
  deductionAmount,
  rentAmount,
  rentDeductionAmount,
  mortgageAmount,
  mortgageDeductionAmount,
  otherDeductionAmount,
  withholding,
  startMonth,
  startYear,
  endMonth,
  endYear,
  withholdingRate,
}) => {
  return (
    <FormWrapper>
      <FormSection>
        <FormLabel>設計金額</FormLabel>
        <FormInput type="number" value={supportAmount} readOnly />
        <FormInput type="number" value={supportAmountSpouse} readOnly />
      </FormSection>
      <FormSection>
        <FormLabel>設計単価金額</FormLabel>
        <FormInput type="number" value={0} readOnly />
        <FormInput type="number" value={0} readOnly />
      </FormSection>
      <FormSection>
        <FormLabel>予定価格</FormLabel>
        <FormInput type="number" value={0} readOnly />
        <FormInput type="number" value={0} readOnly />
      </FormSection>
      <FormSection>
        <FormLabel>最低制限価格</FormLabel>
        <FormInput type="number" value={0} readOnly />
        <FormInput type="number" value={0} readOnly />
      </FormSection>
      <FormSection>
        <FormLabel>消費税額</FormLabel>
        <FormInput type="number" value={0} readOnly />
        <FormInput type="number" value={0} readOnly />
      </FormSection>
      <FormSection>
        <FormLabel>消費税額</FormLabel>
        <FormInput type="number" value={0} readOnly />
        <FormInput type="number" value={0} readOnly />
      </FormSection>
      <FormSection>
        <FormLabel>着手年月日</FormLabel>
        <FormInput type="number" value={startYear} readOnly />
        <FormLabel>期間</FormLabel>
        <FormInput type="number" value={92} readOnly />
      </FormSection>
      <FormSection>
        <FormLabel>完了予定年月日</FormLabel>
        <FormInput type="number" value={endYear} readOnly />
        <FormLabel>契約保証率</FormLabel>
        <FormInput type="number" value={0} readOnly />
      </FormSection>
      <ButtonWrapper>
        <Button>OK</Button>
        <Button>クリア</Button>
        <Button>キャンセル</Button>
      </ButtonWrapper>
    </FormWrapper>
  );
};

// サンプルデータを用いた使用例
const SampleTaxWithholdingForm = () => {
  const sampleData: TaxWithholdingFormProps = {
    area: '東京',
    taxRate: 0.1,
    supportAmount: 3218200,
    supportAmountSpouse: 2979817,
    deductionAmount: 238383,
    rentAmount: 0,
    rentDeductionAmount: 0,
    mortgageAmount: 0,
    mortgageDeductionAmount: 0, 
    otherDeductionAmount: 0,
    withholding: 0,
    startMonth: 10,
    startYear: 2023,
    endMonth: 12,
    endYear: 2023,
    withholdingRate: 0,
  };

  return <TaxWithholdingForm {...sampleData} />;
};

export default TaxWithholdingForm;