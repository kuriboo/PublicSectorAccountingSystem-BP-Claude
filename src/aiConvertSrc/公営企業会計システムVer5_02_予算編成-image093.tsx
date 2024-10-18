import React from 'react';
import styled from '@emotion/styled';

interface TaxCalculatorProps {
  taxRate: number;
  amount: number;
  onOk?: () => void;
  onCancel?: () => void;
}

const TaxCalculator: React.FC<TaxCalculatorProps> = ({ taxRate, amount, onOk, onCancel }) => {
  // 税込金額の計算
  const taxIncludedAmount = Math.floor(amount * (1 + taxRate / 100));

  return (
    <Container>
      <TaxIncludedAmount>税込予算額 {taxIncludedAmount.toLocaleString()}円</TaxIncludedAmount>
      <InputArea>
        <Label>予定日</Label>
        <DateInput type="text" defaultValue="平成28年09月" />
        <Label>予定率</Label>
        <RateInput type="text" defaultValue={taxRate.toFixed(2)} />%
        <Label>予定額</Label>
        <AmountInput type="text" defaultValue={amount.toLocaleString()} />
      </InputArea>
      <ButtonArea>
        <Button onClick={onOk}>OK</Button>
        <Button onClick={onCancel}>クリア</Button>
        <CancelButton>キャンセル</CancelButton>
      </ButtonArea>
    </Container>
  );
};

// サンプルデータを使用した使用例
const SampleUsage: React.FC = () => {
  const handleOk = () => {
    console.log('OK clicked');
  };

  const handleCancel = () => {
    console.log('Cancel clicked');
  };

  return (
    <TaxCalculator
      taxRate={10}
      amount={56076640}
      onOk={handleOk}
      onCancel={handleCancel}
    />
  );
};

// スタイリング
const Container = styled.div`
  font-family: Arial, sans-serif;
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  width: 300px;
  margin: 0 auto;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

const TaxIncludedAmount = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const InputArea = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.div`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 5px;
`;

const DateInput = styled.input`
  width: 100%;
  padding: 5px;
  margin-bottom: 10px;
`;

const RateInput = styled.input`
  width: 50px;
  padding: 5px;
  margin-bottom: 10px;
`;

const AmountInput = styled.input`
  width: 100%;
  padding: 5px;
`;

const ButtonArea = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Button = styled.button`
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const CancelButton = styled(Button)`
  background-color: #dc3545;

  &:hover {
    background-color: #a71d2a;
  }
`;

export default TaxCalculator;