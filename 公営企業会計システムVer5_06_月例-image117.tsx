import React from 'react';
import styled from '@emotion/styled';

interface ConsumptionTaxFormProps {
  onSubmit: (data: ConsumptionTaxFormData) => void;
}

interface ConsumptionTaxFormData {
  period: {
    from: string;
    to: string;
  };
  taxSchedule: 'monthly' | 'bimonthly' | 'yearly';
  taxRate: number;
  collectMethod: 'inclusive' | 'exclusive' | 'segment';
  applySpecialTaxRate: boolean;
  carryOverTaxAmount: boolean;
  applySimplifiedTaxRate: boolean;
  specialTaxRate: number;
}

// Styled components
const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Label = styled.label`
  font-weight: bold;
`;

const Input = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Select = styled.select`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  margin-right: 8px;
`;

const PercentInput = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Button = styled.button`
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const ConsumptionTaxForm: React.FC<ConsumptionTaxFormProps> = ({ onSubmit }) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Collect form data and call onSubmit with the data
    const formData: ConsumptionTaxFormData = {
      period: {
        from: '2022-07-01',
        to: '2023-06-30',
      },
      taxSchedule: 'monthly',
      taxRate: 10,
      collectMethod: 'inclusive',
      applySpecialTaxRate: false,
      carryOverTaxAmount: false,
      applySimplifiedTaxRate: false,
      specialTaxRate: 0,
    };
    onSubmit(formData);
  };

  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <Label>課税期間</Label>
          <div>
            <Input type="text" defaultValue="令和05年07月" /> 〜 <Input type="text" defaultValue="令和06年07月" />
          </div>
          <div>
            <Input type="text" defaultValue="00000000" /> 〜 <Input type="text" defaultValue="99999999" />
          </div>
        </FormGroup>
        <FormGroup>
          <Label>作表区分</Label>
          <Select>
            <option value="monthly">月次</option>
            <option value="bimonthly">隔月</option>
            <option value="yearly">年間</option>
          </Select>
        </FormGroup>
        <FormGroup>
          <Label>税率</Label>
          <PercentInput>
            <Input type="number" defaultValue={10} />%
          </PercentInput>
        </FormGroup>
        <FormGroup>
          <Label>集計対象</Label>
          <Select>
            <option value="inclusive">全体</option>
            <option value="exclusive">ブロック</option>
            <option value="segment">セグメント</option>
          </Select>
        </FormGroup>
        <FormGroup>
          <Label>
            <Checkbox />
            「課税標準額調整入力」で登録した伝票も出力する
          </Label>
          <Label>
            <Checkbox />
            「繰越のみ保存」のみの伝票を出力する
          </Label>
          <Label>
            <Checkbox />
            「適格請求書発行事業者」のみの伝票を出力する
          </Label>
          <Label>
            <Checkbox />
            「適格請求書発行事業者以外」のみの伝票を出力する
          </Label>
          <PercentInput>
            <Input type="number" defaultValue={0} />%
          </PercentInput>
        </FormGroup>
        <Button type="submit">終了</Button>
      </form>
    </FormContainer>
  );
};

// Example usage
const ExampleConsumptionTaxForm = () => {
  const handleSubmit = (data: ConsumptionTaxFormData) => {
    console.log('Form submitted with data:', data);
  };

  return <ConsumptionTaxForm onSubmit={handleSubmit} />;
};

export default ExampleConsumptionTaxForm;