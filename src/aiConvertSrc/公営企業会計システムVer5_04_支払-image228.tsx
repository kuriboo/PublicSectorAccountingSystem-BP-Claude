import React from 'react';
import styled from '@emotion/styled';

interface ReservationData {
  year: number;
  physicalExam: string;
  doctorInCharge: string;
  receiptCode: string;
  paymentDate: string;
  paymentBank: string;
  paymentBranch: string;
  receiptAmount: number;
  bookAmount: number;
  consumptionTax: number;
}

interface ReservationDetailProps {
  data: ReservationData;
}

const ReservationDetail: React.FC<ReservationDetailProps> = ({ data }) => {
  // 値が入っていない場合のデフォルト値を設定
  const {
    year = new Date().getFullYear(),
    physicalExam = '',
    doctorInCharge = '',
    receiptCode = '',
    paymentDate = '',
    paymentBank = '',
    paymentBranch = '',
    receiptAmount = 0,
    bookAmount = 0,
    consumptionTax = 0,
  } = data;

  return (
    <Container>
      <Header>
        <HeaderItem>
          <Label>年度</Label>
          <Value>{year}</Value>
        </HeaderItem>
        <HeaderItem>
          <Label>支出決定番号</Label>
          <Value>{physicalExam}</Value>
        </HeaderItem>
        <HeaderItem>
          <Label>支払先</Label>
          <Value>{doctorInCharge}</Value>
        </HeaderItem>
      </Header>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHeaderCell>借方科目</TableHeaderCell>
            <TableHeaderCell>借方金額</TableHeaderCell>
            <TableHeaderCell>借方明細</TableHeaderCell>
            <TableHeaderCell>貸方科目</TableHeaderCell>
            <TableHeaderCell>貸方金額</TableHeaderCell>
            <TableHeaderCell>貸方明細</TableHeaderCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>健診委託費</TableCell>
            <TableCell>○○銀・○○支</TableCell>
            <TableCell>0001-SNM</TableCell>
            <TableCell>預金</TableCell>
            <TableCell>{paymentBank ? `○○銀・${paymentBank}` : ''}</TableCell>
            <TableCell>{paymentBranch ? `○○銀・${paymentBranch}` : ''}</TableCell>
          </TableRow>
        </TableBody>
      </Table>

      <Footer>
        <FooterItem>
          <FooterLabel>決定額</FooterLabel>
          <FooterValue>{receiptAmount.toLocaleString()}</FooterValue>
        </FooterItem>
        <FooterItem>
          <FooterLabel>本体額</FooterLabel>
          <FooterValue>{bookAmount.toLocaleString()}</FooterValue>
        </FooterItem>
        <FooterItem>
          <FooterLabel>消費税額</FooterLabel>
          <FooterValue>{consumptionTax.toLocaleString()}</FooterValue>
        </FooterItem>
      </Footer>
    </Container>
  );
};

// サンプルデータを用いた表示用コンポーネント
const App: React.FC = () => {
  const sampleData: ReservationData = {
    year: 2023,
    physicalExam: 'H30予算01-事業',
    doctorInCharge: '○○病院',
    receiptCode: '0001-SNM',
    paymentDate: '2023/04/01',
    paymentBank: '△△銀行',
    paymentBranch: '△△支店',
    receiptAmount: 43000,
    bookAmount: 39297,
    consumptionTax: 3703,
  };

  return (
    <div>
      <h1>予約詳細</h1>
      <ReservationDetail data={sampleData} />
    </div>
  );
};

export default App;

// スタイリング
const Container = styled.div`
  font-family: sans-serif;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const HeaderItem = styled.div`
  flex: 1;
`;

const Label = styled.div`
  font-weight: bold;
  margin-bottom: 5px;
`;

const Value = styled.div`
  padding: 5px;
  border: 1px solid #ccc;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
`;

const TableHeader = styled.thead`
  background-color: #f0f0f0;
`;

const TableHeaderCell = styled.th`
  padding: 10px;
  text-align: left;
  border: 1px solid #ccc;
`;

const TableBody = styled.tbody``;

const TableRow = styled.tr``;

const TableCell = styled.td`
  padding: 10px;
  border: 1px solid #ccc;
`;

const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const FooterItem = styled.div`
  margin-left: 20px;
  @media (max-width: 600px) {
    margin-left: 0;
    margin-bottom: 10px;
  }
`;

const FooterLabel = styled.div`
  font-weight: bold;
  margin-bottom: 5px;
`;

const FooterValue = styled.div`
  padding: 5px;
  border: 1px solid #ccc;
  text-align: right;
`;