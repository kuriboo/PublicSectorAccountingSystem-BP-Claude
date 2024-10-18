import React from 'react';
import styled from '@emotion/styled';

// 特定収入割合算定コンポーネントの型定義
interface SpecialIncomeRatioCalculationProps {
  dueDate: string; // 期限指定
  taxRate: string; // 税率指定
}

// 特定収入割合算定コンポーネント
const SpecialIncomeRatioCalculation: React.FC<SpecialIncomeRatioCalculationProps> = ({ dueDate, taxRate }) => {
  return (
    <Container>
      <Title>特定収入割合算定</Title>
      <DateInfo>
        <Label>期限指定</Label>
        <Value>{dueDate}</Value>
      </DateInfo>
      <TaxInfo>
        <Label>割合算定結果</Label>
        <Value>特定収入による仕入控除税額の調整要否: {taxRate}</Value>
        <Value>特定収入割合: {taxRate}</Value>
      </TaxInfo>
    </Container>
  );
};

// スタイリング用のコンポーネント
const Container = styled.div`
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 5px;
  width: 400px;
  margin: 0 auto;

  @media (max-width: 480px) {
    width: 100%;
  }
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;

const DateInfo = styled.div`
  margin-bottom: 10px;
`;

const TaxInfo = styled.div``;

const Label = styled.span`
  font-weight: bold;
`;

const Value = styled.p`
  margin: 5px 0;
`;

// 使用例
const App: React.FC = () => {
  return (
    <div>
      <SpecialIncomeRatioCalculation dueDate="令和02年01月23日" taxRate="未実施" />
    </div>
  );
};

export default App;