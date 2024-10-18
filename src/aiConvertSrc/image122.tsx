import React from 'react';
import styled from '@emotion/styled';

type AccountingSystemProps = {
  startDate: string;
  endDate: string;
  amount: number;
  tax: number;
  totalAmount: number;
};

const Container = styled.div`
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 5px;
  width: 400px;
  margin: 0 auto;
  font-family: Arial, sans-serif;

  @media (max-width: 480px) {
    width: 100%;
  }
`;

const Title = styled.h2`
  margin-bottom: 20px;
  text-align: center;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const Label = styled.span`
  font-weight: bold;
`;

const Input = styled.input`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
  width: 150px;
`;

const Button = styled.button`
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  margin-right: 10px;

  &:hover {
    background-color: #0056b3;
  }
`;

const AccountingSystem: React.FC<AccountingSystemProps> = ({
  startDate,
  endDate,
  amount,
  tax,
  totalAmount,
}) => {
  return (
    <Container>
      <Title>法改正対応耐用年数一括処理</Title>
      <Row>
        <Label>更正年月日</Label>
        <span>{startDate}</span>
      </Row>
      <Row>
        <Label>耐用年数</Label>
        <span>
          {endDate} → {startDate}
        </span>
      </Row>
      <Row>
        <Label>期間指定</Label>
        <Input type="text" value={amount.toLocaleString()} readOnly />
      </Row>
      <Row>
        <Label>資産番号</Label>
        <Input type="text" value={tax} readOnly />
      </Row>
      <Row>
        <Label>資産番号</Label>
        <Input type="text" value={totalAmount.toLocaleString()} readOnly />
      </Row>
      <Row>
        <Button>OK</Button>
        <Button>クリア</Button>
        <Button>終了</Button>
      </Row>
    </Container>
  );
};

// サンプルデータを用いた使用例
const App: React.FC = () => {
  const sampleData: AccountingSystemProps = {
    startDate: '平成29年09月12日',
    endDate: '015',
    amount: 651000,
    tax: 0,
    totalAmount: 9999999999,
  };

  return (
    <div>
      <AccountingSystem {...sampleData} />
    </div>
  );
};

export default App;