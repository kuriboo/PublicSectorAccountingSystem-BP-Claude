import React from 'react';

type RowData = {
  id: number;
  name: string;
  value1: number;
  value2: number;
  value3: number;
  value4: number;
  value5: number;
  total: number;
};

type TableProps = {
  data: RowData[];
};

const Table: React.FC<TableProps> = ({ data }) => {
  return (
    <div className="overflow-x-auto">
      <table className="table-auto w-full text-sm text-left text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th className="px-6 py-3">予算区分</th>
            <th className="px-6 py-3">項目</th>
            <th className="px-6 py-3">課税対象0%適用分 税抜</th>
            <th className="px-6 py-3">課税対象30%適用分 税抜</th>
            <th className="px-6 py-3">課税対象40%適用分 税抜</th>
            <th className="px-6 py-3">課税対象60%適用分 税抜</th>
            <th className="px-6 py-3">課税対象90%適用分 税抜</th>
            <th className="px-6 py-3">合計金額</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id} className="bg-white border-b">
              <td className="px-6 py-4">{row.name}</td>
              <td className="px-6 py-4">{row.value1 === 0 ? '-' : row.value1.toLocaleString()}</td>
              <td className="px-6 py-4">{row.value2 === 0 ? '-' : row.value2.toLocaleString()}</td>
              <td className="px-6 py-4">{row.value3 === 0 ? '-' : row.value3.toLocaleString()}</td>
              <td className="px-6 py-4">{row.value4 === 0 ? '-' : row.value4.toLocaleString()}</td>
              <td className="px-6 py-4">{row.value5 === 0 ? '-' : row.value5.toLocaleString()}</td>
              <td className="px-6 py-4">{row.total.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// サンプルデータ
const sampleData: RowData[] = [
  {
    id: 1,
    name: '課税売上',
    value1: 1000000,
    value2: 30000,
    value3: 0,
    value4: 196114,
    value5: 9786,
    total: 6315863815,
  },
  {
    id: 2,
    name: '特定課税仕入返還',
    value1: 0,
    value2: 0,
    value3: 0,
    value4: 0,
    value5: 24000,
    total: 24000,
  },
  // ...他のサンプルデータ
];

// 使用例
const TableExample: React.FC = () => {
  return (
    <div>
      <h2>課税売上集計表</h2>
      <Table data={sampleData} />
    </div>
  );
};

export default TableExample;