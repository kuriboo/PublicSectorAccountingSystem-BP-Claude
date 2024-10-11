import React from 'react';
import styled from 'styled-components';

// 給付種類テーブルの型定義
type BenefitType = {
  code: string;
  name: string;
  point: number;
  limit: number;
};

// 給付種類テーブルのプロパティ型定義
type BenefitTableProps = {
  benefitTypes: BenefitType[];
};

// 給付種類テーブルコンポーネント
const BenefitTable: React.FC<BenefitTableProps> = ({ benefitTypes }) => {
  return (
    <Table>
      <thead>
        <tr>
          <th>業務</th>
          <th>コード</th>
          <th>点数下限(から)</th>
          <th>点数上限(まで)</th>
        </tr>
      </thead>
      <tbody>
        {benefitTypes.map((type) => (
          <tr key={type.code}>
            <td>{type.name}</td>
            <td>{type.code}</td>
            <td>{type.point}</td>
            <td>{type.limit}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

// コンポーネント内のスタイリング
const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  th,
  td {
    padding: 8px;
    text-align: left;
    border-bottom: 1px solid #ddd;
  }

  th {
    background-color: #f2f2f2;
  }

  @media (max-width: 600px) {
    font-size: 12px;
  }
`;

// サンプルデータ
const sampleData: BenefitType[] = [
  { code: '001', name: '土木一式工事', point: 0, limit: 99999 },
  { code: '006', name: '建築一式工事', point: 0, limit: 99999 },
  // 他のサンプルデータを追加...
];

// 使用例
const App: React.FC = () => {
  return (
    <div>
      <h1>給付種類テーブル</h1>
      <BenefitTable benefitTypes={sampleData} />
    </div>
  );
};

export default App;