import React from 'react';
import styled from 'styled-components';

// Define types for component props
interface CompanyInfoProps {
  name: string;
  address: string;
  phone: string;
  website: string;
}

// Define styled components
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
  width: 80px;
  height: 80px;
  margin-bottom: 20px;
`;

const CompanyName = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
  text-align: center;

  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

const CompanyInfo = styled.p`
  font-size: 16px;
  margin-bottom: 5px;
  text-align: center;

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

const CompanyWebsite = styled.a`
  font-size: 16px;
  color: #007bff;
  text-decoration: none;
  text-align: center;

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

// Define the main component
const CompanyProfile: React.FC<CompanyInfoProps> = ({ name, address, phone, website }) => {
  return (
    <Container>
      {/* Render company logo */}
      <Logo src="/path/to/logo.png" alt="Company Logo" />
      
      {/* Render company name */}
      <CompanyName>{name}</CompanyName>
      
      {/* Render company address */}
      {address && <CompanyInfo>{address}</CompanyInfo>}
      
      {/* Render company phone */}
      {phone && <CompanyInfo>{phone}</CompanyInfo>}
      
      {/* Render company website */}
      {website && <CompanyWebsite href={website}>{website}</CompanyWebsite>}
    </Container>
  );
};

// Example usage of the component
const App: React.FC = () => {
  const companyInfo = {
    name: '株式会社ぎょうせい',
    address: '〒000-0000 東京都新宿区◯◯1-2-3',
    phone: '03-1234-5678',
    website: 'https://www.gyosei.co.jp',
  };

  return (
    <div>
      <h1>Company Profile Example</h1>
      <CompanyProfile {...companyInfo} />
    </div>
  );
};

export default App;