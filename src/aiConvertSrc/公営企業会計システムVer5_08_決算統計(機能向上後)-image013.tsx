import React from 'react';
import styled from 'styled-components';

// Define types for component props
type CompanyProfileProps = {
  name: string;
  logo: string;
  description: string;
};

// Styled components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  margin: 0 auto;

  @media (max-width: 480px) {
    padding: 10px;
  }
`;

const Logo = styled.img`
  width: 100px;
  height: 100px;
  object-fit: contain;
  margin-bottom: 16px;

  @media (max-width: 480px) {
    width: 80px;
    height: 80px;
  }
`;

const CompanyName = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 8px;
  text-align: center;

  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

const Description = styled.p`
  font-size: 16px;
  text-align: center;
  color: #666;

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

// Company profile component
const CompanyProfile: React.FC<CompanyProfileProps> = ({ name, logo, description }) => {
  // Handle missing prop values
  const companyName = name || 'Unknown Company';
  const companyLogo = logo || 'default-logo.png';
  const companyDescription = description || 'No description available.';

  return (
    <Container>
      <Logo src={companyLogo} alt={`${companyName} logo`} />
      <CompanyName>{companyName}</CompanyName>
      <Description>{companyDescription}</Description>
    </Container>
  );
};

// Sample usage of the component
const SampleCompanyProfile: React.FC = () => {
  const sampleData: CompanyProfileProps = {
    name: '株式会社ぎょうせい',
    logo: 'https://example.com/gyosei-logo.png',
    description: 'システム事業部の説明文がここに入ります。',
  };

  return <CompanyProfile {...sampleData} />;
};

export default CompanyProfile;