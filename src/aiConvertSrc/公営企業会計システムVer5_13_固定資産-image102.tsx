import React from 'react';
import styled from 'styled-components';

// 財務引継勘定のデータ型定義
type FinancialData = {
  資産番号: string;
  資産名: string;
  償却限度額: number;
  残存価額: number;
  年間償却額: number;
  改良当年度差引償却額: number;
  月別改良償却額: number;
};

// 財務引継勘定コンポーネントのプロパティ型定義
type FinancialTransferProps = {
  data: FinancialData[];
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
    font-weight: bold;
  }

  tr:nth-child(even) {
    background-color: #f9f9f9;
  }

  @media (max-width: 600px) {
    font-size: 12px;

    th, td {
      padding: 6px;
    }
  }
`;

// 財務引継勘定コンポーネント
const FinancialTransfer: React.FC<FinancialTransferProps> = ({ data }) => {
  // 合計を計算
  const total = data.reduce((acc, cur) => ({
    償却限度額: acc.償却限度額 + cur.償却限度額,
    残存価額: acc.残存価額 + cur.残存価額,
    年間償却額: acc.年間償却額 + cur.年間償却額,
    改良当年度差引償却額: acc.改良当年度差引償却額 + cur.改良当年度差引償却額,
    月別改良償却額: acc.月別改良償却額 + cur.月別改良償却額,
  }), {
    償却限度額: 0,
    残存価額: 0, 
    年間償却額: 0,
    改良当年度差引償却額: 0,
    月別改良償却額: 0,
  });

  return (
    <Table>
      <thead>
        <tr>
          <th>財源名称</th>
          <th>償却限度額</th>
          <th>残存価額</th>
          <th>年間償却額</th>
          <th>改良当年度差引償却額</th>
          <th>月別改良償却額</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.資産名}</td>
            <td>{item.償却限度額.toLocaleString()}</td>
            <td>{item.残存価額.toLocaleString()}</td>
            <td>{item.年間償却額.toLocaleString()}</td>
            <td>{item.改良当年度差引償却額.toLocaleString()}</td>
            <td>{item.月別改良償却額.toLocaleString()}</td>
          </tr>
        ))}
        <tr>
          <td>合計</td>
          <td>{total.償却限度額.toLocaleString()}</td>
          <td>{total.残存価額.toLocaleString()}</td>
          <td>{total.年間償却額.toLocaleString()}</td>
          <td>{total.改良当年度差引償却額.toLocaleString()}</td>
          <td>{total.月別改良償却額.toLocaleString()}</td>
        </tr>
      </tbody>
    </Table>
  );
};

// サンプルデータ
const sampleData: FinancialData[] = [
  {
    資産番号: '42300100',
    資産名: '自己財源',
    償却限度額: 592398,
    残存価額: 62358,
    年間償却額: 14030,
    改良当年度差引償却額: 0,
    月別改良償却額: 0,
  },
  {
    資産番号: '42300100',
    資産名: '補助金',
    償却限度額: 1319002,
    残存価額: 138842,
    年間償却額: 31240,
    改良当年度差引償却額: 0,
    月別改良償却額: 0,
  },
];

// 表示用コンポーネント
const App: React.FC = () => {
  return (
    <div>
      <h2>財務引継勘定</h2>
      <FinancialTransfer data={sampleData} />
    </div>
  );
};

export default App;