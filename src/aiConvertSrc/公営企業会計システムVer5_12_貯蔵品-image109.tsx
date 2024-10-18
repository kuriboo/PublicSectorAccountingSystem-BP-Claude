import React from 'react';
import styled from 'styled-components';

interface PublicWorkCoopProps {
  tax1: string;
  tax2: string;
  code1: string;
  code2: string;
  period1: string;
  period2: string;
}

const PublicWorkCoop: React.FC<PublicWorkCoopProps> = ({
  tax1 = '000000',
  tax2 = '999999',
  code1 = '000000000',
  code2 = '9999999999',
  period1 = 'YYYY/MM/DD',
  period2 = 'YYYY/MM/DD',
}) => {
  return (
    <Container>
      <Title>貯蔵月別入出庫リスト作成</Title>
      <Table>
        <Row>
          <Cell>範囲指定</Cell>
          <Cell></Cell>
          <Cell></Cell>
          <Cell></Cell>
        </Row>
        <Row>
          <Cell>税管場所</Cell>
          <Cell>{tax1}</Cell>
          <Cell>～</Cell>
          <Cell>{tax2}</Cell>
        </Row>
        <Row>
          <Cell>事儀コード</Cell>
          <Cell>{code1}</Cell>
          <Cell>～</Cell>
          <Cell>{code2}</Cell>
        </Row>
        <Row>
          <Cell>対象年月</Cell>
          <Cell>{period1}</Cell>
          <Cell>～</Cell>
          <Cell>{period2}</Cell>
        </Row>
      </Table>
      <Footer>
        <Button>OK</Button>
        <Button>クリア</Button>
        <Button>終了</Button>
      </Footer>
    </Container>
  );
};

// Styles
const Container = styled.div`
  padding: 16px;
  background-color: #f0f0f0;
`;

const Title = styled.h2`
  margin: 0 0 16px;
  font-size: 18px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const Row = styled.tr``;

const Cell = styled.td`
  padding: 8px;
  border: 1px solid #ccc;
`;

const Footer = styled.div`
  margin-top: 16px;
  text-align: center;
`;

const Button = styled.button`
  padding: 8px 16px;
  margin: 0 8px;
`;

// Usage example
const App: React.FC = () => {
  return (
    <div>
      <PublicWorkCoop
        tax1="000000"
        tax2="999999" 
        code1="0000000000"
        code2="9999999999"
        period1="2029/06/01"
        period2="2029/06/30"
      />
    </div>
  );
};

export default App;