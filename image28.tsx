import React from 'react';
import styled from '@emotion/styled';

type Props = {
  documentNo: string;
  date: string;
  name: string;
  amount: string;
};

const Container = styled.div`
  font-family: Arial, sans-serif;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;

  @media (max-width: 600px) {
    padding: 10px;
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
`;

const TableRow = styled.tr`
  &:nth-of-type(even) {
    background-color: #f2f2f2;
  }
`;

const TableHeader = styled.th`
  text-align: left;
  padding: 8px;
  border: 1px solid #ddd;
`;

const TableCell = styled.td`
  padding: 8px;
  border: 1px solid #ddd;
`;

const BanktTansfer = styled.div`
  margin-top: 20px;
`;

const TransferTitle = styled.div`
  font-weight: bold;
`;

const TransferList = styled.ul`
  padding-left: 20px;
  margin: 5px 0;
`;

const TotalAmount = styled.div`
  font-weight: bold;
  text-align: right;
  margin-top: 20px;
`;

const InvoiceComponent: React.FC<Props> = ({ documentNo, date, name, amount }) => {
  // 例外処理: documentNo, date, name, amountのいずれかが空の場合はエラーメッセージを表示
  if (!documentNo || !date || !name || !amount) {
    return <div>エラー: 請求情報が不完全です。</div>;
  }

  return (
    <Container>
      <h2>振替伝票（単票）</h2>
      <div>
        <span>伝票No. {documentNo}</span>
        <span style={{ float: 'right' }}>振替</span>
      </div>
      <Table>
        <thead>
          <TableRow>
            <TableHeader>所属</TableHeader>
            <TableHeader>検証用</TableHeader>
            <TableHeader>自由日1名</TableHeader>
            <TableHeader>自由日2名</TableHeader>
          </TableRow>
        </thead>
        <tbody>
          <TableRow>
            <TableCell>{name}</TableCell>
            <TableCell>株長</TableCell>
            <TableCell>平成28年 3月27日</TableCell>
            <TableCell>平成 年 月 日</TableCell>
          </TableRow>
        </tbody>
      </Table>
      <Table>
        <thead>
          <TableRow>
            <TableHeader>借方科目</TableHeader>
            <TableHeader>貸方科目</TableHeader>
          </TableRow>
        </thead>
        <tbody>
          <TableRow>
            <TableCell>
              <div>細節<br/>明細</div>
            </TableCell>
            <TableCell>
              <div>細節<br/>明細</div>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <TransferTitle>流動資産</TransferTitle>
              <TransferList>
                <li>その他流動資産</li>
                <li>仮払消費税及び地方消費税</li>
                <li>仮払消費税及び地方消費税</li>
                <li>仮払消費税及び地方消費税</li>
                <li>仮払消費税及び地方消費税</li>
              </TransferList>
              <div>税 区 分</div>
              <div>収 入 区 分</div>
            </TableCell>
            <TableCell>
              <TransferTitle>流動負債</TransferTitle>
              <TransferList>
                <li>その他流動負債</li>
                <li>仮受消費税及び地方消費税</li>
                <li>仮受消費税及び地方消費税</li>
                <li>仮受消費税及び地方消費税</li>
                <li>仮受消費税及び地方消費税</li>
              </TransferList>
              <div>税 区 分</div>
              <div>資金予算区分 無</div>
            </TableCell>
          </TableRow>
        </tbody>
      </Table>
      <TotalAmount>金 額 {amount}</TotalAmount>
    </Container>
  );
};

// 使用例
const App: React.FC = () => {
  return (
    <InvoiceComponent
      documentNo="27-000043"
      date="平成 27年度"
      name="検証用"
      amount="80,000円"
    />
  );
};

export default App;