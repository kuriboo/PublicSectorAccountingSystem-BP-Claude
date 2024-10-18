import React from 'react';
import styled from '@emotion/styled';

type ProcessFlowProps = {
  title?: string;
};

const ProcessFlow: React.FC<ProcessFlowProps> = ({ title = '決算' }) => {
  return (
    <ProcessFlowWrapper>
      <Title>{title}</Title>
      <FlowChart>
        <FlowItem>
          <FlowItemTitle>消費税準備</FlowItemTitle>
          <FlowItemContent>
            <FlowItemContentItem>消費税処理マスタ</FlowItemContentItem>
          </FlowItemContent>
        </FlowItem>
        <FlowArrow />
        <FlowItem>
          <FlowItemTitle>収入区分の設定（個別対応方式の場合）</FlowItemTitle>
          <FlowItemContent>
            <FlowItemContentItem>収入区分一括修正入力</FlowItemContentItem>
            <FlowItemContentItem>収入区分個別修正入力</FlowItemContentItem>
          </FlowItemContent>
        </FlowItem>
        <FlowArrow />
        <FlowItem>
          <FlowItemTitle>特定収入項目マスタ</FlowItemTitle>
          <FlowItemContent>
            <FlowItemContentItem>振替・収入区票収入区分入力</FlowItemContentItem>
          </FlowItemContent>
        </FlowItem>
      </FlowChart>
    </ProcessFlowWrapper>
  );
};

const ProcessFlowWrapper = styled.div`
  background-color: #f0f0f0;
  padding: 16px;
  border-radius: 4px;
`;

const Title = styled.h2`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 16px;
`;

const FlowChart = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const FlowItem = styled.div`
  background-color: white;
  border-radius: 4px;
  padding: 16px;
  width: 30%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const FlowItemTitle = styled.h3`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 8px;
`;

const FlowItemContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const FlowItemContentItem = styled.div`
  font-size: 14px;
  margin-bottom: 4px;
`;

const FlowArrow = styled.div`
  width: 0;
  height: 0;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  border-left: 10px solid #ccc;
  margin: 0 8px;
`;

// Usage example
const App: React.FC = () => {
  return (
    <div>
      <ProcessFlow />
      <ProcessFlow title="Custom Title" />
    </div>
  );
};

export default App;