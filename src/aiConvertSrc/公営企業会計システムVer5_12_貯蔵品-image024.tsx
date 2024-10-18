import React from 'react';
import styled from '@emotion/styled';

interface PricingProps {
  productName: string;
  unitPrice: number;
  quantity: number;
  height: number;
  width: number;
  price: number;
  isMetric?: boolean;
}

const PricingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-family: Arial, sans-serif;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const PricingHeader = styled.div`
  margin-bottom: 20px;
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
  }
`;

const PricingDetails = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const PricingLabel = styled.span`
  font-weight: bold;
`;

const PricingValue = styled.span`
  text-align: right;
`;

const PricingActions = styled.div`
  display: flex;
  gap: 10px;
`;

const PricingButton = styled.button`
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: #fff;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const Pricing: React.FC<PricingProps> = ({
  productName,
  unitPrice,
  quantity,
  height,
  width,
  price,
  isMetric = false,
}) => {
  // Format the price with commas
  const formatPrice = (value: number) => {
    return value.toLocaleString();
  };

  return (
    <PricingContainer>
      <PricingHeader>
        <h3>{productName || 'Product Name'}</h3>
        <p>Unit Price: {formatPrice(unitPrice)}</p>
      </PricingHeader>
      <PricingDetails>
        <PricingLabel>Quantity:</PricingLabel>
        <PricingValue>{quantity}</PricingValue>
        <PricingLabel>{isMetric ? 'Height (cm):' : 'Height (in):'}</PricingLabel>
        <PricingValue>{height}</PricingValue>
        <PricingLabel>{isMetric ? 'Width (cm):' : 'Width (in):'}</PricingLabel>
        <PricingValue>{width}</PricingValue>
      </PricingDetails>
      <p>Price: {formatPrice(price)}</p>
      <PricingActions>
        <PricingButton>OK</PricingButton>
        <PricingButton>Clear</PricingButton>
        <PricingButton>Cancel</PricingButton>
      </PricingActions>
    </PricingContainer>
  );
};

// Example usage
const App: React.FC = () => {
  return (
    <div>
      <h1>Pricing Example</h1>
      <Pricing
        productName="Sample Item"
        unitPrice={1000}
        quantity={5}
        height={200}
        width={300}
        price={2205950}
        isMetric={true}
      />
    </div>
  );
};

export default App;