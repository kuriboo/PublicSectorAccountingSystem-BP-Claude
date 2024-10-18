import React from 'react';
import styled from '@emotion/styled';

// 会社ロゴのコンポーネント
const CompanyLogo: React.FC<{ logoUrl: string }> = ({ logoUrl }) => {
  return (
    <LogoWrapper>
      {logoUrl ? (
        <img src={logoUrl} alt="Company Logo" />
      ) : (
        <PlaceholderLogo>No Logo</PlaceholderLogo>
      )}
    </LogoWrapper>
  );
};

// 会社名のコンポーネント 
const CompanyName: React.FC<{ name: string }> = ({ name }) => {
  return <CompanyNameText>{name || 'Company Name'}</CompanyNameText>;
};

// スローガンのコンポーネント
const Slogan: React.FC<{ text: string }> = ({ text }) => {
  return <SloganText>{text || 'Company Slogan'}</SloganText>;
};

// 会社情報コンポーネント
const CompanyInfo: React.FC<{
  logoUrl: string;
  name: string;
  slogan: string;
}> = ({ logoUrl, name, slogan }) => {
  return (
    <CompanyInfoWrapper>
      <CompanyLogo logoUrl={logoUrl} />
      <CompanyName name={name} />
      <Slogan text={slogan} />
    </CompanyInfoWrapper>
  );
};

// スタイリング
const CompanyInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f0f0f0;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
  }
`;

const LogoWrapper = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #ccc;
  margin-bottom: 10px;

  @media (min-width: 768px) {
    margin-bottom: 0;
    margin-right: 20px;
  }
`;

const PlaceholderLogo = styled.div`
  font-size: 14px;
  color: #999;
`;

const CompanyNameText = styled.h2`
  font-size: 24px;
  margin-bottom: 5px;
`;

const SloganText = styled.p`
  font-size: 16px;
  color: #666;
`;

// 使用例
const App: React.FC = () => {
  return (
    <CompanyInfo
      logoUrl="https://example.com/logo.png"  
      name="株式会社ぎょうせい"
      slogan="行政のデジタル化をリードする"
    />
  );
};

export default App;