import React from 'react';

import { useState } from 'react';
import styled from '@emotion/styled';

type DateRangeInputProps = {
  onSubmit: (startDate: string, endDate: string) => void;
};

const DateRangeInput: React.FC<DateRangeInputProps> = ({ onSubmit }) => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleSubmit = () => {
    onSubmit(startDate, endDate);
  };

  return (
    <Container>
      <Title>予算科目別未収金一覧表</Title>
      <DateRangeContainer>
        <DateInput
          type="text"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          placeholder="YYYYMMDD"
        />
        <Separator>〜</Separator>
        <DateInput
          type="text"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          placeholder="YYYYMMDD"
        />
      </DateRangeContainer>
      <ButtonContainer>
        <Button onClick={handleSubmit}>OK</Button>
        <Button>クリア</Button>
        <Button>終了</Button>
      </ButtonContainer>
    </Container>
  );
};

// Styles
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const Title = styled.h2`
  font-size: 18px;
  margin-bottom: 20px;
`;

const DateRangeContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const DateInput = styled.input`
  padding: 5px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100px;
`;

const Separator = styled.span`
  margin: 0 10px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  padding: 8px 16px;
  font-size: 14px;
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

// Example usage
const ExampleUsage: React.FC = () => {
  const handleSubmit = (startDate: string, endDate: string) => {
    console.log('Start Date:', startDate);
    console.log('End Date:', endDate);
    // Perform further actions with the date range
  };

  return <DateRangeInput onSubmit={handleSubmit} />;
};

export default ExampleUsage;