import React from 'react';
import styled from '@emotion/styled';

type ReservationFormProps = {
  onSubmit: (data: ReservationData) => void;
};

type ReservationData = {
  date: string;
  time: string;
  course: string;
  numberOfPeople: number;
  name: string;
  phoneNumber: string;
  email: string;
  remarks: string;
  couponCode: string;
  paymentMethod: string;
  receiptNumber: string;
};

const ReservationForm: React.FC<ReservationFormProps> = ({ onSubmit }) => {
  const [reservationData, setReservationData] = React.useState<ReservationData>({
    date: '',
    time: '',
    course: '',
    numberOfPeople: 1,
    name: '',
    phoneNumber: '',
    email: '',
    remarks: '',
    couponCode: '',
    paymentMethod: '',
    receiptNumber: '',
  });

  // Handle input changes and update state
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setReservationData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(reservationData);
  };

  return (
    <FormContainer>
      <FormTitle>Reservation Form</FormTitle>
      <form onSubmit={handleSubmit}>
        <FormSection>
          <Label>Date:</Label>
          <Input type="date" name="date" value={reservationData.date} onChange={handleChange} required />
        </FormSection>

        <FormSection>
          <Label>Time:</Label>
          <Select name="time" value={reservationData.time} onChange={handleChange} required>
            <option value="">Select a time</option>
            <option value="11:00">11:00</option>
            <option value="12:00">12:00</option>
            <option value="13:00">13:00</option>
          </Select>
        </FormSection>

        <FormSection>
          <Label>Course:</Label>
          <Select name="course" value={reservationData.course} onChange={handleChange} required>
            <option value="">Select a course</option>
            <option value="Regular">Regular</option>
            <option value="Special">Special</option>
          </Select>
        </FormSection>

        <FormSection>
          <Label>Number of People:</Label>
          <Input type="number" name="numberOfPeople" min={1} value={reservationData.numberOfPeople} onChange={handleChange} required />
        </FormSection>

        <FormSection>
          <Label>Name:</Label>
          <Input type="text" name="name" value={reservationData.name} onChange={handleChange} required />
        </FormSection>

        <FormSection>
          <Label>Phone Number:</Label>
          <Input type="tel" name="phoneNumber" value={reservationData.phoneNumber} onChange={handleChange} required />
        </FormSection>

        <FormSection>
          <Label>Email:</Label>
          <Input type="email" name="email" value={reservationData.email} onChange={handleChange} />
        </FormSection>

        <FormSection>
          <Label>Remarks:</Label>
          <Textarea name="remarks" value={reservationData.remarks} onChange={handleChange} />
        </FormSection>

        <FormSection>
          <Label>Coupon Code:</Label>
          <Input type="text" name="couponCode" value={reservationData.couponCode} onChange={handleChange} />
        </FormSection>

        <FormSection>
          <Label>Payment Method:</Label>
          <Select name="paymentMethod" value={reservationData.paymentMethod} onChange={handleChange}>
            <option value="">Select a payment method</option>
            <option value="Cash">Cash</option>
            <option value="Credit Card">Credit Card</option>
          </Select>
        </FormSection>

        <FormSection>
          <Label>Receipt Number:</Label>
          <Input type="text" name="receiptNumber" value={reservationData.receiptNumber} onChange={handleChange} />
        </FormSection>

        <SubmitButton type="submit">Submit</SubmitButton>
      </form>
    </FormContainer>
  );
};

// Styled components
const FormContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 5px;
`;

const FormTitle = styled.h2`
  margin-bottom: 20px;
  text-align: center;
`;

const FormSection = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Select = styled.select`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

// Sample usage
const App: React.FC = () => {
  const handleSubmit = (data: ReservationData) => {
    console.log('Submitted data:', data);
    // Perform further actions with the submitted data
  };

  return (
    <div>
      <h1>Reservation Form Example</h1>
      <ReservationForm onSubmit={handleSubmit} />
    </div>
  );
};

export default App;