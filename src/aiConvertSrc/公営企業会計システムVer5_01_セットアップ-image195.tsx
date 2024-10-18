import React from 'react';
import styled from '@emotion/styled';

// システム事業部の情報を表すインターフェース
interface SystemDepartmentInfo {
  name: string;
  description: string;
}

// システム事業部コンポーネントのプロパティ
interface SystemDepartmentProps {
  info: SystemDepartmentInfo;
}

// システム事業部コンポーネント
const SystemDepartment: React.FC<SystemDepartmentProps> = ({ info }) => {
  // プロパティが空の場合はnullを返す
  if (!info) return null;

  return (
    <Container>
      <Globe>🌐</Globe>
      <Title>{info.name}</Title>
      <Description>{info.description}</Description>
    </Container>
  );
};

// スタイリング
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
  background-color: #f0f0f0;
  border-radius: 8px;
  text-align: center;

  @media (min-width: 768px) {
    max-width: 400px;
    margin: 0 auto;
  }
`;

const Globe = styled.div`
  font-size: 48px;
  margin-bottom: 16px;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 8px;
`;

const Description = styled.p`
  font-size: 16px;
`;

// サンプルデータ
const sampleInfo: SystemDepartmentInfo = {
  name: '株式会社ぎょうせい システム事業部',
  description: '官公庁、自治体、教育機関、医療機関など幅広い分野の業務システムを構築しています。',
};

// 使用例
const App: React.FC = () => {
  return (
    <div>
      <h1>システム事業部</h1>
      <SystemDepartment info={sampleInfo} />
    </div>
  );
};

export default App;