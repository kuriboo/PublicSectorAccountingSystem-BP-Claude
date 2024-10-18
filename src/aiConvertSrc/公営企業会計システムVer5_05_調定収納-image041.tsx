import React from 'react';
import styled from 'styled-components';

// 収納受付の型定義
type CollectionReceptionProps = {
  receptionDate: string; // 収納受付日
  collectionDate: string; // 収納日付
  collectionAmount: number; // 収納額
  payee: string; // 納入通知書備考者
  paymentSlipNo: string; // 伝票番号
  note: string; // 備考
};

// 収納受付コンポーネント
const CollectionReception: React.FC<CollectionReceptionProps> = ({
  receptionDate,
  collectionDate,
  collectionAmount,
  payee,
  paymentSlipNo,
  note,
}) => {
  return (
    <Container>
      <Table>
        <thead>
          <tr>
            <Th>納付書<br/>番号</Th>
            <Th>伝票日付</Th>
            <Th>納入期限</Th>
            <Th>備考者</Th>
            <Th>摘要</Th>
            <Th>金額</Th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <Td>{paymentSlipNo}</Td>
            <Td>{receptionDate}</Td>
            <Td>{collectionDate}</Td>
            <Td>{payee}</Td>
            <Td>{note}</Td>
            <Td>{collectionAmount.toLocaleString()}</Td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
};

// スタイリング
const Container = styled.div`
  margin: 10px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  
  th, td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: left;
  }

  th {
    background-color: #f2f2f2;
  }
`;

const Th = styled.th`
  white-space: nowrap;
`;

const Td = styled.td``;

// サンプルデータ
const sampleData: CollectionReceptionProps = {
  receptionDate: '2020/06/10',
  collectionDate: '2019 H31予算節略',
  collectionAmount: 1000000,
  payee: '下水道使用料',
  paymentSlipNo: '5',
  note: '納入通知書備考者　下水道使用料の収納',
};

// 使用例
const App: React.FC = () => {
  return (
    <div>
      <h1>収納受付</h1>
      <CollectionReception {...sampleData} />
    </div>
  );
};

export default App;