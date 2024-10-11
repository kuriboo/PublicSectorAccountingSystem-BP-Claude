import React from 'react';
import styled from '@emotion/styled';

type DocumentProps = {
  title: string;
  subtitle: string;
  author: string;
  date: string;
};

const DocumentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  font-family: sans-serif;

  @media (min-width: 768px) {
    width: 80%;
    margin: 0 auto;
  }
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 32px;
  }
`;

const Subtitle = styled.h3`
  font-size: 18px;
  margin-bottom: 20px;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 24px;
  }
`;

const AuthorDate = styled.div`
  font-size: 14px;
  text-align: right;
  margin-top: 20px;

  @media (min-width: 768px) {
    font-size: 16px;
  }
`;

const Document: React.FC<DocumentProps> = ({ title, subtitle, author, date }) => {
  return (
    <DocumentWrapper>
      {title ? <Title>{title}</Title> : null}
      {subtitle ? <Subtitle>{subtitle}</Subtitle> : null}
      {/* ドキュメントの本文をここに追加 */}
      <AuthorDate>
        {author ? `${author} 作` : null}
        <br />
        {date}
      </AuthorDate>
    </DocumentWrapper>
  );
};

// 使用例
const App: React.FC = () => {
  return (
    <Document 
      title="雪原の丘開発に伴う配水管整備工事" 
      subtitle="第一区配管設計概要（案）"
      author=""
      date="平成20年4月"
    />
  );
}

export default App;