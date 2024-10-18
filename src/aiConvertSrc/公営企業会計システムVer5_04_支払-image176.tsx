import React from 'react';
import styled from '@emotion/styled';

interface PaymentPeriodProps {
  startDate: string;
  endDate: string;
  decisionDate: string;
  paymentDate: string;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
`;

const Label = styled.label`
  font-weight: bold;
`;

const Input = styled.input`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
  font-size: 14px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 8px 16px;
  border: none;
  border-radius: 3px;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

const PaymentPeriod: React.FC<PaymentPeriodProps> = ({
  startDate,
  endDate,
  decisionDate,
  paymentDate,
}) => {
  return (
    <Container>
      <div>
        <Label>範囲指定</Label>
        <div>
          <Input type="text" value={startDate || ''} /> 〜{' '}
          <Input type="text" value={endDate || ''} />
        </div>
      </div>
      <div>
        <Label>決定処理日</Label>
        <Input type="text" value={decisionDate || ''} />
      </div>
      <div>
        <Label>支払予定日</Label>
        <Input type="text" value={paymentDate || ''} />
      </div>
      <ButtonContainer>
        <Button>OK</Button>
        <Button>クリア</Button>
        <Button>終了</Button>
      </ButtonContainer>
    </Container>
  );
};

// Usage example
const App: React.FC = () => {
  return (
    <PaymentPeriod
      startDate="0000000000"
      endDate="9999999999"
      decisionDate="20230401"
      paymentDate="20230405"
    />
  );
};

export default App;