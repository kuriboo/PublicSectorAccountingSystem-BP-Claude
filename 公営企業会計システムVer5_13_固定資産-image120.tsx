import React from 'react';
import styled from '@emotion/styled';

type LegalNoticeApprovalFormProps = {
  fiscalYear: string;
  period: string;
  startYear: string;
  startMonth: string;
  startDay: string;
  endYear: string;
  endMonth: string;
  endDay: string;
  reportTitle: string;
  reportAmount: number;
  fiscalAmount: number;
  budgetTitle: number;
  budgetAmount: number;
  onSubmit: () => void;
  onCancel: () => void;
  onPrint: () => void;
};

const LegalNoticeApprovalForm: React.FC<LegalNoticeApprovalFormProps> = ({
  fiscalYear,
  period,
  startYear,
  startMonth,
  startDay,
  endYear,
  endMonth,
  endDay,
  reportTitle,
  reportAmount,
  fiscalAmount,
  budgetTitle,
  budgetAmount,
  onSubmit,
  onCancel,
  onPrint,
}) => {
  return (
    <Container>
      <Title>法改正対応耐用年数一括処理</Title>
      <Header>
        <HeaderItem>
          <Label>会計年度</Label>
          <Value>{fiscalYear || '-'}</Value>
        </HeaderItem>
        <HeaderItem>
          <Label>予算：会計担当 ぎょうせい太郎</Label>
        </HeaderItem>
        <HeaderItem>
          <Label>平成29年09月12日</Label>
        </HeaderItem>
      </Header>
      <Content>
        <FormGroup>
          <Label>更正年月日</Label>
          <DateInputs>
            <DateInput value={startYear} readOnly />
            <DateInput value={startMonth} readOnly />
            <DateInput value={startDay} readOnly />
          </DateInputs>
          <Label>～</Label>
          <DateInputs>
            <DateInput value={endYear} readOnly />
            <DateInput value={endMonth} readOnly />
            <DateInput value={endDay} readOnly />
          </DateInputs>
        </FormGroup>
        <FormGroup>
          <Label>期間指定</Label>
          <PeriodInput value={period} readOnly />
          <Label>～</Label>
          <PeriodInput value={period} readOnly />
        </FormGroup>
        <FormGroup>
          <Label>報告指定</Label>
          <ReportTitleInput value={reportTitle} readOnly />
          <Label>±他</Label>
          <ReportAmountInput value={reportAmount} readOnly />
        </FormGroup>
        <FormGroup>
          <Label>固定資産科目</Label>
          <FiscalAmountInput value={fiscalAmount} readOnly />
          <Label>±他</Label>
        </FormGroup>
        <FormGroup>
          <Label>資産番号</Label>
          <BudgetTitleInput value={budgetTitle} readOnly />
          <Label>資産番号</Label>
          <BudgetAmountInput value={budgetAmount} readOnly />  
        </FormGroup>
      </Content>
      <Footer>
        <Button onClick={onSubmit}>OK</Button>
        <Button onClick={onCancel}>クリア</Button>
        <Button onClick={onPrint}>終了</Button>
      </Footer>
    </Container>
  );
};

const Container = styled.div`
  padding: 16px;
  background-color: #f0f0f0;
`;

const Title = styled.h2`
  margin: 0 0 16px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
`;

const HeaderItem = styled.div`
  display: flex;
  align-items: center;
`;

const Content = styled.div`
  background-color: white;
  padding: 16px;
`;

const Label = styled.label`
  margin-right: 8px;
`;

const Value = styled.span`
  font-weight: bold;
`;

const FormGroup = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

const DateInputs = styled.div`
  display: flex;
`;

const DateInput = styled.input`
  width: 40px;
  margin-right: 4px;
  text-align: center;
`;

const PeriodInput = styled.input`
  width: 40px;
  margin-right: 4px;
  text-align: center;
`;

const ReportTitleInput = styled.input`
  width: 200px;
  margin-right: 8px;
`;

const ReportAmountInput = styled.input`
  width: 100px;
`;

const FiscalAmountInput = styled.input`
  width: 200px;
  margin-right: 8px;
`;

const BudgetTitleInput = styled.input`
  width: 200px;
  margin-right: 8px;
`;

const BudgetAmountInput = styled.input`
  width: 200px;
`;

const Footer = styled.div`
  margin-top: 16px;
  text-align: right;
`;

const Button = styled.button`
  margin-left: 8px;
`;

// Usage example
const UsageExample: React.FC = () => {
  const handleSubmit = () => {
    // Handle form submission
  };

  const handleCancel = () => {
    // Handle cancellation
  };

  const handlePrint = () => {
    // Handle printing
  };

  return (
    <LegalNoticeApprovalForm
      fiscalYear="令和3年度"
      period="1"
      startYear="3"
      startMonth="4"
      startDay="1" 
      endYear="4"
      endMonth="3"
      endDay="31"
      reportTitle="資産除去債務"
      reportAmount={100000}
      fiscalAmount={1000000}
      budgetTitle={123456}
      budgetAmount={999999999}
      onSubmit={handleSubmit}
      onCancel={handleCancel}
      onPrint={handlePrint}
    />
  );
};

export default LegalNoticeApprovalForm;