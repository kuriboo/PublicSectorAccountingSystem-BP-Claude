import React from 'react';
import styled from '@emotion/styled';

// 型定義
type TaxWithholdingSlipProps = {
  company: string;
  period: string;
  name: string;
  mynumber: string;
  basicSalary: number;
  overtime: number;
  nightwork: number;
  holiday: number;
  professionalAllowance: number;
  totalSalary: number;
  dependencyAllowance: number;
  basicDeduction: number;
  insurances: {
    healthInsurance: number;
    nursingCare: number;
    pensionInsurance: number;
    employmentInsurance: number;
  };
  incomeDeduction: number;
  taxableIncome: number;
  incomeTax: number;
  inhabitantTax: number;
  socialInsurances: {
    healthInsurance: number;
    nursingCare: number;
    pensionInsurance: number;
    employmentInsurance: number;
  };
  totalDeduction: number;
  takeHomePay: number;
};

// スタイル定義
const SlipWrapper = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;

  @media (max-width: 600px) {
    padding: 10px;
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  th, td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: center;
  }

  th {
    background-color: #f0f0f0;
  }
`;

// 源泉徴収票コンポーネント
const TaxWithholdingSlip: React.FC<TaxWithholdingSlipProps> = ({
  company,
  period,
  name,
  mynumber,
  basicSalary,
  overtime,
  nightwork,
  holiday,
  professionalAllowance,
  totalSalary,
  dependencyAllowance,
  basicDeduction,
  insurances,
  incomeDeduction,
  taxableIncome,
  incomeTax,
  inhabitantTax,
  socialInsurances,
  totalDeduction,
  takeHomePay,
}) => {
  // 合計支給額を計算
  const calcTotalSalary = (): number => {
    return basicSalary + overtime + nightwork + holiday + professionalAllowance;
  };

  // 課税対象額を計算
  const calcTaxableIncome = (): number => {
    const totalInsurance =
      insurances.healthInsurance +
      insurances.nursingCare +
      insurances.pensionInsurance +
      insurances.employmentInsurance;
    return (
      totalSalary - dependencyAllowance - basicDeduction - totalInsurance - incomeDeduction
    );
  };

  return (
    <SlipWrapper>
      <h2>源泉徴収票</h2>
      <Table>
        <tbody>
          <tr>
            <th>会社名</th>
            <td>{company}</td>
            <th>期間</th>
            <td>{period}</td>
          </tr>
          <tr>
            <th>氏名</th>
            <td>{name}</td>
            <th>マイナンバー</th>
            <td>{mynumber}</td>
          </tr>
          <tr>
            <th>基本給</th>
            <td>{basicSalary.toLocaleString()}円</td>
            <th>残業手当</th>
            <td>{overtime.toLocaleString()}円</td>
          </tr>
          <tr>
            <th>深夜手当</th>
            <td>{nightwork.toLocaleString()}円</td>
            <th>休日手当</th>
            <td>{holiday.toLocaleString()}円</td>
          </tr>
          <tr>
            <th>職能手当</th>
            <td>{professionalAllowance.toLocaleString()}円</td>
            <th>支給合計</th>
            <td>{calcTotalSalary().toLocaleString()}円</td>
          </tr>
          <tr>
            <th>扶養控除</th>
            <td>{dependencyAllowance.toLocaleString()}円</td>
            <th>基礎控除</th>
            <td>{basicDeduction.toLocaleString()}円</td>
          </tr>
          <tr>
            <th>社会保険料</th>
            <td>
              <ul>
                <li>健康保険: {insurances.healthInsurance.toLocaleString()}円</li>
                <li>介護保険: {insurances.nursingCare.toLocaleString()}円</li>
                <li>厚生年金保険: {insurances.pensionInsurance.toLocaleString()}円</li>
                <li>雇用保険: {insurances.employmentInsurance.toLocaleString()}円</li>
              </ul>
            </td>
            <th>その他の控除</th>
            <td>{incomeDeduction.toLocaleString()}円</td>
          </tr>
          <tr>
            <th>課税対象額</th>
            <td>{calcTaxableIncome().toLocaleString()}円</td>
            <th>所得税</th>
            <td>{incomeTax.toLocaleString()}円</td>
          </tr>
          <tr>
            <th>住民税</th>
            <td>{inhabitantTax.toLocaleString()}円</td>
            <th>社会保険料</th>
            <td>
              <ul>
                <li>健康保険料: {socialInsurances.healthInsurance.toLocaleString()}円</li>
                <li>介護保険料: {socialInsurances.nursingCare.toLocaleString()}円</li>
                <li>厚生年金保険料: {socialInsurances.pensionInsurance.toLocaleString()}円</li>
                <li>雇用保険料: {socialInsurances.employmentInsurance.toLocaleString()}円</li>
              </ul>
            </td>
          </tr>  
          <tr>
            <th>控除合計</th>
            <td>{totalDeduction.toLocaleString()}円</td>
            <th>差引支給額</th>
            <td>{takeHomePay.toLocaleString()}円</td>
          </tr>
        </tbody>
      </Table>
    </SlipWrapper>
  );
};

// サンプルデータ
const sampleData: TaxWithholdingSlipProps = {
  company: '株式会社ABC',
  period: '2023年1月',
  name: '山田太郎',
  mynumber: '123456789012',
  basicSalary: 300000,
  overtime: 50000,
  nightwork: 15000,
  holiday: 8000,
  professionalAllowance: 20000,
  totalSalary: 393000,
  dependencyAllowance: 50000,
  basicDeduction: 50000,
  insurances: {
    healthInsurance: 20000,
    nursingCare: 1000,
    pensionInsurance: 30000, 
    employmentInsurance: 1500,
  },
  incomeDeduction: 10000,
  taxableIncome: 230500,
  incomeTax: 13180,
  inhabitantTax: 20000,
  socialInsurances: { 
    healthInsurance: 20000,
    nursingCare: 1000, 
    pensionInsurance: 30000,
    employmentInsurance: 1500,
  },
  totalDeduction: 195680,
  takeHomePay: 197320,
};

// 使用例
const App: React.FC = () => {
  return (
    <div>
      <h1>源泉徴収票サンプル</h1>
      <TaxWithholdingSlip {...sampleData} />
    </div>
  );
};

export default App;