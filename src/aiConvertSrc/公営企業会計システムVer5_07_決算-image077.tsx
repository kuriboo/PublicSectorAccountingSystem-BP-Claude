import React from 'react';
import styled from '@emotion/styled';

interface PublicUserInformationProps {
  title: string;
  managementNumber: string;
  fiscalYearStart: string;
  fiscalYearEnd: string;
}

const PublicUserInformation: React.FC<PublicUserInformationProps> = ({
  title,
  managementNumber,
  fiscalYearStart,
  fiscalYearEnd,
}) => {
  return (
    <Container>
      <Title>{title}</Title>
      <ManagementNumber>{managementNumber}</ManagementNumber>
      <FiscalYear>
        {fiscalYearStart} ~ {fiscalYearEnd}
      </FiscalYear>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
  background-color: #f0f0f0;

  @media (max-width: 600px) {
    padding: 10px;
  }
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;

  @media (max-width: 600px) {
    font-size: 20px;
  }
`;

const ManagementNumber = styled.p`
  font-size: 18px;
  margin-bottom: 10px;

  @media (max-width: 600px) {
    font-size: 16px;
  }
`;

const FiscalYear = styled.p`
  font-size: 16px;

  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

// Usage example
const App: React.FC = () => {
  return (
    <PublicUserInformation
      title="収入区分未設定伝票一覧"
      managementNumber="管理者：経理担当　きょう田太郎"
      fiscalYearStart="令和02年04月01日"
      fiscalYearEnd="令和02年06月30日"
    />
  );
};

export default App;