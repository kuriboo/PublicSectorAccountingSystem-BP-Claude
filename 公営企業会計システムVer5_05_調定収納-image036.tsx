import React from 'react';
import styled from '@emotion/styled';

type ReservationFormProps = {
  onSubmit: (data: ReservationData) => void;
};

type ReservationData = {
  dateRange: [string, string];
  numberOfGuests: number;
  numberOfRooms: number;
};

const ReservationForm: React.FC<ReservationFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = React.useState<ReservationData>({
    dateRange: ['', ''],
    numberOfGuests: 0,
    numberOfRooms: 0,
  });

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
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label>期間指定</Label>
        <InputWrapper>
          <Input
            type="date"
            name="dateRange[0]"
            value={formData.dateRange[0]}
            onChange={handleChange}
            required
          />
          <Separator>~</Separator>
          <Input
            type="date"
            name="dateRange[1]"
            value={formData.dateRange[1]}
            onChange={handleChange}
            required
          />
        </InputWrapper>
      </FormGroup>
      <FormGroup>
        <Label>予算料金</Label>
        <InputWrapper>
          <Input
            type="number"
            name="numberOfGuests"
            value={formData.numberOfGuests}
            onChange={handleChange}
            required
          />
          <Separator>~</Separator>
          <Input
            type="number"
            name="numberOfGuests"
            value={formData.numberOfGuests}
            onChange={handleChange}
            required
          />
        </InputWrapper>
      </FormGroup>
      <FormGroup>
        <Label>所属</Label>
        <InputWrapper>
          <Input
            type="number"
            name="numberOfRooms"
            value={formData.numberOfRooms}
            onChange={handleChange}
          />
          <Separator>~</Separator>
          <Input
            type="number"
            name="numberOfRooms"
            value={formData.numberOfRooms}
            onChange={handleChange}
          />
        </InputWrapper>
      </FormGroup>
      <ButtonWrapper>
        <Button type="submit">終了</Button>
        <Button type="button">クリア</Button>
        <Button type="button">検索</Button>
      </ButtonWrapper>
    </Form>
  );
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Label = styled.label`
  font-weight: bold;
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Input = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
`;

const Separator = styled.span`
  margin: 0 4px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
`;

const Button = styled.button`
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

// Usage example
const ReservationFormExample: React.FC = () => {
  const handleSubmit = (data: ReservationData) => {
    console.log('Submitted data:', data);
  };

  return (
    <div>
      <h2>Reservation Form</h2>
      <ReservationForm onSubmit={handleSubmit} />
    </div>
  );
};

export default ReservationFormExample;