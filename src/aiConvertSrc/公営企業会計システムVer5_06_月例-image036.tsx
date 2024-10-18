import React from 'react';
import styled from '@emotion/styled';

interface ReservationSystemProps {
  title?: string;
  date?: string;
  onClose?: () => void;
  onCancel?: () => void;
  onFinish?: () => void;
}

const ReservationSystem: React.FC<ReservationSystemProps> = ({
  title = '資金予算表作成',
  date = '平成29年09月04日',
  onClose,
  onCancel,
  onFinish,
}) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Date>{date}</Date>
      <ButtonContainer>
        <Button onClick={onFinish}>終了</Button>
        <Button onClick={onCancel}>クリア</Button>
        <Button onClick={onClose}>OK</Button>
      </ButtonContainer>
    </Container>
  );
};

const Container = styled.div`
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  padding: 16px;
  width: 400px;
  margin: 0 auto;

  @media (max-width: 480px) {
    width: 90%;
  }
`;

const Title = styled.h2`
  font-size: 18px;
  margin-bottom: 8px;
`;

const Date = styled.p`
  font-size: 14px;
  margin-bottom: 16px;
`;

const ButtonContainer = styled.div`
  text-align: right;
`;

const Button = styled.button`
  background-color: #eee;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 8px;
  margin-left: 8px;
  cursor: pointer;

  &:hover {
    background-color: #ddd;
  }
`;

// Usage example
const App: React.FC = () => {
  const handleClose = () => {
    console.log('OK clicked');
  };

  const handleCancel = () => {
    console.log('Cancel clicked');
  };

  const handleFinish = () => {
    console.log('Finish clicked');
  };

  return (
    <ReservationSystem
      onClose={handleClose}
      onCancel={handleCancel}
      onFinish={handleFinish}
    />
  );
};

export default App;