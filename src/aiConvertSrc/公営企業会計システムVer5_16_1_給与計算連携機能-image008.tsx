import React from 'react';
import styled from '@emotion/styled';

type DateRangeProps = {
  startDate: string;
  endDate: string;
  onClose: () => void;
  onConfirm: () => void;
  onCancel: () => void;
};

const DateRange: React.FC<DateRangeProps> = ({
  startDate,
  endDate,
  onClose,
  onConfirm,
  onCancel,
}) => {
  return (
    <Container>
      <Title>給与支払確定</Title>
      <DateRangeInput>
        支払確定日 {startDate} 〜 {endDate}
      </DateRangeInput>
      <ButtonGroup>
        <Button onClick={onCancel}>キャンセル</Button>
        <Button onClick={onConfirm}>OK</Button>
        <Button onClick={onClose}>終了</Button>
      </ButtonGroup>
    </Container>
  );
};

// Sample usage
const SampleDateRange: React.FC = () => {
  const handleClose = () => {
    console.log('Close clicked');
  };

  const handleConfirm = () => {
    console.log('Confirm clicked');
  };

  const handleCancel = () => {
    console.log('Cancel clicked');
  };

  return (
    <DateRange
      startDate="平成29年08月05日"
      endDate="平成29年09月05日"
      onClose={handleClose}
      onConfirm={handleConfirm}
      onCancel={handleCancel}
    />
  );
};

// Styled components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f5f5f5;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-family: Arial, sans-serif;
`;

const Title = styled.h2`
  margin-bottom: 10px;
  font-size: 18px;
  font-weight: bold;
`;

const DateRangeInput = styled.div`
  margin-bottom: 20px;
  padding: 10px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

const Button = styled.button`
  margin-left: 10px;
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export default DateRange;