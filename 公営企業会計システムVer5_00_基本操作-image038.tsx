import React from 'react';
import styled from '@emotion/styled';

type TaxTableProps = {
  data: {
    date: string;
    personalIncomeTax: number;
    corporateTax: number;
    foodExpenses: number;
    alcoholTax: number;
    totalTax: number;
  }[];
};

const TaxTable: React.FC<TaxTableProps> = ({ data }) => {
  return (
    <TableWrapper>
      <Table>
        <thead>
          <tr>
            <th>明細種集</th>
            <th>行削除</th>
            <th>税</th>
            <th>負担額</th>
            <th>消費税額</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.date}</td>
              <td>{row.personalIncomeTax.toLocaleString()}</td>
              <td>{row.corporateTax.toLocaleString()}</td>
              <td>{row.foodExpenses.toLocaleString()}</td>
              <td>{row.alcoholTax.toLocaleString()}</td>
            </tr>
          ))}
          <tr>
            <td colSpan={4}>消費税額</td>
            <td>{data.reduce((sum, row) => sum + row.totalTax, 0).toLocaleString()}</td>
          </tr>
        </tbody>
      </Table>
    </TableWrapper>
  );
};

// Styling with CSS-in-JS
const TableWrapper = styled.div`
  overflow-x: auto;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  th, td {
    padding: 8px;
    text-align: right;
    border: 1px solid #ddd;
  }

  th {
    background-color: #f2f2f2;
  }

  @media (max-width: 600px) {
    font-size: 12px;
  }
`;

// Sample usage of the TaxTable component
const SampleUsage: React.FC = () => {
  const sampleData = [
    {
      date: '事務用消耗品',
      personalIncomeTax: 28808,
      corporateTax: 事務用備品,
      foodExpenses: 課税,
      alcoholTax: 28808,
      totalTax: 1708
    },
    // Add more sample data as needed
  ];

  return (
    <div>
      <h2>Sample Tax Table</h2>
      <TaxTable data={sampleData} />
    </div>
  );
};

export default TaxTable;