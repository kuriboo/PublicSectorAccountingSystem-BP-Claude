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
  isSmoking: boolean;
}

const ReservationForm: React.FC<ReservationFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = React.useState<ReservationData>({
    date: '',
    time: '',
    numberOfPeople: 1,
    name: '',
    phoneNumber: '',
    isSmoking: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    setFormData((prevData) => ({ ...prevData, [name]: newValue }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label>予約日付</Label>
        <Input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />
      </FormGroup>
      <FormGroup>
        <Label>時点</Label>
        <Input
          type="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          required
        />
      </FormGroup>
      <FormGroup>
        <Label>人数</Label>
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
        <Label>氏名</Label>
        <Input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </FormGroup>
      <FormGroup>
        <Label>電話番号</Label>
        <Input
          type="tel"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          required
        />
      </FormGroup>
      <FormGroup>
        <Label>
          <Input
            type="checkbox"
            name="isSmoking"
            checked={formData.isSmoking}
            onChange={handleChange}
          />
          喫煙する
        </Label>
      </FormGroup>
      <SubmitButton type="submit">予約</SubmitButton>
    </Form>
  );
};

// Styled components
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
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const SubmitButton = styled.button`
  padding: 0.5rem;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

// Example usage
const ExampleUsage: React.FC = () => {
  const handleSubmit = (data: ReservationData) => {
    console.log('Submitted data:', data);
    // Handle form submission here
  };

  return (
    <div>
      <h1>Reservation Form</h1>
      <ReservationForm onSubmit={handleSubmit} />
    </div>
  );
};

export default ExampleUsage;