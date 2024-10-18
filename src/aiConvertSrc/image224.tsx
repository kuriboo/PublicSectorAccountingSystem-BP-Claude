import React from 'react';
import styled from 'styled-components';

// 型定義
type TransactionData = {
  date: string;
  type: string;
  amount: number;
  description: string;
};

type Props = {
  startDate: string;
  endDate: string;
  balance: number;
  depositAmount: number;
  withdrawalAmount: number;
  workingBankName: string;
  transactions: TransactionData[];
};

// スタイル定義
const Container = styled.div`
  font-family: Arial, sans-serif;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const HeaderItem = styled.div`
  margin-right: 20px;
  
  @media (max-width: 600px) {
    margin-right: 0;
    margin-bottom: 10px;
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
`;

const FormattedNumber = styled.span`
  font-family: monospace;
`;

// コンポーネント定義
const BankStatement: React.FC<Props> = ({
  startDate,
  endDate,
  balance,
  depositAmount,
  withdrawalAmount,
  workingBankName,
  transactions
}) => {
  return (
    <Container>
      <Header>
        <HeaderItem>
          期間: {startDate} ~ {endDate}
        </HeaderItem>
        <HeaderItem>
          残高: <FormattedNumber>{balance.toLocaleString()}</FormattedNumber>円
        </HeaderItem>
      </Header>
      
      <div>
        入金額: <FormattedNumber>{depositAmount.toLocaleString()}</FormattedNumber>円
      </div>
      <div>
        出金額: <FormattedNumber>{withdrawalAmount.toLocaleString()}</FormattedNumber>円
      </div>
      
      <div>摘要: {workingBankName}</div>
      
      <Table>
        <thead>
          <tr>
            <th>処理日</th>
            <th>摘要</th>
            <th>支払種別</th>
            <th>摘要詳細</th>
            <th>摘要</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((tx, index) => (
            <tr key={index}>
              <td>{tx.date}</td>
              <td>{tx.type}</td>
              <td>{tx.amount.toLocaleString()}</td>
              <td>{tx.description}</td>
              <td>{tx.description}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

// サンプルデータ
const sampleData: Props = {
  startDate: '29/06/17',
  endDate: '30/06/25',
  balance: 999999,
  depositAmount: 999999999999,
  withdrawalAmount: 999999999999,
  workingBankName: '工事名場所',
  transactions: [
    {
      date: '29/06/17',
      type: '口座',
      amount: 100000,
      description: '資金移動'
    },
    {
      date: '29/06/17',
      type: '決定入口',
      amount: 10000,
      description: '諸経費(自社)'
    },
    // ...
  ]
};

// 使用例
const App: React.FC = () => {
  return (
    <div>
      <h1>銀行取引明細書</h1>
      <BankStatement {...sampleData} />
    </div>
  );
};

export default App;