import React from 'react';
import styled from '@emotion/styled';

// 建設業データの型定義
type ConstructionData = {
  number: string;
  name: string;
  representative: string;
  capital: string;
  address: string;
};

// テーブルのプロパティ型定義
type TableProps = {
  data: ConstructionData[];
};

// テーブルのスタイル定義
const TableWrapper = styled.div`
  overflow-x: auto;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  
  th, td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: left;
  }

  th {
    background-color: #f2f2f2;
  }

  @media (max-width: 600px) {
    th, td {
      display: block;
      width: 100%;
    }
  }
`;

// テーブルコンポーネント
const ConstructionTable: React.FC<TableProps> = ({ data }) => {
  return (
    <TableWrapper>
      <Table>
        <thead>
          <tr>
            <th>業者コード</th>
            <th>構成業者名</th>
            <th>代表者名</th>
            <th>資本金</th>
            <th>業種</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.number}</td>
              <td>{item.name || '-'}</td>
              <td>{item.representative || '-'}</td>
              <td>{item.capital || '-'}</td>
              <td>{item.address || '-'}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </TableWrapper>
  );
};

// サンプルデータ
const sampleData: ConstructionData[] = [
  {
    number: '0000000001',
    name: '大規模広範囲JV（JV業者）・特定工事企業',
    representative: '',
    capital: '',
    address: '*',
  },
];

// 使用例
const App: React.FC = () => {
  return (
    <div>
      <h1>JV構成業者</h1>
      <ConstructionTable data={sampleData} />
    </div>
  );
};

export default App;