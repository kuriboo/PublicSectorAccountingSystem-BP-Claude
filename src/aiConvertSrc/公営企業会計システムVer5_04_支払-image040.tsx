import React from 'react';
import styled from '@emotion/styled';

type FormData = {
  予算科目: string;
  予算節: string;
  予算細節: string;
  予算明細: string;
  税区分: '課税' | '非課税';
  収入区分: '課税' | '非課税';
};

type BudgetData = {
  節: string;
  予算総額: number;
  負担累計: number;
  負担残額: number;
  予定累計: number;
  予定残額: number;
};

type ExpenseSummary = {
  負担残額: number;
  決定金額: number;
  消費税額: number;
};

type Props = {
  formData: FormData;
  budgetData: BudgetData;
  expenseSummary: ExpenseSummary;
  onOK: () => void;
  onClear: () => void;
  onCancel: () => void;
};

const PreviewExpenseForm: React.FC<Props> = ({
  formData,
  budgetData,
  expenseSummary,
  onOK,
  onClear,
  onCancel,
}) => {
  return (
    <Container>
      <HeaderRow>
        <HeaderTitle>予算科目(支払・見積)</HeaderTitle>
      </HeaderRow>

      <FormRow>
        <FormLabel>予算科目</FormLabel>
        <FormValue>{formData.予算科目}</FormValue>

        <FormLabel>予算節</FormLabel>
        <FormValue>{formData.予算節}</FormValue>

        <FormLabel>予算細節</FormLabel>
        <FormValue>{formData.予算細節}</FormValue>
        
        <FormLabel>予算明細</FormLabel>
        <FormValue>{formData.予算明細}</FormValue>
      </FormRow>

      <FormRow>
        <FormLabel>税区分</FormLabel>
        <FormValue>{formData.税区分}</FormValue>

        <FormLabel>収入区分</FormLabel>  
        <FormValue>{formData.収入区分}</FormValue>
      </FormRow>

      <HeaderRow>
        <HeaderTitle>予算残情報</HeaderTitle>
      </HeaderRow>

      <BudgetDataRow>
        <BudgetLabel>節</BudgetLabel>
        <BudgetValue>{budgetData.節}</BudgetValue>
      </BudgetDataRow>

      <BudgetDataRow>
        <BudgetLabel>予算総額</BudgetLabel>
        <BudgetValue>{budgetData.予算総額.toLocaleString()}</BudgetValue>

        <BudgetLabel>負担累計</BudgetLabel>
        <BudgetValue>{budgetData.負担累計.toLocaleString()}</BudgetValue>

        <BudgetLabel>負担残額</BudgetLabel>  
        <BudgetValue>{budgetData.負担残額.toLocaleString()}</BudgetValue>
      </BudgetDataRow>

      <BudgetDataRow>
        <BudgetLabel>予定累計</BudgetLabel>
        <BudgetValue>{budgetData.予定累計.toLocaleString()}</BudgetValue>

        <BudgetLabel>予定残額</BudgetLabel>
        <BudgetValue>{budgetData.予定残額.toLocaleString()}</BudgetValue>
      </BudgetDataRow>

      <HeaderRow>
        <HeaderTitle>消費税率</HeaderTitle>
        <HeaderValue>10.00%</HeaderValue>
      </HeaderRow>

      <ExpenseSummaryTable>
        <tbody>
          <tr>
            <ExpenseSummaryHeader></ExpenseSummaryHeader>
            <ExpenseSummaryHeader>決定金額</ExpenseSummaryHeader>
            <ExpenseSummaryHeader>消費税額</ExpenseSummaryHeader>
          </tr>
          <tr>
            <ExpenseSummaryLabel>負担残額</ExpenseSummaryLabel>
            <ExpenseSummaryValue>{expenseSummary.決定金額.toLocaleString()}</ExpenseSummaryValue>
            <ExpenseSummaryValue>{expenseSummary.消費税額.toLocaleString()}</ExpenseSummaryValue>
          </tr>
          <tr>
            <ExpenseSummaryLabel>決定額</ExpenseSummaryLabel>
            <ExpenseSummaryValue>{expenseSummary.決定金額.toLocaleString()}</ExpenseSummaryValue>
            <ExpenseSummaryValue>{expenseSummary.消費税額.toLocaleString()}</ExpenseSummaryValue>
          </tr>
        </tbody>
      </ExpenseSummaryTable>
      
      <ButtonRow>
        <ActionButton onClick={onOK}>OK</ActionButton>
        <ActionButton onClick={onClear}>クリア</ActionButton>
        <ActionButton onClick={onCancel}>キャンセル</ActionButton>
      </ButtonRow>
    </Container>
  );
};

// Styled components
const Container = styled.div`
  font-family: sans-serif;
  padding: 16px;
  width: 400px;
`;

const HeaderRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ccc;
  padding: 4px;
`;

const HeaderTitle = styled.div`
  font-weight: bold;
`;

const HeaderValue = styled.div`
  margin-left: 8px;
`;

const FormRow = styled.div`
  display: grid;
  grid-template-columns: 100px 1fr;
  gap: 8px;
  padding: 4px;
`;

const FormLabel = styled.div`
  text-align: right;
`;

const FormValue = styled.div`
  border: 1px solid #ccc;
  padding: 2px;
`;

const BudgetDataRow = styled.div`
  display: grid;  
  grid-template-columns: 100px 100px 100px 100px;
  gap: 8px;
  padding: 4px;
`;

const BudgetLabel = styled.div`
  text-align: right;
`;

const BudgetValue = styled.div`
  text-align: right;
`;

const ExpenseSummaryTable = styled.table`
  width: 100%;
  margin-top: 8px;
  border-collapse: collapse;

  td {
    padding: 4px;
    border: 1px solid #ccc;
  }
`;

const ExpenseSummaryHeader = styled.td`
  background-color: #f0f0f0;
  text-align: center;
`;

const ExpenseSummaryLabel = styled.td`
  text-align: left;
`;

const ExpenseSummaryValue = styled.td`
  text-align: right;
`;

const ButtonRow = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 16px;
  gap: 8px;
`;

const ActionButton = styled.button`
  padding: 4px 16px;
`;

// Sample usage
const App: React.FC = () => {
  const handleOK = () => {
    console.log('OK clicked');
  };

  const handleClear = () => {
    console.log('Clear clicked');
  };

  const handleCancel = () => {
    console.log('Cancel clicked');
  };

  // Sample data  
  const formData: FormData = {
    予算科目: '004010328',
    予算節: '0009',
    予算細節: '0010',
    予算明細: '',
    税区分: '課税',
    収入区分: '課税',
  };

  const budgetData: BudgetData = {
    節: '前改・工事請負費',
    予算総額: 229190000,
    負担累計: 1100000,
    負担残額: 228090000,
    予定累計: 0,
    予定残額: 228090000,
  };

  const expenseSummary: ExpenseSummary = {
    負担残額: 1100000, 
    決定金額: 1000000,
    消費税額: 100000,
  };

  return (
    <PreviewExpenseForm
      formData={formData}
      budgetData={budgetData}
      expenseSummary={expenseSummary}
      onOK={handleOK}
      onClear={handleClear}
      onCancel={handleCancel}
    />
  );
};

export default App;