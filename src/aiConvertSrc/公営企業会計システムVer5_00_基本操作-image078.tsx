import React from 'react';
import styled from 'styled-components';

// Define types for component props
type PublicCompanySystemToolbarProps = {
  items: string[];
};

type PublicCompanySystemOperationManualProps = {
  items: string[];
};

// Styled components
const Container = styled.div`
  padding: 20px;
`;

const Section = styled.div`
  margin-bottom: 30px;
`;

const SectionTitle = styled.h2`
  font-size: 20px;
  margin-bottom: 10px;
`;

const ItemList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const Item = styled.li`
  margin-bottom: 5px;
`;

// PublicCompanySystemToolbar component
const PublicCompanySystemToolbar: React.FC<PublicCompanySystemToolbarProps> = ({ items }) => {
  return (
    <Section>
      <SectionTitle>公営企業会計システム ツールダウンロード</SectionTitle>
      <ItemList>
        {items.map((item, index) => (
          <Item key={index}>{item}</Item>
        ))}
      </ItemList>
    </Section>
  );
};

// PublicCompanySystemOperationManual component 
const PublicCompanySystemOperationManual: React.FC<PublicCompanySystemOperationManualProps> = ({ items }) => {
  return (
    <Section>
      <SectionTitle>公営企業会計システム 操作マニュアルダウンロード</SectionTitle>
      <ItemList>
        {items.map((item, index) => (
          <Item key={index}>{item}</Item>
        ))}
      </ItemList>
    </Section>
  );
};

// Sample data
const toolbarItems = [
  'セットアップ',
  '科目変換ツール',
  '組手金マスタ適用情報一括登録ツール',
];

const operationManualItems = [
  '操作マニュアル',
  '利用マニュアル',
];

// Usage example
const PublicCompanySystemToolsPage: React.FC = () => {
  return (
    <Container>
      <h1>このサイトについて</h1>
      <p>このサイトは、公営企業会計システムにて利用する各種クライアント用ツールや操作マニュアルを掲載しております。</p>
      <p>下記のリンクより、必要なツールをクリックしてダウンロードしてください。</p>
      <p>クライアント用ツールの利用方法につきましては、各種マニュアルを搭載しておりますが、ご不明点などございましたら弊社システム担当にご連絡ください。</p>
      
      <PublicCompanySystemToolbar items={toolbarItems} />
      <PublicCompanySystemOperationManual items={operationManualItems} />
    </Container>
  );
};

export default PublicCompanySystemToolsPage;