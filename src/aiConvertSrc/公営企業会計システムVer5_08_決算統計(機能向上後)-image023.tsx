import React from 'react';
import styled from 'styled-components';

// 科目データの型定義
type Item = {
  code: string;
  name: string;
  segment: string;
  taxRate: number;
  amount: number;
  taxAmount: number;
  total: number;
};

// コンポーネントのプロパティの型定義
type Props = {
  items: Item[];
  date: string;
};

// テーブルのスタイリング
const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;

  th, td {
    padding: 8px;
    border: 1px solid #ccc;
    text-align: right;
  }

  th {
    background-color: #f0f0f0;
  }

  // 最初の2列は左寄せ
  td:nth-child(-n+2) {
    text-align: left;
  }

  // 金額にカンマ区切りを追加
  td:nth-child(n+5) {
    &::after {
      content: "円";
    }
  }

  // レスポンシブ対応
  @media screen and (max-width: 600px) {
    font-size: 12px;

    th, td {
      padding: 4px;
    }
  }
`;

/**
 * 決算統計分析調整入力テーブルコンポーネント
 */
const BalanceTable: React.FC<Props> = ({ items, date }) => {
  // 日付をYYYY年MM月DD日の形式に変換
  const formatDate = (dateStr: string) => {
    const [year, month, day] = dateStr.split('-');
    return `${year}年${month}月${day}日`;
  };

  return (
    <Table>
      <thead>
        <tr>
          <th>科目コード</th>
          <th>科目名</th>
          <th>セグメント名</th>
          <th>税抜額(円)</th>
          <th>消費税額(円)</th>
          <th>税抜額(千円)</th>
          <th>消費税額(千円)</th>
          <th>税込額(千円)</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr key={item.code}>
            <td>{item.code}</td>
            <td>{item.name}</td>
            <td>{item.segment}</td>
            <td>{item.amount.toLocaleString()}</td>
            <td>{item.taxAmount.toLocaleString()}</td>
            <td>{Math.floor(item.amount / 1000).toLocaleString()}</td>
            <td>{Math.floor(item.taxAmount / 1000).toLocaleString()}</td>
            <td>{Math.floor(item.total / 1000).toLocaleString()}</td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td colSpan={8}>決算日：{formatDate(date)}</td>
        </tr>
      </tfoot>
    </Table>
  );
};

export default BalanceTable;

// 使用例
const App: React.FC = () => {
  const items: Item[] = [
    {
      code: '0001',
      name: '公共下水道使用料',
      segment: '公共下水道',
      taxRate: 0.08,
      amount: 107839870,
      taxAmount: 10783987,
      total: 110780,
    },
    {
      code: '0002',
      name: '公共下水道使用料',
      segment: '公共下水道',  
      taxRate: 0.1,
      amount: 49996210,
      taxAmount: 4999621,
      total: 49996,
    },
    // 他のデータ...
  ];

  return <BalanceTable items={items} date="2023-11-14" />;
};