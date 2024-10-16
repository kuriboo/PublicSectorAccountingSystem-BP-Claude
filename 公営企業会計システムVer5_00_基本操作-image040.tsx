// TaxTable.tsx
import React from 'react';
import styled from '@emotion/styled';

type TaxItem = {
  title: string;
  currentFY: number;
  previousFY: number;
};

type TaxTableProps = {
  data: TaxItem[];
};

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
    background-color: #f0f0f0;
    font-weight: bold;
  }

  tr:nth-of-type(even) {
    background-color: #f9f9f9;
  }

  @media (max-width: 600px) {
    font-size: 12px;
  }
`;

const TaxTable: React.FC<TaxTableProps> = ({ data }) => {
  if (!data || data.length === 0) {
    return <div>No data available.</div>;
  }

  const renderRows = () => {
    return data.map((item, index) => (
      <tr key={index}>
        <td>{item.title}</td>
        <td>{item.currentFY.toLocaleString()}</td>
        <td>{item.previousFY.toLocaleString()}</td>
      </tr>
    ));
  };

  return (
    <Table>
      <thead>
        <tr>
          <th>課税</th>
          <th>当期累計</th>
          <th>前期累計</th>
        </tr>
      </thead>
      <tbody>{renderRows()}</tbody>
    </Table>
  );
};

// サンプルデータとコンポーネントの使用例
const sampleData: TaxItem[] = [
  { title: '事務用消耗品', currentFY: 23866, previousFY: 1708 },
  { title: '作業用消耗品', currentFY: 201960, previousFY: 14960 },
];

const TaxTableExample: React.FC = () => {
  return (
    <div>
      <h2>課税情報</h2>
      <TaxTable data={sampleData} />
    </div>
  );
};

export default TaxTableExample;