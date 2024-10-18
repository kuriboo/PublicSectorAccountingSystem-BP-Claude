import React from 'react';
import styled from '@emotion/styled';

// 型定義
type LogoProps = {
  fontSize?: string;
  color?: string;
};

// ロゴコンポーネント
const Logo: React.FC<LogoProps> = ({ fontSize = '24px', color = '#000' }) => {
  return <LogoText fontSize={fontSize} color={color}>株式会社きょうせい</LogoText>;
};

// スタイリング
const LogoText = styled.div<{ fontSize: string; color: string }>`
  font-size: ${({ fontSize }) => fontSize};
  color: ${({ color }) => color};
  font-weight: bold;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

// 使用例
const LogoExample: React.FC = () => {
  return (
    <div>
      <h2>デフォルト:</h2>
      <Logo />
      
      <h2>プロパティ指定:</h2>
      <Logo fontSize="32px" color="#ff0000" />
    </div>
  );
};

export default Logo;