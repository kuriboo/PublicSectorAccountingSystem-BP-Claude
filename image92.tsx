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
          <FlowItemTitle>案件情報入力</FlowItemTitle>
        </FlowItem>
        <FlowArrow />
        <FlowItem>
          <FlowItemTitle>案件情報連携</FlowItemTitle>
        </FlowItem>
        <FlowArrow />
        <FlowItem>
          <FlowItemTitle>入札結果連携</FlowItemTitle>
          <SubFlowItem>
            <SubFlowItemTitle>入札結果取込</SubFlowItemTitle>
          </SubFlowItem>
          <SubFlowArrow />
          <SubFlowItem>
            <SubFlowItemTitle>入札結果取込</SubFlowItemTitle>
          </SubFlowItem>
        </FlowItem>
        <FlowArrow />
        <FlowItem>
          <FlowItemTitle>案件情報抽出</FlowItemTitle>
        </FlowItem>
        <FlowArrow />
        <FlowItem>
          <FlowItemTitle>CSV連携</FlowItemTitle>
          <SubFlowItem>
            <SubFlowItemTitle>案件情報抽出処理</SubFlowItemTitle>
          </SubFlowItem>
          <SubFlowArrow />
          <SubFlowItem>
            <SubFlowItemTitle>入札結果取込</SubFlowItemTitle>
          </SubFlowItem>
          <SubFlowArrow />
          <SubFlowItem>
            <SubFlowItemTitle>入札結果取込</SubFlowItemTitle>
          </SubFlowItem>
        </FlowItem>
      </FlowChart>
    </ContractFlowWrapper>
  );
};

// スタイリング
const ContractFlowWrapper = styled.div`
  background-color: #f0f0f0;
  padding: 16px;
  border-radius: 8px;
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
  background-color: #ffffff;
  border-radius: 8px;
  padding: 16px;
  text-align: center;
  position: relative;
`;

const FlowItemTitle = styled.div`
  font-size: 16px;
  font-weight: bold;
`;

const FlowArrow = styled.div`
  width: 0;
  height: 0;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  border-left: 10px solid #cccccc;
  margin: 0 8px;
`;

const SubFlowItem = styled.div`
  background-color: #f0f0f0;
  border-radius: 8px;
  padding: 8px;
  text-align: center;
  margin-top: 8px;
`;

const SubFlowItemTitle = styled.div`
  font-size: 14px;
`;

const SubFlowArrow = styled.div`
  width: 0;
  height: 0;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-top: 8px solid #cccccc;
  margin: 4px auto;
`;

// サンプルデータを用いた使用例
const App: React.FC = () => {
  return (
    <div>
      <ContractFlow />
      <ContractFlow title="案件管理" />
    </div>
  );
};

export default App;