import React from 'react';
import styled from 'styled-components';

// 給与データの型定義
type SalaryData = {
  id: string;
  year: number;
  month: number;
  division: string;
  paymentDate: string;
  baseSalary: number;
  allowance: number;
  nationalTax: number;
  salary: number;
  insurancePremium: number;
  note: string;
};

// 給与データテーブルのプロパティ定義
type SalaryTableProps = {
  data: SalaryData[];
};

// 給与データテーブルコンポーネント
const SalaryTable: React.FC<SalaryTableProps> = ({ data }) => {
  return (
    <TableWrapper>
      <StyledTable>
        <thead>
          <tr>
            <th>部門処理</th>
            <th>決定年度</th>
            <th>決定番号</th>
            <th>明細日</th>
            <th>支給年月日</th>
            <th>会計年度</th>
            <th>日コード</th>
            <th>管理区分</th>
            <th>支給額</th>
            <th>控除額</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.division}</td>
              <td>{item.year}</td>
              <td>{item.month}</td>
              <td>1</td>
              <td>{item.paymentDate}</td>
              <td>{item.year}</td>
              <td>{item.baseSalary.toLocaleString()}</td>
              <td>{item.allowance.toLocaleString()}</td>
              <td>{item.salary.toLocaleString()}</td>
              <td>{item.nationalTax.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </StyledTable>
    </TableWrapper>
  );
};

// テーブルのスタイリング
const TableWrapper = styled.div`
  overflow-x: auto;
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;

  th,
  td {
    padding: 8px;
    border: 1px solid #ccc;
    text-align: center;
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
const sampleData: SalaryData[] = [
  {
    id: '1',
    year: 2021,
    month: 12,
    division: '本社',
    paymentDate: '令和03年12月25日',
    baseSalary: 54000000,
    allowance: 1000,
    nationalTax: 200000,
    salary: 200000, 
    insurancePremium: 1000.00,
    note: '01月分給与速報',
  },
  // ... 他のサンプルデータ
];

// 使用例
const SalaryTableExample: React.FC = () => {
  return (
    <div>
      <h2>給与データ取込削除</h2>
      <SalaryTable data={sampleData} />
    </div>
  );
};

export default SalaryTableExample;