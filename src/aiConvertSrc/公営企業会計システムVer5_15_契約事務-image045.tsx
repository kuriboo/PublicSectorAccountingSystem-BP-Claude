import React from 'react';
import styled from '@emotion/styled';

interface ReservationFormProps {
  onSubmit: (data: ReservationData) => void;
}

interface ReservationData {
  division: string;
  executionDate: string;
  partyNumber: string;
  allReservation: string;
  notification: string;
  memo: string;
}

const ReservationForm: React.FC<ReservationFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = React.useState<ReservationData>({
    division: '工事',
    executionDate: '',
    partyNumber: '',
    allReservation: '',
    notification: '',
    memo: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label>予定区分</Label>
        <Select name="division" value={formData.division} onChange={handleChange}>
          <option value="工事">工事</option>
          <option value="委託区分">委託区分</option>
        </Select>
      </FormGroup>
      <FormGroup>
        <Label>作業年月日</Label>
        <Input type="date" name="executionDate" value={formData.executionDate} onChange={handleChange} required />
      </FormGroup>
      <FormGroup>
        <Label>作業者</Label>
        <Input type="text" name="partyNumber" value={formData.partyNumber} onChange={handleChange} />
      </FormGroup>
      <FormGroup>
        <Label>通知文</Label>
        <Select name="notification" value={formData.notification} onChange={handleChange}>
          <option value="">文章マスタ位置No1</option>
          <option value="">文章マスタ位置No2</option>
          <option value="">通知文2</option>
          <option value="">通知文3</option>
        </Select>
      </FormGroup>
      <FormGroup>
        <Label>備考</Label>
        <Textarea name="memo" value={formData.memo} onChange={handleChange} />
      </FormGroup>
      <Button type="submit">登録</Button>
    </Form>
  );
};

// Styling with CSS-in-JS
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 400px;
  margin: 0 auto;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  font-weight: bold;
`;

const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Select = styled.select`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Textarea = styled.textarea`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export default ReservationForm;

// Sample usage
const SampleUsage: React.FC = () => {
  const handleSubmit = (data: ReservationData) => {
    console.log('Form submitted:', data);
  };

  return (
    <div>
      <h2>予定依頼会計システム</h2>
      <ReservationForm onSubmit={handleSubmit} />
    </div>
  );
};