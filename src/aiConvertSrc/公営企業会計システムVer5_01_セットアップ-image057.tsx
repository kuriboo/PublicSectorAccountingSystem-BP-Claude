import React from 'react';
import styled from '@emotion/styled';

type AmountInputProps = {
  amount: number;
  onAmountChange: (amount: number) => void;
  onOK: () => void;
  onCancel: () => void;
  onClear: () => void;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 300px;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const Input = styled.input`
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100px;
  margin-right: 10px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const Button = styled.button`
  padding: 8px 16px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const AmountInput: React.FC<AmountInputProps> = ({
  amount,
  onAmountChange,
  onOK,
  onCancel,
  onClear,
}) => {
  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newAmount = parseInt(e.target.value, 10);
    onAmountChange(newAmount);
  };

  return (
    <Container>
      <InputContainer>
        <Input
          type="number"
          value={amount}
          onChange={handleAmountChange}
        />
      </InputContainer>
      <ButtonContainer>
        <Button onClick={onOK}>OK</Button>
        <Button onClick={onCancel}>クリア</Button>
        <Button onClick={onClear}>終了</Button>
      </ButtonContainer>
    </Container>
  );
};

// Usage example
const App: React.FC = () => {
  const [amount, setAmount] = React.useState(100);

  const handleAmountChange = (newAmount: number) => {
    setAmount(newAmount);
  };

  const handleOK = () => {
    console.log('OK clicked with amount:', amount);
  };

  const handleCancel = () => {
    setAmount(0);
  };

  const handleClear = () => {
    console.log('Clear clicked');
  };

  return (
    <AmountInput
      amount={amount}
      onAmountChange={handleAmountChange}
      onOK={handleOK}
      onCancel={handleCancel}
      onClear={handleClear}
    />
  );
};

export default App;