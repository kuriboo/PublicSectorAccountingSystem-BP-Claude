import React from 'react';
import styled from '@emotion/styled';

interface CompanyData {
  postalCode: string;
  address: string;
  companyName: string;
  phoneNumber: string;
  faxNumber: string;
  url: string;
  accountNumber: string;
  taxOffice: string;
}

interface CompanyInfoProps {
  data: CompanyData;
}

const CompanyInfoContainer = styled.div`
  background-color: #f0f0f0;
  padding: 16px;
  border-radius: 8px;
  width: 100%;
  max-width: 400px;
  box-sizing: border-box;

  @media (max-width: 480px) {
    max-width: 100%;
  }
`;

const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`;

const Label = styled.span`
  font-weight: bold;
`;

const Value = styled.span`
  word-break: break-all;
`;

const CompanyInfo: React.FC<CompanyInfoProps> = ({ data }) => {
  // デフォルト値を設定
  const {
    postalCode = '',
    address = '',
    companyName = '',
    phoneNumber = '',
    faxNumber = '',
    url = '',
    accountNumber = '',
    taxOffice = '',
  } = data;

  return (
    <CompanyInfoContainer>
      <InfoRow>
        <Label>郵便番号:</Label>
        <Value>{postalCode}</Value>
      </InfoRow>
      <InfoRow>
        <Label>住所:</Label>
        <Value>{address}</Value>
      </InfoRow>
      <InfoRow>
        <Label>会社名:</Label>
        <Value>{companyName}</Value>
      </InfoRow>
      <InfoRow>
        <Label>電話番号:</Label>
        <Value>{phoneNumber}</Value>
      </InfoRow>
      <InfoRow>
        <Label>FAX番号:</Label>
        <Value>{faxNumber}</Value>
      </InfoRow>
      <InfoRow>
        <Label>URL:</Label>
        <Value>{url}</Value>
      </InfoRow>
      <InfoRow>
        <Label>口座番号:</Label>
        <Value>{accountNumber}</Value>
      </InfoRow>
      <InfoRow>
        <Label>税務署:</Label>
        <Value>{taxOffice}</Value>
      </InfoRow>
    </CompanyInfoContainer>
  );
};

// サンプルデータを用いた使用例
const sampleData: CompanyData = {
  postalCode: '0000000',
  address: '東京都港区',
  companyName: '株式会社サンプル',
  phoneNumber: '03-1234-5678',
  faxNumber: '03-1234-5679',
  url: 'https://example.com',
  accountNumber: '1234567',
  taxOffice: '品川税務署',
};

const App: React.FC = () => {
  return (
    <div>
      <h1>会社情報</h1>
      <CompanyInfo data={sampleData} />
    </div>
  );
};

export default App;