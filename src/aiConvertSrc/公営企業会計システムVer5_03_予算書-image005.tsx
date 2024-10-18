import React from 'react';
import styled from 'styled-components';

// Type definition for the component props
interface ReservationFormProps {
  onSubmit: (data: ReservationData) => void;
}

// Type definition for the reservation data
interface ReservationData {
  companyName: string;
  year: number;
  forecastCategory: string;
  amount: number;
  fiscalYear: {
    start: string;
    end: string;
  };
  collectMethod: string;
  comment: string;
}

// Styled components
const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f2f2f2;
  border-radius: 5px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  width: 100%;
`;

const Label = styled.label`
  margin-bottom: 5px;
  font-weight: bold;
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

const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

const ReservationForm: React.FC<ReservationFormProps> = ({ onSubmit }) => {
  // State to store the form data
  const [formData, setFormData] = React.useState<ReservationData>({
    companyName: '',
    year: 0,
    forecastCategory: '',
    amount: 0,
    fiscalYear: {
      start: '',
      end: '',
    },
    collectMethod: '',
    comment: '',
  });

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="companyName">Company Name</Label>
          <Input
            type="text"
            id="companyName"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="year">Year</Label>
          <Input
            type="number"
            id="year"
            name="year"
            value={formData.year}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="forecastCategory">Forecast Category</Label>
          <Select
            id="forecastCategory"
            name="forecastCategory"
            value={formData.forecastCategory}
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option value="category1">Category 1</option>
            <option value="category2">Category 2</option>
          </Select>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="amount">Amount</Label>
          <Input
            type="number"
            id="amount"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label>Fiscal Year</Label>
          <Input
            type="text"
            name="fiscalYear.start"
            value={formData.fiscalYear.start}
            onChange={handleChange}
            placeholder="Start"
            required
          />
          <Input
            type="text"
            name="fiscalYear.end"
            value={formData.fiscalYear.end}
            onChange={handleChange}
            placeholder="End"
            required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="collectMethod">Collect Method</Label>
          <Select
            id="collectMethod"
            name="collectMethod"
            value={formData.collectMethod}
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option value="method1">Method 1</option>
            <option value="method2">Method 2</option>
          </Select>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="comment">Comment</Label>
          <Input
            type="text"
            id="comment"
            name="comment"
            value={formData.comment}
            onChange={handleChange}
          />
        </FormGroup>
        <Button type="submit">Submit</Button>
      </form>
    </FormContainer>
  );
};

// Example usage of the ReservationForm component
const App: React.FC = () => {
  const handleSubmit = (data: ReservationData) => {
    console.log('Submitted data:', data);
    // Perform further actions with the submitted data
  };

  return (
    <div>
      <h1>Reservation Form</h1>
      <ReservationForm onSubmit={handleSubmit} />
    </div>
  );
};

export default App;