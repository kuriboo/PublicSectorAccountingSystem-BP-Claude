import React from 'react';
import styled from 'styled-components';

// Define types for component props
type CompanyInfoProps = {
  address?: string;
  adjustmentAmount: number;
  adjustmentTax: number;
  adjustmentTotal: number;
  companyName?: string;
  date: string;
  month: number;
  number: string;
  shop?: string;
  taxRate: number;
  total: number;
  year: number;
};

// Define styled components
const Container = styled.div`
  font-family: Arial, sans-serif;
  padding: 20px;
  background-color: #f0f0f0;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const HeaderItem = styled.div`
  display: flex;
  align-items: center;
`;

const Label = styled.div`
  font-weight: bold;
  margin-right: 5px;
`;

const Value = styled.div``;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
`;

const TableHeader = styled.th`
  text-align: left;
  padding: 5px;
  border-bottom: 1px solid #ccc;
`;

const TableCell = styled.td`
  padding: 5px;
  border-bottom: 1px solid #ccc;
`;

const Summary = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const SummaryItem = styled.div`
  margin-left: 20px;
`;

// Define main component
const CompanyInfo: React.FC<CompanyInfoProps> = ({
  address,
  adjustmentAmount,
  adjustmentTax,
  adjustmentTotal,
  companyName,
  date,
  month,
  number,
  shop,
  taxRate,
  total,
  year,
}) => {
  // Format date
  const formattedDate = `${year}年${month}月${date}日`;

  return (
    <Container>
      <Header>
        <HeaderItem>
          <Label>調定日</Label>
          <Value>{formattedDate}</Value>
        </HeaderItem>
        <HeaderItem>
          <Label>調定番号</Label>
          <Value>{number}</Value>
        </HeaderItem>
      </Header>

      <Table>
        <thead>
          <tr>
            <TableHeader>区分</TableHeader>
            <TableHeader>調定科目</TableHeader>
            <TableHeader>調定明細</TableHeader>
            <TableHeader>税</TableHeader>
            <TableHeader>調定金額</TableHeader>
            <TableHeader>内消費税額</TableHeader>
            <TableHeader>特定収入</TableHeader>
          </tr>
        </thead>
        <tbody>
          <tr>
            <TableCell>未収</TableCell>
            <TableCell>水道料金</TableCell>
            <TableCell>水道料金(旧精算)</TableCell>
            <TableCell>{taxRate}</TableCell>
            <TableCell>{total.toLocaleString()}</TableCell>
            <TableCell>{adjustmentTax}</TableCell>
            <TableCell>0</TableCell>
          </tr>
        </tbody>
      </Table>

      <Summary>
        <SummaryItem>
          <Label>合計調定金額</Label>
          <Value>{total.toLocaleString()}</Value>
        </SummaryItem>
        <SummaryItem>
          <Label>合計消費税額</Label>
          <Value>{adjustmentTax}</Value>
        </SummaryItem>
        <SummaryItem>
          <Label>合計特定収入</Label>
          <Value>0</Value>
        </SummaryItem>
      </Summary>
    </Container>
  );
};

// Example usage
const ExampleCompanyInfo: React.FC = () => {
  const companyData = {
    address: '水道料金の調整',
    adjustmentAmount: 1000,
    adjustmentTax: 74,
    adjustmentTotal: 1000,
    companyName: 'ぎょうせい工務店',
    date: '28',
    month: 7,
    number: '0000000001',
    shop: '水道料金の調整',
    taxRate: 47,
    total: 1000,
    year: 29,
  };

  return <CompanyInfo {...companyData} />;
};

export default ExampleCompanyInfo;