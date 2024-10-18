import React from 'react';
import styled from 'styled-components';

// 型定義
interface ConsumptionTaxFormProps {
  onSubmit: (data: { startYear: number; startMonth: number; endYear: number; endMonth: number; }) => void;
}

// スタイリング
const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const FormField = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
`;

const Label = styled.label`
  margin-right: 10px;
`;

const Select = styled.select`
  padding: 5px;
  border-radius: 3px;
  border: 1px solid #ccc;
`;

const Button = styled.button`
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

// コンポーネント
const ConsumptionTaxForm: React.FC<ConsumptionTaxFormProps> = ({ onSubmit }) => {
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 5 }, (_, i) => currentYear - i);
  const months = Array.from({ length: 12 }, (_, i) => i + 1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const data = {
      startYear: Number(formData.get('startYear')),
      startMonth: Number(formData.get('startMonth')),
      endYear: Number(formData.get('endYear')),  
      endMonth: Number(formData.get('endMonth')),
    };
    onSubmit(data);
  };

  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <FormField>
          <Label>会計年度</Label>
          <Select name="startYear" defaultValue={currentYear}>
            {years.map((year) => (
              <option key={year} value={year}>
                {year}年
              </option>
            ))}
          </Select>
          <Select name="startMonth" defaultValue={4}>
            {months.map((month) => (
              <option key={month} value={month}>
                {month}月
              </option>
            ))}
          </Select>
          <span>~</span>
          <Select name="endYear" defaultValue={currentYear + 1}>
            {years.map((year) => (
              <option key={year} value={year}>
                {year}年
              </option>
            ))}
          </Select>
          <Select name="endMonth" defaultValue={3}>
            {months.map((month) => (
              <option key={month} value={month}>
                {month}月
              </option>
            ))}
          </Select>          
        </FormField>
        <Button type="submit">OK</Button>
      </form>
    </FormContainer>
  );
};

// 使用例
const App: React.FC = () => {
  const handleSubmit = (data: { startYear: number; startMonth: number; endYear: number; endMonth: number; }) => {
    console.log(data);
  };

  return (
    <div>
      <h1>消費税計算</h1>
      <ConsumptionTaxForm onSubmit={handleSubmit} />
    </div>
  );
};

export default App;