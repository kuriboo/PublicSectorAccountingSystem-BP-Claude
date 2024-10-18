import React from 'react';
import styled from 'styled-components';

type LoanDetailProps = {
  companyName: string;
  loanAmount: number;
  interestRate: number;
  annualPayment: number;
  monthlyPayments: number[];
};

const LoanDetail: React.FC<LoanDetailProps> = ({
  companyName,
  loanAmount,
  interestRate,
  annualPayment,
  monthlyPayments,
}) => {
  return (
    <Container>
      <Title>{companyName} 仕訳科目貸借金額</Title>
      <SubTitle>
        <Label>会計年度</Label>
        <Value>平成28</Value>
        <Label>年度</Label>
      </SubTitle>
      <Row>
        <Label>仕訳節</Label>
        <Value>{loanAmount}</Value>
      </Row>
      <Row>
        <Label>仕訳細節</Label>
        <Value>{interestRate}</Value>
      </Row>
      <Row>
        <Label>仕訳明細</Label>
        <Value>{annualPayment}</Value>
      </Row>
      <SubTitle>月別按分金額(円)</SubTitle>
      <Table>
        <thead>
          <tr>
            <th>4月</th>
            <th>5月</th>
            <th>6月</th>
            <th>7月</th>
            <th>8月</th>
            <th>9月</th>
            <th>10月</th>
            <th>11月</th>
            <th>12月</th>
            <th>1月</th>
            <th>2月</th>
            <th>3月</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {monthlyPayments.map((payment, index) => (
              <td key={index}>{payment}</td>
            ))}
          </tr>
        </tbody>
      </Table>
      <ButtonContainer>
        <Button>前データ</Button>
        <Button>次データ</Button>
        <Button primary>OK</Button>
        <Button>クリア</Button>
        <Button primary>終了</Button>
      </ButtonContainer>
    </Container>
  );
};

// Styles
const Container = styled.div`
  font-family: Arial, sans-serif;
  padding: 20px;
`;

const Title = styled.h2`
  margin-bottom: 10px;
`;

const SubTitle = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const Row = styled.div`
  display: flex;
  margin-bottom: 5px;
`;

const Label = styled.span`
  font-weight: bold;
  margin-right: 5px;
`;

const Value = styled.span``;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;

  th,
  td {
    border: 1px solid #ccc;
    padding: 5px;
    text-align: center;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Button = styled.button<{ primary?: boolean }>`
  padding: 5px 10px;
  margin-left: 10px;
  background-color: ${(props) => (props.primary ? '#007bff' : '#f0f0f0')};
  color: ${(props) => (props.primary ? '#fff' : '#000')};
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

// Sample data for demonstration
const sampleData: LoanDetailProps = {
  companyName: 'SUD1230',
  loanAmount: 123456,
  interestRate: 3.5,
  annualPayment: 12345,
  monthlyPayments: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
};

const App: React.FC = () => {
  return (
    <div>
      <h1>Loan Detail</h1>
      <LoanDetail {...sampleData} />
    </div>
  );
};

export default App;