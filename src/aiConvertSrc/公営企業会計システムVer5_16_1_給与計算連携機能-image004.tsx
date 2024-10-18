import React from 'react';
import styled from 'styled-components';

// 型定義
interface LogoProps {
  fontSize?: string;
  color?: string;
}

// ロゴコンポーネント
const Logo: React.FC<LogoProps> = ({ fontSize = '24px', color = '#000' }) => {
  return (
    <LogoWrapper fontSize={fontSize} color={color}>
      <span>駄菓子</span>よろせい
    </LogoWrapper>
  );
};

// ロゴのスタイル
const LogoWrapper = styled.div<LogoProps>`
  font-size: ${props => props.fontSize};
  color: ${props => props.color};
  font-weight: bold;

  span {
    display: inline-block;
    background-color: #000;
    color: #fff;
    padding: 2px 5px;
    margin-right: 5px;
  }

  @media screen and (max-width: 600px) {
    font-size: 20px;
  }
`;

// 使用例
const LogoExample: React.FC = () => {
  return (
    <div>
      <h3>デフォルト:</h3>
      <Logo />
      
      <h3>プロパティ指定:</h3>
      <Logo fontSize="32px" color="#f00" />
    </div>
  );
};

export default Logo;

/*
ポイント
・TypeScriptの型定義を LogoProps インターフェースとして定義
・propsのデフォルト値を指定し、プロパティ経由でカスタマイズ可能に
・styled-componentsを用いてCSS-in-JSスタイルでコンポーネントにスタイル適用
・レスポンシブデザインのためメディアクエリを使用
・span要素を使って「駄菓子」部分のスタイリングを調整
・コンポーネントの使用例を LogoExample で提示
*/