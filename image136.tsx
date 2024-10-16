import React from 'react';
import styled from '@emotion/styled';

type FinancialReportProps = {
  data: {
    date: string;
    debitCode: string;
    debitName: string;
    amount: number;
    description: string;
  }[];
  onConfirm: () => void;
  onCancel: () => void;
};

const FinancialReport: React.FC<FinancialReportProps> = ({ data, onConfirm, onCancel }) => {
  return (
    <Container>
      <Header>
        <Title>資金計源保守</Title>
        <Code>8002400</Code>
      </Header>
      <Table>
        <TableHeader>
          <Row>
            <HeaderCell>異動年月日</HeaderCell>
            <HeaderCell>財源コード</HeaderCell>
            <HeaderCell>財源名称</HeaderCell>
            <HeaderCell>増加区分</HeaderCell>
            <HeaderCell>財源金額</HeaderCell>
          </Row>
        </TableHeader>
        <TableBody>
          {data.map((item, index) => (
            <Row key={index}>
              <Cell>{item.date}</Cell>
              <Cell>{item.debitCode}</Cell>
              <Cell>{item.debitName}</Cell>
              <Cell>{item.description}</Cell>
              <Cell>{item.amount.toLocaleString()}</Cell>
            </Row>
          ))}
        </TableBody>
      </Table>
      <Footer>
        <Label>異動年月日</Label>
        <Input type="text" defaultValue="平成30年03月31日" />
        <Label>財源コード</Label>
        <Input type="text" defaultValue="01 自己財源" />
        <Label>増加区分</Label>
        <Input type="text" defaultValue="1" />
        <Label>名称</Label>
        <Input type="text" defaultValue="増加対象" />
        <Label>財源金額</Label>
        <Input type="text" defaultValue="8000000" />
        <ButtonContainer>
          <Button onClick={onConfirm}>確定</Button>
          <Button onClick={onCancel}>キャンセル</Button>
        </ButtonContainer>
      </Footer>
    </Container>
  );
};

// Sample data for display
const sampleData = [
  {
    date: '2018-03-31',
    debitCode: '01',
    debitName: '自己財源',
    amount: 5000000,
    description: '増加対象',
  },
];

const SampleUsage: React.FC = () => {
  const handleConfirm = () => {
    console.log('Confirmed');
  };

  const handleCancel = () => {
    console.log('Cancelled');
  };

  return (
    <FinancialReport
      data={sampleData}
      onConfirm={handleConfirm}
      onCancel={handleCancel}
    />
  );
};

const Container = styled.div`
  font-family: Arial, sans-serif;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #f0f0f0;
`;

const Title = styled.h2`
  margin: 0;
`;

const Code = styled.span`
  font-weight: bold;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHeader = styled.thead`
  background-color: #f0f0f0;
`;

const TableBody = styled.tbody``;

const Row = styled.tr``;

const HeaderCell = styled.th`
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #ccc;
`;

const Cell = styled.td`
  padding: 10px;
  border-bottom: 1px solid #ccc;
`;

const Footer = styled.div`
  margin-top: 20px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 5px;
  margin-bottom: 10px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 10px 20px;
  margin-left: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export default FinancialReport;