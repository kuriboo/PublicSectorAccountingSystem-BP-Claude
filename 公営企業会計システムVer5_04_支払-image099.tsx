import React from 'react';
import styled from 'styled-components';

// 配列型のプロパティを定義
type RequirementsProps = {
  items: string[];
}

const Requirements: React.FC<RequirementsProps> = ({ items }) => {
  // 各要件をリスト表示するコンポーネント
  return (
    <RequirementsWrapper>
      <RequirementsTitle>印刷対象構要件</RequirementsTitle>
      <RequirementsList>
        {items.map((item, index) => (
          <RequirementsItem key={index}>
            <RequirementsCheckbox type="checkbox" defaultChecked={true} />
            <RequirementsLabel>{item}</RequirementsLabel>
          </RequirementsItem>
        ))}
      </RequirementsList>
    </RequirementsWrapper>
  );
};

// スタイリング用のコンポーネントを定義
const RequirementsWrapper = styled.div`
  background-color: #f0f0f0;
  padding: 16px;
  border-radius: 4px;
`;

const RequirementsTitle = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 8px;
`;

const RequirementsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const RequirementsItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

const RequirementsCheckbox = styled.input`
  margin-right: 8px;
`;

const RequirementsLabel = styled.label`
  font-size: 16px;
`;

// サンプルデータを用意
const sampleItems = [
  "調書兼命令書(その他 ES)",
  "支払通知書",
  "調定伺書",
  "債付通知書",
];

// サンプルデータを使用して表示するコンポーネント
const App: React.FC = () => {
  return (
    <div>
      <h1>印刷対象構要件</h1>
      <Requirements items={sampleItems} />
    </div>
  );
};

export default App;