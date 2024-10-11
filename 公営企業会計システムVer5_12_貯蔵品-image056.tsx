import React from 'react';
import styled from '@emotion/styled';

type MaterialUsageFormProps = {
  date: string;
  startNumber?: string;
  endNumber?: string;
  onSubmit: () => void;
  onCancel: () => void;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;

  @media (max-width: 600px) {
    padding: 10px;
  }
`;

const Title = styled.h2`
  margin-bottom: 20px;
`;

const DateLabel = styled.div`
  margin-bottom: 10px;
`;

const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 20px;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const Input = styled.input`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 45%;

  @media (max-width: 600px) {
    width: 100%;
    margin-bottom: 10px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

const Button = styled.button`
  padding: 8px 16px;
  margin-left: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const MaterialUsageForm: React.FC<MaterialUsageFormProps> = ({
  date,
  startNumber = '',
  endNumber = '',
  onSubmit,
  onCancel,
}) => {
  return (
    <Container>
      <Title>工事別使用材料明細表作成</Title>
      <DateLabel>日付：{date}</DateLabel>
      <InputContainer>
        <Input type="text" value={startNumber} placeholder="工事名場所" />
        <Input type="text" value={endNumber} placeholder="工事名場所" />
      </InputContainer>
      <ButtonContainer>
        <Button onClick={onCancel}>クリア</Button>
        <Button onClick={onSubmit}>終了</Button>
      </ButtonContainer>
    </Container>
  );
};

export default MaterialUsageForm;

// Usage example
const App: React.FC = () => {
  const handleSubmit = () => {
    // Handle form submission
    console.log('Form submitted');
  };

  const handleCancel = () => {
    // Handle form cancellation
    console.log('Form cancelled');
  };

  return (
    <MaterialUsageForm
      date="平成29年09月14日"
      startNumber="000000"
      endNumber="999999"
      onSubmit={handleSubmit}
      onCancel={handleCancel}
    />
  );
};