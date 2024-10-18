import React from 'react';
import styled from '@emotion/styled';

type Company = {
  name: string;
  description: string;
};

type CompanyListProps = {
  companies: Company[];
};

const CompanyListWrapper = styled.div`
  font-family: sans-serif;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const CompanyListTitle = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  text-align: center;

  @media (max-width: 600px) {
    font-size: 20px;
  }
`;

const CompanyListItems = styled.ul`
  list-style: none;
  padding: 0;
`;

const CompanyListItem = styled.li`
  background-color: #f5f5f5;
  border-radius: 5px;
  padding: 20px;
  margin-bottom: 20px;

  @media (max-width: 600px) {
    padding: 15px;
  }
`;

const CompanyName = styled.h2`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;

  @media (max-width: 600px) {
    font-size: 18px;
  }
`;

const CompanyDescription = styled.p`
  font-size: 16px;
  line-height: 1.5;

  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

const CompanyList: React.FC<CompanyListProps> = ({ companies }) => {
  return (
    <CompanyListWrapper>
      <CompanyListTitle>株式会社ぎょうせいシステム事業部</CompanyListTitle>
      <CompanyListItems>
        {companies.map((company, index) => (
          <CompanyListItem key={index}>
            <CompanyName>{company.name}</CompanyName>
            <CompanyDescription>{company.description}</CompanyDescription>
          </CompanyListItem>
        ))}
      </CompanyListItems>
    </CompanyListWrapper>
  );
};

// Usage example
const sampleCompanies: Company[] = [
  {
    name: 'Company 1',
    description: 'Description of Company 1',
  },
  {
    name: 'Company 2',
    description: 'Description of Company 2',
  },
  // Add more sample companies as needed
];

const App: React.FC = () => {
  return <CompanyList companies={sampleCompanies} />;
};

export default App;