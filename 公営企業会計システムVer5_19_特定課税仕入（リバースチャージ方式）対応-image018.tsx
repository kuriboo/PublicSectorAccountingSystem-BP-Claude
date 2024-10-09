// TableComponent.tsx
import React from 'react';

type TableData = {
  [key: string]: string | number;
};

type TableComponentProps = {
  data: TableData[];
};

const TableComponent: React.FC<TableComponentProps> = ({ data }) => {
  if (!data || data.length === 0) {
    return <p>No data available.</p>;
  }

  const headers = Object.keys(data[0]);

  return (
    <table className="border-collapse border border-gray-300">
      <thead>
        <tr>
          {headers.map((header, index) => (
            <th key={index} className="border border-gray-300 px-4 py-2 bg-gray-100">{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {headers.map((header, cellIndex) => (
              <td key={cellIndex} className="border border-gray-300 px-4 py-2">
                {row[header]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

// Example usage
const sampleData: TableData[] = [
  { '': 4, I: 1, J: 2100000, K: 0, L: 2000000, M: 100000 },
  { '': 4, I: 1, J: 2100000, K: 0, L: 2000000, M: 100000 },
  { '': 4, I: 1, J: 2000000, K: 0, L: 2000000, M: 0 },
  { '': 4, I: 1, J: 2000000, K: 0, L: 2000000, M: 100000 },
  { '': 4, I: 1, J: 100000, K: 0, L: 0, M: 100000 },
  { '': 4, I: 1, J: 100000, K: 0, L: 0, M: 100000 },
];

const ExampleComponent: React.FC = () => {
  return (
    <div>
      <h2>Table Example</h2>
      <TableComponent data={sampleData} />
    </div>
  );
};

export default ExampleComponent;