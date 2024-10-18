import React from 'react';
import styled from 'styled-components';

// 補助元帳作成フォームのプロパティ型定義
type SupplementaryJournalFormProps = {
  onSubmit: (data: FormData) => void;
};

// 補助元帳作成フォームのデータ型定義
type FormData = {
  startDate: string;
  endDate: string;
  reportingBasis: string;
  accountingPeriod: string;
  secondaryOnly: boolean;
};

// スタイル定義
const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;

  @media (max-width: 600px) {
    max-width: 100%;
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const Label = styled.label`
  font-weight: bold;
`;

const Input = styled.input`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
`;

const Select = styled.select`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
`;

const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  margin-right: 5px;
`;

const Button = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

// 補助元帳作成フォームコンポーネント
const SupplementaryJournalForm: React.FC<SupplementaryJournalFormProps> = ({ onSubmit }) => {
  // フォーム送信時の処理
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data: FormData = {
      startDate: form.startDate.value,
      endDate: form.endDate.value,
      reportingBasis: form.reportingBasis.value,
      accountingPeriod: form.accountingPeriod.value,
      secondaryOnly: form.secondaryOnly.checked,
    };
    onSubmit(data);
  };

  return (
    <FormWrapper>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="startDate">作業日</Label>
          <Input type="date" id="startDate" name="startDate" required />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="endDate">仕訳科目</Label>
          <Input type="number" id="endDate" name="endDate" required />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="reportingBasis">仕訳細節</Label>
          <Input type="number" id="reportingBasis" name="reportingBasis" required min={0} max={9999} />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="accountingPeriod">集計対象</Label>
          <Select id="accountingPeriod" name="accountingPeriod">
            <option value="all">全体</option>
            <option value="block">ブロック</option>
            <option value="segment">セグメント</option>
            <option value="fixed">第一地区</option>
          </Select>
        </FormGroup>
        <FormGroup>
          <Label>
            <Checkbox id="secondaryOnly" name="secondaryOnly" />
            第二地区のみ
          </Label>
        </FormGroup>
        <Button type="submit">OK</Button>
      </form>
    </FormWrapper>
  );
};

// サンプルデータ
const sampleData: FormData = {
  startDate: '2023-04-01',
  endDate: '2023-03-31',
  reportingBasis: '0000',
  accountingPeriod: 'all',
  secondaryOnly: false,
};

// 使用例
const App: React.FC = () => {
  const handleSubmit = (data: FormData) => {
    console.log('Submitted data:', data);
  };

  return (
    <div>
      <h1>補助元帳作成</h1>
      <SupplementaryJournalForm onSubmit={handleSubmit} />
      <h2>サンプルデータ</h2>
      <pre>{JSON.stringify(sampleData, null, 2)}</pre>
    </div>
  );
};

export default App;