import React from 'react';
import styled from 'styled-components';

// 支出決定入力フォームのプロパティ型定義
interface ExpenseFormProps {
  onSubmit: (data: ExpenseData) => void;
}

// 支出データの型定義
interface ExpenseData {
  date: string;
  name: string;
  purpose: string;
  account: string;
  amount: number;
  note: string;
}

// 支出決定入力フォームコンポーネント
const ExpenseForm: React.FC<ExpenseFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = React.useState<ExpenseData>({
    date: '',
    name: '',
    purpose: '',
    account: '現金払',
    amount: 0,
    note: '',
  });

  // フォーム入力値の変更ハンドラ
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };
  
  // フォーム送信ハンドラ
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(formData);
    // フォームをリセット
    setFormData({
      date: '',
      name: '',
      purpose: '',  
      account: '現金払',
      amount: 0,
      note: '',
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Label>決定処理日</Label>
        <Input type="text" name="date" value={formData.date} onChange={handleChange} required />
        <Label>年</Label>
        <Input type="text" name="year" size={4} value={formData.date.slice(0,4)} disabled />
        <Label>月</Label>
        <Input type="text" name="month" size={2} value={formData.date.slice(5,7)} disabled />
        <Label>日</Label>
        <Input type="text" name="day" size={2} value={formData.date.slice(8)} disabled />
      </Row>
      <Row>  
        <Label>支払区分</Label>
        <Select name="account" value={formData.account} onChange={handleChange}>
          <option value="現金払">現金払</option>
          <option value="口座振替">口座振替</option>
        </Select>
      </Row>
      <Row>
        <Label>支払先</Label>
        <Input type="text" name="name" value={formData.name} onChange={handleChange} required />
      </Row>
      <Row>
        <Label>支払方法</Label>
        <Input type="text" name="purpose" value={formData.purpose} onChange={handleChange} required />
      </Row>
      <Row>
        <Label>前求番号</Label>
        <Input type="text" name="note" value={formData.note} onChange={handleChange} />
      </Row>
      <Row>
        <Label>決定額</Label>
        <Input type="number" name="amount" value={formData.amount} onChange={handleChange} required />
        <span>円</span>
      </Row>
      <Button type="submit">登録</Button>
    </Form>
  );
};

// サンプルデータとコンポーネントの利用例
const sampleData: ExpenseData = {
  date: '2023-04-18',
  name: '事務用品の前渡購入',
  purpose: '事務購入',  
  account: '現金払',
  amount: 1000,
  note: '',
};

const App: React.FC = () => {
  const handleSubmit = (data: ExpenseData) => {
    console.log('Submitted:', data);
  };

  return (
    <div>
      <h1>支出決定入力フォーム</h1>
      <ExpenseForm onSubmit={handleSubmit} />
      <h2>Sample Data</h2>
      <p>Date: {sampleData.date}</p>
      <p>Name: {sampleData.name}</p>
      <p>Purpose: {sampleData.purpose}</p>
      <p>Account: {sampleData.account}</p>
      <p>Amount: {sampleData.amount} 円</p>
      <p>Note: {sampleData.note}</p>
    </div>
  );
};

// スタイリング
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 600px;
  margin: 0 auto;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Label = styled.label`
  width: 100px;
  text-align: right;
`;

const Input = styled.input`
  padding: 4px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 200px;
`;

const Select = styled.select`
  padding: 4px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 200px;  
`;

const Button = styled.button`
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  align-self: flex-end;
`;

export default App;