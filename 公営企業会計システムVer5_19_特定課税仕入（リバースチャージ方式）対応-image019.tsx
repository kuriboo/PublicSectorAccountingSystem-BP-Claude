import React from 'react';

type ConsumptionTaxReportProps = {
  data: {
    date: string;
    taxRate: number;
    taxableBase: number;
    consumptionTax: number;
    localConsumptionTax: number;
    totalConsumptionTax: number;
    totalAmount: number;
  }[];
};

const ConsumptionTaxReport: React.FC<ConsumptionTaxReportProps> = ({ data }) => {
  if (!data || data.length === 0) {
    return <div>No data available</div>;
  }

  return (
    <table className="table-auto border-collapse border border-gray-400">
      <thead>
        <tr className="bg-gray-200">
          <th className="border border-gray-400 px-4 py-2">日付</th>
          <th className="border border-gray-400 px-4 py-2">税率</th>
          <th className="border border-gray-400 px-4 py-2">課税標準額</th>
          <th className="border border-gray-400 px-4 py-2">消費税額</th>
          <th className="border border-gray-400 px-4 py-2">地方消費税額</th>
          <th className="border border-gray-400 px-4 py-2">消費税額合計</th>
          <th className="border border-gray-400 px-4 py-2">合計金額</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : ''}>
            <td className="border border-gray-400 px-4 py-2">{row.date}</td>
            <td className="border border-gray-400 px-4 py-2">{row.taxRate}</td>
            <td className="border border-gray-400 px-4 py-2">{row.taxableBase.toLocaleString()}</td>
            <td className="border border-gray-400 px-4 py-2">{row.consumptionTax.toLocaleString()}</td>
            <td className="border border-gray-400 px-4 py-2">{row.localConsumptionTax.toLocaleString()}</td>
            <td className="border border-gray-400 px-4 py-2">{row.totalConsumptionTax.toLocaleString()}</td>
            <td className="border border-gray-400 px-4 py-2">{row.totalAmount.toLocaleString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

// Sample data for demonstration
const sampleData = [
  {
    date: '2016/03/25',
    taxRate: 8,
    taxableBase: 2030111070,
    consumptionTax: 93006043,
    localConsumptionTax: 1937104127,
    totalConsumptionTax: 291553751,
    totalAmount: 2321664821,
  },
  // Add more sample data as needed
];

const ConsumptionTaxReportDemo: React.FC = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">消費税計算明細書</h2>
      <ConsumptionTaxReport data={sampleData} />
    </div>
  );
};

export default ConsumptionTaxReportDemo;