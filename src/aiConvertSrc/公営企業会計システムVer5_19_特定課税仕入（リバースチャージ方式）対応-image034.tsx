// ResultTable.tsx
import React from 'react';
import styled from 'styled-components';

type ResultTableProps = {
  data: {
    [key: string]: string | number;
  }[];
};

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;

  th,
  td {
    padding: 8px;
    text-align: left;
    border-bottom: 1px solid #ddd;
  }

  th {
    background-color: #f2f2f2;
  }

  tr:hover {
    background-color: #f5f5f5;
  }
`;

const ResultTable: React.FC<ResultTableProps> = ({ data }) => {
  if (!data || data.length === 0) {
    return <p>No data available.</p>;
  }

  const headers = Object.keys(data[0]);

  return (
    <Table>
      <thead>
        <tr>
          {headers.map((header, index) => (
            <th key={index}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {headers.map((header, cellIndex) => (
              <td key={cellIndex}>{row[header]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

// Sample data for demonstration
const sampleData = [
  {
    支出: '550',
    不課税支出: '不課税支出',
    収益的支出: '収益的支出',
    '3': '3',
    不課税: '不課税',
    '1137466': '1137466',
  },
  {
    支出: '551',
    不課税支出: '不課税支出',
    収益的支出: '収益的支出',
    '3': '3',
    不課税: '不課税',
    '21300c': '21300c',
  },
  // Add more sample data objects as needed
];

const App: React.FC = () => {
  return (
    <div>
      <h1>Result Table</h1>
      <ResultTable data={sampleData} />
    </div>
  );
};

export default App;