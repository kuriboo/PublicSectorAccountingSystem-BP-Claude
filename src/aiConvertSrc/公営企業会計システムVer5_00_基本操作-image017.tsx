import React from 'react';
import styled from 'styled-components';

type PublicCompanyRegistrationProps = {
  notices: string[];
  supplementalNotice: string;
  companyName: string;
};

const PublicCompanyRegistration: React.FC<PublicCompanyRegistrationProps> = ({
  notices,
  supplementalNotice,
  companyName,
}) => {
  return (
    <Container>
      <Title>お知らせ登録</Title>
      <Tabs>
        <Tab>明細編集</Tab>
        <Tab>行追加</Tab>
        <Tab>行削除</Tab>
      </Tabs>
      <Content>
        <Heading>お知らせ内容</Heading>
        {notices.map((notice, index) => (
          <Notice key={index}>{notice}</Notice>
        ))}
        {supplementalNotice && <SupplementalNotice>{supplementalNotice}</SupplementalNotice>}
      </Content>
      <CompanyName>
        <Input type="text" value={companyName} placeholder="内容" />
      </CompanyName>
      <Buttons>
        <Button>OK</Button>
        <Button>クリア</Button>
        <Button>終了</Button>
      </Buttons>
    </Container>
  );
};

// Sample usage
const App: React.FC = () => {
  const notices = [
    '会計担当からお知らせ',
    '今月のお計算処理は○日(△)となります。伝票提出漏れがないようよろしくお願いいたします。',
    '9月5日(土) 本庁舎 3日(日)を午前日とします。',
    '9月6日(土) 東庁舎 17日(日)を午後日とします。',
    '9月23日(土) 上記以外の庁舎 24日(日)を午前日とします。',
  ];
  const supplementalNotice = '管財課からのお知らせ';
  const companyName = '行政市事業会計';

  return (
    <PublicCompanyRegistration
      notices={notices}
      supplementalNotice={supplementalNotice}
      companyName={companyName}
    />
  );
};

// Styled components
const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const Tabs = styled.div`
  display: flex;
`;

const Tab = styled.div`
  padding: 10px;
  background-color: #f0f0f0;
  cursor: pointer;
  margin-right: 10px;
  border-radius: 4px;
`;

const Content = styled.div`
  margin-top: 20px;
`;

const Heading = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Notice = styled.p`
  margin-bottom: 5px;
`;

const SupplementalNotice = styled.p`
  color: #ff0000;
`;

const CompanyName = styled.div`
  margin-top: 20px;
`;

const Input = styled.input`
  padding: 5px;
`;

const Buttons = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;
`;

const Button = styled.button`
  padding: 10px 20px;
  margin-left: 10px;
  border-radius: 4px;
  cursor: pointer;
`;

export default PublicCompanyRegistration;