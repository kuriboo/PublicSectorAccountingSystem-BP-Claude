import React from 'react';
import styled from '@emotion/styled';

type TreeItem = {
  label: string;
  children?: TreeItem[];
};

type TreeViewProps = {
  items: TreeItem[];
};

const TreeView: React.FC<TreeViewProps> = ({ items }) => {
  // ツリービューのアイテムをレンダリングする再帰的な関数
  const renderItem = (item: TreeItem) => {
    return (
      <TreeItem key={item.label}>
        <ItemLabel>{item.label}</ItemLabel>
        {item.children && (
          <ChildrenContainer>
            {item.children.map((child) => renderItem(child))}
          </ChildrenContainer>
        )}
      </TreeItem>
    );
  };

  return <TreeContainer>{items.map((item) => renderItem(item))}</TreeContainer>;
};

const TreeContainer = styled.div`
  font-family: sans-serif;
  padding: 10px;
`;

const TreeItem = styled.div`
  margin-left: 20px;
`;

const ItemLabel = styled.div`
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const ChildrenContainer = styled.div`
  margin-left: 20px;
`;

// サンプルデータ
const sampleData: TreeItem[] = [
  {
    label: '実行機能',
    children: [
      { label: '月例' },
      {
        label: '01_経勘定合計表前年同月比較',
        children: [
          { label: '03_総勘定合計表前年同月比較(前)' },
          { label: '04_総勘定合計表前年同月比較(前前)' },
          { label: '05_総勘定合計表前年同月比較(前前前)' },
          { label: '06_総勘定合計表前年同月比較(明細)' },
        ],
      },
      { label: '07_予算執行状況表前年同月比較(日)' },
      { label: '08_予算執行状況表前年同月比較(前)' },
      { label: '09_予算執行状況表前年同月比較(前前)' },
      { label: '10_予算執行状況表前年同月比較(前前前)' },
    ],
  },
  { label: '支出' },
  { label: '32_負担明細データ抽出' },
  { label: '決算編成' },
  { label: '工事台帳' },
  { label: '固定資産' },
  { label: '認定資産' },
];

const App: React.FC = () => {
  return (
    <div>
      <h1>CSV出力パターンの編集</h1>
      <TreeView items={sampleData} />
    </div>
  );
};

export default App;