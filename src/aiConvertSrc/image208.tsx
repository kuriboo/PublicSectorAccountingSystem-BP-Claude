import React from 'react';
import styled from '@emotion/styled';

type ProductScheduleProps = {
  reservationDate: string;
  productNumber: string;
  modelNumber: string;
};

type TaxRateProps = {
  basicUnitPrice: number;
  sellingPrice: number;
  quantity: number;
  unit: string;
  amount: number;
  taxRate: number;
};

const Container = styled.div`
  font-family: Arial, sans-serif;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 5px;
`;

const Title = styled.h2`
  margin-bottom: 10px;
`;

const DataGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 10px;
  margin-bottom: 20px;
`;

const DataItem = styled.div`
  background-color: #fff;
  padding: 10px;
  border-radius: 5px;
  text-align: center;
`;

const ButtonContainer = styled.div`
  text-align: right;
`;

const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
`;

const ProductSchedule: React.FC<ProductScheduleProps> = ({
  reservationDate,
  productNumber,
  modelNumber,
}) => {
  return (
    <div>
      <div>予算日: {reservationDate}</div>
      <div>予算品: {productNumber}</div>
      <div>予算明細: {modelNumber}</div>
    </div>
  );
};

const TaxRate: React.FC<TaxRateProps> = ({
  basicUnitPrice,
  sellingPrice,
  quantity,
  unit,
  amount,
  taxRate,
}) => {
  return (
    <DataGrid>
      <DataItem>基価単価: {basicUnitPrice}</DataItem>
      <DataItem>規格名称: {sellingPrice}</DataItem>
      <DataItem>数量: {quantity}</DataItem>
      <DataItem>単位: {unit}</DataItem>
      <DataItem>金額: {amount}</DataItem>
      <DataItem>金額: {taxRate}%</DataItem>
    </DataGrid>
  );
};

const SampleUsage: React.FC = () => {
  // サンプルデータ
  const productSchedule = {
    reservationDate: '0020/01/01',
    productNumber: '0001',
    modelNumber: '1001',
  };

  const taxRate = {
    basicUnitPrice: 1.0,
    sellingPrice: 100.0,
    quantity: 100,
    unit: '本',
    amount: 10000,
    taxRate: 10,
  };

  return (
    <Container>
      <Title>物品詳細</Title>
      <ProductSchedule {...productSchedule} />
      <TaxRate {...taxRate} />
      <ButtonContainer>
        <Button>キャンセル</Button>
      </ButtonContainer>
    </Container>
  );
};

export default SampleUsage;