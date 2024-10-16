import React from 'react';
import styled from '@emotion/styled';

interface ReservationFormProps {
  availableDate: string;
  reservationPurpose: string;
  estimatedMoveInDate: string;
  sizeOfApartment: string;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  max-width: 400px;
  margin: 0 auto;
`;

const Title = styled.h2`
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Label = styled.label`
  margin-bottom: 10px;
`;

const Input = styled.input`
  padding: 8px;
  margin-bottom: 10px;
`;

const Select = styled.select`
  padding: 8px;
  margin-bottom: 10px;
`;

const SubmitButton = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const ReservationForm: React.FC<ReservationFormProps> = ({
  availableDate,
  reservationPurpose,
  estimatedMoveInDate,
  sizeOfApartment,
  onSubmit,
}) => {
  return (
    <Container>
      <Title>予算特定収入割合算定</Title>
      <Form onSubmit={onSubmit}>
        <Label>
          範囲指定
          <Input type="text" value={availableDate} readOnly />
          <Input type="text" value={reservationPurpose} readOnly />
        </Label>
        <Label>
          予算特定区分
          <Select value={estimatedMoveInDate}>
            <option value="当初予算">当初予算</option>
          </Select>
        </Label>
        <Label>
          最終査定値
          <Input type="text" value={sizeOfApartment} readOnly />
        </Label>
        <Label>
          割合算定結果
          <div>
            特定収入による仕入控除税額の調整要否: 未実施
            <br />
            特定収入割合: 未実施
          </div>
        </Label>
        <SubmitButton type="submit">終了</SubmitButton>
      </Form>
    </Container>
  );
};

// Usage example
const App: React.FC = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted');
  };

  return (
    <ReservationForm
      availableDate="令和03年度"
      reservationPurpose="当初予算"
      estimatedMoveInDate="当初予算"
      sizeOfApartment="基定額  1 回"
      onSubmit={handleSubmit}
    />
  );
};

export default App;