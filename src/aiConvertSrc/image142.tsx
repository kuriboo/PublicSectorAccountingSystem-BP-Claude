import React from 'react';
import styled from '@emotion/styled';

type ManagementSystemProps = {
  customerName: string;
  registration: string;
  removal: string;
  registrationNumber: string;
  DIP: string;
  fee: string;
  numberOfDays: number;
  daysUnused: number;
  dailyAmount: number;
  amountUnused: number;
  amountOfDays: number;
  amountOfUse: number;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f0f0f0;
  font-family: Arial, sans-serif;
`;

const Title = styled.h2`
  margin-bottom: 20px;
`;

const Form = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  margin-bottom: 20px;
`;

const Label = styled.label`
  font-weight: bold;
`;

const Input = styled.input`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Section = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
`;

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

const ManagementSystem: React.FC<ManagementSystemProps> = ({
  customerName,
  registration,
  removal,
  registrationNumber,
  DIP,
  fee,
  numberOfDays,
  daysUnused,
  dailyAmount,
  amountUnused,
  amountOfDays,
  amountOfUse,
}) => {
  return (
    <Container>
      <Title>Management System</Title>
      <Form>
        <Label>Customer Name:</Label>
        <Input type="text" defaultValue={customerName} />
        <Label>Registration:</Label>
        <Input type="text" defaultValue={registration} />
        <Label>Removal:</Label>
        <Input type="text" defaultValue={removal} />
      </Form>
      <Form>
        <Label>Registration Number:</Label>
        <Input type="text" defaultValue={registrationNumber} />
        <Label>DIP:</Label>
        <Input type="text" defaultValue={DIP} />
        <Label>Fee:</Label>
        <Input type="text" defaultValue={fee} />
      </Form>
      <Section>
        <Label>Number of Days:</Label>
        <Input type="number" defaultValue={numberOfDays} />
        <Label>Days Unused:</Label>
        <Input type="number" defaultValue={daysUnused} />
        <Label>Daily Amount:</Label>
        <Input type="number" defaultValue={dailyAmount} />
        <Label>Amount Unused:</Label>
        <Input type="number" defaultValue={amountUnused} />
      </Section>
      <Section>
        <Label>Amount of Days:</Label>
        <Input type="number" defaultValue={amountOfDays} />
        <Label>Amount of Use:</Label>
        <Input type="number" defaultValue={amountOfUse} />
      </Section>
      <ButtonContainer>
        <Button>OK</Button>
        <Button>Clear</Button>
        <Button>End</Button>
      </ButtonContainer>
    </Container>
  );
};

// Usage example
const App: React.FC = () => {
  return (
    <ManagementSystem
      customerName="ABC Company"
      registration="8002500"
      removal="000001"
      registrationNumber="DIP(A1)"
      DIP="000001"
      fee="¥75"
      numberOfDays={4}
      daysUnused={0.0}
      dailyAmount={4.0}
      amountUnused={0.0}
      amountOfDays={7000000}
      amountOfUse={7000000}
    />
  );
};

export default App;