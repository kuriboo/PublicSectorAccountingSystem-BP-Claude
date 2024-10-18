import React from 'react';
import styled from '@emotion/styled';

interface DataRangeProps {
  title: string;
  fromDate: string;
  toDate: string;
  onFromDateChange: (date: string) => void;
  onToDateChange: (date: string) => void;
}

const DataRangeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Title = styled.div`
  font-weight: bold;
`;

const DateInputContainer = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const DateInput = styled.input`
  padding: 4px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
`;

const DataRange: React.FC<DataRangeProps> = ({
  title,
  fromDate,
  toDate,
  onFromDateChange,
  onToDateChange,
}) => {
  const handleFromDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onFromDateChange(e.target.value);
  };

  const handleToDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onToDateChange(e.target.value);
  };

  return (
    <DataRangeContainer>
      <Title>{title}</Title>
      <DateInputContainer>
        <DateInput
          type="date"
          value={fromDate}
          onChange={handleFromDateChange}
        />
        <span>~</span>
        <DateInput type="date" value={toDate} onChange={handleToDateChange} />
      </DateInputContainer>
    </DataRangeContainer>
  );
};

// Example usage
const ExampleDataRange = () => {
  const [fromDate, setFromDate] = React.useState('2023-04-01');
  const [toDate, setToDate] = React.useState('2023-04-30');

  return (
    <DataRange
      title="期間"
      fromDate={fromDate}
      toDate={toDate}
      onFromDateChange={setFromDate}
      onToDateChange={setToDate}
    />
  );
};

export default DataRange;