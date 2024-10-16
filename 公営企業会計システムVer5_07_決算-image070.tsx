import React from 'react';
import styled from '@emotion/styled';

interface ReceivingAmountCalculatorProps {
  onSubmit?: (amount: number, period: number) => void;
}

const ReceivingAmountCalculator: React.FC<ReceivingAmountCalculatorProps> = ({ onSubmit }) => {
  const [amount, setAmount] = React.useState<number>(0);
  const [period, setPeriod] = React.useState<number>(0);
  const [total, setTotal] = React.useState<number>(0);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const calculatedTotal = amount * period;
    setTotal(calculatedTotal);
    onSubmit?.(amount, period);
  };

  return (
    <Container>
      <Title>科目別特定収入額修正入力</Title>
      <Subtitle>管理者 経理担当 さまu22b4 太郎</Subtitle>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Label>会計年度</Label>
          <Value>平成31年度</Value>
        </Row>
        <Row>
          <Label>特定収入額</Label>
          <Input type="number" value={amount} onChange={(e) => setAmount(Number(e.target.value))} />
        </Row>
        <Row>
          <Label>期節</Label>
          <Select value={period} onChange={(e) => setPeriod(Number(e.target.value))}>
            <option value={0}>選択してください</option>
            <option value={3}>3月</option>
            <option value={10}>10月</option>
            <option value={12}>12月</option>
          </Select>
        </Row>
        <Table>
          <thead>
            <tr>
              <th>集計月</th>
              <th>特定収入額</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>9月</td>
              <td>1,545,480</td>
            </tr>
            <tr>
              <td>10月</td>
              <td>6,456,240</td>
            </tr>
            <tr>
              <td>12月</td>
              <td>290,000,000</td>
            </tr>
          </tbody>
        </Table>
        <Total>合計額: {total.toLocaleString()}円</Total>
        <ButtonContainer>
          <SubmitButton type="submit">表示</SubmitButton>
          <CancelButton type="button">クリア</CancelButton>
          <CloseButton type="button">終了</CloseButton>
        </ButtonContainer>
      </Form>
    </Container>
  );
};

// Styles
const Container = styled.div`
  font-family: sans-serif;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
`;

const Subtitle = styled.p`
  font-size: 16px;
  color: #666;
  margin-bottom: 20px;
`;

const Form = styled.form`
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 5px;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;

const Label = styled.label`
  flex: 0 0 120px;
  margin-right: 10px;
`;

const Value = styled.span`
  flex: 1;
`;

const Input = styled.input`
  flex: 1;
  padding: 5px;
  border-radius: 3px;
  border: 1px solid #ccc;
`;

const Select = styled.select`
  flex: 1;
  padding: 5px;
  border-radius: 3px;
  border: 1px solid #ccc;
`;

const Table = styled.table`
  width: 100%;
  margin-top: 20px;
  border-collapse: collapse;

  th,
  td {
    padding: 8px;
    text-align: left;
    border-bottom: 1px solid #ddd;
  }

  th {
    background-color: #f2f2f2;
  }
`;

const Total = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin-top: 20px;
`;

const ButtonContainer = styled.div`
  margin-top: 20px;
  text-align: right;
`;

const Button = styled.button`
  padding: 8px 16px;
  border-radius: 3px;
  font-size: 14px;
  cursor: pointer;

  &:not(:last-child) {
    margin-right: 10px;
  }
`;

const SubmitButton = styled(Button)`
  background-color: #007bff;
  color: #fff;
  border: none;
`;

const CancelButton = styled(Button)`
  background-color: #f7f7f7;
  color: #333;
  border: 1px solid #ccc;
`;

const CloseButton = styled(Button)`
  background-color: #dc3545;
  color: #fff;
  border: none;
`;

// Sample usage
const App: React.FC = () => {
  const handleSubmit = (amount: number, period: number) => {
    console.log('Submitted:', amount, period);
  };

  return (
    <div>
      <ReceivingAmountCalculator onSubmit={handleSubmit} />
    </div>
  );
};

export default App;