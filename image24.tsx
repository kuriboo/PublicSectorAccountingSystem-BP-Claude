import React from 'react';
import styled from '@emotion/styled';

type ExpenseSummaryProps = {
  year: number;
  annualExpense: number;
  transactionDetails: TransactionDetail[];
};

type TransactionDetail = {
  date: string;
  content: string;
  debit: number;
  credit: number;
};

const ExpenseSummary: React.FC<ExpenseSummaryProps> = ({
  year,
  annualExpense,
  transactionDetails,
}) => {
  return (
    <Container>
      <Title>振替伝票（単票）</Title>
      <Header>
        <HeaderItem>
          <HeaderLabel>平成</HeaderLabel>
          <HeaderValue>{year}年度</HeaderValue>
        </HeaderItem>
        <HeaderItem>
          <HeaderLabel>行秋市事業会計</HeaderLabel>
          <HeaderValue>27-000481</HeaderValue>
        </HeaderItem>
      </Header>
      <Table>
        <TableHeader>
          <TableHeaderCell>月 日</TableHeaderCell>
          <TableHeaderCell>科目</TableHeaderCell>
          <TableHeaderCell>摘要</TableHeaderCell>
          <TableHeaderCell>借方科目</TableHeaderCell>
          <TableHeaderCell>貸方科目</TableHeaderCell>
          <TableHeaderCell>金 額</TableHeaderCell>
        </TableHeader>
        <TableBody>
          {transactionDetails.map((detail, index) => (
            <TableRow key={index}>
              <TableCell>{detail.date}</TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell>{detail.debit}</TableCell>
              <TableCell>{detail.credit}</TableCell>
              <TableCell></TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={5}>合 計</TableCell>
            <TableCell>{annualExpense.toLocaleString()}円</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
      <Footer>
        <div>伝票発行</div>
        <div>収 入 区 分 &nbsp;&nbsp;{'{収入区分}'}</div>
        <div>資金予算区分等 &nbsp;&nbsp;{'{資金予算区分等}'}</div>
      </Footer>
    </Container>
  );
};

// サンプルデータ
const sampleData: ExpenseSummaryProps = {
  year: 27,
  annualExpense: 1000000,
  transactionDetails: [
    {
      date: '4月7日',
      content: '事務費',
      debit: 100000,
      credit: 0,
    },
    {
      date: '5月7日',
      content: '光熱費',
      debit: 50000,
      credit: 0,
    },
    {
      date: '6月7日',
      content: '家賃',
      debit: 0,
      credit: 150000,
    },
  ],
};

const ExpenseSummaryExample: React.FC = () => {
  return <ExpenseSummary {...sampleData} />;
};

export default ExpenseSummaryExample;

// スタイリング
const Container = styled.div`
  font-family: sans-serif;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
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

const HeaderLabel = styled.div`
  margin-right: 10px;
`;

const HeaderValue = styled.div`
  font-weight: bold;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
`;

const TableHeader = styled.thead`
  background-color: #f0f0f0;
`;

const TableHeaderCell = styled.th`
  padding: 10px;
  text-align: center;
  border: 1px solid #ccc;
`;

const TableBody = styled.tbody``;

const TableRow = styled.tr``;

const TableCell = styled.td`
  padding: 10px;
  border: 1px solid #ccc;
  text-align: center;
`;

const TableFooter = styled.tfoot`
  font-weight: bold;
`;

const Footer = styled.div`
  text-align: right;
`;