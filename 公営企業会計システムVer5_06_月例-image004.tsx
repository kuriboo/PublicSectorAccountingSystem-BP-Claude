import React from 'react';
import styled from '@emotion/styled';

interface WaterMeterReadingProps {
  meterNumber: string;
  previousReading: number;
  currentReading: number;
  usageAmount: number;
}

const WaterMeterReadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-family: Arial, sans-serif;
  max-width: 400px;
  margin: 0 auto;

  @media (max-width: 480px) {
    max-width: 100%;
  }
`;

const MeterNumber = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const ReadingItem = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 5px;
`;

const ReadingLabel = styled.div`
  font-size: 14px;
`;

const ReadingValue = styled.div`
  font-size: 14px;
  font-weight: bold;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 8px 16px;
  font-size: 14px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background-color: #f0f0f0;

  &:hover {
    background-color: #e0e0e0;
  }
`;

const WaterMeterReading: React.FC<WaterMeterReadingProps> = ({
  meterNumber,
  previousReading,
  currentReading,
  usageAmount,
}) => {
  // Handle cases where values are not provided
  const formattedPreviousReading = previousReading || 0;
  const formattedCurrentReading = currentReading || 0;
  const formattedUsageAmount = usageAmount || 0;

  return (
    <WaterMeterReadingContainer>
      <MeterNumber>{meterNumber}</MeterNumber>
      <ReadingItem>
        <ReadingLabel>前:</ReadingLabel>
        <ReadingValue>{formattedPreviousReading.toLocaleString()}</ReadingValue>
      </ReadingItem>
      <ReadingItem>
        <ReadingLabel>今:</ReadingLabel>
        <ReadingValue>{formattedCurrentReading.toLocaleString()}</ReadingValue>
      </ReadingItem>
      <ReadingItem>
        <ReadingLabel>明細:</ReadingLabel>
        <ReadingValue>{formattedUsageAmount.toLocaleString()}</ReadingValue>
      </ReadingItem>
      <Buttons>
        <Button>OK</Button>
        <Button>クリア</Button>
        <Button>終了</Button>
      </Buttons>
    </WaterMeterReadingContainer>
  );
};

// Usage example
const App: React.FC = () => {
  return (
    <div>
      <h1>Water Meter Reading Example</h1>
      <WaterMeterReading
        meterNumber="0620320101"
        previousReading={0}
        currentReading={0.001}
        usageAmount={0.001}
      />
    </div>
  );
};

export default App;