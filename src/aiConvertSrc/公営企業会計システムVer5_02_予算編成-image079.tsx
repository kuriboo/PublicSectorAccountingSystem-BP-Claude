import React from 'react';
import styled from 'styled-components';

// 型定義
type ReservationSummaryProps = {
  date: string;
  time: string;
  district: string;
  venue: string;
  seatCount: number;
  notes: string;
  companyName: string;
  address: string;
};

// スタイル定義
const Container = styled.div`
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 10px;
  max-width: 500px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 24px;
  text-align: center;
  margin-bottom: 20px;
`;

const SectionTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 10px;
`;

const Info = styled.p`
  margin-bottom: 5px;
`;

// コンポーネント定義
const ReservationSummary: React.FC<ReservationSummaryProps> = ({
  date,
  time,
  district,
  venue,
  seatCount,
  notes,
  companyName,
  address,
}) => {
  return (
    <Container>
      <Title>予算収支区分別総合計・課税売上割合算定</Title>
      <SectionTitle>範囲指定</SectionTitle>
      <Info>会計年度: {date}</Info>
      <Info>予算種別区分: {district}</Info>
      <Info>最終査定値: {venue} {seatCount}回</Info>
      <SectionTitle>処理優先</SectionTitle>
      <Info>{notes}</Info>
      <SectionTitle>仕入控除額の計算方法</SectionTitle>
      <Info>全額控除: {companyName}</Info>
    </Container>
  );
};

// サンプルデータを用いた使用例
const SampleUsage: React.FC = () => {
  return (
    <ReservationSummary
      date="令和03年度"
      time="当初予算"
      district="査定額"
      venue="1"
      seatCount={1}
      notes="・収入区分別総合計を算出します。・課税売上割合を算定します。・全額控除が適用可能か判定します。"
      companyName="未判定"
      address="未判定"
    />
  );
};

export default SampleUsage;