import React from 'react';
import styled from '@emotion/styled';

// 工事種別を表すプロパティの型定義
type Construction = {
  period: string;
  summary: string;
};

// コンポーネントのプロパティの型定義
type FlowChartProps = {
  constructions: Construction[];
};

// 各要素のスタイル定義
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Box = styled.div`
  border: 1px solid black;
  padding: 16px;
  margin-bottom: 16px;
`;

const Arrow = styled.div`
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-top: 10px solid black;
  margin-bottom: 16px;
`;

const FlowChart: React.FC<FlowChartProps> = ({ constructions }) => {
  // 工事期間が空の場合は"-"を表示
  const formatPeriod = (period: string) => period || '-';

  return (
    <Container>
      <Box>決定行為(町入力) 工事町払</Box>
      <Arrow />
      <Box>全額振替</Box>
      {constructions.map((construction, index) => (
        <React.Fragment key={index}>
          <Box>
            工事町払<br />
            期間: {formatPeriod(construction.period)}
          </Box>
          <Arrow />
          <Box>
            機能工事町払<br />
            据替入力: {construction.summary}
          </Box>
          {index === constructions.length - 1 && (
            <>
              <Arrow />
              <Box>
                機能工事町払<br />
                据替入力
              </Box>
            </>
          )}
        </React.Fragment>
      ))}
      <Arrow />
      <Box>機能工事町払 据替入力</Box>
    </Container>
  );
};

// サンプルデータ
const sampleConstructions: Construction[] = [
  { period: '2023/04/01-2023/09/30', summary: '道路工事' },
  { period: '2023/10/01-2024/03/31', summary: '橋梁工事' },
];

// 使用例
const App: React.FC = () => {
  return (
    <div>
      <h1>工事フローチャート</h1>
      <FlowChart constructions={sampleConstructions} />
    </div>
  );
};

export default App;