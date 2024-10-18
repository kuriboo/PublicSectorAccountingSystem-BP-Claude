import React from 'react';
import styled from 'styled-components';

// 型定義
type ContractorInputProps = {
  value: string;
  onChange: (value: string) => void;
};

type PaymentDetailsProps = {
  paymentMethod: string;
  bankName: string;
  bankBranch: string;
  accountType: string;
  accountNumber: string;
  accountHolder: string;
  onPaymentMethodChange: (value: string) => void;
  onBankNameChange: (value: string) => void;
  onBankBranchChange: (value: string) => void;
  onAccountTypeChange: (value: string) => void;
  onAccountNumberChange: (value: string) => void;
  onAccountHolderChange: (value: string) => void;
};

type FormProps = {
  paymentAmount: number;
  taxRate: number;
  businessDescription: string;
  note: string;
  onPaymentAmountChange: (value: number) => void;
  onTaxRateChange: (value: number) => void;
  onBusinessDescriptionChange: (value: string) => void;
  onNoteChange: (value: string) => void;
};

// スタイリング
const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

const Section = styled.div`
  margin-bottom: 40px;
`;

const SectionTitle = styled.h3`
  font-size: 20px;
  margin-bottom: 10px;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  font-size: 16px;
`;

const Select = styled.select`
  width: 100%;
  padding: 8px;
  font-size: 16px;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

// 請負者入力コンポーネント
const ContractorInput: React.FC<ContractorInputProps> = ({ value, onChange }) => {
  return (
    <FormGroup>
      <Label>請負者</Label>
      <Input type="text" value={value} onChange={(e) => onChange(e.target.value)} />
    </FormGroup>
  );
};

// 支払先コンポーネント
const PaymentDetails: React.FC<PaymentDetailsProps> = ({
  paymentMethod,
  bankName,
  bankBranch,
  accountType,
  accountNumber,
  accountHolder,
  onPaymentMethodChange,
  onBankNameChange,
  onBankBranchChange,
  onAccountTypeChange,
  onAccountNumberChange,
  onAccountHolderChange,
}) => {
  return (
    <Section>
      <SectionTitle>支払先</SectionTitle>
      <FormGroup>
        <Label>支払方法</Label>
        <Select value={paymentMethod} onChange={(e) => onPaymentMethodChange(e.target.value)}>
          <option value="">選択してください</option>
          <option value="bankTransfer">銀行振込</option>
        </Select>
      </FormGroup>
      {paymentMethod === 'bankTransfer' && (
        <>
          <FormGroup>
            <Label>銀行名</Label>
            <Input type="text" value={bankName} onChange={(e) => onBankNameChange(e.target.value)} />
          </FormGroup>
          <FormGroup>
            <Label>支店名</Label>
            <Input type="text" value={bankBranch} onChange={(e) => onBankBranchChange(e.target.value)} />
          </FormGroup>
          <FormGroup>
            <Label>預金種別</Label>
            <Select value={accountType} onChange={(e) => onAccountTypeChange(e.target.value)}>
              <option value="">選択してください</option>
              <option value="savings">普通預金</option>
              <option value="checking">当座預金</option>
            </Select>
          </FormGroup>
          <FormGroup>
            <Label>口座番号</Label>
            <Input type="text" value={accountNumber} onChange={(e) => onAccountNumberChange(e.target.value)} />
          </FormGroup>
          <FormGroup>
            <Label>口座名義</Label>
            <Input type="text" value={accountHolder} onChange={(e) => onAccountHolderChange(e.target.value)} />
          </FormGroup>
        </>
      )}
    </Section>
  );
};

// 支払フォーム全体のコンポーネント
const PaymentForm: React.FC<FormProps> = ({
  paymentAmount,
  taxRate,
  businessDescription,
  note,
  onPaymentAmountChange,
  onTaxRateChange,
  onBusinessDescriptionChange,
  onNoteChange,
}) => {
  return (
    <Section>
      <SectionTitle>支払内容</SectionTitle>
      <FormGroup>
        <Label>支払金額</Label>
        <Input type="number" value={paymentAmount} onChange={(e) => onPaymentAmountChange(Number(e.target.value))} />
      </FormGroup>
      <FormGroup>
        <Label>消費税率</Label>
        <Input type="number" value={taxRate} onChange={(e) => onTaxRateChange(Number(e.target.value))} />
      </FormGroup>
      <FormGroup>
        <Label>適用請求項目</Label>
        <Input type="text" value={businessDescription} onChange={(e) => onBusinessDescriptionChange(e.target.value)} />
      </FormGroup>
      <FormGroup>
        <Label>備考</Label>
        <Input type="text" value={note} onChange={(e) => onNoteChange(e.target.value)} />
      </FormGroup>
    </Section>
  );
};

// サンプルデータを使用して表示用のコンポーネントを実装
const SamplePaymentForm: React.FC = () => {
  const [contractor, setContractor] = React.useState('株式会社ABC');
  const [paymentMethod, setPaymentMethod] = React.useState('bankTransfer');
  const [bankName, setBankName] = React.useState('みずほ銀行');
  const [bankBranch, setBankBranch] = React.useState('新木場支店');
  const [accountType, setAccountType] = React.useState('savings');
  const [accountNumber, setAccountNumber] = React.useState('1234567');
  const [accountHolder, setAccountHolder] = React.useState('株式会社ABC');
  const [paymentAmount, setPaymentAmount] = React.useState(100000);
  const [taxRate, setTaxRate] = React.useState(10);
  const [businessDescription, setBusinessDescription] = React.useState('システム開発');
  const [note, setNote] = React.useState('');

  return (
    <Container>
      <Title>支出決定入力（通常工事 負担無）</Title>
      <ContractorInput value={contractor} onChange={setContractor} />
      <PaymentDetails
        paymentMethod={paymentMethod}
        bankName={bankName}
        bankBranch={bankBranch}
        accountType={accountType}
        accountNumber={accountNumber}
        accountHolder={accountHolder}
        onPaymentMethodChange={setPaymentMethod}
        onBankNameChange={setBankName}
        onBankBranchChange={setBankBranch}
        onAccountTypeChange={setAccountType}
        onAccountNumberChange={setAccountNumber}
        onAccountHolderChange={setAccountHolder}
      />
      <PaymentForm
        paymentAmount={paymentAmount}
        taxRate={taxRate}
        businessDescription={businessDescription}
        note={note}
        onPaymentAmountChange={setPaymentAmount}
        onTaxRateChange={setTaxRate}
        onBusinessDescriptionChange={setBusinessDescription}
        onNoteChange={setNote}
      />
      <Button>OK</Button>
    </Container>
  );
};

export default SamplePaymentForm;