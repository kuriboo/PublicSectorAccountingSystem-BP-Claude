以下が、指定された要件に従ってNext.js + TypeScriptで実装したコンポーネントです。

import React from 'react';
import styled from 'styled-components';

// プロパティの型定義
type SystemInfoProps = {
  companyName?: string;
  systemName?: string;
};

// スタイル定義
const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Logo = styled.div`
  width: 60px;
  height: 60px;
  background-color: #333;
  border-radius: 50%;
  margin-right: 20px;

  @media (max-width: 600px) {
    margin-right: 0;
    margin-bottom: 10px;
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
`;

const CompanyName = styled.h2`
  font-size: 24px;
  margin: 0;
  margin-bottom: 5px;
`;

const SystemName = styled.p`
  font-size: 18px;
  margin: 0;
`;

// コンポーネント定義
const SystemInfo: React.FC<SystemInfoProps> = ({ companyName, systemName }) => {
  // 例外処理: 会社名が未指定の場合はデフォルト値を使用
  const company = companyName || '株式会社◯◯◯';
  
  // 例外処理: システム名が未指定の場合は空文字列を使用
  const system = systemName || '';

  return (
    <Container>
      <Logo />
      <Info>
        <CompanyName>{company}</CompanyName>
        <SystemName>{system}</SystemName>
      </Info>
    </Container>
  );
};

export default SystemInfo;

// 使用例
const App: React.FC = () => {
  return (
    <div>
      <SystemInfo companyName="ABC株式会社" systemName="システム事業部" />
      <SystemInfo companyName="XYZ Corporation" />
      <SystemInfo />
    </div>
  );
};

主な特徴は以下の通りです。

- コンポーネントはSystemInfoという名前で定義され、companyNameとsystemNameのオプションのプロパティを受け取ります。
- スタイル定義にはstyled-componentsを使用し、CSS-in-JS形式でスタイリングを行っています。
- レスポンシブデザインを考慮し、画面幅が600px以下の場合にフレックスの方向を変更してロゴと情報を縦に並べるようにしています。
- 例外処理として、companyNameとsystemNameが未指定の場合にデフォルト値や空文字列を使用するようにしています。
- 使用例としてAppコンポーネントを定義し、様々なプロパティの組み合わせでSystemInfoコンポーネントを使用しています。

以上が、指定された要件に基づいて実装したNext.js + TypeScriptのコンポーネントです。再利用性とカスタマイズ性を考慮し、例外処理やレスポンシブデザインにも対応しています。