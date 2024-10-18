import React from 'react';
import styled from '@emotion/styled';

type CertificateProps = {
  companyName: string;
  date: string;
  title: string;
  description: string;
  items: string[];
};

const CertificateContainer = styled.div`
  font-family: Arial, sans-serif;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
  max-width: 600px;
  margin: 0 auto;

  @media (max-width: 600px) {
    padding: 10px;
  }
`;

const CertificateTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;

  @media (max-width: 600px) {
    font-size: 20px;
  }
`;

const CertificateInfo = styled.div`
  margin-bottom: 20px;
`;

const CertificateDescription = styled.p`
  margin-bottom: 10px;
`;

const CertificateItemList = styled.ol`
  padding-left: 20px;
`;

const CertificateItem = styled.li`
  margin-bottom: 5px;
`;

const Certificate: React.FC<CertificateProps> = ({
  companyName,
  date,
  title,
  description,
  items,
}) => {
  return (
    <CertificateContainer>
      <CertificateTitle>{title}</CertificateTitle>
      <CertificateInfo>
        <p>発行会社: {companyName}</p>
        <p>発行日: {date}</p>
      </CertificateInfo>
      <CertificateDescription>{description}</CertificateDescription>
      {items.length > 0 && (
        <CertificateItemList>
          {items.map((item, index) => (
            <CertificateItem key={index}>{item}</CertificateItem>
          ))}
        </CertificateItemList>
      )}
    </CertificateContainer>
  );
};

// サンプルデータを使用した表示用コンポーネント
const SampleCertificate: React.FC = () => {
  const sampleData: CertificateProps = {
    companyName: '株式会社きらめい工業',
    date: '平成26年 5月 28日',
    title: '表彰状',
    description: '本社水槽設置工事施工に際し、工程遵守はもとより、品質・安全面でも優れた施工管理により工事を完遂されました。よって表彰します。',
    items: [
      '給水装置設置業務 事業部長表彰第13-18-11',
      '給水装置設置業務 中請第一部',
      '表彰条件',
    ],
  };

  return <Certificate {...sampleData} />;
};

export default SampleCertificate;