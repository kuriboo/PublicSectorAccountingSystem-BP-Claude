import React from 'react';
import styled from 'styled-components';

// カレンダーのプロパティ型定義
type CalendarProps = {
  year: number;
  month: number;
  onDateClick?: (date: Date) => void;
};

// カレンダーコンポーネント
const Calendar: React.FC<CalendarProps> = ({ year, month, onDateClick }) => {
  // 指定された年月の最初の日を取得
  const firstDate = new Date(year, month - 1, 1);
  // 指定された年月の最後の日を取得
  const lastDate = new Date(year, month, 0);
  // カレンダーの日付を格納する配列
  const dates: Date[] = [];

  // 最初の日から最後の日までループ
  for (let d = firstDate; d <= lastDate; d.setDate(d.getDate() + 1)) {
    dates.push(new Date(d));
  }

  // 日付がクリックされたときの処理
  const handleDateClick = (date: Date) => {
    onDateClick?.(date);
  };

  return (
    <CalendarWrapper>
      <CalendarHeader>
        <span>{year}年</span>
        <span>{month}月</span>
      </CalendarHeader>
      <CalendarGrid>
        {/* 曜日の行 */}
        <CalendarRow>
          <CalendarCell>日</CalendarCell>
          <CalendarCell>月</CalendarCell>
          <CalendarCell>火</CalendarCell>
          <CalendarCell>水</CalendarCell>
          <CalendarCell>木</CalendarCell>
          <CalendarCell>金</CalendarCell>
          <CalendarCell>土</CalendarCell>
        </CalendarRow>
        {/* 日付の行 */}
        {dates.map((date, index) => (
          <React.Fragment key={date.getTime()}>
            {index % 7 === 0 && <CalendarRow />}
            <CalendarCell
              isToday={
                date.getFullYear() === new Date().getFullYear() &&
                date.getMonth() === new Date().getMonth() &&
                date.getDate() === new Date().getDate()
              }
              onClick={() => handleDateClick(date)}
            >
              {date.getDate()}
            </CalendarCell>
          </React.Fragment>
        ))}
      </CalendarGrid>
    </CalendarWrapper>
  );
};

// スタイリング
const CalendarWrapper = styled.div`
  font-family: Arial, sans-serif;
  max-width: 300px;
  margin: 0 auto;
`;

const CalendarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  margin-bottom: 10px;
`;

const CalendarGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 5px;
`;

const CalendarRow = styled.div`
  display: contents;
`;

const CalendarCell = styled.div<{ isToday?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  border: 1px solid #ccc;
  cursor: pointer;
  ${({ isToday }) =>
    isToday &&
    `
    background-color: #f0f0f0;
    font-weight: bold;
  `}
`;

// カレンダーの使用例
const CalendarExample: React.FC = () => {
  const handleDateClick = (date: Date) => {
    console.log('Clicked date:', date);
  };

  return <Calendar year={2023} month={4} onDateClick={handleDateClick} />;
};

export default CalendarExample;