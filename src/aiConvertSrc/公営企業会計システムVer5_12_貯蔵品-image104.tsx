import React from 'react';
import styled from 'styled-components';

interface ProductMaskProps {
  productName: string;
  price: number;
  division: string;
  medium: string;
  small: string;
}

const ProductMask: React.FC<ProductMaskProps> = ({
  productName,
  price,
  division,
  medium,
  small,
}) => {
  return (
    <Container>
      <Title>{"貯蔵品分類マスタ"}</Title>
      <Table>
        <TableRow>
          <TableHeader>大分類</TableHeader>
          <TableData>{division || '○○○'}</TableData>
        </TableRow>
        <TableRow>
          <TableHeader>中分類</TableHeader>
          <TableData>{medium || '○○○'}</TableData>
        </TableRow>
        <TableRow>
          <TableHeader>小分類</TableHeader>
          <TableData>{small || '○○○'}</TableData>
        </TableRow>
        <TableRow>
          <TableHeader>品名</TableHeader>
          <TableData>{productName || '○○○'}</TableData>
        </TableRow>
        <TableRow>
          <TableHeader>小分類</TableHeader>
          <TableData>{price ? `￥${price}` : '○○○'}</TableData>
        </TableRow>
      </Table>
    </Container>
  );
};

const Container = styled.div`
  font-family: sans-serif;
  border: 1px solid black;
  padding: 10px;

  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

const Title = styled.div`
  text-align: center;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableRow = styled.tr`
  &:not(:last-child) {
    border-bottom: 1px solid black;
  }
`;

const TableHeader = styled.td`
  font-weight: bold;
  padding: 5px;
  width: 100px;
`;

const TableData = styled.td`
  padding: 5px;
`;

// Usage example
const SampleProductMask: React.FC = () => {
  return (
    <ProductMask
      productName="サンプル品名"
      price={1000}
      division="サンプル大分類"  
      medium="サンプル中分類"
      small="サンプル小分類"
    />
  );
};

export default ProductMask;