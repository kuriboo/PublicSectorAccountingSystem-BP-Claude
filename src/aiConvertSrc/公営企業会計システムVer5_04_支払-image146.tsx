import React from 'react';
import styled from 'styled-components';

type SupportDetailProps = {
  companyName: string;
  waterReceiptNumber: string;
  waterReceiptDate: string;
  period: {
    from: string;
    to: string;
  };
  usage: string;
  amount: number;
  paymentDeadline: string;
  paymentAmount: number;
  paymentLocation: string;
};

const SupportDetail: React.FC<SupportDetailProps> = ({
  companyName,
  waterReceiptNumber,
  waterReceiptDate,
  period,
  usage,
  amount,
  paymentDeadline,
  paymentAmount,
  paymentLocation,
}) => {
  return (
    <Container>
      <Header>支払予定明細照会</Header>
      <CompanyName>{companyName || '会社名なし'}</CompanyName>
      <Row>
        <Label>支払予定日</Label>
        <Value>{waterReceiptDate || 'yyyy/mm/dd'}</Value>
        <Label>支払料日</Label>
        <Value>
          {period.from || 'yyyy/mm/dd'} ~ {period.to || 'yyyy/mm/dd'}
        </Value>
      </Row>
      <Row>
        <Label>支出科目</Label>
        <Value>{usage || '仕訳科目'}</Value>
        <Label>支出金額</Label>
        <Value>{amount?.toLocaleString() || 0}円</Value>
      </Row>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHeaderCell>支払予定日</TableHeaderCell>
            <TableHeaderCell>決定番号</TableHeaderCell>
            <TableHeaderCell>支払先</TableHeaderCell>
            <TableHeaderCell>支払額</TableHeaderCell>
            <TableHeaderCell>科目名</TableHeaderCell>
            <TableHeaderCell>摘要</TableHeaderCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>{paymentDeadline || 'yyyy/mm/dd'}</TableCell>
            <TableCell>{waterReceiptNumber || '-------'}</TableCell>
            <TableCell>きょうだい</TableCell>
            <TableCell>{paymentAmount?.toLocaleString() || 0}円</TableCell>
            <TableCell>事務用品の新規購入</TableCell>
            <TableCell>{paymentLocation || '-------'}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <Footer>
        <CloseButton>閉じる</CloseButton>
        <PrintButton>終了</PrintButton>
      </Footer>
    </Container>
  );
};

const sampleData: SupportDetailProps = {
  companyName: '支払予定明細照会',
  waterReceiptNumber: '3170827',
  waterReceiptDate: '平成31年09月18日',
  period: {
    from: '平成31年08月27日',
    to: '平成31年09月27日',
  },
  usage: 'ざよういい',
  amount: 13000,
  paymentDeadline: '平成31年09月27日',
  paymentAmount: 13000,
  paymentLocation: '事務用品の新規購入',
};

const SupportDetailSample: React.FC = () => {
  return <SupportDetail {...sampleData} />;
};

export default SupportDetailSample;

// Styled components
const Container = styled.div`
  font-family: sans-serif;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const Header = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;

const CompanyName = styled.div`
  text-align: center;
  font-weight: bold;
  margin-bottom: 20px;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const Label = styled.div`
  font-weight: bold;
  margin-right: 10px;
`;

const Value = styled.div``;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
`;

const TableHeader = styled.thead``;

const TableBody = styled.tbody``;

const TableRow = styled.tr``;

const TableHeaderCell = styled.th`
  border: 1px solid #ccc;
  background: #f2f2f2;
  padding: 5px;
  text-align: center;
  white-space: nowrap;
`;

const TableCell = styled.td`
  border: 1px solid #ccc;
  padding: 5px;
`;

const Footer = styled.div`
  margin-top: 20px;
  text-align: center;
`;

const CloseButton = styled.button`
  margin-right: 10px;
`;

const PrintButton = styled.button``;