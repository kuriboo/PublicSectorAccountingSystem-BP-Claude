import React from 'react';
import styled from 'styled-components';

// 月次計算高試算表のプロパティ型定義
type MonthlyCalcProps = {
  reportingDate: string;
  isContractWorker: boolean;
  segment: 'all' | 'block' | 'segment';
};

// 月次計算高試算表コンポーネント
const MonthlyCalc: React.FC<MonthlyCalcProps> = ({ reportingDate, isContractWorker, segment }) => {
  return (
    <Container>
      <Title>月次合計残高試算表</Title>
      <DateRange>
        当月集計日付 {reportingDate}
      </DateRange>
      <WorkerType>
        決算仕訳 <input type="radio" checked={isContractWorker} readOnly /> 含む <input type="radio" checked={!isContractWorker} readOnly /> 含まない
      </WorkerType>
      <Segment>
        集計対象 <input type="radio" checked={segment === 'all'} readOnly /> 全体 <input type="radio" checked={segment === 'block'} readOnly /> ブロック <input type="radio" checked={segment === 'segment'} readOnly /> セグメント
      </Segment>
    </Container>
  );
};

// スタイリング
const Container = styled.div`
  font-family: Arial, sans-serif;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

const DateRange = styled.div`
  margin-bottom: 10px;
`;

const WorkerType = styled.div`
  margin-bottom: 10px;
`;

const Segment = styled.div`
  margin-bottom: 10px;
`;

// サンプルデータを用いた使用例
const App: React.FC = () => {
  return (
    <div>
      <MonthlyCalc 
        reportingDate="令和04年04月01日 〜 令和05年03月31日"
        isContractWorker={false}
        segment="block"
      />
    </div>
  );
};

export default App;