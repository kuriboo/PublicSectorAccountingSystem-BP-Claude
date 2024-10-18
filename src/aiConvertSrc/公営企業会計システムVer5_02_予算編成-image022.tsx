import React from 'react';
import styled from '@emotion/styled';

type WaterBillProps = {
  waterUsage: number;
  sewerageUsage: number;
  previousBalance: number;
  payment: number;
  extraFees: {
    name: string;
    amount: number;
    taxed: boolean;
  }[];
  currentUsage: number;
  currentSewerage: number;
  taxRate: number;
  totalAmount: number;
};

const WaterBill: React.FC<WaterBillProps> = ({
  waterUsage,
  sewerageUsage,
  previousBalance,
  payment,
  extraFees,
  currentUsage,
  currentSewerage,
  taxRate,
  totalAmount,
}) => {
  return (
    <Container>
      <Title>当初事業別科目別内訳要求登録</Title>
      <Grid>
        <GridItem>
          <Label>節</Label>
          <Value>{waterUsage.toLocaleString()}</Value>
          <Label>細節</Label>
          <Value>{sewerageUsage.toLocaleString()}</Value>
          <Label>明細</Label>
          <Value>{previousBalance.toLocaleString()}</Value>
        </GridItem>
        <GridItem>
          <SectionTitle>予算明細順位</SectionTitle>
          <List>
            <ListItem>1.課税</ListItem>
            <ListItem>対象外</ListItem>
            <ListItem>税込</ListItem>
            <ListItem>込/税区分</ListItem>
          </List>
        </GridItem>
        <GridItem>
          <SectionTitle>臨時区分</SectionTitle>
          <Value>経常</Value>
        </GridItem>
      </Grid>
      <Summary>
        <SummaryItem>
          <SummaryLabel>前年度繰越</SummaryLabel>
          <SummaryValue>{currentUsage.toLocaleString()}</SummaryValue>
        </SummaryItem>
        <SummaryItem>
          <SummaryLabel>前年分繰越</SummaryLabel>
          <SummaryValue>{currentSewerage.toLocaleString()}</SummaryValue>
        </SummaryItem>
        <SummaryItem>
          <SummaryLabel>決算見込額</SummaryLabel>
          <SummaryValue>{((payment - previousBalance) * (1 + taxRate / 100)).toLocaleString()}</SummaryValue>
        </SummaryItem>
        <SummaryItem>
          <SummaryLabel>税区合計</SummaryLabel>
          <SummaryValue>{totalAmount.toLocaleString()}</SummaryValue>
        </SummaryItem>
      </Summary>
      <Table>
        <TableHeader>
          <TableHeaderItem>行番号</TableHeaderItem>
          <TableHeaderItem>積算基準</TableHeaderItem>
          <TableHeaderItem>単価/数量</TableHeaderItem>
          <TableHeaderItem>金額(円)</TableHeaderItem>
          <TableHeaderItem>積 基</TableHeaderItem>
        </TableHeader>
        <TableBody>
          {extraFees.map((fee, index) => (
            <TableRow key={index}>
              <TableCell>{index + 10}</TableCell>
              <TableCell>{fee.name}</TableCell>
              <TableCell>{fee.amount.toLocaleString()}式</TableCell>
              <TableCell>{(fee.amount * (fee.taxed ? 1 + taxRate / 100 : 1)).toLocaleString()}</TableCell>
              <TableCell>{fee.taxed ? '積' : '単'}</TableCell>
              <TableCell>{fee.taxed ? '課' : '単'}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
};

// Sample data for rendering the component
const sampleData: WaterBillProps = {
  waterUsage: 1018,
  sewerageUsage: 1,
  previousBalance: 5,
  payment: 1064,
  extraFees: [
    { name: '廃棄物処理電子マニフェスト利用手数料', amount: 8640, taxed: true },
    { name: '水道GLP認定維持管理費用', amount: 54000, taxed: true },
    { name: 'pｈ計検定手数料', amount: 2600, taxed: true },
    { name: '危険物取扱者(乙4)試験受講料及手数料', amount: 12000, taxed: true },
    { name: '河川流水占用料(秋原滝水道/水力発電)', amount: 2200, taxed: false },
    { name: '21.34.08円/年(税込)×138kwh', amount: 422547, taxed: true },
  ],
  currentUsage: 576,
  currentSewerage: 634,
  taxRate: 10,
  totalAmount: 451879,
};

// Usage example
const App: React.FC = () => {
  return <WaterBill {...sampleData} />;
};

export default App;

// Styled components
const Container = styled.div`
  font-family: Arial, sans-serif;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-bottom: 20px;
`;

const GridItem = styled.div``;

const Label = styled.div`
  font-weight: bold;
`;

const Value = styled.div`
  margin-bottom: 10px;
`;

const SectionTitle = styled.h4`
  margin-bottom: 10px;
`;

const List = styled.ul`
  padding-left: 20px;
`;

const ListItem = styled.li``;

const Summary = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-bottom: 20px;
`;

const SummaryItem = styled.div``;

const SummaryLabel = styled.div`
  font-weight: bold;
`;

const SummaryValue = styled.div``;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHeader = styled.tr`
  background-color: #f2f2f2;
`;

const TableHeaderItem = styled.th`
  padding: 10px;
  text-align: left;
  border: 1px solid #ddd;
`;

const TableBody = styled.tbody``;

const TableRow = styled.tr``;

const TableCell = styled.td`
  padding: 10px;
  border: 1px solid #ddd;
`;