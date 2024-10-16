import React from 'react';
import styled from '@emotion/styled';

interface DataTransferFormProps {
  onSubmit: (data: FormData) => void;
}

interface FormData {
  startDate: string;
  endDate: string;
  price: string;
  collectMethod: string;
  block: string;
}

const DataTransferForm: React.FC<DataTransferFormProps> = ({ onSubmit }) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data: FormData = {
      startDate: formData.get('startDate') as string,
      endDate: formData.get('endDate') as string,
      price: formData.get('price') as string,
      collectMethod: formData.get('collectMethod') as string,
      block: formData.get('block') as string,
    };
    onSubmit(data);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormSection>
        <Label>
          令和04
          <Input type="text" name="startDate" defaultValue="00000000" />
          ～
          <Input type="text" name="endDate" defaultValue="99999999" />
        </Label>
        <Label>
          <Input type="radio" name="dateType" value="予算" defaultChecked />
          予定済負担未処理
          <Input type="radio" name="dateType" value="負担" />
          負担済決定未処理
        </Label>
      </FormSection>
      <FormSection>
        <Label>
          所属
          <Input type="text" name="price" defaultValue="000000" />
          ～
          <Input type="text" name="price" defaultValue="999999" />
        </Label>
      </FormSection>
      <FormSection>
        <Label>
          <Input type="radio" name="collectMethod" value="全体" defaultChecked />
          全体
          <Input type="radio" name="collectMethod" value="ブロック" />
          ブロック
          <Input type="radio" name="collectMethod" value="センター" />
          センター
        </Label>
        <Input type="text" name="block" />
      </FormSection>
      <ButtonContainer>
        <Button type="button">クリア</Button>
        <Button type="submit">終了</Button>
      </ButtonContainer>
    </Form>
  );
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const FormSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Input = styled.input`
  padding: 0.25rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

// Usage example
const App: React.FC = () => {
  const handleSubmit = (data: FormData) => {
    console.log(data);
    // Perform data submission or further processing
  };

  return (
    <div>
      <h1>Data Transfer Form</h1>
      <DataTransferForm onSubmit={handleSubmit} />
    </div>
  );
};

export default App;