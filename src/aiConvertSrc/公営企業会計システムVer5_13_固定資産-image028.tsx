import React from 'react';
import styled from '@emotion/styled';

interface ReservationFormProps {
  onSubmit: (formData: ReservationFormData) => void;
}

interface ReservationFormData {
  date: string;
  reservationType: string;
  startNumber?: string;
  endNumber?: string;
  startDate?: string;
  endDate?: string;
  purpose?: string;
}

const ReservationForm: React.FC<ReservationFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = React.useState<ReservationFormData>({
    date: '',
    reservationType: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        作業年月日
        <Input type="date" name="date" value={formData.date} onChange={handleChange} required />
      </Label>

      <Label>
        会計区分
        <Select name="reservationType" value={formData.reservationType} onChange={handleChange} required>
          <option value="">会計区分別</option>
          <option value="print">印字しない</option>
        </Select>
      </Label>

      <NumberInputContainer>
        <Label>
          範囲指定
          <Input type="text" name="startNumber" value={formData.startNumber} onChange={handleChange} />
        </Label>
        <span>～</span>
        <Label>
          <Input type="text" name="endNumber" value={formData.endNumber} onChange={handleChange} />
        </Label>
      </NumberInputContainer>

      <DateInputContainer>
        <Label>
          異動年月日
          <Input type="date" name="startDate" value={formData.startDate} onChange={handleChange} />
        </Label>
        <span>～</span>
        <Label>
          <Input type="date" name="endDate" value={formData.endDate} onChange={handleChange} />
        </Label>
      </DateInputContainer>

      <Label>
        異動区分
        <Select name="purpose" value={formData.purpose} onChange={handleChange}>
          <option value="addition">除却のみ</option>
          <option value="removal">廃棄のみ</option>
          <option value="both">除却と廃棄</option>
        </Select>  
      </Label>

      <ButtonContainer>
        <Button type="button">クリア</Button>
        <Button type="submit">終了</Button>  
      </ButtonContainer>
    </Form>
  );
};

// Sample usage
const SampleReservationForm = () => {
  const handleSubmit = (data: ReservationFormData) => {
    console.log(data);
    // Handle form submission
  };

  return (
    <ReservationForm onSubmit={handleSubmit} />
  );
};

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

const NumberInputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const DateInputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
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