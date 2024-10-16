// ReservationDetails.tsx
import React from 'react';
import styled from '@emotion/styled';

interface ReservationDetailsProps {
  data: {
    reservationNumber: string;
    detailedBill: string[];
    tax: number;
    total: number;
    paymentDate: string;
    note: string;
  };
}

const ReservationDetails: React.FC<ReservationDetailsProps> = ({ data }) => {
  const {
    reservationNumber,
    detailedBill,
    tax,
    total,
    paymentDate,
    note,
  } = data;

  return (
    <Container>
      <Row>
        <Label>節</Label>
        <Value>{reservationNumber}</Value>
        <Label>予算所属</Label>
        <Value>水運用センター</Value>
      </Row>
      <Row>
        <Label>細節</Label>
        <Value>
          {detailedBill.map((item, index) => (
            <React.Fragment key={index}>
              {item}
              <br />
            </React.Fragment>
          ))}
        </Value>
        <Label>明細</Label>
      </Row>
      <Row>
        <Label>税区分</Label>
        <Value>課税</Value>
      </Row>
      <Row>
        <Label>金額</Label>
        <Value>{total.toLocaleString()}</Value>
      </Row>
      <Row>
        <Label>予算残額</Label>
        <Value>{tax.toLocaleString()}</Value>
      </Row>
      <Row>
        <Label>差引簿摘要</Label>
        <Value>{note}</Value>
      </Row>
    </Container>
  );
};

const Container = styled.div`
  font-family: Arial, sans-serif;
  padding: 20px;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  box-sizing: border-box;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  flex-wrap: wrap;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Label = styled.div`
  font-weight: bold;
  margin-right: 10px;
  flex: 0 0 100px;

  @media (max-width: 600px) {
    margin-bottom: 5px;
  }
`;

const Value = styled.div`
  flex: 1;
`;

// Usage example
const sampleData = {
  reservationNumber: '002010117',
  detailedBill: ['分析測定業務委託', '分析測定業務委託'],
  tax: 30000,
  total: 200824544,
  paymentDate: '',
  note: '所規導入媒介労働の為',
};

const App: React.FC = () => (
  <div>
    <h1>予算使用実績入力明細登録</h1>
    <ReservationDetails data={sampleData} />
  </div>
);

export default App;