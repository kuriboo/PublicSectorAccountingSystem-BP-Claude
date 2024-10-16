import React from 'react';
import styled from '@emotion/styled';

type YearSelectionProps = {
  heading: string;
  defaultYear: number;
  defaultMonth: number;
  defaultEndYear: number;
  defaultEndMonth: number;
};

const YearSelection: React.FC<YearSelectionProps> = ({
  heading,
  defaultYear,
  defaultMonth,
  defaultEndYear,
  defaultEndMonth,
}) => {
  // 年度の選択肢を生成
  const generateYearOptions = () => {
    const currentYear = new Date().getFullYear();
    const options = [];
    for (let i = currentYear; i >= 2000; i--) {
      options.push(
        <option key={i} value={i}>
          {i}
        </option>
      );
    }
    return options;
  };

  // 月の選択肢を生成
  const generateMonthOptions = () => {
    const options = [];
    for (let i = 1; i <= 12; i++) {
      options.push(
        <option key={i} value={i}>
          {i}
        </option>
      );
    }
    return options;
  };

  return (
    <Container>
      <Heading>{heading}</Heading>
      <Row>
        <Label>期間指定</Label>
        <div>
          <YearSelect defaultValue={defaultYear}>
            {generateYearOptions()}
          </YearSelect>
          年
          <MonthSelect defaultValue={defaultMonth}>
            {generateMonthOptions()}
          </MonthSelect>
          月 ～
          <YearSelect defaultValue={defaultEndYear || defaultYear}>
            {generateYearOptions()}
          </YearSelect>
          年
          <MonthSelect defaultValue={defaultEndMonth || defaultMonth}>
            {generateMonthOptions()}
          </MonthSelect>
          月
        </div>
      </Row>
    </Container>
  );
};

// サンプルデータを用いた使用例
const SampleUsage: React.FC = () => {
  return (
    <YearSelection
      heading="予定キャッシュ・フロー計算書作成"
      defaultYear={2023}
      defaultMonth={4}
      defaultEndYear={2024}
      defaultEndMonth={3}
    />
  );
};

// スタイリング
const Container = styled.div`
  background-color: #f0f0f0;
  padding: 16px;
  border-radius: 4px;
`;

const Heading = styled.h3`
  margin: 0 0 16px;
  font-size: 18px;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

const Label = styled.label`
  margin-right: 8px;
  font-weight: bold;
`;

const YearSelect = styled.select`
  margin: 0 4px;
  padding: 4px;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

const MonthSelect = styled.select`
  margin: 0 4px;
  padding: 4px;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

export default YearSelection;