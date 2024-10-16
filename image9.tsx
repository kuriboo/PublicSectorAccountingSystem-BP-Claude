import React from 'react';
import styled from '@emotion/styled';

interface DateProps {
  /** 曜日 */
  dayOfWeek: string;
  /** 日にち */
  date: string;
  /** 月 */
  month: string;
  /** 年 */
  year: string;
  /** 細節 */
  detail: string;
  /** 明細 */
  breakdown: string;
}

const DateWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  border-bottom: 1px solid #ccc;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const DateItem = styled.div`
  display: flex;
  align-items: center;
  margin-right: 16px;

  &:last-child {
    margin-right: 0;
  }

  @media (max-width: 600px) {
    margin-right: 0;
    margin-bottom: 8px;
  }
`;

const DateLabel = styled.span`
  font-weight: bold;
  margin-right: 8px;
`;

const DateValue = styled.span``;

/**
 * 日付情報を表示するコンポーネント
 */
const DateInfo: React.FC<DateProps> = ({
  dayOfWeek,
  date,
  month,
  year,
  detail,
  breakdown,
}) => {
  return (
    <DateWrapper>
      <DateItem>
        <DateLabel>次年度：</DateLabel>
        <DateValue>{year || '-'}</DateValue>
      </DateItem>
      <DateItem>
        <DateLabel>月：</DateLabel>
        <DateValue>{month || '-'}</DateValue>
      </DateItem>
      <DateItem>
        <DateLabel>日：</DateLabel>
        <DateValue>{date || '-'}</DateValue>
      </DateItem>
      <DateItem>
        <DateLabel>曜：</DateLabel>
        <DateValue>{dayOfWeek || '-'}</DateValue>
      </DateItem>
      <DateItem>
        <DateLabel>細節：</DateLabel>
        <DateValue>{detail || '-'}</DateValue>
      </DateItem>
      <DateItem>
        <DateLabel>明細：</DateLabel>
        <DateValue>{breakdown || '-'}</DateValue>
      </DateItem>
    </DateWrapper>
  );
};

// サンプルデータ
const sampleData: DateProps = {
  dayOfWeek: '002',
  date: '01',
  month: '01',
  year: '13',
  detail: '001',
  breakdown: '0001',
};

/**
 * サンプルデータを用いてDateInfoコンポーネントを表示する
 */
const DateInfoExample: React.FC = () => {
  return (
    <div>
      <h2>日付情報の例</h2>
      <DateInfo {...sampleData} />
    </div>
  );
};

export default DateInfo;