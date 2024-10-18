import React from 'react';
import styled from '@emotion/styled';

type ReservationData = {
  date: string;
  adultNum: number;
  childNum: number;
  infantNum: number;
};

type TaxData = {
  roomCharge: number;
  foodAndDrink: number;
  otherCharge: number;
  serviceTax: number;
  consumptionTax: number;
};

type PaymentData = {
  deposit: number;
  payment: number;
  pointUsage: number;
  pointBalance: number;
  note: string;
};

type ReservationDetailsProps = {
  reservationData: ReservationData;
  taxData: TaxData;
  paymentData: PaymentData;
};

const ReservationDetails: React.FC<ReservationDetailsProps> = ({ 
  reservationData,
  taxData,
  paymentData,
}) => {
  return (
    <Container>
      <SectionWrapper>
        <SectionTitle>予約科目</SectionTitle>
        <DataWrapper>
          <DataLabel>予約節</DataLabel>
          <DataValue>{reservationData.date}</DataValue>
        </DataWrapper>
        <DataWrapper>
          <DataLabel>予約細節</DataLabel>
          <DataValue>大人{reservationData.adultNum}人 / 小人{reservationData.childNum}人 / 幼児{reservationData.infantNum}人</DataValue>
        </DataWrapper>
        <DataWrapper>
          <DataLabel>予算範囲</DataLabel>
          <DataValue>0 ~ 0</DataValue>
        </DataWrapper>
        <Button>科目検索</Button>
      </SectionWrapper>

      <SectionWrapper>
        <SectionTitle>予算疎明表</SectionTitle>
        <DataWrapper>
          <DataLabel>所属節</DataLabel>
          <DataValue>{taxData.roomCharge.toLocaleString()}</DataValue>
        </DataWrapper>
        <DataWrapper>
          <DataLabel>予算規則</DataLabel>
          <DataValue>{taxData.foodAndDrink.toLocaleString()}</DataValue>
        </DataWrapper>
        <DataWrapper>
          <DataLabel>負担累計</DataLabel>
          <DataValue>{taxData.otherCharge.toLocaleString()}</DataValue>
        </DataWrapper>
        <DataWrapper>
          <DataLabel>負担残額</DataLabel>
          <DataValue>{taxData.serviceTax.toLocaleString()}</DataValue>
        </DataWrapper>
        <DataWrapper>
          <DataLabel>予定累計</DataLabel>
          <DataValue>0</DataValue>
        </DataWrapper>
        <DataWrapper>
          <DataLabel>予定残額</DataLabel>
          <DataValue>{taxData.consumptionTax.toLocaleString()}</DataValue>
        </DataWrapper>
      </SectionWrapper>

      <SectionWrapper>
        <DataWrapper>
          <DataLabel>負担額</DataLabel>
          <DataValue>{paymentData.deposit.toLocaleString()}</DataValue>
        </DataWrapper>
        <DataWrapper>
          <DataLabel>税抜額</DataLabel>
          <DataValue>{paymentData.payment.toLocaleString()}</DataValue>
        </DataWrapper>
        <DataWrapper>
          <DataLabel>消費税率</DataLabel>
          <TaxRateWrapper>
            <TaxRateInput type="number" defaultValue={8} />%
          </TaxRateWrapper>
          <DataLabel>消費税額</DataLabel>
          <DataValue>{paymentData.pointUsage.toLocaleString()}</DataValue>
        </DataWrapper>
        <NoteTextarea placeholder="摘要" value={paymentData.note} readOnly />
      </SectionWrapper>

      <ButtonWrapper>
        <Button>OK</Button>
        <Button>クリア</Button>
        <CancelButton>キャンセル</CancelButton>
      </ButtonWrapper>
    </Container>
  );
};

// Sample data for testing
const sampleReservationData: ReservationData = {
  date: '2020年1月1日',
  adultNum: 2, 
  childNum: 1,
  infantNum: 1,
};

const sampleTaxData: TaxData = {
  roomCharge: 34200,
  foodAndDrink: 32000, 
  otherCharge: 2200,
  serviceTax: 0,
  consumptionTax: 2200,
};

const samplePaymentData: PaymentData = {
  deposit: 2000,
  payment: 1852,
  pointUsage: 148,
  pointBalance: 0,
  note: '',
};

// Usage example
const App: React.FC = () => {
  return (
    <ReservationDetails
      reservationData={sampleReservationData}
      taxData={sampleTaxData}  
      paymentData={samplePaymentData}
    />
  );
}

// Styled components
const Container = styled.div`
  font-family: Arial, sans-serif;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f0f0f0;
`;

const SectionWrapper = styled.div`
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #ccc;
`;

const SectionTitle = styled.h3`
  margin: 0 0 10px;
`;

const DataWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
`;

const DataLabel = styled.span`
  width: 120px;
  font-weight: bold;
`;

const DataValue = styled.span`
  flex: 1;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 5px 10px;
  margin-right: 10px;
`;

const CancelButton = styled(Button)`
  background-color: #ff0000;
  color: #fff;
`;

const TaxRateWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;
`;

const TaxRateInput = styled.input`
  width: 40px;
  margin-right: 5px;
`;

const NoteTextarea = styled.textarea`
  width: 100%;
`;

export default App;