import React from 'react';
import styled from '@emotion/styled';

type ReportPeriodProps = {
  fromDate: string;
  toDate: string;
  reportingSpan: boolean;
  fromPage: string;
  toPage: string;
  isAllPage: boolean;
  isOddPage: boolean;
  isEvenPage: boolean;
};

const ReportPeriod: React.FC<ReportPeriodProps> = ({
  fromDate,
  toDate,
  reportingSpan,
  fromPage,
  toPage,
  isAllPage,
  isOddPage,
  isEvenPage,
}) => {
  // デフォルト値の設定
  const defaultFromDate = fromDate || 'YYYY-MM-DD';
  const defaultToDate = toDate || 'YYYY-MM-DD';
  const defaultFromPage = fromPage || '000000';
  const defaultToPage = toPage || '999999';

  return (
    <Container>
      <Title>範囲指定</Title>
      <DateInputs>
        <DateInput value={defaultFromDate} /> ～ <DateInput value={defaultToDate} />
      </DateInputs>
      <ReportingSpan>
        <Checkbox type="checkbox" checked={reportingSpan} /> 起案所属別改ページ
      </ReportingSpan>
      <PageInputs>
        <Label>所属</Label> <PageInput value={defaultFromPage} /> ～ <PageInput value={defaultToPage} />
      </PageInputs>
      <PageTypes>
        <Radio type="radio" checked={isAllPage} /> 所属
        <Radio type="radio" checked={isOddPage} /> 奇数行  
        <Radio type="radio" checked={isEvenPage} /> 偶数行
      </PageTypes>
    </Container>
  );
};

// スタイリング
const Container = styled.div`
  padding: 16px;
  border: 1px solid #ccc;
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 16px;
`;

const DateInputs = styled.div`
  margin-bottom: 8px;
`;

const DateInput = styled.input`
  width: 100px;
`;

const ReportingSpan = styled.label`
  display: block;
  margin-bottom: 16px;
`;

const Checkbox = styled.input`
  margin-right: 4px;
`;

const PageInputs = styled.div`
  margin-bottom: 8px;
`;

const Label = styled.span`
  margin-right: 4px;
`;

const PageInput = styled.input`
  width: 60px;
`;

const PageTypes = styled.div`
  display: flex;
`;

const Radio = styled.input`
  margin-right: 4px;

  &:not(:last-child) {
    margin-right: 16px;  
  }
`;

// 使用例
const UsageExample: React.FC = () => {
  return (
    <ReportPeriod
      fromDate="2023-06-01"
      toDate="2023-06-30"
      reportingSpan={true}
      fromPage="000001"  
      toPage="999999"
      isAllPage={true}
      isOddPage={false}
      isEvenPage={false}
    />
  );
};

export default ReportPeriod;