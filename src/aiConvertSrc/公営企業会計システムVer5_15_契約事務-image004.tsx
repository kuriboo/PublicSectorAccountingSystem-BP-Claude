import React from 'react';
import styled from 'styled-components';

interface LoanSummaryProps {
  principal: number;
  completionMoney: number;
  selfMoney: number;
  annualInterestRate: number;
  loanPeriod: number;
  businessYears: number;
}

const LoanSummary: React.FC<LoanSummaryProps> = ({
  principal,
  completionMoney,
  selfMoney,
  annualInterestRate,
  loanPeriod,
  businessYears,
}) => {
  // Format numbers with comma separator
  const formatNumber = (num: number) => {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  };

  return (
    <Container>
      <Title>経営状況</Title>
      <Row>
        <Label>資本金</Label>
        <Value>{formatNumber(principal)}千円</Value>
      </Row>
      <Row>
        <Label>完成高</Label>
        <Value>{formatNumber(completionMoney)}千円</Value>
      </Row>
      <Row>
        <Label>自己資本額</Label>
        <Value>{formatNumber(selfMoney)}千円</Value>
      </Row>
      <Row>
        <Label>区分別騰貴数</Label>
        <Value>{formatNumber(annualInterestRate)}</Value>
      </Row>
      <Row>
        <Label>経験員数</Label>
        <Value>{formatNumber(loanPeriod)}</Value>
      </Row>
      <Row>
        <Label>営業年数</Label>
        <Value>{formatNumber(businessYears)}</Value>
      </Row>
      <ButtonContainer>
        <Button>OK</Button>
        <Button>クリア</Button>
        <Button>キャンセル</Button>
      </ButtonContainer>
    </Container>
  );
};

// Styled components
const Container = styled.div`
  font-family: Arial, sans-serif;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #f9f9f9;
`;

const Title = styled.h2`
  margin-bottom: 10px;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const Label = styled.div`
  font-weight: bold;
`;

const Value = styled.div``;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`;

const Button = styled.button`
  margin-left: 10px;
  padding: 5px 10px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

// Sample usage
const App: React.FC = () => {
  const loanSummaryData = {
    principal: 100000,
    completionMoney: 200000,
    selfMoney: 100000, 
    annualInterestRate: 12345,
    loanPeriod: 200,
    businessYears: 50,
  };

  return (
    <div>
      <h1>Loan Summary Example</h1>
      <LoanSummary {...loanSummaryData} />
    </div>
  );
};

export default App;