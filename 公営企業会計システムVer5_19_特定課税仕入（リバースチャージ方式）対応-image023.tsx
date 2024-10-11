import React from 'react';
import styled from 'styled-components';

// Define types for component props
interface TableData {
  col1: string;
  col2: number;
  col3: number;
  col4: number;
  col5: number;
}

interface TableProps {
  data: TableData[];
}

// Define styled components
const TableContainer = styled.div`
  overflow-x: auto;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;

  th, td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: right;
  }

  th {
    background-color: #f2f2f2;
  }

  tr:nth-child(even) {
    background-color: #f9f9f9;
  }

  @media screen and (max-width: 600px) {
    font-size: 12px;
  }
`;

// Define main component
const FinancialTable: React.FC<TableProps> = ({ data }) => {
  // Calculate totals for each column
  const totals = data.reduce((acc, curr) => {
    return {
      col2: acc.col2 + curr.col2,
      col3: acc.col3 + curr.col3, 
      col4: acc.col4 + curr.col4,
      col5: acc.col5 + curr.col5,
    };
  }, { col2: 0, col3: 0, col4: 0, col5: 0 });

  return (
    <TableContainer>
      <Table>
        <thead>
          <tr>
            <th>項目</th>
            <th>税率3%運用分</th>
            <th>税率4%運用分</th>
            <th>税率6.3%運用分</th>
            <th>合計(A+B+C)</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.col1}</td>
              <td>{row.col2.toLocaleString()}</td>
              <td>{row.col3.toLocaleString()}</td>
              <td>{row.col4.toLocaleString()}</td>
              <td>{row.col5.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td>合計</td>
            <td>{totals.col2.toLocaleString()}</td>
            <td>{totals.col3.toLocaleString()}</td>
            <td>{totals.col4.toLocaleString()}</td>
            <td>{totals.col5.toLocaleString()}</td>
          </tr>
        </tfoot>
      </Table>
    </TableContainer>
  );
};

// Example usage with sample data
const sampleData: TableData[] = [
  { col1: '税率別運用額', col2: 1000000, col3: 196000, col4: 6464295000, col5: 6465491000 },
  { col1: '基礎年金拠出金', col3: 7828, col4: 407182917, col5: 407190745 },
  { col1: '基礎年金交付金', col5: 80000 },
  { col1: '特別保険料 ', col2: 30000, col5: 30000 },
  { col1: '保険料収入額', col2: 1000000, col3: 196114, col4: 6464215062, col5: 6465411176 },
  { col1: '運用収入額', col2: 20000, col4: 295878468, col5: 295898468 },
  { col1: '年金給付金', col3: 1820557, col4: 295295327, col5: 297115884 },
  { col1: '年金管理費', col5: 1512 },
  { col1: '支払利息', col5: 1512 },
];

const SampleUsage: React.FC = () => {
  return (
    <div>
      <h2>財政状態表</h2>
      <FinancialTable data={sampleData} />
    </div>
  );
};

export default SampleUsage;