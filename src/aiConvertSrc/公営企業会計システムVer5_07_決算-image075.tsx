import React from 'react';
import styled from '@emotion/styled';

// 特定収入項目マスタの型定義
type SpecificIncomeItem = {
  code: string;
  name: string;
};

// 特定収入項目マスタのプロパティ型定義
type SpecificIncomeItemsProps = {
  items: SpecificIncomeItem[];
};

// コンポーネントのスタイリング
const Container = styled.div`
  background-color: #f0f0f0;
  padding: 16px;
  border-radius: 4px;
`;

const Title = styled.h2`
  font-size: 18px;
  margin-bottom: 8px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHeader = styled.th`
  padding: 8px;
  text-align: left;
  background-color: #e0e0e0;
`;

const TableRow = styled.tr`
  &:nth-of-type(even) {
    background-color: #f8f8f8;
  }
`;

const TableCell = styled.td`
  padding: 8px;
`;

// 特定収入項目マスタコンポーネント
const SpecificIncomeItems: React.FC<SpecificIncomeItemsProps> = ({ items }) => {
  return (
    <Container>
      <Title>特定収入項目マスタ</Title>
      <Table>
        <thead>
          <TableRow>
            <TableHeader>特定収入項目コード</TableHeader>
            <TableHeader>特定収入項目名称</TableHeader>
          </TableRow>
        </thead>
        <tbody>
          {items.map((item) => (
            <TableRow key={item.code}>
              <TableCell>{item.code}</TableCell>
              <TableCell>{item.name}</TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

// サンプルデータ
const sampleData: SpecificIncomeItem[] = [
  { code: 'U001', name: '雑収益' },
  { code: 'U002', name: '負担金' },
  { code: 'U003', name: 'その他' },
];

// 使用例
const App: React.FC = () => {
  return (
    <div>
      <h1>特定収入項目マスタ</h1>
      <SpecificIncomeItems items={sampleData} />
    </div>
  );
};

export default App;