import React from 'react';
import styled from 'styled-components';

type ReservationDateProps = {
  startDate: string;
  endDate: string;
  onSubmit: () => void;
  onCancel: () => void;
  onClose: () => void;
};

const ReservationDate: React.FC<ReservationDateProps> = ({
  startDate,
  endDate,
  onSubmit,
  onCancel,
  onClose,
}) => {
  return (
    <Container>
      <Title>予算執行額比較表</Title>
      <DateRange>
        <Label>範囲指定</Label>
        <Input value={startDate} readOnly />
        <Separator>~</Separator>
        <Input value={endDate} readOnly />
      </DateRange>
      <Message>
        過去4年分の金額と構成比率を算出した
        予算執行額の比較表を税込金額で作成します。
      </Message>
      <ButtonGroup>
        <Button onClick={onSubmit}>OK</Button>
        <Button onClick={onCancel}>クリア</Button>
        <Button onClick={onClose}>終了</Button>
      </ButtonGroup>
    </Container>
  );
};

// Styles
const Container = styled.div`
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 4px;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 18px;
  margin-bottom: 20px;
`;

const DateRange = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

const Label = styled.span`
  margin-right: 10px;
`;

const Input = styled.input`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100px;
  text-align: center;
`;

const Separator = styled.span`
  margin: 0 10px;
`;

const Message = styled.p`
  margin-bottom: 20px;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  padding: 10px 20px;
  margin: 0 5px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

// Usage example
const App: React.FC = () => {
  const handleSubmit = () => {
    // Handle form submission
  };

  const handleCancel = () => {
    // Handle form cancellation
  };

  const handleClose = () => {
    // Handle closing the form
  };

  return (
    <ReservationDate
      startDate="00000000"
      endDate="99999999"
      onSubmit={handleSubmit}
      onCancel={handleCancel}
      onClose={handleClose}
    />
  );
};

export default App;