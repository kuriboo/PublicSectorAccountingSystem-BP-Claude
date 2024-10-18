import React from 'react';
import styled from 'styled-components';

// 工事種目分類の定義
type DivisionItem = {
  code: string;
  name: string;
};

// Propsの型定義
type DivisionTableProps = {
  divisions: DivisionItem[];
};

// テーブルのスタイル定義
const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  
  th, td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: center;
  }

  th {
    background-color: #f0f0f0;
  }

  @media screen and (max-width: 600px) {
    th, td {
      display: block;
      width: 100%;
    }
  }
`;

// 工事種目分類テーブルコンポーネント
const DivisionTable: React.FC<DivisionTableProps> = ({ divisions }) => {
  return (
    <Table>
      <thead>
        <tr>
          <th>工事種目コード</th>
          <th>工事種目名称</th>
          <th>積算基準名称</th>
          <th>単価コード</th>
          <th>積算基準金額</th>
          <th>数量</th>
          <th>単位</th>
        </tr>
      </thead>
      <tbody>
        {divisions.map((division, index) => (
          <tr key={index}>
            <td>{division.code}</td>
            <td>{division.name}</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

// サンプルデータ
const sampleData: DivisionItem[] = [
  { code: 'D01', name: '工事種目1' },
  { code: 'D02', name: '工事種目2' },
  { code: 'D03', name: '工事種目3' },
];

// サンプル表示用コンポーネント 
const SampleDivisionTable: React.FC = () => {
  return (
    <div>
      <h2>工事種目分類</h2>
      <DivisionTable divisions={sampleData} />
    </div>
  );
};

export default SampleDivisionTable;