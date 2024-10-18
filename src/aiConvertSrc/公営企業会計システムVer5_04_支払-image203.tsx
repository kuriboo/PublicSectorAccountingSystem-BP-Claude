import React from 'react';
import styled from 'styled-components';

// 仕訳詳細コンポーネントの型定義
type JournalDetailProps = {
  date: string;
  description: string;
  debitAccount: string;
  creditAccount: string;
  amount: number;
};

// スタイル定義
const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  th, td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: left;
  }
  th {
    background-color: #f0f0f0;
  }
`;

const Amount = styled.span`
  font-weight: bold;
`;

const BalanceTable = styled.table`
  margin-top: 20px;
  th, td {
    padding: 4px;
  }
`;

// 仕訳詳細コンポーネント
const JournalDetail: React.FC<JournalDetailProps> = ({
  date,
  description,
  debitAccount,
  creditAccount,
  amount,
}) => {
  // 金額が0の場合は表示しない
  if (amount === 0) {
    return null;
  }

  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>借方科目</th>
            <th>借方細目</th>
            <th>借方明細</th>
            <th>貸方科目</th>
            <th>貸方細目</th>
            <th>貸方明細</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{debitAccount}</td>
            <td>{description}</td>
            <td>{description}/他</td>
            <td>{creditAccount}</td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </Table>

      <BalanceTable>
        <tbody>
          <tr>
            <th>件数</th>
            <td>1</td>
            <th>消費税率</th>
            <td>{amount !== 0 ? '10.00%' : '0.00%'}</td>
          </tr>
          <tr>
            <th>税込金額</th>
            <td><Amount>{amount.toLocaleString()}</Amount></td>
            <th>貸方特定収入</th>
            <td>0</td>
          </tr>
          <tr>
            <th>借方特定収入</th>
            <td>0</td>
            <th>貸方特定仕入</th>
            <td>0</td>
          </tr>
          <tr>
            <th>仕訳区分</th>
            <td>明細仕訳</td>
            <th>消費税額</th>
            <td>0</td>
          </tr>
        </tbody>
      </BalanceTable>
    </div>
  );
};

// サンプルデータを使用した表示用コンポーネント
const JournalDetailSample: React.FC = () => {
  return (
    <JournalDetail
      date="2023/04/01"
      description="ボールペン購入"
      debitAccount="消耗品費"
      creditAccount="現金"
      amount={10000}
    />
  );
};

export default JournalDetailSample;