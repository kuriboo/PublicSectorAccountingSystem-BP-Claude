import React from 'react';
import styled from '@emotion/styled';

type CompanySearchConditionProps = {
  fiscalYear: number;
  fiscalPeriod: number;
  startDate: string;
  endDate: string;
  onFiscalYearChange: (fiscalYear: number) => void;
  onFiscalPeriodChange: (fiscalPeriod: number) => void;
  onStartDateChange: (startDate: string) => void;
  onEndDateChange: (endDate: string) => void;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const Title = styled.h2`
  margin-bottom: 20px;
  font-size: 24px;
  font-weight: bold;
  text-align: center;

  @media (min-width: 768px) {
    margin-bottom: 0;
    text-align: left;
  }
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    margin-right: 20px;
    margin-bottom: 0;
  }
`;

const Label = styled.label`
  margin-bottom: 5px;
  font-weight: bold;
`;

const Select = styled.select`
  padding: 5px 10px;
  font-size: 16px;
`;

const Input = styled.input`
  padding: 5px 10px;
  font-size: 16px;
`;

const CompanySearchCondition: React.FC<CompanySearchConditionProps> = ({
  fiscalYear,
  fiscalPeriod,
  startDate,
  endDate,
  onFiscalYearChange,
  onFiscalPeriodChange,
  onStartDateChange,
  onEndDateChange,
}) => {
  return (
    <Container>
      <Title>資産譲渡等対価額計算表（計算表1）</Title>
      <Form>
        <FormGroup>
          <Label>会計年度</Label>
          <Select
            value={fiscalYear}
            onChange={(e) => onFiscalYearChange(Number(e.target.value))}
          >
            <option value="">選択してください</option>
            {/* 会計年度のオプションを動的に生成 */}
          </Select>
        </FormGroup>
        <FormGroup>
          <Label>課税期間</Label>
          <Select
            value={fiscalPeriod}
            onChange={(e) => onFiscalPeriodChange(Number(e.target.value))}
          >
            <option value="">選択してください</option>
            {/* 課税期間のオプションを動的に生成 */}
          </Select>
        </FormGroup>
        <FormGroup>
          <Label>課税期間</Label>
          <Input
            type="date"
            value={startDate}
            onChange={(e) => onStartDateChange(e.target.value)}
          />
          <span>～</span>
          <Input
            type="date"
            value={endDate}
            onChange={(e) => onEndDateChange(e.target.value)}
          />
        </FormGroup>
      </Form>
    </Container>
  );
};

// サンプルデータを用いた使用例
const App: React.FC = () => {
  const [fiscalYear, setFiscalYear] = React.useState<number>(2023);
  const [fiscalPeriod, setFiscalPeriod] = React.useState<number>(1);
  const [startDate, setStartDate] = React.useState<string>('2023-04-01');
  const [endDate, setEndDate] = React.useState<string>('2024-03-31');

  return (
    <CompanySearchCondition
      fiscalYear={fiscalYear}
      fiscalPeriod={fiscalPeriod}
      startDate={startDate}
      endDate={endDate}
      onFiscalYearChange={setFiscalYear}
      onFiscalPeriodChange={setFiscalPeriod}
      onStartDateChange={setStartDate}
      onEndDateChange={setEndDate}
    />
  );
};

export default App;