// TableComponent.tsx
import React from 'react';

type TableData = {
  date: string;
  item: string;
  amount: number;
}[];

type TableProps = {
  title: string;
  data: TableData;
};

const TableComponent: React.FC<TableProps> = ({ title, data }) => {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="border px-4 py-2">日付</th>
            <th className="border px-4 py-2">科目</th>
            <th className="border px-4 py-2">金額</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{row.date}</td>
              <td className="border px-4 py-2">{row.item}</td>
              <td className="border px-4 py-2">{row.amount.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// TablePage.tsx
import React from 'react';
import TableComponent from './TableComponent';

const TablePage: React.FC = () => {
  // サンプルデータ
  const incomeData = [
    { date: '2023年4月分', item: '営業収入', amount: 1025639 },
    { date: '2023年4月分', item: '家賃収入', amount: 102564 },
  ];

  const expenseData = [
    { date: '2023年4月30日', item: '仕入高', amount: 512698 },
    { date: '2023年4月20日', item: '消耗品費', amount: 13560 },
    { date: '2023年4月15日', item: '事務用品費', amount: 12860 },
    { date: '2023年4月10日', item: '会議費', amount: 10000 },
    { date: '2023年4月5日', item: '交通費', amount: 5000 },
    { date: '2023年4月25日', item: '通信費', amount: 10000 },
    { date: '2023年4月30日', item: '地代家賃', amount: 50000 },
    { date: '2023年4月30日', item: '支払利息', amount: 20500 },
    { date: '2023年4月30日', item: '租税公課', amount: 446001 },
    { date: '2023年4月30日', item: '合計', amount: 1106119 },
  ];

  return (
    <div className="space-y-8">
      <TableComponent title="損益計算書(要約)" data={incomeData} />
      <TableComponent title="販売費及び一般管理費の内訳" data={expenseData} />
    </div>
  );
};

export default TablePage;