import React from 'react';
import styled from '@emotion/styled';

type CompanyInfoProps = {
  companyName: string;
  companyCode: string;
  fiscalYear?: number;
  industry?: string;
  dateOfEstablishment?: string;
  address?: string;
  phone?: string;
  segment?: string;
  businessDetails?: string;
  numberOfEmployees?: number;
  capitalAmount?: number;
  listedExchange?: string;
  settlementDate?: string;
  dividendUnit?: number;
  unitAmountOfStocks?: number;
  underwritingInstitution?: string;
};

const CompanyInfoContainer = styled.div`
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 5px;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const CompanyName = styled.h2`
  font-size: 24px;
  margin: 0 0 10px;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const CompanyCode = styled.p`
  font-size: 18px;
  color: #666;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  margin-top: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
`;

const InfoLabel = styled.span`
  font-weight: bold;
  margin-right: 5px;
`;

const InfoValue = styled.span``;

const CompanyInfo: React.FC<CompanyInfoProps> = ({
  companyName,
  companyCode,
  fiscalYear,
  industry,
  dateOfEstablishment,
  address,
  phone,
  segment,
  businessDetails,
  numberOfEmployees,
  capitalAmount,
  listedExchange,
  settlementDate,
  dividendUnit,
  unitAmountOfStocks,
  underwritingInstitution,
}) => {
  return (
    <CompanyInfoContainer>
      <CompanyName>{companyName}</CompanyName>
      <CompanyCode>{companyCode}</CompanyCode>

      <InfoGrid>
        {fiscalYear && (
          <InfoItem>
            <InfoLabel>決算:</InfoLabel>
            <InfoValue>{fiscalYear}年</InfoValue>
          </InfoItem>
        )}
        {industry && (
          <InfoItem>
            <InfoLabel>業種:</InfoLabel>
            <InfoValue>{industry}</InfoValue>
          </InfoItem>
        )}
        {dateOfEstablishment && (
          <InfoItem>
            <InfoLabel>設立:</InfoLabel>
            <InfoValue>{dateOfEstablishment}</InfoValue>
          </InfoItem>
        )}
        {address && (
          <InfoItem>
            <InfoLabel>所在地:</InfoLabel>
            <InfoValue>{address}</InfoValue>
          </InfoItem>
        )}
        {phone && (
          <InfoItem>
            <InfoLabel>電話:</InfoLabel>
            <InfoValue>{phone}</InfoValue>
          </InfoItem>
        )}
        {segment && (
          <InfoItem>
            <InfoLabel>セグメント:</InfoLabel>
            <InfoValue>{segment}</InfoValue>
          </InfoItem>
        )}
        {businessDetails && (
          <InfoItem>
            <InfoLabel>事業内容:</InfoLabel>
            <InfoValue>{businessDetails}</InfoValue>
          </InfoItem>
        )}
        {numberOfEmployees && (
          <InfoItem>
            <InfoLabel>従業員数:</InfoLabel>
            <InfoValue>{numberOfEmployees}人</InfoValue>
          </InfoItem>
        )}
        {capitalAmount && (
          <InfoItem>
            <InfoLabel>資本金:</InfoLabel>
            <InfoValue>{capitalAmount}百万円</InfoValue>
          </InfoItem>
        )}
        {listedExchange && (
          <InfoItem>
            <InfoLabel>上場:</InfoLabel>
            <InfoValue>{listedExchange}</InfoValue>
          </InfoItem>
        )}
        {settlementDate && (
          <InfoItem>
            <InfoLabel>決算期:</InfoLabel>
            <InfoValue>{settlementDate}</InfoValue>
          </InfoItem>
        )}
        {dividendUnit && (
          <InfoItem>
            <InfoLabel>配当基準:</InfoLabel>
            <InfoValue>{dividendUnit}</InfoValue>
          </InfoItem>
        )}
        {unitAmountOfStocks && (
          <InfoItem>
            <InfoLabel>単元株:</InfoLabel>
            <InfoValue>{unitAmountOfStocks}</InfoValue>
          </InfoItem>
        )}
        {underwritingInstitution && (
          <InfoItem>
            <InfoLabel>引受証券:</InfoLabel>
            <InfoValue>{underwritingInstitution}</InfoValue>
          </InfoItem>
        )}
      </InfoGrid>
    </CompanyInfoContainer>
  );
};

// サンプル使用例
const SampleUsage: React.FC = () => {
  return (
    <CompanyInfo
      companyName="株式会社サンプル"
      companyCode="9999"
      fiscalYear={2023}
      industry="サンプル業界"
      dateOfEstablishment="2000年1月1日"
      address="東京都サンプル区1-2-3"
      phone="03-1234-5678"
      segment="サンプルセグメント"
      businessDetails="サンプル事業の詳細"
      numberOfEmployees={100}
      capitalAmount={1000}
      listedExchange="東証1部"
      settlementDate="3月31日"
      dividendUnit={100}
      unitAmountOfStocks={100}
      underwritingInstitution="サンプル証券"
    />
  );
};

export default SampleUsage;