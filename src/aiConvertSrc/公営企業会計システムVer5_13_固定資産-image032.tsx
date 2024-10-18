import React from 'react';
import styled from 'styled-components';

// 土地明細入力用のデータ型定義
type LandDetailInputProps = {
  data: {
    id: number;
    date: string;
    name: string;
    area: number;
    unitPrice: number;
    price: number;
    note: string;
  }[];
};

// 土地明細入力コンポーネント
const LandDetailInput: React.FC<LandDetailInputProps> = ({ data }) => {
  return (
    <Container>
      <Title>土地明細入力</Title>
      <Table>
        <TableHeader>
          <Row>
            <HeaderCell>整理番号</HeaderCell>
            <HeaderCell>日付</HeaderCell>
            <HeaderCell>土地名称</HeaderCell>
            <HeaderCell>地番</HeaderCell>
            <HeaderCell>地目</HeaderCell>
            <HeaderCell>公図面積</HeaderCell>
            <HeaderCell>実測面積</HeaderCell>
            <HeaderCell>単価m2</HeaderCell>
          </Row>
        </TableHeader>
        <TableBody>
          {data.map((item) => (
            <Row key={item.id}>
              <Cell>{item.id}</Cell>
              <Cell>{item.date}</Cell>
              <Cell>{item.name}</Cell>
              <Cell>{item.area}</Cell>
              <Cell></Cell>
              <Cell>{item.area}</Cell>
              <Cell>{item.area}</Cell>
              <Cell>{item.unitPrice.toLocaleString()}</Cell>
            </Row>
          ))}
        </TableBody>
      </Table>

      <InputArea>
        <InputGroup>
          <Label>整理番号</Label>
          <Input type="text" value="1" readOnly />
        </InputGroup>
        <InputGroup>
          <Label>検番号</Label>
          <Input type="text" />
        </InputGroup>
        <InputGroup>
          <Label>除却備考</Label>
          <Input type="text" />
        </InputGroup>
        <InputGroup>
          <Label>摘要</Label>
          <Input type="text" />
        </InputGroup>
        <InputGroup>
          <Label>元所有者氏名</Label>
          <Input type="text" />
        </InputGroup>
        <InputGroup>
          <Label>元所有者住所</Label>
          <Input type="text" />
        </InputGroup>
        <InputGroup>
          <Label>公図面積m2</Label>
          <Input type="text" value="0.00" />
        </InputGroup>
        <InputGroup>
          <Label>実測面積m2</Label>
          <Input type="text" value="0.00" />
        </InputGroup>
      </InputArea>

      <ButtonGroup>
        <Button>OK</Button>
        <Button>クリア</Button>
        <Button>キャンセル</Button>
      </ButtonGroup>
    </Container>
  );
};

// サンプルデータ
const sampleData = [
  {
    id: 1,
    date: '2015-03-31',
    name: '受贈財産',
    area: 0.70,
    unitPrice: 13790,
    price: 13790,
    note: '雑種地',
  },
  {
    id: 2,
    date: '2015-03-31',
    name: '受贈財産',
    area: 0.70,
    unitPrice: 13790,
    price: 13790,
    note: '雑種地',
  },
  {
    id: 3,
    date: '2015-03-31',
    name: '受贈財産',
    area: 0.69,
    unitPrice: 13593,
    price: 13593,
    note: '浜沿火口用地',
  },
];

// 土地明細入力の表示用コンポーネント
const LandDetailInputDisplay = () => {
  return <LandDetailInput data={sampleData} />;
};

// スタイリング
const Container = styled.div`
  padding: 16px;
`;

const Title = styled.h2`
  font-size: 18px;
  margin-bottom: 16px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 24px;
`;

const TableHeader = styled.thead`
  background-color: #f0f0f0;
`;

const TableBody = styled.tbody``;

const Row = styled.tr``;

const HeaderCell = styled.th`
  padding: 8px;
  text-align: left;
  border: 1px solid #ccc;
`;

const Cell = styled.td`
  padding: 8px;
  border: 1px solid #ccc;
`;

const InputArea = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  margin-bottom: 24px;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const InputGroup = styled.div`
  display: flex;
  align-items: center;
`;

const Label = styled.label`
  flex: 0 0 120px;
  margin-right: 8px;
`;

const Input = styled.input`
  flex: 1;
  padding: 4px;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Button = styled.button`
  padding: 8px 16px;
  margin-left: 8px;
`;

export default LandDetailInputDisplay;