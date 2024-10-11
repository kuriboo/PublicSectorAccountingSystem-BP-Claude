import React from 'react';
import styled from 'styled-components';

interface RowData {
  date: string;
  reason: string;
  debitCredit: string;
  amount: number;
  balance: number;
  consumptionTax: number;
  withholdingTax: number;
  transactionType: string;
}

interface TableProps {
  data: RowData[];
}

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;

  th, td {
    padding: 8px;
    text-align: left;
    border-bottom: 1px solid #ddd;
  }

  th {
    background-color: #f2f2f2;
  }

  @media (max-width: 600px) {
    font-size: 12px;

    th, td {
      padding: 6px;
    }
  }
`;

const TransactionTable: React.FC<TableProps> = ({ data }) => {
  // レンダリング用の関数
  const renderRows = () => {
    return data.map((row, index) => (
      <tr key={index}>
        <td>{row.date}</td>
        <td>{row.reason}</td>
        <td>{row.debitCredit}</td>
        <td>{row.amount.toLocaleString()}</td>
        <td>{row.balance.toLocaleString()}</td>
        <td>{row.consumptionTax.toLocaleString()}</td>
        <td>{row.withholdingTax.toLocaleString()}</td>
        <td>{row.transactionType}</td>
      </tr>
    ));
  };

  // データが空の場合の処理
  if (data.length === 0) {
    return <p>No data available.</p>;
  }

  return (
    <Table>
      <thead>
        <tr>
          <th>日付</th>
          <th>摘要</th>
          <th>借方/貸方</th>
          <th>金額</th>
          <th>残高</th>
          <th>消費税</th>
          <th>源泉徴収税</th>
          <th>取引種別</th>
        </tr>
      </thead>
      <tbody>{renderRows()}</tbody>
    </Table>
  );
};

// 使用例
const sampleData: RowData[] = [
  {
    date: '2016/3/24',
    reason: '振替',
    debitCredit: '決定',
    amount: 450,
    balance: 1000,
    consumptionTax: 0,
    withholdingTax: 0,
    transactionType: 'お支払振替',
  },
  {
    date: '2016/3/25',
    reason: '振替',
    debitCredit: '指定',
    amount: 42,
    balance: 1000,
    consumptionTax: 0,
    withholdingTax: 0,
    transactionType: 'お支払振替',
  },
];

const App: React.FC = () => {
  return (
    <div>
      <h2>取引明細</h2>
      <TransactionTable data={sampleData} />
    </div>
  );
};

export default App;