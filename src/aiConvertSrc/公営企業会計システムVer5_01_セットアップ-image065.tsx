import React from 'react';
import styled from 'styled-components';

// 資金残高金融機関マスタの型定義
type FinancialInstitutionMaster = {
  id: string;
  name: string;
}

// FinancialInstitutionMasterTableコンポーネントのプロパティ型定義
type FinancialInstitutionMasterTableProps = {
  data: FinancialInstitutionMaster[];
}

// テーブルのスタイル定義
const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;

  th, td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: left;
  }

  th {
    background-color: #f0f0f0;
    font-weight: bold;
  }

  @media screen and (max-width: 600px) {
    font-size: 12px;
  }
`;

// FinancialInstitutionMasterTableコンポーネント
const FinancialInstitutionMasterTable: React.FC<FinancialInstitutionMasterTableProps> = ({ data }) => {
  // データが空の場合の処理
  if (!data || data.length === 0) {
    return <p>データがありません。</p>;
  }

  return (
    <Table>
      <thead>
        <tr>
          <th>コード</th>
          <th>名称</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default FinancialInstitutionMasterTable;

// 使用例
const sampleData: FinancialInstitutionMaster[] = [
  { id: '01', name: '○◎銀行' },
  { id: '02', name: 'つり銀小金庫' },
  { id: '03', name: '○○銀行○○市役所支店' },
  { id: '04', name: '○○○銀行' },
  { id: '05', name: '○○○○銀行' },
  { id: '06', name: '○○○○金庫' },
  { id: '07', name: '○○○○農業協同組合' },
  { id: '08', name: '○○○○信用組合' },
  { id: '09', name: '○○信用金庫' },
  { id: '10', name: '○銀行' },
  { id: '11', name: '○○信託銀行' },
  { id: '12', name: '○○○○組合' },
];

const App: React.FC = () => {
  return (
    <div>
      <h1>資金残高金融機関マスタ</h1>
      <FinancialInstitutionMasterTable data={sampleData} />
    </div>
  );
};