import React from 'react';
import styled from '@emotion/styled';

type FinancialSummaryProps = {
  data: {
    date: string;
    credit: number;
    debit: number;
    balance: number;
  }[];
};

const FinancialSummary: React.FC<FinancialSummaryProps> = ({ data }) => {
  // 財務データの合計を計算
  const totalCredit = data.reduce((sum, item) => sum + item.credit, 0);
  const totalDebit = data.reduce((sum, item) => sum + item.debit, 0);
  const totalBalance = totalCredit - totalDebit;

  return (
    <Container>
      <Header>
        <HeaderItem>日付</HeaderItem>
        <HeaderItem>借方金額</HeaderItem>
        <HeaderItem>貸方金額</HeaderItem>
        <HeaderItem>差引</HeaderItem>
      </Header>
      {data.map((item, index) => (
        <Row key={index}>
          <RowItem>{item.date}</RowItem>
          <RowItem>{item.debit.toLocaleString()}</RowItem>
          <RowItem>{item.credit.toLocaleString()}</RowItem>
          <RowItem>{(item.credit - item.debit).toLocaleString()}</RowItem>
        </Row>
      ))}
      <TotalRow>
        <TotalItem>合計</TotalItem>
        <TotalItem>{totalDebit.toLocaleString()}</TotalItem>
        <TotalItem>{totalCredit.toLocaleString()}</TotalItem>
        <TotalItem>{totalBalance.toLocaleString()}</TotalItem>
      </TotalRow>
      <SummaryRow>
        <SummaryLabel>財務コード</SummaryLabel>
        <SummaryValue>自己資源</SummaryValue>
        <SummaryLabel>借方金額</SummaryLabel>
        <SummaryValue>{totalDebit.toLocaleString()}</SummaryValue>
      </SummaryRow>
    </Container>
  );
};

// スタイリング
const Container = styled.div`
  font-family: Arial, sans-serif;
  background-color: #f0f0f0;
  padding: 20px;
`;

const Header = styled.div`
  display: flex;
  font-weight: bold;
  border-bottom: 1px solid #ccc;
  padding-bottom: 10px;
  margin-bottom: 10px;
`;

const HeaderItem = styled.div`
  flex: 1;
`;

const Row = styled.div`
  display: flex;
  border-bottom: 1px solid #ccc;
  padding: 5px 0;
`;

const RowItem = styled.div`
  flex: 1;
`;

const TotalRow = styled.div`
  display: flex;
  font-weight: bold;
  padding: 10px 0;
  border-top: 1px solid #ccc;
  margin-top: 10px;
`;

const TotalItem = styled.div`
  flex: 1;
`;

const SummaryRow = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`;

const SummaryLabel = styled.div`
  margin-right: 10px;
`;

const SummaryValue = styled.div`
  font-weight: bold;
  margin-right: 20px;
`;

// サンプルデータを使用した表示用コンポーネント
const App: React.FC = () => {
  const sampleData = [
    { date: '自己資源', credit: 11607136, debit: 0, balance: 11607136 },
    { date: '売掛金', credit: 0, debit: 6804, balance: 6804 },
  ];

  return (
    <div>
      <h1>財務サマリー</h1>
      <FinancialSummary data={sampleData} />
    </div>
  );
};

export default App;