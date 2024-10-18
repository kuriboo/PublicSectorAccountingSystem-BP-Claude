import React from 'react';
import styled from 'styled-components';

type InputData = {
  unitPrice: string;
  quantity: string;
  tax: string;
};

type Props = {
  data?: InputData;
  onInputChange?: (data: InputData) => void;
  onSubmit?: (data: InputData) => void;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 10px;
  width: 100%;
  max-width: 400px;
  box-sizing: border-box;

  @media (max-width: 600px) {
    max-width: 100%;
  }
`;

const Title = styled.h2`
  margin-bottom: 20px;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 10px;
`;

const InputLabel = styled.label`
  margin-bottom: 5px;
`;

const Input = styled.input`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const InputForm: React.FC<Props> = ({ data = { unitPrice: '', quantity: '', tax: '' }, onInputChange, onSubmit }) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (onInputChange) {
      onInputChange({ ...data, [name]: value });
    }
  };

  const handleSubmit = () => {
    if (onSubmit) {
      onSubmit(data);
    }
  };

  return (
    <Container>
      <Title>入力フォーム</Title>
      <InputContainer>
        <InputLabel>単価:</InputLabel>
        <Input type="text" name="unitPrice" value={data.unitPrice} onChange={handleInputChange} />
      </InputContainer>
      <InputContainer>
        <InputLabel>数量:</InputLabel>
        <Input type="text" name="quantity" value={data.quantity} onChange={handleInputChange} />
      </InputContainer>
      <InputContainer>
        <InputLabel>税:</InputLabel>
        <Input type="text" name="tax" value={data.tax} onChange={handleInputChange} />
      </InputContainer>
      <ButtonContainer>
        <Button type="button">キャンセル</Button>
        <Button type="button" onClick={handleSubmit}>行確定</Button>
      </ButtonContainer>
    </Container>
  );
};

// Usage example
const App: React.FC = () => {
  const handleInputChange = (data: InputData) => {
    console.log('Input changed:', data);
  };

  const handleSubmit = (data: InputData) => {
    console.log('Form submitted:', data);
  };

  return (
    <div>
      <InputForm onInputChange={handleInputChange} onSubmit={handleSubmit} />
    </div>
  );
};

export default App;