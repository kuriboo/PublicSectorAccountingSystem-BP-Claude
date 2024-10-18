import React from 'react';
import styled from '@emotion/styled';

type MasterData = {
  code: number;
  name: string;
  birthday: string;
  retirementYear: string;
}

type Props = {
  data: MasterData[];
}

const MasterTable: React.FC<Props> = ({ data }) => {
  return (
    <TableWrapper>
      <TableHeader>
        <Row>
          <Cell>コード</Cell>
          <Cell>和暦年号</Cell>
          <Cell>関始年月日</Cell>
          <Cell>和暦変換年号</Cell>
        </Row>
      </TableHeader>
      <TableBody>
        {data.map((item, index) => (
          <Row key={index}>
            <Cell>{item.code}</Cell>
            <Cell>{item.name}</Cell>
            <Cell>{formatDate(item.birthday)}</Cell>
            <Cell>{item.retirementYear}</Cell>
          </Row>
        ))}
      </TableBody>
    </TableWrapper>
  );
};

// ユーティリティ関数: 日付をフォーマットする
const formatDate = (dateString: string) => {
  if (!dateString) return ''; // 日付が空の場合は空文字を返す
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return `${year}/${month}/${day}`;
};

// スタイリング
const TableWrapper = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;
`;

const TableHeader = styled.thead`
  background-color: #f2f2f2;
`;

const TableBody = styled.tbody``;

const Row = styled.tr`
  &:nth-of-type(even) {
    background-color: #f9f9f9;
  }
`;

const Cell = styled.td`
  padding: 8px;
  border: 1px solid #ddd;
`;

// 使用例
const sampleData: MasterData[] = [
  { code: 1, name: '明治', birthday: '1868/09/08', retirementYear: 'M' },
  { code: 2, name: '大正', birthday: '1912/07/30', retirementYear: 'T' },
  { code: 3, name: '昭和', birthday: '1926/12/25', retirementYear: 'S' },
  { code: 4, name: '平成', birthday: '1989/01/07', retirementYear: 'H' },
];

const App: React.FC = () => {
  return (
    <div>
      <h1>年号マスタ</h1>
      <MasterTable data={sampleData} />
    </div>
  );
};

export default App;