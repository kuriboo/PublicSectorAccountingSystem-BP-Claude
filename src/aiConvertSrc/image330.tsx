import React from 'react';
import styled from 'styled-components';

type TaxCalculatorProps = {
  taxRate: number;
  price: number;
};

const TaxCalculator: React.FC<TaxCalculatorProps> = ({ taxRate, price }) => {
  // 税込額を計算
  const includedTaxPrice = Math.round(price * (1 + taxRate / 100));

  // 消費税額を計算
  const taxAmount = includedTaxPrice - price;

  return (
    <Container>
      <Title>入力金額合計</Title>
      <PriceTable>
        <PriceRow>
          <PriceLabel>税込額</PriceLabel>
          <PriceValue>{includedTaxPrice.toLocaleString()}</PriceValue>
        </PriceRow>
        <PriceRow>
          <PriceLabel>税抜額</PriceLabel>
          <PriceValue>{price.toLocaleString()}</PriceValue>
        </PriceRow>
        <PriceRow>
          <PriceLabel>消費税額</PriceLabel>
          <PriceValue>{taxAmount.toLocaleString()}</PriceValue>
        </PriceRow>
      </PriceTable>
      <DetailTable>
        <TableRow>
          <TableHeader>税区分</TableHeader>
          <TableHeader>消費税率</TableHeader>
          <TableHeader>税抜額</TableHeader>
          <TableHeader>税税額</TableHeader>
          <TableHeader>消費税額</TableHeader>
        </TableRow>
        <TableRow>
          <TableCell>課税</TableCell>
          <TableCell>{taxRate.toFixed(2)}%</TableCell>
          <TableCell>{price.toLocaleString()}</TableCell>
          <TableCell>{includedTaxPrice.toLocaleString()}</TableCell>
          <TableCell>{taxAmount.toLocaleString()}</TableCell>
        </TableRow>
      </DetailTable>
    </Container>
  );
};

// サンプルデータを用いた使用例
const SampleUsage: React.FC = () => {
  return (
    <div>
      <h2>税額計算サンプル</h2>
      <TaxCalculator taxRate={10} price={157500} />
    </div>
  );
};

// スタイリング
const Container = styled.div`
  font-family: Arial, sans-serif;
  padding: 1rem;

  @media (max-width: 600px) {
    padding: 0.5rem;
  }
`;

const Title = styled.h3`
  margin-bottom: 1rem;
`;

const PriceTable = styled.div`
  margin-bottom: 1rem;
`;

const PriceRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
`;

const PriceLabel = styled.span`
  font-weight: bold;
`;

const PriceValue = styled.span``;

const DetailTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

const TableHeader = styled.th`
  padding: 0.5rem;
  text-align: left;
  border-bottom: 1px solid #ddd;
`;

const TableCell = styled.td`
  padding: 0.5rem;
`;

export default TaxCalculator;