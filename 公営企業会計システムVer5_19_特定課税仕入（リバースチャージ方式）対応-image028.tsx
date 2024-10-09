import React from 'react';

type ResultItem = {
  id: number;
  name: string;
  income: number;
  expense: number;
  profit: number;
  taxRate: number;
  tax: number;
  netIncome: number;
};

type ResultTableProps = {
  data: ResultItem[];
};

const ResultTable: React.FC<ResultTableProps> = ({ data }) => {
  return (
    <div className="overflow-x-auto">
      <table className="table-auto w-full text-sm text-left text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3">ID</th>
            <th scope="col" className="px-6 py-3">名前</th>
            <th scope="col" className="px-6 py-3">収益</th>
            <th scope="col" className="px-6 py-3">支出</th>
            <th scope="col" className="px-6 py-3">利益</th>
            <th scope="col" className="px-6 py-3">税率</th>
            <th scope="col" className="px-6 py-3">税額</th>
            <th scope="col" className="px-6 py-3">税引後利益</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id} className="bg-white border-b">
              <td className="px-6 py-4">{item.id}</td>
              <td className="px-6 py-4">{item.name}</td>
              <td className="px-6 py-4">{item.income}</td>
              <td className="px-6 py-4">{item.expense}</td>
              <td className="px-6 py-4">{item.profit}</td>
              <td className="px-6 py-4">{item.taxRate}</td>
              <td className="px-6 py-4">{item.tax}</td>
              <td className="px-6 py-4">{item.netIncome}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// サンプルデータ
const sampleData: ResultItem[] = [
  {
    id: 550,
    name: '支出',
    income: 1137468,
    expense: 21300,
    profit: 1137468,
    taxRate: 0.3,
    tax: 341240,
    netIncome: 1137468,
  },
  // ...他のサンプルデータ
];

const SampleResultTable: React.FC = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">結果テーブル</h2>
      {sampleData.length > 0 ? (
        <ResultTable data={sampleData} />
      ) : (
        <p>データがありません。</p>
      )}
    </div>
  );
};

export default SampleResultTable;