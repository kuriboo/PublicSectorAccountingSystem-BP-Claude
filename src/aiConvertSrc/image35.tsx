import React from 'react';
import styled from '@emotion/styled';

// 振替条件設定のプロパティ型定義
type TransferConditionProps = {
  transferNumber?: string;
  transferDate?: string;
  debitAccount?: string;
  creditAccount?: string;
  amount?: number;
  summary?: string;
};

// 振替条件設定コンポーネント
const TransferCondition: React.FC<TransferConditionProps> = ({
  transferNumber = '',
  transferDate = '',
  debitAccount = '',
  creditAccount = '',
  amount = 0,
  summary = '',
}) => {
  // 振替日のフォーマット
  const formatTransferDate = (date: string) => {
    if (!date) return '';
    return `${date.slice(0, 4)}年${date.slice(4, 6)}月${date.slice(6, 8)}日`;
  };

  return (
    <Container>
      <Title>振替条件設定</Title>
      <Table>
        <tbody>
          <tr>
            <th>振込番号</th>
            <td>{transferNumber}</td>
          </tr>
          <tr>
            <th>振替日</th>
            <td>{formatTransferDate(transferDate)}</td>
          </tr>
          <tr>
            <th>
              <input type="radio" checked readOnly />
              予算科目
            </th>
            <td>{debitAccount}</td>
          </tr>
          <tr>
            <th>
              <input type="radio" readOnly />
              仕訳科目
            </th>
            <td>{creditAccount}</td>
          </tr>
          <tr>
            <th>振替金額</th>
            <td>{amount.toLocaleString()}</td>
          </tr>
          <tr>
            <th>摘要</th>
            <td>{summary}</td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
};

// サンプルデータ
const sampleData: TransferConditionProps = {
  transferNumber: 'A0027',
  transferDate: '20260927',
  debitAccount: '電子事務 /用品',
  creditAccount: '',
  amount: 999999999999,
  summary: '',
};

// 表示用コンポーネント
const SampleTransferCondition: React.FC = () => {
  return (
    <div>
      <h2>振替条件設定サンプル</h2>
      <TransferCondition {...sampleData} />
    </div>
  );
};

// スタイリング
const Container = styled.div`
  font-family: sans-serif;
  padding: 16px;

  @media (max-width: 600px) {
    padding: 8px;
  }
`;

const Title = styled.h3`
  font-size: 20px;
  margin-bottom: 8px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  th,
  td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: left;
  }

  th {
    background-color: #f0f0f0;
    width: 30%;
  }

  td {
    width: 70%;
  }

  @media (max-width: 600px) {
    font-size: 14px;

    th,
    td {
      display: block;
      width: auto;
    }

    th {
      text-align: left;
    }
  }
`;

export default SampleTransferCondition;