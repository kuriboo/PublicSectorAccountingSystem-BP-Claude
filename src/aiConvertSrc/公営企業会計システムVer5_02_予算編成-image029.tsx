以下は、Next.js + TypeScriptを使用して、提供された画像に基づいてコンポーネントを生成したコードです。

import React from 'react';
import styled from 'styled-components';

// 予算期間の型定義
type PeriodType = {
  label: string;
  value: string;
};

// コンポーネントのプロパティの型定義
interface FormProps {
  periods: PeriodType[];
  years: number[];
  onSubmit: (data: any) => void;
}

// スタイルコンポーネントの定義
const FormWrapper = styled.div`
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 5px;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
`;

const Select = styled.select`
  width: 100%;
  padding: 5px;
  font-size: 16px;
`;

const Input = styled.input`
  width: 100%;
  padding: 5px;
  font-size: 16px;
`;

const ButtonGroup = styled.div`
  text-align: right;
`;

const Button = styled.button`
  margin-left: 10px;
  padding: 5px 10px;
  font-size: 16px;
`;

// 収入支出予算事業別集計表コンポーネント
const BudgetForm: React.FC<FormProps> = ({ periods, years, onSubmit }) => {
  // フォームの状態管理
  const [formData, setFormData] = React.useState({
    period: '',
    year: '',
    startDate: '',
    endDate: '',
  });

  // フォーム値の変更ハンドラ
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  // フォーム送信ハンドラ
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <FormWrapper>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <Label>予算期間</Label>
          <Select name="period" value={formData.period} onChange={handleChange}>
            <option value="">選択してください</option>
            {periods.map(period => (
              <option key={period.value} value={period.value}>{period.label}</option>
            ))}
          </Select>
        </FormGroup>
        <FormGroup>
          <Label>回数</Label>
          <Select name="year" value={formData.year} onChange={handleChange}>
            <option value="">選択してください</option>
            {years.map(year => (
              <option key={year} value={year}>{year}</option>
            ))}
          </Select>
        </FormGroup>
        <FormGroup>
          <Label>期間指定</Label>
          <Input type="text" name="startDate" value={formData.startDate} onChange={handleChange} placeholder="所属" />
          <Input type="text" name="endDate" value={formData.endDate} onChange={handleChange} placeholder="所属" />
        </FormGroup>
        <ButtonGroup>
          <Button type="button">クリア</Button>
          <Button type="submit">終了</Button>
        </ButtonGroup>
      </form>
    </FormWrapper>
  );
};

// サンプルデータ
const samplePeriods: PeriodType[] = [
  { label: '当初予算', value: '1' },
  { label: '補正予算', value: '2' },
];

const sampleYears = [29, 30, 31];

// 使用例
const App: React.FC = () => {
  const handleSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div>
      <h1>収入支出予算事業別集計表</h1>
      <BudgetForm periods={samplePeriods} years={sampleYears} onSubmit={handleSubmit} />
    </div>
  );
};

export default App;