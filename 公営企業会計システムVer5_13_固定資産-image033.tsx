import React from 'react';
import styled from '@emotion/styled';

type CompanyInfoProps = {
  companyNumber: string;
  companyName: string;
  establishedDate: string;
  location: string;
  postalCode: string;
  phoneNumber: string;
  faxNumber: string;
  capital: string;
  accountingTerm: string;
  taxOffice: string;
  industry: string;
  businessType: string;
};

type BankInfoProps = {
  bankName: string;
  bankCode: string;
  bankBranchName: string;
  bankBranchCode: string;
  accountNumber: string;
  accountType: string;
};

type CompanyOverviewProps = {
  companyInfo: CompanyInfoProps;
  bankInfo: BankInfoProps;
  yearOpened: string;
  yearClosed: string;
  creditLimit: number;
  daysAllowed: number;
  balance: number;
  dueDate: string;
  paymentMethod: string;
  depositAmount: number;
  uncollectedAmount: number;
  collectionAmount: number;
  totalSales: number;
  returnedAmount: number;
  netSales: number;
};

const CompanyOverview: React.FC<CompanyOverviewProps> = ({
  companyInfo,
  bankInfo,
  yearOpened,
  yearClosed,
  creditLimit,
  daysAllowed,
  balance,
  dueDate,
  paymentMethod,
  depositAmount,
  uncollectedAmount, 
  collectionAmount,
  totalSales,
  returnedAmount,
  netSales,
}) => {
  return (
    <Container>
      <Title>取引先資産</Title>
      <CompanyInfoContainer>
        <InfoRow>
          <InfoLabel>取引先番号</InfoLabel>
          <InfoValue>{companyInfo.companyNumber || '-'}</InfoValue>
        </InfoRow>
        <InfoRow>
          <InfoLabel>銘柄</InfoLabel>
          <InfoValue>{companyInfo.companyName || '-'}</InfoValue>
        </InfoRow>
        <InfoRow>
          <InfoLabel>郵便番号</InfoLabel>
          <InfoValue>{companyInfo.postalCode || '-'}</InfoValue>
        </InfoRow>
        <InfoRow>
          <InfoLabel>所在地</InfoLabel>
          <InfoValue>{companyInfo.location || '-'}</InfoValue>
        </InfoRow>
        <InfoRow>
          <InfoLabel>電話番号</InfoLabel>
          <InfoValue>{companyInfo.phoneNumber || '-'}</InfoValue>
        </InfoRow>
        <InfoRow>
          <InfoLabel>FAX番号</InfoLabel>
          <InfoValue>{companyInfo.faxNumber || '-'}</InfoValue>
        </InfoRow>
        <InfoRow>
          <InfoLabel>資本金</InfoLabel>
          <InfoValue>{companyInfo.capital || '-'}</InfoValue>
        </InfoRow>
        <InfoRow>
          <InfoLabel>決算月</InfoLabel>
          <InfoValue>{companyInfo.accountingTerm || '-'}</InfoValue>
        </InfoRow>
        <InfoRow>
          <InfoLabel>税務署</InfoLabel>
          <InfoValue>{companyInfo.taxOffice || '-'}</InfoValue>
        </InfoRow>
        <InfoRow>
          <InfoLabel>業態</InfoLabel>
          <InfoValue>{companyInfo.industry || '-'}</InfoValue>
        </InfoRow>
        <InfoRow>
          <InfoLabel>取引形態</InfoLabel>
          <InfoValue>{companyInfo.businessType || '-'}</InfoValue>
        </InfoRow>
      </CompanyInfoContainer>
      
      <BankInfoContainer>
        <InfoRow>
          <InfoLabel>銀行名</InfoLabel>
          <InfoValue>{bankInfo.bankName || '-'}</InfoValue>
        </InfoRow>
        <InfoRow>
          <InfoLabel>銀行コード</InfoLabel>
          <InfoValue>{bankInfo.bankCode || '-'}</InfoValue>
        </InfoRow>
        <InfoRow>
          <InfoLabel>支店名</InfoLabel>
          <InfoValue>{bankInfo.bankBranchName || '-'}</InfoValue>
        </InfoRow>
        <InfoRow>
          <InfoLabel>支店コード</InfoLabel>
          <InfoValue>{bankInfo.bankBranchCode || '-'}</InfoValue>
        </InfoRow>
        <InfoRow>
          <InfoLabel>口座番号</InfoLabel>
          <InfoValue>{bankInfo.accountNumber || '-'}</InfoValue>
        </InfoRow>
        <InfoRow>
          <InfoLabel>口座種別</InfoLabel>
          <InfoValue>{bankInfo.accountType || '-'}</InfoValue>
        </InfoRow>
      </BankInfoContainer>
      
      <InfoContainer>
        <HalfInfoContainer>
          <InfoRow>
            <InfoLabel>異動摘要</InfoLabel>
            <InfoValue>{paymentMethod || '-'}</InfoValue>
          </InfoRow>
          <InfoRow>
            <InfoLabel>改良金額</InfoLabel>
            <InfoValue>{creditLimit.toLocaleString() || '0'}</InfoValue>
          </InfoRow>
          <InfoRow>
            <InfoLabel>信頼除外額</InfoLabel>
            <InfoValue>{depositAmount.toLocaleString() || '0'}</InfoValue>
          </InfoRow>
          <InfoRow>
            <InfoLabel>与信限度額</InfoLabel>
            <InfoValue>{balance.toLocaleString() || '0'}</InfoValue>
          </InfoRow>
          <InfoRow>
            <InfoLabel>信納率</InfoLabel>
            <InfoValue>{daysAllowed || '0'}</InfoValue>
          </InfoRow>
          <InfoRow>
            <InfoLabel>末日</InfoLabel>
            <InfoValue>{dueDate || '-'}</InfoValue>
          </InfoRow>
        </HalfInfoContainer>
        
        <HalfInfoContainer>
          <InfoRow>
            <InfoLabel>取得価額</InfoLabel>
            <InfoValue>{totalSales.toLocaleString() || '0'}</InfoValue>
          </InfoRow>
          <InfoRow>
            <InfoLabel>帳簿原価</InfoLabel>
            <InfoValue>{netSales.toLocaleString() || '0'}</InfoValue>
          </InfoRow>
          <InfoRow>
            <InfoLabel>増加除外額</InfoLabel>
            <InfoValue>{uncollectedAmount.toLocaleString() || '0'}</InfoValue>
          </InfoRow>
          <InfoRow>
            <InfoLabel>増加限度額</InfoLabel>
            <InfoValue>{collectionAmount.toLocaleString() || '0'}</InfoValue>
          </InfoRow>
          <InfoRow>
            <InfoLabel>増加累計額</InfoLabel>
            <InfoValue>{returnedAmount.toLocaleString() || '0'}</InfoValue>
          </InfoRow>
          <InfoRow>
            <InfoLabel>帳簿価額</InfoLabel>
            <InfoValue>{netSales.toLocaleString() || '0'}</InfoValue>
          </InfoRow>
        </HalfInfoContainer>
      </InfoContainer>
    </Container>
  );
};

