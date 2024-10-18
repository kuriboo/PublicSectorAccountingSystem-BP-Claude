import React from 'react';
import styled from '@emotion/styled';

// 予約情報の型定義
type ReservationInfo = {
  store: string;
  lensType: string;
  reservationDate: string;
  expireDate: string;
  orderNumber: string;
};

// コンポーネントのProps型定義
type Props = {
  reservationInfo: ReservationInfo;
};

// スタイルコンポーネント定義
const Container = styled.div`
  width: 100%;
  padding: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #fff;

  @media (max-width: 600px) {
    padding: 8px;
  }
`;

const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 8px;

  @media (max-width: 600px) {
    font-size: 16px;
  }  
`;

const InfoRow = styled.div`
  display: flex;
  margin-bottom: 8px;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const InfoLabel = styled.span`
  width: 120px;
  font-weight: bold;

  @media (max-width: 600px) {
    width: 100%;
    margin-bottom: 4px;
  }
`;

const InfoValue = styled.span`
  flex: 1;
`;

// 予約詳細コンポーネント
const ReservationDetails: React.FC<Props> = ({ reservationInfo }) => {
  // 予約情報が空の場合は何も表示しない
  if (!reservationInfo) return null;

  const { store, lensType, reservationDate, expireDate, orderNumber } = reservationInfo;

  return (
    <Container>
      <Title>予約詳細</Title>
      <InfoRow>
        <InfoLabel>店舗:</InfoLabel>
        <InfoValue>{store || '-'}</InfoValue>
      </InfoRow>
      <InfoRow>  
        <InfoLabel>レンズ:</InfoLabel>
        <InfoValue>{lensType || '-'}</InfoValue>
      </InfoRow>
      <InfoRow>
        <InfoLabel>予約日時:</InfoLabel> 
        <InfoValue>{reservationDate || '-'}</InfoValue>
      </InfoRow>
      <InfoRow>
        <InfoLabel>有効期限:</InfoLabel>
        <InfoValue>{expireDate || '-'}</InfoValue> 
      </InfoRow>
      <InfoRow>
        <InfoLabel>予約番号:</InfoLabel>
        <InfoValue>{orderNumber || '-'}</InfoValue>
      </InfoRow>
    </Container>
  );
};

export default ReservationDetails;

// 使用例
const sampleData: ReservationInfo = {
  store: '横浜駅前店',
  lensType: '1週間レンズ',  
  reservationDate: '令和05年07月24日 15時35分',
  expireDate: '令和05年07月24日',
  orderNumber: '全体',
};

const App: React.FC = () => {
  return (
    <div>
      <h1>予約詳細画面</h1>
      <ReservationDetails reservationInfo={sampleData} />
    </div>
  );  
};