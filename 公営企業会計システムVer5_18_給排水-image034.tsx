import React from 'react';
import styled from 'styled-components';

// 定数
const TABS = ['明細確認', '行削除', '税率毎', '明細毎', '総率別明細'];

// コンポーネントの型定義
interface TabProps {
  tabs: string[];
  activeTab: string;
  onChangeTab: (tab: string) => void;
}

// タブコンポーネント
const Tab: React.FC<TabProps> = ({ tabs, activeTab, onChangeTab }) => {
  // タブの切り替えハンドラ
  const handleTabClick = (tab: string) => {
    onChangeTab(tab);
  };

  return (
    <TabContainer>
      {tabs.map((tab) => (
        <TabItem
          key={tab}
          active={activeTab === tab}
          onClick={() => handleTabClick(tab)}
        >
          {tab}
        </TabItem>
      ))}
    </TabContainer>
  );
};

// スタイリング
const TabContainer = styled.div`
  display: flex;
  border-bottom: 1px solid #ccc;
`;

const TabItem = styled.div<{ active: boolean }>`
  padding: 10px 20px;
  cursor: pointer;
  background-color: ${({ active }) => (active ? '#f0f0f0' : 'transparent')};
  border-bottom: ${({ active }) => (active ? '2px solid #333' : 'none')};
  
  &:hover {
    background-color: #f0f0f0;
  }
`;

// サンプルデータを用いた使用例
const SampleTabs = () => {
  const [activeTab, setActiveTab] = React.useState(TABS[0]);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <h2>サンプルタブ</h2>
      <Tab
        tabs={TABS}
        activeTab={activeTab}
        onChangeTab={handleTabChange}
      />
      <p>選択中のタブ: {activeTab}</p>
    </div>
  );
};

export default SampleTabs;