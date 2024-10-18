import React from 'react';
import styled from 'styled-components';

// 債権者宛振込通知書の型定義
interface DebtNoticeProps {
  fromDate: string;
  toDate: string;
  fromAmount: string;
  toAmount: string;
}

// 債権者宛振込通知書コンポーネント
const DebtNotice: React.FC<DebtNoticeProps> = ({
  fromDate,
  toDate,
  fromAmount,
  toAmount,
}) => {
  return (
    <Container>
      <Title>債権者宛振込通知書(メールシーラー)</Title>
      <DateRange>
        支払年月日 平成29年6月17日 ~ 平成29年6月17日
      </DateRange>
      <AmountRange>
        <Label>相手先</Label>
        <Amount>{fromAmount || '00000000000'}</Amount>
        <Label>~</Label>
        <Label>相手先</Label>
        <Amount>{toAmount || '99999999999'}</Amount>
      </AmountRange>
    </Container>
  );
};

// スタイリング
const Container = styled.div`
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  padding: 16px;
  width: 400px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 18px;
  margin-bottom: 8px;
`;

const DateRange = styled.p`
  font-size: 14px;
`;

const AmountRange = styled.div`
  display: flex;
  align-items: center;
  margin-top: 16px;
`;

const Label = styled.span`
  margin-right: 8px;
`;

const Amount = styled.span`
  font-weight: bold;
`;

// サンプルデータを用いた使用例
const App: React.FC = () => {
  return (
    <div>
      <h1>債権者宛振込通知書</h1>
      <DebtNotice
        fromDate="平成29年6月17日"
        toDate="平成29年6月17日"
        fromAmount="12345678901"
        toAmount="98765432109"
      />
    </div>
  );
};

export default App;