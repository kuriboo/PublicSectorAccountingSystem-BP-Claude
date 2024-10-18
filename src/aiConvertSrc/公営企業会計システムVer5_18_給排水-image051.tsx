import React from 'react';
import styled from '@emotion/styled';

// 形状リストの型定義
interface Shape {
  thickness: number;
  shape: string;
  price: number;
}

// Priceコンポーネントのプロパティの型定義
interface PriceProps {
  shapes: Shape[];
  taxRate: number;
  totalPrice: number;
  consumption: number;
}

// スタイル定義
const PriceContainer = styled.div`
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 4px;
`;

const Title = styled.h2`
  font-size: 18px;
  margin-bottom: 10px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
`;

const TableHeader = styled.th`
  background-color: #e0e0e0;
  padding: 8px;
  text-align: left;
`;

const TableCell = styled.td`
  padding: 8px;
`;

const TotalRow = styled.tr`
  font-weight: bold;
`;

const Price: React.FC<PriceProps> = ({ shapes, taxRate, totalPrice, consumption }) => {
  return (
    <PriceContainer>
      <Title>形状リスト</Title>
      <Table>
        <thead>
          <tr>
            <TableHeader>形状コード</TableHeader>
            <TableHeader>形状名称</TableHeader>
            <TableHeader>単価</TableHeader>
          </tr>
        </thead>
        <tbody>
          {shapes.map((shape, index) => (
            <tr key={index}>
              <TableCell>{shape.thickness}</TableCell>
              <TableCell>{shape.shape}</TableCell>
              <TableCell>{shape.price.toLocaleString()}</TableCell>
            </tr>
          ))}
          <TotalRow>
            <TableCell colSpan={2}>金額</TableCell>
            <TableCell>{totalPrice.toLocaleString()}</TableCell>
          </TotalRow>
        </tbody>
      </Table>
      <div>
        <span>消費税率: {taxRate}%</span>
        <span> 消費税額: {consumption}</span>
      </div>
    </PriceContainer>
  );
};

// サンプルデータ
const sampleShapes: Shape[] = [
  { thickness: 13, shape: '13mm', price: 157500 },
  { thickness: 20, shape: '20mm', price: 210000 },
  { thickness: 25, shape: '25mm', price: 420000 },
  { thickness: 30, shape: '30mm', price: 525000 },
  { thickness: 40, shape: '40mm', price: 1050000 },
  { thickness: 50, shape: '50mm', price: 1575000 },
];

const PriceExample: React.FC = () => {
  return <Price shapes={sampleShapes} taxRate={10} totalPrice={157500} consumption={0} />;
};

export default PriceExample;