import React from 'react';
import styled from 'styled-components';

// 税区分別総合計・課税売上割合算定の型定義
interface TaxSummaryProps {
  fromDate: string; // 課税期間の開始日
  toDate: string; // 課税期間の終了日
  processingNotes: string; // 処理概要
  calculationNotes: string; // 仕入控除の計算方法
}

// スタイル定義
const Container = styled.div`
  background-color: #f0f0f0;
  padding: 20px;
  width: 100%;
  box-sizing: border-box;
  
  @media (max-width: 600px) {
    padding: 10px;
  }
`;

const Title = styled.h2`
  font-size: 18px;
  margin-bottom: 10px;
`;

const DateRange = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.span`
  display: inline-block;
  min-width: 80px;
  margin-right: 10px;
`;

const TextArea = styled.div`
  margin-bottom: 20px;
  white-space: pre-wrap;
`;

const ButtonContainer = styled.div`
  text-align: center;
`;

const Button = styled.button`
  padding: 5px 20px;
  margin: 0 5px;
`;

// 税区分別総合計・課税売上割合算定コンポーネント
const TaxSummary: React.FC<TaxSummaryProps> = ({ 
  fromDate,
  toDate,
  processingNotes,
  calculationNotes
}) => {
  return (
    <Container>
      <Title>税区分別総合計・課税売上割合算定</Title>
      <DateRange>
        <Label>課税期間:</Label>
        {fromDate} 〜 {toDate}
      </DateRange>
      <TextArea>
        <Label>処理概要:</Label>
        {processingNotes}
      </TextArea>
      <TextArea>  
        <Label>仕入控除の計算方法:</Label>
        {calculationNotes}
      </TextArea>
      <ButtonContainer>
        <Button>全額控除</Button>
        <Button>未判定</Button>
      </ButtonContainer>
    </Container>
  );
}

// サンプルデータを用いた使用例
const TaxSummaryExample: React.FC = () => {
  const taxSummaryData = {
    fromDate: '平成31年04月01日',
    toDate: '令和02年03月31日', 
    processingNotes: '・収支区分別総合計を算出します。\n・課税売上割合を算定します。\n・全額控除が適用可能か判定します。',
    calculationNotes: '全額控除'
  };

  return <TaxSummary {...taxSummaryData} />;
}

export default TaxSummaryExample;