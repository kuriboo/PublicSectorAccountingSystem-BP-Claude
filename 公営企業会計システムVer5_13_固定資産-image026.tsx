import React from 'react';
import styled from '@emotion/styled';

// 型定義
interface InvoiceItem {
  id: number;
  item: string;
  unitPrice: number;
  quantity: number;
  taxRate: number;
  amount: number;
  tax: number;
}

interface InvoiceProps {
  invoiceNumber: string;
  issueDate: string;
  store: string;
  total: number;
  items: InvoiceItem[];
  subtotal: number;
  memo: string;
  taxRate: number;
  tax: number;
}

// スタイル定義
const InvoiceWrapper = styled.div`
  background-color: #fff;
  padding: 20px;
  border: 1px solid #ccc;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  box-sizing: border-box;

  @media (max-width: 600px) {
    padding: 10px;
  }
`;

const InvoiceHeader = styled.div`
  margin-bottom: 20px;

  > div {
    margin-bottom: 10px;
  }
`;

const InvoiceTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;

  th, td {
    padding: 10px;
    border: 1px solid #ccc;
    text-align: left;
  }

  th {
    background-color: #f0f0f0;
  }
`;

const InvoiceFooter = styled.div`
  text-align: right;

  > div {
    margin-bottom: 10px;
  }
`;

// コンポーネント定義
const Invoice: React.FC<InvoiceProps> = ({
  invoiceNumber,
  issueDate,
  store,
  total,
  items,
  subtotal,
  memo,
  taxRate,
  tax,
}) => {
  return (
    <InvoiceWrapper>
      <InvoiceHeader>
        <div>請求番号: {invoiceNumber}</div>
        <div>発行日付: {issueDate}</div>
        <div>店舗名: {store}</div>
        <div>請求額: {total.toLocaleString()}円</div>
      </InvoiceHeader>
      
      <InvoiceTable>
        <thead>
          <tr>
            <th>行番号</th>
            <th>商品名</th>
            <th>単価</th>
            <th>数量</th>
            <th>税率</th>
            <th>小計</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>{item.item}</td>
              <td>{item.unitPrice.toLocaleString()}円</td>
              <td>{item.quantity}</td>
              <td>{item.taxRate}%</td>
              <td>{item.amount.toLocaleString()}円</td>
            </tr>
          ))}
        </tbody>
      </InvoiceTable>
      
      {memo && <div>備考: {memo}</div>}
      
      <InvoiceFooter>
        <div>小計: {subtotal.toLocaleString()}円</div>
        <div>
          消費税({taxRate}%): {tax.toLocaleString()}円
        </div>
        <div>合計金額: {total.toLocaleString()}円</div>
      </InvoiceFooter>
    </InvoiceWrapper>
  );
};

// サンプルデータ
const sampleData: InvoiceProps = {
  invoiceNumber: '41012800',
  issueDate: '2022年8月1日',
  store: '行政地区 301号店',
  total: 2000000,
  subtotal: 2000000,
  tax: 200000, 
  taxRate: 10,
  memo: '備考サンプル',
  items: [
    {
      id: 1,
      item: '商品',
      unitPrice: 1000000,
      quantity: 1,
      taxRate: 10,
      amount: 1000000,
      tax: 100000,
    },
  ],
};

// 使用例
const InvoiceSample: React.FC = () => {
  return <Invoice {...sampleData} />;
};

export default InvoiceSample;