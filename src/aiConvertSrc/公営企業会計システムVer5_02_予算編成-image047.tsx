import React from 'react';
import styled from 'styled-components';

// Define types for component props
type AgreementFormProps = {
  year: number;
  default: 'fiscal' | 'calendar';
  onSubmit: (data: FormData) => void;
};

type FormData = {
  adjustmentRate: number;
  adjustmentAmount: number;
  reservationPeriodFrom: string;
  reservationPeriodTo: string;
  termsAgreed: boolean;
};

// Define styled components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
  max-width: 500px;
  box-sizing: border-box;

  @media (max-width: 600px) {
    max-width: 100%;
  }
`;

const Title = styled.h2`
  margin: 0;
`;

const Row = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const Label = styled.label`
  flex: 1;
`;

const Input = styled.input`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
  width: 150px;
  box-sizing: border-box;
`;

const Select = styled.select`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
  width: 150px;
  box-sizing: border-box;
`;

const Radio = styled.input.attrs({ type: 'radio' })`
  margin-right: 5px;
`;

const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  margin-right: 5px;
`;

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

// Define main component
const AgreementForm: React.FC<AgreementFormProps> = ({ year, default: defaultValue, onSubmit }) => {
  const [formData, setFormData] = React.useState<FormData>({
    adjustmentRate: 5,
    adjustmentAmount: 0,
    reservationPeriodFrom: '',
    reservationPeriodTo: '',
    termsAgreed: false,
  });

  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type, checked } = e.target;
    const inputValue = type === 'checkbox' ? checked : value;
    setFormData(prevData => ({ ...prevData, [name]: inputValue }));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <Container>
      <Title>Adjustment Amount - Preview</Title>
      <Row>
        <Label>Adjustment Rate:</Label>
        <Input type="number" name="adjustmentRate" min="0" value={formData.adjustmentRate} onChange={handleChange} />%
      </Row>
      <Row>
        <Label>Adjustment Amount:</Label>
        <Radio name="adjustmentAmount" value="fiscal" checked={defaultValue === 'fiscal'} onChange={handleChange} />Fiscal Year
        <Radio name="adjustmentAmount" value="calendar" checked={defaultValue === 'calendar'} onChange={handleChange} />Calendar Year
      </Row>
      <Row>
        <Label>Reservation Period:</Label>
        Prior <Select name="reservationPeriodFrom" value={formData.reservationPeriodFrom} onChange={handleChange}>
          <option value="">Select...</option>
        </Select> ~
        Post <Select name="reservationPeriodTo" value={formData.reservationPeriodTo} onChange={handleChange}>
          <option value="">Select...</option>  
        </Select>
      </Row>
      <Row>
        <Checkbox name="termsAgreed" checked={formData.termsAgreed} onChange={handleChange} />
        I agree to the reservation terms
      </Row>
      <Row>
        <Button type="button" onClick={handleSubmit}>OK</Button>
        <Button type="button">Clear</Button>
        <Button type="button">End</Button>
      </Row>
    </Container>
  );
};



// Example usage
const handleFormSubmit = (data: FormData) => {
  console.log('Form submitted:', data);
  // Handle form submission logic here
};

const SampleUsage: React.FC = () => {
  return (
    <div>
      <h1>Agreement Form Sample</h1>
      <AgreementForm year={2023} default="fiscal" onSubmit={handleFormSubmit} />
    </div>
  );
};

export default SampleUsage;