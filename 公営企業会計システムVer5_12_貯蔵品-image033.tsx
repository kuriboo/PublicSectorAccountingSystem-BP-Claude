import React from 'react';
import styled from 'styled-components';

// 型定義
type HierarchyData = {
  name: string;
  value: number;
  children?: HierarchyData[];
};

type HierarchyProps = {
  data: HierarchyData;
};

// スタイル定義
const HierarchyContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
`;

const HierarchyLabel = styled.div`
  font-size: 16px;
  font-weight: bold;
  margin-right: 10px;
`;

const HierarchyValue = styled.div`
  font-size: 16px;
  margin-right: 10px;
`;

const HierarchyChildrenContainer = styled.div`
  margin-left: 20px;
`;

// Hierarchyコンポーネント
const Hierarchy: React.FC<HierarchyProps> = ({ data }) => {
  // データが空の場合は何も表示しない
  if (!data) {
    return null;
  }

  // 子要素の再帰的なレンダリング
  const renderChildren = (children?: HierarchyData[]) => {
    if (!children || children.length === 0) {
      return null;
    }

    return (
      <HierarchyChildrenContainer>
        {children.map((child, index) => (
          <Hierarchy key={index} data={child} />
        ))}
      </HierarchyChildrenContainer>
    );
  };

  return (
    <HierarchyContainer>
      <HierarchyLabel>{data.name}</HierarchyLabel>
      <HierarchyValue>{data.value}</HierarchyValue>
      {renderChildren(data.children)}
    </HierarchyContainer>
  );
};

// サンプルデータ
const sampleData: HierarchyData = {
  name: '仮出庫入力',
  value: 30,
  children: [
    {
      name: '仮出庫数30個のうち実際は20個を出庫',
      value: 20,
      children: [
        {
          name: '(仮出庫残数が10個発生)',
          value: 10,
        },
      ],
    },
  ],
};

// 使用例
const HierarchyExample: React.FC = () => {
  return (
    <div>
      <h2>Hierarchy Example</h2>
      <Hierarchy data={sampleData} />
    </div>
  );
};

export default HierarchyExample;