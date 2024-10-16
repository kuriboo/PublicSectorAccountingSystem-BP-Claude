import React from 'react';
import styled from '@emotion/styled';

type ContractType = '買取' | '売却';

interface Property {
  type: ContractType;
  address: string;
  price: number;
  yield: number;
}

interface PropertyCardProps {
  property: Property;
}

const Card = styled.div`
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 16px;
  margin-bottom: 16px;

  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const CardTitle = styled.h3`
  margin: 0;
  font-size: 18px;
  font-weight: bold;
`;

const CardContent = styled.div`
  margin-top: 8px;

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
  }
`;

const CardInfo = styled.div`
  margin-right: 16px;
`;

const CardLabel = styled.span`
  font-size: 14px;
  color: #666;
`;

const CardValue = styled.span`
  font-size: 16px;
  font-weight: bold;
`;

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  const { type, address, price, yield: propertyYield } = property;

  return (
    <Card>
      <CardTitle>{type === '買取' ? '買取物件' : '売却物件'}</CardTitle>
      <CardContent>
        <CardInfo>
          <CardLabel>住所:</CardLabel>
          <CardValue>{address}</CardValue>
        </CardInfo>
        <CardInfo>
          <CardLabel>価格:</CardLabel>
          <CardValue>{price.toLocaleString()}万円</CardValue>
        </CardInfo>
        {propertyYield && (
          <CardInfo>
            <CardLabel>利回り:</CardLabel>
            <CardValue>{propertyYield}%</CardValue>
          </CardInfo>
        )}
      </CardContent>
    </Card>
  );
};

// Usage example
const SamplePropertyCard: React.FC = () => {
  const sampleProperty: Property = {
    type: '買取',
    address: '東京都新宿区西新宿1-1-1',
    price: 5000,
    yield: 6.5,
  };

  return (
    <div>
      <h2>物件カード</h2>
      <PropertyCard property={sampleProperty} />
    </div>
  );
};

export default SamplePropertyCard;