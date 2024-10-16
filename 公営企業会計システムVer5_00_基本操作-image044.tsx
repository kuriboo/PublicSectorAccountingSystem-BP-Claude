import React from 'react';
import styled from 'styled-components';

// 型定義
type InvoiceType = {
  invoiceNo: string;
  date: string;
  items: {
    name: string;
    price: number;
    quantity: number;
    unit: string;
    amount: number;
    tax: number;
    taxAmount: number;
    remarks: string;
  }[];
  total: number;
};

// スタイル定義
const InvoiceWrapper = styled.div`
  width: 100%;
  overflow-x: auto;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  
  th, td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: center;
  }

  th {
    background-color: #f2f2f2;
  }
`;

const TotalRow = styled.tr`
  font-weight: bold;
`;

// コンポーネント定義
const Invoice: React.FC<InvoiceType> = ({ invoiceNo, date, items, total }) => {
  return (
    <InvoiceWrapper>
      <h2>支出負担行為伺書（物品）</h2>
      <p>整理番号: {invoiceNo}</p>
      <p>負担処理日: {date}</p>
      
      <Table>
        <thead>
          <tr>
            <th>物品名</th>
            <th>規格</th>
            <th>単位</th>
            <th>予定数量</th>
            <th>予定単価</th>
            <th>金額</th>
            <th>消費税</th>
            <th>課税対象（工事）</th>
            <th>備考</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td>{item.name || '-'}</td>
              <td>{item.unit || '-'}</td>
              <td>{item.quantity || '-'}</td>
              <td>{item.price ? `¥${item.price.toLocaleString()}` : '-'}</td>
              <td>{item.amount ? `¥${item.amount.toLocaleString()}` : '-'}</td> 
              <td>{item.taxAmount ? `¥${item.taxAmount.toLocaleString()}` : '-'}</td>
              <td>{item.tax ? `${item.tax}%` : '-'}</td>
              <td>{item.remarks || '-'}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <TotalRow>
            <td colSpan={4}></td>
            <td colSpan={2}>合計: {total ? `¥${total.toLocaleString()}` : '-'}</td>
          </TotalRow>
        </tfoot>
      </Table>
    </InvoiceWrapper>
  );
};

// サンプルデータ
const sampleData: InvoiceType = {
  invoiceNo: '29-000177-00',
  date: '平成29年8月1日',  
  items: [
    {
      name: '上水管理替部長',
      price: 100,
      quantity: 1,
      unit: '式',  
      amount: 100,
      tax: 8,
      taxAmount: 8,
      remarks: '-'
    },
    {
      name: '上水長寿命化計画',
      price: 200,
      quantity: 2, 
      unit: '式',
      amount: 400,
      tax: 8,
      taxAmount: 32,
      remarks: '-'  
    }
  ],
  total: 540
};

// 使用例
const InvoiceSample = () => {
  return (
    <div>
      <h1>請求書サンプル</h1>
      <Invoice {...sampleData} />
    </div>
  );  
};

export default InvoiceSample;