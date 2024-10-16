import React from 'react';
import styled from 'styled-components';

// 会計年度と各年度のコード定義
type FiscalYear = {
  [key: string]: string;
};

const fiscalYears: FiscalYear = {
  前年度: '前年度コード',
  当年度: '当年度コード',
  翌年度: '翌年度コード',
  '2年度': '2年度コード',
  '3年度': '3年度コード',
  '4年度': '4年度コード',
  '5年度': '5年度コード',
};

// コンポーネントのProps定義
interface FiscalYearTableProps {
  title?: string;
}

// スタイル定義
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

    th, td {
      padding: 6px;
    }
  }
`;

// メインコンポーネント
const FiscalYearTable: React.FC<FiscalYearTableProps> = ({ title = '会計年度(半角西暦)' }) => {
  return (
    <Table>
      <thead>
        <tr>
          <th>{title}</th>
          <th>名称</th>
        </tr>
      </thead>
      <tbody>
        {Object.entries(fiscalYears).map(([key, value]) => (
          <tr key={key}>
            <td>{key}</td>
            <td>{value}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

// サンプルデータを使用した表示用コンポーネント
const SampleFiscalYearTable: React.FC = () => {
  return (
    <div>
      <h2>会計年度一覧</h2>
      <FiscalYearTable />
    </div>
  );
};

export default FiscalYearTable;