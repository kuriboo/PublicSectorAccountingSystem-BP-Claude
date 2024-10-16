import React from 'react';
import styled from '@emotion/styled';

// 明細行のデータ型定義
type DetailRowData = {
  title: string;
  incomeAndExpense: number;
  total: number;
  percentage: number;
};

// 消費税レポートコンポーネントのプロパティ型定義
type ConsumptionTaxReportProps = {
  date: string;
  department: string;
  detailRows: DetailRowData[];
  totalIncome: number;
  totalExpense: number;
  taxAmount: number;
  totalAmount: number;
};

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

  tr:nth-of-type(even) {
    background-color: #f9f9f9;
  }
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 16px;
`;

const Footer = styled.div`
  margin-top: 16px;
  display: flex;
  justify-content: space-between;
`;

const FooterItem = styled.div`
  font-weight: bold;
`;

// 消費税レポートコンポーネント
const ConsumptionTaxReport: React.FC<ConsumptionTaxReportProps> = ({
  date,
  department,
  detailRows,
  totalIncome,
  totalExpense,
  taxAmount,
  totalAmount,
}) => {
  return (
    <div>
      <Title>消費税計算明細書</Title>
      <div>（平成27年4月1日から平成28年3月31日まで）</div>
      <div>提出期限：{date}</div>
      <div>事業者名：{department}</div>

      <Table>
        <thead>
          <tr>
            <th>摘要/細目</th>
            <th>金額</th>
            <th>消費税等</th>
            <th>税込金額</th>
            <th>備考</th>
          </tr>
        </thead>
        <tbody>
          {detailRows.map((row, index) => (
            <tr key={index}>
              <td>{row.title}</td>
              <td>{row.incomeAndExpense.toLocaleString()}</td>
              <td>{row.total.toLocaleString()}</td>
              <td>{row.percentage.toLocaleString()}</td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Footer>
        <FooterItem>売上計：{totalIncome.toLocaleString()}</FooterItem>
        <FooterItem>仕入計：{totalExpense.toLocaleString()}</FooterItem>
        <FooterItem>差引税額：{taxAmount.toLocaleString()}</FooterItem>
        <FooterItem>合計金額：{totalAmount.toLocaleString()}</FooterItem>
      </Footer>
    </div>
  );
};

export default ConsumptionTaxReport;

// 使用例
const sampleData: ConsumptionTaxReportProps = {
  date: '2016/03/25',
  department: '㈱田中商事',
  detailRows: [
    {
      title: '課税売上(8%)',
      incomeAndExpense: 47106190, 
      total: 3524463,
      percentage: 50630653,
    },
    {
      title: '課税仕入(8%)',
      incomeAndExpense: 28043249,  
      total: 2099243,
      percentage: 30142492,
    },
  ],
  totalIncome: 2030111070,
  totalExpense: 93006943,  
  taxAmount: 1937104127,
  totalAmount: 291653781,
};

const ConsumptionTaxReportSample = () => {
  return <ConsumptionTaxReport {...sampleData} />;  
};