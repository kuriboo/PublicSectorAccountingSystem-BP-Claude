import React from 'react';
import styled from '@emotion/styled';

type TaxCalculationTableProps = {
  data: {
    totalIncome: number;
    deductions: {
      basicDeduction: number;
      deduction1: number;
      deduction2: number;
      totalDeductions: number;
    };
    taxableIncome: number;
    taxAmount: {
      nationalTax: number;
      localTax: number;
      totalTax: number;
    };
    netIncome: number;
  };
};

const TaxCalculationTable: React.FC<TaxCalculationTableProps> = ({ data }) => {
  // テーブルのレイアウトを定義
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
    }

    td:first-of-type {
      text-align: left;
    }

    @media screen and (max-width: 600px) {
      font-size: 12px;
    }
  `;

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
          <td>総所得金額</td>
          <td>{data.totalIncome.toLocaleString()}</td>
        </tr>
        <tr>
          <td>所得控除</td>
          <td></td>
        </tr>
        <tr>
          <td>基礎控除</td>
          <td>{data.deductions.basicDeduction.toLocaleString()}</td>
        </tr>
        <tr>
          <td>所得控除①</td>
          <td>{data.deductions.deduction1.toLocaleString()}</td>
        </tr>
        <tr>
          <td>所得控除②</td>
          <td>{data.deductions.deduction2.toLocaleString()}</td>
        </tr>
        <tr>
          <td>所得控除合計</td>
          <td>{data.deductions.totalDeductions.toLocaleString()}</td>
        </tr>
        <tr>
          <td>課税所得金額</td>
          <td>{data.taxableIncome.toLocaleString()}</td>
        </tr>
        <tr>
          <td>所得税額</td>
          <td></td>
        </tr>
        <tr>
          <td>所得税</td>
          <td>{data.taxAmount.nationalTax.toLocaleString()}</td>
        </tr>
        <tr>
          <td>住民税</td>
          <td>{data.taxAmount.localTax.toLocaleString()}</td>
        </tr>
        <tr>
          <td>税額合計</td>
          <td>{data.taxAmount.totalTax.toLocaleString()}</td>
        </tr>
        <tr>
          <td>手取り額</td>
          <td>{data.netIncome.toLocaleString()}</td>
        </tr>
      </tbody>
    </Table>
  );
};

// サンプルデータを用いたコンポーネントの使用例
const SampleTaxCalculation = () => {
  const sampleData = {
    totalIncome: 2090111970,
    deductions: {
      basicDeduction: 420000,
      deduction1: 1000,
      deduction2: 1000,      
      totalDeductions: 93006943,
    },
    taxableIncome: 1997105127,
    taxAmount: {
      nationalTax: 12460,
      localTax: 24100,
      totalTax: 291853751,
    },
    netIncome: 291853751,
  };

  return (
    <div>
      <h2>税額計算明細書</h2>
      <TaxCalculationTable data={sampleData} />
    </div>
  );
};

export default SampleTaxCalculation;