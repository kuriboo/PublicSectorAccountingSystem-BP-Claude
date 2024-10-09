import React from 'react';

type ResultItem = {
  no: number;
  itemName: string;
  itemNameKana: string;
  salesTaxClass: string;
  priceExcludingTax: number;
  tax: number;
  priceIncludingTax: number;
};

type ResultTableProps = {
  data: ResultItem[];
};

const ResultTable: React.FC<ResultTableProps> = ({ data }) => {
  return (
    <table className="table-auto border-collapse border border-gray-400">
      <thead>
        <tr>
          <th className="border border-gray-400 px-4 py-2">No.</th>
          <th className="border border-gray-400 px-4 py-2">Item Name</th>
          <th className="border border-gray-400 px-4 py-2">Item Name (Kana)</th>
          <th className="border border-gray-400 px-4 py-2">Sales Tax Class</th>
          <th className="border border-gray-400 px-4 py-2">Price (Excluding Tax)</th>
          <th className="border border-gray-400 px-4 py-2">Tax</th>
          <th className="border border-gray-400 px-4 py-2">Price (Including Tax)</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td className="border border-gray-400 px-4 py-2">{item.no}</td>
            <td className="border border-gray-400 px-4 py-2">{item.itemName}</td>
            <td className="border border-gray-400 px-4 py-2">{item.itemNameKana}</td>
            <td className="border border-gray-400 px-4 py-2">{item.salesTaxClass}</td>
            <td className="border border-gray-400 px-4 py-2">{item.priceExcludingTax}</td>
            <td className="border border-gray-400 px-4 py-2">{item.tax}</td>
            <td className="border border-gray-400 px-4 py-2">{item.priceIncludingTax}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const ResultTableWrapper: React.FC = () => {
  // サンプルデータ
  const sampleData: ResultItem[] = [
    {
      no: 550,
      itemName: '支出',
      itemNameKana: 'シシュツ',
      salesTaxClass: '不課税',
      priceExcludingTax: 213000,
      tax: 0,
      priceIncludingTax: 213000,
    },
    {
      no: 551,
      itemName: '支出',
      itemNameKana: 'シシュツ',
      salesTaxClass: '不課税',
      priceExcludingTax: 1357566,
      tax: 0,
      priceIncludingTax: 1357566,
    },
    // 残りのサンプルデータ...
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Result Table</h2>
      <ResultTable data={sampleData} />
    </div>
  );
};

export default ResultTableWrapper;