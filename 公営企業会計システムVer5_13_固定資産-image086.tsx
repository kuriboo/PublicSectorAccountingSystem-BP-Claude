import React from 'react';
import styled from '@emotion/styled';

// 資産番号の型定義
type AssetNumber = string;

// コンポーネントのPropsの型定義
interface AssetDetailProps {
  assetNumber: AssetNumber;
  itemCode: string;
  itemName: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
}

// スタイル定義
const AssetDetailContainer = styled.div`
  background-color: #f0f0f0;
  padding: 16px;
  margin-bottom: 16px;

  @media (max-width: 600px) {
    padding: 8px;
  }
`;

const AssetDetailTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const AssetDetailTableHeader = styled.th`
  background-color: #e0e0e0;
  padding: 8px;
  text-align: left;
  font-weight: bold;
`;

const AssetDetailTableCell = styled.td`
  padding: 8px;
`;

// 資産明細コンポーネント
const AssetDetail: React.FC<AssetDetailProps> = ({
  assetNumber,
  itemCode,
  itemName,
  quantity,
  unitPrice,
  totalPrice,
}) => {
  return (
    <AssetDetailContainer>
      <AssetDetailTable>
        <thead>
          <tr>
            <AssetDetailTableHeader>資産番号</AssetDetailTableHeader>
            <AssetDetailTableHeader>内容コード</AssetDetailTableHeader>
            <AssetDetailTableHeader>摘要内容</AssetDetailTableHeader>
            <AssetDetailTableHeader>数量</AssetDetailTableHeader>
            <AssetDetailTableHeader>単位</AssetDetailTableHeader>
            <AssetDetailTableHeader>金額</AssetDetailTableHeader>
          </tr>
        </thead>
        <tbody>
          <tr>
            <AssetDetailTableCell>{assetNumber}</AssetDetailTableCell>
            <AssetDetailTableCell>{itemCode}</AssetDetailTableCell>
            <AssetDetailTableCell>{itemName}</AssetDetailTableCell>
            <AssetDetailTableCell>{quantity}</AssetDetailTableCell>
            <AssetDetailTableCell>{unitPrice}</AssetDetailTableCell>
            <AssetDetailTableCell>{totalPrice}</AssetDetailTableCell>
          </tr>
        </tbody>
      </AssetDetailTable>
    </AssetDetailContainer>
  );
};

// サンプルデータ
const sampleData: AssetDetailProps = {
  assetNumber: '1',
  itemCode: '000001',
  itemName: '携帯コンクリート透り',
  quantity: 30.000,
  unitPrice: 100,
  totalPrice: 3000000,
};

// 使用例
const AssetDetailExample: React.FC = () => {
  return (
    <div>
      <h2>資産明細</h2>
      <AssetDetail {...sampleData} />
    </div>
  );
};

export default AssetDetailExample;