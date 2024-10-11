import React from 'react';
import styled from '@emotion/styled';

type Product = {
  code: string;
  name: string;
  specification: string;
  unit: string;
};

type Props = {
  products: Product[];
};

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  
  th, td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: left;
  }

  th {
    background-color: #f2f2f2;
  }

  @media (max-width: 600px) {
    th, td {
      display: block;
    }

    tr {
      border-bottom: 2px solid #ccc;
    }

    td {
      border: none;
      position: relative;
      padding-left: 50%;

      &:before {
        position: absolute;
        left: 6px;
        content: attr(data-label);
        font-weight: bold;
      }
    }
  }
`;

const ProductTable: React.FC<Props> = ({ products }) => {
  return (
    <Table>
      <thead>
        <tr>
          <th>単価コード</th>
          <th>単価規格名称</th>
          <th>単価規格</th>
          <th>単価規格名称</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product, index) => (
          <tr key={index}>
            <td data-label="単価コード">{product.code}</td>
            <td data-label="単価規格名称">{product.name}</td>
            <td data-label="単価規格">{product.specification}</td>
            <td data-label="単価規格名称">{product.unit}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

// Usage example
const sampleProducts: Product[] = [
  { code: '000000010', name: '種水器 新品', specification: 'φ13mm', unit: '個' },
  { code: '000000020', name: '種氷器 パーター', specification: 'φ13mm', unit: '個' },
  { code: '000000080', name: '種氷器 改造', specification: 'φ13mm', unit: '個' },
  { code: '000000045', name: '種氷器 違規式 新品', specification: 'φ13mm', unit: '個' },
];

const App: React.FC = () => {
  return (
    <div>
      <h1>単価品目一覧</h1>
      <ProductTable products={sampleProducts} />
    </div>
  );
};

export default App;