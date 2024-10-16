import React from 'react';

import { FC } from 'react';
import styled from '@emotion/styled';

// 流用元データの型定義
type OriginalData = {
  節: string;
  細節: string;
  明細: string;
  予算所属: string;
  金額: number;
  予算残額: number;
}

// コンポーネントのProps型定義
type TableProps = {
  title: string;
  fiscalYear: number;
  originalBudgetDate: string;
  revisedBudgetDate: string;
  accountClassification: string;
  originalData: OriginalData[];
  revisedData: OriginalData[];
}

// テーブルのスタイル定義
const TableWrapper = styled.div`
  overflow-x: auto;
`;

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
`;

// コンポーネントの実装
const BudgetTable: FC<TableProps> = ({
  title,
  fiscalYear,
  originalBudgetDate,
  revisedBudgetDate,
  accountClassification,
  originalData,
  revisedData
}) => {
  return (
    <TableWrapper>
      <h2>{title}</h2>
      <p>令和{fiscalYear}年度</p>
      <p>流用元用番号 4</p>
      <p>流用元用日 令和{originalBudgetDate}</p>
      <p>流用元用区分 {accountClassification}</p>
      <p>起案所属 {originalData[0]?.予算所属 ?? '-'}</p>
      <p>起案者 {originalData[0]?.明細 ?? '-'}</p>
      <p>摘要 {originalData[0]?.細節 ?? '-'}</p>

      <h3>増額科目</h3>
      <Table>
        <thead>
          <tr>
            <th>節</th>
            <th>細節</th>
            <th>明細</th>
            <th>予算所属</th>
            <th>金額</th>
            <th>予算残額</th>
          </tr>
        </thead>
        <tbody>
          {originalData.map((item, index) => (
            <tr key={index}>
              <td>{item.節}</td>
              <td>{item.細節}</td>
              <td>{item.明細}</td>
              <td>{item.予算所属}</td>
              <td>{item.金額.toLocaleString()}</td>
              <td>{item.予算残額.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      <h3>減額科目</h3>
      <Table>
        <thead>
          <tr>
            <th>節</th>
            <th>細節</th>
            <th>明細</th>
            <th>予算所属</th>
            <th>金額</th>
            <th>予算残額</th>
          </tr>
        </thead>
        <tbody>
          {revisedData.map((item, index) => (
            <tr key={index}>
              <td>{item.節}</td>
              <td>{item.細節}</td>
              <td>{item.明細}</td>
              <td>{item.予算所属}</td>
              <td>{item.金額.toLocaleString()}</td>
              <td>{item.予算残額.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </TableWrapper>
  );
}

// サンプルデータ
const originalDataSample: OriginalData[] = [
  {
    節: '連絡・計測',
    細節: '連絡・計測',
    明細: '連絡・印刷費',
    予算所属: '水道課主管',
    金額: 100000,
    予算残額: 3945800,
  }
];

const revisedDataSample: OriginalData[] = [
  {
    節: '連絡・手当',
    細節: '連絡・扶養手当',
    明細: '連絡・扶養手当',
    予算所属: '水道課主管',
    金額: 300000,
    予算残額: -2535982,
  }  
];

// 使用例
const BudgetTableExample: FC = () => {
  return (
    <BudgetTable 
      title="流用元用総括"
      fiscalYear={5}
      originalBudgetDate="11月24日"
      revisedBudgetDate="流用"
      accountClassification="最高補佐"
      originalData={originalDataSample}
      revisedData={revisedDataSample}
    />
  );
}

export default BudgetTableExample;