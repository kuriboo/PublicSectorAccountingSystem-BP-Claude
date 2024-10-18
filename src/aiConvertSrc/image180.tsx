import React from 'react';
import styled from 'styled-components';

type LoanData = {
  company: string;
  loanAmount: number;
  loanPeriodStart: string;
  loanPeriodEnd: string;
  monthlyBreakdown: { [key: string]: number };
};

type LoanSummaryProps = {
  data: LoanData;
};

const LoanSummary: React.FC<LoanSummaryProps> = ({ data }) => {
  const {
    company,
    loanAmount,
    loanPeriodStart,
    loanPeriodEnd,
    monthlyBreakdown,
  } = data;

  return (
    <Container>
      <Title>仕訳科目貸借金額</Title>
      <CompanyInfo>
        <Label>会計年度</Label>
        <Value>平成28年度</Value>
      </CompanyInfo>
      <LoanInfo>
        <Label>仕訳節</Label>
        <Value>{loanAmount.toLocaleString()}円</Value>
        <Label>仕訳期間</Label>
        <Value>
          {loanPeriodStart} ~ {loanPeriodEnd}
        </Value>
      </LoanInfo>
      <MonthlyBreakdownContainer>
        <MonthlyBreakdownTitle>月別按分金額</MonthlyBreakdownTitle>
        {Object.entries(monthlyBreakdown).map(([month, amount]) => (
          <MonthlyBreakdownItem key={month}>
            <Month>{month}月</Month>
            <Amount>{amount.toLocaleString()}円</Amount>
          </MonthlyBreakdownItem>
        ))}
      </MonthlyBreakdownContainer>
    </Container>
  );
};

// Styled components
const Container = styled.div`
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 5px;
`;

const Title = styled.h2`
  font-size: 18px;
  margin-bottom: 10px;
`;

const CompanyInfo = styled.div`
  margin-bottom: 10px;
`;

const LoanInfo = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.p`
  font-weight: bold;
  margin-bottom: 5px;
`;

const Value = styled.p`
  margin-bottom: 10px;
`;

const MonthlyBreakdownContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 10px;
`;

const MonthlyBreakdownTitle = styled.h3`
  font-size: 16px;
  grid-column: 1 / -1;
  margin-bottom: 10px;
`;

const MonthlyBreakdownItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Month = styled.span`
  font-weight: bold;
`;

const Amount = styled.span`
  font-size: 14px;
`;

// Sample data
const sampleData: LoanData = {
  company: 'ABC株式会社',
  loanAmount: 1230000,
  loanPeriodStart: '平成28年',
  loanPeriodEnd: '平成30年02月06日',
  monthlyBreakdown: {
    '4': 0,
    '5': 0,
    '6': 0,
    '7': 0,
    '8': 0,
    '9': 0,
    '10': 0,
    '11': 0,
    '12': 0,
    '1': 0,
    '2': 0,
    '3': 0,
  },
};

// Usage example
const App: React.FC = () => {
  return (
    <div>
      <h1>Loan Summary</h1>
      <LoanSummary data={sampleData} />
    </div>
  );
};

export default App;