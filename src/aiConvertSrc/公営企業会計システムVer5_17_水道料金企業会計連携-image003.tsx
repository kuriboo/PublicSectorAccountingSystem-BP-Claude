import React from 'react';
import styled from '@emotion/styled';

// システム事業部の情報を表す型定義
interface SystemDepartmentInfo {
  name: string;
  description: string;
}

// コンポーネントのプロパティの型定義
interface SystemDepartmentProps {
  info: SystemDepartmentInfo;
}

// スタイル付きのコンテナ要素
const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

// スタイル付きのアイコン要素
const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  margin-right: 20px;
  background-color: #333;
  border-radius: 50%;
  color: #fff;
  font-size: 36px;
  font-weight: bold;

  @media (max-width: 600px) {
    margin-right: 0;
    margin-bottom: 20px;
  }
`;

// スタイル付きのテキストコンテナ要素
const TextContainer = styled.div`
  flex: 1;
`;

// スタイル付きの名前要素
const Name = styled.h2`
  margin: 0;
  font-size: 24px;
  color: #333;
`;

// スタイル付きの説明要素
const Description = styled.p`
  margin: 10px 0 0;
  font-size: 16px;
  color: #666;
`;

// システム事業部コンポーネント
const SystemDepartment: React.FC<SystemDepartmentProps> = ({ info }) => {
  // 情報が未定義の場合はnullを返す
  if (!info) {
    return null;
  }

  return (
    <Container>
      <Icon>シ</Icon>
      <TextContainer>
        <Name>{info.name}</Name>
        <Description>{info.description}</Description>
      </TextContainer>
    </Container>
  );
};

export default SystemDepartment;

// 使用例
const sampleData: SystemDepartmentInfo = {
  name: '株式会社ぎょうせい システム事業部',
  description: 'システムの開発、運用、保守を行っています。',
};

const App: React.FC = () => {
  return (
    <div>
      <h1>システム事業部の紹介</h1>
      <SystemDepartment info={sampleData} />
    </div>
  );
};