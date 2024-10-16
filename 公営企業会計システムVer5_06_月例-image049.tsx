import React from 'react';
import styled from '@emotion/styled';

type LoanSummaryProps = {
  date: string;
  balance: number;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background-color: #f0f0f0;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  @media (max-width: 480px) {
    padding: 1rem;
  }
`;

const Title = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #333;

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

const DateText = styled.p`
  font-size: 1rem;
  color: #666;
  margin-bottom: 0.5rem;

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

const BalanceText = styled.p`
  font-size: 2rem;
  font-weight: bold;
  color: #333;

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

const LoanSummary: React.FC<LoanSummaryProps> = ({ date, balance }) => {
  // 例外処理: dateが空の場合は現在の日付を表示
  const displayDate = date ? date : new Date().toLocaleDateString();

  return (
    <Container>
      <Title>月次貸借対照表集計</Title>
      <DateText>集計年月：{displayDate}まで</DateText>
      {/* 例外処理: balanceが0以下の場合は0を表示 */}
      <BalanceText>￥{balance > 0 ? balance.toLocaleString() : '0'}</BalanceText>
    </Container>
  );
};

export default LoanSummary;

// 使用例
const App: React.FC = () => {
  const sampleData: LoanSummaryProps = {
    date: '平成30年04月',
    balance: 1234567,
  };

  return (
    <div>
      <LoanSummary {...sampleData} />
    </div>
  );
};