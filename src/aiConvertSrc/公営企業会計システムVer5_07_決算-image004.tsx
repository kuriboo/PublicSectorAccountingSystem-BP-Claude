import React from 'react';
import styled from '@emotion/styled';

// 予算入力フォームのプロパティ型定義
type BudgetFormProps = {
  onSubmit: (data: { startDate: string; endDate: string; budgetAmount: number }) => void;
};

// 予算入力フォームコンポーネント
const BudgetForm: React.FC<BudgetFormProps> = ({ onSubmit }) => {
  const [startDate, setStartDate] = React.useState('');
  const [endDate, setEndDate] = React.useState('');
  const [budgetAmount, setBudgetAmount] = React.useState(0);

  // フォーム送信時の処理
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit({ startDate, endDate, budgetAmount });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Title>資本的収支明細書備考内容マスタリスト作成</Title>
      <Label>
        範囲指定
        <Input
          type="text"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          placeholder="00000000"
        />
        〜
        <Input
          type="text"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          placeholder="99999999"
        />
      </Label>
      <Label>
        備考明細番号
        <RangeInput
          type="number"
          min={0}
          max={99}
          value={budgetAmount}
          onChange={(e) => setBudgetAmount(Number(e.target.value))}
        />
      </Label>
      <ButtonContainer>
        <Button type="button">終了</Button>
        <Button type="button">クリア</Button>
        <Button type="submit">実行</Button>
      </ButtonContainer>
    </Form>
  );
};

// スタイリング
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 2rem;
  background-color: #f0f0f0;
  border-radius: 10px;
`;

const Title = styled.h2`
  margin: 0;
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 120px;
  text-align: right;
`;

const RangeInput = styled(Input)`
  width: 80px;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

// サンプルデータを使用した表示用コンポーネント
const SampleBudgetForm: React.FC = () => {
  const handleSubmit = (data: { startDate: string; endDate: string; budgetAmount: number }) => {
    console.log('Submitted data:', data);
  };

  return (
    <BudgetForm onSubmit={handleSubmit} />
  );
};

export default SampleBudgetForm;