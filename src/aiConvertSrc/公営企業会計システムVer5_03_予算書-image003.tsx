import React from 'react';
import styled from '@emotion/styled';

type DateRange = {
  fromDate: string;
  toDate: string;
};

type TaxDisplayType = '日' | '月' | '細節' | '明細';

type Expense = {
  category: string;
  amount: number;
  taxAmount: number;
};

type ExpenseSummaryProps = {
  dateRange: DateRange;
  taxDisplayType: TaxDisplayType;
  expenses: Expense[];
};

const Container = styled.div`
  font-family: Arial, sans-serif;
  max-width: 600px;
  margin: 0 auto;
`;

const DateRangeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const ExpensesContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ExpenseItem = styled.div`
  flex: 1;
  text-align: right;
  padding: 0 10px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 5px 10px;
  margin-left: 10px;
`;

const ExpenseSummary: React.FC<ExpenseSummaryProps> = ({ dateRange, taxDisplayType, expenses }) => {
  // Display tax type label
  const displayTaxType = (type: TaxDisplayType) => {
    switch (type) {
      case '日':
        return '日';
      case '月':
        return '月';
      case '細節':
        return '細節';
      case '明細':
        return '明細';
      default:
        return '';
    }
  };

  // Calculate total amount and tax amount
  const totalAmount = expenses.reduce((sum, expense) => sum + expense.amount, 0);
  const totalTaxAmount = expenses.reduce((sum, expense) => sum + expense.taxAmount, 0);

  return (
    <Container>
      <h2>科目名称表示レベル</h2>
      {displayTaxType(taxDisplayType)}
      
      <DateRangeContainer>
        <div>
          <div>借方科目</div>
          <div>{dateRange.fromDate}</div>
        </div>
        <div>
          <div>貸方科目</div>
          <div>{dateRange.toDate}</div>
        </div>
      </DateRangeContainer>

      <ExpensesContainer>
        <ExpenseItem>
          <div>税抜金額</div>
          <div>{totalAmount} 円</div>
        </ExpenseItem>
        <ExpenseItem>
          <div>消費税額</div>
          <div>{totalTaxAmount} 円</div>
        </ExpenseItem>
      </ExpensesContainer>
      
      <ButtonContainer>
        <Button>OK</Button>
        <Button>クリア</Button>
        <Button>キャンセル</Button>
      </ButtonContainer>
    </Container>
  );
};

// Sample usage
const App: React.FC = () => {
  const sampleData: ExpenseSummaryProps = {
    dateRange: {
      fromDate: '052020101000110001',
      toDate: '001010101000110001',
    },
    taxDisplayType: '日',
    expenses: [
      { category: '税抜金額', amount: 145100, taxAmount: 0 },
      { category: '消費税額', amount: 91400, taxAmount: 0 },
    ],
  };

  return (
    <div>
      <h1>Example Expense Summary</h1>
      <ExpenseSummary {...sampleData} />
    </div>
  );
};

export default App;