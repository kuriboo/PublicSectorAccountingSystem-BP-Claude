import React from 'react';
import styled from 'styled-components';

// 工事種別情報の型定義
interface ConstructionInfo {
  category: string;
  number: string;
  name: string;
  detail: string;
  zone: string;
}

// コンポーネントのプロパティの型定義
interface ConstructionTableProps {
  constructionData: ConstructionInfo[];
}

// テーブルのスタイル定義
const TableContainer = styled.div`
  overflow-x: auto;
`;

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
    
    th {
      text-align: center;
    }
  }
`;

// 工事種別情報テーブルコンポーネント
const ConstructionTable: React.FC<ConstructionTableProps> = ({ constructionData }) => {
  return (
    <TableContainer>
      <Table>
        <thead>
          <tr>
            <th>材料名称</th>
            <th>規格名称</th>
            <th>数量</th>
            <th>単位</th>
            <th>布設年度</th>
            <th>路線番号</th>
            <th>材料金額</th>
          </tr>
        </thead>
        <tbody>
          {constructionData.map((data, index) => (
            <tr key={index}>
              <td>{data.category}</td>
              <td>{data.number}</td>
              <td>{data.name}</td>
              <td>{data.detail}</td>
              <td>{data.zone}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </TableContainer>
  );
};

// サンプルデータ
const sampleData: ConstructionInfo[] = [
  {
    category: 'DIP(A1) 鋳鉄管',
    number: 'φ100',
    name: '',
    detail: '2.00 m',
    zone: '平成25年',
  },
];

// 使用例
const App: React.FC = () => {
  return (
    <div>
      <h2>工事種別情報</h2>
      <ConstructionTable constructionData={sampleData} />
    </div>
  );
};

export default App;