import React from 'react';
import styled from '@emotion/styled';

type ReservationData = {
  date: string;
  roomNumber: string;
  roomType: string;
  accommodation: string;
  checkIn: string;
  checkOut: string;
  numberOfNights: string;
};

type ReservationAmounts = {
  roomCharge: number;
  personalCharge: number;
  otherCharge: number;
  advancePayment: number;
  remainingPayment: number;
};

type TaxAmounts = {
  taxAmount: number;
  taxRate: number;
  taxableAmount: number;
};

type DiscountAmounts = {
  discountAmount: number;
  discountRate: number;
  discountableAmount: number;
};

type ReservationDetailsProps = {
  reservationData: ReservationData;
  reservationAmounts: ReservationAmounts;
  taxAmounts: TaxAmounts;
  discountAmounts: DiscountAmounts;
};

const ReservationDetails: React.FC<ReservationDetailsProps> = ({
  reservationData,
  reservationAmounts,
  taxAmounts,
  discountAmounts,
}) => {
  return (
    <Container>
      <ColumnContainer>
        <Column>
          <ColumnTitle>予約科目</ColumnTitle>
          <ColumnItem>
            <ColumnLabel>予約節</ColumnLabel>
            <ColumnValue>{reservationData.date}</ColumnValue>
          </ColumnItem>
          <ColumnItem>
            <ColumnLabel>予約部屋</ColumnLabel>
            <ColumnValue>{reservationData.roomNumber}</ColumnValue>
          </ColumnItem>
          <ColumnItem>
            <ColumnLabel>予約細目</ColumnLabel>
            <ColumnValue>{reservationData.roomType}</ColumnValue>
          </ColumnItem>
          <ColumnItem>
            <ColumnLabel>予約明細</ColumnLabel>
            <ColumnValue>{reservationData.accommodation}</ColumnValue>
          </ColumnItem>
        </Column>
        
        <Column>
          <ColumnTitle>予算残情報</ColumnTitle>
          <ColumnItem>
            <ColumnLabel>節</ColumnLabel>
            <ColumnValue>{reservationData.checkIn}</ColumnValue>
          </ColumnItem>
          <ColumnItem>
            <ColumnLabel>負担累計</ColumnLabel>
            <ColumnValue>{formatCurrency(reservationAmounts.personalCharge)}</ColumnValue>
          </ColumnItem>
          <ColumnItem>
            <ColumnLabel>負担残額</ColumnLabel>
            <ColumnValue>{formatCurrency(reservationAmounts.remainingPayment)}</ColumnValue>
          </ColumnItem>
          <ColumnItem>
            <ColumnLabel>予定累計</ColumnLabel>
            <ColumnValue>{formatCurrency(reservationAmounts.roomCharge)}</ColumnValue>
          </ColumnItem>
          <ColumnItem>
            <ColumnLabel>予定残額</ColumnLabel>
            <ColumnValue>{formatCurrency(reservationAmounts.advancePayment)}</ColumnValue>
          </ColumnItem>
        </Column>
      </ColumnContainer>

      <CalculationContainer>
        <CalculationGroup>
          <CalculationTitle>変更前</CalculationTitle>
          <CalculationItem>
            <CalculationLabel>設計額</CalculationLabel>
            <CalculationValue>{formatCurrency(1400000)}</CalculationValue>
          </CalculationItem>
          <CalculationItem>
            <CalculationLabel>税抜額</CalculationLabel>
            <CalculationValue>{formatCurrency(1000000)}</CalculationValue>
          </CalculationItem>
        </CalculationGroup>

        <CalculationGroup>
          <CalculationTitle>変更後</CalculationTitle>
          <CalculationItem>
            <CalculationLabel>
              {taxAmounts.taxRate}%
            </CalculationLabel>
            <CalculationValue>{formatCurrency(1650000)}</CalculationValue>
          </CalculationItem>
          <CalculationItem>
            <CalculationLabel>
              {discountAmounts.discountRate}%  
            </CalculationLabel>
            <CalculationValue>{formatCurrency(150000)}</CalculationValue>
          </CalculationItem>
        </CalculationGroup>

        <CalculationGroup>
          <CalculationTitle>差額</CalculationTitle>
          <CalculationValue>{formatCurrency(550000)}</CalculationValue>
          <CalculationValue>{formatCurrency(50000)}</CalculationValue>
        </CalculationGroup>
      </CalculationContainer>
      
      <ButtonContainer>
        <Button>OK</Button>
        <Button>クリア</Button>  
        <Button>キャンセル</Button>
      </ButtonContainer>
    </Container>
  );
};

// Styles
const Container = styled.div`
  font-family: sans-serif;
`;

const ColumnContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const Column = styled.div`
  flex: 1;
`;

const ColumnTitle = styled.div`
  font-weight: bold;
  margin-bottom: 10px;
`;

const ColumnItem = styled.div`
  display: flex;
  margin-bottom: 5px;
`;

const ColumnLabel = styled.div`
  width: 100px;
`;

const ColumnValue = styled.div`
  flex: 1;
`;

const CalculationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const CalculationGroup = styled.div`
  flex: 1;
  text-align: right;
`;

const CalculationTitle = styled.div`
  font-weight: bold;
  margin-bottom: 10px;
`;

const CalculationItem = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 5px;
`;

const CalculationLabel = styled.div`
  width: 80px;
`;

const CalculationValue = styled.div`
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Button = styled.button`
  margin-left: 10px;
`;

// Utility Functions
const formatCurrency = (value: number) => {
  return value.toLocaleString();
};

// Usage Example
const App: React.FC = () => {
  const reservationDataSample: ReservationData = {
    date: '004010926',
    roomNumber: '0009',
    roomType: '0010',
    accommodation: '0010',
    checkIn: '229,190,000',
    checkOut: '',
    numberOfNights: '',
  };
  
  const reservationAmountsSample: ReservationAmounts = {
    roomCharge: 229190000,
    personalCharge: 2200000,  
    otherCharge: 226980000,
    advancePayment: 550000,
    remainingPayment: 226440000,
  };

  const taxAmountsSample: TaxAmounts = {
    taxAmount: 1650000,
    taxRate: 10,
    taxableAmount: 1500000,
  };

  const discountAmountsSample: DiscountAmounts = {
    discountAmount: 150000,
    discountRate: 10,   
    discountableAmount: 1500000,
  };

  return (
    <ReservationDetails
      reservationData={reservationDataSample}
      reservationAmounts={reservationAmountsSample}
      taxAmounts={taxAmountsSample}
      discountAmounts={discountAmountsSample}
    />
  );
};

export default App;