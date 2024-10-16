// NumberInputComponent.tsx

import React, { useState } from 'react';
import styled from '@emotion/styled';

// NumberInput component prop types
type NumberInputProps = {
  initialNumber?: number;
  onOk?: (number: number) => void;
  onCancel?: () => void;
};

// Styled components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const NumberInput = styled.input`
  width: 100%;
  padding: 8px;
  margin-bottom: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const Button = styled.button`
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

const OkButton = styled(Button)`
  background-color: #007bff;
  color: #fff;
`;

const CancelButton = styled(Button)`
  background-color: #ccc;
  color: #333;
`;

const ClearButton = styled(Button)`
  background-color: #dc3545;
  color: #fff;
`;

// NumberInput component
const NumberInputComponent: React.FC<NumberInputProps> = ({ 
  initialNumber = 1,
  onOk,
  onCancel,
}) => {
  const [number, setNumber] = useState(initialNumber);

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    setNumber(isNaN(value) ? 0 : value);
  };

  // Handle OK button click
  const handleOk = () => {
    onOk?.(number);
  };

  // Handle Cancel button click  
  const handleCancel = () => {
    onCancel?.();
  };

  // Handle Clear button click
  const handleClear = () => {
    setNumber(0);
  };

  return (
    <Container>
      <NumberInput
        type="number"
        value={number}
        onChange={handleChange}
      />
      <ButtonContainer>
        <OkButton onClick={handleOk}>OK</OkButton>
        <CancelButton onClick={handleCancel}>キャンセル</CancelButton>
        <ClearButton onClick={handleClear}>クリア</ClearButton>
      </ButtonContainer>
    </Container>
  );
};

// Example usage
const ExampleUsage: React.FC = () => {
  const handleOk = (number: number) => {
    console.log(`Entered number: ${number}`);
  };

  const handleCancel = () => {
    console.log('Input canceled');
  };

  return (
    <div>
      <h2>Number Input Example</h2>
      <NumberInputComponent 
        initialNumber={5}
        onOk={handleOk}
        onCancel={handleCancel}
      />
    </div>
  );
};

export default NumberInputComponent;