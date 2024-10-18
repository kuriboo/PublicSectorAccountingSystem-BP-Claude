import React from 'react';
import styled from 'styled-components';

// 予算範囲を表す型定義
type BudgetRangeProps = {
  fromAmount: number;
  toAmount: number;
};

// 予算範囲コンポーネント
const BudgetRange: React.FC<BudgetRangeProps> = ({ fromAmount, toAmount }) => {
  return (
    <BudgetRangeWrapper>
      <Label>所属</Label>
      <AmountInput type="number" value={fromAmount} readOnly />
      <Separator>～</Separator>
      <AmountInput type="number" value={toAmount} readOnly />
    </BudgetRangeWrapper>
  );
};

// 作業区分を表す型定義
type WorkCategoryProps = {
  date: string;
  segment: string;
  details: string;
  memo: string;
};

// 作業区分コンポーネント 
const WorkCategory: React.FC<WorkCategoryProps> = ({ date, segment, details, memo }) => {
  return (
    <WorkCategoryWrapper>
      <WorkCategoryRow>
        <Label>作業区分</Label>
        <span>{date}</span>
        <span>{segment}</span>
      </WorkCategoryRow>
      <WorkCategoryRow>
        <Label>細節</Label>
        <span>{details}</span>
      </WorkCategoryRow>
      <WorkCategoryRow>
        <Label>メモ</Label>
        <span>{memo}</span>
      </WorkCategoryRow>
    </WorkCategoryWrapper>
  );
};

// 集計対象を表す型定義
type AggregationTargetProps = {
  target: string;
};

// 集計対象コンポーネント
const AggregationTarget: React.FC<AggregationTargetProps> = ({ target }) => {
  return (
    <AggregationTargetWrapper>
      <Label>集計対象</Label>
      <RadioButton type="radio" checked={target === '全体'} readOnly />
      <span>全体</span>
      <RadioButton type="radio" checked={target === 'ブロック'} readOnly />
      <span>ブロック</span>   
      <RadioButton type="radio" checked={target === 'セグメント'} readOnly />
      <span>セグメント</span>
    </AggregationTargetWrapper>
  );
};

// 予算範囲入力のスタイリング
const BudgetRangeWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Label = styled.label`
  margin-right: 10px;
`;

const AmountInput = styled.input`
  width: 100px;
  margin-right: 5px;
  padding: 5px;
`;

const Separator = styled.span`
  margin: 0 5px;
`;

// 作業区分のスタイリング
const WorkCategoryWrapper = styled.div`
  margin-bottom: 20px;
`;

const WorkCategoryRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

// 集計対象のスタイリング
const AggregationTargetWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const RadioButton = styled.input`
  margin-left: 10px;
  margin-right: 5px;
`;

// サンプルデータ
const sampleData = {
  budgetRange: {
    fromAmount: 0,
    toAmount: 9999999,
  },
  workCategory: {
    date: '令和02年09月04日',
    segment: '99999999', 
    details: '細部',
    memo: 'メモ',
  },
  aggregationTarget: '全体',
};

// サンプルデータを使用した表示用コンポーネント
const App: React.FC = () => {
  return (
    <div>
      <h2>予算範囲</h2>
      <BudgetRange 
        fromAmount={sampleData.budgetRange.fromAmount}
        toAmount={sampleData.budgetRange.toAmount}
      />
      
      <h2>作業区分</h2>
      <WorkCategory 
        date={sampleData.workCategory.date}
        segment={sampleData.workCategory.segment}
        details={sampleData.workCategory.details || ''}
        memo={sampleData.workCategory.memo || ''}
      />
      
      <h2>集計対象</h2>
      <AggregationTarget target={sampleData.aggregationTarget} />
    </div>
  );
};

export default App;