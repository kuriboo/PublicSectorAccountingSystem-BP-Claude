import React from 'react';
import styled from '@emotion/styled';

type EntryFormProps = {
  onSubmit: (data: FormData) => void;
};

type FormData = {
  startDate: string;
  endDate: string;
  cellNumber: string;
  mail: string;
  entryPeriod: string;
};

const EntryForm: React.FC<EntryFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = React.useState<FormData>({
    startDate: '',
    endDate: '',
    cellNumber: '',
    mail: '',
    entryPeriod: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        戻入額
        <Input type="text" name="startDate" value={formData.startDate} onChange={handleChange} />
      </Label>
      <Label>
        戻入科目
        <Input type="text" name="endDate" value={formData.endDate} onChange={handleChange} />
      </Label>
      <Label>
        相手方科目
        <Input type="text" name="cellNumber" value={formData.cellNumber} onChange={handleChange} />
        節
        <Input type="text" name="mail" value={formData.mail} onChange={handleChange} />
        細節
        <Input type="text" name="entryPeriod" value={formData.entryPeriod} onChange={handleChange} />
      </Label>
      <Label>
        戻入摘要
        <Textarea />
      </Label>
      <Label>
        納入期限
        <Input type="text" />
      </Label>
      <ButtonContainer>
        <Button type="button">OK</Button>
        <Button type="button">クリア</Button>
        <Button type="button">キャンセル</Button>
      </ButtonContainer>
    </Form>
  );
};

// Sample usage
const App: React.FC = () => {
  const handleSubmit = (data: FormData) => {
    console.log('Form submitted:', data);
  };

  return (
    <div>
      <h1>戻入金予定登録入情報</h1>
      <EntryForm onSubmit={handleSubmit} />
    </div>
  );
};

export default App;

// Styles
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 400px;
  margin: 0 auto;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Textarea = styled.textarea`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  justify-content: flex-end;
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