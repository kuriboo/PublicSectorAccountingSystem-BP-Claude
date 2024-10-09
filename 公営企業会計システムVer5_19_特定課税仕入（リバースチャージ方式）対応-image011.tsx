import React from 'react';

// Define the props type for the TaxSummary component
type TaxSummaryProps = {
  year: number;
  month: number;
  day: number;
  incomeTax: number;
  inhabitantTax: number;
  enterpriseTax: number;
};

// Create the TaxSummary component
const TaxSummary: React.FC<TaxSummaryProps> = ({
  year,
  month,
  day,
  incomeTax,
  inhabitantTax,
  enterpriseTax,
}) => {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-lg font-bold mb-2">消費税は税伝票選択</h2>
      <div className="mb-4">
        <span className="mr-2">伝票日付</span>
        <span>
          {year}年{month}月{day}日
        </span>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <label className="block font-bold">税込金額</label>
          <span>{incomeTax}</span>
        </div>
        <div>
          <label className="block font-bold">税抜金額</label>
          <span>{inhabitantTax}</span>
        </div>
        <div>
          <label className="block font-bold">消費税額</label>
          <span>{enterpriseTax}</span>
        </div>
      </div>
      <div className="mt-4 flex justify-end">
        <button className="px-4 py-2 bg-blue-500 text-white rounded mr-2">
          OK
        </button>
        <button className="px-4 py-2 bg-gray-300 text-gray-700 rounded mr-2">
          クリア
        </button>
        <button className="px-4 py-2 bg-green-500 text-white rounded">
          キャンセル
        </button>
      </div>
    </div>
  );
};

// Sample data for demonstration
const sampleData: TaxSummaryProps = {
  year: 2023,
  month: 5,
  day: 27,
  incomeTax: 0,
  inhabitantTax: 0,
  enterpriseTax: 0,
};

// Example usage of the TaxSummary component
const TaxSummaryExample: React.FC = () => {
  return (
    <div>
      <h1>Tax Summary Example</h1>
      <TaxSummary {...sampleData} />
    </div>
  );
};

export default TaxSummaryExample;