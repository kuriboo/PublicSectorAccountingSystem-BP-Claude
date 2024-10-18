import React from 'react';
import styled from '@emotion/styled';

type SupportTicketFormProps = {
  onSubmit: (formData: FormData) => void;
};

type FormData = {
  period: string;
  startDate: string;
  endDate: string;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px;
  background-color: #f0f0f0;
  border-radius: 4px;
  width: 100%;
  box-sizing: border-box;

  @media (min-width: 768px) {
    max-width: 400px;
  }
`;

const Label = styled.label`
  margin-bottom: 8px;
`;

const Select = styled.select`
  padding: 4px;
  margin-right: 8px;
`;

const Input = styled.input`
  padding: 4px;
  margin-right: 8px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-top: 16px;
`;

const Button = styled.button`
  padding: 8px 16px;
  margin-left: 8px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const SupportTicketForm: React.FC<SupportTicketFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = React.useState<FormData>({
    period: '',
    startDate: '',
    endDate: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <Container>
      <Label>
        期間指定
        <Select name="period" value={formData.period} onChange={handleChange}>
          <option value="">所属別</option>
          <option value="all">全て</option>
          <option value="department">未決定</option>
        </Select>
        〜
        <Select name="period" value={formData.period} onChange={handleChange}>
          <option value="">所属別</option>
          <option value="all">全て</option>
          <option value="department">未決定</option>
        </Select>
      </Label>
      <Label>
        負担処理日
        <Input
          type="date"
          name="startDate"
          value={formData.startDate}
          onChange={handleChange}
        />
        〜
        <Input type="date" name="endDate" value={formData.endDate} onChange={handleChange} />
      </Label>
      <ButtonContainer>
        <Button type="button">クリア</Button>
        <Button type="submit" onClick={handleSubmit}>
          終了
        </Button>
        <Button type="button">終了</Button>
      </ButtonContainer>
    </Container>
  );
};

// サンプルデータと使用例
const sampleData: FormData = {
  period: 'all',
  startDate: '2023-06-01',
  endDate: '2023-06-30',
};

const App: React.FC = () => {
  const handleSubmit = (formData: FormData) => {
    console.log('Submitted form data:', formData);
  };

  return (
    <div>
      <h1>Support Ticket Form</h1>
      <SupportTicketForm onSubmit={handleSubmit} />
    </div>
  );
};

export default App;