import React from 'react';
import styled from '@emotion/styled';

type CashFlowFormProps = {
  amount?: number;
  itemName?: string;
  cfCategory?: 'income' | 'expense';
  accountingCategory?: 'cash' | 'creditCard' | 'other';
  politicalDivision?: 'tokyoTo' | 'other';
  indent?: number;
  memo?: string;
  onSubmit: (formData: CashFlowFormData) => void;
};

type CashFlowFormData = {
  amount: number;
  itemName: string;
  cfCategory: 'income' | 'expense';
  accountingCategory: 'cash' | 'creditCard' | 'other';
  politicalDivision: 'tokyoTo' | 'other';
  indent: number;
  memo: string;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 5px;
  width: 100%;
  box-sizing: border-box;

  @media (min-width: 768px) {
    width: 400px;
  }
`;

const Label = styled.label`
  font-weight: bold;
`;

const Input = styled.input`
  padding: 5px;
  border-radius: 3px;
  border: 1px solid #ccc;
`;

const Select = styled.select`
  padding: 5px;
  border-radius: 3px;
  border: 1px solid #ccc;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 8px 16px;
  border-radius: 3px;
  border: none;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    opacity: 0.8;
  }
`;

const CashFlowForm: React.FC<CashFlowFormProps> = ({
  amount = 400,
  itemName = '',
  cfCategory = 'expense',
  accountingCategory = 'cash',
  politicalDivision = 'tokyoTo',
  indent = 0,
  memo = '',
  onSubmit,
}) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData: CashFlowFormData = {
      amount: amount || 0,
      itemName: itemName || '',
      cfCategory: cfCategory || 'expense',
      accountingCategory: accountingCategory || 'cash',
      politicalDivision: politicalDivision || 'tokyoTo',
      indent: indent || 0,
      memo: memo || '',
    };
    onSubmit(formData);
  };

  return (
    <Container>
      <Label>集計番号</Label>
      <Input type="number" value={amount} readOnly />

      <Label>項目名称1</Label>
      <Input type="text" defaultValue={itemName} required />
      
      <Label>CF区分</Label>
      <Select defaultValue={cfCategory}>
        <option value="income">業務活動によるキャッシュ・フロー</option>
        <option value="expense">業務活動によるキャッシュ・フロー</option>
      </Select>

      <Label>金額CFF区分</Label>
      <Select defaultValue={accountingCategory}>
        <option value="cash">現金同等物</option>
        <option value="creditCard">現金同等物でないもの</option>
      </Select>

      <Label>改行区分</Label>
      <Select defaultValue={politicalDivision}>
        <option value="tokyoTo">行政区分</option>
      </Select>

      <Label>インデント</Label>
      <Input type="number" defaultValue={indent} min={0} required />

      <Label>備考出力無し</Label>
      <Input type="text" defaultValue={memo} />

      <ButtonGroup>
        <Button type="submit">OK</Button>
        <Button type="reset">クリア</Button>
        <Button type="button">キャンセル</Button>
      </ButtonGroup>
    </Container>
  );
};

// Usage example
const App: React.FC = () => {
  const handleSubmit = (formData: CashFlowFormData) => {
    console.log(formData);
    // Handle form submission
  };

  return (
    <div>
      <h1>Cash Flow Form</h1>
      <CashFlowForm onSubmit={handleSubmit} />
    </div>
  );
};

export default App;