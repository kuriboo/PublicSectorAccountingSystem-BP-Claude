import React from 'react';
import styled from '@emotion/styled';

interface ReservationFormProps {
  onSubmit: (data: ReservationData) => void;
}

interface ReservationData {
  reservationType: string;
  selectedRoom: string;
  taxInvoice: 'personal' | 'corporate';
  paymentMethod: 'creditCard' | 'electronicTransfer';
  dailyAmount: string;
  periodFrom: string;
  periodTo: string;
  taxRate: string;
}

const ReservationForm: React.FC<ReservationFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = React.useState<ReservationData>({
    reservationType: '個人予約',
    selectedRoom: '',
    taxInvoice: 'personal',
    paymentMethod: 'creditCard',
    dailyAmount: '',
    periodFrom: '',
    periodTo: '',
    taxRate: '10',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(formData);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label>予算種別</Label>
        <Select 
          name="reservationType"
          value={formData.reservationType}
          onChange={handleChange}
        >
          <option value="個人予約">個人予約</option>
          {/* Add other reservation types */}
        </Select>
      </FormGroup>

      <FormGroup>
        <Label>回数</Label>
        <Input
          type="text"
          name="selectedRoom"
          value={formData.selectedRoom}
          onChange={handleChange}
        />
      </FormGroup>
      
      <FormGroup>
        <Label>帳票種別</Label>
        <RadioGroup>
          <Radio
            type="radio"
            name="taxInvoice"
            value="personal"
            checked={formData.taxInvoice === 'personal'}
            onChange={handleChange}
          />
          <RadioLabel>科目別</RadioLabel>
          
          <Radio
            type="radio"
            name="taxInvoice"
            value="corporate"
            checked={formData.taxInvoice === 'corporate'} 
            onChange={handleChange}
          />
          <RadioLabel>所属別</RadioLabel>
        </RadioGroup>
      </FormGroup>

      <FormGroup>
        <Label>科目レベル</Label>
        {/* Add checkboxes for 日, 節, 細節, 明細 */}
      </FormGroup>

      <FormGroup>
        <Label>範囲指定</Label>
        <Input
          type="text"
          name="periodFrom"
          value={formData.periodFrom}
          onChange={handleChange}
          placeholder="所属"
        />
        <Span>〜</Span>
        <Input
          type="text"
          name="periodTo"
          value={formData.periodTo}
          onChange={handleChange}
          placeholder="所属"
        />
      </FormGroup>

      <FormGroup>
        <Label>税率指定</Label>
        <Input
          type="text"
          name="taxRate"
          value={formData.taxRate}
          onChange={handleChange}
        />
        <Span>%</Span>
        {/* Add radio buttons for 指定しない and 指定する */}
      </FormGroup>
      
      <Button type="submit">終了</Button>
    </Form>
  );
};

// Sample usage
const SampleReservationForm = () => {
  const handleReservationSubmit = (data: ReservationData) => {
    console.log('Reservation submitted:', data);
    // Handle form submission
  };

  return (
    <div>
      <h2>Reservation Form</h2>
      <ReservationForm onSubmit={handleReservationSubmit} />
    </div>
  );
};

// Styled components
const Form = styled.form`
  /* Add your form styles */
`;

const FormGroup = styled.div`
  /* Add your form group styles */
`;

const Label = styled.label`
  /* Add your label styles */
`;

const Select = styled.select`
  /* Add your select styles */
`;

const Input = styled.input`
  /* Add your input styles */
`;

const RadioGroup = styled.div`
  /* Add your radio group styles */
`;

const Radio = styled.input`
  /* Add your radio styles */
`;

const RadioLabel = styled.label`
  /* Add your radio label styles */  
`;

const Span = styled.span`
  /* Add your span styles */
`;

const Button = styled.button`
  /* Add your button styles */
`;

export default ReservationForm;