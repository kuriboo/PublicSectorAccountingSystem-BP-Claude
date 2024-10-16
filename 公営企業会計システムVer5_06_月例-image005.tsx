import React, { useState } from 'react';
import styled from 'styled-components';

// 振替条件設定のプロパティ型
type TransferConditionProps = {
  onSubmit: (condition: TransferCondition) => void;
};

// 振替条件の型
type TransferCondition = {
  date: string;
  accountNumber: string;
  accountName: string;
  transferDate: string;
  amount: string;
  summary: string;
};

// 振替条件設定コンポーネント
const TransferCondition: React.FC<TransferConditionProps> = ({ onSubmit }) => {
  // 状態管理
  const [condition, setCondition] = useState<TransferCondition>({
    date: '',
    accountNumber: '',
    accountName: '',
    transferDate: '',
    amount: '',
    summary: '',
  });

  // 入力値の変更ハンドラ
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCondition((prev) => ({ ...prev, [name]: value }));
  };

  // 振替日の変更ハンドラ
  const handleTransferDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCondition((prev) => ({ ...prev, transferDate: e.target.value }));
  };

  // フォーム送信ハンドラ
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(condition);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <InputField>
        <Label>検索条件設定</Label>
        <Input
          type="text"
          name="date"
          value={condition.date}
          onChange={handleChange}
          placeholder="平成29 年度"
        />
      </InputField>
      <InputField>
        <Label>振替番号</Label>
        <Input
          type="text"
          name="accountNumber"
          value={condition.accountNumber}
          onChange={handleChange}
        />
      </InputField>
      <InputField>
        <Label>振替日</Label>
        <Input
          type="text"
          name="transferDate"
          value={condition.transferDate}
          onChange={handleTransferDateChange}
          placeholder="平成29年04月04日 〜 平成29年09月04日"
        />
      </InputField>
      <InputField>
        <Label>振替金額</Label>
        <RangeInputs>
          <Input
            type="text"
            name="amount"
            value={condition.amount}
            onChange={handleChange}
          />
          <span>〜</span>
          <Input type="text" />
        </RangeInputs>
      </InputField>
      <InputField>
        <Label>摘要</Label>
        <Input
          type="text"
          name="summary"
          value={condition.summary}
          onChange={handleChange}
        />
      </InputField>
      <SubmitButton type="submit">表示</SubmitButton>
    </Form>
  );
};

// 振替条件設定の使用例
const SampleTransferCondition: React.FC = () => {
  const handleSubmit = (condition: TransferCondition) => {
    console.log('Submitted:', condition);
  };

  return (
    <div>
      <h2>振替条件設定</h2>
      <TransferCondition onSubmit={handleSubmit} />
    </div>
  );
};

// スタイリング
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 400px;
  margin: 0 auto;
`;

const InputField = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-weight: bold;
`;

const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const RangeInputs = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const SubmitButton = styled.button`
  padding: 0.5rem;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export default TransferCondition;