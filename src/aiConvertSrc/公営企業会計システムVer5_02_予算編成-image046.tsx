import React from 'react';
import styled from '@emotion/styled';

type CompanyType = {
  code: string;
  name: string;
};

type ExpenseType = {
  year: number;
  month: number;
  day: number;
  accountTitle: string;
  taxClass: string;
  amount: number;
};

type DailyReportFormProps = {
  date: Date;
  company: CompanyType;
  expenses: ExpenseType[];
  taxRate: number;
  totalAmount: number;
  totalTax: number;
  totalAmountWithTax: number;
};

const DailyReportForm: React.FC<DailyReportFormProps> = ({
  date,
  company,
  expenses,
  taxRate,
  totalAmount,
  totalTax,
  totalAmountWithTax,
}) => {
  // 日付のフォーマット
  const formatDate = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${year}年${month}月${day}日`;
  };

  // 金額のフォーマット
  const formatAmount = (amount: number) => {
    return amount.toLocaleString();
  };

  return (
    <Container>
      <Header>
        <Title>当初科目別査定登録</Title>
        <TaxInfo>
          <p>行政市水道事業会計</p>
          <p>予算権限 予算権限 行政 花子</p>
          <p>令和05年11月22日</p>
          <p>（単位：千円）</p>
        </TaxInfo>
      </Header>
      <CompanyInfo>
        <p>令和0{date.getFullYear() - 2018}年度</p>
        <p>{company.code}</p>
        <p>{company.name}</p>
      </CompanyInfo>
      <SummaryTable>
        <tbody>
          <tr>
            <th>節</th>
            <th>前年度</th>
            <th>税抜</th>
            <th>消費税</th>
            <th>税込</th>
          </tr>
          <tr>
            <td>賃金</td>
            <td>{formatAmount(15000)}</td>
            <td>{formatAmount(15000)}</td>
          </tr>
          <tr>
            <td>需用費</td>
            <td>{formatAmount(13637)}</td>
            <td>{formatAmount(13637)}</td>  
          </tr>
          <tr>
            <td>消費税</td>
            <td>{formatAmount(1363)}</td>
            <td>{formatAmount(1363)}</td>
          </tr>
          <tr>
            <td>比較</td>
            <td>{formatAmount(15000)}</td>
            <td>{formatAmount(15000)}</td>
          </tr>
        </tbody>
      </SummaryTable>
      <TotalTable>
        <tbody>
          <tr>
            <th>税抜合計</th>
            <td>{formatAmount(totalAmount)}</td>
          </tr>
          <tr>
            <th>消費税額</th>
            <td>{formatAmount(totalTax)}</td>
          </tr>
          <tr>
            <th>税込合計</th>
            <td>{formatAmount(totalAmountWithTax)}</td>  
          </tr>
        </tbody>
      </TotalTable>
      <ExpensesTable>
        <thead>
          <tr>
            <th>行番号</th>  
            <th>積算基礎</th>
            <th>単価/数量</th>
            <th>単位</th>
            <th>金額(円)</th>
            <th>積算</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{expense.accountTitle}</td>
              <td>{expense.amount > 0 ? '*' : ''}</td>
              <td>{formatAmount(Math.abs(expense.amount))}</td>
              <td>{expense.taxClass === '課税' ? '課' : '非'}</td>
            </tr>
          ))}
        </tbody>
      </ExpensesTable>
    </Container>
  );
};

// サンプルデータ
const sampleData: DailyReportFormProps = {
  date: new Date(2023, 10, 22),
  company: {
    code: '001',
    name: '㈱電気工作物完成図',  
  },
  expenses: [
    { year: 2023, month: 10, day: 1, accountTitle: '10 6年度当初予算', taxClass: '課税', amount: 300000 },
    { year: 2023, month: 10, day: 20, accountTitle: '令和6年度当初予算査定', taxClass: '課税', amount: 300000 },
    { year: 2023, month: 10, day: 20, accountTitle: '', taxClass: '非課税', amount: -50000 },
  ],
  taxRate: 0.1,
  totalAmount: 13636364,
  totalTax: 1363636,  
  totalAmountWithTax: 15000000,
};

// サンプル表示用コンポーネント
const SampleDailyReportForm: React.FC = () => {
  return <DailyReportForm {...sampleData} />;  
};

const Container = styled.div`
  font-family: sans-serif;
  background: #f9f9f9;
  padding: 20px;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;  
`;

const Title = styled.h2`
  font-size: 24px;
  margin: 0;
`;

const TaxInfo = styled.div`
  text-align: right;
  & > p {
    margin: 0;
    font-size: 14px;  
  }
`;

const CompanyInfo = styled.div`
  margin-bottom: 10px;
  & > p {
    margin: 0;
  }  
`;

const SummaryTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
  
  th, td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: center;
  }
  
  th {
    background: #f2f2f2; 
  }
`;

const TotalTable = styled.table`
  margin: 10px 0;

  th, td {
    padding: 5px;  
  }
  
  th {
    text-align: left;
  }
  
  td {
    text-align: right; 
  }
`;

const ExpensesTable = styled.table`
  width: 100%;
  border-collapse: collapse;

  th, td {
    border: 1px solid #ccc;
    padding: 8px;  
  }
  
  th {
    background: #f2f2f2;
  }
  
  td {
    text-align: center;  
  }
`;

export default SampleDailyReportForm;