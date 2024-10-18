import React from 'react';
import styled from 'styled-components';

// 帳票フォーマットのプロパティ型定義
type FormatProps = {
  格票名: string;
  見出し初期値: string;
  見出し桁数: number;
  文字記憶: string;
  見出し編集後: string;
};

// 帳票フォーマットコンポーネント
const Format: React.FC<FormatProps> = ({ 格票名, 見出し初期値, 見出し桁数, 文字記憶, 見出し編集後 }) => {
  return (
    <FormatRow>
      <FormatItem>{格票名}</FormatItem>
      <FormatItem>{見出し初期値}</FormatItem>
      <FormatItem>{見出し桁数}</FormatItem>
      <FormatItem>{文字記憶}</FormatItem>
      <FormatItem>{見出し編集後}</FormatItem>
    </FormatRow>
  );
};

// 帳票フォーマットのスタイリング
const FormatRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  border-bottom: 1px solid #ccc;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const FormatItem = styled.div`
  flex: 1;
  padding: 4px;
  
  @media (max-width: 600px) {
    width: 100%;
  }
`;

// サンプルデータ
const sampleData: FormatProps[] = [
  {
    格票名: '所属',
    見出し初期値: '20',
    見出し桁数: 12,
    文字記憶: '中央揃え',
    見出し編集後: '所属'
  },
  {
    格票名: '支払予定日',
    見出し初期値: '12',
    見出し桁数: 12,
    文字記憶: '中央揃え',
    見出し編集後: '支払予定日' 
  },
  // ...他のサンプルデータ
];

// 帳票フォーマット一覧コンポーネント
const FormatList: React.FC = () => {
  return (
    <div>
      {sampleData.map((data, index) => (
        <Format key={index} {...data} />
      ))}
    </div>
  );
};

export default FormatList;