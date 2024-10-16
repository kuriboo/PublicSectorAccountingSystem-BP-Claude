import React from 'react';
import styled from '@emotion/styled';

type ConsumptionTaxReportProps = {
  data: {
    date: string;
    salesIncludingTax: number;
    taxFreeOrIncluded: number;
    salesExcludingTax: number;
    taxableAmount: number;
    consumptionTax: number;
    taxRate: number;
    supplyPrice: number;
    totalInputTax: number;
    initialAdjustment: number;
    interimPaymentsSales: number;
    interimPaymentsTaxable: number;
    interimPaymentsTax: number;
    finalTaxPayment: number;
  }[];
};

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 12px;

  th, td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: right;
  }

  th {
    background-color: #f2f2f2;
  }

  @media (max-width: 600px) {
    font-size: 10px;
  }
`;

const ConsumptionTaxReport: React.FC<ConsumptionTaxReportProps> = ({ data }) => {
  // 空のデータの場合の処理
  if (!data || data.length === 0) {
    return <div>データがありません。</div>;
  }

  return (
    <Table>
      <thead>
        <tr>
          <th>年月日</th>
          <th>税込対価の額</th>
          <th>返還等対価に係る税額</th>
          <th>税抜金額</th>
          <th>課税標準額</th>
          <th>税率</th>
          <th>売上に係る消費税額</th>
          <th>仕入に係る消費税額</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            <td>{row.date}</td>
            <td>{row.salesIncludingTax.toLocaleString()}</td>
            <td>{row.taxFreeOrIncluded.toLocaleString()}</td>
            <td>{row.salesExcludingTax.toLocaleString()}</td>
            <td>{row.taxableAmount.toLocaleString()}</td>
            <td>{row.taxRate}%</td>
            <td>{row.consumptionTax.toLocaleString()}</td>
            <td>{row.totalInputTax.toLocaleString()}</td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <th>合計</th>
          <td>{data.reduce((sum, row) => sum + row.salesIncludingTax, 0).toLocaleString()}</td>
          <td>{data.reduce((sum, row) => sum + row.taxFreeOrIncluded, 0).toLocaleString()}</td>
          <td>{data.reduce((sum, row) => sum + row.salesExcludingTax, 0).toLocaleString()}</td>
          <td>{data.reduce((sum, row) => sum + row.taxableAmount, 0).toLocaleString()}</td>
          <td></td>
          <td>{data.reduce((sum, row) => sum + row.consumptionTax, 0).toLocaleString()}</td>
          <td>{data.reduce((sum, row) => sum + row.totalInputTax, 0).toLocaleString()}</td>
        </tr>
      </tfoot>
    </Table>
  );
};

// 使用例
const sampleData = [
  {
    date: '2022/01/01',
    salesIncludingTax: 1000000,
    taxFreeOrIncluded: 0,
    salesExcludingTax: 909091,
    taxableAmount: 909091,
    consumptionTax: 90909,
    taxRate: 10,
    supplyPrice: 1000000,
    totalInputTax: 50000,
    initialAdjustment: 0,
    interimPaymentsSales: 0,
    interimPaymentsTaxable: 0,
    interimPaymentsTax: 0,
    finalTaxPayment: 40909,
  },
  // ...
];

const App: React.FC = () => {
  return (
    <div>
      <h1>消費税計算明細書</h1>
      <ConsumptionTaxReport data={sampleData} />
    </div>
  );
};

export default App;