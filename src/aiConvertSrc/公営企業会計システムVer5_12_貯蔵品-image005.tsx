import React from 'react';
import styled from '@emotion/styled';

type ProductInfoProps = {
  productNumber: string;
  productName: string;
  unitPrice: number;
  amount: number;
  totalPrice: number;
  updateDate: string;
};

type TransactionHistoryProps = {
  entries: {
    date: string;
    amount: number;
    unitPrice: number;
    price: number;
  }[];
};

const InfoTable = styled.table`
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
`;

const TransactionTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 16px;

  th, td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: left;
  }

  th {
    background-color: #f2f2f2;
  }
`;

const ProductInfo: React.FC<ProductInfoProps> = ({
  productNumber,
  productName,
  unitPrice,
  amount,
  totalPrice,
  updateDate,
}) => {
  return (
    <InfoTable>
      <tbody>
        <tr>
          <th>品番</th>
          <td>{productNumber}</td>
        </tr>
        <tr>
          <th>品名</th>
          <td>{productName}</td>
        </tr>
        <tr>
          <th>規格</th>
          <td>{amount} m</td>
        </tr>
        <tr>
          <th>単価</th>
          <td>{unitPrice.toLocaleString()} 円</td>
        </tr>
        <tr>
          <th>金額</th>
          <td>{totalPrice.toLocaleString()} 円</td>
        </tr>
      </tbody>
    </InfoTable>
  );
};

const TransactionHistory: React.FC<TransactionHistoryProps> = ({ entries }) => {
  return (
    <TransactionTable>
      <thead>
        <tr>
          <th>入庫日</th>
          <th>数量</th>
          <th>単価</th>
          <th>金額</th>
        </tr>
      </thead>
      <tbody>
        {entries.map((entry, index) => (
          <tr key={index}>
            <td>{entry.date}</td>
            <td>{entry.amount.toLocaleString()}</td>
            <td>{entry.unitPrice.toLocaleString()}</td>
            <td>{entry.price.toLocaleString()}</td>
          </tr>
        ))}
      </tbody>
    </TransactionTable>
  );
};

// Usage example
const sampleData = {
  productNumber: '0000701014',
  productName: '水管橋',
  unitPrice: 2500,
  amount: 1,
  totalPrice: 2500,
  updateDate: '2017/09/01',
  transactionHistory: [
    {
      date: '2017/09/01',
      amount: 10,
      unitPrice: 2500,
      price: 25000,
    },
    {
      date: '2017/07/30',
      amount: 1234567,
      unitPrice: 2500,
      price: 3086417500,
    },
    {
      date: '2017/07/31',
      amount: 1234567,
      unitPrice: 2500,
      price: 3086417500,
    },
  ],
};

const ProductInfoPage: React.FC = () => {
  return (
    <div>
      <h2>車上注入車両情報（移動平均）</h2>
      <ProductInfo
        productNumber={sampleData.productNumber}
        productName={sampleData.productName}
        unitPrice={sampleData.unitPrice}
        amount={sampleData.amount}
        totalPrice={sampleData.totalPrice}
        updateDate={sampleData.updateDate}
      />
      <TransactionHistory entries={sampleData.transactionHistory} />
    </div>
  );
};

export default ProductInfoPage;