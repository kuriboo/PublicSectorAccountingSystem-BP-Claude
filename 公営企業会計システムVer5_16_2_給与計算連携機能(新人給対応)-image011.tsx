import React from 'react';
import styled from 'styled-components';

// Define types for component props
interface CompanyProfileProps {
  name: string;
  website: string;
  industry: string;
  established: string;
  capital: string;
  employees: string;
  businessDescription: string;
  logo?: string;
}

// Define styled components
const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const CompanyLogo = styled.img`
  width: 100px;
  height: 100px;
  object-fit: contain;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    margin-right: 20px;
    margin-bottom: 0;
  }
`;

const CompanyInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const CompanyName = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
`;

const InfoItem = styled.p`
  margin-bottom: 5px;
`;

const BusinessDescription = styled.p`
  margin-top: 20px;
  text-align: justify;
`;

// Define the CompanyProfile component
const CompanyProfile: React.FC<CompanyProfileProps> = ({
  name,
  website,
  industry,
  established,
  capital,
  employees,
  businessDescription,
  logo,
}) => {
  return (
    <ProfileContainer>
      {/* Render company logo if provided */}
      {logo && <CompanyLogo src={logo} alt={`${name} logo`} />}
      <CompanyInfo>
        {/* Render company name */}
        <CompanyName>{name}</CompanyName>
        {/* Render website if provided */}
        {website && <InfoItem>Website: {website}</InfoItem>}
        {/* Render industry if provided */}
        {industry && <InfoItem>Industry: {industry}</InfoItem>}
        {/* Render established year if provided */}
        {established && <InfoItem>Established: {established}</InfoItem>}
        {/* Render capital if provided */}
        {capital && <InfoItem>Capital: {capital}</InfoItem>}
        {/* Render number of employees if provided */}
        {employees && <InfoItem>Employees: {employees}</InfoItem>}
      </CompanyInfo>
      {/* Render business description if provided */}
      {businessDescription && (
        <BusinessDescription>{businessDescription}</BusinessDescription>
      )}
    </ProfileContainer>
  );
};

// Example usage of the CompanyProfile component
const CompanyProfileExample = () => {
  const companyData = {
    name: 'ぎょうせいシステム事業部',
    website: 'https://example.com',
    industry: 'IT Services',
    established: '2000年',
    capital: '1億円',
    employees: '100名',
    businessDescription: 'ぎょうせいシステム事業部は、ITサービスを提供する事業部です。',
    logo: 'https://example.com/logo.png',
  };

  return <CompanyProfile {...companyData} />;
};

export default CompanyProfileExample;