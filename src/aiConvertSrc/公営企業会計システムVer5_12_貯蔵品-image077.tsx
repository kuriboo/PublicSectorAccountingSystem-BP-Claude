import React from 'react';
import styled from '@emotion/styled';

type DetailProps = {
  code: string;
  name: string;
  regulation: string;
  currentPrice: number;
  managementFee: number;
  unitPrice: number;
  units: number;
  totalAmount: number;
  gains: number;
  gainsPercentage: number;
};

const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-family: Arial, sans-serif;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const DetailItem = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 8px;

  @media (min-width: 768px) {
    margin-bottom: 0;
    margin-right: 16px;
  }
`;

const ItemLabel = styled.span`
  font-size: 14px;
  font-weight: bold;
`;

const ItemValue = styled.span`
  font-size: 16px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 16px;
`;

const Button = styled.button`
  padding: 8px 16px;
  margin-left: 8px;
  font-size: 14px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const Detail: React.FC<DetailProps> = ({
  code,
  name,
  regulation,
  currentPrice,
  managementFee,
  unitPrice,
  units,
  totalAmount,
  gains,
  gainsPercentage,
}) => {
  // Format numbers with commas
  const formatNumber = (value: number) => {
    return value.toLocaleString();
  };

  return (
    <DetailContainer>
      <DetailItem>
        <ItemLabel>Code</ItemLabel>
        <ItemValue>{code}</ItemValue>
      </DetailItem>
      <DetailItem>
        <ItemLabel>Name</ItemLabel>
        <ItemValue>{name}</ItemValue>
      </DetailItem>
      <DetailItem>
        <ItemLabel>Regulation</ItemLabel>
        <ItemValue>{regulation}</ItemValue>
      </DetailItem>
      <DetailItem>
        <ItemLabel>Current Price</ItemLabel>
        <ItemValue>¥{formatNumber(currentPrice)}</ItemValue>
      </DetailItem>
      <DetailItem>
        <ItemLabel>Management Fee Code</ItemLabel>
        <ItemValue>{formatNumber(managementFee)}</ItemValue>
      </DetailItem>
      <DetailItem>
        <ItemLabel>Unit Price</ItemLabel>
        <ItemValue>¥{formatNumber(unitPrice)}</ItemValue>
      </DetailItem>
      <DetailItem>
        <ItemLabel>Units</ItemLabel>
        <ItemValue>{units}</ItemValue>
      </DetailItem>
      <DetailItem>
        <ItemLabel>Total Amount</ItemLabel>
        <ItemValue>¥{formatNumber(totalAmount)}</ItemValue>
      </DetailItem>
      <DetailItem>
        <ItemLabel>Gains</ItemLabel>
        <ItemValue>¥{formatNumber(gains)}</ItemValue>
      </DetailItem>
      <DetailItem>
        <ItemLabel>Gains Percentage</ItemLabel>
        <ItemValue>{gainsPercentage}%</ItemValue>
      </DetailItem>
      <ButtonContainer>
        <Button>OK</Button>
        <Button>Clear</Button>
        <Button>Cancel</Button>
      </ButtonContainer>
    </DetailContainer>
  );
};

// Sample usage
const App: React.FC = () => {
  const sampleData: DetailProps = {
    code: '600701001',
    name: 'Sample Fund',
    regulation: '200mm',
    currentPrice: 1234575,
    managementFee: 0,
    unitPrice: 2500,
    units: 0,
    totalAmount: 30196497500,
    gains: 1234575,
    gainsPercentage: 0,
  };

  return (
    <div>
      <h1>Fund Detail</h1>
      <Detail {...sampleData} />
    </div>
  );
};

export default App;