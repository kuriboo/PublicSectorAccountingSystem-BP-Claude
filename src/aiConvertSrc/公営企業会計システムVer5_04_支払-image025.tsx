import React from 'react';
import styled from 'styled-components';

interface PrintRequestFormProps {
  onSubmit: () => void;
  onCancel: () => void;
}

const PrintRequestForm: React.FC<PrintRequestFormProps> = ({ onSubmit, onCancel }) => {
  return (
    <Container>
      <Title>印刷対象範囲名</Title>
      <TextArea placeholder="とりまとめ支払命令書" />
      <ButtonContainer>
        <Button onClick={onSubmit}>OK</Button>
        <Button onClick={onCancel}>クリア</Button>
        <Button onClick={onCancel}>キャンセル</Button>
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

  @media (max-width: 600px) {
    padding: 10px;
  }
`;

const Title = styled.div`
  margin-bottom: 10px;
  font-weight: bold;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 200px;
  margin-bottom: 10px;
  padding: 5px;
  resize: none;

  @media (max-width: 600px) {
    height: 100px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  margin: 0 5px;
  padding: 5px 10px;
  border: none;
  background-color: #f0f0f0;
  cursor: pointer;

  &:hover {
    background-color: #e0e0e0;
  }
`;

// Usage example
const App: React.FC = () => {
  const handleSubmit = () => {
    console.log('Form submitted');
  };

  const handleCancel = () => {
    console.log('Form canceled');
  };

  return (
    <div>
      <h1>Print Request Form</h1>
      <PrintRequestForm onSubmit={handleSubmit} onCancel={handleCancel} />
    </div>
  );
};

export default App;