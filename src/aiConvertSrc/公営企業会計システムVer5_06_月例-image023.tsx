import React from 'react';
import styled from '@emotion/styled';

type DateRangeInputProps = {
  title: string;
  startDate: string;
  endDate: string;
};

const DateRangeInput: React.FC<DateRangeInputProps> = ({ title, startDate, endDate }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <DateInputs>
        <DateInput type="date" defaultValue={startDate} />
        <Separator>〜</Separator>
        <DateInput type="date" defaultValue={endDate} />
      </DateInputs>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Title = styled.div`
  font-weight: bold;
`;

const DateInputs = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const DateInput = styled.input`
  padding: 4px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
`;

const Separator = styled.span`
  font-size: 14px;
`;

// Usage example
const App: React.FC = () => {
  return (
    <div>
      <DateRangeInput
        title="範囲指定"
        startDate="2022-12-01"
        endDate="2022-12-08"
      />
    </div>
  );
};

export default App;