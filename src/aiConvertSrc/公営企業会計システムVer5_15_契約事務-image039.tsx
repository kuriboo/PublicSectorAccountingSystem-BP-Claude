import React from 'react';
import styled from '@emotion/styled';

type EntryFormProps = {
  onSubmit: (data: FormData) => void;
};

type FormData = {
  date: string;
  dateType: string;
  company: string;
  project: string;
  remarks: string[];
  extra: string[];
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f0f0f0;
  @media (min-width: 768px) {
    max-width: 600px;
    margin: 0 auto;
  }
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  width: 100%;
`;

const Label = styled.label`
  font-weight: bold;
  margin-bottom: 5px;
`;

const Input = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
`;

const Select = styled.select`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
`;

const TextArea = styled.textarea`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  min-height: 100px;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 8px 16px;
  margin-left: 10px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

const EntryForm: React.FC<EntryFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = React.useState<FormData>({
    date: '',
    dateType: '',
    company: '',
    project: '',
    remarks: ['', '', ''],
    extra: ['', '', ''],
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleArrayChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>,
    index: number,
    field: keyof FormData
  ) => {
    const { value } = e.target;
    setFormData((prevData) => {
      const updatedArray = [...prevData[field]];
      updatedArray[index] = value;
      return { ...prevData, [field]: updatedArray };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <InputGroup>
          <Label>日付</Label>
          <Input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </InputGroup>
        <InputGroup>
          <Label>会議区分</Label>
          <Select name="dateType" value={formData.dateType} onChange={handleChange} required>
            <option value="">選択してください</option>
            <option value="手当">手当</option>
            <option value="特別">特別</option>
          </Select>
        </InputGroup>
        <InputGroup>
          <Label>会社</Label>
          <Input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            required
          />
        </InputGroup>
        <InputGroup>
          <Label>プロジェクト</Label>
          <Input
            type="text"
            name="project"
            value={formData.project}
            onChange={handleChange}
            required
          />
        </InputGroup>
        <InputGroup>
          <Label>記事</Label>
          {formData.remarks.map((remark, index) => (
            <TextArea
              key={index}
              value={remark}
              onChange={(e) => handleArrayChange(e, index, 'remarks')}
            />
          ))}
        </InputGroup>
        <InputGroup>
          <Label>備考</Label>
          {formData.extra.map((extra, index) => (
            <Input
              key={index}
              type="text"
              value={extra}
              onChange={(e) => handleArrayChange(e, index, 'extra')}
            />
          ))}
        </InputGroup>
        <ButtonGroup>
          <Button type="button">クリア</Button>
          <Button type="submit">終了</Button>
        </ButtonGroup>
      </form>
    </Container>
  );
};

// Usage example
const App: React.FC = () => {
  const handleFormSubmit = (data: FormData) => {
    console.log('Form submitted:', data);
  };

  return (
    <div>
      <h1>入札執行伺</h1>
      <EntryForm onSubmit={handleFormSubmit} />
    </div>
  );
};

export default App;