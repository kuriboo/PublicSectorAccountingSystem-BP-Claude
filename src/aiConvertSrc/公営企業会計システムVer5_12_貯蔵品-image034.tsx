import React from 'react';
import styled from 'styled-components';

// 仮出庫入力フォームのプロパティ型定義
type TemporaryWithdrawalFormProps = {
  onSubmit: (amount: number) => void;
};

// 仮出庫入力フォームコンポーネント
const TemporaryWithdrawalForm: React.FC<TemporaryWithdrawalFormProps> = ({ onSubmit }) => {
  const [amount, setAmount] = React.useState<number>(0);

  // フォーム送信時のイベントハンドラ
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(amount);
    setAmount(0);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        仮出庫数30個の倍数
        <Input
          type="number"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          min={0}
          step={30}
          required
        />
      </Label>
      <SubmitButton type="submit">登録</SubmitButton>
    </Form>
  );
};

// 仮在庫情報表示用のプロパティ型定義 
type TemporaryStockInfoProps = {
  amount: number;
};

// 仮在庫情報表示コンポーネント
const TemporaryStockInfo: React.FC<TemporaryStockInfoProps> = ({ amount }) => {
  // 仮出庫残数の計算
  const remainingAmount = Math.floor(amount / 30) * 30;

  return (
    <div>
      <p>仮出庫数30個のうち実際に{amount}個出庫</p> 
      <p>（仮出庫残数約{remainingAmount}個まで）</p>
    </div>
  );
};

// サンプル用のコンテナコンポーネント
const SampleContainer: React.FC = () => {
  const [stockAmount, setStockAmount] = React.useState<number>(0);

  const handleTemporaryWithdrawal = (amount: number) => {
    setStockAmount((prevAmount) => prevAmount + amount);
  };

  return (
    <Wrapper>
      <TemporaryWithdrawalForm onSubmit={handleTemporaryWithdrawal} />
      <TemporaryStockInfo amount={stockAmount} />
    </Wrapper>
  );
};

// スタイル用のコンポーネント
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 16px;
`;

const Form = styled.form`
  display: flex;
  gap: 8px;
  align-items: center;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  padding: 4px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 120px;
`;

const SubmitButton = styled.button`
  padding: 4px 8px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export default SampleContainer;