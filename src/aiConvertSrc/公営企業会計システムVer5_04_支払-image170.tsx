import React from 'react';
import styled from 'styled-components';

// 予算期間の型定義
type BudgetPeriod = {
  from: string;
  to: string;
};

// コンポーネントのプロパティの型定義
interface BudgetEntryFormProps {
  onSubmit: (data: {
    level: string;
    period: BudgetPeriod;
    amount: string;
    summary: string;
    options: {
      carryOverBalance: boolean;
      carryOverBudget: boolean;
      transferBudget: boolean;
    };
  }) => void;
}

// スタイルコンポーネント
const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  max-width: 400px;
  margin: 0 auto;

  @media (max-width: 600px) {
    max-width: 100%;
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-weight: bold;
  margin-bottom: 5px;
`;

const Input = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Select = styled.select`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const CheckboxGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  align-self: flex-start;

  &:hover {
    background-color: #0056b3;
  }
`;

// 予算登録フォームコンポーネント
const BudgetEntryForm: React.FC<BudgetEntryFormProps> = ({ onSubmit }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // フォームの値を取得
    const level = (e.currentTarget.elements.namedItem('level') as HTMLSelectElement).value;
    const from = (e.currentTarget.elements.namedItem('from') as HTMLInputElement).value;
    const to = (e.currentTarget.elements.namedItem('to') as HTMLInputElement).value;
    const amount = (e.currentTarget.elements.namedItem('amount') as HTMLInputElement).value;
    const summary = (e.currentTarget.elements.namedItem('summary') as HTMLSelectElement).value;
    const carryOverBalance = (e.currentTarget.elements.namedItem('carryOverBalance') as HTMLInputElement).checked;
    const carryOverBudget = (e.currentTarget.elements.namedItem('carryOverBudget') as HTMLInputElement).checked;
    const transferBudget = (e.currentTarget.elements.namedItem('transferBudget') as HTMLInputElement).checked;

    // フォームの値をプロパティの関数に渡す
    onSubmit({
      level,
      period: { from, to },
      amount,
      summary,
      options: {
        carryOverBalance,
        carryOverBudget,
        transferBudget,
      },
    });
  };

  return (
    <FormContainer>
      <FormGroup>
        <Label>出力レベル</Label>
        <Select name="level">
          <option value="節">節</option>
          <option value="細節">細節</option>
          <option value="明細">明細</option>
        </Select>
      </FormGroup>
      <FormGroup>
        <Label>範囲指定</Label>
        <div>
          <Label>作表年月</Label>
          <Input type="text" name="from" placeholder="令和○年○月" />
          <span>～</span>
          <Input type="text" name="to" placeholder="令和○年○月" />
        </div>
      </FormGroup>
      <FormGroup>
        <Label>予算科目</Label>
        <div>
          <Input type="text" name="amount" defaultValue="00000000" />
          <span>～</span>
          <Input type="text" name="amount" defaultValue="99999999" />
        </div>
      </FormGroup>
      <FormGroup>
        <Label>集計対象</Label>
        <Select name="summary">
          <option value="全体">全体</option>
          <option value="ブロック">ブロック</option>
          <option value="セグメント">セグメント</option>
        </Select>
      </FormGroup>
      <CheckboxGroup>
        <label>
          <input type="checkbox" name="carryOverBalance" />
          前月繰越額のみで予算作成する
        </label>
        <label>
          <input type="checkbox" name="carryOverBudget" />
          損益勘定基準で集計する
        </label>
        <label>
          <input type="checkbox" name="transferBudget" />
          損益勘定と資産勘定を集計する
        </label>
      </CheckboxGroup>
      <Button type="submit" onClick={handleSubmit}>
        実行
      </Button>
    </FormContainer>
  );
};

export default BudgetEntryForm;

// 使用例
const App: React.FC = () => {
  const handleSubmit = (data: {
    level: string;
    period: BudgetPeriod;
    amount: string;
    summary: string;
    options: {
      carryOverBalance: boolean;
      carryOverBudget: boolean;
      transferBudget: boolean;
    };
  }) => {
    console.log(data);
    // ここで予算登録の処理を行う
  };

  return (
    <div>
      <h1>予算登録フォーム</h1>
      <BudgetEntryForm onSubmit={handleSubmit} />
    </div>
  );
};