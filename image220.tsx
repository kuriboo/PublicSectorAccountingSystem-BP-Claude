import React from 'react';
import styled from 'styled-components';

// 伝票明細の型定義
type SlipDetail = {
  date: string;
  item: string;
  quantity: number;
  price: number;
};

type Props = {
  slipDetails: SlipDetail[];
};

// テーブルのスタイル定義
const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  th, td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: left;
  }
  th {
    background-color: #f0f0f0;
  }
`;

const SlipTable: React.FC<Props> = ({ slipDetails }) => {
  return (
    <Table>
      <thead>
        <tr>
          <th>起案日</th>
          <th>摘要</th>
          <th>伝票No</th>
          <th>金額</th>
          <th>摘要</th>
        </tr>
      </thead>
      <tbody>
        {slipDetails.map((detail, index) => (
          <tr key={index}>
            <td>{detail.date}</td>
            <td>{detail.item}</td>
            <td>{detail.quantity}</td>
            <td>{detail.price.toLocaleString()}円</td>
            <td></td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

// サンプルデータ
const sampleData: SlipDetail[] = [
  { date: '03/11/25', item: '流用', quantity: 4, price: 1000 },
  { date: '03/11/25', item: '流用戻し', quantity: 5, price: 1000 },
];

export default function SampleSlipTable() {
  return (
    <div>
      <h2>伝票明細一覧</h2>
      <SlipTable slipDetails={sampleData} />
    </div>
  );
}