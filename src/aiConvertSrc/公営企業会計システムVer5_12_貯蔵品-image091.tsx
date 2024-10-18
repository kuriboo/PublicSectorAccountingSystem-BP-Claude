import React from 'react';
import styled from '@emotion/styled';

interface ProductBrowserProps {
  currentYear: number;
  currentMonth: number;
  products: string[];
  onProductSelect: (product: string) => void;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f0f0f0;
  font-family: Arial, sans-serif;
`;

const Title = styled.h2`
  margin-bottom: 10px;
`;

const YearMonthSelector = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const Label = styled.label`
  margin-right: 10px;
`;

const Select = styled.select`
  padding: 5px;
  font-size: 16px;
`;

const ProductList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  width: 100%;
`;

const ProductItem = styled.li`
  margin-bottom: 10px;
  padding: 10px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f5f5f5;
  }
`;

const Note = styled.p`
  margin-top: 20px;
  font-size: 14px;
  color: #666;
`;

const ProductBrowser: React.FC<ProductBrowserProps> = ({
  currentYear,
  currentMonth,
  products,
  onProductSelect,
}) => {
  // Generate options for year dropdown
  const yearOptions = [];
  for (let year = currentYear; year >= 2000; year--) {
    yearOptions.push(
      <option key={year} value={year}>
        {year}
      </option>
    );
  }

  // Generate options for month dropdown
  const monthOptions = [];
  for (let month = 1; month <= 12; month++) {
    monthOptions.push(
      <option key={month} value={month}>
        {month}月
      </option>
    );
  }

  return (
    <Container>
      <Title>同一品番在庫金額投分処理</Title>
      <YearMonthSelector>
        <Label>接分処理</Label>
        <Select defaultValue={currentYear}>{yearOptions}</Select>年
        <Select defaultValue={currentMonth}>{monthOptions}</Select>月
      </YearMonthSelector>
      <ProductList>
        {products.map((product, index) => (
          <ProductItem key={index} onClick={() => onProductSelect(product)}>
            {product}
          </ProductItem>
        ))}
      </ProductList>
      {products.length === 0 && (
        <Note>
          複数保管場所、同一品番、移動平均法で管理している貯蔵品について、在庫金額に応じて「在庫金額投分処理」を行う機能です。
        </Note>
      )}
      <Note>
        年度末の期間処理後、次算償却定後に処理を行ってください。
        「次年度繰越データ作成」(「委託第1の期首残高「累計在庫金額」作成)処理後に処理を行ってください。
      </Note>
    </Container>
  );
};

// Example usage
const SampleProductBrowser: React.FC = () => {
  const currentYear = 2023;
  const currentMonth = 6;
  const sampleProducts = ['商品A', '商品B', '商品C'];

  const handleProductSelect = (product: string) => {
    console.log(`Selected product: ${product}`);
  };

  return (
    <ProductBrowser
      currentYear={currentYear}
      currentMonth={currentMonth}
      products={sampleProducts}
      onProductSelect={handleProductSelect}
    />
  );
};

export default SampleProductBrowser;