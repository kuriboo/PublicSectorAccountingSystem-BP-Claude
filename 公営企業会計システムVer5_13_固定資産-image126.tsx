import React from 'react';
import styled from 'styled-components';

// 資産管理明細の型定義
type AssetManagementDetailType = {
  executionDate: string;
  productCode: string;
  productName: string;
  unitPrice: number;
  managementFee: number;
  quantity: number;
  amount: number;
};

// 資産管理明細のコンポーネント
const AssetManagementDetail: React.FC<AssetManagementDetailType> = ({
  executionDate,
  productCode,
  productName,
  unitPrice,
  managementFee,
  quantity,
  amount,
}) => {
  // 値が入っていない場合は'-'を表示
  const formatValue = (value: number | string) => {
    return value ? value : '-';
  };

  return (
    <tr>
      <Td>{executionDate}</Td>
      <Td>{productCode}</Td>
      <Td>{productName}</Td>
      <Td>{formatValue(unitPrice)}</Td>
      <Td>{formatValue(managementFee)}</Td>
      <Td>{formatValue(quantity)}</Td>
      <Td>{formatValue(amount)}</Td>
    </tr>
  );
};

// スタイリング
const Td = styled.td`
  padding: 8px;
  border: 1px solid #ccc;
  text-align: center;

  @media screen and (max-width: 600px) {
    padding: 4px;
    font-size: 12px;
  }
`;

// 資産管理明細のリストコンポーネント
const AssetManagementDetailList: React.FC<{ details: AssetManagementDetailType[] }> = ({ details }) => {
  return (
    <Table>
      <thead>
        <tr>
          <Th>執行年月日</Th>
          <Th>商品コード</Th>
          <Th>商品名</Th>
          <Th>単価</Th>
          <Th>管理報酬合計</Th>
          <Th>数量</Th>
          <Th>金額合計</Th>
        </tr>
      </thead>
      <tbody>
        {details.map((detail, index) => (
          <AssetManagementDetail key={index} {...detail} />
        ))}
      </tbody>
    </Table>
  );
};

// スタイリング  
const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 16px;
`;

const Th = styled.th`
  padding: 8px;
  border: 1px solid #ccc;
  background-color: #f0f0f0;
  font-weight: bold;
  text-align: center;

  @media screen and (max-width: 600px) {
    padding: 4px;
    font-size: 12px;
  }  
`;

// サンプルデータ
const sampleData: AssetManagementDetailType[] = [
  {
    executionDate: '2017-08-12',
    productCode: '000001',
    productName: 'DIF(A1)請求書',
    unitPrice: 75,
    managementFee: 4.00,
    quantity: 1,
    amount: 7000000,
  },
];

// 使用例
const App: React.FC = () => {
  return (
    <div>
      <h1>資産管理明細一覧</h1>
      <AssetManagementDetailList details={sampleData} />
    </div>
  );
};

export default App;