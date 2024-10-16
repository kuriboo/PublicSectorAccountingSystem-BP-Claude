import React from 'react';
import styled from 'styled-components';

// Define types for component props
interface CompanyInfoProps {
  companyName?: string;
  companyType?: string;
}

// Styled components
const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;
  border-bottom: 1px solid #ccc;
`;

const CompanyLogo = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: #ddd;
  margin-right: 16px;
`;

const CompanyDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

const CompanyName = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
`;

const CompanyType = styled.p`
  font-size: 14px;
  color: #666;
  margin: 4px 0 0;
`;

// CompanyInfo component
const CompanyInfo: React.FC<CompanyInfoProps> = ({ companyName, companyType }) => {
  return (
    <Container>
      <CompanyLogo />
      <CompanyDetails>
        {companyName ? (
          <CompanyName>{companyName}</CompanyName>
        ) : (
          <CompanyName>Company Name</CompanyName>
        )}
        {companyType ? (
          <CompanyType>{companyType}</CompanyType>
        ) : (
          <CompanyType>Company Type</CompanyType>
        )}
      </CompanyDetails>
    </Container>
  );
};

// Example usage of CompanyInfo component
const App: React.FC = () => {
  return (
    <div>
      <CompanyInfo companyName="ぎょうせい" companyType="株式会社" />
      <CompanyInfo companyName="ABC Corporation" />
      <CompanyInfo companyType="Limited Liability Company" />
      <CompanyInfo />
    </div>
  );
};

export default App;