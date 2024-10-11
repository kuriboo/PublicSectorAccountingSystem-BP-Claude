import React from 'react';
import styled from '@emotion/styled';

interface ProductionSummaryProps {
  department: string;
  fiscalYear: string;
  period: string;
  summaryType: 'monthly' | 'yearly';
  totalAmount: number;
  shippingCost: number;
  materialCost: number;
  expectedProfit: number;
  taxAmount: number;
  annualTaxAmount: number;
  netIncome: number;
  currentFiscalYear: number;
  currentPeriod: number;
  previousPeriod: number;
  employeeSalary: number;
  utilityCost: number;
  totalExpense: number;
  revenue: number;
}

const Container = styled.div`
  font-family: Arial, sans-serif;
  padding: 20px;
  background-color: #f0f0f0;

  @media (max-width: 600px) {
    padding: 10px;
  }
`;

const Title = styled.h2`
  margin-bottom: 20px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;

  th, td {
    padding: 8px;
    border: 1px solid #ccc;
  }

  th {
    background-color: #f0f0f0;
    font-weight: bold;
    text-align: left;
  }
`;

const ProductionSummary: React.FC<ProductionSummaryProps> = ({
  department,
  fiscalYear,
  period,
  summaryType,
  totalAmount,
  shippingCost,
  materialCost,
  expectedProfit,
  taxAmount,
  annualTaxAmount,
  netIncome,
  currentFiscalYear,
  currentPeriod,
  previousPeriod,
  employeeSalary,
  utilityCost,
  totalExpense,
  revenue,
}) => {
  return (
    <Container>
      <Title>生産資金計算</Title>
      <Table>
        <tbody>
          <tr>
            <th>部門</th>
            <td>{department || '---'}</td>
          </tr>
          <tr>
            <th>会計年度</th>
            <td>{fiscalYear || '---'}</td>
          </tr>
          <tr>
            <th>期間</th>
            <td>{period || '---'}</td>
          </tr>
          <tr>
            <th>集計区分</th>
            <td>{summaryType === 'monthly' ? '月次' : '年次'}</td>
          </tr>
        </tbody>
      </Table>

      <Table>
        <tbody>
          <tr>
            <th>現在価額</th>
            <td>{totalAmount.toLocaleString() || 0}</td>
            <th>減価償却累計額</th>
            <td>{shippingCost.toLocaleString() || 0}</td>
            <th>合計</th>
            <td>{(totalAmount + shippingCost).toLocaleString()}</td>
          </tr>
          <tr>
            <th>除却額</th>
            <td>{materialCost.toLocaleString() || 0}</td>
            <th>内直接原価</th>
            <td>{expectedProfit.toLocaleString() || 0}</td>
            <th>内直接経費</th>
            <td>{taxAmount.toLocaleString() || 0}</td>
          </tr>
          <tr>
            <th>除却後の取得価額</th>
            <td colSpan={2}>{netIncome.toLocaleString() || 0}</td>
            <th>除却累計</th>
            <td colSpan={2}>{annualTaxAmount.toLocaleString() || 0}</td>
          </tr>
        </tbody>
      </Table>

      <h3>設備の財源内訳</h3>
      <Table>
        <thead>
          <tr>
            <th>財源内訳</th>
            <th>当期比率</th>
            <th>除却額</th>
            <th>内直接原価累計</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>自己資金</td>
            <td>{currentFiscalYear.toLocaleString() || 0}</td>
            <td>{currentPeriod.toLocaleString() || 0}</td>
            <td>{previousPeriod.toLocaleString() || 0}</td>
          </tr>
          <tr>
            <td>工事負担金</td>
            <td>{employeeSalary.toLocaleString() || 0}</td>
            <td>{utilityCost.toLocaleString() || 0}</td>
            <td>{(employeeSalary + utilityCost).toLocaleString() || 0}</td>
          </tr>
        </tbody>
      </Table>

      <Table>
        <tbody>
          <tr>
            <th>売却額</th>
            <td>{revenue.toLocaleString() || 0}</td>
            <th>現金／収入</th>
            <td>{totalExpense.toLocaleString() || 0}</td>
          </tr>
          <tr>
            <th>除却後帳簿価額</th>
            <td>{netIncome.toLocaleString() || 0}</td>
            <th>減価償却累計額</th>
            <td>{shippingCost.toLocaleString() || 0}</td>
          </tr>
          <tr>
            <th>除却価額</th>
            <td>{materialCost.toLocaleString() || 0}</td>
            <th>借受期限迄補修</th>
            <td>{expectedProfit.toLocaleString() || 0}</td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
};

// Usage example
const App: React.FC = () => {
  return (
    <div>
      <ProductionSummary
        department="部門名"
        fiscalYear="2022年度"
        period="上半期"
        summaryType="monthly"
        totalAmount={720000}
        shippingCost={684000}
        materialCost={36000}
        expectedProfit={20000}
        taxAmount={18000}
        annualTaxAmount={1000}
        netIncome={665000}
        currentFiscalYear={15831}
        currentPeriod={4169}
        previousPeriod={3861}
        employeeSalary={0}
        utilityCost={0}
        totalExpense={0}
        revenue={700000}
      />
    </div>
  );
};

export default App;