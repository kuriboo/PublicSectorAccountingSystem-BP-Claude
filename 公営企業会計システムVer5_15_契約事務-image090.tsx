import React from 'react';
import styled from '@emotion/styled';

// 契約事務の流れを表すコンポーネントの型定義
type ContractFlowProps = {
  title?: string;
};

// 契約事務の流れを表すコンポーネント
const ContractFlow: React.FC<ContractFlowProps> = ({ title = '契約事務' }) => {
  return (
    <ContractFlowWrapper>
      <Title>{title}</Title>
      <FlowChart>
        <FlowItem>
          <FlowItemTitle>案件情報抽出</FlowItemTitle>
          <FlowItemArrow />
        </FlowItem>
        <FlowItem>
          <FlowItemTitle>案件情報連携</FlowItemTitle>
          <FlowItemContent>
            <ContentItem>業者情報取込準備処理</ContentItem>
            <ContentArrow />
            <ContentItem>業者情報取込更新処理</ContentItem>
          </FlowItemContent>
          <FlowItemArrow />
        </FlowItem>
        <FlowItem>
          <FlowItemTitle>入札結果連携</FlowItemTitle>
          <FlowItemContent>
            <ContentItem>入札結果取込準備処理</ContentItem>
            <ContentArrow />
            <ContentItem>入札結果取込更新処理</ContentItem>
          </FlowItemContent>
          <FlowItemArrow />
        </FlowItem>
        <FlowItem>
          <FlowItemTitle>案件情報抽出</FlowItemTitle>
          <FlowItemContent>
            <ContentItem>案件情報抽出処理</ContentItem>
          </FlowItemContent>
        </FlowItem>
      </FlowChart>
    </ContractFlowWrapper>
  );
};

// スタイリング用のコンポーネント
const ContractFlowWrapper = styled.div`
  background-color: #e8f4fd;
  padding: 20px;
  border-radius: 8px;
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const FlowChart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FlowItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
`;

const FlowItemTitle = styled.div`
  background-color: #c5e3fc;
  padding: 10px 20px;
  border-radius: 20px;
  margin-bottom: 10px;
`;

const FlowItemContent = styled.div`
  display: flex;
  align-items: center;
`;

const ContentItem = styled.div`
  background-color: #f3c5af;
  padding: 8px 16px;
  border-radius: 20px;
  margin: 0 10px;
`;

const ContentArrow = styled.div`
  width: 0;
  height: 0;
  border-top: 8px solid transparent;
  border-bottom: 8px solid transparent;
  border-left: 12px solid #888;
`;

const FlowItemArrow = styled.div`
  width: 0;
  height: 0;
  border-top: 12px solid #888;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  margin: 10px 0;
`;

// サンプルデータを用いた使用例
const App: React.FC = () => {
  return (
    <div>
      <ContractFlow />
      <ContractFlow title="CSV連携" />
    </div>
  );
};

export default App;