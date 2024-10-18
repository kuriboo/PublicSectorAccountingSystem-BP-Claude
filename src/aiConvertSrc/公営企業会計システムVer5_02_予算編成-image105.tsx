import React from 'react';
import styled from '@emotion/styled';

type SystemInfo = {
  title: string;
  description: string;
};

type SystemInfoProps = {
  info: SystemInfo;
};

const SystemInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid #ccc;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const SystemInfoIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  margin-right: 1rem;
  border-radius: 50%;
  background-color: #007bff;
  color: white;
  font-size: 1.5rem;
  font-weight: bold;

  @media (max-width: 600px) {
    margin-right: 0;
    margin-bottom: 1rem;
  }
`;

const SystemInfoContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const SystemInfoTitle = styled.h3`
  margin: 0 0 0.5rem;
  font-size: 1.25rem;
`;

const SystemInfoDescription = styled.p`
  margin: 0;
`;

const SystemInfoComponent: React.FC<SystemInfoProps> = ({ info }) => {
  // 値が入っていない場合のデフォルト値を設定
  const { title = 'No Title', description = 'No Description' } = info;

  return (
    <SystemInfoWrapper>
      <SystemInfoIcon>
        {/* タイトルの先頭文字を表示 */}
        {title.charAt(0)}
      </SystemInfoIcon>
      <SystemInfoContent>
        <SystemInfoTitle>{title}</SystemInfoTitle>
        <SystemInfoDescription>{description}</SystemInfoDescription>
      </SystemInfoContent>
    </SystemInfoWrapper>
  );
};

// 使用例
const App: React.FC = () => {
  const sampleData: SystemInfo[] = [
    {
      title: 'システム事業部',
      description: '社内システムの開発・運用を行っています。',
    },
    {
      title: '営業事業部',
      description: '新規顧客の開拓、既存顧客のフォローを行っています。',
    },
    {
      title: '',
      description: '',
    },
  ];

  return (
    <div>
      {sampleData.map((info, index) => (
        <SystemInfoComponent key={index} info={info} />
      ))}
    </div>
  );
};

export default App;