import React from 'react';
import styled from '@emotion/styled';

type PaymentInfoProps = {
  date: string;
  paymentNumber: string;
  paymentAmount: number;
  tax: number;
  totalAmount: number;
  bankName: string;
  accountNumber: string;
  accountHolder: string;
  branch: string;
  paymentPurpose: string;
  paymentMethod: string;
};

const PaymentInfo: React.FC<PaymentInfoProps> = ({
  date,
  paymentNumber,
  paymentAmount,
  tax,
  totalAmount,
  bankName,
  accountNumber,
  accountHolder,
  branch,
  paymentPurpose,
  paymentMethod,
}) => {
  return (
    <Container>
      <Title>支払情報変更入力</Title>
      <Row>
        <Label>支払日</Label>
        <Value>{date || '-'}</Value>
      </Row>
      <Row>
        <Label>支払方法</Label>
        <Value>{paymentMethod || '-'}</Value>
      </Row>
      <Row>
        <Label>支払先</Label>
        <Value>{paymentNumber || '-'}</Value>
      </Row>
      <Row>
        <Label>実支払額計</Label>
        <Value>{paymentAmount || 0}</Value>
      </Row>
      <Row>
        <Label>消費税額</Label>
        <Value>{tax || 0}</Value>
      </Row>
      <Row>
        <Label>振込口座</Label>
        <AccountInfo>
          {bankName || '-'} {branch || '-'}
          <br />
          {accountNumber || '-'}
          <br />
          {accountHolder || '-'}
        </AccountInfo>
      </Row>
      <Row>
        <Label>支払予定額</Label>
        <Value>{totalAmount || 0}</Value>
      </Row>
      <Row>
        <Label>支払理由</Label>
        <Value>{paymentPurpose || '-'}</Value>
      </Row>
    </Container>
  );
};

// Sample data for preview
const sampleData: PaymentInfoProps = {
  date: '平成28年09月19日',
  paymentNumber: '0000000002',
  paymentAmount: 60000,
  tax: 4448,
  totalAmount: 60000,
  bankName: 'ぎょうせい銀行',
  accountNumber: '1234567',
  accountHolder: 'ギョウセイ',
  branch: '八重洲口支店',
  paymentPurpose: '備品購入費',
  paymentMethod: '口座振込',
};

const PreviewPaymentInfo: React.FC = () => {
  return <PaymentInfo {...sampleData} />;
};

// Styles
const Container = styled.div`
  font-family: sans-serif;
  padding: 16px;
  width: 100%;

  @media (min-width: 768px) {
    max-width: 600px;
    margin: 0 auto;
  }
`;

const Title = styled.h2`
  margin-bottom: 24px;
`;

const Row = styled.div`
  display: flex;
  margin-bottom: 8px;
`;

const Label = styled.div`
  width: 120px;
  font-weight: bold;
`;

const Value = styled.div`
  flex: 1;
`;

const AccountInfo = styled.div`
  flex: 1;
  line-height: 1.5;
`;

export default PaymentInfo;
export { PreviewPaymentInfo };