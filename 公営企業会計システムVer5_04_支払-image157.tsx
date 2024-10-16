以下は、画像を元にしたNext.js + TypeScriptのコンポーネントです。

import React from 'react';
import styled from 'styled-components';

interface InvoiceDetailsProps {
  invoiceDate?: string;
  dueDate?: string;
  paymentDate?: string;
  subtotal: number;
  discount: number;
  total: number;
  paymentMethod?: string;
  note?: string;
}

const InvoiceDetails: React.FC<InvoiceDetailsProps> = ({
  invoiceDate = '',
  dueDate = '',
  paymentDate = '',
  subtotal,
  discount,
  total,
  paymentMethod = '',
  note = '',
}) => {
  return (
    <InvoiceDetailsWrapper>
      <InvoiceDates>
        <div>請求日付: {invoiceDate}</div>
        <div>支払期限: {dueDate}</div>
        <div>お支払日: {paymentDate}</div>
      </InvoiceDates>
      
      <InvoiceAmounts>
        <div>小計: ¥{subtotal.toLocaleString()}</div>
        <div>値引: ¥{discount.toLocaleString()}</div>
        <div>合計金額: ¥{total.toLocaleString()}</div>
      </InvoiceAmounts>

      <OtherDetails>
        <div>お支払方法: {paymentMethod}</div>
        <div>備考: {note}</div>
      </OtherDetails>
    </InvoiceDetailsWrapper>
  );
};

const InvoiceDetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
  border: 1px solid #ccc;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const InvoiceDates = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const InvoiceAmounts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const OtherDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

// サンプルデータを用いた使用例
const SampleInvoice = () => {
  const invoiceData: InvoiceDetailsProps = {
    invoiceDate: '令和5年12月20日',
    dueDate: '令和5年12月20日',
    paymentDate: '令和5年12月20日',
    subtotal: 440000,
    discount: 40000,
    total: 400000,
    paymentMethod: '振込',
    note: '明細の通り',
  };

  return <InvoiceDetails {...invoiceData} />;
};

export default InvoiceDetails;