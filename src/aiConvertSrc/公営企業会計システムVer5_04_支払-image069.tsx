import React from 'react';
import styled from 'styled-components';

// 取引画面のプロパティ型定義
interface TransactionProps {
  sender: string;
  recipient: string;
  date: string;
  amount: number;
  consumption: number; // 消費税額
  taxRate: number; // 消費税率
  remarks: string;
}

// スタイル定義
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  width: 100%;
  box-sizing: border-box;

  @media (min-width: 768px) {
    width: 80%;
    margin: 0 auto;
  }
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 10px;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 48%;
`;

const Label = styled.label`
  font-weight: bold;
`;

const Value = styled.span`
  margin-left: 10px;
`;

const TextInput = styled.input`
  padding: 5px;
  margin-top: 5px;
  width: 100%;
  box-sizing: border-box;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;

  &:hover {
    background-color: #0056b3;
  }
`;

// 取引画面のコンポーネント
const Transaction: React.FC<TransactionProps> = ({
  sender,
  recipient,
  date,
  amount,
  consumption,
  taxRate,
  remarks,
}) => {
  // 値が入っていない場合の処理
  const formatValue = (value: string | number) => {
    return value ? value : '-';
  };

  return (
    <Container>
      <Title>取引画面</Title>
      <Row>
        <Column>
          <Label>借方科目・明細</Label>
          <Value>{formatValue(sender)}</Value>
        </Column>
        <Column>
          <Label>貸方科目・明細</Label>
          <Value>{formatValue(recipient)}</Value>
        </Column>
      </Row>
      <Row>
        <Column>
          <Label>借方計日</Label>
          <Value>{formatValue(date)}</Value>
        </Column>
        <Column>
          <Label>貸方計日</Label>
          <Value>{formatValue(date)}</Value>
        </Column>
      </Row>
      <Row>
        <Column>
          <Label>税込金額</Label>
          <Value>{formatValue(amount)}</Value>
        </Column>
        <Column>
          <Label>消費税額</Label>
          <Value>{formatValue(consumption)}</Value>
        </Column>
      </Row>
      <Row>
        <Column>
          <Label>摘要</Label>
          <TextInput type="text" defaultValue={remarks} />
        </Column>
      </Row>
      <Row>
        <Column>
          <Label>子税</Label>
          <Value>本体仕訳</Value>
        </Column>
        <Column>
          <Label>消費税率</Label>
          <Value>{formatValue(taxRate)}%</Value>
        </Column>
      </Row>
      <Row>
        <Column>
          <Label>税込金額</Label>
          <Value>{formatValue(amount)}</Value>
        </Column>
        <Column>
          <Label>税抜金額</Label>
          <Value>{formatValue(amount - consumption)}</Value>
        </Column>
      </Row>
      <Button>OK</Button>
    </Container>
  );
};

// サンプルデータを用いた使用例
const TransactionSample: React.FC = () => {
  const sampleData: TransactionProps = {
    sender: '売掛金',
    recipient: 'その他',
    date: '2023/03/31',
    amount: 120000,
    consumption: 10000,
    taxRate: 10,
    remarks: '3月売上',
  };

  return <Transaction {...sampleData} />;
};

export default TransactionSample;