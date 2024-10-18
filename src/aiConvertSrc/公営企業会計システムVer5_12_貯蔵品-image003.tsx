import React from 'react';
import styled from '@emotion/styled';

interface ProductInfo {
  productNumber: string;
  productName: string;
  specification: string;
  quantity: number;
  unitPrice: number;
  price: number;
}

interface ProductTransactionProps {
  productInfo: ProductInfo;
  transactionHistory: {
    date: string;
    numberOfUnits: number;
    unitPrice: number;
    price: number;
  }[];
}

const ProductTransactionWrapper = styled.div`
  font-family: Arial, sans-serif;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;
`;

const ProductInfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const ProductInfoItem = styled.div`
  flex: 1;
  padding: 5px;
  box-sizing: border-box;
`;

const TransactionHistoryTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: right;

  th, td {
    padding: 5px;
    border: 1px solid #ccc;
  }

  th {
    background-color: #f0f0f0;
  }
`;

const ProductTransaction: React.FC<ProductTransactionProps> = ({
  productInfo,
  transactionHistory,
}) => {
  const {
    productNumber,
    productName,
    specification,
    quantity,
    unitPrice,
    price,
  } = productInfo;

  return (
    <ProductTransactionWrapper>
      <ProductInfoWrapper>
        <ProductInfoItem>
          <div>品番</div>
          <div>{productNumber || 'N/A'}</div>
        </ProductInfoItem>
        <ProductInfoItem>
          <div>品名</div>
          <div>{productName || 'N/A'}</div>
        </ProductInfoItem>
        <ProductInfoItem>
          <div>規格</div>
          <div>{specification || 'N/A'}</div>
        </ProductInfoItem>
        <ProductInfoItem>
          <div>数量</div>
          <div>{quantity || 0}</div>
        </ProductInfoItem>
        <ProductInfoItem>
          <div>単位</div>
          <div>本</div>
        </ProductInfoItem>
        <ProductInfoItem>
          <div>単価</div>
          <div>{unitPrice || 0}</div>
        </ProductInfoItem>
        <ProductInfoItem>
          <div>金額</div>
          <div>{price || 0}</div>
        </ProductInfoItem>
      </ProductInfoWrapper>
      <TransactionHistoryTable>
        <thead>
          <tr>
            <th>入庫日</th>
            <th>数量</th>
            <th>単価</th>
            <th>金額</th>
          </tr>
        </thead>
        <tbody>
          {transactionHistory.map(({ date, numberOfUnits, unitPrice, price }) => (
            <tr key={date}>
              <td>{date}</td>
              <td>{numberOfUnits}</td>
              <td>{unitPrice}</td>
              <td>{price}</td>
            </tr>
          ))}
        </tbody>
      </TransactionHistoryTable>
    </ProductTransactionWrapper>
  );
};

// Usage example
const sampleData: ProductTransactionProps = {
  productInfo: {
    productNumber: '0000898000',
    productName: 'DIP(A1)精鋳管',
    specification: 'φ75',
    quantity: 1000,
    unitPrice: 1890,
    price: 132300,
  },
  transactionHistory: [
    { date: '2017/09/15', numberOfUnits: 200, unitPrice: 1000, price: 1000 },
    { date: '2017/09/15', numberOfUnits: 1000, unitPrice: 1000, price: 1000 },
    { date: '2017/09/15', numberOfUnits: 3100, unitPrice: 1000, price: 3100 },
  ],
};

const App: React.FC = () => <ProductTransaction {...sampleData} />;

export default App;