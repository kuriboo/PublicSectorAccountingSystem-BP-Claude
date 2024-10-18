import React from 'react';
import styled from '@emotion/styled';

interface InputFormProps {
  heading1: string;
  data1: string;
  heading2: string;
  data2: string;
  heading3: string;
  data3: string;
  taxRate: number;
  isTaxIncluded: boolean;
  beforeTax: number;
  afterTax: number;
  specialTax: number;
  annualSchedule: {
    nenmatsu: number;
    bonusMonth1: number;
    bonusMonth2: number;
  };
}

const InputForm: React.FC<InputFormProps> = ({
  heading1,
  data1,
  heading2,
  data2, 
  heading3,
  data3,
  taxRate,
  isTaxIncluded,
  beforeTax,
  afterTax,
  specialTax,
  annualSchedule,
}) => {
  return (
    <FormWrapper>
      <FormRow>
        <Label>{heading1}</Label>
        <Data>{data1}</Data>
      </FormRow>
      <FormRow>
        <Label>{heading2}</Label>
        <Data>{data2}</Data>
      </FormRow>
      <FormRow>
        <Label>{heading3}</Label>
        <Data>{data3}</Data>
      </FormRow>
      <FormRow>
        <Label>税区分</Label>
        <TaxRateInput 
          type="number"
          value={taxRate}
          min={0} 
          max={100}
          step={1}
        />
        <span>%</span>
        <input
          type="checkbox" 
          checked={isTaxIncluded}
        />
        <span>内消費税額</span>
      </FormRow>
      <FormRow>
        <Label>精算金額</Label>
        <BeforeTaxInput
          type="number"
          value={beforeTax}
        />
        <Label>内消費税額</Label>
        <AfterTaxInput
          type="number" 
          value={afterTax}
        />
        <Label>特定収入</Label>
        <SpecialTaxInput
          type="number"
          value={specialTax} 
        />
      </FormRow>
      <FormRow>
        <Label>年収対応予算科目</Label>
        <AnnualScheduleBar>
          <BarSegment style={{ flexGrow: annualSchedule.nenmatsu }}>年度</BarSegment>
          <BarSegment style={{ flexGrow: annualSchedule.bonusMonth1 }}>{heading1}</BarSegment>
          <BarSegment style={{ flexGrow: annualSchedule.bonusMonth2 }}>{heading2}</BarSegment>
        </AnnualScheduleBar>
      </FormRow>
      <ButtonRow>
        <Button>OK</Button>
        <Button>クリア</Button>
        <Button>キャンセル</Button>
      </ButtonRow>
    </FormWrapper>
  );
};

// Sample data for preview
const sampleData: InputFormProps = {
  heading1: '節',
  data1: '001 水道料金',
  heading2: '細節',
  data2: '001 水道料金',
  heading3: '明細',  
  data3: '0010 水道料金',
  taxRate: 8,
  isTaxIncluded: false,
  beforeTax: 1000,
  afterTax: 80, 
  specialTax: 0,
  annualSchedule: {
    nenmatsu: 3,
    bonusMonth1: 1,
    bonusMonth2: 1,  
  },
};

const PreviewInputForm: React.FC = () => {
  return <InputForm {...sampleData} />;  
};

export default PreviewInputForm;

// Styled components
const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 15px;
  background-color: #f0f0f0;
  font-size: 14px;
`;

const FormRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Label = styled.label`
  width: 100px;
`;

const Data = styled.div`
  font-weight: bold;
`;

const TaxRateInput = styled.input`
  width: 40px;
`;

const BeforeTaxInput = styled.input`
  width: 80px;
`;

const AfterTaxInput = styled.input`  
  width: 80px;
`;

const SpecialTaxInput = styled.input`
  width: 80px;  
`;

const AnnualScheduleBar = styled.div`
  display: flex;
  width: 150px;
  height: 20px;
  border: 1px solid gray;
`;

const BarSegment = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: #ccc;
  border-right: 1px solid white;
  box-sizing: border-box;
  
  &:last-child {
    border-right: none;
  }
`;

const ButtonRow = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 15px;
`;

const Button = styled.button`
  padding: 5px 10px;
`;