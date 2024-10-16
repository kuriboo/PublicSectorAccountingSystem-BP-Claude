import React from 'react';
import styled from '@emotion/styled';

type DateRangeProps = {
  startDate: string;
  endDate: string;
  workDays: number;
};

const DateRangeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 300px;
  margin: 0 auto;
`;

const DateRangeRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const DateRangeLabel = styled.span`
  font-weight: bold;
`;

const DateRangeValue = styled.span`
  color: #333;
`;

const DateRange: React.FC<DateRangeProps> = ({ startDate, endDate, workDays }) => {
  // Convert date strings to Date objects
  const start = new Date(startDate);
  const end = new Date(endDate);

  // Format dates as YYYY/MM/DD
  const formatDate = (date: Date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}/${month}/${day}`;
  };

  // Handle invalid date range
  if (start > end) {
    return <div>Invalid date range</div>;
  }

  return (
    <DateRangeContainer>
      <DateRangeRow>
        <DateRangeLabel>作業日</DateRangeLabel>
        <DateRangeValue>
          {formatDate(start)} ～ {formatDate(end)}
        </DateRangeValue>
      </DateRangeRow>
      <DateRangeRow>
        <DateRangeLabel>仕訳科目</DateRangeLabel>
        <DateRangeValue>{workDays}</DateRangeValue>
      </DateRangeRow>
      <DateRangeRow>
        <DateRangeLabel>仕訳細節</DateRangeLabel>
        <DateRangeValue>0000 ～ 9999</DateRangeValue>
      </DateRangeRow>
    </DateRangeContainer>
  );
};

// Example usage
const App: React.FC = () => {
  return (
    <div>
      <h1>Date Range Example</h1>
      <DateRange startDate="2023-04-02" endDate="2023-04-02" workDays={562000208} />
    </div>
  );
};

export default App;