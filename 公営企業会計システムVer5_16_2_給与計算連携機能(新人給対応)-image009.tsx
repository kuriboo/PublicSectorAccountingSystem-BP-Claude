import React from 'react';
import styled from 'styled-components';

// 支払方法の型定義
type PaymentMethod = '給与支払データ' | '現物分(現物)支払データ';

// コンポーネントのProps型定義
interface SupportPaymentInputProps {
  paymentMethod: PaymentMethod;
  paymentDate: string;
  onPaymentMethodChange: (method: PaymentMethod) => void;
  onPaymentDateChange: (date: string) => void;
  onSubmit: () => void;
  onCancel: () => void;
}

// スタイル定義
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const Title = styled.h2`
  margin-bottom: 20px;
`;

const RadioGroup = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const RadioLabel = styled.label`
  margin: 0 10px;
`;

const DateInput = styled.input`
  margin-bottom: 20px;
  padding: 5px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
`;

const TableHeader = styled.th`
  padding: 10px;
  border: 1px solid #ccc;
  background-color: #f0f0f0;
`;

const TableCell = styled.td`
  padding: 10px;
  border: 1px solid #ccc;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  padding: 10px 20px;
  margin: 0 10px;
`;

// コンポーネント実装
const SupportPaymentInput: React.FC<SupportPaymentInputProps> = ({
  paymentMethod,
  paymentDate,
  onPaymentMethodChange,
  onPaymentDateChange,
  onSubmit,
  onCancel,
}) => {
  return (
    <Container>
      <Title>給与支払確定解除入力</Title>
      <RadioGroup>
        <RadioLabel>
          <input
            type="radio"
            value="給与支払データ"
            checked={paymentMethod === '給与支払データ'}
            onChange={() => onPaymentMethodChange('給与支払データ')}
          />
          給与支払データ
        </RadioLabel>
        <RadioLabel>
          <input
            type="radio"
            value="現物分(現物)支払データ"
            checked={paymentMethod === '現物分(現物)支払データ'}
            onChange={() => onPaymentMethodChange('現物分(現物)支払データ')}
          />
          現物分(現物)支払データ
        </RadioLabel>
      </RadioGroup>
      <div>
        <label>
          支払日　
          <DateInput
            type="date"
            value={paymentDate}
            onChange={(e) => onPaymentDateChange(e.target.value)}
          />
        </label>
      </div>
      <Table>
        <thead>
          <tr>
            <TableHeader>決定番号</TableHeader>
            <TableHeader>支払先</TableHeader>
            <TableHeader>摘要</TableHeader>
            <TableHeader>決定額</TableHeader>
          </tr>
        </thead>
        <tbody>
          <tr>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
          </tr>
        </tbody>
      </Table>
      <Table>
        <thead>
          <tr>
            <TableHeader>集合収納番号</TableHeader>
            <TableHeader>摘要</TableHeader>
            <TableHeader>収納金額</TableHeader>
            <TableHeader>内現職精算</TableHeader>
            <TableHeader>特定収入</TableHeader>
            <TableHeader>郵</TableHeader>
          </tr>
        </thead>
        <tbody>
          <tr>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
          </tr>
        </tbody>
      </Table>
      <ButtonGroup>
        <Button onClick={onSubmit}>OK</Button>
        <Button onClick={onCancel}>クリア</Button>
        <Button>終了</Button>
      </ButtonGroup>
    </Container>
  );
};

export default SupportPaymentInput;

// 使用例
const SampleData = {
  paymentMethod: '給与支払データ',
  paymentDate: '2029-09-19',
};

const UsageSample = () => {
  const [paymentMethod, setPaymentMethod] = React.useState<PaymentMethod>(SampleData.paymentMethod);
  const [paymentDate, setPaymentDate] = React.useState(SampleData.paymentDate);

  const handleSubmit = () => {
    // 送信処理
    console.log('Submit:', { paymentMethod, paymentDate });
  };

  const handleCancel = () => {
    // キャンセル処理
    setPaymentMethod(SampleData.paymentMethod);
    setPaymentDate(SampleData.paymentDate);
  };

  return (
    <SupportPaymentInput
      paymentMethod={paymentMethod}
      paymentDate={paymentDate}
      onPaymentMethodChange={setPaymentMethod}
      onPaymentDateChange={setPaymentDate}
      onSubmit={handleSubmit}
      onCancel={handleCancel}
    />
  );
};