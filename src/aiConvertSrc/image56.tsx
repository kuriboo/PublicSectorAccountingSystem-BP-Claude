import React from 'react';
import styled from '@emotion/styled';

// 明細行の型定義
type DetailRowProps = {
  no: string;
  accountName: string;
  amount: number;
  tax: number;
  total: number;
};

// 明細行コンポーネント
const DetailRow: React.FC<DetailRowProps> = ({ no, accountName, amount, tax, total }) => {
  return (
    <Row>
      <Cell>{no}</Cell>
      <Cell>{accountName}</Cell>
      <Cell>{amount.toLocaleString()}</Cell>
      <Cell>{tax.toLocaleString()}</Cell>
      <Cell>{total.toLocaleString()}</Cell>
    </Row>
  );
};

// 合計行の型定義
type TotalRowProps = {
  label: string;
  amount: number;
  tax: number;
  total: number;
};

// 合計行コンポーネント
const TotalRow: React.FC<TotalRowProps> = ({ label, amount, tax, total }) => {
  return (
    <Row>
      <Cell colSpan={2}>{label}</Cell>
      <Cell>{amount.toLocaleString()}</Cell>
      <Cell>{tax.toLocaleString()}</Cell>
      <Cell>{total.toLocaleString()}</Cell>
    </Row>
  );
};

// 請求書コンポーネントの型定義
type InvoiceProps = {
  invoiceNumber: string;
  issueDate: string;
  customer: string;
  customerAddress: string;
  dueDate: string;
  subject: string;
  details: DetailRowProps[];
  subTotal: number;
  taxRate: number;
  taxAmount: number;
  totalAmount: number;
};

// 請求書コンポーネント
const Invoice: React.FC<InvoiceProps> = ({
  invoiceNumber,
  issueDate,
  customer,
  customerAddress,
  dueDate,
  subject,
  details,
  subTotal,
  taxRate,
  taxAmount,
  totalAmount,
}) => {
  // 明細行が空の場合は空配列として処理
  const safeDetails = details ?? [];

  return (
    <Wrapper>
      <Header>
        <Title>請求書</Title>
        <InvoiceNumber>No. {invoiceNumber}</InvoiceNumber>
        <IssueDate>{issueDate}</IssueDate>
      </Header>
      <CustomerInfo>
        <CustomerName>{customer}</CustomerName>
        <CustomerAddress>{customerAddress}</CustomerAddress>
      </CustomerInfo>
      <DueDateWrapper>
        <DueDateLabel>期日</DueDateLabel>
        <DueDate>{dueDate}</DueDate>
      </DueDateWrapper>
      <SubjectWrapper>
        <SubjectLabel>件名</SubjectLabel>
        <Subject>{subject}</Subject>
      </SubjectWrapper>
      <TableWrapper>
        <Table>
          <thead>
            <Row>
              <HeaderCell>No</HeaderCell>
              <HeaderCell>勘定科目</HeaderCell>
              <HeaderCell>金額</HeaderCell>
              <HeaderCell>消費税</HeaderCell>
              <HeaderCell>合計</HeaderCell>
            </Row>
          </thead>
          <tbody>
            {safeDetails.map((detail, index) => (
              <DetailRow key={index} no={(index + 1).toString()} {...detail} />
            ))}
            <TotalRow label="小計" amount={subTotal} tax={0} total={subTotal} />
            <TotalRow
              label={`消費税(${taxRate}%)`}
              amount={0}
              tax={taxAmount}
              total={taxAmount}
            />
            <TotalRow label="合計" amount={totalAmount} tax={0} total={totalAmount} />
          </tbody>
        </Table>
      </TableWrapper>
    </Wrapper>
  );
};

// スタイリング
const Wrapper = styled.div`
  padding: 2rem;
  background-color: white;
`;

const Header = styled.div`
  display: flex; 
  justify-content: space-between;
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  font-size: 2rem;
`;

const InvoiceNumber = styled.div`
  font-size: 1.2rem;
`;

const IssueDate = styled.div`
  font-size: 1.2rem;
`;

const CustomerInfo = styled.div`
  margin-bottom: 1rem;
`;

const CustomerName = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
`;

const CustomerAddress = styled.div`
  font-size: 1rem;
`;

const DueDateWrapper = styled.div`
  display: flex;
  align-items: center; 
  margin-bottom: 1rem;
`;

const DueDateLabel = styled.div`
  font-weight: bold;
  margin-right: 1rem;
`;

const DueDate = styled.div`
  font-size: 1.2rem;
`;

const SubjectWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
`;

const SubjectLabel = styled.div`
  font-weight: bold;
  margin-right: 1rem;
`;

const Subject = styled.div`
  font-size: 1.2rem;  
`;

const TableWrapper = styled.div`
  overflow-x: auto;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  th,
  td {
    border: 1px solid #ccc;
    padding: 0.5rem;
    text-align: center;
  }
`;

const Row = styled.tr``;

const HeaderCell = styled.th`
  background-color: #eee;
`;

const Cell = styled.td``;

// 使用例
const sampleData: InvoiceProps = {
  invoiceNumber: 'A001',
  issueDate: '2023/01/01',
  customer: '〇〇株式会社',
  customerAddress: '東京都新宿区〇〇1-2-3', 
  dueDate: '2023/01/31',
  subject: '〇〇の件',
  details: [
    { no: '1', accountName: '売上', amount: 100000, tax: 10000, total: 110000 },
    { no: '2', accountName: '売上', amount: 50000, tax: 5000, total: 55000 },
  ],
  subTotal: 150000,
  taxRate: 10,
  taxAmount: 15000,
  totalAmount: 165000,
};

const InvoiceSample: React.FC = () => {
  return <Invoice {...sampleData} />;
};

export default InvoiceSample;