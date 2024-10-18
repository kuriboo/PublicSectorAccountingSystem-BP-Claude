import React from 'react';
import styled from '@emotion/styled';

type PredictionFormProps = {
  onSubmit: (data: {
    fiscalYear: number;
    quarterDivision: 'yearly' | 'quarterly' | 'monthly';
    amountDivision: 'net' | 'gross';
    openDate: string;
    closeDate: string;
  }) => void;
};

const PredictionForm: React.FC<PredictionFormProps> = ({ onSubmit }) => {
  const currentYear = new Date().getFullYear();
  const fiscalYears = Array.from({ length: 5 }, (_, i) => currentYear - i);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = {
      fiscalYear: parseInt(form.fiscalYear.value),
      quarterDivision: form.quarterDivision.value as 'yearly' | 'quarterly' | 'monthly',
      amountDivision: form.amountDivision.value as 'net' | 'gross',
      openDate: form.openDate.value,
      closeDate: form.closeDate.value,
    };
    onSubmit(data);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label>事業年度</Label>
        <Select name="fiscalYear" defaultValue={currentYear}>
          {fiscalYears.map(year => (
            <option key={year} value={year}>
              {year}年度
            </option>
          ))}
        </Select>
      </FormGroup>
      <FormGroup>
        <Label>印字区分</Label>
        <RadioGroup>
          <Radio name="quarterDivision" value="yearly" defaultChecked>
            通年額
          </Radio>
          <Radio name="quarterDivision" value="quarterly">
            四半期
          </Radio>
          <Radio name="quarterDivision" value="monthly">
            月次
          </Radio>
        </RadioGroup>
      </FormGroup>
      <FormGroup>
        <Label>金額区分</Label>
        <RadioGroup>
          <Radio name="amountDivision" value="net" defaultChecked>
            純額
          </Radio>
          <Radio name="amountDivision" value="gross">
            総額
          </Radio>
        </RadioGroup>
      </FormGroup>
      <FormGroup>
        <Label>期間指定</Label>
        <RangeGroup>
          <RangeInput name="openDate" type="text" defaultValue="0000000" />
          <Rangemark>〜</Rangemark>
          <RangeInput name="closeDate" type="text" defaultValue="9999999" />
        </RangeGroup>
        <RangeGroup>
          <RangeInput name="openFiscalMonth" type="text" defaultValue="0000000" />
          <Rangemark>〜</Rangemark>
          <RangeInput name="closeFiscalMonth" type="text" defaultValue="9999999" />
        </RangeGroup>
      </FormGroup>
      <ButtonGroup>
        <SubmitButton type="submit">OK</SubmitButton>
        <Button type="button">クリア</Button>
        <Button type="button">終了</Button>
      </ButtonGroup>
    </Form>
  );
};

// Sample usage
const App: React.FC = () => {
  const handleSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div>
      <h1>事業別予算査定一覧表（当初）</h1>
      <PredictionForm onSubmit={handleSubmit} />
    </div>
  );
};

// Styles
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  background-color: #f0f0f0;
  border-radius: 4px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  font-weight: bold;
`;

const Select = styled.select`
  padding: 0.25rem;
`;

const RadioGroup = styled.div`
  display: flex;
  gap: 1rem;
`;

const Radio = styled.label`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

const RangeGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
`;

const RangeInput = styled.input`
  padding: 0.25rem;
  width: 7rem;
`;

const Rangemark = styled.span`
  font-weight: bold;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 1rem;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  background-color: #ccc;
  cursor: pointer;
`;

const SubmitButton = styled(Button)`
  background-color: #007bff;
  color: #fff;
`;

export default PredictionForm;