import React from 'react';
import styled from 'styled-components';

// 会計予定明細の型定義
type AccountDetail = {
  item: string;
  specification: string;
  amount: number;
  taxAmount: number;
};

// コンポーネントのPropsの型定義
type Props = {
  accountDetails: AccountDetail[];
};

// スタイルコンポーネントでテーブルのスタイルを定義
const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  th, td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: center;
  }
  th {
    background-color: #f2f2f2;
  }
`;

// コンポーネント本体
const AccountDetailTable: React.FC<Props> = ({ accountDetails }) => {
  // accountDetailsが空の場合は空のテーブルを返す
  if (accountDetails.length === 0) {
    return <Table><tbody><tr><td colSpan={4}>データがありません</td></tr></tbody></Table>;
  }
  
  return (
    <Table>
      <thead>
        <tr>
          <th>項目</th>
          <th>内容</th>
          <th>今回補正</th>
          <th>補正前</th>
          <th>補正後額</th>
        </tr>
      </thead>
      <tbody>
        {accountDetails.map((detail, index) => (
          <tr key={index}>
            <td>{detail.item}</td>
            <td>{detail.specification}</td>
            <td>{detail.amount}</td>
            <td>{detail.taxAmount}</td>
            <td>{detail.amount + detail.taxAmount}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};



// 使用例
const sampleData: AccountDetail[] = [
  { item: '事業', specification: '04 水道広域化の上水道統合整備事業', amount: 0, taxAmount: 489 },
  { item: '施策', specification: '01 水道広域化の上水道統合整備事業', amount: 0, taxAmount: 453 },
  { item: '施策内訳', specification: '0001 基本計画の策定', amount: 0, taxAmount: 36 },
];

const App: React.FC = () => {
  return (
    <div>
      <h2>補正事業別見積要求登録</h2>
      <AccountDetailTable accountDetails={sampleData} />
    </div>
  );
};

export default App;