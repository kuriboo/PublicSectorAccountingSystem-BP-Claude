import React from 'react';
import styled from '@emotion/styled';

// プロパティの型定義
interface ButtonProps {
  label: string;
  onClick: () => void;
}

// スタイル定義
const ButtonWrapper = styled.button`
  background-color: #f0f0f0;
  color: #333;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #e0e0e0;
  }

  @media (max-width: 600px) {
    font-size: 14px;
    padding: 8px 16px;
  }
`;

// ボタンコンポーネント
const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  // labelが空の場合は代替テキストを表示
  const buttonLabel = label || 'ボタン';

  return <ButtonWrapper onClick={onClick}>{buttonLabel}</ButtonWrapper>;
};

// タブの型定義
interface Tab {
  id: number;
  label: string;
}

// タブコンポーネントのプロパティ型定義
interface TabsProps {
  tabs: Tab[];
  activeTab: number;
  onTabClick: (tabId: number) => void;
}

// タブのスタイル定義
const TabList = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  border-bottom: 1px solid #ccc;
`;

const TabItem = styled.li<{ active: boolean }>`
  padding: 10px 20px;
  cursor: pointer;
  color: ${({ active }) => (active ? '#333' : '#888')};
  border-bottom: ${({ active }) => (active ? '2px solid #333' : 'none')};
  transition: color 0.3s, border-bottom 0.3s;

  &:hover {
    color: #333;
  }
`;

// タブコンポーネント
const Tabs: React.FC<TabsProps> = ({ tabs, activeTab, onTabClick }) => {
  // タブが空の場合は何も表示しない
  if (!tabs || tabs.length === 0) {
    return null;
  }

  return (
    <TabList>
      {tabs.map((tab) => (
        <TabItem
          key={tab.id}
          active={tab.id === activeTab}
          onClick={() => onTabClick(tab.id)}
        >
          {tab.label}
        </TabItem>
      ))}
    </TabList>
  );
};

// サンプルデータ
const sampleTabs: Tab[] = [
  { id: 1, label: '税込/税抜' },
  { id: 2, label: '行削除' },
  { id: 3, label: '明細画面' },
  { id: 4, label: '明細出力' },
  { id: 5, label: '統率別明細' },
];

// サンプルコンポーネント
const SampleComponent: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState(1);

  const handleTabClick = (tabId: number) => {
    setActiveTab(tabId);
  };

  const handleButtonClick = () => {
    console.log('Button clicked!');
  };

  return (
    <div>
      <Tabs tabs={sampleTabs} activeTab={activeTab} onTabClick={handleTabClick} />
      <Button label="統率別明細" onClick={handleButtonClick} />
    </div>
  );
};

export default SampleComponent;