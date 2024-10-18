import React from 'react';
import styled from '@emotion/styled';

// 型定義
interface DecisionSummaryProps {
  fiscalYear: number;
  targetNumber: string;
  processingDate: string;
  expirationDate: string;
  netAmount: number;
  taxAmount: number;
  decisionHistory: DecisionHistoryItem[];
}

interface DecisionHistoryItem {
  date: string;
  decisionNumber: string;
  amount: number;
  note: string;
}

// スタイル定義
const Container = styled.div`
  font-family: sans-serif;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;

  @media (max-width: 600px) {
    padding: 10px;
  }
`;

const UpperSection = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const LowerSection = styled.div`
  overflow-x: auto;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  th, td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: center;
  }

  th {
    background-color: #f0f0f0;
  }
`;

// メインコンポーネント
const DecisionSummary: React.FC<DecisionSummaryProps> = ({
  fiscalYear,
  targetNumber,
  processingDate,
  expirationDate,
  netAmount,
  taxAmount,
  decisionHistory,
}) => {
  return (
    <Container>
      <UpperSection>
        <div>
          <div>平成{fiscalYear}年度</div>
          <div>処理日：{processingDate}</div>
          <div>期限：{expirationDate}</div>
        </div>
        <div>
          <div>決定額：{netAmount.toLocaleString()}</div>
          <div>明細金額：{taxAmount.toLocaleString()}</div>
        </div>
        <div>
          <div>節：</div>
          <div>細節：</div>
          <div>明細：</div>
        </div>
      </UpperSection>

      <LowerSection>
        <Table>
          <thead>
            <tr>
              <th>処理日</th>
              <th>決定番号</th>
              <th>支払種別</th>
              <th>決定額</th>
              <th>備考</th>
            </tr>
          </thead>
          <tbody>
            {decisionHistory.map((item, index) => (
              <tr key={index}>
                <td>{item.date}</td>
                <td>{item.decisionNumber}</td>
                <td></td>
                <td>{item.amount.toLocaleString()}</td>
                <td>{item.note}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </LowerSection>
    </Container>
  );
};

// サンプルデータ
const sampleData: DecisionSummaryProps = {
  fiscalYear: 29,
  targetNumber: '年度',
  processingDate: '6月17日',
  expirationDate: '',
  netAmount: 0,
  taxAmount: 0,
  decisionHistory: [
    {
      date: '29/06/17',
      decisionNumber: '97　工事(費用振替)',
      amount: 10000,
      note: '施工管理技術検定 受検手数料',
    },
    {
      date: '29/06/17',
      decisionNumber: '98 一般(費用振)',
      amount: 25000,
      note: '施設管(契約金)',
    },
    {
      date: '29/06/17',
      decisionNumber: '99 一般(費用振)',
      amount: 431000,
      note: 'S給与連携 給与支給分の財源',
    },
    {
      date: '29/06/17',
      decisionNumber: '100 一般(費用振)',
      amount: 1000,
      note: 'S給与連携 給与支給分の財源',
    },
    {
      date: '29/06/17',
      decisionNumber: '101 資金前渡(費用振)',
      amount: 19800,
      note: '交通費',
    },
  ],
};

// 表示用コンポーネント
const App: React.FC = () => {
  return (
    <div>
      <h1>決定書発行(仕訳科目)</h1>
      <DecisionSummary {...sampleData} />
    </div>
  );
};

export default App;