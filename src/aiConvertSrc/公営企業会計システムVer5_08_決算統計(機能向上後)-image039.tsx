import React from 'react';
import styled from '@emotion/styled';

type ReportItem = {
  code: string;
  name: string;
  details: string;
  currentAmount: number;
  previousAmount: number;
  amountChange: number;
  percentage: number;
};

type ReportProps = {
  period: string;
  department: string;
  reportItems: ReportItem[];
};

const ReportTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;

  th, td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: right;
  }

  th {
    background-color: #f0f0f0;
  }

  tr:nth-child(even) {
    background-color: #f9f9f9;
  }

  @media (max-width: 600px) {
    font-size: 12px;

    th, td {
      padding: 4px;
    }
  }
`;

const Report: React.FC<ReportProps> = ({ period, department, reportItems }) => {
  // レポートアイテムがない場合の例外処理
  if (!reportItems || reportItems.length === 0) {
    return <div>レポートデータがありません。</div>;
  }

  return (
    <div>
      <h2>{period} 決算統計数値保守</h2>
      <p>令和03年11月22日</p>
      <p>報告: {department}</p>
      
      <ReportTable>
        <thead>
          <tr>
            <th>コード</th>
            <th>項目名</th>
            <th>資料集計</th>
            <th>保守前集計額</th>
            <th>調整額</th>
            <th>保守後金額</th>
          </tr>
        </thead>
        <tbody>
          {reportItems.map((item, index) => (
            <tr key={index}>
              <td>{item.code}</td>
              <td>{item.name}</td>
              <td>{item.details}</td>
              <td>{item.previousAmount.toLocaleString()}</td>
              <td>{item.amountChange.toLocaleString()}</td>
              <td>{item.currentAmount.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </ReportTable>
    </div>
  );
};

// サンプルデータ
const sampleData: ReportProps = {
  period: '令和02年度',
  department: '公共下水道',
  reportItems: [
    {
      code: '1',
      name: '1総収益(B)+(C)+(G) (A)',
      details: '表内集計',
      currentAmount: 843578,
      previousAmount: 843578,
      amountChange: 0,
      percentage: 0
    },
    // 他のアイテムも同様に追加
  ]
};

const SampleReport = () => {
  return <Report {...sampleData} />;
};

export default SampleReport;