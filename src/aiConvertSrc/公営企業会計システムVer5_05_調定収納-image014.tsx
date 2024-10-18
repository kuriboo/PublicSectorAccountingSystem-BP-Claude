import React from 'react';
import styled from '@emotion/styled';

// 収納タイプの型定義
type DepositType = '普通' | '当座' | '納税';

// 入金情報の型定義
type Deposit = {
  year: string;
  branch: string;
  number: string;
  amount: string;
};

// 振替情報の型定義
type Transfer = {
  year: string;
  branch: string;
  number: string;
  amount: string;
  usedDate: string;
  unusedAmount: string;
  transferFee: number;
};

// コンポーネントのプロパティの型定義
type ReceiptFormProps = {
  depositType: DepositType;
  deposit: Deposit;
  transfer: Transfer;
  onSubmit: () => void;
  onCancel: () => void;
  onPrint: () => void;
};

const ReceiptForm: React.FC<ReceiptFormProps> = ({
  depositType,
  deposit,
  transfer,
  onSubmit,
  onCancel,
  onPrint,
}) => {
  return (
    <FormContainer>
      <Title>集合収納入力(納付書番号)</Title>
      <TypeSelect>
        <option value="普通">普通</option>
        <option value="当座">当座</option>
        <option value="納税">納税</option>
      </TypeSelect>
      <Row>
        <DepositSection>
          <SectionTitle>納付書</SectionTitle>
          <Input value={deposit.year} readOnly />
          <span>年度</span>
          <Input value={deposit.branch} readOnly />
          <Input value={deposit.number} readOnly />
          <Input value={deposit.amount} readOnly />
        </DepositSection>
        <TransferSection>
          <SectionTitle>収納年度</SectionTitle>
          <Input value={transfer.year} readOnly />
          <span>年度</span>
          <Input value={transfer.branch} readOnly />
          <Input value={transfer.number} readOnly />
          <span>未収対応予算年度</span>
          <DateInput value={transfer.usedDate} readOnly />
          <span>収納日</span>
          <Input value={transfer.amount} readOnly />
          <span>未収金額</span>
          <Input value={transfer.unusedAmount} readOnly />
          <span>消費税率</span>
          <Input value={transfer.transferFee} readOnly />
          <span>%</span>
          <span>収入金額</span>
          <span>000000</span>
          <span>内消費税額</span>
          <span>0</span>
          <span>領収金額</span>
          <span>0</span>
        </TransferSection>
      </Row>
      <ButtonRow>
        <Button onClick={onSubmit}>終了</Button>
        <Button onClick={onCancel}>クリア</Button>
        <Button onClick={onPrint}>終了</Button>
      </ButtonRow>
    </FormContainer>
  );
};

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px;
  background-color: #f0f0f0;
  font-family: sans-serif;
`;

const Title = styled.h2`
  margin: 0 0 16px;
`;

const TypeSelect = styled.select`
  margin-bottom: 16px;
`;

const Row = styled.div`
  display: flex;
  gap: 32px;
  margin-bottom: 16px;
`;

const DepositSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const TransferSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const SectionTitle = styled.h3`
  margin: 0 0 8px;
`;

const Input = styled.input`
  margin-bottom: 8px;
`;

const DateInput = styled(Input)`
  width: 120px;
`;

const ButtonRow = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 16px;
`;

const Button = styled.button`
  padding: 4px 8px;
`;

// サンプルデータ
const sampleData: ReceiptFormProps = {
  depositType: '普通',
  deposit: {
    year: '令和02',
    branch: '00',
    number: '現金納税あああ略',
    amount: '000',
  },
  transfer: {
    year: '令和02',
    branch: '00',
    number: 'HG1子算期略',
    amount: '000',
    usedDate: '令和02年04月01日',
    unusedAmount: '0010',
    transferFee: 10,
  },
  onSubmit: () => alert('終了'),
  onCancel: () => alert('クリア'), 
  onPrint: () => alert('印刷'),
};

export const SampleReceiptForm: React.FC = () => {
  return <ReceiptForm {...sampleData} />;
};