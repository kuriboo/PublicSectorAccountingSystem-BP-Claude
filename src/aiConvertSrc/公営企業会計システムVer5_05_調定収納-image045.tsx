import React from 'react';
import styled from 'styled-components';

type Props = {
  registrationNumber: number;
  registrationDate: string;
  description: string;
  additionalNote: string;
  taxRate: 'taxable' | 'taxExempt' | 'otherAdjustments';
  adjustmentAmount: number;
  totalTaxableAmount: number;
  totalTaxAmount: number;
  netTotal: number;
  items: Array<{
    date: string;
    itemName: string;
    details: string;
    taxType: string;
    amount: number;
    taxAmount: number;
    netAmount: number;
  }>;
};

const Wrapper = styled.div`
  font-family: Arial, sans-serif;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const HeaderItem = styled.div`
  display: flex;
  flex-direction: column;
`;

const Main = styled.div`
  margin-bottom: 20px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;

  th, td {
    border: 1px solid #ccc;
    padding: 5px;
    text-align: left;
  }
`;

const Summary = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const SummaryTable = styled.table`
  margin-left: auto;

  td {
    padding: 5px;
  }
`;

const AdjustmentStatement: React.FC<Props> = ({
  registrationNumber,
  registrationDate,
  description,
  additionalNote,
  taxRate,
  adjustmentAmount,
  totalTaxableAmount,
  totalTaxAmount,
  netTotal,
  items,
}) => {
  return (
    <Wrapper>
      <Header>
        <HeaderItem>
          <div>調整番号: {registrationNumber}</div>
          <div>調整日: {registrationDate}</div>
        </HeaderItem>
        <HeaderItem>
          <div>行政市水道部業会計</div>
          <div>総務課 会計担当 高橋 太郎</div>
          <div>令和04年12月23日</div>
        </HeaderItem>
      </Header>
      <Main>
        <div>摘要: {description}</div>
        <div>納入期限: {additionalNote || '年_月_日'}</div>
        <Table>
          <thead>
            <tr>
              <th>調定科目</th>
              <th>調定細節</th>
              <th>調定明細</th>
              <th>税</th>
              <th>調定金額</th>
              <th>内消費税額</th>
              <th>特定収入</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={index}>
                <td>{item.date}</td>
                <td>{item.itemName}</td>
                <td>{item.details}</td>
                <td>{item.taxType}</td>
                <td>{item.amount.toLocaleString()}</td>
                <td>{item.taxAmount.toLocaleString()}</td>
                <td>{item.netAmount.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Main>
      <Summary>
        <SummaryTable>
          <tbody>
            <tr>
              <td>合計調定金額</td>
              <td>{totalTaxableAmount.toLocaleString()}</td>
            </tr>
            <tr>
              <td>合計消費税額</td>
              <td>{totalTaxAmount.toLocaleString()}</td>
            </tr>
            <tr>
              <td>合計特定収入</td>
              <td>{netTotal.toLocaleString()}</td>
            </tr>
          </tbody>
        </SummaryTable>
      </Summary>
    </Wrapper>
  );
};

// サンプルデータを用いた使用例
const SampleAdjustmentStatement: React.FC = () => {
  const sampleData: Props = {
    registrationNumber: 2,
    registrationDate: '令和05年12月23日',
    description: '給水装置工事加入者分担金 20mm',
    additionalNote: '年_月_日',
    taxRate: 'taxable',
    adjustmentAmount: 0,
    totalTaxableAmount: 33000,
    totalTaxAmount: 3000,
    netTotal: 0,
    items: [
      {
        date: '加入者分担金',
        itemName: '加入者分担金',
        details: '分担金:20mm',
        taxType: '課税',
        amount: 33000,
        taxAmount: 3000,
        netAmount: 0,
      },
    ],
  };

  return <AdjustmentStatement {...sampleData} />;
};

export default SampleAdjustmentStatement;