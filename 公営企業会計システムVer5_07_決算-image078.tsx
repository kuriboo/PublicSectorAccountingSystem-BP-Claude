import React from 'react';
import styled from 'styled-components';

// Type definitions
interface WaterReceiptEnquiryFormProps {
  onSubmit: (formData: FormData) => void;
}

interface FormData {
  division: string;
  dateFrom: string;
  dateTo: string;
  acrobaticsTbd: boolean;
  acrobaticsDivision: boolean;
  collect: boolean;
  delivery: boolean;
  collectByHand: boolean;
  document: boolean;
  mailing: boolean;
  specialDeliveryByHand: boolean;
  tran: string;
  tranFrom: string;
  tranTo: string;
}

// Styled components
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  background-color: #f0f0f0;
  border-radius: 4px;
`;

const Row = styled.div`
  display: flex;
  gap: 1rem;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  margin-right: 0.5rem;
`;

const Select = styled.select`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

// WaterReceiptEnquiryForm component
const WaterReceiptEnquiryForm: React.FC<WaterReceiptEnquiryFormProps> = ({ onSubmit }) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data: FormData = {
      division: formData.get('division') as string,
      dateFrom: formData.get('dateFrom') as string,
      dateTo: formData.get('dateTo') as string,
      acrobaticsTbd: formData.has('acrobaticsTbd'),
      acrobaticsDivision: formData.has('acrobaticsDivision'),
      collect: formData.has('collect'),
      delivery: formData.has('delivery'),
      collectByHand: formData.has('collectByHand'),
      document: formData.has('document'),
      mailing: formData.has('mailing'),
      specialDeliveryByHand: formData.has('specialDeliveryByHand'),
      tran: formData.get('tran') as string,
      tranFrom: formData.get('tranFrom') as string,
      tranTo: formData.get('tranTo') as string,
    };
    onSubmit(data);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Label>
          Division:
          <Input type="text" name="division" />
        </Label>
        <Label>
          <Checkbox name="acrobaticsTbd" />
          Acrobatics TBD
        </Label>
        <Label>
          <Checkbox name="acrobaticsDivision" />
          Acrobatics Division
        </Label>
      </Row>
      <Row>
        <Label>
          Date From:
          <Input type="date" name="dateFrom" />
        </Label>
        <Label>
          Date To:
          <Input type="date" name="dateTo" />
        </Label>
      </Row>
      <Row>
        <Label>
          <Checkbox name="collect" />
          Collect
        </Label>
        <Label>
          <Checkbox name="delivery" />
          Delivery
        </Label>
        <Label>
          <Checkbox name="collectByHand" />
          Collect by Hand
        </Label>
        <Label>
          <Checkbox name="document" />
          Document
        </Label>
        <Label>
          <Checkbox name="mailing" />
          Mailing
        </Label>
        <Label>
          <Checkbox name="specialDeliveryByHand" />
          Special Delivery by Hand
        </Label>
      </Row>
      <Row>
        <Label>
          Tran:
          <Input type="text" name="tran" />
        </Label>
        <Label>
          Tran From:
          <Input type="text" name="tranFrom" />
        </Label>
        <Label>
          Tran To:
          <Input type="text" name="tranTo" />
        </Label>
      </Row>
      <Button type="submit">Submit</Button>
    </Form>
  );
};

// Sample usage
const App: React.FC = () => {
  const handleSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <div>
      <h1>Water Receipt Enquiry Form</h1>
      <WaterReceiptEnquiryForm onSubmit={handleSubmit} />
    </div>
  );
};

export default App;