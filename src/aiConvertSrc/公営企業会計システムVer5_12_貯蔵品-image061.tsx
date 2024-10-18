// ProductReceiptComponent.tsx
import React from 'react';
import styled from '@emotion/styled';

// 型定義
interface ProductReceiptProps {
  productCode: string;
  productName: string;
  unitPrice: number;
  quantity: number;
  amount: number;
  tax: number;
}

// スタイリング
const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;

  th, td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: center;
  }

  th {
    background-color: #f0f0f0;
    font-weight: bold;
  }

  @media (max-width: 600px) {
    font-size: 12px;
  }
`;

// コンポーネント
const ProductReceiptComponent: React.FC<ProductReceiptProps> = ({
  productCode,
  productName,
  unitPrice,
  quantity,
  amount,
  tax,
}) => {
  return (
    <Table>
      <thead>
        <tr>
          <th>品番</th>
          <th>品名</th>
          <th>単価</th>
          <th>数量</th>
          <th>金額</th>
          <th>税率</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{productCode || '-'}</td>
          <td>{productName || '-'}</td>
          <td>{unitPrice > 0 ? unitPrice.toLocaleString() : '0'}</td>
          <td>{quantity > 0 ? quantity.toLocaleString() : '0'}</td>
          <td>{amount > 0 ? amount.toLocaleString() : '0'}</td>
          <td>{tax}%</td>
        </tr>
      </tbody>
    </Table>
  );
};

// コンポーネント使用例
const SampleProductReceipt = () => {
  return (
    <div>
      <h2>商品別入出庫明細表</h2>
      <ProductReceiptComponent
        productCode="000090001"
        productName="〇〇〇商品A"
        unitPrice={200}
        quantity={75}
        amount={0}
        tax={10}
      />
    </div>
  );
};

export default ProductReceiptComponent;