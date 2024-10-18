import React from 'react';
import styled from '@emotion/styled';

type DateData = {
  day: string;
  date: string;
  week: string;
  holiday: string;
};

type CalendarProps = {
  data: DateData[];
};

const CalendarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const CalendarItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 50px;

  @media (max-width: 480px) {
    min-width: 40px;
    font-size: 12px;
  }
`;

const CalendarDay = styled.div`
  font-weight: bold;
`;

const CalendarDate = styled.div`
  margin-top: 4px;
`;

const CalendarWeek = styled.div`
  margin-top: 4px;
  color: #666;
`;

const CalendarHoliday = styled.div`
  margin-top: 4px;
  color: red;
`;

const Calendar: React.FC<CalendarProps> = ({ data }) => {
  return (
    <CalendarContainer>
      {data.map((item, index) => (
        <CalendarItem key={index}>
          <CalendarDay>{item.day}</CalendarDay>
          <CalendarDate>{item.date}</CalendarDate>
          <CalendarWeek>{item.week}</CalendarWeek>
          {item.holiday && <CalendarHoliday>{item.holiday}</CalendarHoliday>}
        </CalendarItem>
      ))}
    </CalendarContainer>
  );
};

// サンプルデータ
const sampleData: DateData[] = [
  { day: '次年度', date: '002', week: '01', holiday: '' },
  { day: '現', date: '01', week: '01', holiday: '元旦' },
  { day: '日', date: '01', week: '13', holiday: '成人の日' },
  { day: '前', date: '12', week: '01', holiday: '' },
  { day: '細節', date: '0001', week: '0001', holiday: '' },
  { day: '明細', date: '0001', week: '0001', holiday: '' },
];

// 使用例
const CalendarExample: React.FC = () => {
  return (
    <div>
      <h2>Calendar Example</h2>
      <Calendar data={sampleData} />
    </div>
  );
};

export default CalendarExample;