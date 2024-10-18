import React from 'react';
import styled from '@emotion/styled';

// 支出決定入力フォームのプロパティ型定義
type ExpenseDecisionInputProps = {
  expense?: string;
  foodExpense?: string;
  foodExpenseName?: string;
  meetingFee?: string;
  meetingPlace?: string;
  meetingRank?: string;
  traffic?: string;
  trainPass?: string;
  amountOfMoney?: string;
  lodging?: string;
  others?: string;
  onSubmit: (formData: any) => void;
};

// 支出決定入力フォームコンポーネント
const ExpenseDecisionInput: React.FC<ExpenseDecisionInputProps> = ({
  expense = '',
  foodExpense = '',
  foodExpenseName = '',
  meetingFee = '',
  meetingPlace = '',
  meetingRank = '',
  traffic = '',
  trainPass = '',
  amountOfMoney = '',
  lodging = '',
  others = '',
  onSubmit,
}) => {
  // フォーム送信時のハンドラ
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = {
      expense,
      foodExpense,
      foodExpenseName,
      meetingFee,
      meetingPlace,
      meetingRank,
      traffic,
      trainPass,
      amountOfMoney,
      lodging,
      others,
    };
    onSubmit(formData);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormItem>
        <label>支出決定:</label>
        <Input type="text" value={expense} />
      </FormItem>
      <FormItem>
        <label>食費:</label>
        <Input type="text" value={foodExpense} />
      </FormItem>
      <FormItem>
        <label>会議費:</label>
        <FormItemInner>
          <Input type="text" value={meetingFee} placeholder="会議費" />
          <Input type="text" value={meetingPlace} placeholder="開催場所" />
          <Select value={meetingRank}>
            <option value="">--</option>
            <option value="甲">甲</option>
            <option value="乙">乙</option>
            <option value="その他">その他</option>
          </Select>
        </FormItemInner>
      </FormItem>
      <FormItem>
        <label>交通費:</label>
        <Input type="text" value={traffic} />
      </FormItem>
      <FormItemInner>
        <Input type="text" value={trainPass} placeholder="定期券" />
        <Input type="text" value={amountOfMoney} placeholder="金額" />
      </FormItemInner>
      <FormItem>
        <label>宿泊費:</label>
        <Input type="text" value={lodging} />
      </FormItem>
      <FormItem>
        <label>雑費:</label>
        <Input type="text" value={others} />
      </FormItem>
      <SubmitButton type="submit">登録</SubmitButton>
    </Form>
  );
};

// スタイリング
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
  background-color: #f0f0f0;
  border-radius: 4px;

  @media (min-width: 768px) {
    max-width: 600px;
    margin: 0 auto;
  }
`;

const FormItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  label {
    min-width: 100px;
  }
`;

const FormItemInner = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
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

const SubmitButton = styled.button`
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

// 使用例
const SampleData = {
  expense: '10000',
  foodExpense: '2000',
  foodExpenseName: '食費',
  meetingFee: '5000',
  meetingPlace: '東京',
  meetingRank: '甲',
  traffic: '3000',
  trainPass: '定期券代',
  amountOfMoney: '10000',
  lodging: '8000',
  others: '1000',
};

const UsageExample: React.FC = () => {
  const handleSubmit = (formData: any) => {
    console.log(formData);
    // ここで送信処理などを行う
  };

  return <ExpenseDecisionInput {...SampleData} onSubmit={handleSubmit} />;
};

export default ExpenseDecisionInput;