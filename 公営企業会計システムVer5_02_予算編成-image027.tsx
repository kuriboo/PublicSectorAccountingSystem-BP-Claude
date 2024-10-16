import React from 'react';
import styled from '@emotion/styled';

type InvoiceItem = {
  id: string;
  name: string;
  price: number;
  taxType: string;
};

type InvoiceProps = {
  companyName: string;
  invoiceCenter: string;
  invoiceDate: string;
  invoiceNumber: string;
  totalAmount: number;
  tax: number;
  items: InvoiceItem[];
};

const InvoiceWrapper = styled.div`
  font-family: Arial, sans-serif;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 600px) {
    padding: 10px;
  }
`;

const InvoiceHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const InvoiceTitle = styled.h1`
  font-size: 24px;
  margin: 0;
`;

const InvoiceInfo = styled.div`
  text-align: right;

  @media (max-width: 600px) {
    text-align: left;
    margin-top: 10px;
  }
`;

const InvoiceTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
`;

const InvoiceTableHeader = styled.th`
  text-align: left;
  padding: 10px;
  background-color: #f0f0f0;
`;

const InvoiceTableCell = styled.td`
  padding: 10px;
  border-bottom: 1px solid #e0e0e0;
`;

const InvoiceSummary = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: bold;
`;

const Invoice: React.FC<InvoiceProps> = ({
  companyName,
  invoiceCenter,
  invoiceDate,
  invoiceNumber,
  totalAmount,
  tax,
  items,
}) => {
  return (
    <InvoiceWrapper>
      <InvoiceHeader>
        <InvoiceTitle>{companyName}御中</InvoiceTitle>
        <InvoiceInfo>
          <div>請求日: {invoiceDate}</div>
          <div>請求番号: {invoiceNumber}</div>
        </InvoiceInfo>
      </InvoiceHeader>
      <InvoiceTable>
        <thead>
          <tr>
            <InvoiceTableHeader>品名</InvoiceTableHeader>
            <InvoiceTableHeader>金額</InvoiceTableHeader>
            <InvoiceTableHeader>税</InvoiceTableHeader>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <InvoiceTableCell>{item.name}</InvoiceTableCell>
              <InvoiceTableCell>{item.price.toLocaleString()}円</InvoiceTableCell>
              <InvoiceTableCell>{item.taxType}</InvoiceTableCell>
            </tr>
          ))}
        </tbody>
      </InvoiceTable>
      <InvoiceSummary>
        <div>合計金額: {totalAmount.toLocaleString()}円</div>
        <div>消費税額: {tax.toLocaleString()}円</div>
      </InvoiceSummary>
      <div>{invoiceCenter}</div>
    </InvoiceWrapper>
  );
};

// サンプルデータを使用した使用例
const sampleData: InvoiceProps = {
  companyName: '株式会社サンプル',
  invoiceCenter: '請求書発行センター',
  invoiceDate: '2023年8月25日',
  invoiceNumber: '001',
  totalAmount: 188640,
  tax: 8640,
  items: [
    { id: '1', name: '廃棄物処理電子マニフェスト利用手数料', price: 86400, taxType: '課税' },
    { id: '2', name: '水道GL洗浄端材管理費用', price: 54000, taxType: '課税' },
    { id: '3', name: 'レイト検定手数料', price: 1000, taxType: '課税' },
    { id: '4', name: '危険物取扱者(乙4)試験専用振込手数料', price: 120, taxType: '課税' },
  ],
};

export default function InvoiceSample() {
  return <Invoice {...sampleData} />;
}