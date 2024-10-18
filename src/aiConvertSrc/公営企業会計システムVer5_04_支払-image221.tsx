import React from 'react';
import styled from 'styled-components';

// 型定義
interface Transaction {
  date: string;
  time: string;
  summary: string;
  amount: number;
  memo: string;
}

interface TransactionHistoryProps {
  startDate: string;
  endDate: string;
  transactions: Transaction[];
}

// スタイル定義
const Container = styled.div`
  font-family: Arial, sans-serif;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const HeaderItem = styled.div`
  flex: 1;
  text-align: center;
  padding: 5px;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
`;

const Row = styled.div`
  display: flex;
  padding: 5px 0;
  border-bottom: 1px solid #ccc;

  &:last-child {
    border-bottom: none;
  }
`;

const RowItem = styled.div`
  flex: 1;
  padding: 0 5px;
  text-align: center;
  word-break: break-all;
`;

const Pager = styled.div`
  margin-top: 10px;
  text-align: right;
`;

const PagerButton = styled.button`
  margin-left: 5px;
`;

// コンポーネント定義
const TransactionHistory: React.FC<TransactionHistoryProps> = ({ startDate, endDate, transactions }) => {
  return (
    <Container>
      <Header>
        <HeaderItem>処理日</HeaderItem>
        <HeaderItem>摘要</HeaderItem>
        <HeaderItem>入金額</HeaderItem>
        <HeaderItem>摘要</HeaderItem>
      </Header>
      {transactions.map((tx, index) => (
        <Row key={index}>
          <RowItem>{tx.date}</RowItem>
          <RowItem>{tx.time}</RowItem>
          <RowItem>{tx.summary}</RowItem>
          <RowItem>{tx.amount.toLocaleString()}</RowItem>
          <RowItem>{tx.memo}</RowItem>
        </Row>
      ))}
      <Pager>
        <PagerButton>OK</PagerButton>
        <PagerButton>クリア</PagerButton>
        <PagerButton>キャンセル</PagerButton>
      </Pager>
    </Container>
  );
};

// サンプルデータ
const sampleTransactions: Transaction[] = [
  {
    date: '29/06/17',
    time: '146',
    summary: '工事',
    amount: 100000,
    memo: '内訳は手配書参照',
  },
  {
    date: '29/06/17',
    time: '147',
    summary: '決定入口',
    amount: 25000,
    memo: 'ペンキ代',
  },
  // ... サンプルデータ省略 ...
];

// 使用例
const TransactionHistoryExample: React.FC = () => {
  return (
    <TransactionHistory
      startDate="0000000"
      endDate="9999999"
      transactions={sampleTransactions}
    />
  );
};

export default TransactionHistoryExample;