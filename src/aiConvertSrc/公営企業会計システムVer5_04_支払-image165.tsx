import React from 'react';
import styled from '@emotion/styled';

// 期間設定コンポーネントの型定義
type DateRangeSettingProps = {
  startDate: string;
  endDate: string;
  onStartDateChange: (date: string) => void;
  onEndDateChange: (date: string) => void;
};

// 期間設定コンポーネント
const DateRangeSetting: React.FC<DateRangeSettingProps> = ({
  startDate,
  endDate,
  onStartDateChange,
  onEndDateChange,
}) => {
  return (
    <Container>
      <Title>期間指定</Title>
      <DateInputContainer>
        <DateInput
          type="date"
          value={startDate}
          onChange={(e) => onStartDateChange(e.target.value)}
        />
        <Separator>～</Separator>
        <DateInput
          type="date"
          value={endDate}
          onChange={(e) => onEndDateChange(e.target.value)}
        />
      </DateInputContainer>
    </Container>
  );
};

// コンポーネントのスタイリング
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Title = styled.div`
  font-weight: bold;
`;

const DateInputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const DateInput = styled.input`
  padding: 4px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
`;

const Separator = styled.span`
  margin: 0 4px;
`;

// サンプルデータを用いた使用例コンポーネント
const SampleUsage: React.FC = () => {
  const [startDate, setStartDate] = React.useState('2023-06-17');
  const [endDate, setEndDate] = React.useState('2023-06-17');

  return (
    <div>
      <h2>期間設定</h2>
      <DateRangeSetting
        startDate={startDate}
        endDate={endDate}
        onStartDateChange={setStartDate}
        onEndDateChange={setEndDate}
      />
      <p>開始日: {startDate}</p>
      <p>終了日: {endDate}</p>
    </div>
  );
};

export default SampleUsage;