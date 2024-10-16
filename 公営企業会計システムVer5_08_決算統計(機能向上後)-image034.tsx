import React from 'react';
import styled from '@emotion/styled';

type Props = {
  data: {
    date: string;
    debitCode: string;
    debitName: string;
    setCode: string;
    setName: string;
    taxRate: number;
    debitAmount: number;
    consumptionTax: number;
    totalAmount: number;
    usageRate: number;
  }[];
  totalDebitAmount: number;
  totalConsumptionTax: number;
  totalAmount: number;
};

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  
  th, td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: right;
  }

  th {
    background-color: #f2f2f2;
  }
`;

const TotalRow = styled.tr`
  font-weight: bold;
`;

const CheckboxContainer = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
`;

const Checkbox = styled.input`
  margin-right: 5px;
`;

const DebitSummary: React.FC<Props> = ({ data, totalDebitAmount, totalConsumptionTax, totalAmount }) => {
  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>事業</th>
            <th>振替コード</th>
            <th>振替名</th>
            <th>性質コード</th>
            <th>性質名</th>
            <th>消費税税率区分ｺｰﾄﾞ</th>
            <th>税抜額</th>
            <th>消費税額</th>
            <th>税込額</th>
            <th>構成比率(%)</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>公共下水道使用料</td>
              <td>{row.debitCode}</td>
              <td>{row.debitName}</td>
              <td>{row.setCode}</td>
              <td>{row.setName}</td>
              <td>{row.taxRate}</td>
              <td>{row.debitAmount.toLocaleString()}</td>
              <td>{row.consumptionTax.toLocaleString()}</td>
              <td>{row.totalAmount.toLocaleString()}</td>
              <td>{row.usageRate.toFixed(5)}</td>
            </tr>
          ))}
          <TotalRow>
            <td colSpan={6}>合計</td>
            <td>{totalDebitAmount.toLocaleString()}</td>
            <td>{totalConsumptionTax.toLocaleString()}</td>
            <td>{totalAmount.toLocaleString()}</td>
            <td>100.000</td>
          </TotalRow>
        </tbody>
      </Table>
      <CheckboxContainer>
        <Checkbox type="checkbox" id="addData" />
        <label htmlFor="addData">このデータを確認済みにする</label>
      </CheckboxContainer>
      <CheckboxContainer>
        <Checkbox type="checkbox" id="import" />
        <label htmlFor="import">入力した構成比率を科目別振替仕訳マスタに更新する</label>
      </CheckboxContainer>
    </div>
  );
};

// Usage example
const sampleData = [
  {
    date: '2022年4月',
    debitCode: '1710100010010',
    debitName: '下水道使用料',
    setCode: '',
    setName: '',
    taxRate: 10,
    debitAmount: 107840,
    consumptionTax: 10783,
    totalAmount: 118623,
    usageRate: 100
  }
];

const DebitSummaryExample: React.FC = () => {
  return (
    <DebitSummary
      data={sampleData}
      totalDebitAmount={107840} 
      totalConsumptionTax={10783}
      totalAmount={118623}
    />
  );
}

export default DebitSummary;