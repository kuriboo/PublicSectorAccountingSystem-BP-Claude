import React, { FC } from 'react';
import styled from '@emotion/styled';

interface BorrowingDataInputProps {
  onSubmit: (data: { [key: string]: string }) => void;
}

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
  font-size: 24px;
  margin-bottom: 20px;
`;

const InputField = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const Label = styled.label`
  margin-right: 10px;
`;

const Input = styled.input`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
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

const BorrowingDataInput: FC<BorrowingDataInputProps> = ({ onSubmit }) => {
  const [formData, setFormData] = React.useState({
    borrowDate: '',
    predictedDate: '',
    unit: '予算',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = () => {
    onSubmit(formData);
  };

  const handleCancel = () => {
    // キャンセル処理を実装
  };

  return (
    <Container>
      <Title>基金計画科目編集</Title>
      <InputField>
        <Label>借方</Label>
        <Input
          type="text"
          name="borrowDate"
          value={formData.borrowDate}
          onChange={handleChange}
        />
      </InputField>
      <InputField>
        <Label>貸方</Label>
        <Input
          type="text"
          name="predictedDate"
          value={formData.predictedDate}
          onChange={handleChange}
        />
      </InputField>
      <InputField>
        <Label>仕訳</Label>
        <Input
          type="text"
          name="unit"
          value={formData.unit}
          onChange={handleChange}
        />
      </InputField>
      <ButtonContainer>
        <Button onClick={handleSubmit}>OK</Button>
        <Button onClick={handleCancel}>クリア</Button>
        <Button>キャンセル</Button>
      </ButtonContainer>
    </Container>
  );
};

// 使用例
const App: FC = () => {
  const handleSubmit = (data: { [key: string]: string }) => {
    console.log('Submitted data:', data);
  };

  return (
    <div>
      <h1>Borrowing Data Input Example</h1>
      <BorrowingDataInput onSubmit={handleSubmit} />
    </div>
  );
};

export default App;