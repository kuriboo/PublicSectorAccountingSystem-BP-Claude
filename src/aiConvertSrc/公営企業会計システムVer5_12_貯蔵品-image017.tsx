import React from 'react';
import styled from '@emotion/styled';

type InvoiceData = {
  date: string;
  amount: number;
  unitPrice: number;
  totalPrice: number;
};

type InvoiceProps = {
  invoiceNumber: string;
  invoiceName: string;
  price: number;
  personCount: number;
  unitName: string;
  startDate: string;
  settlementDiscount: number;
  invoiceData: InvoiceData[];
};

const InvoiceContainer = styled.div`
  font-family: Arial, sans-serif;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;

  @media (max-width: 600px) {
    padding: 10px;
  }
`;

const InvoiceHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const InvoiceDetails = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const InvoiceDetail = styled.div`
  flex: 1;
  min-width: 200px;
`;

const InvoiceTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;

  th, td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: right;
  }

  th {
    background-color: #f0f0f0;
  }
`;

const Invoice: React.FC<InvoiceProps> = ({
  invoiceNumber,
  invoiceName,
  price,
  personCount,
  unitName,
  startDate,
  settlementDiscount,
  invoiceData,
}) => {
  return (
    <InvoiceContainer>
      <InvoiceHeader>
        <div>
          <div>番号: {invoiceNumber}</div>
          <div>品名: {invoiceName}</div>
        </div>
        <div>
          <div>単価: {price.toLocaleString()}</div>
          <div>単価の時は、通江元見積 (消費)に掲載の単価を入力してください。</div>
        </div>
      </InvoiceHeader>
      <InvoiceDetails>
        <InvoiceDetail>人車数: {personCount || '-'}</InvoiceDetail>
        <InvoiceDetail>単位: {unitName || '-'}</InvoiceDetail>
        <InvoiceDetail>発注残数: {settlementDiscount.toFixed(2) || '-'}</InvoiceDetail>
        <InvoiceDetail>入庫予定日: {startDate || '-'}</InvoiceDetail>
      </InvoiceDetails>
      <InvoiceTable>
        <thead>
          <tr>
            <th>入庫日</th>
            <th>数量</th>
            <th>単価</th>
            <th>金額</th>
          </tr>
        </thead>
        <tbody>
          {invoiceData.map(({ date, amount, unitPrice, totalPrice }, index) => (
            <tr key={index}>
              <td>{date}</td>
              <td>{amount.toLocaleString()}</td>
              <td>{unitPrice.toLocaleString()}</td>
              <td>{totalPrice.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </InvoiceTable>
    </InvoiceContainer>
  );
};

// 使用例
const invoiceData: InvoiceData[] = [
  { date: '2017/09/01', amount: 10.00, unitPrice: 2500.00, totalPrice: 25000 },
  { date: '2017/07/30', amount: 4.00, unitPrice: 12345.67, totalPrice: 49382.72 },  
  { date: '2017/09/14', amount: 2.00, unitPrice: 2500.00, totalPrice: 5000 },
];

const InvoiceExample: React.FC = () => {
  return (
    <Invoice
      invoiceNumber="701015"
      invoiceName="滝圧槽"
      price={2500.00}
      personCount={3}
      unitName="m"
      startDate="平成29年09月15日"
      settlementDiscount={3.00}
      invoiceData={invoiceData}
    />
  );
};

export default InvoiceExample;