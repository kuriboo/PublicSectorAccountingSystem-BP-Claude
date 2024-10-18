import React from 'react';
import styled from 'styled-components';

// Define types for component props
interface CompanyProfileProps {
  name: string;
  description: string;
  website: string;
}

// Define styled components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  font-family: Arial, sans-serif;
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const Logo = styled.div`
  width: 80px;
  height: 80px;
  background-color: #333;
  border-radius: 50%;
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

const CompanyName = styled.h1`
  font-size: 24px;
  margin-bottom: 10px;
`;

const CompanyDescription = styled.p`
  font-size: 16px;
  margin-bottom: 10px;
`;

const CompanyWebsite = styled.a`
  font-size: 14px;
  color: #333;
  text-decoration: none;
`;

// Define the CompanyProfile component
const CompanyProfile: React.FC<CompanyProfileProps> = ({ name, description, website }) => {
  return (
    <Container>
      <Logo />
      <CompanyInfo>
        {/* Render company name if provided, otherwise show a default message */}
        <CompanyName>{name ? name : 'Company Name'}</CompanyName>
        
        {/* Render company description if provided */}
        {description && <CompanyDescription>{description}</CompanyDescription>}
        
        {/* Render company website link if provided */}
        {website && (
          <CompanyWebsite href={website} target="_blank" rel="noopener noreferrer">
            {website}
          </CompanyWebsite>
        )}
      </CompanyInfo>
    </Container>
  );
};

// Sample usage of the CompanyProfile component
const App: React.FC = () => {
  const sampleCompany = {
    name: '株式会社ぎょうせい',
    description: 'システム事業部',
    website: 'https://example.com',
  };

  return (
    <div>
      <CompanyProfile {...sampleCompany} />
    </div>
  );
};

export default App;