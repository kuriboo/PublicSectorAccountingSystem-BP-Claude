import React from 'react';
import styled from '@emotion/styled';

type CompanyInfoProps = {
  companyName: string;
  registerNumber: string;
  address: string;
  phoneNumber: string;
  faxNumber: string;
  website: string;
};

type BillingInfoProps = {
  billingPeriodStart: string;
  billingPeriodEnd: string;
  paymentDueDate: string;
  accountHolder: string;
  accountNumber: string;
};

type InvoiceItemProps = {
  itemName: string;
  unitPrice: number;
  quantity: number;
  amount: number;
};

type InvoiceProps = {
  invoiceNumber: string;
  issueDate: string;
  paymentMethod: string;
  paymentDueDate: string;
  totalAmount: number;
  taxAmount: number;
  netAmount: number;
  companyInfo: CompanyInfoProps;
  billingInfo: BillingInfoProps;
  invoiceItems: InvoiceItemProps[];
};

const InvoiceContainer = styled.div`
  font-family: sans-serif;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
`;

const CompanyInfo = styled.div`
  margin-bottom: 20px;
`;

const BillingInfo = styled.div`
  margin-bottom: 20px;
`;

const InvoiceDetails = styled.div`
  margin-bottom: 20px;
`;

const InvoiceItemsTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
  
  th, td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: left;
  }
`;

const InvoiceSummary = styled.div`
  text-align: right;
`;

const Invoice: React.FC<InvoiceProps> = ({
  invoiceNumber,
  issueDate,
  paymentMethod, 
  paymentDueDate,
  totalAmount,
  taxAmount,
  netAmount,
  companyInfo,
  billingInfo,
  invoiceItems,
}) => {
  return (
    <InvoiceContainer>
      <CompanyInfo>
        <h2>{companyInfo.companyName}</h2>
        <p>登録番号: {companyInfo.registerNumber}</p>
        <p>住所: {companyInfo.address}</p>
        <p>電話番号: {companyInfo.phoneNumber}</p>
        <p>FAX番号: {companyInfo.faxNumber}</p>
        <p>ウェブサイト: {companyInfo.website}</p>
      </CompanyInfo>
      
      <BillingInfo>
        <p>請求期間: {billingInfo.billingPeriodStart} - {billingInfo.billingPeriodEnd}</p>
        <p>支払期日: {billingInfo.paymentDueDate}</p>
        <p>口座名義: {billingInfo.accountHolder}</p>
        <p>口座番号: {billingInfo.accountNumber}</p>
      </BillingInfo>

      <InvoiceDetails>
        <p>請求書番号: {invoiceNumber}</p>
        <p>発行日: {issueDate}</p>
        <p>決済方法: {paymentMethod}</p>
        <p>支払期限: {paymentDueDate}</p>
      </InvoiceDetails>

      <InvoiceItemsTable>
        <thead>
          <tr>
            <th>項目</th>
            <th>単価</th>
            <th>数量</th>
            <th>金額</th>
          </tr>
        </thead>
        <tbody>
          {invoiceItems.map((item, index) => (
            <tr key={index}>
              <td>{item.itemName}</td>
              <td>{item.unitPrice}</td>
              <td>{item.quantity}</td>
              <td>{item.amount}</td>
            </tr>
          ))}
        </tbody>
      </InvoiceItemsTable>

      <InvoiceSummary>
        <p>合計金額: {totalAmount.toLocaleString()}円</p>
        <p>消費税: {taxAmount.toLocaleString()}円</p>
        <p>差引金額: {netAmount.toLocaleString()}円</p>
      </InvoiceSummary>
    </InvoiceContainer>
  );
};

// Sample data for displaying the Invoice component
const sampleData: InvoiceProps = {
  invoiceNumber: 'T9000123456789',
  issueDate: '令和5年10月30日',
  paymentMethod: '振込',
  paymentDueDate: '令和5年11月30日',
  totalAmount: 22000,
  taxAmount: 2000,
  netAmount: 24000,
  companyInfo: {
    companyName: '株式会社 研修',
    registerNumber: '登録番号:T9012345678',
    address: '東京都港区芝1-2-3',
    phoneNumber: '03-1234-5678',
    faxNumber: '03-1234-5679',
    website: 'https://www.example.com',
  },
  billingInfo: {
    billingPeriodStart: '令和5年10月30日',
    billingPeriodEnd: '令和5年10月30日',  
    paymentDueDate: '11/30',
    accountHolder: '資金前受金',
    accountNumber: '普通 1234567',
  },
  invoiceItems: [
    {
      itemName: '研修費',
      unitPrice: 22000,
      quantity: 1,
      amount: 22000,
    },
  ],
};

const App: React.FC = () => {
  return (
    <div>
      <h1>請求書サンプル</h1>
      <Invoice {...sampleData} />
    </div>
  );
};

export default App;