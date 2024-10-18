import React from 'react';
import styled from '@emotion/styled';

type Data = {
  year: number;
  type: string;
  values: (string | number)[];
}

type TableProps = {
  data: Data[];
}

const Table = ({ data }: TableProps) => {
  // ヘッダー行の生成
  const headerRow = data[0]?.values.map((_, index) => (
    <th key={index}>{index}</th>
  ));

  // データ行の生成
  const dataRows = data.map((row, rowIndex) => (
    <tr key={rowIndex}>
      <td>{row.year}</td>
      <td>{row.type}</td>
      {row.values.map((value, colIndex) => (
        <td key={colIndex}>{value}</td>
      ))}
    </tr>
  ));

  return (
    <StyledTable>
      <thead>
        <tr>
          <th>Year</th>
          <th>Type</th>
          {headerRow}
        </tr>
      </thead>
      <tbody>
        {dataRows}
      </tbody>
    </StyledTable>
  );
}

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  
  th, td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: center;
  }

  th {
    background-color: #f2f2f2;
  }

  @media (max-width: 600px) {
    font-size: 12px;
  }
`;

// サンプルデータ
const sampleData: Data[] = [
  {
    year: 2018,
    type: '予算',
    values: ['001', '01', '01', '01', '0001', '0002']
  },
  {
    year: 2018,
    type: '決算',
    values: ['001', '01', '01', '-', '0001', '0002']
  },
  // ...
];

const App = () => {
  return (
    <div>
      <h1>Data Table</h1>
      <Table data={sampleData} />
    </div>
  );  
}

export default App;