import React, { useState } from 'react';
import styled from '@emotion/styled';

type DateRangePickerProps = {
  onDateRangeChange: (startDate: string, endDate: string) => void;
};

const DateRangePicker: React.FC<DateRangePickerProps> = ({ onDateRangeChange }) => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [includeArchiveData, setIncludeArchiveData] = useState(false);

  const handleSubmit = () => {
    if (startDate && endDate) {
      onDateRangeChange(startDate, endDate);
    }
  };

  return (
    <Container>
      <Title>特定収入充当表データ作成</Title>
      <DateRangeContainer>
        <DateLabel>範囲期間</DateLabel>
        <DateInput
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
        <Separator>〜</Separator>
        <DateInput
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
      </DateRangeContainer>
      <OptionContainer>
        <OptionCheckbox
          type="checkbox"
          checked={includeArchiveData}
          onChange={() => setIncludeArchiveData(!includeArchiveData)}
        />
        <OptionLabel>予算の財務充当データを出力する</OptionLabel>
      </OptionContainer>
      <ButtonContainer>
        <SubmitButton onClick={handleSubmit}>OK</SubmitButton>
        <CancelButton>終了</CancelButton>
      </ButtonContainer>
    </Container>
  );
};

// Styled components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const Title = styled.h2`
  margin-bottom: 20px;
`;

const DateRangeContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const DateLabel = styled.label`
  margin-right: 10px;
`;

const DateInput = styled.input`
  margin: 0 5px;
`;

const Separator = styled.span`
  margin: 0 5px;
`;

const OptionContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const OptionCheckbox = styled.input`
  margin-right: 5px;
`;

const OptionLabel = styled.label``;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const SubmitButton = styled.button`
  margin-right: 10px;
`;

const CancelButton = styled.button``;

// Sample usage
const SampleUsage: React.FC = () => {
  const handleDateRangeChange = (startDate: string, endDate: string) => {
    console.log('Selected date range:', startDate, endDate);
  };

  return <DateRangePicker onDateRangeChange={handleDateRangeChange} />;
};

export default DateRangePicker;