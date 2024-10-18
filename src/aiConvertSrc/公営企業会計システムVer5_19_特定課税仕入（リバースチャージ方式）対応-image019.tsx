import React from 'react';
import styled from 'styled-components';

// 消費税計算明細書のデータ型定義
type TaxStatementData = {
  date: string;
  taxRate5: number;
  taxRate8: number;
  taxAmount5: number;
  taxAmount8: number;
  totalSales: number;
  totalTaxAmount: number;
};

// 消費税計算明細書コンポーネントのプロパティ型定義
type TaxStatementProps = {
  data: TaxStatementData;
};

// テーブルのスタイル定義
const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;

  th, td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: right;
  }

  th {
    background-color: #f0f0f0;
  }

  @media screen and (max-width: 600px) {
    font-size: 12px;
  }
`;

// 小計行のスタイル定義
const SubtotalRow = styled.tr`
  background-color: #f9f9f9;
  font-weight: bold;
`;

// 消費税計算明細書コンポーネント
const TaxStatement: React.FC<TaxStatementProps> = ({ data }) => {
  // 税抜金額の計算
  const calcTaxExcludedAmount = (amount: number, taxRate: number) => {
    return Math.round(amount / (1 + taxRate / 100));
  };

  return (
    <Table>
      <thead>
        <tr>
          <th>日付</th>
          <th>税率5%対象売上</th>
          <th>税率8%対象売上</th>
          <th>5%税額</th>
          <th>8%税額</th>
          <th>総売上金額</th>
          <th>総税額</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{data.date}</td>
          <td>{data.taxRate5.toLocaleString()}</td>
          <td>{data.taxRate8.toLocaleString()}</td>
          <td>{data.taxAmount5.toLocaleString()}</td>
          <td>{data.taxAmount8.toLocaleString()}</td>
          <td>{data.totalSales.toLocaleString()}</td>
          <td>{data.totalTaxAmount.toLocaleString()}</td>
        </tr>
        <SubtotalRow>
          <td>税抜小計</td>
          <td>{calcTaxExcludedAmount(data.taxRate5, 5).toLocaleString()}</td>
          <td>{calcTaxExcludedAmount(data.taxRate8, 8).toLocaleString()}</td>
          <td colSpan={4}></td>
        </SubtotalRow>
      </tbody>
    </Table>
  );
};

// サンプルデータを用いた表示用コンポーネント
const TaxStatementSample: React.FC = () => {
  const sampleData: TaxStatementData = {
    date: '2016/03/25',
    taxRate5: 93006043,
    taxRate8: 2030115070,
    taxAmount5: 0,
    taxAmount8: 85,
    totalSales: 2123121127,
    totalTaxAmount: 291553793,
  };

  return (
    <div>
      <h2>消費税計算明細書</h2>
      <TaxStatement data={sampleData} />
    </div>
  );
};

export default TaxStatement;