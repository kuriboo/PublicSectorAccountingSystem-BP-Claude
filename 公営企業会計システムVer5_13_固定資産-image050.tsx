import React from 'react';
import styled from '@emotion/styled';

type YosanSummaryProps = {
  nenkanYosanCount: number;
  updatedInfo: string;
  totalYosan: number;
};

const YosanSummaryContainer = styled.div`
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 5px;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  box-sizing: border-box;

  @media (max-width: 600px) {
    padding: 10px;
  }
`;

const Title = styled.h2`
  margin-bottom: 20px;
  font-size: 20px;

  @media (max-width: 600px) {
    font-size: 18px;
  }
`;

const Table = styled.table`
  width: 100%;
  margin-bottom: 20px;
  border-collapse: collapse;

  th, td {
    padding: 10px;
    text-align: left;
    border-bottom: 1px solid #ccc;
  }

  th {
    background-color: #f9f9f9;
    font-weight: bold;
  }
`;

const UpdateInfo = styled.div`
  margin-bottom: 20px;
  font-size: 14px;
  color: #666;
`;

const TotalYosan = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

const YosanSummary: React.FC<YosanSummaryProps> = ({ nenkanYosanCount, updatedInfo, totalYosan }) => {
  return (
    <YosanSummaryContainer>
      <Title>予測精算計算</Title>
      <UpdateInfo>行政市水道事業会計 総務課 予算・会計担当 ぎょうせい太郎 平成29年09月13日</UpdateInfo>
      <Table>
        <thead>
          <tr>
            <th>期間年月</th>
            <th>更新件数</th>
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: nenkanYosanCount }, (_, i) => (
            <tr key={i}>
              <td>2019年{i + 1}月</td>
              <td>6328</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <TotalYosan>更新総件数: {totalYosan.toLocaleString()}</TotalYosan>
    </YosanSummaryContainer>
  );
};

// Usage example
const App: React.FC = () => {
  return (
    <div>
      <YosanSummary 
        nenkanYosanCount={2}
        updatedInfo="2年目まで精算計算されました。"
        totalYosan={12656}
      />
    </div>
  );
}

export default App;