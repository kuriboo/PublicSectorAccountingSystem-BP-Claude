import React from 'react';
import styled from '@emotion/styled';

// 予算設定フォームのプロパティ型定義
type BudgetFormProps = {
  onSubmit: (startDate: string, endDate: string, amount: number) => void;
};

// 予算設定フォームコンポーネント
const BudgetForm: React.FC<BudgetFormProps> = ({ onSubmit }) => {
  // フォームの状態管理
  const [startDate, setStartDate] = React.useState('');
  const [endDate, setEndDate] = React.useState('');
  const [amount, setAmount] = React.useState(0);

  // フォーム送信時の処理
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(startDate, endDate, amount);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Title>科目別支出予算差引簿（所属者・予定額無）</Title>
      <DateRange>
        <Label>
          作成年月
          <Input
            type="text"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            required
          />
          ～
          <Input
            type="text"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            required
          />
        </Label>
      </DateRange>
      <AmountInput>
        <Label>
          予算科目
          <Input
            type="text"
            onChange={(e) => setAmount(Number(e.target.value))}
            required
          />
        </Label>
      </AmountInput>
      <SubmitButton type="submit">集計</SubmitButton>
      <PrintButton type="button">印刷</PrintButton>
      <ClearButton type="reset">クリア</ClearButton>
      <CloseButton type="button">終了</CloseButton>
    </Form>
  );
};

// サンプルデータを使った表示用コンポーネント
const SampleBudgetForm = () => {
  const handleSubmit = (startDate: string, endDate: string, amount: number) => {
    console.log('開始日:', startDate);
    console.log('終了日:', endDate);
    console.log('予算額:', amount);
  };

  return (
    <BudgetForm onSubmit={handleSubmit} />
  );
};

// スタイリング用のコンポーネント
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 5px;
`;

const Title = styled.h2`
  margin-bottom: 20px;
`;

const DateRange = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const Input = styled.input`
  padding: 5px;
  border-radius: 3px;
  border: 1px solid #ccc;
`;

const AmountInput = styled.div`
  margin-bottom: 20px;
`;

const Button = styled.button`
  padding: 10px 20px;
  margin: 5px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
  
  &:hover {
    background-color: #0056b3;
  }
`;

const SubmitButton = styled(Button)`
  background-color: #28a745;
  
  &:hover {
    background-color: #1e7e34;
  }
`;

const PrintButton = styled(Button)`
  background-color: #6c757d;

  &:hover {
    background-color: #5a6268;
  }  
`;

const ClearButton = styled(Button)`
  background-color: #dc3545;

  &:hover {
    background-color: #a71d2a;
  }
`;

const CloseButton = styled(Button)`
  background-color: #6c757d;

  &:hover {  
    background-color: #5a6268;
  }
`;

export default SampleBudgetForm;