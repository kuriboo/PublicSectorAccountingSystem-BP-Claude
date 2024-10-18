import React from 'react';
import styled from '@emotion/styled';

type MyTagSeriesProps = {
  data: {
    項目: string;
    金額1: number;
    金額2: number;
    金額3: number;
    金額4: number;
  }[];
};

const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  th, td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: right;
  }
  th {
    background-color: #f2f2f2;
  }
`;

const MyTagSeries: React.FC<MyTagSeriesProps> = ({ data }) => {
  return (
    <Table>
      <thead>
        <tr>
          <th>項目</th>
          <th>金額1</th>
          <th>金額2</th>
          <th>金額3</th>
          <th>金額4</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.項目}</td>
            <td>{item.金額1 ?? '-'}</td>
            <td>{item.金額2 ?? '-'}</td>
            <td>{item.金額3 ?? '-'}</td>
            <td>{item.金額4 ?? '-'}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

// サンプルデータ
const sampleData = [
  {
    項目: '当年度予算',
    金額1: 875850450,
    金額2: 254050,
    金額3: 2541050,
    金額4: 841050,
  },
  {
    項目: '当年度実績見込',
    金額1: 705417500,
    金額2: 157500,
    金額3: 851500,
    金額4: 705500,
  },
  {
    項目: '当年度補正見積',
    金額1: 541151500,
    金額2: 157500,
    金額3: 785050,
    金額4: 0,
  },
  {
    項目: '前年度実績',
    金額1: 0,
    金額2: 0,
    金額3: 0,
    金額4: 0,
  },
];

const App: React.FC = () => {
  return (
    <div>
      <h1>My Tag Series</h1>
      <MyTagSeries data={sampleData} />
    </div>
  );
};

export default App;