import React from 'react';
import styled from '@emotion/styled';

type PublicWaterBillProps = {
  companyName: string;
  branchName: string;
  billRecipientCode: string;
  customerNumber: string;
  totalAmount: number;
  paymentDeadline: string;
  meterReadingDate: string;
  usage: number;
  items: Array<{
    serviceType: string;
    itemCode: string;
    details: string;
    charge: number;
    taxCategory: string;
    taxAmount: number;
    taxRate: number;
  }>;
};

const PublicWaterBill: React.FC<PublicWaterBillProps> = ({
  companyName,
  branchName,
  billRecipientCode,
  customerNumber,
  totalAmount,
  paymentDeadline,
  meterReadingDate,
  usage,
  items,
}) => {
  return (
    <Container>
      <Header>
        <CompanyName>{companyName}</CompanyName>
        <BranchName>{branchName}</BranchName>
      </Header>
      <CustomerInfo>
        <InfoRow>
          <InfoLabel>仕訳先</InfoLabel>
          <InfoValue>{billRecipientCode}</InfoValue>
          <InfoLabel>仕訳節</InfoLabel>
          <InfoValue>0010 公共下水道使用料</InfoValue>
        </InfoRow>
        <InfoRow>
          <InfoLabel>仕訳項</InfoLabel>
          <InfoValue>001 公共下水道</InfoValue>
          <InfoLabel>決算金額</InfoLabel>
          <Amount>¥{totalAmount.toLocaleString()}</Amount>
        </InfoRow>
        <InfoRow>
          <InfoLabel>仕訳日</InfoLabel>
          <InfoValue>{paymentDeadline}</InfoValue>
          <InfoLabel>仕訳明細</InfoLabel>
          <InfoValue>0001 公共下水道</InfoValue>
        </InfoRow>
      </CustomerInfo>
      <Table>
        <TableHeader>
          <Row>
            <HeaderCell>事業</HeaderCell>
            <HeaderCell>振替コード</HeaderCell>
            <HeaderCell>振替名</HeaderCell>
            <HeaderCell>性質コード</HeaderCell>
            <HeaderCell>性質名</HeaderCell>
            <HeaderCell>確認決済セグメント</HeaderCell>
            <HeaderCell>決算金額</HeaderCell>
            <HeaderCell>指成比率(%)</HeaderCell>
          </Row>
        </TableHeader>
        <TableBody>
          {items.map((item, index) => (
            <Row key={index}>
              <Cell>公共</Cell>
              <Cell>{customerNumber}</Cell>
              <Cell>{item.details}</Cell>
              <Cell>{item.itemCode}</Cell>
              <Cell>{item.serviceType}</Cell>
              <Cell>{item.taxCategory}</Cell>
              <Cell>¥{item.charge.toLocaleString()}</Cell>
              <Cell>{item.taxRate}%</Cell>
            </Row>
          ))}
        </TableBody>
        <TableFooter>
          <FooterRow>
            <FooterCell colSpan={6}>合計</FooterCell>
            <FooterCell>¥{totalAmount.toLocaleString()}</FooterCell>
            <FooterCell>100.00%</FooterCell>
          </FooterRow>
        </TableFooter>
      </Table>
      <Footer>
        <Subtitle>残惑残高</Subtitle>
        <Comment>
          コメント
        </Comment>
      </Footer>
    </Container>
  );
};

// Sample usage
const sampleData: PublicWaterBillProps = {
  companyName: '振替・性質全額調整 前年度参照（仕訳科目）',
  branchName: '令和02年度',
  billRecipientCode: '01 公共下水道事業収',
  customerNumber: '171010010010',
  totalAmount: 107840,
  paymentDeadline: '01 公共下水道使用料',
  meterReadingDate: '01 営業収益',
  usage: 107839.87,
  items: [
    {
      serviceType: '下水道使用料',
      itemCode: '投資',
      details: '下水道使用料',
      charge: 107840,
      taxCategory: '税抜',
      taxAmount: 0,
      taxRate: 100
    }
  ]
};

const SampleUsage: React.FC = () => {
  return (
    <div>
      <h2>Sample Public Water Bill</h2>
      <PublicWaterBill {...sampleData} />
    </div>
  );
};

// Styled components
const Container = styled.div`
  font-family: Arial, sans-serif;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const CompanyName = styled.h2`
  font-size: 24px;
  margin: 0;
`;

const BranchName = styled.h3`
  font-size: 18px;
  margin: 0;
`;

const CustomerInfo = styled.div`
  margin-bottom: 20px;
`;

const InfoRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const InfoLabel = styled.span`
  font-weight: bold;
  margin-right: 10px;
`;

const InfoValue = styled.span`
  margin-right: 20px;
`;

const Amount = styled.span`
  font-size: 18px;
  font-weight: bold;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
`;

const TableHeader = styled.thead`
  background-color: #f5f5f5;
`;

const TableBody = styled.tbody``;

const TableFooter = styled.tfoot`
  font-weight: bold;
`;

const Row = styled.tr``;

const HeaderCell = styled.th`
  padding: 10px;
  text-align: left;
`;

const Cell = styled.td`
  padding: 10px;
`;

const FooterRow = styled.tr`
  background-color: #f5f5f5;
`;

const FooterCell = styled.td`
  padding: 10px;
  text-align: right;
`;

const Footer = styled.div`
  margin-top: 20px;
`;

const Subtitle = styled.h4`
  font-size: 16px;
  margin: 0;
`;

const Comment = styled.p`
  margin: 10px 0;
`;

export default PublicWaterBill;