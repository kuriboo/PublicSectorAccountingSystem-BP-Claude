import React from 'react';
import styled from '@emotion/styled';

// 型定義
type Tax = {
  division: string;
  amount: number;
};

type Withholding = {
  date: string;
  item: string;
  taxAmount: number;
  rate: number;
  amount: number;
  tax: number;
  totalAmount: number;
};

type Props = {
  totalAmount: number;
  tax: Tax;
  taxAmount: number;
  consumptionTaxAmount: number;
  totalTaxAmount: number;
  totalAmountAfterTax: number;
  totalAmountBeforeTax: number;
  withholdingList: Withholding[];
  otherAmount: number;
};

// スタイル定義
const Container = styled.div`
  font-family: Arial, sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  @media (max-width: 600px) {
    padding: 10px;
  }
`;

const Title = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  @media (max-width: 600px) {
    font-size: 20px;
  }
`;

const SummaryWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 20px;
`;

const SummaryLabel = styled.div`
  font-weight: bold;
`;

const SummaryValue = styled.div`
  text-align: right;
`;

const TableWrapper = styled.div`
  width: 100%;
  overflow-x: auto;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;
  
  th, td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: center;
    white-space: nowrap;
  }

  th {
    background-color: #f2f2f2;
    font-weight: bold;
  }
`;

// メインコンポーネント
const TaxWithholdingTable: React.FC<Props> = ({
  totalAmount,
  tax,
  taxAmount,
  consumptionTaxAmount,
  totalTaxAmount,
  totalAmountAfterTax,
  totalAmountBeforeTax,
  withholdingList,
  otherAmount,
}) => {
  return (
    <Container>
      <Title>源泉徴収</Title>
      <SummaryWrapper>
        <div>
          <SummaryLabel>按分対象人力</SummaryLabel>
          <SummaryValue>
            {tax.division} {tax.amount.toLocaleString()}
          </SummaryValue>
        </div>
        <div>
          <div>
            <SummaryLabel>按分対象額</SummaryLabel>
            <SummaryValue>{totalAmount.toLocaleString()}</SummaryValue>
          </div>
          <div>
            <SummaryLabel>税抜額</SummaryLabel>
            <SummaryValue>{totalAmountBeforeTax.toLocaleString()}</SummaryValue>
          </div>
          <div>
            <SummaryLabel>消費税額</SummaryLabel>
            <SummaryValue>{consumptionTaxAmount.toLocaleString()}</SummaryValue>
          </div>
          <div>
            <SummaryLabel>税額合計</SummaryLabel>
            <SummaryValue>{totalTaxAmount.toLocaleString()}</SummaryValue>
          </div>
          <div>
            <SummaryLabel>税込額</SummaryLabel>
            <SummaryValue>{totalAmountAfterTax.toLocaleString()}</SummaryValue>
          </div>
        </div>
      </SummaryWrapper>
      <TableWrapper>
        <Table>
          <thead>
            <tr>
              <th>科目コード</th>
              <th>科目名称</th>
              <th>構成比率</th>
              <th>税率(%)</th>
              <th>金額</th>
              <th>税抜額</th>
              <th>消費税額</th>
            </tr>
          </thead>
          <tbody>
            {withholdingList.map((item, index) => (
              <tr key={index}>
                <td>{item.date}</td>
                <td>{item.item}</td>
                <td>{item.rate.toFixed(2)}%</td>
                <td>{item.taxAmount} -</td>
                <td>{item.totalAmount.toLocaleString()}</td>
                <td>{item.amount.toLocaleString()}</td>
                <td>{item.tax.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </TableWrapper>
      <div>
        <SummaryLabel>総額</SummaryLabel>
        <SummaryValue>{otherAmount.toLocaleString()}</SummaryValue>
      </div>
    </Container>
  );
};

export default TaxWithholdingTable;

// サンプルデータ
const sampleData: Props = {
  totalAmount: 100000,
  tax: {
    division: '00001',
    amount: 10000,
  },
  taxAmount: 80910,
  consumptionTaxAmount: 9080,
  totalTaxAmount: 90210,
  totalAmountAfterTax: 80215,
  totalAmountBeforeTax: 919785,
  withholdingList: [
    {
      date: '00201011310101001',
      item: '本部/継続品',
      taxAmount: 35.214,
      rate: 10,
      amount: 35214,
      tax: 32013,
      totalAmount: 3201,
    },
    {
      date: '00201011310101002',
      item: '本部/継続品',
      taxAmount: 45.00001,
      rate: 10,
      amount: 45000,
      tax: 40910,
      totalAmount: 4091,
    },
    {
      date: '00201021310101001',
      item: '本部/継続品',
      taxAmount: 19.7855,
      rate: 10,
      amount: 19785,
      tax: 17987,
      totalAmount: 1798,
    },
  ],
  otherAmount: 0,
};

// 表示用コンポーネント
const App: React.FC = () => {
  return (
    <div>
      <h1>源泉徴収表</h1>
      <TaxWithholdingTable {...sampleData} />
    </div>
  );
};

export default App;