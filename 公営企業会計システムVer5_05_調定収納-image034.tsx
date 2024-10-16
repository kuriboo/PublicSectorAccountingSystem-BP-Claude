import React from 'react';
import styled from '@emotion/styled';

interface ReserveData {
  residence: string;
  collection: string;
  amount: number;
  taxRate: number;
  tax: number;
  total: number;
  payment: string;
}

interface Props {
  data: ReserveData[];
}

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

const Text = styled.p`
  margin: 0;
`;

const TotalText = styled.p`
  margin: 16px 0;
  text-align: right;
`;

// 請求一覧表コンポーネント
const InvoiceTable: React.FC<Props> = ({ data }) => {
  if (!data || data.length === 0) {
    return <Text>データがありません。</Text>;
  }

  // 合計を計算
  const total = data.reduce((sum, item) => sum + item.total, 0);

  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>住所コード</th>
            <th>集合調定日分</th>
            <th>調定</th>
            <th>税込金額</th>
            <th>消費税額</th>
            <th>消費税率</th>
            <th>集合調定番号</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.residence}</td>
              <td>{item.collection}</td>
              <td>{item.amount.toLocaleString()}</td>
              <td>{item.total.toLocaleString()}</td>
              <td>{item.tax}</td>
              <td>{item.taxRate}%</td>
              <td>{item.payment}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <TotalText>合計: {total.toLocaleString()}</TotalText>
    </div>
  );
};

// サンプルデータ
const sampleData: ReserveData[] = [
  {
    residence: '008500',
    collection: '平成29年12月(一括)',
    amount: 1000,
    taxRate: 8,
    tax: 74,
    total: 1074,
    payment: '108末',
  },
  {
    residence: '008010',
    collection: '1:通常調定 水道料金振替(川上地区)',
    amount: 3000,
    taxRate: 8,
    tax: 222,
    total: 2778,
    payment: '108末',
  },
  {
    residence: '008012',
    collection: '1:通常調定 水道料金振替(川中地区)',
    amount: 5000,
    taxRate: 8,
    tax: 370,
    total: 4630,
    payment: '110末',
  },
];

// 使用例
const App: React.FC = () => {
  return (
    <div>
      <h2>請求一覧表</h2>
      <InvoiceTable data={sampleData} />
    </div>
  );
};

export default App;