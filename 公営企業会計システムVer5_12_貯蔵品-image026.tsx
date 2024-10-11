import React from 'react';
import styled from '@emotion/styled';

// 商品出庫明細情報のデータ型定義
type ProductWithdrawalDetailsProps = {
  productWithdrawalDetails: {
    barcode: string;
    price: number;
    quantity: number;
    amount: number;
    expirationDate: string;
  }[];
  number: string;
  date: string;
  productId: string;
  numberOfCases: number;
};

// 商品出庫明細情報コンポーネント
const ProductWithdrawalDetails: React.FC<ProductWithdrawalDetailsProps> = ({ 
  productWithdrawalDetails,
  number,
  date,
  productId,
  numberOfCases
}) => {
  return (
    <Container>
      <Title>商 品出庫明細情報（先入先出）</Title>
      <InfoContainer>
        <InfoItem>
          <Label>品番</Label>
          <Value>{number || '-'}</Value>
        </InfoItem>
        <InfoItem>
          <Label>品名</Label>
          <Value>{productId || '-'}</Value>
        </InfoItem>
        <InfoItem>
          <Label>評価方法区分</Label>
          <Value>1  先入先出</Value>
        </InfoItem>
      </InfoContainer>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHeaderCell>当初出庫年月</TableHeaderCell>
            <TableHeaderCell>年度</TableHeaderCell>
            <TableHeaderCell>当初出庫番号</TableHeaderCell>
            <TableHeaderCell>行番号</TableHeaderCell>
            <TableHeaderCell>出庫数量</TableHeaderCell>
            <TableHeaderCell>単価</TableHeaderCell>
            <TableHeaderCell>金額</TableHeaderCell>
            <TableHeaderCell>出庫日</TableHeaderCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {productWithdrawalDetails.map((detail, index) => (
            <TableRow key={index}>
              <TableCell>{detail.expirationDate.slice(0, 7)}</TableCell>
              <TableCell>{detail.expirationDate.slice(2, 4)}年</TableCell>
              <TableCell>15</TableCell>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{detail.quantity}</TableCell>
              <TableCell>{detail.price.toLocaleString()}</TableCell>
              <TableCell>{detail.amount.toLocaleString()}</TableCell>
              <TableCell>{detail.expirationDate}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <SubContainer>
        <SubItem>
          <SubLabel>入庫日</SubLabel>
          <SubValue>{date}</SubValue>
        </SubItem>
        <SubItemContainer>
          <SubItem>
            <SubLabel>数量</SubLabel>
            <SubValue>{productWithdrawalDetails.reduce((sum, detail) => sum + detail.quantity, 0)}</SubValue>
          </SubItem>
          <SubItem>
            <SubLabel>単位</SubLabel>
            <SubValue>本</SubValue>
          </SubItem>
          <SubItem>
            <SubLabel>総出庫数</SubLabel>
            <SubValue>{productWithdrawalDetails.reduce((sum, detail) => sum + detail.amount, 0)}</SubValue>
          </SubItem>
        </SubItemContainer>
        <SubItem>
          <SubLabel>単価</SubLabel>
          <SubValue>{productWithdrawalDetails[0]?.price.toLocaleString() || '-'}</SubValue>
        </SubItem>
        <SubItem>
          <SubLabel>金額</SubLabel>
          <SubValue>{productWithdrawalDetails.reduce((sum, detail) => sum + detail.amount, 0).toLocaleString()}</SubValue>
        </SubItem>
        <SubItem>
          <SubLabel>現在庫数</SubLabel>
          <SubValue>{numberOfCases || 0}</SubValue>
        </SubItem>
      </SubContainer>
    </Container>
  );
};

// スタイル定義
const Container = styled.div`
  font-family: "MS Gothic", monospace;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;
`;

const Title = styled.h2`
  font-size: 18px;
  margin-bottom: 20px;
`;

const InfoContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
`;

const Label = styled.div`
  width: 120px;
`;

const Value = styled.div`
  font-weight: bold;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;
  margin-bottom: 20px;
`;

const TableHeader = styled.thead`
  background-color: #f0f0f0;
`;

const TableBody = styled.tbody`
`;

const TableRow = styled.tr`
`;

const TableHeaderCell = styled.th`
  padding: 5px;
  text-align: center;
  border: 1px solid #ccc;
`;

const TableCell = styled.td`
  padding: 5px;
  text-align: right;
  border: 1px solid #ccc;
`;

const SubContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const SubItemContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const SubItem = styled.div`
  display: flex;
  align-items: center;
`;

const SubLabel = styled.div`
  width: 80px;
`;

const SubValue = styled.div`
  font-weight: bold;
`;

// サンプルデータを用いた使用例
const sampleData: ProductWithdrawalDetailsProps = {
  productWithdrawalDetails: [
    {
      barcode: 'A1',
      price: 2000,
      quantity: 1,
      amount: 2000,
      expirationDate: '2017/09/15',
    },
    {
      barcode: 'A2',
      price: 1000,
      quantity: 2,
      amount: 2000,
      expirationDate: '2017/09/15',
    },
    {
      barcode: 'A3',
      price: 1000,
      quantity: 1,
      amount: 1000,
      expirationDate: '2017/09/15',
    },
  ],
  number: '0000999000',
  date: '平成29年09月15日',
  productId: 'DIP(A1)調整管',
  numberOfCases: 3.75,
};

const App: React.FC = () => {
  return (
    <div>
      <h1>商品出庫明細情報</h1>
      <ProductWithdrawalDetails {...sampleData} />
    </div>
  );
};

export default App;