import React from 'react';
import styled from 'styled-components';

// 請求書の型定義
interface Invoice {
  id: string;
  date: string;
  name: string;
  amount: number;
  tax: number;
  total: number;
}

// 請求書コンポーネントのプロパティ型定義
interface InvoiceProps {
  invoice: Invoice;
}

// 請求書コンポーネント
const InvoiceComponent: React.FC<InvoiceProps> = ({ invoice }) => {
  return (
    <InvoiceWrapper>
      <InvoiceHeader>
        {/* 請求書タイトル */}
        <InvoiceTitle>請求書</InvoiceTitle>
        {/* 請求書日付 */}
        <InvoiceDate>{invoice.date}</InvoiceDate>
      </InvoiceHeader>
      
      <InvoiceTable>
        <tbody>
          <InvoiceRow>
            {/* 請求先名 */}
            <InvoiceCell>{invoice.name}</InvoiceCell>
            {/* 請求金額 */}
            <InvoiceCell textAlign="right">{invoice.amount.toLocaleString()}</InvoiceCell>
          </InvoiceRow>
          <InvoiceRow>
            {/* 消費税 */}
            <InvoiceCell></InvoiceCell>
            <InvoiceCell textAlign="right">{invoice.tax.toLocaleString()}</InvoiceCell>
          </InvoiceRow>
          <InvoiceRow>
            {/* 合計 */}
            <InvoiceCell>合計</InvoiceCell>
            <InvoiceCell textAlign="right">{invoice.total.toLocaleString()}</InvoiceCell>
          </InvoiceRow>
        </tbody>
      </InvoiceTable>
    </InvoiceWrapper>
  );
};

// 請求書コンポーネントのスタイリング
const InvoiceWrapper = styled.div`
  font-family: sans-serif;
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
`;

const InvoiceTitle = styled.h2`
  font-size: 24px;
  margin: 0;
`;

const InvoiceDate = styled.p`
  margin: 0;
`;

const InvoiceTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const InvoiceRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

interface InvoiceCellProps {
  textAlign?: string;
}

const InvoiceCell = styled.td<InvoiceCellProps>`
  border: 1px solid #ddd;
  padding: 8px;
  text-align: ${(props) => props.textAlign || 'left'};
`;

// サンプルデータ
const sampleInvoice: Invoice = {
  id: '2135くんる3',
  date: '平成13年3月31日',
  name: '御中',
  amount: 65380, 
  tax: 5160,
  total: 403700,
};

// サンプルコンポーネント
const SampleInvoice: React.FC = () => {
  return (
    <div>
      <h1>請求書サンプル</h1>
      <InvoiceComponent invoice={sampleInvoice} />
    </div>
  );
};

export default SampleInvoice;