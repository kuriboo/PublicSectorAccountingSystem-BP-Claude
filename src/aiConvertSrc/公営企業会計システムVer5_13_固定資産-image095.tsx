import React from 'react';
import styled from '@emotion/styled';

type InvoiceData = {
  date: string;
  number: string;
  price: number;
  deliveryMethod: string;
  paymentMethod: string;
  paymentDue: string;
  paymentDate: string;
  taxRate: number;
  taxAmount: number;
  totalAmount: number;
  depositAmount: number;
  bankAccountNumber: string;
  bankName: string;
  bankBranchCode: string;
  bankAccountType: string;
  effectiveDate: string;
  expirationDate: string;
  termsCode: string;
  termsName: string;
  managementNumber: string;
  managementName: string;
};

type InvoiceProps = {
  data: InvoiceData;
};

const InvoiceWrapper = styled.div`
  font-family: Arial, sans-serif;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;

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

const InvoiceTitle = styled.h2`
  margin: 0;
  font-size: 24px;

  @media (max-width: 600px) {
    margin-bottom: 10px;
  }
`;

const InvoiceNumber = styled.p`
  margin: 0;
  font-size: 18px;
`;

const InvoiceDetails = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const InvoiceDetailItem = styled.div`
  display: flex;
  flex-direction: column;
`;

const InvoiceDetailLabel = styled.span`
  font-weight: bold;
  margin-bottom: 5px;
`;

const InvoiceDetailValue = styled.span``;

const InvoicePaymentDetails = styled.div`
  margin-top: 40px;
`;

const InvoicePaymentTitle = styled.h3`
  margin: 0 0 10px;
  font-size: 20px;
`;

const InvoicePaymentTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const InvoicePaymentTableHeader = styled.th`
  text-align: left;
  padding: 8px;
  border-bottom: 1px solid #ddd;
`;

const InvoicePaymentTableCell = styled.td`
  padding: 8px;
  border-bottom: 1px solid #ddd;
`;

const Invoice: React.FC<InvoiceProps> = ({ data }) => {
  // Render invoice details
  return (
    <InvoiceWrapper>
      <InvoiceHeader>
        <InvoiceTitle>発注書</InvoiceTitle>
        <InvoiceNumber>発注番号: {data.number}</InvoiceNumber>
      </InvoiceHeader>
      <InvoiceDetails>
        <InvoiceDetailItem>
          <InvoiceDetailLabel>発行年月日</InvoiceDetailLabel>
          <InvoiceDetailValue>{data.date}</InvoiceDetailValue>
        </InvoiceDetailItem>
        <InvoiceDetailItem>
          <InvoiceDetailLabel>前回引当金</InvoiceDetailLabel>
          <InvoiceDetailValue>{data.depositAmount}</InvoiceDetailValue>
        </InvoiceDetailItem>
        <InvoiceDetailItem>
          <InvoiceDetailLabel>発注金額</InvoiceDetailLabel>
          <InvoiceDetailValue>{data.totalAmount}</InvoiceDetailValue>
        </InvoiceDetailItem>
        <InvoiceDetailItem>
          <InvoiceDetailLabel>管理グループ</InvoiceDetailLabel>
          <InvoiceDetailValue>{data.managementName}</InvoiceDetailValue>
        </InvoiceDetailItem>
      </InvoiceDetails>
      <InvoicePaymentDetails>
        <InvoicePaymentTitle>管理明細</InvoicePaymentTitle>
        <InvoicePaymentTable>
          <thead>
            <tr>
              <InvoicePaymentTableHeader>管理コード</InvoicePaymentTableHeader>
              <InvoicePaymentTableHeader>規格コード</InvoicePaymentTableHeader>
              <InvoicePaymentTableHeader>規格名称</InvoicePaymentTableHeader>
              <InvoicePaymentTableHeader>取得価格</InvoicePaymentTableHeader>
              <InvoicePaymentTableHeader>取得数量</InvoicePaymentTableHeader>
              <InvoicePaymentTableHeader>単価</InvoicePaymentTableHeader>
              <InvoicePaymentTableHeader>取得金額</InvoicePaymentTableHeader>
            </tr>
          </thead>
          <tbody>
            <tr>
              <InvoicePaymentTableCell>000001</InvoicePaymentTableCell>
              <InvoicePaymentTableCell>000001</InvoicePaymentTableCell>
              <InvoicePaymentTableCell>DIF(AT)規格管理</InvoicePaymentTableCell>
              <InvoicePaymentTableCell>0.75</InvoicePaymentTableCell>
              <InvoicePaymentTableCell>2000 本</InvoicePaymentTableCell>
              <InvoicePaymentTableCell>500000</InvoicePaymentTableCell>
              <InvoicePaymentTableCell></InvoicePaymentTableCell>
            </tr>
          </tbody>
        </InvoicePaymentTable>
      </InvoicePaymentDetails>
    </InvoiceWrapper>
  );
};

// Example usage
const App: React.FC = () => {
  const invoiceData: InvoiceData = {
    date: '2023年06月01日',
    number: '8002020',
    price: 5000.0,
    deliveryMethod: '宅配',  
    paymentMethod: '現金払い',
    paymentDue: '2023年06月30日',
    paymentDate: '2023年06月15日',
    taxRate: 0.1,
    taxAmount: 500,
    totalAmount: 5500,
    depositAmount: 500000,
    bankAccountNumber: '0010169',
    bankName: '湯浅郵便局',
    bankBranchCode: '001',
    bankAccountType: '湯浅郵便局',
    effectiveDate: '2023年06月01日',
    expirationDate: '',
    termsCode: '250',
    termsName: '現金払い',
    managementNumber: '040',
    managementName: '定額法',
  };

  return <Invoice data={invoiceData} />;
};

export default App;