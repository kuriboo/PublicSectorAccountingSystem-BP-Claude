import React from 'react';
import styled from '@emotion/styled';

type TaxWithholdingTableProps = {
  data: {
    taxRate: number;
    incomeTax: number;
    specialTax: number;
    taxWithheldAmount: number;
    amountReceivedByTaxpayer: number;
  }[];
};

const TaxWithholdingTable: React.FC<TaxWithholdingTableProps> = ({ data }) => {
  return (
    <Table>
      <thead>
        <tr>
          <TableHeader>税率</TableHeader>
          <TableHeader>収入区分</TableHeader>
          <TableHeader>特定収入額に係る税率上乗せ合計</TableHeader>
          <TableHeader>免税事業者からの課税仕入れ額</TableHeader>
          <TableHeader>これまでの入力金額（予定区分別合計）</TableHeader>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            <TableCell>{row.taxRate}%</TableCell>
            <TableCell>{getIncomeTaxLabel(row.incomeTax)}</TableCell>
            <TableCell>{row.specialTax.toLocaleString()}</TableCell>
            <TableCell>{row.taxWithheldAmount.toLocaleString()}</TableCell>
            <TableCell>{row.amountReceivedByTaxpayer.toLocaleString()}</TableCell>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

// ラベルの変換関数
const getIncomeTaxLabel = (incomeTax: number) => {
  switch (incomeTax) {
    case 3:
      return '課税';
    case 8:
      return '共通';
    case 9:
      return '課税';
    default:
      return '';
  }
};

// サンプルデータ
const sampleData = [
  {
    taxRate: 10,
    incomeTax: 3,
    specialTax: 100000,
    taxWithheldAmount: 50000,
    amountReceivedByTaxpayer: 50000,
  },
  {
    taxRate: 10,
    incomeTax: 8,
    specialTax: 100000,
    taxWithheldAmount: 0,
    amountReceivedByTaxpayer: 50000,
  },
  {
    taxRate: 8,
    incomeTax: 3,
    specialTax: 100000,
    taxWithheldAmount: 0,
    amountReceivedByTaxpayer: 50000,
  },
  {
    taxRate: 8,
    incomeTax: 8,
    specialTax: 100000,
    taxWithheldAmount: 0,
    amountReceivedByTaxpayer: 50000,
  },
];

// スタイリング
const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
`;

const TableHeader = styled.th`
  background-color: #f2f2f2;
  padding: 8px;
  text-align: center;
  font-weight: bold;
  border: 1px solid #ddd;

  @media (max-width: 600px) {
    font-size: 12px;
  }
`;

const TableCell = styled.td`
  padding: 8px;
  border: 1px solid #ddd;
  text-align: right;

  @media (max-width: 600px) {
    font-size: 12px;
  }
`;

// 使用例
const App: React.FC = () => {
  return (
    <div>
      <h2>課税売上割合</h2>
      <TaxWithholdingTable data={sampleData} />
    </div>
  );
};

export default App;