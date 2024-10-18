import React from 'react';
import styled from 'styled-components';

// 電子決裁状況の型定義
type ElectronicApprovalStatus = {
  number: string;
  name: string;
  approvalDate: string;
  daysUsed: number;
  destination: string;
  purpose: string;
  travelExpenses: number;
  remarks: string;
  needsApproval: boolean;
};

// 電子決裁状況コンポーネントのプロパティ型定義
type ElectronicApprovalStatusTableProps = {
  approvalStatuses: ElectronicApprovalStatus[];
};

// 電子決裁状況テーブルのスタイル定義
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

  @media (max-width: 600px) {
    font-size: 12px;
  }
`;

// 電子決裁状況コンポーネント
const ElectronicApprovalStatusTable: React.FC<ElectronicApprovalStatusTableProps> = ({ approvalStatuses }) => {
  return (
    <Table>
      <thead>
        <tr>
          <th>番号</th>
          <th>氏名</th>
          <th>承認日</th>
          <th>使用日数</th>
          <th>伝票区分</th>
          <th>伝票No</th>
          <th>摘要</th>
          <th>交通費</th>
          <th>人力確認</th>
        </tr>
      </thead>
      <tbody>
        {approvalStatuses.map((status, index) => (
          <tr key={index}>
            <td>{status.number || '-'}</td>
            <td>{status.name || '-'}</td>
            <td>{status.approvalDate || '-'}</td>
            <td>{status.daysUsed || '-'}</td>
            <td>{status.destination || '-'}</td>
            <td>{status.purpose || '-'}</td>
            <td>{status.travelExpenses > 0 ? status.travelExpenses.toLocaleString() : '-'}</td>
            <td>{status.remarks || '-'}</td>
            <td>{status.needsApproval ? '済' : '未'}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

// サンプルデータ
const sampleData: ElectronicApprovalStatus[] = [
  {
    number: '1',
    name: '清水 太郎',
    approvalDate: '02/03/12', 
    daysUsed: 10,
    destination: '関西',
    purpose: '月分簡易水道使用料請求書',
    travelExpenses: 129,
    remarks: '済',
    needsApproval: true,
  },
  // 他のサンプルデータ...
];

// 使用例
const ApprovalStatusExample: React.FC = () => {
  return (
    <div>
      <h2>電子決裁状況</h2>
      <ElectronicApprovalStatusTable approvalStatuses={sampleData} />
    </div>
  );
};

export default ApprovalStatusExample;