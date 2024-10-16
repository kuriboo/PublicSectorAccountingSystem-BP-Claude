import React from 'react';
import styled from '@emotion/styled';

interface ReservationData {
  yoyakuNo: string;
  yoyakuCode: string;
  yoyakuDate: string;
  customerCode: string;
  customerName: string;
  sex: string;
  tel: string;
  address: string;
  percentComplete: string;
}

interface ReservationDetailsProps {
  data: ReservationData[];
}

const ReservationDetails: React.FC<ReservationDetailsProps> = ({ data }) => {
  return (
    <Container>
      <Header>
        <HeaderItem>予算数 001 公共下水道事業収</HeaderItem>
        <HeaderItem>予算節 01 公共下水道使用料</HeaderItem>
        <HeaderItem>予算項 01 営業収益</HeaderItem>
        <HeaderItem>予算細節 0010 公共下水道</HeaderItem>
        <HeaderItem>予算日 01 公共下水道使用料</HeaderItem>
        <HeaderItem>予算明細 0001 公共下水道</HeaderItem>
      </Header>
      <Table>
        <TableHeader>
          <HeaderCell>事業</HeaderCell>
          <HeaderCell>振替コード</HeaderCell>
          <HeaderCell>振替名</HeaderCell>
          <HeaderCell>性質コード</HeaderCell>
          <HeaderCell>性質名</HeaderCell>
          <HeaderCell>施設決済セグメント</HeaderCell>
          <HeaderCell>構成比率(%)</HeaderCell>
        </TableHeader>
        <TableBody>
          {data.map((item, index) => (
            <TableRow key={index}>
              <TableCell>{item.yoyakuNo}</TableCell>
              <TableCell>{item.yoyakuCode}</TableCell>
              <TableCell>{item.yoyakuDate}</TableCell>
              <TableCell>{item.customerCode}</TableCell>
              <TableCell>{item.customerName}</TableCell>
              <TableCell>{item.sex}</TableCell>
              <TableCell>{item.percentComplete}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Footer>
        <Input type="text" placeholder="事業" />
        <CodeInput>
          <Input type="text" placeholder="振替コード" />
          <Input type="text" placeholder="性質コード" />
        </CodeInput>
        <PercentComplete>
          <PercentCompleteText>構成比率</PercentCompleteText>
          <PercentCompleteValue>0.0000 %</PercentCompleteValue>
        </PercentComplete>
        <Buttons>
          <Button>OK</Button>
          <Button>クリア</Button>
          <Button>キャンセル</Button>
        </Buttons>
      </Footer>
    </Container>
  );
};

// Styled components
const Container = styled.div`
  font-family: sans-serif;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const HeaderItem = styled.div`
  white-space: nowrap;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHeader = styled.thead`
  background-color: #f0f0f0;
`;

const HeaderCell = styled.th`
  padding: 5px;
  text-align: center;
  border: 1px solid #ccc;
`;

const TableBody = styled.tbody``;

const TableRow = styled.tr``;

const TableCell = styled.td`
  padding: 5px;
  border: 1px solid #ccc;
  text-align: center;
`;

const Footer = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  padding: 5px;
  margin-right: 10px;
`;

const CodeInput = styled.div`
  display: flex;
`;

const PercentComplete = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`;

const PercentCompleteText = styled.div`
  margin-right: 5px;
`;

const PercentCompleteValue = styled.div`
  font-weight: bold;
`;

const Buttons = styled.div`
  margin-left: 10px;
`;

const Button = styled.button`
  padding: 5px 10px;
  margin-left: 5px;
`;

// Sample data for demonstration
const sampleData: ReservationData[] = [
  {
    yoyakuNo: '公共下171 01 001 0010',
    yoyakuCode: '下水道使用料',
    yoyakuDate: '-',
    customerCode: '-',
    customerName: '按分',
    sex: '-',
    tel: '-',
    address: '-',
    percentComplete: '-',
  },
];

const App: React.FC = () => {
  return (
    <div>
      <h1>振替・性質按分設定</h1>
      <ReservationDetails data={sampleData} />
    </div>
  );
};

export default App;