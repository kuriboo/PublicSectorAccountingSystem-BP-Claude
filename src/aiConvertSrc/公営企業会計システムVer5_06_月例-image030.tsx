import React from 'react';
import styled from 'styled-components';

// 構成表作成コンポーネントのプロパティ型定義
type KoseiProps = {
  title: string;
  reserveNumber: string;
  ordererName: string;
  completeDate: string;
};

// 構成表作成コンポーネント
const Kosei: React.FC<KoseiProps> = ({
  title,
  reserveNumber,
  ordererName,
  completeDate,
}) => {
  return (
    <KoseiWrapper>
      {/* タイトルと予約番号 */}
      <TitleWrapper>
        <Title>{title}</Title>
        <ReserveNumber>{reserveNumber}</ReserveNumber>
      </TitleWrapper>

      {/* 範囲指定 */}
      <RangeWrapper>
        <RangeLabel>範囲指定</RangeLabel>
        <RangeRadioWrapper>
          <RangeRadio type="radio" id="sinki" name="range" defaultChecked />
          <RangeRadioLabel htmlFor="sinki">新規</RangeRadioLabel>
          <RangeRadio type="radio" id="rikousei" name="range" />
          <RangeRadioLabel htmlFor="rikousei">リ構成</RangeRadioLabel>
        </RangeRadioWrapper>
      </RangeWrapper>

      {/* 作業日付 */}
      <WorkDateWrapper>
        <WorkDateLabel>作業日付</WorkDateLabel>
        <WorkDate>{completeDate}</WorkDate>
      </WorkDateWrapper>
    </KoseiWrapper>
  );
};

// サンプル用のKoseiコンポーネントを表示するコンポーネント
const SampleKosei = () => {
  return (
    <Kosei
      title="費用構成表作成"
      reserveNumber="予算会計担当 ぎょうせい太郎"
      ordererName="平成29年09月04日"
      completeDate="平成29年09月04日"
    />
  );
};

// 全体のラッパー
const KoseiWrapper = styled.div`
  background-color: #f0f0f0;
  padding: 10px;
  width: 300px;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

// タイトルのラッパー
const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const Title = styled.div`
  font-weight: bold;
`;

const ReserveNumber = styled.div`
  font-size: 12px;
`;

// 範囲指定のラッパー
const RangeWrapper = styled.div`
  margin-bottom: 10px;
`;

const RangeLabel = styled.div`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 5px;
`;

const RangeRadioWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const RangeRadio = styled.input`
  margin-right: 5px;
`;

const RangeRadioLabel = styled.label`
  margin-right: 10px;
  font-size: 14px;
`;

// 作業日付のラッパー
const WorkDateWrapper = styled.div`
  margin-bottom: 10px;
`;

const WorkDateLabel = styled.div`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 5px;
`;

const WorkDate = styled.div`
  font-size: 14px;
`;

export default SampleKosei;