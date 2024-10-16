import React from 'react';
import styled from '@emotion/styled';

type ItemProps = {
  no: string;
  name: string;
  quantity: string;
  unit: string;
  taxRate: number;
  unitPrice: number;
  taxAmount: number;
  totalAmount: number;
};

type InvoiceProps = {
  items: ItemProps[];
};

const InvoiceContainer = styled.div`
  font-family: Arial, sans-serif;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;

  @media (max-width: 600px) {
    max-width: 100%;
    padding: 10px;
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHeader = styled.th`
  text-align: center;
  padding: 8px;
  border: 1px solid #ddd;
  background-color: #f2f2f2;
`;

const TableCell = styled.td`
  text-align: center;
  padding: 8px;
  border: 1px solid #ddd;
`;

const TotalRow = styled.tr`
  font-weight: bold;
`;

const Invoice: React.FC<InvoiceProps> = ({ items }) => {
  // 消費税額と税抜金額の合計を計算
  const totalTaxAmount = items.reduce((sum, item) => sum + item.taxAmount, 0);
  const totalAmount = items.reduce((sum, item) => sum + item.totalAmount, 0);

  return (
    <InvoiceContainer>
      <Table>
        <thead>
          <tr>
            <TableHeader>節</TableHeader>
            <TableHeader>細節</TableHeader>
            <TableHeader>明細</TableHeader>
            <TableHeader>税区分</TableHeader>
            <TableHeader>消費税率</TableHeader>
            <TableHeader>取引金額</TableHeader>
            <TableHeader>消費税額</TableHeader>
            <TableHeader>税抜金額</TableHeader>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <TableCell>{item.no.slice(0, 2)}</TableCell>
              <TableCell>{item.no.slice(2)}</TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.unit}</TableCell>
              <TableCell>{item.taxRate}%</TableCell>
              <TableCell>{item.unitPrice.toLocaleString()}</TableCell>
              <TableCell>{item.taxAmount.toLocaleString()}</TableCell>
              <TableCell>{item.totalAmount.toLocaleString()}</TableCell>
            </tr>
          ))}
          <TotalRow>
            <TableCell colSpan={6}></TableCell>
            <TableCell>{totalTaxAmount.toLocaleString()}</TableCell>
            <TableCell>{totalAmount.toLocaleString()}</TableCell>
          </TotalRow>
        </tbody>
      </Table>
    </InvoiceContainer>
  );
};

// サンプルデータ
const sampleItems: ItemProps[] = [
  {
    no: '001',
    name: '下水道使用料',
    quantity: '001',
    unit: '下水道使用料',
    taxRate: 10,
    unitPrice: 10000,
    taxAmount: 909,
    totalAmount: 10000,
  },
  {
    no: '002',
    name: '下水道使用料',
    quantity: '001',
    unit: '下水道使用料',
    taxRate: 10,
    unitPrice: 5000,
    taxAmount: 455,
    totalAmount: 5000,
  },
];

// サンプル表示用コンポーネント
const InvoiceSample: React.FC = () => {
  return (
    <div>
      <h1>請求書サンプル</h1>
      <Invoice items={sampleItems} />
    </div>
  );
};

export default InvoiceSample;