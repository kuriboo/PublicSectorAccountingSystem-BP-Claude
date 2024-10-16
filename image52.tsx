import React from 'react';
import styled from '@emotion/styled';

// 型定義
type ResultTableProps = {
  data: {
    建設改良費: number;
    機械製作費: number;
    事務費: number;
    設計費: number;
    消費税: number;
    事業費用: number;
    全体事業費: number;
    国債関連費: number;
    印刷製本費: number;
    電子計算費: number;
    報告書作成費: number;
    《出向けた清算税額》: number;
  }[];
};

// スタイル定義
const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
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
    th, td {
      padding: 4px;
    }
  }
`;

// メインコンポーネント
const ResultTable: React.FC<ResultTableProps> = ({ data }) => {
  if (!data || data.length === 0) {
    return <div>データがありません。</div>;
  }

  return (
    <Table>
      <thead>
        <tr>
          <th>建設改良費</th>
          <th>機械製作費</th>
          <th>事務費</th>
          <th>設計費</th>
          <th>消費税</th>
          <th>事業費用</th>
          <th>全体事業費</th>
          <th>国債関連費</th>
          <th>印刷製本費</th>
          <th>電子計算費</th>
          <th>報告書作成費</th>
          <th>《出向けた清算税額》</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            <td>{row.建設改良費.toLocaleString()}</td>
            <td>{row.機械製作費.toLocaleString()}</td>
            <td>{row.事務費.toLocaleString()}</td>
            <td>{row.設計費.toLocaleString()}</td>
            <td>{row.消費税.toLocaleString()}</td>
            <td>{row.事業費用.toLocaleString()}</td>
            <td>{row.全体事業費.toLocaleString()}</td>
            <td>{row.国債関連費.toLocaleString()}</td>
            <td>{row.印刷製本費.toLocaleString()}</td>
            <td>{row.電子計算費.toLocaleString()}</td>
            <td>{row.報告書作成費.toLocaleString()}</td>
            <td>{row.《出向けた清算税額》.toLocaleString()}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

// 使用例
const ExampleData = [
  {
    建設改良費: 2100000,
    機械製作費: 2100000,
    事務費: 2000000,
    設計費: 2000000,
    消費税: 100000,
    事業費用: 100000,
    全体事業費: 1000,
    国債関連費: 1000,
    印刷製本費: 1000,
    電子計算費: 1000,
    報告書作成費: 1000,
    《出向けた清算税額》: 80
  }  
];

const ResultTableExample: React.FC = () => {
  return (
    <div>
      <h2>事業費用結果表</h2>
      <ResultTable data={ExampleData} />
    </div>
  );
};

export default ResultTableExample;