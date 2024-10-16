import React from 'react';
import styled from '@emotion/styled';

// 型定義
type Transaction = {
  date: string;
  description: string;
  amount: number;
  balance: number;
};

type TransactionHistoryProps = {
  transactions: Transaction[];
  startDate?: string;
  endDate?: string;
  startAmount?: number;
  endAmount?: number;
};

// スタイル定義
const Container = styled.div`
  font-family: sans-serif;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const DateRange = styled.div`
  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
  }
`;

const AmountRange = styled.div`
  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  th, td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: left;
  }

  th {
    background-color: #f2f2f2;
  }

  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

// メインコンポーネント
const TransactionHistory: React.FC<TransactionHistoryProps> = ({
  transactions,
  startDate = '',
  endDate = '',
  startAmount = 0,
  endAmount = 999999999999,
}) => {
  // 日付と金額の範囲でフィルタリング
  const filteredTransactions = transactions.filter(t => 
    t.date >= startDate && 
    t.date <= endDate &&
    t.amount >= startAmount &&
    t.amount <= endAmount
  );

  return (
    <Container>
      <Header>
        <DateRange>
          対象期間：{startDate} 〜 {endDate}
        </DateRange>
        <AmountRange>
          金額範囲：{startAmount.toLocaleString()} 〜 {endAmount.toLocaleString()}
        </AmountRange>
      </Header>

      <Table>
        <thead>
          <tr>
            <th>処理日</th>
            <th>決済番号</th>
            <th>支払便別</th>
            <th>決済額</th>
            <th>摘要</th>
          </tr>
        </thead>
        <tbody>
          {filteredTransactions.map(t => (
            <tr key={t.date + t.description}>
              <td>{t.date}</td>
              <td>{t.description.split(' ')[0]}</td>
              <td>{t.description.split('（')[1]?.split('）')[0]}</td>
              <td>{t.amount.toLocaleString()}</td>
              <td>{t.description.split('）')[1]}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

// サンプルデータと使用例
const sampleTransactions: Transaction[] = [
  { date: '23/06/17', description: '97 工事（草掛施）', amount: 10000, balance: 100000 },
  { date: '23/06/17', description: '98 一般（亀田郡）', amount: 25000, balance: 90000 },
  { date: '23/06/17', description: '99 一般（亀田郡）', amount: 43100, balance: 65000 },
  { date: '23/06/17', description: '100 一般（亀田郡）', amount: 1000, balance: 21900 },
  { date: '23/06/17', description: '101 資金前渡（亀田郡）', amount: 19800, balance: 20900 },
  { date: '23/06/17', description: '102 資金前渡（亀田郡）', amount: 45079, balance: 1100 },
  { date: '23/06/17', description: '110 BS', amount: 10000, balance: -43979 },
  { date: '30/06/25', description: '19 一般（亀田郡）', amount: 43100, balance: -53979 },
  { date: '30/06/25', description: '20 BS', amount: 65000, balance: -97079 },
];

const TransactionHistoryExample = () => (
  <TransactionHistory 
    transactions={sampleTransactions}
    startDate="23/06/17"
    endDate="30/06/25"
    startAmount={1000}
    endAmount={100000}
  />
);

export default TransactionHistoryExample;