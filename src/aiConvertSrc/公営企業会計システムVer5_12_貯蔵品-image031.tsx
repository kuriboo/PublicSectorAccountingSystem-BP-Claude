import React from 'react';
import styled from 'styled-components';

// 型定義
type EstimateItem = {
  code: string;
  name: string;
  unitPrice: number;
  quantity: number;
  unit: string;
  price: number;
};

type EstimateData = {
  date: string;
  documentNumber: string;
  department: string;
  estimateNumber: string;
  issueDate: string;
  expiration: string;
  daysToPay: number;
  accountName: string;
  accountNameKana: string;
  accountNumber: string;
  accountBranchName: string;
  paymentMethod: string;
  items: EstimateItem[];
  subTotal: number;
  tax: number;
  total: number;
  remarks: string;
};

// スタイリング
const Container = styled.div`
  font-family: sans-serif;
  padding: 20px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const Title = styled.h2`
  font-size: 24px;
  margin: 0;
`;

const Info = styled.div`
  text-align: right;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

const TableHeader = styled.th`
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
  background-color: #f2f2f2;
`;

const TableCell = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
`;

const Summary = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const SummaryItem = styled.div`
  margin-left: 20px;
`;

// 見積書コンポーネント
const Estimate: React.FC<{ data: EstimateData }> = ({ data }) => {
  // 金額を 3 桁区切りの文字列に変換
  const formatPrice = (price: number) => {
    return price.toLocaleString();
  };

  return (
    <Container>
      <Header>
        <Title>御見積書</Title>
        <Info>
          <div>見積番号：{data.estimateNumber}</div>
          <div>発行日：{data.issueDate}</div>
          <div>有効期限：{data.expiration}</div>
        </Info>
      </Header>
      <div>
        <div>
          {data.accountName} {data.accountNameKana} 御中
        </div>
        <div>下記の通りお見積もり申し上げます。</div>
      </div>
      <Table>
        <thead>
          <TableRow>
            <TableHeader>コード</TableHeader>
            <TableHeader>品名</TableHeader>
            <TableHeader>単価</TableHeader>
            <TableHeader>数量</TableHeader>
            <TableHeader>単位</TableHeader>
            <TableHeader>金額</TableHeader>
          </TableRow>
        </thead>
        <tbody>
          {data.items.map((item) => (
            <TableRow key={item.code}>
              <TableCell>{item.code}</TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell>{formatPrice(item.unitPrice)}</TableCell>
              <TableCell>{item.quantity}</TableCell>
              <TableCell>{item.unit}</TableCell>
              <TableCell>{formatPrice(item.price)}</TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>
      <Summary>
        <SummaryItem>小計: {formatPrice(data.subTotal)}円</SummaryItem>
        <SummaryItem>消費税: {formatPrice(data.tax)}円</SummaryItem>
        <SummaryItem>合計: {formatPrice(data.total)}円</SummaryItem>
      </Summary>
      <div>備考: {data.remarks}</div>
    </Container>
  );
};

// サンプルデータ
const sampleData: EstimateData = {
  date: '令和30年06月28日',
  documentNumber: '00000',
  department: '営業課',
  estimateNumber: '00000',
  issueDate: '平成29年09月23日',
  expiration: '平成29年10月23日',
  daysToPay: 25,
  accountName: '御中',
  accountNameKana: 'ｵﾅｶﾆ',
  accountNumber: '0000000',
  accountBranchName: 'ｶﾌﾞｼｷｶﾞｲｼｬｹｯｹｲｿﾌﾄ',
  paymentMethod: '振込',
  items: [
    {
      code: '0000001001',
      name: 'DIP(K4)',
      unitPrice: 2500,
      quantity: 75,
      unit: 'ﾎﾝ',
      price: 2500,
    },
    {
      code: '0000001002',
      name: 'DIP(K4)',
      unitPrice: 2500,
      quantity: 100,
      unit: 'ﾎﾝ',
      price: 2500,
    },
    // 他のアイテムも同様に追加
  ],
  subTotal: 825120,
  tax: 5674880,
  total: 5674880,
  remarks: "よろしくお願いいたします。",
};

// サンプル表示用コンポーネント 
const App: React.FC = () => {
  return (
    <div>
      <h1>見積書サンプル</h1>
      <Estimate data={sampleData} />
    </div>
  );
};

export default App;