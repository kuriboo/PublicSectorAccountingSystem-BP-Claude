import React from 'react';
import styled from '@emotion/styled';

interface TableData {
  date: string;
  item: string;
  quantity: number;
  unitPrice: number;
  amount: number;
  tax: number;
  taxAmount: number;
  total: number;
}

interface TableProps {
  data: TableData[];
}

const Table: React.FC<TableProps> = ({ data }) => {
  return (
    <TableWrapper>
      <TableHeader>
        <HeaderCell>日付</HeaderCell>
        <HeaderCell>項目</HeaderCell>
        <HeaderCell>数量</HeaderCell>
        <HeaderCell>単価</HeaderCell>
        <HeaderCell>金額</HeaderCell>
        <HeaderCell>税率</HeaderCell>
        <HeaderCell>消費税額</HeaderCell>
        <HeaderCell>合計</HeaderCell>
      </TableHeader>
      <TableBody>
        {data.map((row, index) => (
          <TableRow key={index}>
            <TableCell>{row.date}</TableCell>
            <TableCell>{row.item}</TableCell>
            <TableCell>{row.quantity}</TableCell>
            <TableCell>{row.unitPrice}</TableCell>
            <TableCell>{row.amount}</TableCell>
            <TableCell>{row.tax}%</TableCell>
            <TableCell>{row.taxAmount}</TableCell>
            <TableCell>{row.total}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <FooterCell colSpan={4}>総計</FooterCell>
          <FooterCell>
            {data.reduce((sum, row) => sum + row.amount, 0)}
          </FooterCell>
          <FooterCell></FooterCell>
          <FooterCell>
            {data.reduce((sum, row) => sum + row.taxAmount, 0)}
          </FooterCell>
          <FooterCell>
            {data.reduce((sum, row) => sum + row.total, 0)}
          </FooterCell>
        </TableRow>
      </TableFooter>
    </TableWrapper>
  );
};

// スタイリング
const TableWrapper = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;

  @media (max-width: 600px) {
    font-size: 12px;
  }
`;

const TableHeader = styled.thead`
  background-color: #f2f2f2;
`;

const TableBody = styled.tbody``;

const TableFooter = styled.tfoot`
  font-weight: bold;
`;

const TableRow = styled.tr``;

const HeaderCell = styled.th`
  padding: 10px;
  text-align: center;
  border: 1px solid #ddd;
`;

const TableCell = styled.td`
  padding: 10px;
  text-align: right;
  border: 1px solid #ddd;
`;

const FooterCell = styled.td`
  padding: 10px;
  text-align: right;
  border: 1px solid #ddd;
`;

// サンプルデータ
const sampleData: TableData[] = [
  {
    date: '2016/3/24',
    item: '消耗品',
    quantity: 1,
    unitPrice: 1000,
    amount: 1000,
    tax: 8,
    taxAmount: 80,
    total: 1080,
  },
  {
    date: '2016/3/25',
    item: '文具',
    quantity: 10,
    unitPrice: 100,
    amount: 1000,
    tax: 8,
    taxAmount: 80,
    total: 1080,
  },
];

// 使用例
const App: React.FC = () => {
  return (
    <div>
      <h1>請求書</h1>
      <Table data={sampleData} />
    </div>
  );
};

export default App;