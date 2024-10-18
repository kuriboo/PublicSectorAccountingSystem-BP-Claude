import React from 'react';
import styled from '@emotion/styled';

type ExpenseReportFormProps = {
  onSubmit: (data: FormData) => void;
};

type FormData = {
  date: string;
  department: string;
  paymentMethod: string;
  expenseType: string;
  amount: string;
  note: string;
};

const ExpenseReportForm: React.FC<ExpenseReportFormProps> = ({ onSubmit }) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data: FormData = {
      date: formData.get('date') as string,
      department: formData.get('department') as string,
      paymentMethod: formData.get('paymentMethod') as string,
      expenseType: formData.get('expenseType') as string,
      amount: formData.get('amount') as string,
      note: formData.get('note') as string,
    };
    onSubmit(data);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Title>経管状況表集計処理</Title>
      <Field>
        <Label>集計年月</Label>
        <DateInput type="text" name="date" defaultValue="令和02年12月" />
      </Field>
      <Field>
        <Label>比較区分</Label>
        <RadioGroup>
          <Label>
            <input type="radio" name="department" value="前年度当月決算" defaultChecked /> 前年度当月決算
          </Label>
          <Label>
            <input type="radio" name="department" value="当月予算" /> 当月予算
          </Label>
        </RadioGroup>
      </Field>
      <Field>
        <Label>支払科目</Label>
        <RadioGroup>
          <Label>
            <input type="radio" name="paymentMethod" value="負担額" defaultChecked /> 負担額
          </Label>
          <Label>
            <input type="radio" name="paymentMethod" value="執行額" /> 執行額
          </Label>
        </RadioGroup>
      </Field>  
      <Field>
        <Label>金額単位</Label>
        <RadioGroup>
          <Label>
            <input type="radio" name="expenseType" value="円単位" defaultChecked /> 円単位
          </Label>
          <Label>
            <input type="radio" name="expenseType" value="千円単位" /> 千円単位
          </Label>
        </RadioGroup>
      </Field>
      <Field>
        <Label>金額印字</Label>
        <RadioGroup>
          <Label>
            <input type="radio" name="amount" value="税抜" defaultChecked /> 税抜
          </Label>
          <Label>
            <input type="radio" name="amount" value="税込" /> 税込
          </Label>
        </RadioGroup>
      </Field>
      <Field>
        <Label>セグメント</Label>
        <select name="note">
          <option value="">選択してください</option>
        </select>
      </Field>
      <ButtonGroup>
        <Button type="button">OK</Button>
        <Button type="button">クリア</Button>
        <Button type="submit">終了</Button>
      </ButtonGroup>
    </Form>
  );
};

// Sample usage
const App: React.FC = () => {
  const handleSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <div>
      <ExpenseReportForm onSubmit={handleSubmit} />
    </div>
  );
};

export default App;

// Styles
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f0f0f0;
`;

const Title = styled.h2`
  margin-bottom: 20px;
`;

const Field = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const Label = styled.label`
  margin-right: 10px;
`;

const DateInput = styled.input`
  padding: 5px;
`;

const RadioGroup = styled.div`
  display: flex;
`;

const ButtonGroup = styled.div`
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 10px 20px;
  margin-right: 10px;
`;