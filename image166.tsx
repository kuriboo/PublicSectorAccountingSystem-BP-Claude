// 公高輸送会計システムコンポーネント
import React from 'react';
import styled from '@emotion/styled';

// 公高輸送会計システムのプロパティ型
type KokoYusoKaikeiSystemProps = {
  data: Array<{
    id: string;
    name: string;
    mappingId: string;
    title: string;
    remark: string;
    operator: string;
    updateDate: string;
  }>;
};

// 公高輸送会計システムコンポーネント
const KokoYusoKaikeiSystem: React.FC<KokoYusoKaikeiSystemProps> = ({ data }) => {
  return (
    <Container>
      <Header>
        <Title>公高企業会計システム</Title>
        <SubTitle>
          水道事業会計 &nbsp;&nbsp;&nbsp; 予算額決 &nbsp;&nbsp; 予算科目登録権限者 ○○ せい
          <br />
          令和02年06月16日
        </SubTitle>
      </Header>
      <Table>
        <TableHeader>
          <Row>
            <Cell>画面ID</Cell>
            <Cell>帳票ID</Cell>
            <Cell>名称</Cell>
            <Cell>表示件名</Cell>
            <Cell>帳票</Cell>
            <Cell>連携有無</Cell>
          </Row>
        </TableHeader>
        <TableBody>
          {data.map((item) => (
            <Row key={item.id}>
              <Cell>{item.id}</Cell>
              <Cell>{item.mappingId}</Cell>
              <Cell>{item.title}</Cell>
              <Cell>{item.remark || '-'}</Cell>
              <Cell>{item.operator}</Cell>
              <Cell>{item.updateDate}</Cell>
            </Row>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
};

// スタイリング
const Container = styled.div`
  font-family: sans-serif;
`;

const Header = styled.div`
  display: flex;
  align-items: baseline;
  margin-bottom: 1rem;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  margin: 0 1rem 0 0;
`;

const SubTitle = styled.div`
  font-size: 0.875rem;
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

const TableHeader = styled.thead``;

const TableBody = styled.tbody``;

const Row = styled.tr``;

const Cell = styled.td`
  &:first-of-type {
    white-space: nowrap;
  }
`;

// 使用例
const sampleData = [
  {
    id: 'MAD0010',
    name: '-',
    mappingId: 'MAP0010',
    title: '予定変出負担入力(一般)',
    remark: '予定(一般)',
    operator: '必須',
    updateDate: '有',
  },
  {
    id: 'MAD0020',
    name: '-',
    mappingId: 'MAP0012',
    title: '予定負担行為問番(一般)とりまとめ積算',
    remark: '-',
    operator: '任意',
    updateDate: '有',
  },
];

const App: React.FC = () => {
  return (
    <div>
      <h1>公高輸送会計システム</h1>
      <KokoYusoKaikeiSystem data={sampleData} />
    </div>
  );
};

export default App;