import React from 'react';
import styled from 'styled-components';

// 決算統計データの型定義
type FinancialData = {
  id: string;
  name: string;
  borrowingAmount: number;
  repaymentAmount: number;
  borrowingBalance: number;
  repaymentBalance: number;
  borrowingRate: number;
  repaymentRate: number;
  overdueAmount: number;
};

// 決算統計テーブルのプロパティ型定義
type FinancialTableProps = {
  data: FinancialData[];
};

// 決算統計テーブルコンポーネント
const FinancialTable: React.FC<FinancialTableProps> = ({ data }) => {
  return (
    <TableWrapper>
      <Table>
        <thead>
          <tr>
            <th>仕訳</th>
            <th>仕訳款名称</th>
            <th>借方金額(円)</th>
            <th>貸方金額(円)</th>
            <th>借方残高(円)</th>
            <th>貸方残高(円)</th>
            <th>借方残高(千円)</th>
            <th>貸方残高(千円)</th>
            <th>端数調整</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.borrowingAmount.toLocaleString()}</td>
              <td>{item.repaymentAmount.toLocaleString()}</td>
              <td>{item.borrowingBalance.toLocaleString()}</td>
              <td>{item.repaymentBalance.toLocaleString()}</td>
              <td>{Math.floor(item.borrowingBalance / 1000).toLocaleString()}</td>
              <td>{Math.floor(item.repaymentBalance / 1000).toLocaleString()}</td>
              <td>{item.overdueAmount > 0 ? '四捨五入' : '-'}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </TableWrapper>
  );
};

// スタイリング
const TableWrapper = styled.div`
  overflow-x: auto;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  th,
  td {
    padding: 8px;
    text-align: right;
    border: 1px solid #ddd;
  }

  th {
    background-color: #f2f2f2;
  }

  @media screen and (max-width: 600px) {
    th,
    td {
      padding: 4px;
      font-size: 12px;
    }
  }
`;

// サンプルデータ
const sampleData: FinancialData[] = [
  {
    id: '001',
    name: '公共下水道事業収益',
    borrowingAmount: 78668163,
    repaymentAmount: 966383197,
    borrowingBalance: 0,
    repaymentBalance: 886694034,
    borrowingRate: 0,
    repaymentRate: 886694,
    overdueAmount: 4,
  },
  // 他のデータ...
];

// 使用例
const App: React.FC = () => {
  return (
    <div>
      <h1>決算統計千円丸め処理</h1>
      <FinancialTable data={sampleData} />
    </div>
  );
};

export default App;