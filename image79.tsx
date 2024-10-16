import React from 'react';
import styled from '@emotion/styled';

type CompanyInfoProps = {
  companyName: string;
  postalCode: string;
  address: string;
  phoneNumber: string;
  faxNumber: string;
  email: string;
  representative: string;
};

const CompanyInfoWrapper = styled.div`
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 5px;
  margin-bottom: 20px;
`;

const CompanyInfoRow = styled.div`
  display: flex;
  margin-bottom: 10px;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const CompanyInfoLabel = styled.div`
  font-weight: bold;
  width: 120px;

  @media (max-width: 600px) {
    width: auto;
    margin-bottom: 5px;
  }
`;

const CompanyInfoValue = styled.div`
  flex: 1;
`;

const CompanyInfo: React.FC<CompanyInfoProps> = ({
  companyName,
  postalCode,
  address,
  phoneNumber,
  faxNumber,
  email,
  representative,
}) => {
  return (
    <CompanyInfoWrapper>
      <CompanyInfoRow>
        <CompanyInfoLabel>会社名</CompanyInfoLabel>
        <CompanyInfoValue>{companyName}</CompanyInfoValue>
      </CompanyInfoRow>
      <CompanyInfoRow>
        <CompanyInfoLabel>郵便番号</CompanyInfoLabel>
        <CompanyInfoValue>{postalCode}</CompanyInfoValue>
      </CompanyInfoRow>
      <CompanyInfoRow>
        <CompanyInfoLabel>住所</CompanyInfoLabel>
        <CompanyInfoValue>{address}</CompanyInfoValue>
      </CompanyInfoRow>
      <CompanyInfoRow>
        <CompanyInfoLabel>電話番号</CompanyInfoLabel>
        <CompanyInfoValue>{phoneNumber}</CompanyInfoValue>
      </CompanyInfoRow>
      <CompanyInfoRow>
        <CompanyInfoLabel>FAX番号</CompanyInfoLabel>
        <CompanyInfoValue>{faxNumber}</CompanyInfoValue>
      </CompanyInfoRow>
      <CompanyInfoRow>
        <CompanyInfoLabel>Email</CompanyInfoLabel>
        <CompanyInfoValue>{email}</CompanyInfoValue>
      </CompanyInfoRow>
      <CompanyInfoRow>
        <CompanyInfoLabel>代表者</CompanyInfoLabel>
        <CompanyInfoValue>{representative}</CompanyInfoValue>
      </CompanyInfoRow>
    </CompanyInfoWrapper>
  );
};

// Usage example
const CompanyInfoExample: React.FC = () => {
  const companyData: CompanyInfoProps = {
    companyName: 'ぎょうせい理研',
    postalCode: '890-0821',
    address: '行政県行政市行政区0000番地1号',
    phoneNumber: '0120-100-008',
    faxNumber: '03-0010-0008',
    email: 'test@gyosei.co.jp',
    representative: '行政 太郎',
  };

  return <CompanyInfo {...companyData} />;
};

export default CompanyInfo;