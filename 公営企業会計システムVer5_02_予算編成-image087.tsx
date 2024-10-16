import React from 'react';
import styled from '@emotion/styled';

interface CompanyInfoProps {
  companyYear: string;
  companyName: string;
  presidentName: string;
  maxEmployees: number;
}

const CompanyInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  max-width: 400px;
  margin: 0 auto;

  @media (max-width: 600px) {
    max-width: 100%;
  }
`;

const CompanyInfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 10px;
`;

const CompanyInfoLabel = styled.span`
  font-weight: bold;
`;

const CompanyInfoValue = styled.span``;

const CompanyInfo: React.FC<CompanyInfoProps> = ({
  companyYear,
  companyName,
  presidentName,
  maxEmployees,
}) => {
  return (
    <CompanyInfoContainer>
      <CompanyInfoRow>
        <CompanyInfoLabel>会計年度</CompanyInfoLabel>
        <CompanyInfoValue>{companyYear || '-'}</CompanyInfoValue>
      </CompanyInfoRow>
      <CompanyInfoRow>
        <CompanyInfoLabel>予算繰越区分</CompanyInfoLabel>
        <CompanyInfoValue>{companyName || '-'}</CompanyInfoValue>
      </CompanyInfoRow>
      <CompanyInfoRow>
        <CompanyInfoLabel>最終査定値</CompanyInfoLabel>
        <CompanyInfoValue>{presidentName || '-'}</CompanyInfoValue>
      </CompanyInfoRow>
      <CompanyInfoRow>
        <CompanyInfoLabel>査定額</CompanyInfoLabel>
        <CompanyInfoValue>{maxEmployees || 0}回</CompanyInfoValue>
      </CompanyInfoRow>
    </CompanyInfoContainer>
  );
};

// Usage example
const App: React.FC = () => {
  const companyInfo = {
    companyYear: '令和03年度',
    companyName: '当初予算',
    presidentName: '査定額',
    maxEmployees: 1,
  };

  return (
    <div>
      <h1>Company Information</h1>
      <CompanyInfo {...companyInfo} />
    </div>
  );
};

export default App;