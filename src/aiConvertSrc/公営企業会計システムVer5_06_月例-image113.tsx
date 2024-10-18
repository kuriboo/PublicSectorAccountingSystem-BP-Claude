import React from 'react';
import styled from '@emotion/styled';

interface DateSelectorProps {
  fromDate: Date;
  toDate: Date;
  onFromDateChange: (date: Date) => void;
  onToDateChange: (date: Date) => void;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 5px;
  width: 300px;

  @media (max-width: 480px) {
    width: 100%;
  }
`;

const Title = styled.h2`
  margin-bottom: 20px;
`;

const DateInputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 10px;
`;

const DateInput = styled.input`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
  font-size: 14px;
  width: 45%;
`;

const BlockTypeContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const BlockTypeButton = styled.button<{ active: boolean }>`
  padding: 8px 16px;
  margin: 0 5px;
  background-color: ${({ active }) => (active ? '#007bff' : '#fff')};
  color: ${({ active }) => (active ? '#fff' : '#000')};
  border: 1px solid #007bff;
  border-radius: 3px;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background-color: #007bff;
    color: #fff;
  }
`;

const DateSelector: React.FC<DateSelectorProps> = ({
  fromDate,
  toDate,
  onFromDateChange,
  onToDateChange,
}) => {
  // Format date as YYYY-MM-DD string
  const formatDate = (date: Date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  // Handle block type button click
  const handleBlockTypeClick = (blockType: string) => {
    console.log(`Clicked block type: ${blockType}`);
  };

  return (
    <Container>
      <Title>期間指定</Title>
      <DateInputContainer>
        <DateInput
          type="date"
          value={formatDate(fromDate)}
          onChange={(e) => onFromDateChange(new Date(e.target.value))}
        />
        〜
        <DateInput
          type="date"
          value={formatDate(toDate)}
          onChange={(e) => onToDateChange(new Date(e.target.value))}
        />
      </DateInputContainer>
      <BlockTypeContainer>
        <BlockTypeButton
          active={true}
          onClick={() => handleBlockTypeClick('年間')}
        >
          年間
        </BlockTypeButton>
        <BlockTypeButton
          active={false}
          onClick={() => handleBlockTypeClick('ブロック')}
        >
          ブロック
        </BlockTypeButton>
        <BlockTypeButton
          active={false}
          onClick={() => handleBlockTypeClick('セグメント')}
        >
          セグメント
        </BlockTypeButton>
      </BlockTypeContainer>
    </Container>
  );
};

// Example usage
const ExampleComponent: React.FC = () => {
  const [fromDate, setFromDate] = React.useState(new Date('2022-04-01'));
  const [toDate, setToDate] = React.useState(new Date('2023-03-31'));

  return (
    <DateSelector
      fromDate={fromDate}
      toDate={toDate}
      onFromDateChange={setFromDate}
      onToDateChange={setToDate}
    />
  );
};

export default ExampleComponent;