import React from 'react';
import styled from '@emotion/styled';

type AccountingFormProps = {
  date: string;
  onDateChange: (date: string) => void;
  debitAccount: string;
  onDebitAccountChange: (account: string) => void;
  creditAccount: string;
  onCreditAccountChange: (account: string) => void;
  taxRate: number;
  onTaxRateChange: (rate: number) => void;
  borrowings: number;
  onBorrowingsChange: (borrowings: number) => void;
  current: number;
  onCurrentChange: (current: number) => void;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  border: 1px solid #ccc;
`;

const Row = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

const Label = styled.label`
  flex: 1;
`;

const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Select = styled.select`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const AccountingForm: React.FC<AccountingFormProps> = ({
  date,
  onDateChange,
  debitAccount,
  onDebitAccountChange,
  creditAccount,
  onCreditAccountChange,
  taxRate,
  onTaxRateChange,
  borrowings,
  onBorrowingsChange,
  current,
  onCurrentChange,
}) => {
  return (
    <Container>
      <Row>
        <Label>会計日付:</Label>
        <Input type="date" value={date} onChange={(e) => onDateChange(e.target.value)} />
      </Row>
      <Row>
        <Label>借方科目:</Label>
        <Select value={debitAccount} onChange={(e) => onDebitAccountChange(e.target.value)}>
          <option value="">選択してください</option>
          {/* デモ用の科目オプションを追加 */}
        </Select>
      </Row>
      <Row>
        <Label>貸方科目:</Label>
        <Select value={creditAccount} onChange={(e) => onCreditAccountChange(e.target.value)}>
          <option value="">選択してください</option>
          {/* デモ用の科目オプションを追加 */}
        </Select>
      </Row>
      <Row>
        <Label>税率:</Label>
        <Input
          type="number"
          value={taxRate}
          onChange={(e) => onTaxRateChange(Number(e.target.value))}
        />
      </Row>
      <Row>
        <Label>借入金額:</Label>
        <Input
          type="number"
          value={borrowings}
          onChange={(e) => onBorrowingsChange(Number(e.target.value))}
        />
      </Row>
      <Row>
        <Label>現金預金:</Label>
        <Input
          type="number"
          value={current}
          onChange={(e) => onCurrentChange(Number(e.target.value))}
        />
      </Row>
    </Container>
  );
};

// サンプル用のデータと使用例
const SampleUsage: React.FC = () => {
  const [date, setDate] = React.useState('');
  const [debitAccount, setDebitAccount] = React.useState('');
  const [creditAccount, setCreditAccount] = React.useState('');
  const [taxRate, setTaxRate] = React.useState(0);
  const [borrowings, setBorrowings] = React.useState(0);
  const [current, setCurrent] = React.useState(0);

  return (
    <AccountingForm
      date={date}
      onDateChange={setDate}
      debitAccount={debitAccount}
      onDebitAccountChange={setDebitAccount}
      creditAccount={creditAccount}
      onCreditAccountChange={setCreditAccount}
      taxRate={taxRate}
      onTaxRateChange={setTaxRate}
      borrowings={borrowings} 
      onBorrowingsChange={setBorrowings}
      current={current}
      onCurrentChange={setCurrent}
    />
  );
};

export default AccountingForm;