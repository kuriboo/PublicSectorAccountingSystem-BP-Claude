import React from 'react';
import styled from 'styled-components';

// 型定義
type MonthlyPaymentFormProps = {
  onSubmit: (accountBalance: string) => void;
};

// スタイル定義
const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 5px;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
`;

const FormTitle = styled.h2`
  margin-bottom: 20px;
`;

const FormField = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  width: 100%;
`;

const FormInput = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const FormButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

// コンポーネント定義
const MonthlyPaymentForm: React.FC<MonthlyPaymentFormProps> = ({ onSubmit }) => {
  const [accountBalance, setAccountBalance] = React.useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(accountBalance);
  };

  return (
    <FormContainer>
      <FormTitle>月別金額丸め処理</FormTitle>
      <form onSubmit={handleSubmit}>
        <FormField>
          {/* 範囲指定のラベルと入力フィールド */}
          <label htmlFor="accountBalance">範囲指定</label>
          <FormInput
            type="text"
            id="accountBalance"
            value={accountBalance}
            onChange={(e) => setAccountBalance(e.target.value)}
            required
          />
        </FormField>
        {/* 送信ボタン */}
        <FormButton type="submit">OK</FormButton>
      </form>
    </FormContainer>
  );
};

// サンプルデータと使用例
const SampleUsage: React.FC = () => {
  const handleSubmit = (accountBalance: string) => {
    console.log('Submitted account balance:', accountBalance);
    // 送信処理の実装
  };

  return (
    <div>
      <h1>Monthly Payment Form Example</h1>
      <MonthlyPaymentForm onSubmit={handleSubmit} />
    </div>
  );
};

export default MonthlyPaymentForm;