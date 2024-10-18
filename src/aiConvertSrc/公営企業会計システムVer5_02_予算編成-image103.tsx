import React from 'react';
import styled from '@emotion/styled';

interface CompanyProfileProps {
  /** 会社名 */
  name: string;
  /** 会社の説明文 */
  description: string;
  /** 会社のWebサイトURL */
  websiteUrl?: string;
}

// コンポーネントのスタイリング
const CompanyProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
  border-radius: 8px;
  background-color: #f0f0f0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const CompanyName = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 16px;
`;

const CompanyDescription = styled.p`
  font-size: 16px;
  text-align: center;
  margin-bottom: 16px;

  @media (min-width: 768px) {
    text-align: left;
  }
`;

const CompanyWebsite = styled.a`
  font-size: 14px;
  color: #0070f3;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

/**
 * 会社プロフィールコンポーネント
 */
const CompanyProfile: React.FC<CompanyProfileProps> = ({ name, description, websiteUrl }) => {
  return (
    <CompanyProfileContainer>
      <div>
        <CompanyName>{name}</CompanyName>
        <CompanyDescription>{description}</CompanyDescription>
      </div>
      {websiteUrl && (
        <CompanyWebsite href={websiteUrl} target="_blank" rel="noopener noreferrer">
          {websiteUrl}
        </CompanyWebsite>
      )}
    </CompanyProfileContainer>
  );
};

// サンプルデータを用いたコンポーネントの使用例
const SampleUsage: React.FC = () => {
  const sampleCompany = {
    name: '株式会社ぎょうせい',
    description: 'システム事業部',
    websiteUrl: 'https://www.example.com',
  };

  return (
    <div>
      <h1>Company Profile Example</h1>
      <CompanyProfile {...sampleCompany} />
    </div>
  );
};

export default SampleUsage;