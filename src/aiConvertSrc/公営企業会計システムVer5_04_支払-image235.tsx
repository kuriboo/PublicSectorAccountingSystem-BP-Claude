import React from 'react';
import styled from '@emotion/styled';

// 伝票の型定義
type VoucherData = {
  date: string;
  summary: string;
  amount: number;
  taxAmount: number;
  debitAccount: string;
  creditAccount: string;
  department: string;
  note: string;
};

// 伝票テーブルのプロパティ型定義
type VoucherTableProps = {
  data: VoucherData[];
};

// 伝票テーブルのスタイル定義
const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;

  th, td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: center;
  }

  th {
    background-color: #f0f0f0;
  }

  @media screen and (max-width: 600px) {
    font-size: 12px;

    th, td {
      padding: 4px;
    }
  }
`;

/**
 * 伝票テーブルコンポーネント
 * @param props VoucherTableProps
 * @returns 伝票テーブルのJSX要素
 */
const VoucherTable: React.FC<VoucherTableProps> = (props) => {
  const { data } = props;

  return (
    <Table>
      <thead>
        <tr>
          <th>起票日</th>
          <th>摘要</th>
          <th>伝票No</th>
          <th>借方金額</th>
          <th>貸方金額</th>
          <th>振替金額</th>
          <th>部門</th>
          <th>備考</th>
        </tr>
      </thead>
      <tbody>
        {data.map((voucher, index) => (
          <tr key={index}>
            <td>{voucher.date}</td>
            <td>{voucher.summary}</td>
            <td>{voucher.amount}</td>
            <td>{voucher.debitAccount}</td>
            <td>{voucher.creditAccount}</td>
            <td>{voucher.taxAmount}</td>
            <td>{voucher.department}</td>
            <td>{voucher.note}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

// サンプルデータ
const sampleData: VoucherData[] = [
  {
    date: '08/11/25',
    summary: '前受伝票',
    amount: 73,
    taxAmount: 21600,
    debitAccount: '',
    creditAccount: '',
    department: '搬送',
    note: '',
  },
];

/**
 * 伝票テーブルのサンプル表示コンポーネント
 * @returns 伝票テーブルのサンプル表示のJSX要素
 */
const VoucherTableSample: React.FC = () => {
  return (
    <div>
      <h2>伝票一覧</h2>
      <VoucherTable data={sampleData} />
    </div>
  );
};

export default VoucherTableSample;