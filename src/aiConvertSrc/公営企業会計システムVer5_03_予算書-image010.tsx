import React from 'react';
import styled from '@emotion/styled';

type WorkOrderRequestFormProps = {
  onSubmit: (data: FormData) => void;
};

type FormData = {
  fiscalYear: string;
  reserveAmountCategory: string;
  number: number;
  amountUsed: string;
  dueDate: Date;
  memo: string;
};

const WorkOrderRequestForm: React.FC<WorkOrderRequestFormProps> = ({ onSubmit }) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data: FormData = {
      fiscalYear: form.fiscalYear.value,
      reserveAmountCategory: form.reserveAmountCategory.value,
      number: parseInt(form.number.value, 10),
      amountUsed: form.amountUsed.value,
      dueDate: form.dueDate.value,
      memo: form.memo.value,
    };
    onSubmit(data);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Title>予算仕訳リスト／仕訳科目別作成</Title>
      <CompanyInfo>
        行政市水道事業会計<br />
        料金課 管理係 管理係<br />
        令和02年12月23日
      </CompanyInfo>
      <Label>
        年度
        <Select name="fiscalYear" defaultValue="令和02">
          <option value="令和02">令和02</option>
        </Select>
      </Label>
      <Label>
        予算編成区分
        <Select name="reserveAmountCategory" defaultValue="決算見込">
          <option value="決算見込">決算見込</option>
        </Select>
      </Label>
      <Label>
        回数
        <Input type="number" name="number" defaultValue={1} min={1} />
      </Label>
      <Label>
        金額種別
        <Input type="text" name="amountUsed" defaultValue="見積要求" readOnly />
      </Label>
      <Label>
        仕訳科目 〜
        <Input type="date" name="dueDate" />
      </Label>
      <Label>
        仕訳科目
        <Input type="text" name="memo" />
      </Label>
      <ButtonGroup>
        <Button type="submit">OK</Button>
        <Button type="reset">クリア</Button>
        <Button type="button">終了</Button>
      </ButtonGroup>
    </Form>
  );
};

// Styles
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
`;

const CompanyInfo = styled.div`
  white-space: pre-wrap;
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: bold;
`;

const Select = styled.select`
  padding: 4px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Input = styled.input`
  padding: 4px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  max-width: 200px;

  &[readonly] {
    background-color: #f0f0f0;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 8px;
  justify-content: flex-end;
`;

const Button = styled.button`
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &[type='reset'],
  &[type='button'] {
    background-color: #6c757d;
  }
`;

// Example usage
const ExampleComponent: React.FC = () => {
  const handleSubmit = (data: FormData) => {
    console.log('Form submitted:', data);
  };

  return (
    <div>
      <h1>Work Order Request Form</h1>
      <WorkOrderRequestForm onSubmit={handleSubmit} />
    </div>
  );
};

export default ExampleComponent;