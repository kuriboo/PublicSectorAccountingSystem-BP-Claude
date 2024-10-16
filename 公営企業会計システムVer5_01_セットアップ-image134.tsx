import React from 'react';
import styled from '@emotion/styled';

type ReservationInfoProps = {
  reservationNumber: string;
  status: string;
  name: string;
  phoneNumber: string;
  address: string;
  faxNumber: string;
  receiptNumber: string;
  paymentMethod: string;
  reservationDate: string;
  reservationDetails: Array<{
    date: string;
    count: string;
    item: string;
    quantity: string;
    shop: string;
    slipNumber: string;
    ffdApplied: string;
    accountingTreatment: string;
  }>;
};

const ReservationInfo: React.FC<ReservationInfoProps> = ({
  reservationNumber,
  status,
  name,
  phoneNumber,
  address,
  faxNumber,
  receiptNumber,
  paymentMethod,
  reservationDate,
  reservationDetails,
}) => {
  return (
    <Container>
      <Header>
        <Title>相手先情報照会</Title>
        <ReservationNumber>{reservationNumber}</ReservationNumber>
      </Header>
      <Content>
        <CustomerInfo>
          <Row>
            <Label>適用開始年月日</Label>
            <Value>{reservationDate}</Value>
          </Row>
          <Row>
            <Label>相手先マスタ</Label>
            <Value>
              <div>{name}様</div>
              <div>{phoneNumber}</div>
              <div>{address}</div>
            </Value>
          </Row>
          <Row>
            <Label>郵便番号</Label>
            <Value>{receiptNumber}</Value>
          </Row>
          <Row>
            <Label>住所(1)</Label>
            <Value>東京都江東区新木場1-1-15</Value>
          </Row>
          <Row>
            <Label>住所(2)</Label>
            <Value>きょうせいビルディング4F階</Value>
          </Row>
          <Row>
            <Label>電話番号</Label>
            <Value>{paymentMethod === '掛売' ? 'FAX番号' : '電話番号'}</Value>
          </Row>
        </CustomerInfo>
        <ReservationDetails>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHeaderCell>適用開始年月日</TableHeaderCell>
                <TableHeaderCell>明細</TableHeaderCell>
                <TableHeaderCell>銀行</TableHeaderCell>
                <TableHeaderCell>支店</TableHeaderCell>
                <TableHeaderCell>種別</TableHeaderCell>
                <TableHeaderCell>FFC用口座</TableHeaderCell>
                <TableHeaderCell>口座名義人</TableHeaderCell>
              </TableRow>
            </TableHeader>
            <TableBody>
              {reservationDetails.map((detail, index) => (
                <TableRow key={index}>
                  <TableCell>{detail.date}</TableCell>
                  <TableCell>{detail.count}</TableCell>
                  <TableCell>{detail.item}</TableCell>
                  <TableCell>{detail.quantity}</TableCell>
                  <TableCell>{detail.shop}</TableCell>
                  <TableCell>{detail.slipNumber}</TableCell>
                  <TableCell>{detail.ffdApplied}</TableCell>
                  <TableCell>{detail.accountingTreatment}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </ReservationDetails>
      </Content>
      <Footer>
        <Button>前データ</Button>
        <Button>次データ</Button>
        <Button>分割先</Button>
        <Button>クリア</Button>
        <Button>終了</Button>
      </Footer>
    </Container>
  );
};

const Container = styled.div`
  font-family: sans-serif;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const Title = styled.h1`
  font-size: 24px;
  margin: 0;
`;

const ReservationNumber = styled.div`
  font-size: 18px;
`;

const Content = styled.div`
  display: flex;
  gap: 40px;
`;

const CustomerInfo = styled.div`
  flex: 1;
`;

const Row = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

const Label = styled.div`
  width: 120px;
  font-weight: bold;
`;

const Value = styled.div`
  flex: 1;
`;

const ReservationDetails = styled.div`
  flex: 1;
  overflow-x: auto;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHeader = styled.thead``;

const TableBody = styled.tbody``;

const TableRow = styled.tr``;

const TableHeaderCell = styled.th`
  background-color: #eee;
  padding: 10px;
  text-align: left;
  white-space: nowrap;
`;

const TableCell = styled.td`
  border-top: 1px solid #ccc;
  padding: 10px;
`;

const Footer = styled.footer`
  margin-top: 20px;
  text-align: center;
`;

const Button = styled.button`
  margin: 0 5px;
  padding: 5px 10px;
`;

// Usage example
const reservationData: ReservationInfoProps = {
  reservationNumber: 'SUD5650 相手先情報照会',
  status: 'データ状態 予算権限 行数 太郎',
  name: '株式会社きょうせい',
  phoneNumber: '03-1234-5678',
  address: 'きょうせい 梅子',
  faxNumber: '03-1234-5678',
  receiptNumber: '136-0082',
  paymentMethod: 'FAX番号',
  reservationDate: '令和6年09月20日',
  reservationDetails: [
    {
      date: '2023/09/20',
      count: '1',
      item: '000',
      quantity: 'みずほ銀行',
      shop: '001',
      slipNumber: '東京営業部',
      ffdApplied: '普通預金',
      accountingTreatment: '1111111',
    },
    {
      date: '2023/09/01',
      count: '1',
      item: '000',
      quantity: 'みずほ銀行',
      shop: '001',
      slipNumber: '丸の内支店',
      ffdApplied: '普通預金',
      accountingTreatment: '1234567', 
    },
  ],
};

const App: React.FC = () => {
  return (
    <div>
      <ReservationInfo {...reservationData} />
    </div>
  );
};

export default App;