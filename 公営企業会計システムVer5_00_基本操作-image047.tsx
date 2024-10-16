import React from 'react';
import styled from 'styled-components';

// 組織構造を表すデータ型
interface OrganizationData {
  name: string;
  children?: OrganizationData[];
}

// コンポーネントのプロパティ型
interface OrganizationChartProps {
  data: OrganizationData;
}

// 組織図のコンポーネント
const OrganizationChart: React.FC<OrganizationChartProps> = ({ data }) => {
  return (
    <ChartContainer>
      <ChartTitle>{data.name}</ChartTitle>
      <ChartContent>
        {data.children?.map((child, index) => (
          <OrganizationChart key={index} data={child} />
        ))}
      </ChartContent>
    </ChartContainer>
  );
};

// 組織図のスタイル
const ChartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

const ChartTitle = styled.div`
  background-color: #f0f0f0;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 10px;
`;

const ChartContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

// 使用例
const App: React.FC = () => {
  // サンプルデータ
  const sampleData: OrganizationData = {
    name: '製造',
    children: [
      {
        name: '一般',
        children: [
          { name: '平成支店業務1課' },
          { name: '支払手配業務1課' },
          { name: '支払検収課' },
          { name: '相手先情報課' },
        ],
      },
      {
        name: '基幹',
        children: [
          { name: '都立・JR発注管理課' },
          { name: '受注・見積業務1課' },
        ],
      },
      {
        name: 'CSV出力',
      },
    ],
  };

  return (
    <div>
      <h1>組織図</h1>
      <OrganizationChart data={sampleData} />
    </div>
  );
};

export default App;