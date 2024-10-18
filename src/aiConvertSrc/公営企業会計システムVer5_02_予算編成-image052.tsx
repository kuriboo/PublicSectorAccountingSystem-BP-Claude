import React from 'react';
import styled from '@emotion/styled';

type FiscalTerm = 'year' | 'period';
type ClosingDate = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
type Aggregation = 'monthly' | 'quarterly' | 'yearly';

interface CsvSettingProps {
  fiscalTerm?: FiscalTerm;
  fiscalStartMonth?: ClosingDate;
  fiscalStartPeriod?: number;
  closingDate?: ClosingDate;
  aggregation?: Aggregation;
  outputNonValuedData?: boolean;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const Label = styled.label`
  flex: 0 0 100px;
`;

const Select = styled.select`
  padding: 4px;
`;

const Input = styled.input`
  padding: 4px;
`;

const Radio = styled.input`
  margin-right: 4px;
`;

const CsvSetting: React.FC<CsvSettingProps> = ({
  fiscalTerm = 'year',
  fiscalStartMonth = 4,
  fiscalStartPeriod = 1,
  closingDate = 1,
  aggregation = 'yearly',
  outputNonValuedData = true,
}) => {
  return (
    <Container>
      <Row>
        <Label>会計年度</Label>
        <Select defaultValue={fiscalTerm}>
          <option value="year">年度</option>
          <option value="period">期</option>
        </Select>
      </Row>
      <Row>
        <Label>科目選択</Label>
        <Select defaultValue={fiscalStartMonth}>
          <option value={4}>4月</option>
          {/* other months */}
        </Select>
        {fiscalTerm === 'period' && (
          <Input type="number" defaultValue={fiscalStartPeriod} min={1} />
        )}
      </Row>
      <Row>
        <Label>予算編成区分</Label>
        <Select defaultValue={2}>
          <option value={2}>補正予算</option>
          <option value={1}>第一回補正予算</option>
        </Select>
      </Row>
      <Row>
        <Label>最終査定値</Label>
        <Label>
          <Radio type="radio" checked={aggregation === 'monthly'} />
          見積要求額
        </Label>
        <Label>
          <Radio type="radio" checked={aggregation === 'quarterly'} />
          査定額
        </Label>
        <Select defaultValue={closingDate}>
          <option value={1}>1</option>
          {/* other closing dates */}
        </Select>
      </Row>
      <Row>
        <Label>出力対象基準</Label>
        <Label>
          <Radio type="radio" checked={outputNonValuedData} />
          全ての科目を対象
        </Label>
        <Label>
          <Radio type="radio" checked={!outputNonValuedData} />
          金額の入っている科目のみ
        </Label>
      </Row>
    </Container>
  );
};

// Usage example
const App: React.FC = () => {
  return (
    <div>
      <h1>CSV設定</h1>
      <CsvSetting
        fiscalTerm="year"
        fiscalStartMonth={4}
        closingDate={1}
        aggregation="yearly"
        outputNonValuedData={true}
      />
    </div>
  );
};

export default App;