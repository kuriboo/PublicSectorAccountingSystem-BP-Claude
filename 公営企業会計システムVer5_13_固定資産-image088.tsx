import React from 'react';
import styled from 'styled-components';

// 資産情報の型定義
interface Asset {
  code1: string;
  code2: string;
  name: string;
  amount: number;
  price: number;
  unit: string;
  total: number;
}

// 資産明細テーブルのプロパティ型定義
interface AssetTableProps {
  assets: Asset[];
}

// 資産明細テーブルコンポーネント
const AssetTable: React.FC<AssetTableProps> = ({ assets }) => {
  return (
    <TableWrapper>
      <TableHeader>
        <tr>
          <HeaderCell>名称コード</HeaderCell>
          <HeaderCell>現格コード</HeaderCell>
          <HeaderCell>管理名称</HeaderCell>
          <HeaderCell>管理現格名称</HeaderCell>
          <HeaderCell>数量</HeaderCell>
          <HeaderCell>単位</HeaderCell>
          <HeaderCell>金額</HeaderCell>
        </tr>
      </TableHeader>
      <TableBody>
        {assets.map((asset, index) => (
          <tr key={index}>
            <BodyCell>{asset.code1}</BodyCell>
            <BodyCell>{asset.code2}</BodyCell>
            <BodyCell>{asset.name}</BodyCell>
            <BodyCell>{asset.amount.toFixed(2)}</BodyCell>
            <BodyCell>{asset.price.toFixed(2)}</BodyCell>
            <BodyCell>{asset.unit}</BodyCell>
            <BodyCell>{asset.total.toLocaleString()}</BodyCell>
          </tr>
        ))}
      </TableBody>
    </TableWrapper>
  );
};

// スタイリング
const TableWrapper = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;

  @media (max-width: 600px) {
    font-size: 12px;
  }
`;

const TableHeader = styled.thead`
  background-color: #f0f0f0;
`;

const HeaderCell = styled.th`
  padding: 8px;
  text-align: left;
  border-bottom: 1px solid #ddd;
`;

const TableBody = styled.tbody``;

const BodyCell = styled.td`
  padding: 8px;
  border-bottom: 1px solid #ddd;
`;

// サンプルデータ
const sampleAssets: Asset[] = [
  {
    code1: '000001',
    code2: '000001',
    name: 'DIP(A1)預貯金',
    amount: 0.75,
    price: 4.0,
    unit: '本',
    total: 7000000,
  },
];

// 使用例
const AssetTableExample: React.FC = () => {
  return (
    <div>
      <h2>資産明細</h2>
      <AssetTable assets={sampleAssets} />
    </div>
  );
};

export default AssetTableExample;