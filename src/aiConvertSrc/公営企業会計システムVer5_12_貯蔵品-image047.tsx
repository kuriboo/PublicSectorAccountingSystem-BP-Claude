import React from 'react';
import styled from '@emotion/styled';

type ReservationData = {
  reserveNumber: string;
  productCode: string;
  productName: string;
  customer: string;
  dateFrom: string;
  dateTo: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
  tax: number;
  unitTax: number;
  amount: number;
  worker: string;
};

type ReservationTableProps = {
  data: ReservationData;
};

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;

  th, td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: left;
  }

  th {
    background-color: #f2f2f2;
  }
`;

const ReservationTable: React.FC<ReservationTableProps> = ({ data }) => {
  // 値が入っていない場合のデフォルト値を設定
  const defaultData: ReservationData = {
    reserveNumber: '',
    productCode: '',
    productName: '',
    customer: '',
    dateFrom: '',
    dateTo: '',
    quantity: 0,
    unitPrice: 0,
    totalPrice: 0,
    tax: 0,
    unitTax: 0,
    amount: 0,
    worker: '',
  };

  // データが渡されていない場合はデフォルト値を使用
  const reservationData = data ? data : defaultData;

  return (
    <Table>
      <tbody>
        <tr>
          <th>予定在庫照会</th>
          <td colSpan={5}>行政市水道事業会計</td>
          <td colSpan={2}>締年月日 平成30年06月25日</td>
        </tr>
        <tr>
          <th>保管場所</th>
          <td>{reservationData.reserveNumber}</td>
          <th>品番</th>
          <td>{reservationData.productCode}</td>
          <th>品名</th>
          <td colSpan={3}>{reservationData.productName}</td>
        </tr>
        <tr>
          <th>規格</th>
          <td>{reservationData.customer}</td>
          <th>単位</th>
          <td>m</th>
          <th>適正在庫数</th>
          <td>{reservationData.dateFrom}</td>
          <th>現在庫数</th>
          <td>{reservationData.dateTo}</td>
        </tr>
        <tr>
          <th>入出庫日</th>
          <th>入庫予定</th>
          <th>出庫予定</th>
          <th>在庫予定</th>
          <th>不足分</th>
          <th colSpan={3}>工事名称</th>
        </tr>
        <tr>
          <td>{reservationData.quantity}</td>
          <td>{reservationData.unitPrice}</td>
          <td>{reservationData.totalPrice}</td>
          <td>{reservationData.tax}</td>
          <td>{reservationData.unitTax}</td>
          <td colSpan={3}>{reservationData.amount}</td>
        </tr>
      </tbody>
    </Table>
  );
};

// コンポーネントの使用例
const SampleData: ReservationData = {
  reserveNumber: '00000',
  productCode: '0000701015',
  productName: '品名 測圧槽',
  customer: '規格 φ200㎜',
  dateFrom: '2017/09/15',
  dateTo: '30.00',
  quantity: 900.00,
  unitPrice: 35.00,
  totalPrice: 200.00,
  tax: 5.00,
  unitTax: 0,
  amount: 3.00,
  worker: '改良工事',
};

const App: React.FC = () => {
  return (
    <div>
      <h1>予定在庫照会</h1>
      <ReservationTable data={SampleData} />
    </div>
  );
};

export default App;