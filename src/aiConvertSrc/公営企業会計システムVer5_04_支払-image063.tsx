import React from 'react';
import styled from 'styled-components';

// 予算入力コンポーネントの型定義
interface BudgetInputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  onBlur?: () => void;
}

// 予算入力コンポーネント
const BudgetInput: React.FC<BudgetInputProps> = ({ label, value, onChange, onBlur }) => {
  // 入力値が変更された時のハンドラ
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <InputWrapper>
      <Label>{label}</Label>
      <Input type="text" value={value} onChange={handleChange} onBlur={onBlur} />
    </InputWrapper>
  );
};

// スタイリング
const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

const Label = styled.label`
  margin-right: 8px;
`;

const Input = styled.input`
  padding: 4px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100px;
`;

// 予算明細コンポーネントの型定義
interface BudgetItemProps {
  label: string;
  amount: number;
}

// 予算明細コンポーネント 
const BudgetItem: React.FC<BudgetItemProps> = ({ label, amount }) => {
  return (
    <ItemWrapper>
      <ItemLabel>{label}</ItemLabel>
      <ItemAmount>{amount.toLocaleString()}</ItemAmount>
    </ItemWrapper>
  );
};

// スタイリング
const ItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 4px;
`;

const ItemLabel = styled.div`
  font-weight: bold;
`;

const ItemAmount = styled.div``;

// 予算入力フォームコンポーネントの型定義
interface BudgetFormProps {
  budget: number;
  taxRate: number;
  onBudgetChange: (budget: number) => void;
  onTaxRateChange: (taxRate: number) => void;
}

// 予算入力フォームコンポーネント
const BudgetForm: React.FC<BudgetFormProps> = ({ budget, taxRate, onBudgetChange, onTaxRateChange }) => {

  // 予算額が変更された時のハンドラ
  const handleBudgetChange = (value: string) => {
    const newBudget = parseInt(value) || 0;
    onBudgetChange(newBudget);
  };

  // 消費税率が変更された時のハンドラ  
  const handleTaxRateChange = (value: string) => {
    const newTaxRate = parseInt(value) || 0;
    onTaxRateChange(newTaxRate);
  };

  // 予算額と消費税をもとに、各項目の金額を計算
  const calcAmount = (amount: number, withTax: boolean) => {
    let result = amount;
    if (withTax) result *= (100 + taxRate) / 100;
    return Math.floor(result);
  };

  return (
    <FormWrapper>
      <BudgetInput
        label="予算額"
        value={budget.toString()}
        onChange={handleBudgetChange}
      />
      <BudgetInput
        label="消費税率"
        value={taxRate.toString()}
        onChange={handleTaxRateChange}
      />
      
      <BudgetItem label="予算額" amount={budget} />
      <BudgetItem label="消費税額" amount={calcAmount(budget, true) - budget} />
      <BudgetItem label="税抜金額" amount={calcAmount(budget, false)} />
      <BudgetItem label="予定金額" amount={calcAmount(budget, true)} />

    </FormWrapper>
  );
};

// スタイリング
const FormWrapper = styled.div`
  padding: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
`;

// サンプルデータ
const sampleData = {
  budget: 1000000,
  taxRate: 10,
};

// 使用例
const UsageExample: React.FC = () => {
  const [budget, setBudget] = React.useState(sampleData.budget);
  const [taxRate, setTaxRate] = React.useState(sampleData.taxRate);

  return (
    <BudgetForm
      budget={budget}
      taxRate={taxRate}
      onBudgetChange={setBudget}
      onTaxRateChange={setTaxRate}
    />
  );
};

export default UsageExample;