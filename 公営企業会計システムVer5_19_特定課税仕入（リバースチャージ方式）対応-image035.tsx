import React from 'react';
import styled from 'styled-components';

// 明細データの型定義
type MeisaiData = {
  date: string;
  kubun: string;
  bango: string;
  tenmei: string;
  shiten: string;
  yokin: number;
  shukkin: number;
  zandaka: number;
  tekiyou: string;
};

// 明細テーブルのプロパティ型定義
type MeisaiTableProps = {
  data: MeisaiData[];
};

// 明細テーブルコンポーネント
const MeisaiTable: React.FC<MeisaiTableProps> = ({ data }) => {
  return (
    <TableContainer>
      <Table>
        <thead>
          <tr>
            <Th>年月日</Th>
            <Th>区分</Th>
            <Th>番号/明細</Th>
            <Th>店名</Th>
            <Th>支店</Th>
            <Th>預金</Th>
            <Th>出金</Th>
            <Th>残高</Th>
            <Th>摘要</Th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <Td>{item.date}</Td>
              <Td>{item.kubun}</Td>
              <Td>{item.bango}</Td>
              <Td>{item.tenmei}</Td>
              <Td>{item.shiten}</Td>
              <Td>{item.yokin.toLocaleString()}</Td>
              <Td>{item.shukkin.toLocaleString()}</Td>
              <Td>{item.zandaka.toLocaleString()}</Td>
              <Td>{item.tekiyou}</Td>
            </tr>
          ))}
        </tbody>
      </Table>
    </TableContainer>
  );
};

// スタイリング
const TableContainer = styled.div`
  overflow-x: auto;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;

  @media (max-width: 600px) {
    font-size: 12px;
  }
`;

const Th = styled.th`
  background-color: #f0f0f0;
  padding: 8px;
  text-align: center;
  border: 1px solid #ccc;
  white-space: nowrap;
`;

const Td = styled.td`
  padding: 8px;
  border: 1px solid #ccc;
  text-align: right;

  &:first-child {
    text-align: center;
  }
`;

// サンプルデータ
const sampleData: MeisaiData[] = [
  {
    date: '2016/03/25',
    kubun: '普通',
    bango: '1234567',
    tenmei: 'ABC銀行',
    shiten: '本店',
    yokin: 1000,
    shukkin: 0,
    zandaka: 2000,
    tekiyou: '入金',
  },
  {
    date: '2016/03/26',
    kubun: '普通',
    bango: '1234567',
    tenmei: 'ABC銀行',
    shiten: '本店',
    yokin: 0,
    shukkin: 500,
    zandaka: 1500,
    tekiyou: '出金',
  },
];

// サンプル表示用コンポーネント
const SampleMeisaiTable: React.FC = () => {
  return (
    <div>
      <h2>明細テーブル</h2>
      <MeisaiTable data={sampleData} />
    </div>
  );
};

export default SampleMeisaiTable;