import React from 'react';
import styled from 'styled-components';

// 型定義
interface TaxCalculationFormProps {
  onSubmit: (data: { year: number; term: string; }) => void;
}

// スタイリング
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 5px;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;

  @media (min-width: 768px) {
    max-width: 600px;
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  width: 100%;
`;

const Label = styled.label`
  font-weight: bold;
  margin-bottom: 5px;
`;

const Select = styled.select`
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  width: 100%;
  font-size: 16px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

// コンポーネント
const TaxCalculationForm: React.FC<TaxCalculationFormProps> = ({ onSubmit }) => {
  // フォーム送信時の処理
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const year = parseInt(form.year.value, 10);
    const term = form.term.value;
    onSubmit({ year, term });
  };

  // 年度選択肢の生成
  const currentYear = new Date().getFullYear();
  const yearOptions = Array.from({ length: 3 }, (_, i) => currentYear - i);

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label htmlFor="year">会計年度</Label>
        <Select id="year" name="year" defaultValue={currentYear}>
          {yearOptions.map((year) => (
            <option key={year} value={year}>
              {year}年
            </option>
          ))}
        </Select>
      </FormGroup>
      <FormGroup>
        <Label htmlFor="term">課税期間</Label>
        <Select id="term" name="term" defaultValue="1">
          <option value="1">通期</option>
          <option value="2">上期</option>
          <option value="3">下期</option>
          <option value="4">第1期</option>
          <option value="5">第2期</option>
          <option value="6">第3期</option>
          <option value="7">第4期</option>
        </Select>
      </FormGroup>
      <Button type="submit">OK</Button>
    </Form>
  );
};

export default TaxCalculationForm;

// 使用例
const App: React.FC = () => {
  const handleSubmit = (data: { year: number; term: string }) => {
    console.log('送信データ:', data);
    // ここで送信したデータを使って必要な処理を行う
  };

  return (
    <div>
      <h1>納付税額算出表</h1>
      <TaxCalculationForm onSubmit={handleSubmit} />
    </div>
  );
};