// Sample data for testing
const sampleData: CompanyOverviewProps = {
  companyInfo: {
    companyNumber: '8002500',
    companyName: '051015601 (株)日水物流',
    establishedDate: '平成29年10月12日',
    location: '北九州市門司区',
    postalCode: '0001',
    phoneNumber: '093 (381) 5422',
    faxNumber: '0001',
    capital: '0001',
    accountingTerm: '03',
    taxOffice: '0000004',
    industry: '水道物設維持課',
    businessType: '取引',
  },
  bankInfo: {
    bankName: '福岡',
    bankCode: '0040',
    bankBranchName: '157 (584)',
    bankBranchCode: '700150',
    accountNumber: '普通 6,651,426',
    accountType: '普通',
  },
  yearOpened: '平成29年09月12日',
  yearClosed: '',
  creditLimit: 1800,
  daysAllowed: 10.00,
  balance: 700150,
  dueDate: '95.00',
  paymentMethod: '取引',
  depositAmount: 7000.00,
  uncollectedAmount: 0,
  collectionAmount: 7000.00, 
  totalSales: 7000.00,
  returnedAmount: 0,
  netSales: 7000.00,
};

// Rendering the component with sample data
const CompanyOverviewSample: React.FC = () => {
  return <CompanyOverview {...sampleData} />;
};

// Styled components
const Container = styled.div`
  font-family: Arial, sans-serif;
  padding: 20px;
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const HalfInfoContainer = styled.div`
  flex: 1;
`;

const CompanyInfoContainer = styled.div`
  margin-bottom: 20px;
`;

const BankInfoContainer = styled.div`
  margin-bottom: 20px;
`;

const InfoRow = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

const InfoLabel = styled.div`
  flex: 1;
  font-weight: bold;
`;

const InfoValue = styled.div`
  flex: 2;
`;

export default CompanyOverviewSample;