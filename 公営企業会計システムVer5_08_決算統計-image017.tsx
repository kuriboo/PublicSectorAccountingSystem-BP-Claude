import React from 'react';
import styled from '@emotion/styled';

interface LoanCalculationProps {
  totalAmount: number; // 総借入金額
  years: number; // 借入年数
  interestRate: number; // 金利
  onSubmit: (monthlyPayment: number) => void; // 月々の支払額を計算して親コンポーネントに渡すコールバック
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  max-width: 400px;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-weight: bold;
`;

const Input = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const TextArea = styled.textarea`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
  min-height: 100px;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  
  &:hover {
    background-color: #0056b3;
  }
`;

const LoanCalculation: React.FC<LoanCalculationProps> = ({
  totalAmount,
  years,
  interestRate,
  onSubmit,
}) => {
  const [loanAmount, setLoanAmount] = React.useState(totalAmount);
  const [loanYears, setLoanYears] = React.useState(years);
  const [loanInterestRate, setLoanInterestRate] = React.useState(interestRate);
  const [description, setDescription] = React.useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // 月々の支払額を計算
    const monthlyInterestRate = loanInterestRate / 100 / 12;
    const monthlyPayments = loanYears * 12;
    const monthlyPayment =
      (loanAmount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, monthlyPayments)) /
      (Math.pow(1 + monthlyInterestRate, monthlyPayments) - 1);

    onSubmit(monthlyPayment);
  };

  return (
    <Container>
      <Title>決算統計貸借対照表集計処理</Title>
      <Form onSubmit={handleSubmit}>
        <InputGroup>
          <Label>集計年度</Label>
          <Input type="number" value={loanYears} onChange={(e) => setLoanYears(Number(e.target.value))} />
        </InputGroup>
        <InputGroup>
          <Label>年度</Label>
          <Input type="number" value={loanYears} onChange={(e) => setLoanYears(Number(e.target.value))} />
        </InputGroup>
        <InputGroup>
          <Label>処理概要</Label>
          <TextArea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="決算統計貸借対照表を出力するための事前処理です。&#10;※あらかじめ損益計算書・貸借対照表マスタでの設定の確認、100科目の処理を行って下さい。"
          />
        </InputGroup>
        <ButtonGroup>
          <Button type="button">OK</Button>
          <Button type="button">クリア</Button>
          <Button type="submit">終了</Button>
        </ButtonGroup>
      </Form>
    </Container>
  );
};

// サンプルデータを用いた使用例
const App: React.FC = () => {
  const handleSubmit = (monthlyPayment: number) => {
    console.log(`月々の支払額: ${monthlyPayment}円`);
  };

  return (
    <LoanCalculation
      totalAmount={10000000}
      years={20}
      interestRate={1.5}
      onSubmit={handleSubmit}
    />
  );
};

export default App;