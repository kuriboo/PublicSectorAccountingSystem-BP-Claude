import React from 'react';
import styled from 'styled-components';

// 型定義
type Transaction = {
  date: string;
  name: string;
  amount: number;
  description: string;
};

type Props = {
  transactions?: Transaction[];
  kessaiAmount?: number;
  meigiAmount?: number;
  nengo?: string;
  year?: number;
  month?: number;
  day?: number;
  dueDate?: string;
};

// スタイル定義
const Container = styled.div`
  font-family: Arial, sans-serif;
  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const HeaderItem = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
  &:last-child {
    margin-right: 0;
  }
  @media (max-width: 600px) {
    margin-right: 0;
    margin-bottom: 5px;
  }
`;

const HeaderLabel = styled.div`
  font-weight: bold;
  margin-right: 5px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHeader = styled.th`
  text-align: left;
  padding: 5px;
  border-bottom: 1px solid #ccc;
  white-space: nowrap;
`;

const TableCell = styled.td`
  padding: 5px;
  border-bottom: 1px solid #ccc;
`;

const NumberCell = styled(TableCell)`
  text-align: right;
`;

// コンポーネント定義
const BankStatement: React.FC<Props> = ({ 
  transactions = [],
  kessaiAmount = 0,
  meigiAmount = 0,
  nengo = '',
  year = 0,
  month = 0,
  day = 0,
  dueDate = '',
}) => {
  const totalAmount = transactions.reduce((sum, t: { amount: number }) => sum + t.amount, 0); // 型を明示的に指定

  return (
    <Container>
      <Header>
        <HeaderItem>
          <HeaderLabel>平成29 年度</HeaderLabel>
        </HeaderItem>
        <HeaderItem>
          <HeaderLabel>処理日</HeaderLabel>
          {year}年{month}月{day}日 {nengo}
        </HeaderItem>
        <HeaderItem>
          <HeaderLabel>決済額</HeaderLabel>
          {kessaiAmount.toLocaleString()}
        </HeaderItem>
        <HeaderItem>
          <HeaderLabel>明細金額</HeaderLabel>
          {meigiAmount.toLocaleString()}
        </HeaderItem>
      </Header>

      <Table>
        <thead>
          <tr>
            <TableHeader>処理日</TableHeader>
            <TableHeader>決定番号</TableHeader>
            <TableHeader>支払種別</TableHeader>
            <TableHeader>決定額</TableHeader>
            <TableHeader>摘要</TableHeader>
          </tr>
        </thead>
        <tbody>
          {transactions.map((t, i) => (
            <tr key={i}>
              <TableCell>{(t as { date: string }).date}</TableCell>
              <NumberCell>{(t as { name: string }).name}</NumberCell>
              <TableCell>{(t as { description: string }).description}</TableCell>
              <NumberCell>{(t as { amount: number }).amount.toLocaleString()}</NumberCell>
              <TableCell>{(t as { description: string }).description}</TableCell>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

// サンプルデータ
const sampleData = {
  transactions: [
    { date: '29/06/17', name: '97', amount: 10000, description: '東電(料金振替)' },
    { date: '29/06/17', name: '98 一般(料担部)', amount: 25000, description: '融資額(料金)' },
    { date: '29/06/17', name: '99 一般(料担部)', amount: 431000, description: '3納台連携 給与支給の口座振' },
    { date: '29/06/17', name: '100 一般(料担部)', amount: 1000, description: '3納台連携 給与支給の口座振' },
    { date: '29/06/17', name: '101 資金前渡(料担)', amount: 19000, description: '交通費' },
    { date: '29/06/17', name: '102 資金前渡(料担)', amount: 45079, description: '事務用/消耗品' },
    { date: '29/06/17', name: '108 BS', amount: 10000, description: '水道料金基本検針入による返納' },
    { date: '29/06/17', name: '19 一般(料担部)', amount: 431000, description: '3納台連携 給与控除の口座振' },
    { date: '29/06/25', name: '20 BS', amount: 65000, description: '3納台連携 給与控除の口座振' },
  ],
  kessaiAmount: 0,
  meigiAmount: 999999999999,
  nengo: '平成29年6月17日',
  year: 29, 
  month: 6,
  day: 17,
  dueDate: '日以降',
};

// 使用例
const App: React.FC = () => {
  return (
    <div>
      <h1>決定番号検索（仕訳科目）</h1>
      <BankStatement {...sampleData} />
    </div>
  );
};

export default App;