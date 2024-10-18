import React, { useState, useCallback } from 'react';
import styled from '@emotion/styled';

type CashFlowFormProps = {
  initialAmount?: number;
  initialItemName?: string;
  initialCfCategory?: 'income' | 'expense';
  initialAccountingCategory?: 'cash' | 'creditCard' | 'other';
  initialPoliticalDivision?: 'tokyoTo' | 'other';
  initialIndent?: number;
  initialMemo?: string;
  onSubmit: (formData: CashFlowFormData) => void;
  onCancel: () => void;
};

type CashFlowFormData = {
  amount: number;
  itemName: string;
  cfCategory: 'income' | 'expense';
  accountingCategory: 'cash' | 'creditCard' | 'other';
  politicalDivision: 'tokyoTo' | 'other';
  indent: number;
  memo: string;
};

const Container = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 5px;
  width: 100%;
  box-sizing: border-box;

  @media (min-width: 768px) {
    width: 400px;
  }
`;

const Label = styled.label`
  font-weight: bold;
`;

const Input = styled.input`
  padding: 5px;
  border-radius: 3px;
  border: 1px solid #ccc;
  width: 100%;
`;

const Select = styled.select`
  padding: 5px;
  border-radius: 3px;
  border: 1px solid #ccc;
  width: 100%;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 8px 16px;
  border-radius: 3px;
  border: none;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    opacity: 0.8;
  }
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 0.8em;
  margin-top: 5px;
`;

const CashFlowForm: React.FC<CashFlowFormProps> = ({
  initialAmount = 400,
  initialItemName = '',
  initialCfCategory = 'expense',
  initialAccountingCategory = 'cash',
  initialPoliticalDivision = 'tokyoTo',
  initialIndent = 0,
  initialMemo = '',
  onSubmit,
  onCancel,
}) => {
  const [amount, setAmount] = useState<number>(initialAmount);
  const [itemName, setItemName] = useState<string>(initialItemName);
  const [cfCategory, setCfCategory] = useState<'income' | 'expense'>(initialCfCategory);
  const [accountingCategory, setAccountingCategory] = useState<'cash' | 'creditCard' | 'other'>(initialAccountingCategory);
  const [politicalDivision, setPoliticalDivision] = useState<'tokyoTo' | 'other'>(initialPoliticalDivision);
  const [indent, setIndent] = useState<number>(initialIndent);
  const [memo, setMemo] = useState<string>(initialMemo);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validateForm = useCallback(() => {
    const newErrors: { [key: string]: string } = {};

    if (amount <= 0) {
      newErrors.amount = '金額は0より大きい値を入力してください。';
    }

    if (itemName.trim() === '') {
      newErrors.itemName = '項目名称は必須です。';
    }

    if (indent < 0) {
      newErrors.indent = 'インデントは0以上の値を入力してください。';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [amount, itemName, indent]);

  const handleSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      const formData: CashFlowFormData = {
        amount,
        itemName,
        cfCategory,
        accountingCategory,
        politicalDivision,
        indent,
        memo,
      };
      onSubmit(formData);
    }
  }, [amount, itemName, cfCategory, accountingCategory, politicalDivision, indent, memo, onSubmit, validateForm]);

  const handleReset = useCallback(() => {
    setAmount(initialAmount);
    setItemName(initialItemName);
    setCfCategory(initialCfCategory);
    setAccountingCategory(initialAccountingCategory);
    setPoliticalDivision(initialPoliticalDivision);
    setIndent(initialIndent);
    setMemo(initialMemo);
    setErrors({});
  }, [initialAmount, initialItemName, initialCfCategory, initialAccountingCategory, initialPoliticalDivision, initialIndent, initialMemo]);

  return (
    <Container onSubmit={handleSubmit}>
      <Label htmlFor="amount">集計番号</Label>
      <Input
        id="amount"
        type="number"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
        required
      />
      {errors.amount && <ErrorMessage>{errors.amount}</ErrorMessage>}

      <Label htmlFor="itemName">項目名称1</Label>
      <Input
        id="itemName"
        type="text"
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
        required
      />
      {errors.itemName && <ErrorMessage>{errors.itemName}</ErrorMessage>}
      
      <Label htmlFor="cfCategory">CF区分</Label>
      <Select
        id="cfCategory"
        value={cfCategory}
        onChange={(e) => setCfCategory(e.target.value as 'income' | 'expense')}
      >
        <option value="income">業務活動によるキャッシュ・フロー</option>
        <option value="expense">業務活動によるキャッシュ・フロー</option>
      </Select>

      <Label htmlFor="accountingCategory">金額CFF区分</Label>
      <Select
        id="accountingCategory"
        value={accountingCategory}
        onChange={(e) => setAccountingCategory(e.target.value as 'cash' | 'creditCard' | 'other')}
      >
        <option value="cash">現金同等物</option>
        <option value="creditCard">現金同等物でないもの</option>
        <option value="other">その他</option>
      </Select>

      <Label htmlFor="politicalDivision">改行区分</Label>
      <Select
        id="politicalDivision"
        value={politicalDivision}
        onChange={(e) => setPoliticalDivision(e.target.value as 'tokyoTo' | 'other')}
      >
        <option value="tokyoTo">行政区分</option>
        <option value="other">その他</option>
      </Select>

      <Label htmlFor="indent">インデント</Label>
      <Input
        id="indent"
        type="number"
        value={indent}
        onChange={(e) => setIndent(Number(e.target.value))}
        min={0}
        required
      />
      {errors.indent && <ErrorMessage>{errors.indent}</ErrorMessage>}

      <Label htmlFor="memo">備考出力無し</Label>
      <Input
        id="memo"
        type="text"
        value={memo}
        onChange={(e) => setMemo(e.target.value)}
      />

      <ButtonGroup>
        <Button type="submit">OK</Button>
        <Button type="button" onClick={handleReset}>クリア</Button>
        <Button type="button" onClick={onCancel}>キャンセル</Button>
      </ButtonGroup>
    </Container>
  );
};

// Usage example
const App: React.FC = () => {
  const handleSubmit = (formData: CashFlowFormData) => {
    console.log(formData);
    // Handle form submission
  };

  const handleCancel = () => {
    console.log('Form cancelled');
    // Handle cancellation
  };

  return (
    <div>
      <h1>Cash Flow Form</h1>
      <CashFlowForm onSubmit={handleSubmit} onCancel={handleCancel} />
    </div>
  );
};

export default App;