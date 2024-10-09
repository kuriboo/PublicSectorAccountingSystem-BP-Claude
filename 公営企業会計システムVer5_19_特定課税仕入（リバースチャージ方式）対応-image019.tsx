import React from 'react';

interface TableData {
  date: string;
  income: number;
  expense: number;
  total: number;
  balance: number;
}

interface TableProps {
  data: TableData[];
}

const FinancialTable: React.FC<TableProps> = ({ data }) => {
  return (
    <div className="overflow-x-auto">
      <table className="table-auto w-full text-sm text-left text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3">日付</th>
            <th scope="col" className="px-6 py-3">収入金額</th>
            <th scope="col" className="px-6 py-3">支払金額</th>
            <th scope="col" className="px-6 py-3">取引金額</th>
            <th scope="col" className="px-6 py-3">残高</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className="bg-white border-b">
              <td className="px-6 py-4">{row.date}</td>
              <td className="px-6 py-4">{row.income.toLocaleString()}</td>
              <td className="px-6 py-4">{row.expense.toLocaleString()}</td>
              <td className="px-6 py-4">{row.total.toLocaleString()}</td>
              <td className="px-6 py-4">{row.balance.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FinancialTable;

// 使用例
// const data = [
//   { date: '2023/01/01', income: 100000, expense: 50000, total: 50000, balance: 50000 },
//   { date: '2023/01/02', income: 80000, expense: 30000, total: 50000, balance: 100000 },
//   ...
// ];
// 
// <FinancialTable data={data} />