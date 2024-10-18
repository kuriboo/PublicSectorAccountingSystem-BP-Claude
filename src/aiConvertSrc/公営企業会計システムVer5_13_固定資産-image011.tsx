import React from 'react';
import styled from '@emotion/styled';

type FormData = {
  date: string;
  region: string;
  rangeStart: string;
  rangeEnd: string;
  tenure: number;
  tenureEnd: string;
};

type Props = {
  initialData?: FormData;
  onSubmit: (data: FormData) => void;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
`;

const Label = styled.label`
  margin-bottom: 8px;
`;

const Input = styled.input`
  padding: 8px;
  margin-bottom: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const RadioGroup = styled.div`
  display: flex;
  margin-bottom: 16px;
`;

const RadioLabel = styled.label`
  margin-right: 16px;
`;

const Button = styled.button`
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const CompanyForm: React.FC<Props> = ({ initialData, onSubmit }) => {
  const [formData, setFormData] = React.useState<FormData>(
    initialData || {
      date: '',
      region: '',
      rangeStart: '',
      rangeEnd: '',
      tenure: 0,
      tenureEnd: '',
    }
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <Container>
      <Title>Company Form</Title>
      <Form onSubmit={handleSubmit}>
        <Label>Date:</Label>
        <Input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
        />

        <Label>Region:</Label>
        <Input
          type="text"
          name="region"
          value={formData.region}
          onChange={handleChange}
        />

        <Label>Range:</Label>
        <Input
          type="text"
          name="rangeStart"
          value={formData.rangeStart}
          onChange={handleChange}
        />
        <span>~</span>
        <Input
          type="text"
          name="rangeEnd"
          value={formData.rangeEnd}
          onChange={handleChange}
        />

        <Label>Tenure:</Label>
        <RadioGroup>
          <RadioLabel>
            <input
              type="radio"
              name="tenure"
              value={0}
              checked={formData.tenure === 0}
              onChange={handleChange}
            />
            Full-time
          </RadioLabel>
          <RadioLabel>
            <input
              type="radio"
              name="tenure"
              value={1}
              checked={formData.tenure === 1}
              onChange={handleChange}
            />
            Part-time
          </RadioLabel>
        </RadioGroup>

        <Label>Tenure End:</Label>
        <Input
          type="date"
          name="tenureEnd"
          value={formData.tenureEnd}
          onChange={handleChange}
        />

        <Button type="submit">Submit</Button>
      </Form>
    </Container>
  );
};

// Sample usage
const App: React.FC = () => {
  const handleSubmit = (data: FormData) => {
    console.log('Submitted data:', data);
  };

  return (
    <div>
      <CompanyForm onSubmit={handleSubmit} />
    </div>
  );
};

export default App;