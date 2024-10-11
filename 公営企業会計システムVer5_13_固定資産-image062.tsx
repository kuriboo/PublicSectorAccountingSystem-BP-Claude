import React from 'react';
import styled from 'styled-components';

type LoanCalculatorProps = {
  onSubmit?: (amount: number) => void;
};

const LoanCalculator: React.FC<LoanCalculatorProps> = ({ onSubmit }) => {
  const [amount, setAmount] = React.useState<number>(0);

  const handleSubmit = () => {
    if (onSubmit) {
      onSubmit(amount);
    }
  };

  return (
    <Container>
      <Title>貸却計算</Title>
      <InputContainer>
        <Label>固定資産科目</Label>
        <Input type="number" value={amount} onChange={e => setAmount(Number(e.target.value))} />
        <Label>～</Label>
        <Input type="number" value={9999999999} readOnly />
      </InputContainer>
      <ButtonContainer>
        <Button onClick={() => setAmount(0)}>クリア</Button>
        <Button onClick={handleSubmit}>OK</Button>
        <Button>終了</Button>
      </ButtonContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 300px;
  margin: 0 auto;
`;

const Title = styled.h2`
  margin-bottom: 20px;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const Label = styled.label`
  margin-right: 10px;
`;

const Input = styled.input`
  padding: 5px;
  border-radius: 3px;
  border: 1px solid #ccc;
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
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

// Usage example
const App: React.FC = () => {
  const handleSubmit = (amount: number) => {
    console.log(`Submitted amount: ${amount}`);
  };

  return (
    <div>
      <h1>Loan Calculator Example</h1>
      <LoanCalculator onSubmit={handleSubmit} />
    </div>
  );
};

export default App;