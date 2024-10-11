import React from 'react';
import styled from '@emotion/styled';

interface TaxIncludeProps {
  price: number;
  taxRate: number;
  shippingFee: number;
  consumptionTax: number;
}

const TaxInclude: React.FC<TaxIncludeProps> = ({ price, taxRate, shippingFee, consumptionTax }) => {
  // 税込み価格の計算
  const includeTax = (value: number) => Math.floor(value * (1 + taxRate / 100));

  return (
    <Container>
      <Title>入力金額合計</Title>
      <InputList>
        <InputItem>
          <Label>税込額</Label>
          <Value>{includeTax(price)}</Value>
        </InputItem>
        <InputItem>
          <Label>税抜額</Label>
          <Value>{price}</Value>
        </InputItem>
        <InputItem>
          <Label>消費税額</Label>
          <Value>{consumptionTax}</Value>
        </InputItem>
      </InputList>
      <Table>
        <TableRow>
          <TableHeader>税区分</TableHeader>
          <TableHeader>消費税率</TableHeader>
          <TableHeader>税込額</TableHeader>
          <TableHeader>税抜額</TableHeader>
          <TableHeader>消費税額</TableHeader>
        </TableRow>
        <TableRow>
          <TableData>課税</TableData>
          <TableData>{taxRate}%</TableData>
          <TableData>{includeTax(price)}</TableData>
          <TableData>{price}</TableData>
          <TableData>{consumptionTax}</TableData>
        </TableRow>
      </Table>
      <ButtonContainer>
        <Button>OK</Button>
        <Button>クリア</Button>
        <Button>キャンセル</Button>
      </ButtonContainer>
    </Container>
  );
};

// スタイリング
const Container = styled.div`
  font-family: sans-serif;
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 4px;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 600px) {
    padding: 10px;
  }
`;

const Title = styled.h2`
  margin-top: 0;
`;

const InputList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 20px;
`;

const InputItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const Label = styled.span`
  display: inline-block;
  width: 80px;
  font-weight: bold;
`;

const Value = styled.span`
  display: inline-block;
  margin-left: 10px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
`;

const TableRow = styled.tr`
  &:nth-of-type(even) {
    background-color: #e0e0e0;
  }
`;

const TableHeader = styled.th`
  padding: 5px;
  text-align: center;
  border: 1px solid #ccc;
`;

const TableData = styled.td`
  padding: 5px;
  text-align: right;
  border: 1px solid #ccc;
`;

const ButtonContainer = styled.div`
  text-align: center;
`;

const Button = styled.button`
  padding: 5px 10px;
  margin: 0 5px;
`;

// サンプルデータを使用したコンポーネントの表示例
const TaxIncludeSample = () => {
  const sampleData = {
    price: 157500,
    taxRate: 10,
    shippingFee: 0,
    consumptionTax: 15751,
  };

  return <TaxInclude {...sampleData} />;
};

export default TaxIncludeSample;