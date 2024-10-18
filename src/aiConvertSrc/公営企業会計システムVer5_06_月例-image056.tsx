import React from 'react';
import styled from '@emotion/styled';

type DateRangeType = '日' | '前' | '細前' | '明細';
type PeriodType = 'する' | 'しない';

interface MAD3410Props {
  startDate: Date;
  endDate: Date;
  startDateString: string;
  endDateString: string;
  dateRangeType: DateRangeType;
  executionPeriodType: PeriodType;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  font-family: Arial, sans-serif;

  @media (min-width: 768px) {
    width: 400px;
    margin: 0 auto;
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
  width: 45%;
`;

const RadioButtonsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-bottom: 10px;
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

const Button = styled.button`
  padding: 10px 20px;
  margin-left: 10px;
  cursor: pointer;
`;

const MAD3410: React.FC<MAD3410Props> = ({
  startDate,
  endDate,
  startDateString,
  endDateString,
  dateRangeType,
  executionPeriodType,
}) => {
  const formatDate = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${year}年${month.toString().padStart(2, '0')}月${day.toString().padStart(2, '0')}日`;
  };

  return (
    <Container>
      <Title>MAD3410 予算執行状況表（科目別）作成</Title>
      <DateInputContainer>
        <DateInput type="text" value={formatDate(startDate)} readOnly />
        <span>～</span>
        <DateInput type="text" value={formatDate(endDate)} readOnly />
      </DateInputContainer>
      <RadioButtonsContainer>
        <label>
          <input type="radio" checked={dateRangeType === '日'} readOnly /> 日
        </label>
        <label>
          <input type="radio" checked={dateRangeType === '前'} readOnly /> 前
        </label>
        <label>
          <input type="radio" checked={dateRangeType === '細前'} readOnly /> 細前
        </label>
        <label>
          <input type="radio" checked={dateRangeType === '明細'} readOnly /> 明細
        </label>
      </RadioButtonsContainer>
      <RadioButtonsContainer>
        <label>
          <input type="radio" checked={executionPeriodType === 'する'} readOnly /> する
        </label>
        <label>
          <input type="radio" checked={executionPeriodType === 'しない'} readOnly /> しない
        </label>
      </RadioButtonsContainer>
      <ButtonsContainer>
        <Button>OK</Button>
        <Button>クリア</Button>
        <Button>終了</Button>
      </ButtonsContainer>
    </Container>
  );
};

// Usage example
const App: React.FC = () => {
  const startDate = new Date('2023-04-01');
  const endDate = new Date('2023-08-31');

  return (
    <MAD3410
      startDate={startDate}
      endDate={endDate}
      startDateString="00000000"
      endDateString="99999999"
      dateRangeType="前"
      executionPeriodType="する"
    />
  );
};

export default App;