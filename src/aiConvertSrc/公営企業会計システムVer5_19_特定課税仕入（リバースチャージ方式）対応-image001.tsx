// TaxForm.tsx
import React from 'react';
import styled from '@emotion/styled';

// 税額計算表のプロパティ型定義
interface TaxFormProps {
  formData: {
    name: string;
    income: number;
    deductions: number;
    dependents: number;
  };
}

// スタイル定義
const FormContainer = styled.div`
  font-family: "ＭＳ ゴシック", monospace;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: white;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;
  
  th, td {
    border: 1px solid black;
    padding: 4px;
    text-align: center;
  }
`;

const TaxForm: React.FC<TaxFormProps> = ({ formData }) => {
  // 課税所得金額の計算
  const taxableIncome = formData.income - formData.deductions;

  // 税額の計算（サンプル）
  const calculateTax = (income: number) => {
    if (income <= 1000000) return income * 0.1;
    if (income <= 3000000) return income * 0.2;
    return income * 0.3;
  };

  const tax = calculateTax(taxableIncome);

  return (
    <FormContainer>
      <h2>税額計算表</h2>
      <p>氏名: {formData.name}</p>
      
      <Table>
        <thead>
          <tr>
            <th colSpan={2}>課税標準</th>
            <th>税率</th>
            <th>税額</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>給与収入</td>
            <td>{formData.income.toLocaleString()}円</td>
            <td rowSpan={3}></td>
            <td rowSpan={3}></td>
          </tr>
          <tr>
            <td>所得控除</td>
            <td>-{formData.deductions.toLocaleString()}円</td>
          </tr>
          <tr>
            <td>課税所得金額</td>
            <td>{taxableIncome.toLocaleString()}円</td>
          </tr>
          <tr>
            <td colSpan={2}>所得税額</td>
            <td></td>
            <td>{tax.toLocaleString()}円</td>
          </tr>
        </tbody>
      </Table>
    </FormContainer>
  );
};

// サンプルデータ
const sampleData = {
  name: '山田太郎',
  income: 5000000,
  deductions: 380000,
  dependents: 2,
};

// サンプル表示用コンポーネント 
const TaxFormSample = () => {
  return <TaxForm formData={sampleData} />;
};

export default TaxFormSample;