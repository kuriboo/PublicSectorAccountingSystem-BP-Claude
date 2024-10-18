import React from 'react';
import styled from '@emotion/styled';

interface BookingFormProps {
  onSubmit: (data: BookingData) => void;
}

interface BookingData {
  date: string;
  time: string;
  course: string;
  location: string;
  players: number;
  membership: number;
  consumptionTax: number;
  totalFee: number;
  depositAmount: number;
  depositTax: number;
  courseRental: number;
  caddyFee: number;
  note: string;
}

const BookingForm: React.FC<BookingFormProps> = ({ onSubmit }) => {
  // State for form data
  const [formData, setFormData] = React.useState<BookingData>({
    date: '',
    time: '',
    course: '',
    location: '',
    players: 0,
    membership: 0,
    consumptionTax: 0,
    totalFee: 0,
    depositAmount: 0,
    depositTax: 0, 
    courseRental: 0,
    caddyFee: 0,
    note: '',
  });

  // Event handlers for input changes
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Event handler for form submission  
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit(formData);
  };

  return (
    <FormContainer>
      <FormHeader>工事新払振替明細登録</FormHeader>
      <FormSection>
        <FormLabel>予算科目</FormLabel>
        <FormInput type="text" name="date" value={formData.date} onChange={handleInputChange} />
        <FormInput type="text" name="time" value={formData.time} onChange={handleInputChange} />  
        <FormInput type="text" name="course" value={formData.course} onChange={handleInputChange} />
        <FormLabel>税区分</FormLabel>
        <FormSelect name="location" value={formData.location} onChange={handleInputChange}>
          <option value="">課税</option>
          {/* Add more options */}
        </FormSelect>  
      </FormSection>

      <FormSection>
        <FormLabel>振替額</FormLabel>
        <FormInput type="number" name="players" value={formData.players} onChange={handleInputChange} />
        <FormLabel>本体金額</FormLabel>
        <FormInput type="number" name="membership" value={formData.membership} onChange={handleInputChange} readOnly />
        <FormLabel>消費税率</FormLabel>
        <FormInputSmall type="number" name="consumptionTax" value={formData.consumptionTax} onChange={handleInputChange} />
        <span>%</span>
        <FormLabel>消費税額</FormLabel>
        <FormInput type="number" name="depositAmount" value={formData.depositAmount} onChange={handleInputChange} />
      </FormSection>

      <FormSection>
        <FormLabel>摘要</FormLabel>
        <FormTextarea name="note" value={formData.note} onChange={handleInputChange} />
      </FormSection>
      
      <FormButton type="submit" onClick={handleSubmit}>追加</FormButton>
    </FormContainer>
  );
};

// Styled components 
const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f2f2f2;
`;

const FormHeader = styled.h2`
  margin-bottom: 20px;
`;

const FormSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 15px;
  width: 100%;
`;

const FormLabel = styled.label`
  margin-right: 10px;
  width: 100px;
`;

const FormInput = styled.input`
  padding: 5px;
  margin-right: 10px;
  width: 150px;
`;

const FormInputSmall = styled.input`
  padding: 5px;
  margin-right: 5px;
  width: 50px;
`;

const FormSelect = styled.select`
  padding: 5px;
  margin-right: 10px;
  width: 150px;
`;

const FormTextarea = styled.textarea`
  padding: 5px;
  width: 100%;
`;

const FormButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
`;

// Sample usage
const SampleBookingForm = () => {
  const handleBookingSubmit = (data: BookingData) => {
    // Handle form submission 
    console.log(data);
  };

  return (
    <div>
      <h1>Booking Form Sample</h1>  
      <BookingForm onSubmit={handleBookingSubmit} />
    </div>
  );
};

export default SampleBookingForm;