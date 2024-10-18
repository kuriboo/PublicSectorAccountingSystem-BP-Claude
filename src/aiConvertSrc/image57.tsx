import React from 'react';
import styled from 'styled-components';

// 商品データの型定義
type Product = {
  id: number;
  name: string;
  unitPrice: number;
  sellPrice: number;
  cost: number;
  margin: number;
  marginRate: number;
  quantity: number;
  totalPrice: number;
};

// ProductTableコンポーネントのプロパティ型定義
type ProductTableProps = {
  products: Product[];
};

// テーブルのスタイル定義
const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  
  th, td {
    padding: 8px;
    text-align: right;
    border-bottom: 1px solid #ddd;
  }

  th {
    background-color: #f2f2f2;
  }
`;

// ProductTableコンポーネント
const ProductTable: React.FC<ProductTableProps> = ({ products }) => {
  // 商品データが空の場合の処理
  if (!products || products.length === 0) {
    return <p>No product data available.</p>;
  }

  return (
    <Table>
      <thead>
        <tr>
          <th>商品名</th>
          <th>単価</th>
          <th>売価</th>
          <th>原価</th>
          <th>利益</th>
          <th>利益率</th>
          <th>数量</th>
          <th>金額</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr key={product.id}>
            <td>{product.name}</td>
            <td>{product.unitPrice.toLocaleString()}</td>
            <td>{product.sellPrice.toLocaleString()}</td>
            <td>{product.cost.toLocaleString()}</td>
            <td>{product.margin.toLocaleString()}</td>
            <td>{product.marginRate.toFixed(1)}%</td>
            <td>{product.quantity.toLocaleString()}</td>
            <td>{product.totalPrice.toLocaleString()}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

// サンプルデータ
const sampleProducts: Product[] = [
  {
    id: 550,
    name: '支出',
    unitPrice: 3,
    sellPrice: 3,
    cost: 3,
    margin: 0,
    marginRate: 0,
    quantity: 1137468,
    totalPrice: 21300,
  },
  // ... 他のサンプルデータ
];

// 使用例
const App: React.FC = () => {
  return (
    <div>
      <h1>商品一覧</h1>
      <ProductTable products={sampleProducts} />
    </div>
  );
};

export default App;