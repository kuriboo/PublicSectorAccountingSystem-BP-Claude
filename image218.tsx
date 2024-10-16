import React from 'react';
import styled from 'styled-components';

// 伝票1行の型定義
type SlipRowProps = {
  date: string;
  subject: string;
  amount: number;
  taxAmount?: number;
  taxInAmount?: number;
  feeAmount?: number;
  section?: string;
  note?: string;
};

// 伝票全体の型定義
type SlipDataProps = {
  slipNo: number;
  subject: string;
  rows: SlipRowProps[];
};

// 伝票1行のコンポーネント
const SlipRow: React.FC<SlipRowProps> = ({ date, subject, amount, taxAmount, taxInAmount, feeAmount, section, note }) => {
  return (
    <Row>
      <Cell>{date}</Cell>
      <Cell>{subject}</Cell>
      <Cell>{amount.toLocaleString()}</Cell>
      <Cell>{taxAmount?.toLocaleString() || '-'}</Cell>
      <Cell>{taxInAmount?.toLocaleString() || '-'}</Cell>
      <Cell>{feeAmount?.toLocaleString() || '-'}</Cell>
      <Cell>{section || '-'}</Cell>
      <Cell>{note || '-'}</Cell>
    </Row>
  );
};

// 伝票全体のコンポーネント 
const SlipData: React.FC<SlipDataProps> = ({ slipNo, subject, rows }) => {
  // 金額の合計を計算
  const totalAmount = rows.reduce((sum, row) => sum + row.amount, 0);

  return (
    <Container>
      <Header>
        <Title>新規伝票登録</Title>
        <SlipNo>伝票番号：{slipNo}</SlipNo>
      </Header>
      <Subject>摘要：{subject}</Subject>
      <Table>
        <thead>
          <Row>
            <HeaderCell>発生日</HeaderCell>
            <HeaderCell>摘要</HeaderCell>
            <HeaderCell>金額</HeaderCell>  
            <HeaderCell>調定金額</HeaderCell>
            <HeaderCell>収納金額</HeaderCell>
            <HeaderCell>振替金額</HeaderCell>  
            <HeaderCell>区分</HeaderCell>
            <HeaderCell>備考</HeaderCell>
          </Row>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <SlipRow key={index} {...row} />
          ))}
        </tbody>
      </Table>
      <Footer>
        <Total>合計金額：{totalAmount.toLocaleString()}</Total>
      </Footer>  
    </Container>
  );
};

// サンプルデータ
const sampleData: SlipDataProps = {
  slipNo: 73,
  subject: '前受収益',
  rows: [
    {
      date: '03/11/25',  
      subject: '前受収益',
      amount: 21600,
    },
  ],
};

// 使用例
const App: React.FC = () => {
  return (
    <SlipData {...sampleData} />
  );
};

export default App;

// スタイリング
const Container = styled.div`
  padding: 16px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`;

const Title = styled.h2`
  margin: 0;
`;

const SlipNo = styled.div`
  font-size: 18px;
`;

const Subject = styled.div`
  margin-bottom: 16px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  th, td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: center;
  }
`;

const Row = styled.tr``;

const Cell = styled.td``;

const HeaderCell = styled.th`
  background-color: #f0f0f0;
`;

const Footer = styled.div`
  margin-top: 16px;
  text-align: right;
`;

const Total = styled.div`
  font-size: 18px;
  font-weight: bold;
`;