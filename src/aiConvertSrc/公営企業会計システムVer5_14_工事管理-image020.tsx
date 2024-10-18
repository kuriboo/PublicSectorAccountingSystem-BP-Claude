import React from 'react';
import styled from 'styled-components';

// 工事明細データの型定義
type ConstructionDetail = {
  work: string;
  content: string;
  material: string;
  unit: string;
  quantity: number;
  unitPrice: number;
  amount: number;
};

// ConstructionDetailsTableコンポーネントのプロパティの型定義
type ConstructionDetailsTableProps = {
  details: ConstructionDetail[];
};

// テーブル全体のスタイル
const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;

  th, td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: center;
  }

  th {
    background-color: #f0f0f0;
  }
`;

// 工事明細テーブルコンポーネント
const ConstructionDetailsTable: React.FC<ConstructionDetailsTableProps> = ({ details }) => {
  // 工事明細データが空の場合の処理
  if (!details.length) {
    return <p>工事明細データがありません。</p>;
  }

  return (
    <Table>
      <thead>
        <tr>
          <th>工種</th>
          <th>種別区分</th>
          <th>材料名称</th>
          <th>規格名称</th>
          <th>数量</th>
          <th>単位</th>
          <th>金額</th>
        </tr>
      </thead>
      <tbody>
        {details.map((detail, index) => (
          <tr key={index}>
            <td>{detail.work}</td>
            <td>{detail.content}</td>
            <td>{detail.material}</td>
            <td>{detail.unit}</td>
            <td>{detail.quantity}</td>
            <td>{detail.unitPrice}</td>
            <td>{detail.amount}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

// サンプルデータ
const sampleData: ConstructionDetail[] = [
  {
    work: '配水管布設工事',
    content: '布設',
    material: 'DIP(A1)鋳鉄管',
    unit: 'φ100',
    quantity: 100.0,
    unitPrice: 10000,
    amount: 1000000,
  },
  // 他のデータを追加...
];

// 使用例
const App: React.FC = () => {
  return (
    <div>
      <h1>工事材料明細書</h1>
      <ConstructionDetailsTable details={sampleData} />
    </div>
  );
};

export default App;