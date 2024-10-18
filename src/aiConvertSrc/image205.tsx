import React from 'react';
import styled from '@emotion/styled';

// Define types for component props
interface SalaryStatementProps {
  date: string;
  employee: string;
  employeeNumber: string;
  baseSalary: number;
  monthlyAllowance: number;
  totalSalary: number;
  incomeTax: number;
  pensionInsurance: number;
  healthInsurance: number;
  employmentInsurance: number;
  totalDeductions: number;
  takeHomePay: number;
  companyName: string;
  companyAddress: string;
}

// Styled components
const StatementContainer = styled.div`
  font-family: Arial, sans-serif;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;

  @media (max-width: 600px) {
    padding: 10px;
  }
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;

  th, td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: left;
  }

  th {
    background-color: #f0f0f0;
  }
`;

const CompanyInfo = styled.div`
  margin-top: 40px;
  text-align: right;
`;

// Main component
const SalaryStatement: React.FC<SalaryStatementProps> = ({
  date,
  employee,
  employeeNumber,
  baseSalary,
  monthlyAllowance,
  totalSalary,
  incomeTax,
  pensionInsurance,
  healthInsurance, 
  employmentInsurance,
  totalDeductions,
  takeHomePay,
  companyName,
  companyAddress,
}) => {
  return (
    <StatementContainer>
      <Title>給与・賞与明細</Title>
      <Table>
        <tbody>
          <tr>
            <th>種別</th>
            <td>給与明細書</td>
            <th>調定起算日</th>
            <td>{date}</td>
          </tr>
          <tr>
            <th>氏名</th>
            <td>{employee}</td>
            <th>社員番号</th>
            <td>{employeeNumber}</td>
          </tr>
          <tr>
            <th>基準所属</th>
            <td>最新機械</td>
            <th>仕訳区分</th>
            <td></td>
          </tr>
        </tbody>
      </Table>

      <Table>
        <tbody>
          <tr>
            <th>支給項目</th>
            <th>金額</th>
          </tr>
          <tr>
            <td>基本給</td>
            <td>¥{baseSalary.toLocaleString()}</td>
          </tr>
          <tr>
            <td>月額手当</td>
            <td>¥{monthlyAllowance.toLocaleString()}</td>
          </tr>
          <tr>
            <th>合計支給額</th>
            <th>¥{totalSalary.toLocaleString()}</th>
          </tr>
        </tbody>
      </Table>

      <Table>
        <tbody>
          <tr>
            <th>控除項目</th>
            <th>金額</th>
          </tr>
          <tr>
            <td>所得税</td>
            <td>¥{incomeTax.toLocaleString()}</td>
          </tr>
          <tr>
            <td>厚生年金</td>
            <td>¥{pensionInsurance.toLocaleString()}</td>
          </tr>
          <tr>
            <td>健康保険</td>
            <td>¥{healthInsurance.toLocaleString()}</td>
          </tr>
          <tr>
            <td>雇用保険</td>
            <td>¥{employmentInsurance.toLocaleString()}</td>
          </tr>
          <tr>
            <th>合計控除額</th>
            <th>¥{totalDeductions.toLocaleString()}</th>
          </tr>
        </tbody>
      </Table>

      <p>差引支給額: ¥{takeHomePay.toLocaleString()}</p>

      <CompanyInfo>
        {companyName}<br />
        {companyAddress}
      </CompanyInfo>
    </StatementContainer>
  );
};

// Sample usage
const SampleSalaryStatement: React.FC = () => {
  const sampleData: SalaryStatementProps = {
    date: '令和2年9月分',
    employee: '給水 管等修理工事収入',
    employeeNumber: '0000000000',
    baseSalary: 536800,
    monthlyAllowance: 48600,
    totalSalary: 585400,
    incomeTax: 48600,
    pensionInsurance: 0,
    healthInsurance: 0,
    employmentInsurance: 0,
    totalDeductions: 48600,
    takeHomePay: 536800,
    companyName: '鈴水管等修理工事収入',
    companyAddress: '最新機械',
  };

  return <SalaryStatement {...sampleData} />;
};

export default SampleSalaryStatement;