import React from 'react';
import styled from '@emotion/styled';

type DeliverySlipProps = {
  deliveryDate: string;
  deliverySlipNumber: string;
  workNumber: string;
  lines: Line[];
};

type Line = {
  itemCode: string;
  itemName: string;
  unitPrice: number;
  quantity: number;
  unit: string;
  scheduledDate: string;
  amount: number;
};

const DeliverySlipContainer = styled.div`
  font-family: sans-serif;
  padding: 16px;

  @media (min-width: 768px) {
    max-width: 800px;
    margin: 0 auto;
  }
`;

const Header = styled.div`
  margin-bottom: 16px;
`;

const HeaderGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 8px;

  @media (min-width: 768px) {
    grid-template-columns: 100px 1fr 100px 1fr;
  }
`;

const HeaderLabel = styled.div`
  font-weight: bold;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHeader = styled.th`
  border: 1px solid #ccc;
  padding: 4px;
  text-align: center;
  background-color: #f0f0f0;
`;

const TableCell = styled.td`
  border: 1px solid #ccc;
  padding: 4px;
`;

const DeliverySlipComponent: React.FC<DeliverySlipProps> = ({
  deliveryDate,
  deliverySlipNumber,
  workNumber,
  lines,
}) => {
  // 伝票合計金額を計算
  const totalAmount = lines.reduce((sum, line) => sum + line.amount, 0);

  return (
    <DeliverySlipContainer>
      <Header>
        <h2>出庫予定入力</h2>
        <HeaderGrid>
          <HeaderLabel>処理年月日</HeaderLabel>
          <div>{deliveryDate}</div>
          <HeaderLabel>伝票番号</HeaderLabel>
          <div>{deliverySlipNumber}</div>
          <HeaderLabel>工事名称等</HeaderLabel>
          <div>{workNumber}</div>
        </HeaderGrid>
      </Header>

      <Table>
        <thead>
          <tr>
            <TableHeader>品番</TableHeader>
            <TableHeader>品名</TableHeader>
            <TableHeader>規格</TableHeader>
            <TableHeader>数量</TableHeader>
            <TableHeader>単位</TableHeader>
            <TableHeader>出庫予定日</TableHeader>
            <TableHeader>金額</TableHeader>
          </tr>
        </thead>
        <tbody>
          {lines.map((line, index) => (
            <tr key={index}>
              <TableCell>{line.itemCode}</TableCell>
              <TableCell>{line.itemName}</TableCell>
              <TableCell>φ75</TableCell>
              <TableCell>{line.quantity.toLocaleString()}</TableCell>
              <TableCell>{line.unit}</TableCell>
              <TableCell>{line.scheduledDate}</TableCell>
              <TableCell>{line.amount.toLocaleString()}</TableCell>
            </tr>
          ))}
        </tbody>
      </Table>

      <div>合計金額: {totalAmount.toLocaleString()}</div>
    </DeliverySlipContainer>
  );
};

// 使用例
const sampleData: DeliverySlipProps = {
  deliveryDate: '平成30年06月25日',  
  deliverySlipNumber: '9999999',
  workNumber: '予算振成都高福寿', 
  lines: [
    {
      itemCode: '0000999000',
      itemName: 'DIP(A1)',
      unitPrice: 75,
      quantity: 1,
      unit: '本',
      scheduledDate: '2018/06/25',
      amount: 13230,
    },
  ],
};

const DeliverySlipExample: React.FC = () => {
  return <DeliverySlipComponent {...sampleData} />;  
};

export default DeliverySlipExample;