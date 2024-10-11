import React from 'react';
import styled from 'styled-components';

// 伝票の型定義
interface VoucherData {
  date: string;
  people: number;
  transferAmount: number;
  balance: number;
  difference: number;
  rate: number;
  goldAmount: number;
}

// Voucherコンポーネントのプロパティの型定義
interface VoucherProps {
  data: VoucherData[];
  dateFrom: string;
  dateTo: string;
}

// テーブルのスタイリング
const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  
  th, td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: right;
  }

  th {
    background-color: #f2f2f2;
  }
`;

/**
 * 伝票を表示するコンポーネント
 */
const Voucher: React.FC<VoucherProps> = ({ data, dateFrom, dateTo }) => {
  // 日付の表示形式を整える
  const formatDate = (dateString: string) => {
    if (!dateString) return ''; // 日付が空の場合は空文字を返す
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${year}/${month}/${day}`;
  };

  return (
    <div>
      <h2>貯蔵品受払簿照会</h2>
      <p>
        日付：{formatDate(dateFrom)} 〜 {formatDate(dateTo)}
      </p>
      <Table>
        <thead>
          <tr>
            <th>日付</th>
            <th>人数</th>
            <th>振替番号</th>
            <th>繰越金</th>
            <th>差額</th>
            <th>単価</th>
            <th>金額</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{formatDate(item.date)}</td>
              <td>{item.people}</td>
              <td>{item.transferAmount}</td>
              <td>{item.balance.toLocaleString()}</td>
              <td>{item.difference.toLocaleString()}</td>
              <td>{item.rate}</td>
              <td>{item.goldAmount.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Voucher;

// サンプルデータ
const sampleData: VoucherData[] = [
  {
    date: '2017/09/15',
    people: 63,
    transferAmount: 0,
    balance: 2500.0,
    difference: 7500.0,
    rate: 5.0,
    goldAmount: 0.0,
  },
  {
    date: '2017/09/15',
    people: 64,
    transferAmount: -2.0,
    balance: 2500.0,
    difference: -5000.0,
    rate: 3.0,
    goldAmount: 0.0,
  },
  // ... 他のデータ
];

// 使用例
const VoucherSample: React.FC = () => {
  return <Voucher data={sampleData} dateFrom="2017/09/15" dateTo="2017/09/15" />;
};