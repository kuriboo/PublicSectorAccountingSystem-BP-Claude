import React from 'react';
import styled from 'styled-components';

// アセットマネジメントのデータ型定義
type AssetManagement = {
  code: string;
  name: string;
  dateOfEstablishment: string;
}

type Props = {
  assetManagements: AssetManagement[];
}

// コンポーネントのスタイリング
const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  
  th, td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
  }

  th {
    background-color: #f2f2f2;
  }

  @media screen and (max-width: 600px) {
    font-size: 0.8rem;
  }
`;

// アセットマネジメント一覧コンポーネント
const AssetManagementList: React.FC<Props> = ({ assetManagements }) => {
  // プロパティが空の場合は空配列とする
  const safeAssetManagements = assetManagements || [];

  return (
    <Table>
      <thead>
        <tr>
          <th>コード</th>
          <th>名称</th>
          <th>設定日付</th>
        </tr>
      </thead>
      <tbody>
        {safeAssetManagements.map((data, index) => (
          <tr key={index}>
            <td>{data.code}</td>
            <td>{data.name}</td>
            <td>{data.dateOfEstablishment}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default AssetManagementList;

// 使用例
const sampleData: AssetManagement[] = [
  { code: '020101', name: '大和コード', dateOfEstablishment: '(標準用)お勧め' },
  { code: '020104', name: '時間積立全重要低コード', dateOfEstablishment: '(標準用)お勧め' },
  { code: '020201', name: '朝日証書全重要低コード', dateOfEstablishment: '(管理用)お勧め' },
  { code: '100101', name: '東京汐留コード', dateOfEstablishment: '(標準用)お勧め' },
];

const App: React.FC = () => {
  return (
    <div>
      <h1>アセットマネジメント一覧</h1>
      <AssetManagementList assetManagements={sampleData} />
    </div>
  );
};