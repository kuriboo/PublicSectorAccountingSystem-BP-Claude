import React from 'react';
import styled from 'styled-components';

interface PriceListProps {
  priceList: {
    diameter: number;
    thickness: number;
    price: number;
  }[];
}

const PriceListTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  th, td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: center;
  }
  th {
    background-color: #f0f0f0;
  }
`;

const PriceList: React.FC<PriceListProps> = ({ priceList }) => {
  return (
    <PriceListTable>
      <thead>
        <tr>
          <th>形状コード</th>
          <th>形状名称</th>
          <th>単価</th>
        </tr>
      </thead>
      <tbody>
        {priceList.map((item, index) => (
          <tr key={index}>
            <td>{item.diameter}</td>
            <td>{item.thickness}mm</td>
            <td>{item.price.toLocaleString()}</td>
          </tr>
        ))}
      </tbody>
    </PriceListTable>
  );
};

const TotalPriceSection = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
`;

const TotalPriceLabel = styled.span`
  font-weight: bold;
`;

interface PriceCalculatorProps {
  priceList: {
    diameter: number;
    thickness: number;
    price: number;
  }[];
  totalPrice: number;
  taxRate: number;
  totalPriceWithTax: number;
  discountRate: number;
  discountedPrice: number;
}

const PriceCalculator: React.FC<PriceCalculatorProps> = ({
  priceList,
  totalPrice,
  taxRate,
  totalPriceWithTax,
  discountRate,
  discountedPrice,
}) => {
  return (
    <div>
      <PriceList priceList={priceList} />
      <TotalPriceSection>
        <div>
          <TotalPriceLabel>単価</TotalPriceLabel>
          {totalPrice.toLocaleString()}
        </div>
        <div>
          <TotalPriceLabel>消費税率</TotalPriceLabel>
          {taxRate}%
        </div>
        <div>
          <TotalPriceLabel>金額</TotalPriceLabel>
          {totalPriceWithTax.toLocaleString()}
        </div>
      </TotalPriceSection>
      <TotalPriceSection>
        <div>
          <TotalPriceLabel>消費税</TotalPriceLabel>
          {((totalPriceWithTax - totalPrice) / taxRate).toLocaleString()}
        </div>
        <div>
          <TotalPriceLabel>消費税額</TotalPriceLabel>
          {(totalPriceWithTax - totalPrice).toLocaleString()}
        </div>
      </TotalPriceSection>
    </div>
  );
};

// Usage example
const samplePriceList = [
  { diameter: 13, thickness: 20, price: 210000 },
  { diameter: 20, thickness: 25, price: 420000 },
  { diameter: 30, thickness: 40, price: 525000 },
  { diameter: 40, thickness: 50, price: 1050000 },
  { diameter: 50, thickness: 50, price: 1575000 },
];

const PriceCalculatorExample: React.FC = () => {
  const totalPrice = 157500;
  const taxRate = 10;
  const totalPriceWithTax = 157500;
  const discountRate = 0;
  const discountedPrice = totalPriceWithTax;

  return (
    <PriceCalculator
      priceList={samplePriceList}
      totalPrice={totalPrice}
      taxRate={taxRate}  
      totalPriceWithTax={totalPriceWithTax}
      discountRate={discountRate}
      discountedPrice={discountedPrice}
    />
  );
};

export default PriceCalculatorExample;