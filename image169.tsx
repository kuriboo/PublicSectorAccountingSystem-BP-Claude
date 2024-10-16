import React from 'react';
import styled from 'styled-components';

// APIレスポンスの型定義
type ApiResponse = {
  id: number;
  name: string;
  value: string;
};

// コンポーネントのプロパティ型定義
type Props = {
  data: ApiResponse[];
};

// スタイル定義
const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  
  th, td {
    padding: 8px;
    text-align: left;
    border-bottom: 1px solid #ddd;
  }

  th {
    background-color: #f2f2f2;
  }

  @media screen and (max-width: 600px) {
    th, td {
      display: block;
      width: 100%;
    }
  }
`;

const ApiResponseTable: React.FC<Props> = ({ data }) => {
  // データが空の場合の処理
  if (!data || data.length === 0) {
    return <p>No data available</p>;
  }

  return (
    <Table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.value}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default ApiResponseTable;

// 使用例
const sampleData: ApiResponse[] = [
  { id: 1, name: 'AP1', value: '-char' },
  { id: 2, name: 'AP2', value: '-char' },
  { id: 3, name: 'AP3', value: '-number' },
  { id: 4, name: 'AP4', value: '-char' },
  { id: 5, name: 'AP5', value: '-number' },
  { id: 6, name: 'AP6', value: '-char' },
  { id: 7, name: 'AP7', value: '-char' },
];

const App: React.FC = () => {
  return (
    <div>
      <h1>API Response Table</h1>
      <ApiResponseTable data={sampleData} />
    </div>
  );
};