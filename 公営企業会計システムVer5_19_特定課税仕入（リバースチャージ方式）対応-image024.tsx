import React from 'react';

interface BalanceSheetProps {
  data: {
    label: string;
    currentYear: number;
    previousYear: number;
  }[];
}

const BalanceSheet: React.FC<BalanceSheetProps> = ({ data }) => {
  return (
    <table className="w-full border-collapse">
      <thead>
        <tr>
          <th className="border border-gray-400 px-4 py-2">項目</th>
          <th className="border border-gray-400 px-4 py-2">当期</th>
          <th className="border border-gray-400 px-4 py-2">前期</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td className="border border-gray-400 px-4 py-2">{item.label}</td>
            <td className="border border-gray-400 px-4 py-2 text-right">{item.currentYear.toLocaleString()}</td>
            <td className="border border-gray-400 px-4 py-2 text-right">{item.previousYear.toLocaleString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BalanceSheet;

// 使用例
/*
<BalanceSheet
  data={[
    { label: '現金及び預金', currentYear: 6095500312, previousYear: 4833351594 },
    { label: '売掛金', currentYear: 2480000, previousYear: 0 },
    // ...
  ]}
/>
*/