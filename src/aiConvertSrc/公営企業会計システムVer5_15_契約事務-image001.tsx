import React from 'react';
import styled from '@emotion/styled';

// ぎょうせいの型定義
type GyouseiProps = {
  text?: string;
};

// ぎょうせいコンポーネント
const Gyousei: React.FC<GyouseiProps> = ({ text = 'ぎょうせい' }) => {
  return <GyouseiWrapper>{text}</GyouseiWrapper>;
};

// ぎょうせいのスタイル
const GyouseiWrapper = styled.div`
  display: inline-block;
  background-color: #000;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  padding: 4px 8px;
  border-radius: 4px;
  
  @media (min-width: 768px) {
    font-size: 20px;
    padding: 6px 12px;
  }
`;

// サンプルデータを使用した表示用コンポーネント
const SampleGyousei: React.FC = () => {
  return (
    <div>
      <p>デフォルト: <Gyousei /></p>
      <p>カスタムテキスト: <Gyousei text="行政書士" /></p>
    </div>
  );
};

export default Gyousei;

// サンプル表示用にSampleGyouseiをエクスポート
export { SampleGyousei };