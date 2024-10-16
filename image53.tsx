import React from 'react';
import styled from '@emotion/styled';

interface ResultData {
  連続従事単位: number;
  継続従属算定: number;
  特待算定: number;
  深夜算定: number;
  派遣算定: number;
  事業所用: number;
  営業費用: number;
  ○○事業: number;
  印刷製本費: number;
  電子書籍費: number;
  （損保）: number;
}

interface Props {
  data: ResultData[];
}

const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  
  th, td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: right;
  }

  th {
    background-color: #f2f2f2;
  }

  @media screen and (max-width: 600px) {
    font-size: 12px;

    th, td {
      padding: 4px;
    }
  }
`;

const ResultTable: React.FC<Props> = ({ data }) => {
  if (!data || data.length === 0) {
    return <div>No data available</div>;
  }

  return (
    <Table>
      <thead>
        <tr>
          <th>連続従事単位</th>
          <th>継続従属算定</th>
          <th>特待算定</th>
          <th>深夜算定</th>
          <th>派遣算定</th>
          <th>事業所用</th>
          <th>営業費用</th>
          <th>○○事業</th>
          <th>印刷製本費</th>
          <th>電子書籍費</th>
          <th>（損保）</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            <td>{row.連続従事単位}</td>
            <td>{row.継続従属算定}</td>
            <td>{row.特待算定}</td>
            <td>{row.深夜算定}</td>
            <td>{row.派遣算定}</td>
            <td>{row.事業所用}</td>
            <td>{row.営業費用}</td>
            <td>{row.○○事業}</td>
            <td>{row.印刷製本費}</td>
            <td>{row.電子書籍費}</td>
            <td>{row.（損保）}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

// Usage example
const sampleData: ResultData[] = [
  {
    連続従事単位: 2100000,
    継続従属算定: 2100000,
    特待算定: 2000000,
    深夜算定: 2000000,
    派遣算定: 100000,
    事業所用: 1000,
    営業費用: 1000,
    ○○事業: 1000,
    印刷製本費: 1000,
    電子書籍費: 1000,
    （損保）: 80
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