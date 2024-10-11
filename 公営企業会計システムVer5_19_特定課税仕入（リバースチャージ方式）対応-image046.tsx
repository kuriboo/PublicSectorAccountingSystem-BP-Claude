import React from 'react';
import styled from '@emotion/styled';

type DateItem = {
  value: string;
  unit: string;
};

type DateDisplayProps = {
  items: DateItem[];
};

const DateDisplayWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Arial, sans-serif;
`;

const DateItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 10px;

  @media (max-width: 600px) {
    margin: 0 5px;
  }
`;

const DateValue = styled.div`
  font-size: 48px;
  font-weight: bold;

  @media (max-width: 600px) {
    font-size: 32px;
  }
`;

const DateUnit = styled.div`
  font-size: 16px;
  color: #666;

  @media (max-width: 600px) {
    font-size: 12px;
  }
`;

const DateDisplay: React.FC<DateDisplayProps> = ({ items }) => {
  return (
    <DateDisplayWrapper>
      {items.map((item, index) => (
        <DateItemWrapper key={index}>
          <DateValue>{item.value || '00'}</DateValue>
          <DateUnit>{item.unit}</DateUnit>
        </DateItemWrapper>
      ))}
    </DateDisplayWrapper>
  );
};

// サンプルデータを用いた使用例
const SampleUsage: React.FC = () => {
  const sampleData: DateItem[] = [
    { value: '002', unit: '次年度' },
    { value: '01', unit: '歓' },
    { value: '01', unit: '日' },
    { value: '13', unit: '時' },
    { value: '001', unit: '細流' },
    { value: '0001', unit: '夕日' },
  ];

  return (
    <div>
      <h2>Date Display Sample</h2>
      <DateDisplay items={sampleData} />
    </div>
  );
};

export default DateDisplay;