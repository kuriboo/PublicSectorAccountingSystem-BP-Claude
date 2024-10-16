import React from 'react';
import styled from '@emotion/styled';

interface ReservationFormProps {
  onSubmit: (data: ReservationData) => void;
}

interface ReservationData {
  date: string;
  time: string;
  numberOfPeople: number;
  name: string;
  phoneNumber: string;
  email: string;
  requests: string;
}

const ReservationForm: React.FC<ReservationFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = React.useState<ReservationData>({
    date: '',
    time: '',
    numberOfPeople: 1,
    name: '',
    phoneNumber: '',
    email: '',
    requests: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
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
      <FormGroup>
        <Label>予約日</Label>
        <Input type="date" name="date" value={formData.date} onChange={handleChange} required />
      </FormGroup>
      <FormGroup>
        <Label>予約時間</Label>
        <Input type="time" name="time" value={formData.time} onChange={handleChange} required />
      </FormGroup>
      <FormGroup>
        <Label>予約人数</Label>
        <Input
          type="number"
          name="numberOfPeople"
          min={1}
          value={formData.numberOfPeople}
          onChange={handleChange}
          required
        />
      </FormGroup>
      <FormGroup>
        <Label>予約者氏名</Label>
        <Input type="text" name="name" value={formData.name} onChange={handleChange} required />
      </FormGroup>
      <FormGroup>
        <Label>連絡先電話番号</Label>
        <Input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />
      </FormGroup>
      <FormGroup>
        <Label>メールアドレス</Label>
        <Input type="email" name="email" value={formData.email} onChange={handleChange} required />
      </FormGroup>
      <FormGroup>
        <Label>要望・質問</Label>
        <Textarea name="requests" value={formData.requests} onChange={handleChange} />
      </FormGroup>
      <SubmitButton type="submit">予約</SubmitButton>
    </Form>
  );
};

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
`;

const Label = styled.label`
  font-weight: bold;
  margin-bottom: 0.5rem;
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
  min-height: 100px;
`;

const SubmitButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

// Usage example
const ExampleComponent: React.FC = () => {
  const handleReservationSubmit = (data: ReservationData) => {
    console.log('Reservation submitted:', data);
    // Handle form submission, e.g., send data to server
  };

  return (
    <div>
      <h2>Reservation Form</h2>
      <ReservationForm onSubmit={handleReservationSubmit} />
    </div>
  );
};

export default ExampleComponent;