import React from 'react';
import styled from 'styled-components';

// 予算差引簿の型定義
type BudgetLedgerProps = {
  level: 'national' | 'prefectural' | 'municipal'; // 団体レベル
  startDate: string; // 予算開始日
  endDate: string; // 予算終了日
  collectableAmount: number; // 予算科目金額
  note: string; // 集計対象
  isFrontLoaded: boolean; // 前月繰越行のみで予算行する
  isInvestmentBudget: boolean; // 投資的予算も予算行する
  isSpecialBudget: boolean; // 特別会計も予算行する
};

// スタイル定義
const BudgetLedgerWrapper = styled.div`
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 5px;
`;

const LevelSelector = styled.div`
  margin-bottom: 10px;
`;

const DateRangeInput = styled.div`
  margin-bottom: 10px;
`;

const AmountInput = styled.div`
  margin-bottom: 10px;
`;

const NoteInput = styled.div`
  margin-bottom: 10px;
`;

const CheckboxGroup = styled.div`
  margin-bottom: 10px;
`;

const Button = styled.button`
  padding: 5px 10px;
  margin-right: 10px;
`;

// 予算差引簿コンポーネント
const BudgetLedger: React.FC<BudgetLedgerProps> = ({
  level = 'national',
  startDate = '',
  endDate = '',
  collectableAmount = 0,
  note = '',
  isFrontLoaded = false,
  isInvestmentBudget = false,
  isSpecialBudget = false,
}) => {
  return (
    <BudgetLedgerWrapper>
      <h2>予算科目予算差引簿(所属者・予定額有)</h2>
      <LevelSelector>
        出力レベル
        <label>
          <input type="radio" name="level" value="national" checked={level === 'national'} /> 全国
        </label>
        <label>
          <input type="radio" name="level" value="prefectural" checked={level === 'prefectural'} /> 都道府県
        </label>
        <label>
          <input type="radio" name="level" value="municipal" checked={level === 'municipal'} /> 市区町村
        </label>
      </LevelSelector>
      <DateRangeInput>
        範囲指定
        <input type="date" value={startDate} /> ～ <input type="date" value={endDate} />
      </DateRangeInput>
      <AmountInput>
        予算料目 <input type="number" value={collectableAmount} />
      </AmountInput>
      <NoteInput>
        集計対象
        <label>
          <input type="radio" name="note" value="全体" checked={note === '全体'} /> 全体
        </label>
        <label>
          <input type="radio" name="note" value="ブロック" checked={note === 'ブロック'} /> ブロック
        </label>
        <label>
          <input type="radio" name="note" value="セグメント" checked={note === 'セグメント'} /> セグメント
        </label>
      </NoteInput>
      <CheckboxGroup>
        <label>
          <input type="checkbox" checked={isFrontLoaded} /> 前月繰越行のみで予算行する
        </label>
        <label>
          <input type="checkbox" checked={isInvestmentBudget} /> 投資的予算も予算行する 
        </label>
        <label>
          <input type="checkbox" checked={isSpecialBudget} /> 特別会計も予算行する
        </label>
      </CheckboxGroup>
      <div>
        <Button>集計</Button>
        <Button>印刷</Button>
        <Button>クリア</Button>
        <Button>終了</Button>
      </div>
    </BudgetLedgerWrapper>
  );
};

// サンプルデータを用いた使用例
const SampleUsage: React.FC = () => {
  return (
    <BudgetLedger
      level="prefectural"
      startDate="2023-04-01"
      endDate="2023-09-30"
      collectableAmount={1000000}
      note="ブロック"
      isFrontLoaded={true}
      isInvestmentBudget={false}
      isSpecialBudget={true}
    />
  );
};

export default SampleUsage;