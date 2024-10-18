import React from 'react';
import styled from '@emotion/styled';

type FinancialFixedAssetMasterProps = {
  data: {
    assetName: string;
    acquisitionDate: string;
    acquisitionAmount: number;
    currentDepreciation: number;
    currentBookValue: number;
    depreciationStartDate: string;
    usefulLife: number;
    depreciationEndDate: string;
    depreciationAmount: number;
    accumulatedDepreciation: number;
  }[];
};

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  th,
  td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: right;
  }
  th {
    background-color: #f2f2f2;
  }
`;

const FinancialFixedAssetMaster: React.FC<FinancialFixedAssetMasterProps> = ({ data }) => {
  if (!data || data.length === 0) {
    return <div>No data available</div>;
  }

  return (
    <Table>
      <thead>
        <tr>
          <th>資産名</th>
          <th>取得日</th>
          <th>取得金額</th>
          <th>当期償却額</th>
          <th>当期末帳簿価額</th>
          <th>償却開始日</th>
          <th>耐用年数</th>
          <th>償却終了日</th>
          <th>償却限度額</th>
          <th>償却累計額</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.assetName}</td>
            <td>{item.acquisitionDate}</td>
            <td>{item.acquisitionAmount.toLocaleString()}</td>
            <td>{item.currentDepreciation.toLocaleString()}</td>
            <td>{item.currentBookValue.toLocaleString()}</td>
            <td>{item.depreciationStartDate}</td>
            <td>{item.usefulLife}</td>
            <td>{item.depreciationEndDate}</td>
            <td>{item.depreciationAmount.toLocaleString()}</td>
            <td>{item.accumulatedDepreciation.toLocaleString()}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

// Usage example
const sampleData = [
  {
    assetName: '自己財源',
    acquisitionDate: '',
    acquisitionAmount: 5000000,
    currentDepreciation: 0,
    currentBookValue: 5000000,
    depreciationStartDate: '',
    usefulLife: 0,
    depreciationEndDate: '',
    depreciationAmount: 0,
    accumulatedDepreciation: 0,
  },
];

const App: React.FC = () => {
  return (
    <div>
      <h2>財源別固定資産累計マスタ</h2>
      <FinancialFixedAssetMaster data={sampleData} />
    </div>
  );
};

export default App;