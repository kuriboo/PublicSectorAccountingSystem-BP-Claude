import React, { useState } from 'react';
import styled from '@emotion/styled';

interface CompanyFileListFormProps {
  onSubmit: (startingNumber: number) => void;
}

const CompanyFileListForm: React.FC<CompanyFileListFormProps> = ({ onSubmit }) => {
  const [startingNumber, setStartingNumber] = useState<number>(0);

  const handleSubmit = () => {
    onSubmit(startingNumber);
  };

  return (
    <Container>
      <Title>会計日計表ファイルリスト作成</Title>
      <RangeInputContainer>
        <RangeLabel>範囲指定</RangeLabel>
        <RangeInput
          type="number"
          min={0}
          max={9999}
          value={startingNumber}
          onChange={(e) => setStartingNumber(Number(e.target.value))}
        />
      </RangeInputContainer>
      <ButtonContainer>
        <Button onClick={handleSubmit}>OK</Button>
        <Button>クリア</Button>
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
  background-color: #f0f0f0;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  margin-bottom: 20px;
  font-size: 18px;
  color: #333;
`;

const RangeInputContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const RangeLabel = styled.label`
  margin-right: 10px;
  font-size: 14px;
  color: #666;
`;

const RangeInput = styled.input`
  width: 100px;
  padding: 5px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

const Button = styled.button`
  padding: 8px 16px;
  font-size: 14px;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

// Usage example
const App: React.FC = () => {
  const handleSubmit = (startingNumber: number) => {
    console.log('Starting number:', startingNumber);
    // Perform actions with the submitted starting number
  };

  return (
    <div>
      <CompanyFileListForm onSubmit={handleSubmit} />
    </div>
  );
};

export default App;