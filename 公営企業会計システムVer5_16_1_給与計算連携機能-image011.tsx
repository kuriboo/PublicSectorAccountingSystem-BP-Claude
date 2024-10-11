import React from 'react';
import styled from 'styled-components';

interface PaymentDetailProps {
  paymentDate: string;
  paymentNumber: number;
  paymentMethod: string;
  bank: string;
  bankAccount: string;
  payee: string;
  paymentAmount: number;
  tax: number;
  consumptionTax: number;
  paymentDetails: PaymentDetail[];
}

interface PaymentDetail {
  date: string;
  detail: string;
  taxExcludedAmount: number;
  taxRate: string;
  tax: number;
  consumptionTax: number;
  remarks: string;
}

const PaymentDetailComponent: React.FC<PaymentDetailProps> = ({
  paymentDate,
  paymentNumber,
  paymentMethod,
  bank,
  bankAccount,
  payee,
  paymentAmount,
  tax,
  consumptionTax,
  paymentDetails,
}) => {
  return (
    <Container>
      <Header>
        <Title>支払決定</Title>
        <PaymentNumber>番号 {paymentNumber}</PaymentNumber>
      </Header>

      <InfoGrid>
        <InfoLabel>支払日</InfoLabel>
        <InfoValue>{paymentDate}</InfoValue>
        
        <InfoLabel>支払方法</InfoLabel>
        <InfoValue>{paymentMethod} {bankAccount ? `${bank} ${bankAccount}` : null}</InfoValue>
      </InfoGrid>

      <AmountGrid>
        <AmountLabel>預金種別</AmountLabel>
        <AmountValue>{paymentMethod}</AmountValue>

        <AmountLabel>銀行名</AmountLabel>
        <AmountValue>{bank}</AmountValue>

        <AmountLabel>支店名</AmountLabel>
        <AmountValue>{bankAccount}</AmountValue>

        <AmountLabel>名義人</AmountLabel>
        <AmountValue>{payee}</AmountValue>

        <AmountLabel>決定額</AmountLabel>
        <AmountValue>{paymentAmount.toLocaleString()}</AmountValue>

        <AmountLabel>本体額</AmountLabel>
        <AmountValue>{(paymentAmount - tax).toLocaleString()}</AmountValue>

        <AmountLabel>消費税額</AmountLabel>
        <AmountValue>{consumptionTax.toLocaleString()}</AmountValue>
      </AmountGrid>
      
      <Table>
        <TableHeader>
          <TableHeaderCell>支出節</TableHeaderCell>
          <TableHeaderCell>支出細節</TableHeaderCell>
          <TableHeaderCell>支出明細</TableHeaderCell>
          <TableHeaderCell>税</TableHeaderCell>
          <TableHeaderCell>決定額</TableHeaderCell>
          <TableHeaderCell>消費税額</TableHeaderCell>
          <TableHeaderCell>摘要金額</TableHeaderCell>
        </TableHeader>
        <TableBody>
          {paymentDetails.map((detail, index) => (
            <TableRow key={index}>
              <TableCell>{detail.date}</TableCell>
              <TableCell>{detail.detail}</TableCell>
              <TableCell>{detail.taxExcludedAmount.toLocaleString()}</TableCell>
              <TableCell>{detail.taxRate}</TableCell>
              <TableCell>{detail.taxExcludedAmount.toLocaleString()}</TableCell>
              <TableCell>{detail.consumptionTax.toLocaleString()}</TableCell>
              <TableCell>{detail.remarks}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
};

// Styling
const Container = styled.div`
  font-family: sans-serif;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between; 
  align-items: baseline;
  margin-bottom: 20px;
`;

const Title = styled.h2`
  font-size: 24px;
  margin: 0;
`;

const PaymentNumber = styled.div`
  font-size: 18px;
`;

const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: 100px 1fr;
  gap: 10px;
  margin-bottom: 20px;
`;

const InfoLabel = styled.div`
  font-weight: bold;
`;

const InfoValue = styled.div`
  
`;

const AmountGrid = styled.div`
  display: grid;
  grid-template-columns: 100px 1fr;
  gap: 10px;
  margin-bottom: 20px;
`;

const AmountLabel = styled.div`
  font-weight: bold;
  text-align: left;
`;

const AmountValue = styled.div`
  text-align: right;
`;  

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHeader = styled.thead`
  background-color: #f0f0f0;
`;

const TableHeaderCell = styled.th`
  padding: 10px;
  text-align: left; 
  border: 1px solid #ccc;
`;

const TableBody = styled.tbody`

`;

const TableRow = styled.tr`

`;

const TableCell = styled.td`
  padding: 10px;
  border: 1px solid #ccc;
`;

// Usage example
const App: React.FC = () => {
  const paymentDetailData: PaymentDetailProps = {
    paymentDate: "平成19年09月03日",
    paymentNumber: 258,  
    paymentMethod: "口座振込",
    bank: "みずほ銀行",
    bankAccount: "本店",
    payee: "カギヨウビ",
    paymentAmount: 318000,
    tax: 318000,
    consumptionTax: 0,
    paymentDetails: [
      {
        date: "平成19年09月09日",
        detail: "原・保護手当",
        taxExcludedAmount: 196000,
        taxRate: "不課税",        
        tax: 196000,
        consumptionTax: 0,
        remarks: "196,000"
      },
      {
        date: "平成19年09月09日",        
        detail: "原・住居手当",
        taxExcludedAmount: 35000,
        taxRate: "不課税",
        tax: 35000,
        consumptionTax: 0,
        remarks: "35,000"
      },
      {
        date: "平成19年09月09日",
        detail: "原・通勤手当",  
        taxExcludedAmount: 88000,
        taxRate: "課税",
        tax: 88000,
        consumptionTax: 0,
        remarks: "88,000"   
      }
    ]
  };

  return (
    <PaymentDetailComponent {...paymentDetailData} />
  );  
};

export default App;