import React from 'react';
import styled from 'styled-components';

// 型定義
interface Reservation {
  reserveNumber: string;
  customerCode: string;
  customerName: string;
  phoneNumber: string;
  numberOfAdults: number;
  numberOfChildren: number;
  numberOfInfants: number;
  totalPrice: number;
  paymentAmount: number;
}

interface Props {
  reservations: Reservation[];
}

// スタイリング
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

  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

const Container = styled.div`
  overflow-x: auto;
`;

// メインコンポーネント
const ReservationTable: React.FC<Props> = ({ reservations }) => {
  // 合計金額の計算
  const totalAmount = reservations.reduce((sum, res) => sum + res.paymentAmount, 0);

  return (
    <Container>
      <Table>
        <thead>
          <tr>
            <th>予約番号</th>
            <th>予約顧客コード</th>
            <th>予約顧客名</th>
            <th>予約顧客電話</th>
            <th>予約大人人数</th>
            <th>予約小人人数</th>
            <th>予約幼児人数</th>
            <th>請求金額</th>
            <th>入金金額</th>
          </tr>
        </thead>
        <tbody>
          {reservations.map((res, i) => (
            <tr key={i}>
              <td>{res.reserveNumber}</td>
              <td>{res.customerCode}</td>
              <td>{res.customerName}</td>
              <td>{res.phoneNumber}</td>
              <td>{res.numberOfAdults}</td>
              <td>{res.numberOfChildren}</td>
              <td>{res.numberOfInfants}</td>
              <td>{res.totalPrice}</td>
              <td>{res.paymentAmount}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <p>請求金額合計: {totalAmount}円</p>
    </Container>
  );
};

// サンプルデータを使用した表示コンポーネント
const SampleReservationTable: React.FC = () => {
  const sampleData: Reservation[] = [
    {
      reserveNumber: '001010101',
      customerCode: '0001',
      customerName: '水道使用料',
      phoneNumber: '水道料金',
      numberOfAdults: 1,
      numberOfChildren: 0, 
      numberOfInfants: 0,
      totalPrice: 276789830,
      paymentAmount: 276789830,
    },
    // ... 他のサンプルデータ
  ];

  return <ReservationTable reservations={sampleData} />;
};

export default SampleReservationTable;