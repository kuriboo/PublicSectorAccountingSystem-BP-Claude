import React from 'react';
import styled from '@emotion/styled';

// システム事業部の情報を定義するインターフェース
interface SystemDepartmentInfo {
  label: string;
  url: string;
}

// コンポーネントのプロパティを定義するインターフェース
interface SystemDepartmentProps {
  info: SystemDepartmentInfo;
}

// コンポーネントのスタイリングを定義
const SystemDepartmentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 16px;
  background-color: #f0f0f0;
  border-radius: 8px;
  box-sizing: border-box;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const IconWrapper = styled.div`
  width: 48px;
  height: 48px;
  margin-right: 16px;

  @media (max-width: 600px) {
    margin-right: 0;
    margin-bottom: 8px;
  }
`;

const Icon = styled.img`
  width: 100%;
  height: 100%;
`;

const Label = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #333;
  text-align: center;

  @media (max-width: 600px) {
    font-size: 20px;
  }
`;

// システム事業部コンポーネント
const SystemDepartment: React.FC<SystemDepartmentProps> = ({ info }) => {
  // infoプロパティが未定義の場合はnullを返す
  if (!info) {
    return null;
  }

  return (
    <SystemDepartmentWrapper>
      <IconWrapper>
        <Icon src="/path/to/globe-icon.png" alt="Globe Icon" />
      </IconWrapper>
      <Label>{info.label}</Label>
    </SystemDepartmentWrapper>
  );
};

// サンプルデータ
const sampleInfo: SystemDepartmentInfo = {
  label: '株式会社ぎょうせい システム事業部',
  url: 'https://example.com',
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