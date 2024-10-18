import React, { useState, useCallback, useEffect } from 'react';
import styled from '@emotion/styled';

type YearSelectionProps = {
  heading: string;
  defaultYear: number;
  defaultMonth: number;
  defaultEndYear: number;
  defaultEndMonth: number;
};

type DateRange = {
  startYear: number;
  startMonth: number;
  endYear: number;
  endMonth: number;
};

// オプション要素の型定義
type OptionElement = React.ReactElement<React.OptionHTMLAttributes<HTMLOptionElement>>;

const YearSelection: React.FC<YearSelectionProps> = ({
  heading,
  defaultYear,
  defaultMonth,
  defaultEndYear,
  defaultEndMonth,
}) => {
  const [dateRange, setDateRange] = useState<DateRange>({
    startYear: defaultYear,
    startMonth: defaultMonth,
    endYear: defaultEndYear,
    endMonth: defaultEndMonth,
  });
  const [error, setError] = useState<string | null>(null);

  const currentYear = new Date().getFullYear();

  // 年度の選択肢を生成
  const generateYearOptions = useCallback((): OptionElement[] => {
    const options: OptionElement[] = [];
    for (let i = currentYear; i >= 2000; i--) {
      options.push(
        <option key={i} value={i.toString()}>
          {i}
        </option>
      );
    }
    return options;
  }, [currentYear]);

  // 月の選択肢を生成
  const generateMonthOptions = useCallback((): OptionElement[] => {
    const options: OptionElement[] = [];
    for (let i = 1; i <= 12; i++) {
      options.push(
        <option key={i} value={i.toString()}>
          {i}
        </option>
      );
    }
    return options;
  }, []);

  const validateDateRange = useCallback((newRange: DateRange): string | null => {
    if (newRange.startYear > newRange.endYear) {
      return '開始年は終了年以前である必要があります。';
    }
    if (newRange.startYear === newRange.endYear && newRange.startMonth > newRange.endMonth) {
      return '開始月は終了月以前である必要があります。';
    }
    return null;
  }, []);

  const handleDateChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setDateRange(prev => {
      const newRange = { ...prev, [name]: parseInt(value, 10) };
      const validationError = validateDateRange(newRange);
      setError(validationError);
      return newRange;
    });
  }, [validateDateRange]);

  useEffect(() => {
    const validationError = validateDateRange(dateRange);
    setError(validationError);
  }, [dateRange, validateDateRange]);

  return (
    <Container>
      <Heading>{heading}</Heading>
      <Row>
        <Label>期間指定</Label>
        <div>
          <YearSelect 
            name="startYear" 
            value={dateRange.startYear.toString()}
            onChange={handleDateChange}
          >
            {generateYearOptions()}
          </YearSelect>
          年
          <MonthSelect 
            name="startMonth" 
            value={dateRange.startMonth.toString()}
            onChange={handleDateChange}
          >
            {generateMonthOptions()}
          </MonthSelect>
          月 ～
          <YearSelect 
            name="endYear" 
            value={dateRange.endYear.toString()}
            onChange={handleDateChange}
          >
            {generateYearOptions()}
          </YearSelect>
          年
          <MonthSelect 
            name="endMonth" 
            value={dateRange.endMonth.toString()}
            onChange={handleDateChange}
          >
            {generateMonthOptions()}
          </MonthSelect>
          月
        </div>
      </Row>
      {error && <ErrorMessage>{error}</ErrorMessage>}
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
  font-family: Arial, sans-serif;
`;

const Heading = styled.h3`
  margin: 0 0 16px;
  font-size: 18px;
  color: #333;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  flex-wrap: wrap;
`;

const Label = styled.label`
  margin-right: 8px;
  font-weight: bold;
  color: #555;
`;

const Select = styled.select`
  margin: 0 4px;
  padding: 4px 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
  font-size: 14px;
  background-color: white;
  cursor: pointer;

  &:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
  }
`;

const YearSelect = styled(Select)`
  width: 80px;
`;

const MonthSelect = styled(Select)`
  width: 60px;
`;

const ErrorMessage = styled.div`
  color: #d32f2f;
  font-size: 14px;
  margin-top: 8px;
`;

export default SampleUsage;