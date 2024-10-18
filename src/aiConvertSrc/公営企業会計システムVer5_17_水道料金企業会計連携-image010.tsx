import React from 'react';
import styled from '@emotion/styled';

type DivisionData = {
  code: string;
  name: string;
};

type DivisionMasterProps = {
  data: DivisionData[];
};

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
`;

const DivisionMaster: React.FC<DivisionMasterProps> = ({ data }) => {
  // 空の配列が渡された場合の例外処理
  if (!data || data.length === 0) {
    return <div>No data available</div>;
  }

  return (
    <Table>
      <thead>
        <tr>
          <th>地区CD</th>
          <th>地区名称</th>
          <th>事業区分CD</th>
          <th>事業区分名称</th>
        </tr>
      </thead>
      <tbody>
        {data.map((division, index) => (
          <tr key={index}>
            <td>{division.code}</td>
            <td>{division.name}</td>
            <td>{`00${index}`}</td>
            <td>さょうせい地区</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

// サンプルデータを用いた使用例
const SampleData: DivisionData[] = [
  { code: '00', name: '上水道' },
  { code: '11', name: '簡水(1)' },
  { code: '12', name: '簡水(2)' },
  { code: '13', name: '簡水(3)' },
  { code: '14', name: '簡水(4)' },
  { code: '15', name: '簡水(5)' },
  { code: '16', name: '簡水(6)' },
];

const App: React.FC = () => {
  return (
    <div>
      <h1>区分内容マスタ保守</h1>
      <DivisionMaster data={SampleData} />
    </div>
  );
};

export default App;