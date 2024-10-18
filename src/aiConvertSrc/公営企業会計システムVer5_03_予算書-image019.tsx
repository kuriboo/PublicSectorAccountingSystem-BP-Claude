import React from 'react';
import styled from 'styled-components';

// 型定義
type DepositFormProps = {
  year: number;
  auto?: boolean;
  target?: boolean;
  book?: boolean;
  depositAmount?: number;
  depositCount?: number;
  tax?: boolean;
  size?: 'A4' | 'A4横';
  title?: string;
  subtitle?: string;
  note?: string;
  seal?: boolean;
  copies?: number;
  onSubmit: (data: DepositFormData) => void;
};

type DepositFormData = {
  year: number;
  auto: boolean;
  target: boolean; 
  book: boolean;
  depositAmount: number;
  depositCount: number;
  tax: boolean;
  size: 'A4' | 'A4横';  
  title: string;
  subtitle: string;
  note: string;
  seal: boolean;
  copies: number;
};

// スタイル定義
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;

  @media (min-width: 768px) {
    max-width: 600px;
    margin: 0 auto;
  }
`;

const FormGroup = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

const Label = styled.label`
  flex: 0 0 100px;
`;

const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
`;

const Select = styled.select`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
`;

const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  margin-right: 0.5rem;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

// コンポーネント定義
const DepositForm: React.FC<DepositFormProps> = ({
  year,
  auto = false,
  target = false,
  book = false,
  depositAmount = 0,
  depositCount = 1,
  tax = false,
  size = 'A4',
  title = '',
  subtitle = '',
  note = '',
  seal = true,
  copies = 1,
  onSubmit,
}) => {
  // フォームの送信処理
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data: DepositFormData = {
      year,
      auto,
      target,
      book,
      depositAmount,
      depositCount,
      tax,
      size: size as "A4" | "A4横", // 型を明示的に指定
      title,
      subtitle,
      note,
      seal,
      copies,
    };
    onSubmit(data);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label>年度</Label>
        <Input type="number" value={year} readOnly />
      </FormGroup>
      <FormGroup>
        <Label>自動仕訳</Label>
        <Checkbox checked={auto} readOnly />
        <Label>資金繰対象</Label>
        <Checkbox checked={target} readOnly />
        <Label>台帳記載</Label>
        <Checkbox checked={book} readOnly />
      </FormGroup>
      <FormGroup>
        <Label>前年度繰越金</Label>
        <Input type="number" value={depositAmount} readOnly />円
      </FormGroup>
      <FormGroup>
        <Label>決算見込回数</Label>
        <Input type="number" value={depositCount} readOnly />回
      </FormGroup>
      <FormGroup>
        <Label>課税</Label>
        <Checkbox checked={tax} readOnly />
        <Label>判決鑑定計算</Label>
        <Select value={size} readOnly>
          <option value="A4">A4</option>
          <option value="A4横">A4横</option>
        </Select>
      </FormGroup>
      <FormGroup>
        <Label>タイトル</Label>
        <Input type="text" value={title} readOnly />
      </FormGroup>
      <FormGroup>
        <Label>サブタイトル</Label>
        <Input type="text" value={subtitle} readOnly />
      </FormGroup>
      <FormGroup>
        <Label>備考</Label>
        <Input type="text" value={note} readOnly />
      </FormGroup>
      <FormGroup>
        <Label>更印字</Label>
        <Checkbox checked={seal} readOnly />
      </FormGroup>
      <FormGroup>
        <Label>部数</Label>
        <Input type="number" value={copies} readOnly />
      </FormGroup>
      <Button type="submit">送信</Button>
    </Form>
  );
};

// サンプルデータ
const sampleData: DepositFormProps = {
  year: 2030,
  auto: true,
  target: false, 
  book: false,
  depositAmount: 0,
  depositCount: 1,
  tax: false,
  size: 'A4',
  title: '',
  subtitle: '',
  note: '',
  seal: true, 
  copies: 1,
  onSubmit: (data) => console.log(data),
};

// 使用例
const App: React.FC = () => {
  return (
    <div>
      <h1>当初資金計画画面</h1>
      <DepositForm {...sampleData} />
    </div>
  );
};

export default App;