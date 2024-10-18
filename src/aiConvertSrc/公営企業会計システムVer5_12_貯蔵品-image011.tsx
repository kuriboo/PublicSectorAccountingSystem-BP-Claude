import React from 'react';
import styled from 'styled-components';

interface BondOrderProps {
  productName: string;
  price: number;
  volume: number;
  unit: string;
  onOk?: () => void;
  onClear?: () => void;
  onCancel?: () => void;
}

const BondOrder: React.FC<BondOrderProps> = ({
  productName,
  price,
  volume,
  unit,
  onOk,
  onClear,
  onCancel,
}) => {
  return (
    <Container>
      <Title>発注予定明細編集</Title>
      <InfoContainer>
        <Label>品番</Label>
        <Value>{productName}</Value>
        <Label>品名</Label>
        <Value>DIF(A1)精鉄管</Value>
        <Label>規格</Label>
        <Value>φ.75</Value>
        <Label>単位</Label>
        <Value>{unit}</Value>
      </InfoContainer>
      <PriceContainer>
        <Label>数量</Label>
        <PriceInput type="number" value={volume} />
        <Multiplier>X</Multiplier>
        <Label>単価</Label>
        <PriceValue>{price.toLocaleString()}</PriceValue>
      </PriceContainer>
      <TotalContainer>
        <TotalLabel>金額</TotalLabel>
        <TotalValue>{(price * volume).toLocaleString()}</TotalValue>
      </TotalContainer>
      <ButtonContainer>
        <Button onClick={onOk}>OK</Button>
        <Button onClick={onClear}>クリア</Button>
        <Button onClick={onCancel}>キャンセル</Button>
      </ButtonContainer>
    </Container>
  );
};

// Stylings
const Container = styled.div`
  background-color: #f0f0f0;
  padding: 16px;
  border-radius: 8px;
  width: 400px;

  @media (max-width: 480px) {
    width: 100%;
  }
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 16px;
  text-align: center;
`;

const InfoContainer = styled.div`
  display: grid;
  grid-template-columns: 80px 1fr;
  gap: 8px;
  margin-bottom: 16px;
`;

const Label = styled.div`
  font-weight: bold;
`;

const Value = styled.div``;

const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
`;

const PriceInput = styled.input`
  width: 100px;
  padding: 4px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Multiplier = styled.div`
  margin: 0 8px;
`;

const PriceValue = styled.div``;

const TotalContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 16px;
  margin-bottom: 16px;
`;

const TotalLabel = styled.div`
  font-weight: bold;
`;

const TotalValue = styled.div`
  font-size: 24px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
`;

const Button = styled.button`
  padding: 8px 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

// Usage example
const BondOrderExample = () => {
  const handleOk = () => {
    console.log('OK clicked');
  };

  const handleClear = () => {
    console.log('Clear clicked');
  };

  const handleCancel = () => {
    console.log('Cancel clicked');
  };

  return (
    <BondOrder
      productName="000.999000"
      price={13230}
      volume={1}
      unit="本"
      onOk={handleOk}
      onClear={handleClear}  
      onCancel={handleCancel}
    />
  );
};

export default BondOrderExample;