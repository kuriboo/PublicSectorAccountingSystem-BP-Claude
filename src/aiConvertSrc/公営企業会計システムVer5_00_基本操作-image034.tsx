import React from 'react';
import styled from 'styled-components';

// カレンダーのプロパティ型定義
interface CalendarProps {
  year: number;
  month: number;
}

// カレンダーコンポーネント
const Calendar: React.FC<CalendarProps> = ({ year, month }) => {
  // 指定した年月の日数を取得
  const getMonthDays = (year: number, month: number): number => {
    return new Date(year, month, 0).getDate();
  };

  // 指定した年月の1日の曜日を取得（0:日曜日〜6:土曜日）
  const getFirstDayOfWeek = (year: number, month: number): number => {
    return new Date(year, month - 1, 1).getDay();
  };

  // カレンダーの日付を生成
  const renderCalendarDates = () => {
    const monthDays = getMonthDays(year, month);
    const firstDayOfWeek = getFirstDayOfWeek(year, month);
    const calendarDates = [];

    // 1日まで空白を追加
    for (let i = 0; i < firstDayOfWeek; i++) {
      calendarDates.push(<DateItem key={`empty-${i}`} />);
    }

    // 日付を追加
    for (let i = 1; i <= monthDays; i++) {
      calendarDates.push(<DateItem key={`date-${i}`}>{i}</DateItem>);
    }

    return calendarDates;
  };

  return (
    <CalendarContainer>
      <CalendarHeader>
        {year}年{month}月
      </CalendarHeader>
      <WeekdayRow>
        <WeekdayItem>日</WeekdayItem>
        <WeekdayItem>月</WeekdayItem>
        <WeekdayItem>火</WeekdayItem>
        <WeekdayItem>水</WeekdayItem>
        <WeekdayItem>木</WeekdayItem>
        <WeekdayItem>金</WeekdayItem>
        <WeekdayItem>土</WeekdayItem>
      </WeekdayRow>
      <DateGrid>{renderCalendarDates()}</DateGrid>
    </CalendarContainer>
  );
};

// スタイリング
const CalendarContainer = styled.div`
  font-family: Arial, sans-serif;
  max-width: 300px;
  margin: 0 auto;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const CalendarHeader = styled.h2`
  text-align: center;
  margin-bottom: 10px;
`;

const WeekdayRow = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  text-align: center;
  border-bottom: 1px solid #ccc;
`;

const WeekdayItem = styled.div`
  padding: 5px;
`;

const DateGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 5px;
  padding: 10px;
`;

const DateItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  border-radius: 50%;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }
`;

// サンプルデータを使用したカレンダーの表示例
const CalendarExample: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth() + 1;

  return <Calendar year={currentYear} month={currentMonth} />;
};

export default CalendarExample;