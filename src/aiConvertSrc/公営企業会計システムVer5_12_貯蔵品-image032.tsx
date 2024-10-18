import React from 'react';
import styled from 'styled-components';

// Type definition for product data
type ProductData = {
  date: string;
  quantity: number;
  unitPrice: number;
  entry: number;
  balance: number;
  remarks: string;
}

// Prop types for ProductTable component
type ProductTableProps = {
  data: ProductData[];
}

// Styled components
const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;

  th, td {
    padding: 8px;
    text-align: center;
    border: 1px solid #ddd;
  }

  th {
    background-color: #f2f2f2;
  }

  @media (max-width: 600px) {
    font-size: 12px;
    
    th, td {
      padding: 6px;
    }
  }
`;

const ProductName = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const ProductDetails = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const ProductInfo = styled.div`
  display: flex;
  align-items: center;

  span {
    margin-right: 10px;
  }
`;

// ProductTable component
const ProductTable: React.FC<ProductTableProps> = ({ data }) => {
  // Check if data is provided
  if (!data || data.length === 0) {
    return <div>No data available</div>;
  }

  // Calculate total quantity and balance
  const totalQuantity = data.reduce((sum, item) => sum + item.quantity, 0);
  const totalBalance = data[data.length - 1].balance;

  return (
    <div>
      <ProductName>DIF(K:4)精錬管</ProductName>
      <ProductDetails>
        <ProductInfo>
          <span>品名</span>
          <span>φ100</span>
        </ProductInfo>
        <ProductInfo>
          <span>評価方法区分</span>
          <span>1 先入先出</span>
        </ProductInfo>
      </ProductDetails>
      <Table>
        <thead>
          <tr>
            <th>入庫日</th>
            <th>数量</th>
            <th>単価</th>
            <th>入庫年度</th>
            <th>入庫番号</th>
            <th>備考</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.date}</td>
              <td>{item.quantity}</td>
              <td>{item.unitPrice.toFixed(2)}</td>
              <td>{item.entry}</td>
              <td>{item.balance}</td>
              <td>{item.remarks}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <ProductDetails>
        <ProductInfo>
          <span>総数量</span>
          <span>{totalQuantity} 単位</span>
          <span>本</span>
        </ProductInfo>
        <ProductInfo>
          <span>単価</span>
          <span>{(totalBalance / totalQuantity).toFixed(2)}</span>
          <span>金額</span>
          <span>{totalBalance.toFixed(2)}</span>
          <span>仮出庫数</span>
          <span>1.00</span>
        </ProductInfo>
      </ProductDetails>
    </div>
  );
};

// Usage example
const sampleData: ProductData[] = [
  {
    date: '2017/06/01',
    quantity: 10.0,
    unitPrice: 2500.0,
    entry: 2017,
    balance: 17,
    remarks: '',
  },
  {
    date: '2017/07/31',
    quantity: 7.0,
    unitPrice: 2800.0,
    entry: 2017,
    balance: 47,
    remarks: '',
  },
];

const App: React.FC = () => {
  return (
    <div>
      <h1>Product Table Example</h1>
      <ProductTable data={sampleData} />
    </div>
  );
};

export default App;