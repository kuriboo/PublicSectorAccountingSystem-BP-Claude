import React from 'react';
import styled from '@emotion/styled';

interface ReservationDetailProps {
  reservation: {
    date: string;
    time: string;
    department: string;
    doctor: string;
  };
  reservationStatus: {
    previousReservation: number;
    previousVisit: number;
    noShow: number;
    canceledReservation: number;
    futureReservation: number;
  };
  paymentDetail: {
    paymentAmount: number;
    deductible: number;
    uncollected: number;
  };
}

const ReservationDetail: React.FC<ReservationDetailProps> = ({ reservation, reservationStatus, paymentDetail }) => {
  // 予約情報の表示
  const renderReservationInfo = () => (
    <InfoSection>
      <InfoLabel>予算科目</InfoLabel>
      <InfoValue>{reservation.date}</InfoValue>
      <InfoLabel>予算細目</InfoLabel>
      <InfoValue>{reservation.time}</InfoValue>
      <InfoLabel>予算明細</InfoLabel>
      <InfoValue>{reservation.department}</InfoValue>
      <InfoLabel>科目検索</InfoLabel>
      <InfoValue>{reservation.doctor}</InfoValue>
    </InfoSection>
  );

  // 予算残情報の表示
  const renderReservationStatus = () => (
    <StatusSection>
      <StatusItem>
        <StatusLabel>前年度繰越</StatusLabel>
        <StatusValue>{reservationStatus.previousReservation.toLocaleString()}</StatusValue>
      </StatusItem>
      <StatusItem>
        <StatusLabel>前年度予算</StatusLabel>
        <StatusValue>{reservationStatus.previousVisit.toLocaleString()}</StatusValue>
      </StatusItem>
      <StatusItem>
        <StatusLabel>負担累計</StatusLabel>
        <StatusValue>{reservationStatus.noShow.toLocaleString()}</StatusValue>
      </StatusItem>
      <StatusItem>
        <StatusLabel>負担残額</StatusLabel>
        <StatusValue>{reservationStatus.canceledReservation.toLocaleString()}</StatusValue>
      </StatusItem>
      <StatusItem>
        <StatusLabel>予定累計</StatusLabel>
        <StatusValue>{reservationStatus.futureReservation.toLocaleString()}</StatusValue>
      </StatusItem>
    </StatusSection>
  );

  // 予定額の表示と計算
  const renderPaymentDetail = () => {
    const calculateUncollected = () => {
      return paymentDetail.paymentAmount - paymentDetail.deductible;
    };

    return (
      <PaymentSection>
        <PaymentItem>
          <PaymentLabel>予定額</PaymentLabel>
          <PaymentValue>{paymentDetail.paymentAmount.toLocaleString()}</PaymentValue>
        </PaymentItem>
        <PaymentItem>
          <PaymentLabel>税抜額</PaymentLabel>
          <PaymentValue>{paymentDetail.deductible.toLocaleString()}</PaymentValue>
        </PaymentItem>
        <PaymentItem>
          <PaymentLabel>消費税率</PaymentLabel>
          <PaymentValue>
            <input type="number" defaultValue={8} min={0} max={100} />%
          </PaymentValue>
        </PaymentItem>
        <PaymentItem>
          <PaymentLabel>消費税額</PaymentLabel>
          <PaymentValue>{calculateUncollected().toLocaleString()}</PaymentValue>
        </PaymentItem>
      </PaymentSection>
    );
  };

  return (
    <Container>
      {renderReservationInfo()}
      {renderReservationStatus()}
      {renderPaymentDetail()}
      <ButtonSection>
        <ConfirmButton>OK</ConfirmButton>
        <CancelButton>クリア</CancelButton>
        <CloseButton>キャンセル</CloseButton>
      </ButtonSection>
    </Container>
  );
};

// サンプルデータを用いたコンポーネントの使用例
const SampleUsage: React.FC = () => {
  const sampleData = {
    reservation: {
      date: '00401/0828',
      time: '0008',
      department: '前所管明設事業',
      doctor: '前水管明設工事',
    },
    reservationStatus: {
      previousReservation: 229190000,
      previousVisit: 0,
      noShow: 228190000,
      canceledReservation: 1100000, 
      futureReservation: 228090000,
    },
    paymentDetail: {
      paymentAmount: 1100000,
      deductible: 1000000,
      uncollected: 100000,
    },
  };

  return <ReservationDetail {...sampleData} />;
};

// スタイリング
const Container = styled.div`
  font-family: Arial, sans-serif;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const InfoSection = styled.div`
  margin-bottom: 20px;
`;

const InfoLabel = styled.div`
  font-weight: bold;
`;

const InfoValue = styled.div`
  margin-bottom: 10px;
`;

const StatusSection = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const StatusItem = styled.div`
  text-align: center;
`;

const StatusLabel = styled.div`
  font-size: 14px;
  color: #888;
`;

const StatusValue = styled.div`
  font-size: 18px;
  font-weight: bold;
`;

const PaymentSection = styled.div`
  margin-bottom: 20px;
`;

const PaymentItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const PaymentLabel = styled.div`
  font-weight: bold;
`;

const PaymentValue = styled.div`
  font-size: 16px;
`;

const ButtonSection = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Button = styled.button`
  padding: 10px 20px;
  margin-left: 10px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const ConfirmButton = styled(Button)`
  background-color: #007bff;
  color: #fff;
`;

const CancelButton = styled(Button)`
  background-color: #dc3545;
  color: #fff;
`;

const CloseButton = styled(Button)`
  background-color: #6c757d;
  color: #fff;
`;

export default SampleUsage;