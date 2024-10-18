import React from 'react';
import styled from 'styled-components';

// 決算統計分析データ作成画面のプロパティの型定義
interface AnnualReportAnalysisProps {
  title: string;
  reservationDate: string;
  reservationPeriod: string;
  fiscalYear: string;
  message: string;
}

// 決算統計分析データ作成画面のコンポーネント
const AnnualReportAnalysis: React.FC<AnnualReportAnalysisProps> = ({
  title,
  reservationDate,
  reservationPeriod,
  fiscalYear,
  message,
}) => {
  return (
    <Container>
      <Title>{title}</Title>
      <ReservationInfo>
        <Row>
          <Label>予算管理</Label>
          <Value>{reservationDate}</Value>
        </Row>
        <Row>
          <Label>予算科目登録権限者</Label>
          <Value>{reservationPeriod}</Value>
        </Row>
        <Row>
          <Label>令和</Label>
          <Value>{fiscalYear}年度</Value>
        </Row>
      </ReservationInfo>
      <Message>{message}</Message>
      <ButtonContainer>
        <Button>OK</Button>
        <Button>クリア</Button>
        <Button>終了</Button>
      </ButtonContainer>
    </Container>
  );
};

// スタイリング
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f0f0f0;
  font-family: Arial, sans-serif;
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

const ReservationInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
  margin-bottom: 20px;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const Label = styled.span`
  font-weight: bold;
`;

const Value = styled.span``;

const Message = styled.p`
  text-align: center;
  margin-bottom: 20px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  padding: 10px 20px;
  margin: 0 10px;
  font-size: 16px;
  cursor: pointer;
`;

// サンプルデータを使用した決算統計分析データ作成画面の表示例
const SampleAnnualReportAnalysis: React.FC = () => {
  const sampleData: AnnualReportAnalysisProps = {
    title: '決算統計分析データ作成',
    reservationDate: '令和3年11月14日',
    reservationPeriod: '全権限',
    fiscalYear: '03',
    message: `決算統計千円丸め処理をした料日明細金額を振替・性質別に集計します。
料目別振替性質マスタの構成比率をもとに按分計算します。
何回でも実行できますが、決算統計分析調整入力で入力した調整額はクリアされます。`,
  };

  return <AnnualReportAnalysis {...sampleData} />;
};

export default SampleAnnualReportAnalysis;