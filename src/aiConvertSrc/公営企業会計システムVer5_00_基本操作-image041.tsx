import React from 'react';
import styled from 'styled-components';

// 解除データの型定義
type CancellationData = {
  category: string;
  currentPeriod: number;
  previousPeriod: number;
  ratio: number;
  yoy: number;
  yoyRatio: number;
};

// 解除コンポーネントのプロパティ型定義
type CancellationProps = {
  data: CancellationData[];
};

// 解除コンポーネント
const Cancellation: React.FC<CancellationProps> = ({ data }) => {
  return (
    <Table>
      <thead>
        <tr>
          <Th>解除</Th>
          <Th>当期</Th>
          <Th>前期</Th>
          <Th>対比</Th>
          <Th>前年同期</Th>
          <Th>前年対比</Th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <Td>{item.category}</Td>
            <Td>{item.currentPeriod.toLocaleString()}</Td>
            <Td>{item.previousPeriod.toLocaleString()}</Td>
            <Td>{item.ratio}</Td>
            <Td>{item.yoy.toLocaleString()}</Td>
            <Td>{item.yoyRatio.toLocaleString()}</Td>
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
  padding: 10px;
  text-align: center;
  border: 1px solid #ddd;
  white-space: nowrap;
`;

const Td = styled.td`
  padding: 10px;
  text-align: right;
  border: 1px solid #ddd;
  white-space: nowrap;
`;

// サンプルデータ
const sampleData: CancellationData[] = [
  {
    category: '事務用/消耗品',
    currentPeriod: 23866,
    previousPeriod: 1708,
    ratio: 0.0716,
    yoy: 201960,
    yoyRatio: 14960,
  },
  {
    category: '作業用/消耗品',
    currentPeriod: 23866,
    previousPeriod: 1708,
    ratio: 0.0716,
    yoy: 201960,
    yoyRatio: 14960,
  },
];

// 使用例
const CancellationExample: React.FC = () => {
  return (
    <div>
      <h2>解除データ</h2>
      <Cancellation data={sampleData} />
    </div>
  );
};

export default Cancellation;