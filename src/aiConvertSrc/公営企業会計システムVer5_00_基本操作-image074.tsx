```typescript
import React from 'react';
import styled from '@emotion/styled';

// Define the prop types for the component
interface CompanyInfoProps {
  companyName: string;
  departmentName: string;
  employeeName: string;
  employeeTitle: string;
}

// Create a styled component for the container
const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;
  border-bottom: 1px solid #ccc;
  
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

// Create a styled component for the company logo
const CompanyLogo = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #f0f0f0;
  margin-right: 16px;
  
  @media (max-width: 600px) {
    margin-right: 0;
    margin-bottom: 8px;
  }
`;

// Create a styled component for the info section
const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
`;

// Create a styled component for the company name
const CompanyName = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 4px;
`;

// Create a styled component for the department name
const DepartmentName = styled.p`
  font-size: 14px;
  color: #666;
  margin-bottom: 8px;
`;

// Create a styled component for the employee info
const EmployeeInfo = styled.div`
  display: flex;
  align-items: center;
`;

// Create a styled component for the employee name
const EmployeeName = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin-right: 8px;
`;

// Create a styled component for the employee title
const EmployeeTitle = styled.p`
  font-size: 14px;
  color: #666;
`;

// Define the CompanyInfo component
const CompanyInfo: React.FC<CompanyInfoProps> = ({
  companyName,
  departmentName,
  employeeName,
  employeeTitle,
}) => {
  return (
    <Container>
      <CompanyLogo />
      <InfoSection>
        <CompanyName>{companyName}</CompanyName>
        <DepartmentName>{departmentName}</DepartmentName>
        <EmployeeInfo>
          <EmployeeName>{employeeName}</EmployeeName>
          <EmployeeTitle>{employeeTitle}</EmployeeTitle>
        </EmployeeInfo>
      </InfoSection>
    </Container>
  );
};

// Example usage of the CompanyInfo component
const CompanyInfoExample: React.FC = () => {
  const companyInfoData = {
    companyName: '株式会社ぎょうせい',
    departmentName: 'システム事業部',
    employeeName: '山田太郎',
    employeeTitle: 'エンジニア',
  };

  return (
    <div>
      <CompanyInfo {...companyInfoData} />
    </div>
  );
};

export default CompanyInfo;