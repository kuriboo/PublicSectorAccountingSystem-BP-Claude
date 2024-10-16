import React from 'react';
import styled from 'styled-components';

// 支出決定情報の型定義
type PaymentInfo = {
  executionDate: string;
  paymentMethod: string;
  bankCode: string;
  bankName: string;
  amount: number;
  taxAmount: number;
  totalAmount: number;
};

// 支出明細の型定義
type PaymentDetail = {
  name: string;
  date: string;
  reason: string;
  tax: string;
  amount: number;
  taxAmount: number;
  totalAmount: number;
};

// コンポーネントのプロパティの型定義
type PaymentApprovalProps = {
  paymentNumber: string;
  paymentDate: string;
  department: string;
  paymentInfo: PaymentInfo;
  paymentDetails: PaymentDetail[];
};

// スタイル定義
const Container = styled.div`
  font-family: sans-serif;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const Label = styled.div`
  font-weight: bold;
`;

const Value = styled.div``;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;

  th, td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: left;
  }

  th {
    background-color: #f2f2f2;
  }
`;

const Button = styled.button`
  display: block;
  width: 100%;
  padding: 8px;
  font-size: 1rem;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 20px;
`;

// 支出決定確認画面コンポーネント
const PaymentApproval: React.FC<PaymentApprovalProps> = ({
  paymentNumber,
  paymentDate,
  department,
  paymentInfo,
  paymentDetails,
}) => {
  // レスポンシブデザイン用のスタイル
  const isMobile = window.innerWidth <= 600;
  const rowDirection = isMobile ? 'column' : 'row';

  return (
    <Container>
      <Title>支出決定決議書確認画面</Title>
      <Row style={{ flexDirection: rowDirection }}>
        <Label>支出決定</Label>
        <Value>{paymentNumber || '未設定'}</Value>
      </Row>
      <Row style={{ flexDirection: rowDirection }}>
        <Label>支払日</Label>
        <Value>{paymentDate || '未設定'}</Value>
      </Row>
      <Row style={{ flexDirection: rowDirection }}>
        <Label>支払方法</Label>
        <Value>{department || '未設定'}</Value>
      </Row>
      {paymentInfo && (
        <>
          <Label>支払決定情報</Label>
          <Row style={{ flexDirection: rowDirection }}>
            <Label>預金種別</Label>
            <Value>{paymentInfo.paymentMethod || '未設定'}</Value>
          </Row>
          <Row style={{ flexDirection: rowDirection }}>
            <Label>銀行コード</Label>
            <Value>{paymentInfo.bankCode || '未設定'}</Value>
          </Row>
          <Row style={{ flexDirection: rowDirection }}>
            <Label>銀行名</Label>
            <Value>{paymentInfo.bankName || '未設定'}</Value>
          </Row>
          <Row style={{ flexDirection: rowDirection }}>
            <Label>支店コード</Label>
            <Value>{paymentInfo.executionDate || '未設定'}</Value>
          </Row>
          <Row style={{ flexDirection: rowDirection }}>
            <Label>決定額</Label>
            <Value>{paymentInfo.amount.toLocaleString() || 0}</Value>
          </Row>
          <Row style={{ flexDirection: rowDirection }}>
            <Label>本体額</Label>
            <Value>{paymentInfo.taxAmount.toLocaleString() || 0}</Value>
          </Row>
          <Row style={{ flexDirection: rowDirection }}>
            <Label>消費税額</Label>
            <Value>{paymentInfo.totalAmount.toLocaleString() || 0}</Value>
          </Row>
        </>
      )}
      {paymentDetails && paymentDetails.length > 0 && (
        <>
          <Table>
            <thead>
              <tr>
                <th>支出節</th>
                <th>支出細節</th>
                <th>支出明細</th>
                <th>税</th>
                <th>決定額</th>
                <th>消費税額</th>
                <th>税抜金額</th>
              </tr>
            </thead>
            <tbody>
              {paymentDetails.map((detail, index) => (
                <tr key={index}>
                  <td>{detail.date || ''}</td>
                  <td>{detail.name || ''}</td>
                  <td>{detail.reason || ''}</td>
                  <td>{detail.tax || ''}</td>
                  <td>{detail.amount.toLocaleString() || 0}</td>
                  <td>{detail.taxAmount.toLocaleString() || 0}</td>
                  <td>{detail.totalAmount.toLocaleString() || 0}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </>
      )}
      <Button>キャンセル</Button>
    </Container>
  );
};

// サンプルデータ
const sampleData: PaymentApprovalProps = {
  paymentNumber: 'H29 年度',
  paymentDate: '平成29年7月25日',
  department: '口座振込',
  paymentInfo: {
    executionDate: '0000000001',
    paymentMethod: 'みずほ銀行',
    bankCode: '111111',
    bankName: '東京営業部',
    amount: 451000,
    taxAmount: 451000,
    totalAmount: 0,
  },
  paymentDetails: [
    {
      name: '原油・ガス代',
      date: '第1回',
      reason: '第1回',
      tax: '別途分計',
      amount: 100000,
      taxAmount: 0,
      totalAmount: 100000,
    },
    {
      name: '原油・ガス代',
      date: '第2回',
      reason: '第2回',
      tax: '別途分計',
      amount: 100000,
      taxAmount: 0,
      totalAmount: 100000,
    },
    {
      name: '原油・ガス代',
      date: '第3回',
      reason: '第3回',
      tax: '別途分計',
      amount: 200000,
      taxAmount: 0,
      totalAmount: 200000,
    },
    {
      name: '原油・ガス代',
      date: '第4回',
      reason: '第4回',
      tax: '別途分計',
      amount: 100000,
      taxAmount: 0,
      totalAmount: 100000,
    },
    {
      name: '原油・ガス代',
      date: '第5回',
      reason: '第5回',
      tax: '別途分計',
      amount: 120000,
      taxAmount: 0,
      totalAmount: 120000,
    },
  ],
};

// 表示用コンポーネント
const App: React.FC = () => {
  return <PaymentApproval {...sampleData} />;
};

export default App;