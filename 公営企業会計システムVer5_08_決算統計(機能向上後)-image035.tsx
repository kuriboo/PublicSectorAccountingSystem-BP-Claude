```typescript
import React from 'react';
import styled from '@emotion/styled';

// 振替・振替予約詳細画面のプロパティ型
type TransferDetailsProps = {
  details: {
    reserveNumber: string;
    transferMethod: string;
    transferDate: string;
    transferType: string;
    transferAmount: number;
    fee: number;
    total: number;
    percent: number;
  }[];
};

// 振替・振替予約詳細コンポーネント
const TransferDetails: React.FC<TransferDetailsProps> = ({ details }) => {
  return (
    <Container>
      <Title>振替・振替全額調整 前年度参照（予算科目）</Title>
      <TableContainer>
        <Table>
          <thead>
            <tr>
              <Th>予算数</Th>
              <Th>01 公共下水道事業収</Th>
              <Th>予算節</Th>
              <Th>01 公共下水道使用料</Th>
            </tr>
            <tr>
              <Th>予算項</Th>
              <Th>01 営業収益</Th>
              <Th>予算細節</Th>
              <Th>0010 公共下水道</Th>
              <Th>税抜額</Th>
              <Th>消費税額</Th>
              <Th>税込額</Th>
            </tr>
            <tr>
              <Th>予算目</Th>
              <Th>01 公共下水道使用料</Th>
              <Th>予算明細</Th>
              <Th>0001 公共下水道</Th>
              <Th>107,839,870</Th>
              <Th>10,783,987</Th>
              <Th>118,623,857</Th>
              <Th>円</Th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <Td colSpan={4}>税区分</Td>
              <Td>課税</Td>
              <Td>107,840</Td>
              <Td>10,783</Td>
              <Td>118,623</Td>
              <Td>千円</Td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <Td>合計</Td>
              <Td>107,840</Td>
              <Td>10,783</Td>
              <Td>118,623</Td>
              <Td>100.00%</Td>
            </tr>
          </tfoot>
        </Table>
      </TableContainer>
      <DetailTable>
        <tbody>
          {details.map((detail, index) => (
            <tr key={index}>
              <Td>{detail.reserveNumber}</Td>
              <Td>{detail.transferMethod}</Td>
              <Td>{detail.transferDate}</Td>
              <Td>{detail.transferType}</Td>
              <Td>{detail.transferAmount.toLocaleString()}</Td>
              <Td>{detail.fee.toLocaleString()}</Td>
              <Td>{detail.total.toLocaleString()}</Td>
              <Td>{detail.percent.toFixed(2)}%</Td>
            </tr>
          ))}
        </tbody>
      </DetailTable>
    </Container>
  );
};

// サンプルデータ
const sampleData: TransferDetailsProps['details'] = [
  {
    reserveNumber: '1710100100010',
    transferMethod: '下水道使用料',
    transferDate: '',
    transferType: '',
    transferAmount: 107840,
    fee: 10783,
    total: 118623,
    percent: 100,
  },
];

// 表示用コンポーネント
const App: React.FC = () => {
  return (
    <div>
      <h1>振替・振替予約詳細</h1>
      <TransferDetails details={sampleData} />
    </div>
  );
};

// スタイリング
const Container = styled.div`
  font-family: sans-serif;
  padding: 20px;
`;

const Title = styled.h2`
  font-size: 18px;
  margin-bottom: 10px;
`;

const TableContainer = styled.div`
  overflow-x: auto;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;

  th,
  td {
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

const Td = styled.td`
  white-space: nowrap;
`;

const DetailTable = styled.table`
  width: 100%;
  border-collapse: collapse;

  td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: left;
  }
`;

export default App;