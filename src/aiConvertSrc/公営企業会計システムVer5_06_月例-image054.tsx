import React from 'react';
import styled from '@emotion/styled';

interface PublicFundOutputProps {
  startDate?: string;
  endDate?: string;
  area?: '前' | '細前' | '明細' | string;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  font-family: Arial, sans-serif;
  @media (max-width: 600px) {
    padding: 10px;
  }
`;

const Title = styled.h2`
  margin-bottom: 20px;
  @media (max-width: 600px) {
    font-size: 1.2rem;
  }
`;

const Form = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 10px;
  align-items: center;
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const Label = styled.label`
  font-weight: bold;
`;

const Input = styled.input`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
`;

const RadioGroup = styled.div`
  display: flex;
  gap: 10px;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  &:hover {
    background-color: #0056b3;
  }
`;

const PublicFundOutput: React.FC<PublicFundOutputProps> = ({
  startDate = '',
  endDate = '',
  area = '前',
}) => {
  return (
    <Container>
      <Title>現預金出納簿</Title>
      <Form>
        <Label>作表日</Label>
        <Input type="text" value={startDate} readOnly />
        <Label>～</Label>
        <Input type="text" value={endDate} readOnly />
        <Label>作表区分</Label>
        <RadioGroup>
          <Label>
            <input type="radio" checked={area === '前'} readOnly /> 前
          </Label>
          <Label>
            <input type="radio" checked={area === '細前'} readOnly /> 細前
          </Label>
          <Label>
            <input type="radio" checked={area === '明細'} readOnly /> 明細
          </Label>
        </RadioGroup>
      </Form>
      <ButtonGroup>
        <Button>OK</Button>
        <Button>クリア</Button>
        <Button>終了</Button>
      </ButtonGroup>
    </Container>
  );
};

// Usage example
const App: React.FC = () => {
  return (
    <PublicFundOutput
      startDate="0000000"
      endDate="9999999999"
      area="前"
    />
  );
};

export default App;