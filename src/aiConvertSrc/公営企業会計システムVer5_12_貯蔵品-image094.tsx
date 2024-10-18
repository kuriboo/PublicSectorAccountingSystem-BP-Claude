import React from 'react';
import styled from 'styled-components';

// 商品マスタの型定義
type Product = {
  code: string;
  name: string;
  color: string;
  size: string;
  unitPrice: number;
};

// 貯蔵品単価マスタのプロパティ型定義
type InventoryUnitPriceProps = {
  selectedDate: Date;
  product: Product;
  inventoryUnitPrices: { date: Date; unitPrice: number }[];
};

// 貯蔵品単価マスタコンポーネント
const InventoryUnitPrice: React.FC<InventoryUnitPriceProps> = ({
  selectedDate,
  product,
  inventoryUnitPrices,
}) => {
  // 選択日付の貯蔵品単価を取得
  const selectedUnitPrice = inventoryUnitPrices.find(
    (item) => item.date.getTime() === selectedDate.getTime()
  )?.unitPrice;

  return (
    <Container>
      <Title>貯蔵品単価マスタ</Title>
      <DateInfo>
        {selectedDate.getFullYear()}年{selectedDate.getMonth() + 1}月{selectedDate.getDate()}日
      </DateInfo>
      <InputGroup>
        <Label>単価</Label>
        <Input type="number" value={selectedUnitPrice || 0} />
      </InputGroup>
      <ProductInfo>
        <InfoGroup>
          <Label>単価名称</Label>
          <InfoText>{product.name}</InfoText>
        </InfoGroup>
        <InfoGroup>
          <Label>単価番号</Label>
          <InfoText>{product.code}</InfoText>
        </InfoGroup>
        <InfoGroup>
          <Label>単位</Label>
          <InfoText>個</InfoText>
        </InfoGroup>
        <InfoGroup>
          <Label>所属</Label>
          <InfoText>最高情報</InfoText>
        </InfoGroup>
        <InfoGroup>
          <Label>登録単位</Label>
          <InfoText>円</InfoText>
        </InfoGroup>
      </ProductInfo>
      <PriceHistory>
        <HistoryTitle>単価履歴</HistoryTitle>
        <HistoryTable>
          <TableRow>
            <TableHeader>適用開始年月日</TableHeader>
            <TableHeader>単価</TableHeader>
          </TableRow>
          {inventoryUnitPrices.map((item) => (
            <TableRow key={item.date.getTime()}>
              <TableData>
                {item.date.getFullYear()}/{item.date.getMonth() + 1}/{item.date.getDate()}
              </TableData>
              <TableData>{item.unitPrice.toLocaleString()}</TableData>
            </TableRow>
          ))}
        </HistoryTable>
      </PriceHistory>
      <ButtonGroup>
        <Button>前データ</Button>
        <Button>次データ</Button>
        <Button primary>OK</Button>
        <Button>クリア</Button>
        <Button>終了</Button>
      </ButtonGroup>
    </Container>
  );
};

// サンプルデータ
const sampleProduct: Product = {
  code: '000000',
  name: 'サンプル商品',
  color: '黒',
  size: 'M',
  unitPrice: 1000,
};

const sampleInventoryUnitPrices = [
  { date: new Date('2022/04/01'), unitPrice: 1600 },
  { date: new Date('2021/04/01'), unitPrice: 1600 },
];

// 使用例
const App: React.FC = () => {
  return (
    <InventoryUnitPrice
      selectedDate={new Date('2022/04/01')}
      product={sampleProduct}
      inventoryUnitPrices={sampleInventoryUnitPrices}
    />
  );
};

// スタイリング
const Container = styled.div`
  background-color: #f0f0f0;
  padding: 20px;
  font-family: Arial, sans-serif;
`;

const Title = styled.h2`
  margin: 0 0 10px;
`;

const DateInfo = styled.p`
  margin: 0 0 20px;
`;

const InputGroup = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const Label = styled.label`
  width: 100px;
`;

const Input = styled.input`
  padding: 5px;
`;

const ProductInfo = styled.div`
  margin-bottom: 20px;
`;

const InfoGroup = styled.div`
  display: flex;
  margin-bottom: 5px;
`;

const InfoText = styled.span`
  margin-left: 10px;
`;

const PriceHistory = styled.div`
  margin-bottom: 20px;
`;

const HistoryTitle = styled.h3`
  margin: 0 0 10px;
`;

const HistoryTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
`;

const TableHeader = styled.th`
  padding: 8px;
  text-align: left;
  border-bottom: 1px solid #ddd;
`;

const TableData = styled.td`
  padding: 8px;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Button = styled.button<{ primary?: boolean }>`
  padding: 8px 16px;
  margin-left: 10px;
  background-color: ${(props) => (props.primary ? '#007bff' : '#fff')};
  color: ${(props) => (props.primary ? '#fff' : '#333')};
  border: 1px solid ${(props) => (props.primary ? '#007bff' : '#ccc')};
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

export default InventoryUnitPrice;