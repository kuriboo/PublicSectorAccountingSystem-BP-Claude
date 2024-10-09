// ReportTable.tsx

import React from 'react';

type ReportTableProps = {
  data: Array<{
    item: string;
    currentAmount: number;
    previousAmount: number;
    increasedAmount: number;
    currentPrice: number;
    changedPrice: number;
  }>;
};

const ReportTable: React.FC<ReportTableProps> = ({ data }) => {
  if (!data || data.length === 0) {
    return <div>No data available.</div>;
  }

  return (
    <table className="w-full border-collapse">
      <thead>
        <tr className="bg-gray-100">
          <th className="border px-4 py-2">項目</th>
          <th className="border px-4 py-2">当期金額</th>
          <th className="border px-4 py-2">前期金額</th>
          <th className="border px-4 py-2">増減金額</th>
          <th className="border px-4 py-2">当期単価</th>
          <th className="border px-4 py-2">単価変動率</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
            <td className="border px-4 py-2">{row.item}</td>
            <td className="border px-4 py-2 text-right">{row.currentAmount.toLocaleString()}</td>
            <td className="border px-4 py-2 text-right">{row.previousAmount.toLocaleString()}</td>
            <td className="border px-4 py-2 text-right">{row.increasedAmount.toLocaleString()}</td>
            <td className="border px-4 py-2 text-right">{row.currentPrice.toLocaleString()}</td>
            <td className="border px-4 py-2 text-right">{row.changedPrice.toLocaleString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

// Example usage
const ReportPage: React.FC = () => {
  const reportData = [
    { item: '売上', currentAmount: 1000000, previousAmount: 196098, increasedAmount: 6484125492, currentPrice: 0, changedPrice: 0 },
    { item: '仕入', currentAmount: 0, previousAmount: 0, increasedAmount: 0, currentPrice: 6996900940, changedPrice: 0 },
    // ...
  ];

  return (
    <div>
      <h1>損益計算書</h1>
      <ReportTable data={reportData} />
    </div>
  );
};

export default ReportTable;