import React from 'react';
import styled from '@emotion/styled';

type TaxTableProps = {
  data: {
    taxRate: number;
    consumpTax: number;
    percent: number;
    discountPrice: number;
    taxIncluded: number;
    taxExcluded: number;
    salesDiffTaxIncl: number;
  }[];
  grossProfit: number;
  consumpTaxTotal: number;
  netProfit: number;
};

const TaxTable: React.FC<TaxTableProps> = ({ data, grossProfit, consumpTaxTotal, netProfit }) => {
  return (
    <TableWrapper>
      <TableHeader>
        <div>税区分</div>
        <div>消費税率及び地方消費税率</div>
        <div>地方消費税率</div>
        <div>収入区分</div>
        <div>税込額</div>
        <div>税抜額</div>
        <div>消費税額</div>
      </TableHeader>
      <TableBody>
        {data.map((row, index) => (
          <TableRow key={index}>
            <div>{row.taxRate}</div>
            <div>{row.consumpTax.toFixed(2)}</div>
            <div>{row.percent.toFixed(2)}</div>
            <div>-</div>
            <div>{row.taxIncluded.toLocaleString()}</div>
            <div>{row.taxExcluded.toLocaleString()}</div>
            <div>{row.salesDiffTaxIncl.toLocaleString()}</div>
          </TableRow>
        ))}
        <TableRow>
          <div>非課税</div>
          <div>-</div>
          <div>-</div>
          <div>-</div>
          <div>{data[0].taxIncluded.toLocaleString()}</div>
          <div>{data[0].taxExcluded.toLocaleString()}</div>
          <div>0</div>
        </TableRow>
        <TableRow>
          <div>免税</div>
          <div>-</div>
          <div>-</div>
          <div>-</div>
          <div>{data[0].taxIncluded.toLocaleString()}</div>
          <div>{data[0].taxExcluded.toLocaleString()}</div>
          <div>0</div>
        </TableRow>
      </TableBody>
      <TotalSection>
        <TotalItem>
          <div>税区分</div>
          <div>税率</div>
          <div>%</div>
          <div>収入区分</div>
        </TotalItem>
        <TotalItem>
          <div>税込額</div>
          <Value>{grossProfit} 円</Value>
          <div>税抜額</div>
          <Value>{netProfit} 円</Value>
          <div>消費税額</div>   
          <Value>{consumpTaxTotal} 円</Value>
        </TotalItem>
      </TotalSection>
    </TableWrapper>
  );
};

// Sample data for demonstration
const sampleData = [
  {
    taxRate: 10,
    consumpTax: 10,
    percent: 2.2,
    discountPrice: 0,
    taxIncluded: 110000,
    taxExcluded: 100000,
    salesDiffTaxIncl: 10000,
  },
  // ...
];

const TaxTableDemo = () => {
  return (
    <TaxTable
      data={sampleData}
      grossProfit={734000}
      consumpTaxTotal={34000}  
      netProfit={700000}
    />
  );
};

// Styled components
const TableWrapper = styled.div`
  font-family: sans-serif;
`;

const TableHeader = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  font-weight: bold;
  padding: 8px;
  border-bottom: 1px solid #ccc;
`;

const TableBody = styled.div`
  > div:nth-of-type(odd) {
    background-color: #f2f2f2;
  }
`;

const TableRow = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  padding: 8px;
  text-align: right;

  > div {
    padding: 4px;
  }
`;

const TotalSection = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
`;

const TotalItem = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr); 
  grid-gap: 8px;
  align-items: center;
`;

const Value = styled.div`
  font-weight: bold;
`;

export default TaxTableDemo;