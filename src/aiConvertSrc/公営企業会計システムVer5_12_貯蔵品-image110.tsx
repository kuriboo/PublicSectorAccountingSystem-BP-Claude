import React from 'react';
import styled from '@emotion/styled';

type Product = {
  code: string;
  name: string;
  price: number;
  unit: string;
};

type ProductTableProps = {
  products: Product[];
};

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;

  th, td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: left;
  }

  th {
    background-color: #f0f0f0;
    font-weight: bold;
  }
`;

const ProductTable: React.FC<ProductTableProps> = ({ products }) => {
  return (
    <Table>
      <thead>
        <tr>
          <th>品名コード</th>
          <th>品名</th>
          <th>単価</th>
          <th>単位</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr key={product.code}>
            <td>{product.code}</td>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td>{product.unit}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

// サンプルデータ
const sampleProducts: Product[] = [
  { code: '0000100001', name: 'DIP(A1)精密管', price: 75, unit: 'φ' },
  { code: '0000100002', name: 'DIP(A1)精密管', price: 100, unit: 'φ' },
  { code: '0000100003', name: 'DIP(A1)精密管', price: 150, unit: 'φ' },
  { code: '0000100004', name: 'DIP(A1)精密管', price: 200, unit: 'φ' },
  { code: '0000100005', name: 'DIP(A1)精密管', price: 250, unit: 'φ' },
];

const App: React.FC = () => {
  return (
    <div>
      <h1>商品価格一覧表</h1>
      <ProductTable products={sampleProducts} />
    </div>
  );
};

export default App;