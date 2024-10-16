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
  // 情報が提供されていない場合は代替のテキストを表示
  const name = info.name || '名称未設定';
  const description = info.description || '説明文が設定されていません。';

  return (
    <Container>
      {/* アイコン */}
      <Icon>
        <img src="/path/to/icon.png" alt="System Department Icon" />
      </Icon>
      
      {/* 名称 */}
      <Name>{name}</Name>

      {/* 説明文 */}
      <Description>{description}</Description>
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

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
  }
`;

const Icon = styled.div`
  width: 80px;
  height: 80px;
  margin-bottom: 16px;

  @media (min-width: 768px) {
    margin-right: 32px;
    margin-bottom: 0;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const Name = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 8px;
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
  }
`;

const Description = styled.p`
  font-size: 16px;
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
  }
`;

// 使用例
const App: React.FC = () => {
  const sampleInfo: SystemDepartmentInfo = {
    name: '株式会社ぎょうせい システム事業部',
    description: '行政や公共機関向けのシステム開発を行っています。',
  };

  return (
    <div>
      <SystemDepartment info={sampleInfo} />
    </div>
  );
};

export default App;