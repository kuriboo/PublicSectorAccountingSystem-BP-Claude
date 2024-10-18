import React from 'react';
import styled from 'styled-components';

// 請求明細の型定義
type InvoiceDetail = {
  date: string;
  number: number;
  unitPrice: number;
  currentReadValue: number;
  previousReadValue: number;
};

// 請求明細コンポーネントのプロパティの型定義
type InvoiceDetailsProps = {
  details: InvoiceDetail[];
  currentInvoice: number;
  taxRate: number;
};

// 請求明細テーブルのスタイル定義
const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;

  th, td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: center;
  }

  th {
    background-color: #f2f2f2;
  }

  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

// 請求金額のスタイル定義 
const InvoiceAmount = styled.div`
  text-align: right;
  margin-bottom: 10px;
`;

// 請求明細コンポーネント
const InvoiceDetails: React.FC<InvoiceDetailsProps> = ({ details, currentInvoice, taxRate }) => {
  // 請求明細が空の場合の処理
  if (!details || details.length === 0) {
    return <div>No invoice details available.</div>;
  }

  // 税抜金額の計算
  const subtotal = currentInvoice / (1 + taxRate / 100);
  const tax = currentInvoice - subtotal;

  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>入庫日</th>
            <th>数量</th>
            <th>単価</th>
            <th>当初入庫年度</th>
            <th>当初入庫年度</th>
          </tr>
        </thead>
        <tbody>
          {details.map((detail, index) => (
            <tr key={index}>
              <td>{detail.date}</td>
              <td>{detail.number}</td>
              <td>{detail.unitPrice}</td>
              <td>{detail.currentReadValue}</td>
              <td>{detail.previousReadValue}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <InvoiceAmount>
        小計: {subtotal.toFixed(0)} 円<br />
        消費税: {tax.toFixed(0)} 円<br />
        ご請求金額: {currentInvoice.toFixed(0)} 円
      </InvoiceAmount>
    </div>
  );
};

// サンプルデータを用いた使用例
const App: React.FC = () => {
  const invoiceDetails = [
    { date: '2017/09/15', number: 31.00, unitPrice: 100.00, currentReadValue: 100, previousReadValue: 60 },
    { date: '2017/09/15', number: 10.00, unitPrice: 100.00, currentReadValue: 100, previousReadValue: 62 },
  ];

  return (
    <div>
      <h1>請求明細書</h1>
      <InvoiceDetails details={invoiceDetails} currentInvoice={10000} taxRate={8} />
    </div>
  );
};

export default App;