import React from 'react';
import styled from '@emotion/styled';

type ReservationFormProps = {
  onSubmit: (data: ReservationData) => void;
};

type ReservationData = {
  date: string;
  time: string;
  numberOfPeople: number;
  name: string;
  phoneNumber: string;
  email: string;
  requests: string;
};

const ReservationForm: React.FC<ReservationFormProps> = ({ onSubmit }) => {
  const [reservationData, setReservationData] = React.useState<ReservationData>({
    date: '',
    time: '',
    numberOfPeople: 1,
    name: '',
    phoneNumber: '',
    email: '',
    requests: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setReservationData(prevData => ({
      ...prevData,
      [name]: name === 'numberOfPeople' ? parseInt(value) : value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(reservationData);
    // Clear form after submission
    setReservationData({
      date: '',
      time: '',
      numberOfPeople: 1,
      name: '',
      phoneNumber: '',
      email: '',
      requests: '',
    });
  };

  return (
    <FormContainer>
      <FormTitle>予約情報マスター</FormTitle>
      <Form onSubmit={handleSubmit}>
        <InputRow>
          <Label>
            予約日付
            <Input
              type="date"
              name="date"
              value={reservationData.date}
              onChange={handleChange}
              required
            />
          </Label>
          <Label>
            時刻
            <Input
              type="time"
              name="time"
              value={reservationData.time}
              onChange={handleChange}
              required
            />
          </Label>
        </InputRow>
        <InputRow>
          <Label>
            人数
            <Input
              type="number"
              name="numberOfPeople"
              min={1}
              value={reservationData.numberOfPeople}
              onChange={handleChange}
              required
            />
          </Label>
          <Label>
            予約者氏名
            <Input
              type="text"
              name="name"
              value={reservationData.name}
              onChange={handleChange}
              required
            />
          </Label>
        </InputRow>
        <InputRow>
          <Label>
            電話番号
            <Input
              type="tel"
              name="phoneNumber"
              value={reservationData.phoneNumber}
              onChange={handleChange}
              required
            />
          </Label>
          <Label>
            メールアドレス
            <Input
              type="email"
              name="email"
              value={reservationData.email}
              onChange={handleChange}
              required
            />
          </Label>
        </InputRow>
        <Label>
          備考
          <Textarea
            name="requests"
            value={reservationData.requests}
            onChange={handleChange}
          />
        </Label>
        <ButtonRow>
          <Button type="submit">登録</Button>
        </ButtonRow>
      </Form>
    </FormContainer>
  );
};

const FormContainer = styled.div`
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 5px;
`;

const FormTitle = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const InputRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-right: 10px;

  &:last-child {
    margin-right: 0;
  }
`;

const Input = styled.input`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
  margin-top: 5px;
`;

const Textarea = styled.textarea`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
  margin-top: 5px;
`;

const ButtonRow = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`;

const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 3px;
  cursor: pointer;
`;

// Sample usage
const SampleReservationForm: React.FC = () => {
  const handleSubmit = (data: ReservationData) => {
    console.log('Submitted reservation data:', data);
    // Perform further actions with the submitted data
  };

  return <ReservationForm onSubmit={handleSubmit} />;
};

export default SampleReservationForm;