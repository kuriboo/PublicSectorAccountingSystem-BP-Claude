import React from 'react';
import styled from 'styled-components';

// 予算査定一覧表のプロパティ型定義
type BudgetTableProps = {
  year: number; // 年度
  department: string; // 部署
  amountRequested: number; // 要求額
  amountApproved: number; // 査定額
  purpose: string; // 予算目的
  accountTitle: string; // 勘定科目
  level: string; // 査定レベル（A, B, C等）
  note: string; // 備考
};

// 予算査定一覧表のスタイル
const BudgetTable = styled.table`
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
    th, td {
      display: block;
      width: 100%;
    }
    th {
      text-align: center;
    }
  }
`;

// 予算査定一覧表のコンポーネント
const BudgetTableComponent: React.FC<BudgetTableProps> = ({
  year,
  department,
  amountRequested,
  amountApproved,
  purpose,
  accountTitle,
  level,
  note
}) => {
  return (
    <BudgetTable>
      <thead>
        <tr>
          <th>年度</th>
          <th>部署</th>
          <th>要求額</th>
          <th>査定額</th>
          <th>予算目的</th>
          <th>勘定科目</th>
          <th>査定レベル</th>
          <th>備考</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{year || '-'}</td>
          <td>{department || '-'}</td>
          <td>{amountRequested || 0}</td>
          <td>{amountApproved || 0}</td>
          <td>{purpose || '-'}</td>
          <td>{accountTitle || '-'}</td>
          <td>{level || '-'}</td>
          <td>{note || '-'}</td>
        </tr>
      </tbody>
    </BudgetTable>
  );
};

// サンプルデータを使用した表示例
const SampleBudgetTable = () => {
  const sampleData: BudgetTableProps = {
    year: 2023,
    department: '経理部',
    amountRequested: 1000000,
    amountApproved: 800000,
    purpose: '新規システム開発',
    accountTitle: 'ソフトウェア開発費',
    level: 'A',
    note: '重要プロジェクトのため優先的に予算確保'
  };

  return (
    <BudgetTableComponent 
      year={sampleData.year}
      department={sampleData.department}
      amountRequested={sampleData.amountRequested}
      amountApproved={sampleData.amountApproved}
      purpose={sampleData.purpose}
      accountTitle={sampleData.accountTitle}
      level={sampleData.level}
      note={sampleData.note}
    />
  );
};

export default SampleBudgetTable;