import React from 'react';
import styled from 'styled-components';

// 型定義
type TaxWithholdingEntry = {
  date: string;
  incomeAmount: number;
  withholdingTaxAmount: number;
  insurancePremiumAmount: number;
  takeHomePay: number;
};

type TaxWithholdingFormProps = {
  entries: TaxWithholdingEntry[];
  onSubmit: (data: TaxWithholdingEntry) => void;
};

// スタイリング
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  font-family: Arial, sans-serif;
`;

const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  max-width: 800px;

  th,
  td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: center;
  }

  th {
    background-color: #f2f2f2;
  }
`;

const Input = styled.input`
  padding: 4px;
  margin: 4px;
  border: 1px solid #ddd;
  border-radius: 4px;
  width: 100px;
`;

const Button = styled.button`
  padding: 8px 16px;
  margin: 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

// コンポーネント
const TaxWithholdingForm: React.FC<TaxWithholdingFormProps> = ({ entries, onSubmit }) => {
  const [date, setDate] = React.useState('');
  const [incomeAmount, setIncomeAmount] = React.useState(0);
  const [withholdingTaxAmount, setWithholdingTaxAmount] = React.useState(0);
  const [insurancePremiumAmount, setInsurancePremiumAmount] = React.useState(0);

  // 手取り額計算
  const calculateTakeHomePay = () => {
    return incomeAmount - withholdingTaxAmount - insurancePremiumAmount;
  };

  // 登録ハンドラ
  const handleSubmit = () => {
    const newEntry: TaxWithholdingEntry = {
      date,
      incomeAmount,
      withholdingTaxAmount,
      insurancePremiumAmount,
      takeHomePay: calculateTakeHomePay(),
    };

    onSubmit(newEntry);

    // フォームクリア
    setDate('');
    setIncomeAmount(0);
    setWithholdingTaxAmount(0);
    setInsurancePremiumAmount(0);
  };

  return (
    <Container>
      <h2>特定課税仕入伝票管理入力</h2>
      <Table>
        <thead>
          <tr>
            <th>搬送日</th>
            <th>振替年月</th>
            <th>伝票日付</th>
            <th>摘要</th>
            <th>稲妻</th>
            <th>税込額</th>
            <th>消費税額</th>
          </tr>
        </thead>
        <tbody>
          {/* エントリ表示 */}
          {entries.map((entry, index) => (
            <tr key={index}>
              <td>{entry.date}</td>
              <td>{entry.incomeAmount}</td>
              <td>{entry.withholdingTaxAmount}</td>
              <td>{entry.insurancePremiumAmount}</td>
              <td>{entry.takeHomePay}</td>
            </tr>
          ))}
          {/* 入力フォーム */}
          <tr>
            <td>
              <Input type="text" value={date} onChange={(e) => setDate(e.target.value)} />
            </td>
            <td>
              <Input
                type="number"
                value={incomeAmount}
                onChange={(e) => setIncomeAmount(Number(e.target.value))}
              />
            </td>
            <td>
              <Input
                type="number"
                value={withholdingTaxAmount}
                onChange={(e) => setWithholdingTaxAmount(Number(e.target.value))}
              />
            </td>
            <td>
              <Input
                type="number"
                value={insurancePremiumAmount}
                onChange={(e) => setInsurancePremiumAmount(Number(e.target.value))}
              />
            </td>
            <td>{calculateTakeHomePay()}</td>
          </tr>
        </tbody>
      </Table>
      <Button onClick={handleSubmit}>登録</Button>
    </Container>
  );
};

// サンプルデータと使用例
const sampleData: TaxWithholdingEntry[] = [
  {
    date: '2023/03/27',
    incomeAmount: 80000,
    withholdingTaxAmount: 90000,
    insurancePremiumAmount: 0,
    takeHomePay: 90000,
  },
];

const App: React.FC = () => {
  const [entries, setEntries] = React.useState(sampleData);

  const handleSubmit = (newEntry: TaxWithholdingEntry) => {
    setEntries([...entries, newEntry]);
  };

  return <TaxWithholdingForm entries={entries} onSubmit={handleSubmit} />;
};

export default App;