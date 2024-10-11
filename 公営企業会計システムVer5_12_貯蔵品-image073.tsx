import React from 'react';
import styled from 'styled-components';

interface CompanyInfoProps {
  companyName?: string;
  branchName?: string;
  postalCode?: string;
  address?: string;
  phoneNumber?: string;
  faxNumber?: string;
  paymentMethod?: 'cash' | 'transfer';
  deliveryMethod?: 'delivery' | 'pickup';
}

const CompanyInfo: React.FC<CompanyInfoProps> = ({
  companyName = '株式会社ABC商事',
  branchName = '関東営業所',
  postalCode = '1234567',
  address = '東京都港区芝公園1-2-3',
  phoneNumber = '03-1234-5678',
  faxNumber = '03-1234-5679',
  paymentMethod = 'cash',
  deliveryMethod = 'delivery',
}) => {
  return (
    <Container>
      <Title>御請求先情報</Title>
      <InfoWrapper>
        <Label>御請求範囲入力</Label>
        <InfoItem>
          <InfoLabel>決裁区分</InfoLabel>
          <InfoValue>{branchName}</InfoValue>
        </InfoItem>
        <InfoItem>
          <InfoLabel>在庫現在日</InfoLabel>
          <InfoValue>平成30年06月14日</InfoValue>
        </InfoItem>
        <InfoItem>
          <InfoLabel>保管場所</InfoLabel>
          <InfoValue>{postalCode}</InfoValue>
          <InfoLabel>～</InfoLabel>
          <InfoValue>{address}</InfoValue>
        </InfoItem>
        <InfoItem>
          <InfoLabel>品番</InfoLabel>
          <InfoValue>{phoneNumber}</InfoValue>
          <InfoLabel>～</InfoLabel>
          <InfoValue>{faxNumber}</InfoValue>
        </InfoItem>
      </InfoWrapper>
      <RadioButtonWrapper>
        <Label>数量0印字区分</Label>
        <RadioButton type="radio" name="printZeroQuantity" checked={true} />
        <span>なし</span>
        <RadioButton type="radio" name="printZeroQuantity" />
        <span>あり</span>
      </RadioButtonWrapper>
      <RadioButtonWrapper>
        <Label>印字内容</Label>
        <RadioButton type="radio" name="printContent" checked={deliveryMethod === 'delivery'} />
        <span>通常</span>
        <RadioButton type="radio" name="printContent" checked={deliveryMethod === 'pickup'} />
        <span>車庫渡し</span>
      </RadioButtonWrapper>
    </Container>
  );
};

// Styled components
const Container = styled.div`
  font-family: sans-serif;
  padding: 20px;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 600px) {
    padding: 10px;
  }
`;

const Title = styled.h2`
  margin: 0 0 20px;
  font-size: 20px;

  @media (max-width: 600px) {
    font-size: 18px;
  }
`;

const InfoWrapper = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.div`
  font-weight: bold;
  margin-bottom: 5px;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
`;

const InfoLabel = styled.div`
  width: 120px;
  font-weight: bold;

  @media (max-width: 600px) {
    width: 80px;
  }
`;

const InfoValue = styled.div`
  margin-right: 10px;
`;

const RadioButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const RadioButton = styled.input`
  margin: 0 5px 0 10px;
`;

// Usage example
const App: React.FC = () => {
  return (
    <div>
      <CompanyInfo
        companyName="XYZ Corporation"
        branchName="Tokyo Branch"
        postalCode="1000001"
        address="1-2-3 Marunouchi, Chiyoda-ku, Tokyo"
        phoneNumber="03-1234-5678"
        faxNumber="03-1234-5679"
        paymentMethod="transfer"
        deliveryMethod="pickup"
      />
    </div>
  );
};

export default App;