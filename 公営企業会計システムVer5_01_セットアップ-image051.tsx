import React from 'react';
import styled from '@emotion/styled';

type FormData = {
  reservation_date: string;
  return_date: string;
};

type ScheduleFormProps = {
  onSubmit: (data: FormData) => void;
};

const ScheduleForm: React.FC<ScheduleFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = React.useState<FormData>({
    reservation_date: '',
    return_date: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label>予算科目</Label>
        <Input
          type="text"
          name="reservation_date"
          value={formData.reservation_date}
          onChange={handleChange}
          required
        />
      </FormGroup>
      <FormGroup>
        <Label>仕訳科目</Label>
        <Input
          type="text"
          name="return_date"
          value={formData.return_date}
          onChange={handleChange}
          required
        />
      </FormGroup>
      <ButtonGroup>
        <Button type="button">OK</Button>
        <Button type="button">クリア</Button>
        <Button type="submit">終了</Button>
      </ButtonGroup>
    </Form>
  );
};

// Styled components
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  background-color: #f0f0f0;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  font-weight: bold;
`;

const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 1rem;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

// Sample usage
const SampleUsage: React.FC = () => {
  const handleSubmit = (data: FormData) => {
    console.log('Submitted data:', data);
  };

  return (
    <div>
      <h1>科目整理用データ取込</h1>
      <ScheduleForm onSubmit={handleSubmit} />
    </div>
  );
};

export default SampleUsage;