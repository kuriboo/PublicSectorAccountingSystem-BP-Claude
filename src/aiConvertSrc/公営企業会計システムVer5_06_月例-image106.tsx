import React from 'react';
import styled from '@emotion/styled';

type ReservationFormProps = {
  title: string;
  date: string;
  onSubmit: () => void;
  onCancel: () => void;
  onClear: () => void;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (min-width: 768px) {
    max-width: 500px;
    margin: 0 auto;
  }
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

const DateText = styled.p`
  font-size: 18px;
  margin-bottom: 10px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background-color: #007bff;
  color: #fff;

  &:hover {
    background-color: #0056b3;
  }
`;

const ReservationForm: React.FC<ReservationFormProps> = ({
  title,
  date,
  onSubmit,
  onCancel,
  onClear,
}) => {
  return (
    <Container>
      <Title>{title}</Title>
      <DateText>予約日：{date}</DateText>
      <ButtonContainer>
        <Button onClick={onSubmit}>予約</Button>
        <Button onClick={onCancel}>キャンセル</Button>
        <Button onClick={onClear}>終了</Button>
      </ButtonContainer>
    </Container>
  );
};

// Usage example
const App: React.FC = () => {
  const handleSubmit = () => {
    // Handle reservation submission
    console.log('Reservation submitted');
  };

  const handleCancel = () => {
    // Handle reservation cancellation
    console.log('Reservation canceled');
  };

  const handleClear = () => {
    // Handle form clear
    console.log('Form cleared');
  };

  return (
    <ReservationForm
      title="公営企業会計システム"
      date="平成29年09月04日"
      onSubmit={handleSubmit}
      onCancel={handleCancel}
      onClear={handleClear}
    />
  );
};

export default App;