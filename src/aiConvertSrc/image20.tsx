import React from 'react';
import styled from '@emotion/styled';

interface TaxProps {
  /**
   * 決定額
   */
  decisionAmount: number;
  /**
   * 税抜額
   */
  excludingTaxAmount: number;
  /**
   * 消費税率
   */
  taxRate: number;
  /**
   * 消費税額
   */
  taxAmount: number;
  /**
   * 他税率
   */
  otherTaxRate: number;
  /**
   * 他税額
   */
  otherTaxAmount: number;
  /**
   * 摘要
   */
  summary: string;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  box-sizing: border-box;

  @media (min-width: 768px) {
    max-width: 600px;
  }
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 8px;
`;

const Label = styled.label`
  font-weight: bold;
`;

const Value = styled.span`
  margin-left: 8px;
`;

const Tax: React.FC<TaxProps> = ({
  decisionAmount,
  excludingTaxAmount,
  taxRate,
  taxAmount,
  otherTaxRate,
  otherTaxAmount,
  summary,
}) => {
  return (
    <Container>
      <Row>
        <Label>決定額:</Label>
        <Value>{decisionAmount.toLocaleString()}</Value>
      </Row>
      <Row>
        <Label>税抜額:</Label>
        <Value>{excludingTaxAmount.toLocaleString()}</Value>
      </Row>
      <Row>
        <Label>
          消費税率:
          <Value>{taxRate}%</Value>
        </Label>
        <Label>
          消費税額:
          <Value>{taxAmount.toLocaleString()}</Value>
        </Label>
      </Row>
      <Row>
        <Label>
          他税率:
          <Value>{otherTaxRate}%</Value>
        </Label>
        <Label>
          他税額:
          <Value>{otherTaxAmount.toLocaleString()}</Value>
        </Label>
      </Row>
      {summary && (
        <Row>
          <Label>摘要:</Label>
          <Value>{summary}</Value>
        </Row>
      )}
    </Container>
  );
};

const SampleTax = () => {
  const taxData: TaxProps = {
    decisionAmount: 1000000,
    excludingTaxAmount: 1000000,
    taxRate: 8,
    taxAmount: 0,
    otherTaxRate: 0,
    otherTaxAmount: 0,
    summary: '摘要',
  };

  return <Tax {...taxData} />;
};

export default SampleTax;