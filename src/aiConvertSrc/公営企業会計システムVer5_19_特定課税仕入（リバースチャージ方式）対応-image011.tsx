import React from 'react';
import styled from 'styled-components';

type ConsumptionTaxReportProps = {
  date: string;
  taxAmount: number;
  taxFreeAmount: number;
  nonTaxableAmount: number;
};

const Container = styled.div`
  padding: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #f9f9f9;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`;

const Label = styled.div`
  font-weight: bold;
`;

const Value = styled.div`
  text-align: right;
`;

const ConsumptionTaxReport: React.FC<ConsumptionTaxReportProps> = ({
  date,
  taxAmount,
  taxFreeAmount,
  nonTaxableAmount,
}) => {
  return (
    <Container>
      <Row>
        <Label>年月日</Label>
        <Value>{date}</Value>
      </Row>
      <Row>
        <Label>税込金額</Label>
        <Value>{taxAmount}</Value>
      </Row>
      <Row>  
        <Label>税抜金額</Label>
        <Value>{taxFreeAmount}</Value>
      </Row>
      <Row>
        <Label>消費税額</Label>
        <Value>{nonTaxableAmount}</Value>
      </Row>
    </Container>
  );
};

// Usage example
const SampleData: ConsumptionTaxReportProps = {
  date: '年_月_日',
  taxAmount: 0,
  taxFreeAmount: 0,
  nonTaxableAmount: 0,
};

const App: React.FC = () => {
  return (
    <div>
      <h1>消費税申告情報</h1>
      <ConsumptionTaxReport {...SampleData} />
    </div>
  );  
};

export default App;