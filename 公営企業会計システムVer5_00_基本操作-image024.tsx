import React from 'react';
import styled from '@emotion/styled';

// ツールタウンロードコンポーネントの型定義
type ToolDownloadProps = {
  title: string;
  description: string;
  toolManual: string[];
  operationManual: string[];
};

// ツールダウンロードコンポーネント
const ToolDownload: React.FC<ToolDownloadProps> = ({ title, description, toolManual, operationManual }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Description>{description}</Description>
      
      <Subtitle>公営企業会計システム ツールダウンロード</Subtitle>
      <List>
        {toolManual.map((item, index) => (
          <ListItem key={index}>{item}</ListItem>
        ))}
      </List>
      
      <Subtitle>公営企業会計システム 操作マニュアルダウンロード</Subtitle>
      <List>
        {operationManual.map((item, index) => (
          <ListItem key={index}>{item}</ListItem>
        ))}
      </List>
    </Container>
  );
};

// スタイリング
const Container = styled.div`
  padding: 24px;
  background-color: #f5f5f5;

  @media (max-width: 600px) {
    padding: 16px;
  }
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 16px;

  @media (max-width: 600px) {
    font-size: 20px;
  }
`;

const Description = styled.p`
  margin-bottom: 24px;
`;

const Subtitle = styled.h3`
  font-size: 20px;
  margin-bottom: 8px;

  @media (max-width: 600px) {
    font-size: 18px;
  }
`;

const List = styled.ul`
  margin-bottom: 24px;
`;

const ListItem = styled.li`
  margin-bottom: 8px;
`;

// サンプルデータ
const sampleData: ToolDownloadProps = {
  title: 'このサイトについて',
  description: 'このサイトは、公営企業会計システムにて利用する各種クライアント用ツールや操作マニュアルを格納しております。下記のリンクより、必要なツールをクリックしてダウンロードしてください。クライアント用ツールの利用方法につきましては、各種マニュアルを格納しておりますので、ご不明点などございましたら弊社システム担当にご連絡ください。',
  toolManual: ['セットアップ', '予算編成', '決算', '決算統計', '固定資産', '契約事務'],
  operationManual: ['操作マニュアル', '利用マニュアル'],
};

// 使用例
const App: React.FC = () => {
  return (
    <div>
      <ToolDownload {...sampleData} />
    </div>
  );
};

export default App;