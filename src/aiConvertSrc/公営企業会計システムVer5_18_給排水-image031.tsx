import React from 'react';
import styled from 'styled-components';

// 納付分類マスタの型定義
type Division = {
  code: string;
  name: string;
};

// 納付分類マスタのプロパティ型
type DivisionMasterProps = {
  divisions: Division[];
};

// 納付分類マスタコンポーネント
const DivisionMaster: React.FC<DivisionMasterProps> = ({ divisions }) => {
  return (
    <Container>
      <Title>納付分類マスタ</Title>
      <Table>
        <thead>
          <tr>
            <HeaderCell>コード</HeaderCell>
            <HeaderCell>仕訳内容</HeaderCell>
          </tr>
        </thead>
        <tbody>
          {divisions.map((division) => (
            <tr key={division.code}>
              <Cell>{division.code}</Cell>
              <Cell>{division.name}</Cell>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

// スタイリング
const Container = styled.div`
  background-color: #f0f0f0;
  padding: 16px;
  width: 100%;
  box-sizing: border-box;
`;

const Title = styled.h2`
  font-size: 18px;
  margin-bottom: 8px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const HeaderCell = styled.th`
  background-color: #e0e0e0;
  padding: 8px;
  text-align: left;
  font-weight: bold;
`;

const Cell = styled.td`
  padding: 8px;
  border-bottom: 1px solid #e0e0e0;
`;

// サンプルデータ
const sampleDivisions: Division[] = [
  { code: '000005', name: '手数料/水道基本料金の未収調定' },
  { code: '000006', name: '手数料/水道基本料金の収調定' },
  { code: '000007', name: '水道料金の未収調定(定期下山' },
  { code: '000008', name: '水道料金の未収調定' },
  { code: '000009', name: '水道料金の未収調定(定期下山' },
  { code: '000010', name: 'メーター負担金の未収調定' },
  { code: '000012', name: '水道料金の未収調定' },
];

// 使用例
const App: React.FC = () => {
  return (
    <div>
      <h1>納付分類マスタ</h1>
      <DivisionMaster divisions={sampleDivisions} />
    </div>
  );
};

export default App;