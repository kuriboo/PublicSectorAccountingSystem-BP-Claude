// ProductSalesTable.tsx
import React from 'react';
import styled from '@emotion/styled';

type ProductSalesData = {
  id: number;
  productName: string;
  currentMonthSales: number;
  previousMonthSales: number;
  taxRate: number;
  consumptionTax: number;
};

type ProductSalesTableProps = {
  data: ProductSalesData[];
};

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;

  th, td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: right;
  }

  th {
    background-color: #f0f0f0;
    font-weight: bold;
  }

  td:first-of-type,
  th:first-of-type {
    text-align: left;
  }

  @media (max-width: 600px) {
    font-size: 12px;

    th, td {
      padding: 6px;
    }
  }
`;

const ProductSalesTable: React.FC<ProductSalesTableProps> = ({ data }) => {
  if (!data || data.length === 0) {
    return <p>No data available.</p>;
  }

  return (
    <Table>
      <thead>
        <tr>
          <th>明細</th>
          <th>税率</th>
          <th>消費税額</th>
          <th>消費税込</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <td>
              {item.productName}
              <br />
              (作業用消耗品)
            </td>
            <td>{item.taxRate}%</td>
            <td>{item.consumptionTax.toLocaleString()}</td>
            <td>{item.currentMonthSales.toLocaleString()}</td>
          </tr>
        ))}
        <tr>
          <td>
            事務用消耗品
            <br />
            (作業用消耗品)
          </td>
          <td>{data[0].taxRate}%</td>
          <td>{data[1].consumptionTax.toLocaleString()}</td>
          <td>{data[1].currentMonthSales.toLocaleString()}</td>
        </tr>
        <tr>
          <th>課税</th>
          <th>-</th>
          <th>{(data[0].consumptionTax + data[1].consumptionTax).toLocaleString()}</th>
          <th>{(data[0].currentMonthSales + data[1].currentMonthSales).toLocaleString()}</th>
        </tr>
      </tbody>
    </Table>
  );
};

// Usage example
const sampleData: ProductSalesData[] = [
  {
    id: 1,
    productName: '事務用消耗品',
    currentMonthSales: 23866,
    previousMonthSales: 1766,
    taxRate: 10,
    consumptionTax: 1960,
  },
  {
    id: 2,
    productName: '事務用消耗品',
    currentMonthSales: 201960,
    previousMonthSales: 14960,
    taxRate: 10,
    consumptionTax: 14960,
  },
];

const App: React.FC = () => {
  return (
    <div>
      <h1>Product Sales Table</h1>
      <ProductSalesTable data={sampleData} />
    </div>
  );
};

export default App;