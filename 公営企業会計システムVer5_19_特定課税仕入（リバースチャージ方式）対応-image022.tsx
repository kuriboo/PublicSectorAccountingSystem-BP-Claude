// 財務諸表のテーブルコンポーネント
import React from 'react';

// 財務諸表の型定義
type FinancialStatementProps = {
  data: {
    category: string;
    currentYear: number;
    previousYear: number;
    yearOverYear: number;
  }[];
};

// 財務諸表コンポーネント
const FinancialStatement: React.FC<FinancialStatementProps> = ({ data }) => {
  return (
    <table className="w-full border-collapse">
      <thead>
        <tr className="bg-gray-100">
          <th className="border px-4 py-2">科目</th>
          <th className="border px-4 py-2">当期</th>
          <th className="border px-4 py-2">前期</th>
          <th className="border px-4 py-2">対前年比</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index} className="hover:bg-gray-50">
            <td className="border px-4 py-2">{item.category}</td>
            <td className="border px-4 py-2 text-right">{item.currentYear.toLocaleString()}</td>
            <td className="border px-4 py-2 text-right">{item.previousYear.toLocaleString()}</td>
            <td className="border px-4 py-2 text-right">{item.yearOverYear.toLocaleString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

// サンプルデータ
const sampleData = [
  { category: '売上高', currentYear: 6465491000, previousYear: 6900741000, yearOverYear: 6990689704 },
  { category: '売上総利益', currentYear: 1514165411176, previousYear: 1514165184538, yearOverYear: 1520000 },
  { category: '営業利益', currentYear: 407220745, previousYear: 448478867, yearOverYear: 408478867 },
  { category: '経常利益', currentYear: 1820557, previousYear: 1348272, yearOverYear: 370725062 },
  { category: '当期純利益', currentYear: 265895327, previousYear: 370725062, yearOverYear: 74829736 },
];

// 使用例
const App: React.FC = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">財務諸表</h1>
      <FinancialStatement data={sampleData} />
    </div>
  );
};

export default App;