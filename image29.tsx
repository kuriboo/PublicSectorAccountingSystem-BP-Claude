import React from 'react';
import styled from '@emotion/styled';

type BookingFormProps = {
  onSubmit: (data: BookingData) => void;
};

type BookingData = {
  managementNumber: string;
  fiscalYear: string;
  startDate: string;
  endDate: string;
  startTime: string;
  endTime: string;
  overnightStayPurpose: string;
  dayTripPurpose: string;
  upkeepDivision: string;
  changeCounterpart: string;
  yearEndAdjustmentDivision: string;
  pricePerUnit: number;
  days: number;
  nights: number;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  @media (min-width: 768px) {
    max-width: 600px;
    margin: 0 auto;
  }
`;

const FormGroup = styled.div`
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
`;

const Select = styled.select`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const TextArea = styled.textarea`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const BookingForm: React.FC<BookingFormProps> = ({ onSubmit }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Collect form data and call onSubmit prop with the data
    const data: BookingData = {
      managementNumber: '',
      fiscalYear: '',
      startDate: '',
      endDate: '',
      startTime: '',
      endTime: '',
      overnightStayPurpose: '',
      dayTripPurpose: '',
      upkeepDivision: '',
      changeCounterpart: '',
      yearEndAdjustmentDivision: '',
      pricePerUnit: 0,
      days: 0,
      nights: 0,
    };
    onSubmit(data);
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <Label>管理マスタ</Label>
          <Input type="text" required />
        </FormGroup>
        <FormGroup>
          <Label>年度</Label>
          <Select required>
            <option value="">選択してください</option>
            {/* Add options for fiscal years */}
          </Select>
        </FormGroup>
        <FormGroup>
          <Label>利用日</Label>
          <Input type="date" required />
        </FormGroup>
        {/* Add more form fields */}
        <Button type="submit">登録</Button>
      </form>
    </Container>
  );
};

// Usage example
const App: React.FC = () => {
  const handleBookingSubmit = (data: BookingData) => {
    // Handle form submission
    console.log(data);
  };

  return (
    <div>
      <h1>公営企業会計システム</h1>
      <BookingForm onSubmit={handleBookingSubmit} />
    </div>
  );
};

export default App;