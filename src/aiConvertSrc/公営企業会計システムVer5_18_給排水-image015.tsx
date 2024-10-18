import React from 'react';
import styled from 'styled-components';

type PaySlipProps = {
  companyName: string;
  employeeName: string;
  employeeNumber: string;
  paymentDate: string;
  workingDays: number;
  basicSalary: number;
  overtimePay: number;
  totalPay: number;
  healthInsurance: number;
  pensionInsurance: number;
  employmentInsurance: number;
  incomeTax: number;
  inhabitantsTax: number;
  totalDeductions: number;
  netPay: number;
  yearMonth: string;
  bankName: string;
  bankBranch: string;
  accountNumber: string;
  accountHolder: string;
};

const PaySlipWrapper = styled.div`
  font-family: Arial, sans-serif;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;

  @media (max-width: 600px) {
    padding: 10px;
  }
`;

const PaySlipTable = styled.table`
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

const PaySlip: React.FC<PaySlipProps> = ({
  companyName,
  employeeName,
  employeeNumber,
  paymentDate,
  workingDays,
  basicSalary,
  overtimePay,
  totalPay,
  healthInsurance,
  pensionInsurance,
  employmentInsurance,
  incomeTax,
  inhabitantsTax,
  totalDeductions,
  netPay,
  yearMonth,
  bankName,
  bankBranch,
  accountNumber,
  accountHolder,
}) => {
  return (
    <PaySlipWrapper>
      <h2>給与明細書</h2>
      <PaySlipTable>
        <tbody>
          <tr>
            <th>会社名</th>
            <td>{companyName || '-'}</td>
            <th>氏名</th>
            <td>{employeeName || '-'}</td>
            <th>社員番号</th>
            <td>{employeeNumber || '-'}</td>
          </tr>
          <tr>
            <th>支払年月日</th>
            <td>{paymentDate || '-'}</td>
            <th>就業日数</th>
            <td>{workingDays || '-'}</td>
            <th></th>
            <td></td>
          </tr>
        </tbody>
      </PaySlipTable>

      <PaySlipTable>
        <thead>
          <tr>
            <th>項目</th>
            <th>金額</th>
            <th>項目</th>
            <th>金額</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>基本給</td>
            <td>{basicSalary?.toLocaleString() || '-'}</td>
            <td>健康保険料</td>
            <td>{healthInsurance?.toLocaleString() || '-'}</td>
          </tr>
          <tr>
            <td>残業手当</td>
            <td>{overtimePay?.toLocaleString() || '-'}</td>
            <td>厚生年金保険料</td>
            <td>{pensionInsurance?.toLocaleString() || '-'}</td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td>雇用保険料</td>
            <td>{employmentInsurance?.toLocaleString() || '-'}</td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td>所得税</td>
            <td>{incomeTax?.toLocaleString() || '-'}</td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td>住民税</td>
            <td>{inhabitantsTax?.toLocaleString() || '-'}</td>
          </tr>
          <tr>
            <th>合計支給額</th>
            <th>{totalPay?.toLocaleString() || '-'}</th>
            <th>合計控除額</th>
            <th>{totalDeductions?.toLocaleString() || '-'}</th>
          </tr>
        </tbody>
      </PaySlipTable>
      
      <PaySlipTable>
        <tbody>
          <tr>
            <th>差引支給額</th>
            <td colSpan={3}>{netPay?.toLocaleString() || '-'}</td>
          </tr>
        </tbody>  
      </PaySlipTable>

      <PaySlipTable>
        <tbody>
          <tr>
            <th>振込口座</th>
            <td>
              {bankName || '-'} {bankBranch || '-'}<br />
              {accountNumber || '-'}<br /> 
              {accountHolder || '-'}
            </td>
          </tr>
        </tbody>
      </PaySlipTable>
    </PaySlipWrapper>
  );
};

// サンプルデータを用いた使用例
const SamplePaySlip = () => {
  const sampleData: PaySlipProps = {
    companyName: '株式会社サンプル',
    employeeName: '山田太郎',
    employeeNumber: '123456',
    paymentDate: '2023年6月25日',
    workingDays: 20,
    basicSalary: 200000,
    overtimePay: 20000,
    totalPay: 220000,
    healthInsurance: 10000,
    pensionInsurance: 15000,
    employmentInsurance: 1000,
    incomeTax: 5000,
    inhabitantsTax: 6000,
    totalDeductions: 37000,
    netPay: 183000,
    yearMonth: '2023年6月',
    bankName: 'サンプル銀行',
    bankBranch: 'サンプル支店',
    accountNumber: '1234567',
    accountHolder: '山田太郎',
  };

  return <PaySlip {...sampleData} />;
};

export default SamplePaySlip;