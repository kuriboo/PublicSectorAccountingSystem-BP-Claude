import React from 'react';
import styled from 'styled-components';

type CompanyBadgeProps = {
  companyName: string;
  systemDepartment: string;
};

const CompanyBadge: React.FC<CompanyBadgeProps> = ({ companyName, systemDepartment }) => {
  return (
    <BadgeWrapper>
      <CompanyLogo />
      <CompanyInfo>
        <CompanyName>{companyName}</CompanyName>
        <SystemDepartment>{systemDepartment}</SystemDepartment>
      </CompanyInfo>
    </BadgeWrapper>
  );
};

const BadgeWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 8px;
  max-width: 300px;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const CompanyLogo = styled.div`
  width: 40px;
  height: 40px;
  background-color: #333;
  border-radius: 50%;
  margin-right: 12px;

  @media (max-width: 480px) {
    margin-right: 0;
    margin-bottom: 8px;
  }
`;

const CompanyInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const CompanyName = styled.h3`
  margin: 0;
  font-size: 18px;
  font-weight: bold;
`;

const SystemDepartment = styled.p`
  margin: 4px 0 0;
  font-size: 14px;
  color: #666;
`;

// Usage example
const App: React.FC = () => {
  return (
    <div>
      <CompanyBadge companyName="株式会社ぎょうせい" systemDepartment="システム事業部" />
    </div>
  );
};

export default App;