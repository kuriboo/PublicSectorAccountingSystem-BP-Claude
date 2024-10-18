import React from 'react';
import styled from '@emotion/styled';

// 予算計算書の検索条件を表すプロパティ
interface SearchConditionProps {
  fromDate?: string; // 検索開始日付
  toDate?: string; // 検索終了日付
  amountFrom?: number; // 予算金額の下限
  amountTo?: number; // 予算金額の上限
  taxRate?: number; // 税率
  blockMethod?: '全体' | 'ブロック' | 'セグメント'; // 集計対象
  blockValue?: number; // 集計対象の値
  applyLongTermContract?: boolean; // 長期継続契約減額入力を登録した伝票も出力する
  applyBreakdownFlag1?: boolean; // 内訳1の分割伝票IDのみの伝票を出力する
  applyBreakdownFlag2?: boolean; // 内訳請求書発行予定案件IDのみの伝票を出力する
  applyBreakdownPercentage?: number; // 内訳請求書発行予定案件以外の伝票を出力する　按分割合
}

// 検索条件入力欄のスタイル
const SearchCondition = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 16px;
  background-color: #f0f0f0;

  @media (min-width: 600px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

// 日付入力欄のスタイル
const DateInput = styled.input`
  padding: 4px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 120px;
`;

// 金額入力欄のスタイル
const AmountInput = styled.input`
  padding: 4px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100px;
`;

// セレクトボックスのスタイル
const Select = styled.select`
  padding: 4px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

// チェックボックスのスタイル 
const Checkbox = styled.input`
  margin-right: 4px;
`;

// パーセント入力欄のスタイル
const PercentInput = styled.input`
  padding: 4px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 60px;
`;

// 予算計算書検索条件コンポーネント
const BudgetSearchCondition: React.FC<SearchConditionProps> = ({
  fromDate = '',
  toDate = '',
  amountFrom = 0,
  amountTo = 999999999,
  taxRate = 10,
  blockMethod = '全体',
  blockValue = 10,
  applyLongTermContract = false,
  applyBreakdownFlag1 = false,
  applyBreakdownFlag2 = false,
  applyBreakdownPercentage = 0,
}) => {
  return (
    <SearchCondition>
      <div>
        <div>範囲指定</div>
        <div>
          <DateInput type="date" value={fromDate} /> ～ <DateInput type="date" value={toDate} />
        </div>
        <div>
          予算料日 <AmountInput type="number" value={amountFrom} /> ～ 予算料日 <AmountInput type="number" value={amountTo} />
        </div>
      </div>
      <div>
        税率 
        <input type="radio" checked readOnly /> 指定しない
        <input type="radio" /> 指定する
        <PercentInput type="number" value={taxRate} />%
      </div>
      <div>
        集計対象
        <Select value={blockMethod}>
          <option>全体</option>
          <option>ブロック</option>
          <option>セグメント</option>
        </Select>
        <AmountInput type="number" value={blockValue} />階北ブロック
      </div>
      <div>
        <Checkbox type="checkbox" checked={applyLongTermContract} />
        「継税標準額調整入力」で登録した伝票も出力する
      </div>
      <div>  
        <Checkbox type="checkbox" checked={applyBreakdownFlag1} />
        「内訳1の分割伝票IDのみの伝票を出力する
      </div>
      <div>
        <Checkbox type="checkbox" checked={applyBreakdownFlag2} />  
        「内訳請求書発行予定案件IDのみの伝票を出力する
      </div>
      <div>
        <Checkbox type="checkbox" />
        「内訳請求書発行予定案件以外」のみの伝票を出力する
        <PercentInput type="number" value={applyBreakdownPercentage} />%  
      </div>
    </SearchCondition>
  );
};

// 使用例
const App: React.FC = () => {
  return (
    <div>
      <h1>予算計算書検索条件</h1>
      <BudgetSearchCondition
        fromDate="2023-04-01"
        toDate="2023-09-30"
        amountFrom={1000000}
        amountTo={999999999}
        applyLongTermContract
      />
    </div>
  );  
};

export default BudgetSearchCondition;