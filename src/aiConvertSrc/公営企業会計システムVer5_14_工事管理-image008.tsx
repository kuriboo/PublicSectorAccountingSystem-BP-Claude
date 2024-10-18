import React from 'react';
import styled from 'styled-components';

type TableItem = {
  id: number;
  name: string;
  manager: string;
  place: string;
  flag: string;
};

type TableProps = {
  data: TableItem[];
};

const Table: React.FC<TableProps> = ({ data }) => {
  return (
    <TableWrapper>
      <TableHeader>
        <tr>
          <HeaderCell>工事台帳番号</HeaderCell>
          <HeaderCell>工事名称</HeaderCell>
          <HeaderCell>工事場所</HeaderCell>
          <HeaderCell>フラグ</HeaderCell>
        </tr>
      </TableHeader>
      <TableBody>
        {data.map((item) => (
          <TableRow key={item.id}>
            <TableCell>{item.id}</TableCell>
            <TableCell>{item.name}</TableCell>
            <TableCell>
              {item.manager}（第{item.place}）
            </TableCell>
            <TableCell>{item.flag}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </TableWrapper>
  );
};

// Styled components
const TableWrapper = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHeader = styled.thead`
  background-color: #f2f2f2;
`;

const HeaderCell = styled.th`
  padding: 8px;
  text-align: left;
  border: 1px solid #ddd;
`;

const TableBody = styled.tbody``;

const TableRow = styled.tr``;

const TableCell = styled.td`
  padding: 8px;
  border: 1px solid #ddd;
`;

// Sample data for demonstration
const sampleData: TableItem[] = [
  {
    id: 1,
    name: '○○地区配水管改良工事',
    manager: '',
    place: '',
    flag: '通常',
  },
  {
    id: 2,
    name: '工事台帳登録',
    manager: '',
    place: '',
    flag: '計上',
  },
  {
    id: 3,
    name: '下水道工事に伴う配水管移設工事',
    manager: '(第1工区)',
    place: '1工区',
    flag: '計上',
  },
  {
    id: 4,
    name: '下水道工事に伴う配水管移設工事',
    manager: '(第2工区)',
    place: '2工区',
    flag: '計上',
  },
];

const App: React.FC = () => {
  return (
    <div>
      <h2>資産非計上確定入力</h2>
      <Table data={sampleData} />
    </div>
  );
};

export default App;