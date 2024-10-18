import React from 'react';
import styled from 'styled-components';

// 予算入力フォームのプロパティ型定義
type BudgetFormProps = {
  onSubmit: (startDate: string, endDate: string, minBudget: number, maxBudget: number, allocationCategory: string) => void;
};

// 予算入力フォームコンポーネント
const BudgetForm: React.FC<BudgetFormProps> = ({ onSubmit }) => {
  // フォーム入力値を管理するstate
  const [startDate, setStartDate] = React.useState('');
  const [endDate, setEndDate] = React.useState('');
  const [minBudget, setMinBudget] = React.useState(0);
  const [maxBudget, setMaxBudget] = React.useState(0);
  const [allocationCategory, setAllocationCategory] = React.useState('');

  // フォーム送信時のイベントハンドラ
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(startDate, endDate, minBudget, maxBudget, allocationCategory);
  };

  return (
    <FormContainer>
      <h2>所属別支出予算差引簿（予定額無）</h2>
      <p>行政市水道企業団 管理者 管理者 業者用 令和02年09月04日</p>
      
      {/* 出力レベル選択 */}
      <div>
        <label>
          <input type="radio" name="outputLevel" value="所属節" /> 所属節
        </label>
        <label>
          <input type="radio" name="outputLevel" value="所属細節" /> 所属細節
        </label>
        <label>
          <input type="radio" name="outputLevel" value="所属明細" /> 所属明細
        </label>
      </div>

      {/* 期間指定 */}
      <div>
        <label>
          作表年月 
          <input type="text" value={startDate} onChange={e => setStartDate(e.target.value)} /> ～ <input type="text" value={endDate} onChange={e => setEndDate(e.target.value)} />
        </label>
        
        <label>
          予算科目
          <input type="number" value={minBudget} onChange={e => setMinBudget(Number(e.target.value))} /> ～ <input type="number" value={maxBudget} onChange={e => setMaxBudget(Number(e.target.value))} />
        </label>
      </div>

      {/* 集計対象選択 */}
      <div>
        <label>
          <input type="radio" name="aggregateTarget" value="全体" /> 全体
        </label>
        <label>
          <input type="radio" name="aggregateTarget" value="ブロック" /> ブロック
        </label>
        <label>
        <input type="radio" name="aggregateTarget" value="セグメント" onChange={e => setAllocationCategory(e.target.value)} /> セグメント
        </label>
      </div>

      {/* オプション */}
      <div>
        <label>
          <input type="checkbox" /> 前月繰越行のみでも印字する
        </label>
        <label>
          <input type="checkbox" /> 摘要欄に工事名を印字する 
        </label>
        <label>
          <input type="checkbox" /> 摘要欄に単価名称を印字する
        </label>
      </div>

      {/* ボタン */}
      <div>
        <button type="button">集計</button>
        <button type="button">印刷</button>
        <button type="button">クリア</button>
        <button type="submit">終了</button>
      </div>
    </FormContainer>
  );
};

// スタイリング
const FormContainer = styled.form`
  h2 {
    text-align: center;
  }

  p {
    text-align: right;
  }

  label {
    display: inline-block;
    margin: 5px;
  }

  input[type="text"],
  input[type="number"] {
    padding: 3px;
  }

  button {
    margin: 5px;
    padding: 5px 10px;
  }

  @media (max-width: 600px) {
    label {
      display: block;
    }
  }
`;

// サンプルデータ
const sampleData = {
  startDate: '令和02年06月',
  endDate: '令和02年06月',
  minBudget: 1234567,
  maxBudget: 9999999,
  allocationCategory: 'セグメント',
};

// 使用例
const App: React.FC = () => {
  const handleSubmit = (startDate: string, endDate: string, minBudget: number, maxBudget: number, allocationCategory: string) => {
    console.log(startDate, endDate, minBudget, maxBudget, allocationCategory);
    // 送信処理などを実装
  };

  return (
    <div>
      <h1>予算入力フォーム</h1>
      <BudgetForm onSubmit={handleSubmit} />
      <hr />
      <h2>サンプルデータを使用した例</h2>
      <BudgetForm
        onSubmit={handleSubmit}
        startDate={sampleData.startDate}
        endDate={sampleData.endDate}
        minBudget={sampleData.minBudget}
        maxBudget={sampleData.maxBudget}
        allocationCategory={sampleData.allocationCategory}
      />
    </div>
  );
};

export default App;