import React, { useState } from 'react';
import styled from 'styled-components';

type NumberInputProps = {
  label: string;
  initialValue?: number;
  onOk?: (value: number) => void;
  onCancel?: () => void;
};

const NumberInput: React.FC<NumberInputProps> = ({
  label,
  initialValue = 250,
  onOk,
  onCancel,
}) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.target.value, 10);
    setValue(isNaN(newValue) ? 0 : newValue);
  };

  const handleOk = () => {
    if (onOk) {
      onOk(value);
    }
  };

  const handleCancel = () => {
    if (onCancel) {
      onCancel();
    }
  };

  return (
    <Container>
      <Label>{label}</Label>
      <Input type="number" value={value} onChange={handleChange} />
      <ButtonContainer>
        <Button onClick={handleOk}>OK</Button>
        <Button onClick={handleCancel}>クリア</Button>
        <Button onClick={handleCancel}>キャンセル</Button>
      </ButtonContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Label = styled.div`
  margin-bottom: 8px;
`;

const Input = styled.input`
  width: 100px;
  padding: 4px;
  margin-bottom: 8px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const Button = styled.button`
  padding: 4px 8px;
`;

// Usage example
const App: React.FC = () => {
  const handleOk = (value: number) => {
    console.log('OK clicked with value:', value);
  };

  const handleCancel = () => {
    console.log('Cancel clicked');
  };

  return (
    <div>
      <NumberInput
        label="加減区分"
        initialValue={250}
        onOk={handleOk}
        onCancel={handleCancel}
      />
    </div>
  );
};

export default App;