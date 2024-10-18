import React from 'react';
import styled from '@emotion/styled';

// 型定義
interface TaxFormProps {
  data: {
    incomeDeduction: number;
    basicDeduction: number;
    nationalPensionPremium: number;
    nationalHealthInsurancePremium: number;
    longTermCarePremium: number;
    employmentInsurancePremium: number;
    incomeTax: number;
    inhabitantTax: number;
    enterpriseTax: number;
    totalTax: number;
  };
}

// スタイル定義
const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;

  th, td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: right;
  }

  th {
    background-color: #f0f0f0;
    font-weight: bold;
  }
`;

const TotalRow = styled.tr`
  font-weight: bold;
  background-color: #f9f9f9;
`;

// コンポーネント定義
const TaxForm: React.FC<TaxFormProps> = ({ data }) => {
  // 合計計算
  const totalIncomeDeduction = data.incomeDeduction + data.basicDeduction;
  const totalInsurancePremium = data.nationalPensionPremium + data.nationalHealthInsurancePremium + 
    data.longTermCarePremium + data.employmentInsurancePremium;
  const totalTax = data.incomeTax + data.inhabitantTax + data.enterpriseTax;

  return (
    <Table>
      <thead>
        <tr>
          <th>項目</th>
          <th>金額</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>給与所得控除</td>
          <td>{data.incomeDeduction.toLocaleString()}</td>
        </tr>
        <tr>
          <td>基礎控除</td>
          <td>{data.basicDeduction.toLocaleString()}</td>
        </tr>
        <tr>
          <td>所得控除計</td>
          <td>{totalIncomeDeduction.toLocaleString()}</td>
        </tr>
        <tr>
          <td>国民年金保険料</td>
          <td>{data.nationalPensionPremium.toLocaleString()}</td>
        </tr>
        <tr>
          <td>国民健康保険料</td>
          <td>{data.nationalHealthInsurancePremium.toLocaleString()}</td>
        </tr>
        <tr>
          <td>介護保険料</td>
          <td>{data.longTermCarePremium.toLocaleString()}</td>
        </tr>
        <tr>
          <td>雇用保険料</td>
          <td>{data.employmentInsurancePremium.toLocaleString()}</td>
        </tr>
        <tr>
          <td>社会保険料計</td>
          <td>{totalInsurancePremium.toLocaleString()}</td>
        </tr>
        <tr>
          <td>所得税</td>
          <td>{data.incomeTax.toLocaleString()}</td>
        </tr>
        <tr>
          <td>住民税</td>
          <td>{data.inhabitantTax.toLocaleString()}</td>
        </tr>
        <tr>
          <td>事業税</td>
          <td>{data.enterpriseTax.toLocaleString()}</td>
        </tr>
        <TotalRow>
          <td>税金計</td>
          <td>{totalTax.toLocaleString()}</td>
        </TotalRow>
      </tbody>
    </Table>
  );
};

// サンプルデータ
const sampleData = {
  incomeDeduction: 1000000,
  basicDeduction: 196000,
  nationalPensionPremium: 20000,
  nationalHealthInsurancePremium: 60000,
  longTermCarePremium: 7826,
  employmentInsurancePremium: 10000,
  incomeTax: 295878468,
  inhabitantTax: 1512,
  enterpriseTax: 0,
  totalTax: 295879980,
};

// 使用例
const App: React.FC = () => {
  return (
    <div>
      <h1>所得税計算フォーム</h1>
      <TaxForm data={sampleData} />
    </div>
  );
};

export default App;