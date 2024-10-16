import React from 'react';
import styled from '@emotion/styled';

// 給与データの型定義
type SalaryData = {
  節番号: string;
  給与年度: string;
  決定年月: string;
  明細日: string;
  支給年月日: string;
  会計年度: string;
  日コード: string;
  管理区分: string;
  支給額: string;
  控除額: string;
};

// 給与データのプロパティ型定義
type SalaryTableProps = {
  data: SalaryData[];
};

// 給与データテーブルコンポーネント
const SalaryTable: React.FC<SalaryTableProps> = ({ data }) => {
  return (
    <Table>
      <thead>
        <tr>
          <Th>節番号</Th>
          <Th>給与年度</Th>
          <Th>決定年月</Th>
          <Th>明細日</Th>
          <Th>支給年月日</Th>
          <Th>会計年度</Th>
          <Th>日コード</Th>
          <Th>管理区分</Th>
          <Th>支給額</Th>
          <Th>控除額</Th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            <Td>{row.節番号}</Td>
            <Td>{row.給与年度}</Td>
            <Td>{row.決定年月}</Td>
            <Td>{row.明細日}</Td>
            <Td>{row.支給年月日}</Td>
            <Td>{row.会計年度}</Td>
            <Td>{row.日コード}</Td>
            <Td>{row.管理区分}</Td>
            <Td>{row.支給額}</Td>
            <Td>{row.控除額}</Td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

// スタイリング
const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;

  @media (max-width: 600px) {
    font-size: 12px;
  }
`;

const Th = styled.th`
  background-color: #f2f2f2;
  padding: 8px;
  text-align: center;
  border: 1px solid #ddd;
`;

const Td = styled.td`
  padding: 8px;
  border: 1px solid #ddd;
  text-align: center;
`;

// サンプルデータ
const sampleData: SalaryData[] = [
  {
    節番号: '2021',
    給与年度: '1',
    決定年月: '令和03年12月25日',
    明細日: '令和03年12月25日',
    支給年月日: '2021',
    会計年度: '54000000',
    日コード: '1000',
    管理区分: '200,000',
    支給額: '200,000',
    控除額: '0',
  },
  // ... 他のサンプルデータ
];

// 使用例
const App: React.FC = () => {
  return (
    <div>
      <h1>給与データ取込削除</h1>
      <SalaryTable data={sampleData} />
    </div>
  );
};

export default App;