import React from 'react';
import styled from 'styled-components';

interface ConsumptionTaxProps {
  date?: string;
  taxRate?: number;
  taxAmount?: number;
  taxIncludedAmount?: number;
  consumptionTaxAmount?: number;
}

const ConsumptionTax: React.FC<ConsumptionTaxProps> = ({
  date = '',
  taxRate = 0,
  taxAmount = 0,
  taxIncludedAmount = 0,
  consumptionTaxAmount = 0,
}) => {
  return (
    <Container>
      <Title>消費税計算伝票根拠</Title>
      <DateWrapper>
        <DateLabel>伝票日付</DateLabel>
        <DateValue>{date}</DateValue>
      </DateWrapper>
      <AmountGrid>
        <AmountItem>
          <AmountLabel>税込金額</AmountLabel>
          <AmountValue>{taxIncludedAmount}</AmountValue>
        </AmountItem>
        <AmountItem>
          <AmountLabel>税抜金額</AmountLabel>
          <AmountValue>{taxAmount}</AmountValue>
        </AmountItem>
        <AmountItem>
          <AmountLabel>消費税額</AmountLabel>
          <AmountValue>{consumptionTaxAmount}</AmountValue>
        </AmountItem>
      </AmountGrid>
      <ButtonWrapper>
        <Button>OK</Button>
        <Button>クリア</Button>
        <Button>キャンセル</Button>
      </ButtonWrapper>
    </Container>
  );
};

// Styling
const Container = styled.div`
  font-family: Arial, sans-serif;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 300px;
  margin: 0 auto;
`;

const Title = styled.h2`
  margin: 0 0 20px;
  text-align: center;
`;

const DateWrapper = styled.div`
  margin-bottom: 20px;
`;

const DateLabel = styled.span`
  font-weight: bold;
`;

const DateValue = styled.span`
  margin-left: 10px;
`;

const AmountGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  margin-bottom: 20px;
`;

const AmountItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AmountLabel = styled.span`
  font-weight: bold;
`;

const AmountValue = styled.span`
  margin-top: 5px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Button = styled.button`
  padding: 5px 10px;
  border: none;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
  border-radius: 4px;

  &:hover {
    background-color: #0056b3;
  }
`;

// Usage example
const ConsumptionTaxExample: React.FC = () => {
  return (
    <ConsumptionTax
      date="年 月 日"
      taxRate={10}
      taxAmount={1000}
      taxIncludedAmount={1100}
      consumptionTaxAmount={100}
    />
  );
};

export default ConsumptionTax;