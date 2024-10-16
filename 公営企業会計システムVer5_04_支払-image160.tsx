import React from 'react';
import styled from 'styled-components';

// 資金前渡振替入力画面のプロパティ型定義
type TransferInputProps = {
  date: string;
  requester: string;
  affiliation: string;
  paymentDate: string;
  amount: number;
  breakdown: string;
  breakdownAmount: number;
  total: number;
  remainingAmount: number;
};

// 資金前渡振替入力画面コンポーネント
const TransferInput: React.FC<TransferInputProps> = ({
  date,
  requester,
  affiliation,
  paymentDate,
  amount,
  breakdown,
  breakdownAmount,
  total,
  remainingAmount,
}) => {
  return (
    <Container>
      <Title>資金前渡振替入力</Title>
      <Row>
        <Label>精算処理日</Label>
        <Input type="text" value={date} readOnly />
      </Row>
      <Row>
        <Label>請求者</Label>
        <Input type="text" value={requester} readOnly />
        <Label>所属</Label>
        <Input type="text" value={affiliation} readOnly />
      </Row>
      <Row>
        <Label>支払日</Label>
        <Input type="text" value={paymentDate} readOnly />
        <Label>支払先</Label>
        <Input type="text" value="一郎" readOnly />
        <Label>支払額</Label>
        <Input type="text" value={amount.toLocaleString()} readOnly />
      </Row>
      <Row>
        <Label>適格請求書発行事業者以外</Label>
        <Input type="checkbox" checked readOnly />
        <Label>帳簿のみ保存</Label>
      </Row>
      <BreakdownContainer>
        <BreakdownTitle>内訳</BreakdownTitle>
        <BreakdownRow>
          <BreakdownLabel>細節：明細</BreakdownLabel>
          <BreakdownInput type="text" value={breakdown} readOnly />
          <BreakdownAmountLabel>還元税理</BreakdownAmountLabel>
          <BreakdownAmountInput type="text" value={breakdownAmount.toLocaleString()} readOnly />
        </BreakdownRow>
      </BreakdownContainer>
      <TotalRow>
        <TotalLabel>合計振替額</TotalLabel>
        <TotalInput type="text" value={total.toLocaleString()} readOnly />
      </TotalRow>
      <TotalRow>
        <TotalLabel>戻入額</TotalLabel>
        <TotalInput type="text" value={remainingAmount.toLocaleString()} readOnly />
      </TotalRow>
      <ButtonRow>
        <Button>戻入</Button>
        <Button>バーコード</Button>
        <SubmitButton>OK</SubmitButton>
        <Button>クリア</Button>
        <Button>終了</Button>
      </ButtonRow>
    </Container>
  );
};

// スタイリング用のスタイル付きコンポーネント
const Container = styled.div`
  padding: 20px;
`;

const Title = styled.h2`
  margin-bottom: 20px;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const Label = styled.label`
  margin-right: 10px;
`;

const Input = styled.input`
  margin-right: 20px;
`;

const BreakdownContainer = styled.div`
  margin-top: 20px;
`;

const BreakdownTitle = styled.h3`
  margin-bottom: 10px;
`;

const BreakdownRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
`;

const BreakdownLabel = styled.label`
  margin-right: 10px;
`;

const BreakdownInput = styled.input`
  margin-right: 20px;
`;

const BreakdownAmountLabel = styled.label`
  margin-left: auto;
  margin-right: 10px;
`;

const BreakdownAmountInput = styled.input`
  width: 100px;
`;

const TotalRow = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;

const TotalLabel = styled.label`
  margin-right: 10px;
`;

const TotalInput = styled.input`
  width: 150px;
`;

const ButtonRow = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`;

const Button = styled.button`
  margin-left: 10px;
`;

const SubmitButton = styled.button`
  margin-left: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
`;

// サンプルデータを用いた使用例
const SampleData: TransferInputProps = {
  date: '令和6年10月30日',
  requester: '令和6',
  affiliation: '年度',
  paymentDate: '令和6年10月30日',
  amount: 11000,
  breakdown: '細節：明細',
  breakdownAmount: 11000,
  total: 11000,
  remainingAmount: 1000,
};

const App: React.FC = () => {
  return (
    <div>
      <TransferInput {...SampleData} />
    </div>
  );
};

export default App;