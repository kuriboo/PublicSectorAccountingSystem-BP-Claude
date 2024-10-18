import React from 'react';
import styled from 'styled-components';

// ToolDownloadコンポーネントの型定義
interface ToolDownloadProps {
  title: string;
  description: string;
  manuals: string[];
  operationManuals: string[];
}

// ToolDownloadコンポーネント
const ToolDownload: React.FC<ToolDownloadProps> = ({
  title,
  description,
  manuals,
  operationManuals,
}) => {
  // 値が空の場合は代替テキストを表示
  const renderList = (items: string[], altText: string) => {
    if (items.length === 0) {
      return <li>{altText}</li>;
    }
    return items.map((item, index) => <li key={index}>{item}</li>);
  };

  return (
    <Container>
      <Title>{title || 'タイトルなし'}</Title>
      <Description>{description || '説明文なし'}</Description>
      <Section>
        <Heading>公営企業会計システム ツールダウンロード</Heading>
        <List>{renderList(manuals, 'マニュアルなし')}</List>
      </Section>
      <Section>
        <Heading>公営企業会計システム 操作マニュアルダウンロード</Heading>
        <List>{renderList(operationManuals, '操作マニュアルなし')}</List>
      </Section>
    </Container>
  );
};

// スタイリング用のスタイル コンポーネント
const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;

  @media (max-width: 600px) {
    padding: 10px;
  }
`;

const Title = styled.h1`
  font-size: 28px;
  margin-bottom: 10px;

  @media (max-width: 600px) {
    font-size: 24px;
  }
`;

const Description = styled.p`
  margin-bottom: 20px;
`;

const Section = styled.section`
  margin-bottom: 30px;
`;

const Heading = styled.h2`
  font-size: 20px;
  margin-bottom: 10px;

  @media (max-width: 600px) {
    font-size: 18px;
  }
`;

const List = styled.ul`
  list-style-type: disc;
  margin-left: 20px;
`;

// サンプルデータを使用した表示用コンポーネント
const SampleToolDownload: React.FC = () => {
  const sampleData: ToolDownloadProps = {
    title: 'このサイトについて',
    description:
      'このサイトは、公営企業会計システムにて利用する各種クライアント用ツールや操作マニュアルを提供しております。下記のリンクより、必要なツールをクリックしてダウンロードしてください。クライアント用ツールの利用方法につきましては、各種マニュアルを格納しておりますので、ご不明点などございましたら弊社システム担当にご連絡ください。',
    manuals: ['科目設換ツール', '組手金マスタ適合証交番登記号設定'],
    operationManuals: ['操作マニュアル', '利用マニュアル'],
  };

  return <ToolDownload {...sampleData} />;
};

export default SampleToolDownload;