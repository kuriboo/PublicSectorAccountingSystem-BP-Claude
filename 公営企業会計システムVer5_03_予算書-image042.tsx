import React from 'react';
import styled from 'styled-components';

// Define types for component props
type BusinessCardProps = {
  company: string;
  name: string;
  department: string;
  title: string;
  phone: string;
  email: string;
  website: string;
};

// Define styled components
const CardContainer = styled.div`
  width: 400px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 480px) {
    width: 100%;
  }
`;

const CompanyLogo = styled.div`
  width: 80px;
  height: 80px;
  margin-bottom: 20px;
  border-radius: 50%;
  background-color: #f0f0f0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  font-weight: bold;
`;

const CardContent = styled.div`
  text-align: center;
`;

const Name = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
`;

const Department = styled.p`
  font-size: 16px;
  color: #666;
  margin-bottom: 5px;
`;

const Title = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const ContactInfo = styled.p`
  font-size: 14px;
  margin-bottom: 5px;
`;

const Website = styled.a`
  font-size: 14px;
  color: #007bff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

// Define the BusinessCard component
const BusinessCard: React.FC<BusinessCardProps> = ({
  company,
  name,
  department,
  title,
  phone,
  email,
  website,
}) => {
  return (
    <CardContainer>
      <CompanyLogo>{company.charAt(0)}</CompanyLogo>
      <CardContent>
        <Name>{name}</Name>
        {department && <Department>{department}</Department>}
        <Title>{title}</Title>
        <ContactInfo>{phone}</ContactInfo>
        <ContactInfo>{email}</ContactInfo>
        <Website href={website} target="_blank" rel="noopener noreferrer">
          {website}
        </Website>
      </CardContent>
    </CardContainer>
  );
};

// Example usage of the BusinessCard component
const ExampleBusinessCard: React.FC = () => {
  const businessCardData: BusinessCardProps = {
    company: 'ABC株式会社',
    name: '山田太郎',
    department: 'システム事業部',
    title: 'エンジニア',
    phone: '03-1234-5678',
    email: 'yamada@example.com',
    website: 'https://www.example.com',
  };

  return <BusinessCard {...businessCardData} />;
};

export default ExampleBusinessCard;