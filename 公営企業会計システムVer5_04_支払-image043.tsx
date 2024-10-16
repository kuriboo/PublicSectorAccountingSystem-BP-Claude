import React from 'react';
import styled from '@emotion/styled';

// 支出決定入力フォームのプロパティ型定義
type ExpenseInputFormProps = {
  expenseDate: string;
  setExpenseDate: (date: string) => void;
  expenseCategory: string;
  setExpenseCategory: (category: string) => void;
  expenseMemo: string;
  setExpenseMemo: (memo: string) => void;
  paymentMethod: string;
  setPaymentMethod: (method: string) => void;
  expenseAmount: number;
  setExpenseAmount: (amount: number) => void;
  onSubmit: () => void;
};

// スタイル定義
const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
`;

const Row = styled.div`
  display: flex;
  gap: 10px;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const Label = styled.label`
  flex: 1;
`;

const Input = styled.input`
  flex: 2;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
`;

const Select = styled.select`
  flex: 2;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
`;

const TextArea = styled.textarea`
  flex: 2;
  padding: 5px;
  border: 1px solid #ccc;  
  border-radius: 3px;
  resize: vertical;
`;

const SubmitButton = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;  
  }
`;

// 支出決定入力フォームコンポーネント
const ExpenseInputForm: React.FC<ExpenseInputFormProps> = ({
  expenseDate,
  setExpenseDate,
  expenseCategory,
  setExpenseCategory,
  expenseMemo, 
  setExpenseMemo,
  paymentMethod,
  setPaymentMethod,
  expenseAmount,
  setExpenseAmount,
  onSubmit,
}) => {
  return (
    <FormContainer>
      <Row>
        <Label>支払日</Label>
        <Input
          type="date"
          value={expenseDate}
          onChange={(e) => setExpenseDate(e.target.value)}
          required
        />
      </Row>
      <Row>  
        <Label>支払区分</Label>
        <Select
          value={expenseCategory}
          onChange={(e) => setExpenseCategory(e.target.value)}
          required
        >
          <option value="">選択してください</option>
          <option value="食費">食費</option>
          <option value="交通費">交通費</option>
          {/* 他のオプションを追加 */}
        </Select>
      </Row>
      <Row>
        <Label>摘要</Label>  
        <TextArea
          value={expenseMemo}
          onChange={(e) => setExpenseMemo(e.target.value)}
        />
      </Row>
      <Row>
        <Label>支払方法</Label>
        <Select 
          value={paymentMethod}
          onChange={(e) => setPaymentMethod(e.target.value)}
          required  
        >
          <option value="">選択してください</option>
          <option value="現金">現金</option>
          <option value="クレジットカード">クレジットカード</option>
          {/* 他のオプションを追加 */}
        </Select>
      </Row>
      <Row>
        <Label>支払額</Label>
        <Input
          type="number"
          value={expenseAmount}
          onChange={(e) => setExpenseAmount(Number(e.target.value))}
          required
          min={0}  
        />
      </Row>
      <SubmitButton onClick={onSubmit}>決定</SubmitButton>
    </FormContainer>
  );
};

export default ExpenseInputForm;

// サンプルデータを用いて使用例を示す
const ExpenseInputFormSample: React.FC = () => {
  const [expenseDate, setExpenseDate] = React.useState('');
  const [expenseCategory, setExpenseCategory] = React.useState('');
  const [expenseMemo, setExpenseMemo] = React.useState('');
  const [paymentMethod, setPaymentMethod] = React.useState('');
  const [expenseAmount, setExpenseAmount] = React.useState(0);

  const handleSubmit = () => {
    console.log('支出が決定されました:', {
      expenseDate,
      expenseCategory,
      expenseMemo,
      paymentMethod,  
      expenseAmount,
    });
    // フォームをリセット
    setExpenseDate('');
    setExpenseCategory('');
    setExpenseMemo('');
    setPaymentMethod('');
    setExpenseAmount(0);
  };

  return (
    <ExpenseInputForm
      expenseDate={expenseDate}
      setExpenseDate={setExpenseDate}
      expenseCategory={expenseCategory} 
      setExpenseCategory={setExpenseCategory}
      expenseMemo={expenseMemo}
      setExpenseMemo={setExpenseMemo}
      paymentMethod={paymentMethod}
      setPaymentMethod={setPaymentMethod} 
      expenseAmount={expenseAmount}
      setExpenseAmount={setExpenseAmount}
      onSubmit={handleSubmit}
    />
  );  
};