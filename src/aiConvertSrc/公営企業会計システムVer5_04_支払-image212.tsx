import React from 'react';
import styled from 'styled-components';

// 在庫表の行の型定義
type InventoryRowType = {
  no: string;
  name: string;
  division: string;
  price: number;
  amount: number;
  totalPrice: number;
};

// 在庫表の型定義
type InventoryTableType = {
  year: number;
  month: number;
  day: number;
  inventoryDate: string;
  settlementDivision: string;
  inventoryLocation: string;
  comment: string;
  inventoryRows: InventoryRowType[];
};

// 在庫表のコンポーネント
const InventoryTable: React.FC<InventoryTableType> = ({
  year,
  month,
  day,
  inventoryDate,
  settlementDivision,
  inventoryLocation,
  comment,
  inventoryRows,
}) => {
  return (
    <Container>
      <Header>
        <Title>在庫チェック表</Title>
        <DateContainer>
          <DateLabel>令和{year - 2018}年{month}月{day}日</DateLabel>
          <DateLabel>流用売用品等: {settlementDivision}</DateLabel>
          <DateLabel>棚卸場所: {inventoryLocation}</DateLabel>
        </DateContainer>
        <CommentLabel>備考: {comment}</CommentLabel>
      </Header>
      
      <InventorySection>
        <HeaderLabel>増額材料</HeaderLabel>
        <Table>
          <thead>
            <TableRow>
              <TableHeader>節</TableHeader>
              <TableHeader>細節</TableHeader>
              <TableHeader>明細</TableHeader>
              <TableHeader>予算所属</TableHeader>
              <TableHeader>金額</TableHeader>
              <TableHeader>予算残額</TableHeader>
            </TableRow>
          </thead>
          <tbody>
            {inventoryRows.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.no}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.division}</TableCell>
                <TableCell>水道課工務</TableCell>
                <TableCell>{row.amount.toLocaleString()}</TableCell>
                <TableCell>{row.totalPrice.toLocaleString()}</TableCell>
              </TableRow>
            ))}
          </tbody>
        </Table>
      </InventorySection>

      <InventorySection>
        <HeaderLabel>減額材料</HeaderLabel>
        <Table>
          <thead>
            <TableRow>
              <TableHeader>節</TableHeader>
              <TableHeader>細節</TableHeader>
              <TableHeader>明細</TableHeader>
              <TableHeader>予算所属</TableHeader>
              <TableHeader>金額</TableHeader>
              <TableHeader>予算残額</TableHeader>
            </TableRow>
          </thead>
          <tbody>
            {inventoryRows.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.no}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.division}</TableCell>
                <TableCell>水道課工務</TableCell>
                <TableCell>{row.amount.toLocaleString()}</TableCell>
                <TableCell>{row.totalPrice.toLocaleString()}</TableCell>
              </TableRow>
            ))}
          </tbody>
        </Table>
      </InventorySection>

      <ButtonContainer>
        <SubmitButton>提出行</SubmitButton>
        <CancelButton>キャンセル</CancelButton>
      </ButtonContainer>
      
    </Container>
  );
};

// スタイリング
const Container = styled.div`
  padding: 24px;
  background-color: #f0f0f0;

  @media (max-width: 600px) {
    padding: 12px;
  }
`;

const Header = styled.div`
  margin-bottom: 24px;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 12px;

  @media (max-width: 600px) {
    font-size: 20px;
  }  
`;

const DateContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const DateLabel = styled.p`
  font-size: 16px;
  
  @media (max-width: 600px) {
    font-size: 14px;
    margin-bottom: 4px;
  }
`;

const CommentLabel = styled.p`
  font-size: 16px;
  color: #666;

  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

const InventorySection = styled.div`
  margin-bottom: 32px;
`;

const HeaderLabel = styled.h3`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 12px;

  @media (max-width: 600px) {
    font-size: 18px;
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f8f8f8;
  }
`;

const TableHeader = styled.th`
  padding: 8px;
  text-align: left;
  border-bottom: 1px solid #ddd;
  white-space: nowrap;

  @media (max-width: 600px) {
    font-size: 14px;
    padding: 6px;
  }
`;

const TableCell = styled.td`
  padding: 8px;
  border-bottom: 1px solid #ddd;

  @media (max-width: 600px) {
    font-size: 14px;
    padding: 6px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 24px;
`;

const SubmitButton = styled.button`
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-left: 12px;

  &:hover {
    background-color: #0056b3;
  }
`;

const CancelButton = styled.button`
  padding: 8px 16px;
  background-color: #f0f0f0;
  color: #333;
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #e0e0e0;
  }  
`;

// 使用例
const sampleData: InventoryTableType = {
  year: 2023,
  month: 4,
  day: 24,
  inventoryDate: '令和5年11月24日',
  settlementDivision: '流用',
  inventoryLocation: '庁舎 太郎',
  comment: '備考①',
  inventoryRows: [
    {
      no: '002',
      name: '連絡・統制',
      division: '連絡・統制費',
      price: 100000,
      amount: 200000, 
      totalPrice: 3945800,
    },
    {
      no: '003',
      name: '連絡・印画図書',
      division: '連絡・印画図書',
      price: 200000,
      amount: 400000,
      totalPrice: 4000000,
    },
  ],
};

const App: React.FC = () => {
  return (
    <div>
      <InventoryTable {...sampleData} />
    </div>
  );
};

export default App;