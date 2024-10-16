import React from 'react';
import styled from '@emotion/styled';

// 予算特定収入科目設定の入力フォームの型定義
type BudgetSpecificIncomeItemSettingFormProps = {
  /** 範囲指定 */
  range: string;
  /** 会計年度 */
  fiscalYear: number;
  /** 予算種別区分 */
  budgetType: number;
  /** 回数 */
  count: number;
  /** 予算種別区分の選択肢 */
  budgetTypeOptions: { label: string; value: number }[];
};

// 予算特定収入科目設定の入力フォーム
const BudgetSpecificIncomeItemSettingForm: React.FC<BudgetSpecificIncomeItemSettingFormProps> = ({
  range,
  fiscalYear,
  budgetType,
  count,
  budgetTypeOptions,
}) => {
  return (
    <Form>
      <FormItem>
        <Label>範囲指定</Label>
        <Input type="text" value={range} readOnly />
      </FormItem>
      <FormItem>
        <Label>会計年度</Label>
        <Input type="number" value={fiscalYear} readOnly />
      </FormItem>
      <FormItem>
        <Label>予算種別区分</Label>
        <Select value={budgetType}>
          {budgetTypeOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </Select>
      </FormItem>
      <FormItem>
        <Label>回数</Label>
        <Input type="number" value={count} readOnly />
      </FormItem>
    </Form>
  );
};

// スタイリング
const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 400px;
  margin: 0 auto;
`;

const FormItem = styled.div`
  display: flex;
  align-items: center;
`;

const Label = styled.label`
  width: 120px;
  font-weight: bold;
`;

const Input = styled.input`
  flex: 1;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Select = styled.select`
  flex: 1;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

// サンプルデータ
const sampleData: BudgetSpecificIncomeItemSettingFormProps = {
  range: '令和03年度',
  fiscalYear: 3,
  budgetType: 1,
  count: 0,
  budgetTypeOptions: [
    { label: '当初予算', value: 1 },
    { label: '補正予算', value: 2 },
  ],
};

// 表示用コンポーネント
const App: React.FC = () => {
  return (
    <div>
      <h1>予算特定収入科目設定一覧表</h1>
      <BudgetSpecificIncomeItemSettingForm {...sampleData} />
    </div>
  );
};

export default App;