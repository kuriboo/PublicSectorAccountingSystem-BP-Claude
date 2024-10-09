import React from 'react';

type RowData = {
  constructionCosts: number;
  siteCosts: number;
  designCosts: number;
  generalAffairsCosts: number;
  contingencyCosts: number;
  totalCosts: number;
};

type TableProps = {
  data: RowData[];
};

const Table: React.FC<TableProps> = ({ data }) => {
  if (!data || data.length === 0) {
    return <div>No data available</div>;
  }

  return (
    <table className="w-full border-collapse">
      <thead>
        <tr className="bg-gray-100">
          <th className="border px-4 py-2">建設費</th>
          <th className="border px-4 py-2">用地費</th>
          <th className="border px-4 py-2">設計費</th>
          <th className="border px-4 py-2">庁舎費</th>
          <th className="border px-4 py-2">予備費</th>
          <th className="border px-4 py-2">総事業費</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index} className="hover:bg-gray-50">
            <td className="border px-4 py-2">{row.constructionCosts.toLocaleString()}</td>
            <td className="border px-4 py-2">{row.siteCosts.toLocaleString()}</td>
            <td className="border px-4 py-2">{row.designCosts.toLocaleString()}</td>
            <td className="border px-4 py-2">{row.generalAffairsCosts.toLocaleString()}</td>
            <td className="border px-4 py-2">{row.contingencyCosts.toLocaleString()}</td>
            <td className="border px-4 py-2">{row.totalCosts.toLocaleString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

// Example usage
const sampleData: RowData[] = [
  {
    constructionCosts: 2100000,
    siteCosts: 2100000,
    designCosts: 2000000, 
    generalAffairsCosts: 2000000,
    contingencyCosts: 100000,
    totalCosts: 2100000,
  },
  {
    constructionCosts: 2100000,
    siteCosts: 2000000,
    designCosts: 2000000,
    generalAffairsCosts: 2000000,
    contingencyCosts: 0,
    totalCosts: 0,
  },
];

const ExampleTableComponent: React.FC = () => {
  return (
    <div>
      <h2>Sample Table</h2>
      <Table data={sampleData} />
    </div>
  );
};

export default ExampleTableComponent;