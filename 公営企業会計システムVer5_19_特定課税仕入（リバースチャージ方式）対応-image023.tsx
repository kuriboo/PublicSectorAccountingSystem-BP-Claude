以下は、指定された画像を元に作成したNext.js + TypeScriptのコンポーネントです。

// 税計算書コンポーネント
import React from 'react';

// 税計算書のプロパティの型定義
interface TaxStatementProps {
  data: {
    title: string;
    date: string;
    fields: string[];
    rows: {
      category: string;
      valueA?: number;
      valueB?: number;
      valueC?: number;
      formula?: string;
    }[];
  };
}

const TaxStatement: React.FC<TaxStatementProps> = ({ data }) => {
  const { title, date, fields, rows } = data;

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      <p className="text-gray-600 mb-4">{date}</p>
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="border px-4 py-2"></th>
            {fields.map((field, index) => (
              <th key={index} className="border px-4 py-2">
                {field}
              </th>
            ))}
            <th className="border px-4 py-2">計算式</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{row.category}</td>
              <td className="border px-4 py-2 text-right">
                {row.valueA?.toLocaleString() || '-'}
              </td>
              <td className="border px-4 py-2 text-right">
                {row.valueB?.toLocaleString() || '-'}
              </td>
              <td className="border px-4 py-2 text-right">
                {row.valueC?.toLocaleString() || '-'}
              </td>
              <td className="border px-4 py-2">{row.formula || '-'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// サンプルデータ
const sampleData = {
  title: '第4-②付表式',
  date: '付表1-2 税率別消費税額計算表 兼 地方消費税の課税標準となる消費税額計算表',
  fields: ['税率3%課税分', '税率4%課税分', '税率6.3%課税分'],
  rows: [
    {
      category: '①課税資産の譲渡等の対価の額',
      valueA: 1000000,
      valueB: 196000,
      valueC: 6464295000,
      formula: '(A+B+C)',
    },
    {
      category: '②連法第28条第1項に規定する棚卸資産の対価の額',
      valueA: 1000000,
      valueB: 196114,
      valueC: 6464215052,
      formula: '',
    },
    {
      category: '③課税貨物に係る消費税額',
      valueA: 30000,
      valueB: 7828,
      valueC: 407182917,
      formula: '',
    },
    // 以下、データの一部を省略
  ],
};

// 使用例
const TaxStatementExample = () => {
  return <TaxStatement data={sampleData} />;
};

export default TaxStatementExample;