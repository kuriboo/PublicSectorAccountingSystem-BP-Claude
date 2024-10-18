import React from 'react';
import styled from 'styled-components';

// 商品情報の型定義
type ItemInfo = {
  no: number;
  name: string;
  retailPrice: number;
  purchasePrice: number;
  discountRate: number;
  commission: number;
  salesVolume: number;
  remarks: string;
};

// 商品情報テーブルのプロパティ型定義
type ItemTableProps = {
  items: ItemInfo[];
};

// 商品情報テーブルコンポーネント
const ItemTable: React.FC<ItemTableProps> = ({ items }) => {
  return (
    <Table>
      <thead>
        <tr>
          <Th>No.</Th>
          <Th>項目</Th>
          <Th>税別定価</Th>
          <Th>税別仕入価格</Th>
          <Th>値引率</Th>
          <Th>仕入単価の%</Th>
          <Th>販売見込数</Th>
          <Th>仕入額</Th>
          <Th>販売額</Th>
          <Th>粗利益</Th>
          <Th>備考</Th>
        </tr>
      </thead>
      <tbody>
        {items.map((item, index) => (
          <tr key={index}>
            <Td>{item.no}</Td>
            <Td>{item.name}</Td>
            <Td>{item.retailPrice.toLocaleString()}</Td>
            <Td>{item.purchasePrice.toLocaleString()}</Td>
            <Td>{item.discountRate}%</Td>
            <Td>{item.commission}%</Td>
            <Td>{item.salesVolume.toLocaleString()}</Td>
            <Td>{(item.purchasePrice * item.salesVolume).toLocaleString()}</Td>
            <Td>{(item.retailPrice * item.salesVolume).toLocaleString()}</Td>
            <Td>{((item.retailPrice - item.purchasePrice) * item.salesVolume).toLocaleString()}</Td>
            <Td>{item.remarks}</Td>
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
  text-align: right;
  border: 1px solid #ddd;
`;

// サンプルデータ
const sampleData: ItemInfo[] = [
  {
    no: 1,
    name: '黒田商店',
    retailPrice: 816000,
    purchasePrice: 588488,
    discountRate: 28,
    commission: 18,
    salesVolume: 120,
    remarks: '仕入先25',
  },
  {
    no: 2,
    name: '長尾商店',
    retailPrice: 15000,
    purchasePrice: 11520,
    discountRate: 33,
    commission: 18,
    salesVolume: 9,
    remarks: '',
  },
  // 他のデータ...
];

// 使用例
const App: React.FC = () => {
  return (
    <div>
      <h2>商品情報</h2>
      <ItemTable items={sampleData} />
    </div>
  );
};

export default App;