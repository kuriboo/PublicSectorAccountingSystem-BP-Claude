// 商勘前買収仕入等税額表コンポーネント
import React from 'react';
import styled from 'styled-components';

// テーブルのスタイル定義
const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;

  th, td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: center;
  }

  th {
    background-color: #f2f2f2;
  }

  @media screen and (max-width: 600px) {
    font-size: 12px;
  }
`;

// 表題のスタイル定義
const Title = styled.h2`
  font-size: 18px;
  margin-bottom: 10px;

  @media screen and (max-width: 600px) {
    font-size: 16px;
  }
`;

// 商勘前買収仕入等税額表の型定義
type PurchaseTaxAmountTableProps = {
  data: {
    category: string;
    amount: number;
  }[];
};

// 商勘前買収仕入等税額表コンポーネント
const PurchaseTaxAmountTable: React.FC<PurchaseTaxAmountTableProps> = ({ data }) => {
  // データが空の場合の処理
  if (!data || data.length === 0) {
    return <p>データがありません。</p>;
  }

  // テーブルの行を生成
  const tableRows = data.map(({ category, amount }, index) => (
    <tr key={index}>
      <td>{category}</td>
      <td>{amount.toLocaleString()}</td>
    </tr>
  ));

  return (
    <div>
      <Title>商勘前買収仕入等税額表</Title>
      <Table>
        <thead>
          <tr>
            <th>項目</th>
            <th>金額</th>
          </tr>
        </thead>
        <tbody>{tableRows}</tbody>
      </Table>
    </div>
  );
};

// 使用例
const sampleData = [
  { category: '課税標準額', amount: 815300 },
  { category: '課税売上高のうち軽減税率分', amount: 0 },
  { category: '控除税額', amount: 66841 },
  { category: 'うち、控除税額', amount: 66841 },
];

const PurchaseTaxAmountTableExample = () => (
  <PurchaseTaxAmountTable data={sampleData} />
);

export default PurchaseTaxAmountTableExample;