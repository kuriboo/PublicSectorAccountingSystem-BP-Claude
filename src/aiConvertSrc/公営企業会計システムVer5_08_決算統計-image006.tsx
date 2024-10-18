import React from 'react';
import styled from 'styled-components';

// Define types for component props
interface CompanyCardProps {
  name: string;
  industry: string;
  website: string;
}

// Styled components
const Card = styled.div`
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 16px;
  margin-bottom: 16px;

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

const CompanyName = styled.h3`
  font-size: 18px;
  margin: 0 0 8px;
  
  @media (min-width: 768px) {
    margin: 0;
  }
`;

const CompanyInfo = styled.div`
  font-size: 14px;
  color: #666;
`;

const CompanyWebsite = styled.a`
  color: #007bff;
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`;

// Company card component
const CompanyCard: React.FC<CompanyCardProps> = ({ name, industry, website }) => {
  // Handle missing prop values
  const companyName = name || 'Unknown Company';
  const companyIndustry = industry || 'Industry Not Specified'; 
  const companyWebsite = website || '#';

  return (
    <Card>
      <div>
        <CompanyName>{companyName}</CompanyName>
        <CompanyInfo>{companyIndustry}</CompanyInfo>
      </div>
      <CompanyWebsite href={companyWebsite} target="_blank" rel="noopener noreferrer">
        Company Website
      </CompanyWebsite>
    </Card>
  );
};

// Sample data for demonstration
const sampleCompanies = [
  {
    name: 'ABC Corporation',
    industry: 'Technology',
    website: 'https://www.abccorp.com',
  },
  {
    name: 'XYZ Industries',
    industry: 'Manufacturing',
    website: 'https://www.xyzindustries.com',
  },
  {
    name: '123 Solutions',
    industry: 'Consulting',
    website: 'https://www.123solutions.com',
  },
];

// Component to display a list of company cards
const CompanyList: React.FC = () => {
  return (
    <div>
      {sampleCompanies.map((company, index) => (
        <CompanyCard
          key={index}
          name={company.name}
          industry={company.industry}
          website={company.website}
        />
      ))}
    </div>
  );
};

export default CompanyList;