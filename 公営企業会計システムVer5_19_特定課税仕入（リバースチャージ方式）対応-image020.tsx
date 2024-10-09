import React from 'react';

type TableData = {
  prefecture: string;
  cases: number;
  casesPercentage: number;
  deaths: number;
  deathsPercentage: number;
  fatalityRate: number;
  population: number;
  populationPercentage: number;
  notes?: string;
};

type TableProps = {
  data: TableData[];
};

const Table: React.FC<TableProps> = ({ data }) => {
  return (
    <div className="overflow-x-auto">
      <table className="table-auto w-full text-sm text-left text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3">都道府県</th>
            <th scope="col" className="px-6 py-3">感染者数</th>
            <th scope="col" className="px-6 py-3">感染者数割合(%)</th>
            <th scope="col" className="px-6 py-3">死亡者数</th>
            <th scope="col" className="px-6 py-3">死亡者数割合(%)</th>
            <th scope="col" className="px-6 py-3">致死率(%)</th>
            <th scope="col" className="px-6 py-3">人口(千人)</th>
            <th scope="col" className="px-6 py-3">人口割合(%)</th>
            <th scope="col" className="px-6 py-3">備考</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className="bg-white border-b hover:bg-gray-50">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                {row.prefecture}
              </th>
              <td className="px-6 py-4">{row.cases.toLocaleString()}</td>
              <td className="px-6 py-4">{row.casesPercentage}</td>
              <td className="px-6 py-4">{row.deaths.toLocaleString()}</td>
              <td className="px-6 py-4">{row.deathsPercentage}</td>
              <td className="px-6 py-4">{row.fatalityRate}</td>
              <td className="px-6 py-4">{row.population.toLocaleString()}</td>
              <td className="px-6 py-4">{row.populationPercentage}</td>
              <td className="px-6 py-4">{row.notes || '-'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Example usage
const TableExample: React.FC = () => {
  const data: TableData[] = [
    {
      prefecture: '福岡',
      cases: 416900,
      casesPercentage: 29.459,
      deaths: 1228,
      deathsPercentage: 29.406,
      fatalityRate: 0.29,
      population: 5108,
      populationPercentage: 7.36,
    },
    // ... other data
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">感染者・死亡者状況</h2>
      <Table data={data} />
    </div>
  );
};

export default TableExample;