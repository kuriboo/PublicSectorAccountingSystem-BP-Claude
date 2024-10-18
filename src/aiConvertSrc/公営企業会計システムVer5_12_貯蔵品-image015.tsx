import React from 'react';
import styled from '@emotion/styled';

type DepositItem = {
  date: string;
  amount: number;
  balance: number;
};

type DepositListProps = {
  items: DepositItem[];
  totalDeposits: number;
  interestRate: number;
};

const DepositList: React.FC<DepositListProps> = ({ items, totalDeposits, interestRate }) => {
  return (
    <Container>
      <Header>
        <Title>発注済入庫明細書（先入先出）</Title>
        <ProductNumber>0000100001</ProductNumber>
        <ProductName>DIP(A1)精装管</ProductName>
        <UnitPrice>￥75</UnitPrice>
      </Header>
      <BalanceInfo>
        <Label>人庫数</Label>
        <Value>{totalDeposits.toLocaleString()}</Value>
        <Unit>本</Unit>
        <Label>単価</Label>
        <Value>13,230.00</Value>
        <Description>※修正の時は、適正な見積値段（出荷時の単価）を入力してください。</Description>
      </BalanceInfo>
      <DepositRateInfo>
        <Label>金額</Label>
        <Value>26,460</Value>
        <Label>発注残数</Label>
        <Value>{(totalDeposits * interestRate).toFixed(2)}</Value>
      </DepositRateInfo>
      <TableContainer>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHeaderCell>入庫日</TableHeaderCell>
              <TableHeaderCell>数量</TableHeaderCell>
              <TableHeaderCell>単価</TableHeaderCell>
              <TableHeaderCell>金額</TableHeaderCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            {items.map((item, index) => (
              <TableRow key={index}>
                <TableCell>{item.date}</TableCell>
                <TableCell>{item.amount.toLocaleString()}</TableCell>
                <TableCell>{item.balance.toLocaleString()}</TableCell>
                <TableCell>{(item.amount * item.balance).toLocaleString()}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

const Container = styled.div`
  font-family: Arial, sans-serif;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 5px;

  @media (max-width: 600px) {
    padding: 10px;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  flex-wrap: wrap;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Title = styled.h2`
  margin: 0;
`;

const ProductNumber = styled.p`
  margin: 0;
`;

const ProductName = styled.p`
  margin: 0;
`;

const UnitPrice = styled.p`
  margin: 0;
`;

const BalanceInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  flex-wrap: wrap;
`;

const DepositRateInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  flex-wrap: wrap;
`;

const Label = styled.span`
  margin-right: 10px;
`;

const Value = styled.span`
  margin-right: 10px;
`;

const Unit = styled.span`
  margin-right: 20px;
`;

const Description = styled.p`
  margin: 0;
  font-size: 12px;
`;

const TableContainer = styled.div`
  overflow-x: auto;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHeader = styled.thead``;

const TableBody = styled.tbody``;

const TableRow = styled.tr``;

const TableHeaderCell = styled.th`
  padding: 10px;
  text-align: left;
  background-color: #ddd;
  font-weight: bold;
`;

const TableCell = styled.td`
  padding: 10px;
  border-bottom: 1px solid #ccc;
`;

// Usage example
const depositItems: DepositItem[] = [
  { date: '2017/09/19', amount: 3.0, balance: 13230.0 },
  { date: '2017/09/01', amount: 5.0, balance: 13230.0 },
  { date: '2017/07/31', amount: 5.0, balance: 13230.0 },
  { date: '2017/07/28', amount: 1.0, balance: 13230.0 },
  { date: '2017/07/28', amount: 2.0, balance: 13230.0 },
  { date: '2017/07/27', amount: 11.0, balance: 13230.0 },
];

const DepositListExample: React.FC = () => {
  return <DepositList items={depositItems} totalDeposits={26460} interestRate={2.0} />;
};

export default DepositListExample;