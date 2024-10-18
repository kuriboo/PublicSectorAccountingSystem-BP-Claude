import React from 'react';
import styled from '@emotion/styled';

type ReservationData = {
  date: string;
  plan: string;
  planName: string;
  term: string;
};

type PriceData = {
  beforeTax: number;
  tax: number;
  afterTax: number;
  pointUsed: number;
  pointAdded: number;
};

type DiscountData = {
  design: number;
  tax: number;
  discountRate: number;
  discount: number;
};

type ConfirmationProps = {
  reservationData: ReservationData;
  priceData: PriceData;
  discountData: DiscountData;
};

const Container = styled.div`
  font-family: Arial, sans-serif;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

  @media (max-width: 480px) {
    max-width: 100%;
    padding: 10px;
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;

  td {
    padding: 8px;
    border: 1px solid #ccc;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
`;

const Button = styled.button`
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const Confirmation: React.FC<ConfirmationProps> = ({ reservationData, priceData, discountData }) => {
  // 予約データの表示
  const renderReservationData = () => (
    <Table>
      <tbody>
        <tr>
          <td>予算節</td>
          <td>{reservationData.date}</td>
        </tr>
        <tr>
          <td>予算部</td>
          <td>{reservationData.plan}</td>
        </tr>
        <tr>
          <td>予算部節</td>
          <td>{reservationData.planName}</td>
        </tr>
        <tr>
          <td>予算明細</td>
          <td>{reservationData.term}</td>
        </tr>
      </tbody>
    </Table>
  );

  // 予算情報の表示
  const renderPriceData = () => (
    <Table>
      <tbody>
        <tr>
          <td>予算総額</td>
          <td>{priceData.beforeTax.toLocaleString()}</td>
        </tr>
        <tr>
          <td>負但累計</td>
          <td>{priceData.tax.toLocaleString()}</td>
        </tr>
        <tr>
          <td>負但残額</td>
          <td>{priceData.afterTax.toLocaleString()}</td>
        </tr>
        <tr>
          <td>予定累計</td>
          <td>{priceData.pointUsed.toLocaleString()}</td>
        </tr>
        <tr>
          <td>予定残額</td>
          <td>{priceData.pointAdded.toLocaleString()}</td>
        </tr>
      </tbody>
    </Table>
  );

  // 変更前後の比較表示
  const renderDiscountData = () => (
    <Table>
      <tbody>
        <tr>
          <td>設計額</td>
          <td>{discountData.design.toLocaleString()}</td>
          <td>{(discountData.design * ((100 - discountData.discountRate) / 100)).toLocaleString()}</td>
          <td>{discountData.discount.toLocaleString()}</td>
        </tr>
        <tr>
          <td>税抜額</td>
          <td>{discountData.tax.toLocaleString()}</td>
          <td>{(discountData.tax * ((100 - discountData.discountRate) / 100)).toLocaleString()}</td>
          <td>{(discountData.tax * (discountData.discountRate / 100)).toLocaleString()}</td>
        </tr>
        <tr>
          <td>消費税率</td>
          <td>{discountData.discountRate.toFixed(2)}%</td>
          <td>{discountData.discountRate.toFixed(2)}%</td>
          <td></td>
        </tr>
        <tr>
          <td>消費税額</td>
          <td>{(discountData.tax * (discountData.discountRate / 100)).toFixed(2)}</td>
          <td>{(discountData.tax * (discountData.discountRate / 100)).toFixed(2)}</td>
          <td></td>
        </tr>
      </tbody>
    </Table>
  );

  return (
    <Container>
      {renderReservationData()}
      {renderPriceData()}
      {renderDiscountData()}
      <ButtonContainer>
        <Button>OK</Button>
        <Button>クリア</Button>
        <Button>キャンセル</Button>
      </ButtonContainer>
    </Container>
  );
};

// サンプルデータを用いたコンポーネントの使用例
const SampleConfirmation: React.FC = () => {
  const sampleReservationData: ReservationData = {
    date: '2020/04/11',
    plan: '0001',
    planName: '総係・備用経常費',
    term: '0010',
  };

  const samplePriceData: PriceData = {
    beforeTax: 1237000,
    tax: 95000,
    afterTax: 1142000,
    pointUsed: 1000,
    pointAdded: 1141000,
  };

  const sampleDiscountData: DiscountData = {
    design: 10000,
    tax: 9091,
    discountRate: 10,
    discount: 909,
  };

  return (
    <Confirmation
      reservationData={sampleReservationData}
      priceData={samplePriceData}
      discountData={sampleDiscountData}
    />
  );
};

export default SampleConfirmation;