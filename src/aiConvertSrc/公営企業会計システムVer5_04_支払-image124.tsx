import React from 'react';
import styled from '@emotion/styled';

type PaymentSummaryProps = {
  deliveryDate: string;
  deliveryMethod: string;
  paymentMethod: string;
  receiver: string;
  phoneNumber: string;
  address: string;
  subtotal: number;
  shippingFee: number;
  totalAmount: number;
  paymentBreakdown: {
    date: string;
    time: string;
    paymentAmount: number;
    paymentMethod: string;
  }[];
};

const PaymentSummary: React.FC<PaymentSummaryProps> = ({
  deliveryDate,
  deliveryMethod,
  paymentMethod,
  receiver,
  phoneNumber,
  address,
  subtotal,
  shippingFee,
  totalAmount,
  paymentBreakdown,
}) => {
  return (
    <Container>
      <Header>支払決定</Header>
      <OrderInfo>
        <OrderInfoItem>
          <Label>支払日</Label>
          <Value>{deliveryDate}</Value>
        </OrderInfoItem>
        <OrderInfoItem>
          <Label>支払方法</Label>
          <Value>{deliveryMethod}</Value>
        </OrderInfoItem>
        <OrderInfoItem>
          <Label>支払先</Label>
          <Value>
            {paymentMethod}
            <PaymentMethodNumber>0000002390</PaymentMethodNumber>
          </Value>
        </OrderInfoItem>
      </OrderInfo>
      <ReceiverInfo>
        <ReceiverInfoItem>
          <Label>預金種別</Label>
          <Value>普通預金</Value>
        </ReceiverInfoItem>
        <ReceiverInfoItem>
          <Label>銀行名</Label>
          <Value>みずほ銀行</Value>
        </ReceiverInfoItem>
        <ReceiverInfoItem>
          <Label>支店名</Label>
          <Value>東京営業部</Value>
        </ReceiverInfoItem>
        <ReceiverInfoItem>
          <Label>口座番号</Label>
          <Value>111111</Value>
        </ReceiverInfoItem>
        <ReceiverInfoItem>
          <Label>名義人</Label>
          <Value>テストアサイギシンテ</Value>
        </ReceiverInfoItem>
      </ReceiverInfo>
      <AmountInfo>
        <AmountInfoItem>
          <Label>決定額</Label>
          <Value>¥{subtotal.toLocaleString()}</Value>
        </AmountInfoItem>
        <AmountInfoItem>
          <Label>本体額</Label>
          <Value>¥{subtotal.toLocaleString()}</Value>
        </AmountInfoItem>
        <AmountInfoItem>
          <Label>消費税額</Label>
          <Value>¥0</Value>
        </AmountInfoItem>
      </AmountInfo>
      <BreakdownTable>
        <TableHeader>
          <TableRow>
            <TableHeaderCell>支出節</TableHeaderCell>
            <TableHeaderCell>支出細節</TableHeaderCell>
            <TableHeaderCell>支出明細額<br/>(中間計)</TableHeaderCell>
            <TableHeaderCell>税</TableHeaderCell>
            <TableHeaderCell>決定額</TableHeaderCell>
            <TableHeaderCell>消費税額</TableHeaderCell>
            <TableHeaderCell>税抜金額</TableHeaderCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {paymentBreakdown.map((item, index) => (
            <TableRow key={index}>
              <TableCell>{item.date}</TableCell>
              <TableCell>{item.time}</TableCell>
              <TableCell>¥{item.paymentAmount.toLocaleString()}</TableCell>
              <TableCell>不課税</TableCell>
              <TableCell>¥{item.paymentAmount.toLocaleString()}</TableCell>
              <TableCell>¥0</TableCell>
              <TableCell>¥{item.paymentAmount.toLocaleString()}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </BreakdownTable>
    </Container>
  );
};

// Usage example
const SampleUsage: React.FC = () => {
  const sampleData: PaymentSummaryProps = {
    deliveryDate: '令和03年10月01日',
    deliveryMethod: '口座振込',
    paymentMethod: 'テスト一時値保者',
    receiver: '普通預金',
    phoneNumber: '111111',
    address: 'テストアサイギシンテ',
    subtotal: 17000,
    shippingFee: 0,
    totalAmount: 17000,
    paymentBreakdown: [
      {
        date: '費用01',
        time: '節01',
        paymentAmount: 17000,
        paymentMethod: '不課税',
      },
    ],
  };

  return <PaymentSummary {...sampleData} />;
};

// Styled components
const Container = styled.div`
  font-family: sans-serif;
  padding: 20px;
`;

const Header = styled.h2`
  margin-bottom: 20px;
`;

const OrderInfo = styled.div`
  margin-bottom: 20px;
`;

const OrderInfoItem = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

const Label = styled.div`
  width: 100px;
  font-weight: bold;
`;

const Value = styled.div`
  flex: 1;
`;

const PaymentMethodNumber = styled.span`
  margin-left: 10px;
`;

const ReceiverInfo = styled.div`
  margin-bottom: 20px;
`;

const ReceiverInfoItem = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

const AmountInfo = styled.div`
  margin-bottom: 20px;
`;

const AmountInfoItem = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

const BreakdownTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHeader = styled.thead`
  background-color: #f2f2f2;
`;

const TableHeaderCell = styled.th`
  padding: 10px;
  text-align: center;
  border: 1px solid #ddd;
`;

const TableBody = styled.tbody``;

const TableRow = styled.tr``;

const TableCell = styled.td`
  padding: 10px;
  text-align: center;
  border: 1px solid #ddd;
`;

export default SampleUsage;