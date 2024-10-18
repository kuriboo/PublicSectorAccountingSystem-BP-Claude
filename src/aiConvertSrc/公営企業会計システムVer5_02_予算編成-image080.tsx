import React from 'react';
import styled from '@emotion/styled';

interface ReservationDetailProps {
  reservationDate: string;
  reservationNumber: string;
  checkInDate: string;
  stayNumber: number;
  roomCount: number;
  roomType: string;
  guestName: string;
  guestStatus: string;
  reservationStatus: string;
}

const Container = styled.div`
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 8px;
`;

const Title = styled.h2`
  font-size: 20px;
  margin-bottom: 10px;
`;

const SectionTitle = styled.h3`
  font-size: 16px;
  margin-bottom: 5px;
`;

const InfoItem = styled.div`
  margin-bottom: 5px;
`;

const ReservationDetail: React.FC<ReservationDetailProps> = ({
  reservationDate,
  reservationNumber,
  checkInDate,
  stayNumber,
  roomCount,
  roomType,
  guestName,
  guestStatus,
  reservationStatus,
}) => {
  return (
    <Container>
      <Title>予約調整前課税仕入等税額算出</Title>
      <SectionTitle>範囲指定</SectionTitle>
      <InfoItem>会計年度: {reservationDate || '未設定'}</InfoItem>
      <InfoItem>予算種成区分: {reservationNumber || '未設定'}</InfoItem>
      <InfoItem>
        最終査定値: {roomCount ? `${roomCount}回` : '未設定'}
      </InfoItem>
      <SectionTitle>計算方法</SectionTitle>
      <InfoItem>税額計算(仕入): {roomType || '未設定'}</InfoItem>
      <InfoItem>仕入控除税額計算: {guestName || '未設定'}</InfoItem>
    </Container>
  );
};

// サンプルデータを使用した表示用コンポーネント
const SampleReservationDetail: React.FC = () => {
  const sampleData: ReservationDetailProps = {
    reservationDate: '令和03年度',
    reservationNumber: '当初予算',
    checkInDate: '',
    stayNumber: 0,
    roomCount: 1,
    roomType: '割戻計算',
    guestName: '個別対応方式',
    guestStatus: '',
    reservationStatus: '',
  };

  return <ReservationDetail {...sampleData} />;
};

export default SampleReservationDetail;