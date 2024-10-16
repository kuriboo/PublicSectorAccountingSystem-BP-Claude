import React from 'react';
import styled from 'styled-components';

// プロパティの型定義
interface CompanyProfileProps {
  companyName?: string;
  description?: string;
}

// スタイリング
const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const CompanyLogo = styled.div`
  font-size: 48px;
  font-weight: bold;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    margin-bottom: 0;
    margin-right: 20px;
  }
`;

const CompanyInfo = styled.div`
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
  }
`;

const CompanyName = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 16px;
`;

// コンポーネント定義
const CompanyProfile: React.FC<CompanyProfileProps> = ({ companyName, description }) => {
  return (
    <ProfileContainer>
      <CompanyLogo>会</CompanyLogo>
      <CompanyInfo>
        {companyName && <CompanyName>{companyName}</CompanyName>}
        {description && <Description>{description}</Description>}
      </CompanyInfo>
    </ProfileContainer>
  );
};

// デフォルトのプロパティ値
CompanyProfile.defaultProps = {
  companyName: '株式会社 ぎょうせい',
  description: 'データ・システム事業部',
};

// 使用例
const App: React.FC = () => {
  return (
    <div>
      <h1>Company Profile</h1>
      <CompanyProfile />
    </div>
  );
};

export default App;