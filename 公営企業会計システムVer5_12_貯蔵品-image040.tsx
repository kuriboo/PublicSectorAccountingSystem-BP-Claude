import React from 'react';
import styled from '@emotion/styled';

type BookingFormProps = {
  onSubmit: (formData: BookingFormData) => void;
};

type BookingFormData = {
  date: string;
  time: string;
  numPeople: number;
  tableNumber: number;
  name: string;
  phoneNumber: string;
  comment: string;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 8px;
  width: 100%;
  max-width: 400px;
  box-sizing: border-box;

  @media (max-width: 600px) {
    max-width: 100%;
  }
`;

const FormField = styled.div`
  margin-bottom: 15px;
  width: 100%;
`;

const Label = styled.label`
  font-weight: bold;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

const Select = styled.select`
  width: 100%;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const BookingForm: React.FC<BookingFormProps> = ({ onSubmit }) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData: BookingFormData = {
      date: e.currentTarget.date.value,
      time: e.currentTarget.time.value,
      numPeople: parseInt(e.currentTarget.numPeople.value),
      tableNumber: parseInt(e.currentTarget.tableNumber.value),
      name: e.currentTarget.name.value,
      phoneNumber: e.currentTarget.phoneNumber.value,
      comment: e.currentTarget.comment.value,
    };
    onSubmit(formData);
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <FormField>
          <Label htmlFor="date">日付:</Label>
          <Input type="date" id="date" required />
        </FormField>
        <FormField>
          <Label htmlFor="time">時間:</Label>
          <Select id="time" required>
            <option value="">選択してください</option>
            <option value="12:00">12:00</option>
            <option value="13:00">13:00</option>
            <option value="14:00">14:00</option>
          </Select>
        </FormField>
        <FormField>
          <Label htmlFor="numPeople">人数:</Label>
          <Input type="number" id="numPeople" min="1" required />
        </FormField>
        <FormField>
          <Label htmlFor="tableNumber">テーブルNo.:</Label>
          <Input type="number" id="tableNumber" required />
        </FormField>
        <FormField>
          <Label htmlFor="name">名前:</Label>
          <Input type="text" id="name" required />
        </FormField>
        <FormField>
          <Label htmlFor="phoneNumber">電話番号:</Label>
          <Input type="tel" id="phoneNumber" required />
        </FormField>
        <FormField>
          <Label htmlFor="comment">摘要:</Label>
          <TextArea id="comment" rows={3}></TextArea>
        </FormField>
        <SubmitButton type="submit">予約</SubmitButton>
      </form>
    </Container>
  );
};

// Sample usage
const SampleBookingForm = () => {
  const handleSubmit = (formData: BookingFormData) => {
    console.log('Booking form submitted:', formData);
    // Handle form submission, e.g., send data to server
  };

  return <BookingForm onSubmit={handleSubmit} />;
};

export default SampleBookingForm;