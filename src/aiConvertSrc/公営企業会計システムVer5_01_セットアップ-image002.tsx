import React from 'react';
import styled from 'styled-components';

// 型定義
type HieroglyphProps = {
  text: string;
  fontSize?: number;
  color?: string;
};

// スタイル定義
const HieroglyphWrapper = styled.div<{ fontSize: number; color: string }>`
  font-family: 'Noto Sans JP', sans-serif;
  font-size: ${(props) => props.fontSize}px;
  color: ${(props) => props.color};
  writing-mode: vertical-rl;
  text-orientation: upright;
  letter-spacing: 0.1em;

  @media (max-width: 768px) {
    font-size: ${(props) => props.fontSize * 0.8}px;
  }
`;

// 篆書体コンポーネント
const Hieroglyph: React.FC<HieroglyphProps> = ({ text, fontSize = 24, color = '#000' }) => {
  // textが空の場合は何も表示しない
  if (!text) return null;

  return <HieroglyphWrapper fontSize={fontSize} color={color}>{text}</HieroglyphWrapper>;
};

export default Hieroglyph;

// 使用例
const HieroglyphExample: React.FC = () => {
  return (
    <div>
      <Hieroglyph text="驟雨きょうせい" fontSize={32} color="#ff0000" />
      <Hieroglyph text="夏の夕立" />
    </div>
  );
};

export { HieroglyphExample };