import React from 'react';
import styled from 'styled-components';

// 型定義
interface AdjustedAmountFormProps {
  onConfirm: () => void;
  onCancel: () => void;
}

// スタイリング
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f0f0f0;
`;

const Title = styled.h2`
  margin-bottom: 1rem;
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

const Label = styled.label`
  margin-right: 0.5rem;
`;

const Input = styled.input`
  width: 100px;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Unit = styled.span`
  margin-left: 0.5rem;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 200px;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

// コンポーネント
const AdjustedAmountForm: React.FC<AdjustedAmountFormProps> = ({ onConfirm, onCancel }) => {
  const [amount, setAmount] = React.useState(0);

  // 調整金額の変更ハンドラ
  const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value, 10);
    setAmount(isNaN(value) ? 0 : value);
  };

  return (
    <Container>
      <Title>調整金額自動仕訳作成</Title>
      <InputWrapper>
        <Label>調整金額</Label>
        <Input type="number" value={amount} onChange={handleAmountChange} />
        <Unit>円</Unit>
      </InputWrapper>
      <ButtonWrapper>
        <Button onClick={onCancel}>キャンセル</Button>
        <Button onClick={onConfirm}>OK</Button>
      </ButtonWrapper>
    </Container>
  );
};

export default AdjustedAmountForm;

// 使用例
const App: React.FC = () => {
  const handleConfirm = () => {
    console.log('Confirmed');
  };

  const handleCancel = () => {
    console.log('Canceled');
  };

  return <AdjustedAmountForm onConfirm={handleConfirm} onCancel={handleCancel} />;
};