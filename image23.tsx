import React from 'react';
import styled from 'styled-components';

// Define types for the component props
type ReceiptProps = {
  date: string;
  documentNumber: string;
  items: {
    name: string;
    quantity: number;
    unitPrice: number;
    amount: number;
  }[];
  subtotal: number;
  tax: number;
  total: number;
};

// Define the main Receipt component
const Receipt: React.FC<ReceiptProps> = ({ date, documentNumber, items, subtotal, tax, total }) => (
  <ReceiptWrapper>
    <ReceiptHeader>
      <h2>振替伝票（単票）</h2>
      <div>
        <span>伝票№</span>
        <span>{documentNumber}</span>
      </div>
    </ReceiptHeader>
    <ReceiptContent>
      <ReceiptDate>
        <span>年月日</span>
        <span>{date}</span>
      </ReceiptDate>
      <ReceiptTable>
        <thead>
          <tr>
            <th>摘要</th>
            <th colSpan={2}>借方金額</th>
            <th colSpan={2}>貸方金額</th>
            <th>備考</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td colSpan={2}>{item.amount.toLocaleString()}</td>
              <td colSpan={2}></td>
              <td></td>
            </tr>
          ))}
          <tr>
            <td colSpan={3}>合計</td>
            <td colSpan={2}>{subtotal.toLocaleString()}</td>
            <td></td>
          </tr>
          <tr>
            <td colSpan={3}>消費税等</td>
            <td colSpan={2}>{tax.toLocaleString()}</td>
            <td></td>
          </tr>
          <tr>
            <td colSpan={3}>合計</td>
            <td colSpan={2}>{total.toLocaleString()}</td>
            <td></td>
          </tr>
        </tbody>
      </ReceiptTable>
    </ReceiptContent>
  </ReceiptWrapper>
);

// Define styled components for layout and styling
const ReceiptWrapper = styled.div`
  font-family: sans-serif;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const ReceiptHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const ReceiptContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const ReceiptDate = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 10px;

  span {
    margin-left: 10px;
  }
`;

const ReceiptTable = styled.table`
  width: 100%;
  border-collapse: collapse;

  th, td {
    padding: 10px;
    text-align: center;
    border: 1px solid #ccc;
  }

  th {
    background-color: #f0f0f0;
  }
`;

// Define a sample data object for the Receipt component
const sampleData: ReceiptProps = {
  date: '2023年4月7日',
  documentNumber: '27-000481',
  items: [
    { name: '普通預金', quantity: 1, unitPrice: 1000000, amount: 1000000 },
    { name: '売掛金', quantity: 1, unitPrice: 1000000, amount: 1000000 },
  ],
  subtotal: 2000000,
  tax: 200000,
  total: 2200000,
};

// Define a component that renders the Receipt with the sample data
const ReceiptExample: React.FC = () => <Receipt {...sampleData} />;

export default ReceiptExample;