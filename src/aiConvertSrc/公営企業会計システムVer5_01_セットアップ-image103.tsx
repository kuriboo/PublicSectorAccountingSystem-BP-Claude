import React from 'react';
import styled from 'styled-components';

// Type definition for the component props
interface ReservationFormProps {
  onSubmit: (data: ReservationData) => void;
  onCancel: () => void;
}

// Type definition for the reservation data
interface ReservationData {
  date: string;
  time: string;
  numberOfPeople: number;
  note?: string;
}

// Styled components
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 400px;
  margin: 0 auto;
`;

const InputGroup = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

const Label = styled.label`
  font-weight: bold;
`;

const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
`;

const Select = styled.select`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
`;

const Textarea = styled.textarea`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  resize: vertical;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
`;

const SubmitButton = styled(Button)`
  background-color: #007bff;
  color: #fff;

  &:hover {
    background-color: #0056b3;
  }
`;

const CancelButton = styled(Button)`
  background-color: #dc3545;
  color: #fff;

  &:hover {
    background-color: #a71d2a;
  }
`;

// Reservation form component
const ReservationForm: React.FC<ReservationFormProps> = ({ onSubmit, onCancel }) => {
  // State for form data
  const [formData, setFormData] = React.useState<ReservationData>({
    date: '',
    time: '',
    numberOfPeople: 1,
    note: '',
  });

  // Event handler for input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: name === 'numberOfPeople' ? Number(value) : value,
    }));
  };

  // Event handler for form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <InputGroup>
        <Label htmlFor="date">予約日</Label>
        <Input type="date" id="date" name="date" value={formData.date} onChange={handleChange} required />
      </InputGroup>

      <InputGroup>
        <Label htmlFor="time">時間</Label>
        <Select id="time" name="time" value={formData.time} onChange={handleChange} required>
          <option value="">選択してください</option>
          {/* Add options for available time slots */}
        </Select>
      </InputGroup>

      <InputGroup>
        <Label htmlFor="numberOfPeople">人数</Label>
        <Input
          type="number"
          id="numberOfPeople"
          name="numberOfPeople"
          min={1}
          value={formData.numberOfPeople}
          onChange={handleChange}
          required
        />
      </InputGroup>

      <InputGroup>
        <Label htmlFor="note">予約メモ</Label>
        <Textarea id="note" name="note" value={formData.note} onChange={handleChange} />
      </InputGroup>

      <ButtonGroup>
        <CancelButton type="button" onClick={onCancel}>
          キャンセル
        </CancelButton>
        <SubmitButton type="submit">予約</SubmitButton>
      </ButtonGroup>
    </Form>
  );
};

// Example usage of the ReservationForm component
const ExampleUsage: React.FC = () => {
  const handleSubmit = (data: ReservationData) => {
    console.log('Submitted data:', data);
    // Handle form submission
  };

  const handleCancel = () => {
    console.log('Reservation cancelled');
    // Handle cancellation
  };

  return <ReservationForm onSubmit={handleSubmit} onCancel={handleCancel} />;
};

export default ReservationForm;