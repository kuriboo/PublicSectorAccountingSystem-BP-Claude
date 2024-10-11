import React from 'react';
import styled from 'styled-components';

// 仕訳区分のプロパティ型定義
type EntryTypeProps = {
  deposit: boolean;
  withdrawal: boolean;
};

// 仕訳区分コンポーネント
const EntryType: React.FC<EntryTypeProps> = ({ deposit, withdrawal }) => {
  return (
    <EntryTypeWrapper>
      <Label>貸借区分</Label>
      <RadioGroup>
        <RadioItem>
          <input type="radio" id="deposit" checked={deposit} readOnly />
          <label htmlFor="deposit">借方</label>
        </RadioItem>
        <RadioItem>
          <input type="radio" id="withdrawal" checked={withdrawal} readOnly />
          <label htmlFor="withdrawal">貸方</label>
        </RadioItem>
      </RadioGroup>
    </EntryTypeWrapper>
  );
};

// 仕訳区分のスタイリング
const EntryTypeWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

const Label = styled.label`
  margin-right: 8px;
`;

const RadioGroup = styled.div`
  display: flex;
`;

const RadioItem = styled.div`
  display: flex;
  align-items: center;
  margin-right: 16px;

  input[type='radio'] {
    margin-right: 4px;
  }
`;

// 仕訳日付のプロパティ型定義
type EntryDateProps = {
  date: string;
};

// 仕訳日付コンポーネント
const EntryDate: React.FC<EntryDateProps> = ({ date }) => {
  return (
    <EntryDateWrapper>
      <Label>仕訳日付分</Label>
      <Input type="text" value={date} readOnly />
    </EntryDateWrapper>
  );
};

// 仕訳日付のスタイリング
const EntryDateWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

const Input = styled.input`
  padding: 4px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

// 未払計上日のプロパティ型定義
type AccrualDateProps = {
  date: string;
};

// 未払計上日コンポーネント
const AccrualDate: React.FC<AccrualDateProps> = ({ date }) => {
  return (
    <AccrualDateWrapper>
      <Label>未払計上日</Label>
      <Input type="text" value={date} readOnly />
    </AccrualDateWrapper>
  );
};

// 未払計上日のスタイリング
const AccrualDateWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

// 勘定科目のプロパティ型定義
type AccountTitleProps = {
  options: string[];
  selectedOption: string;
};

// 勘定科目コンポーネント
const AccountTitle: React.FC<AccountTitleProps> = ({ options, selectedOption }) => {
  return (
    <AccountTitleWrapper>
      <Label>勘定科目</Label>
      <Select value={selectedOption}>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </Select>
    </AccountTitleWrapper>
  );
};

// 勘定科目のスタイリング
const AccountTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

const Select = styled.select`
  padding: 4px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

// 税務区分のプロパティ型定義
type TaxCategoryProps = {
  taxRate: number;
  deductibleAmount: number;
};

// 税務区分コンポーネント
const TaxCategory: React.FC<TaxCategoryProps> = ({ taxRate, deductibleAmount }) => {
  return (
    <TaxCategoryWrapper>
      <TaxRateWrapper>
        <Label>税務区分</Label>
        <Input type="number" value={taxRate} readOnly />
      </TaxRateWrapper>
      <DeductibleAmountWrapper>
        <Label>BS科目課税額</Label>
        <Input type="number" value={deductibleAmount} readOnly />
      </DeductibleAmountWrapper>
    </TaxCategoryWrapper>
  );
};

// 税務区分のスタイリング
const TaxCategoryWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const TaxRateWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 16px;
`;

const DeductibleAmountWrapper = styled.div`
  display: flex;
  align-items: center;
`;

// サンプルデータ
const sampleData = {
  entryType: {
    deposit: true,
    withdrawal: false,
  },
  entryDate: '2023-06-01',
  accrualDate: '2023-06-30',
  accountTitleOptions: ['売掛金', '買掛金', '現金'],
  selectedAccountTitle: '売掛金',
  taxCategory: {
    taxRate: 10,
    deductibleAmount: 0,
  },
};

// 使用例コンポーネント
const UsageExample: React.FC = () => {
  return (
    <div>
      <EntryType
        deposit={sampleData.entryType.deposit}
        withdrawal={sampleData.entryType.withdrawal}
      />
      <EntryDate date={sampleData.entryDate} />
      <AccrualDate date={sampleData.accrualDate} />
      <AccountTitle
        options={sampleData.accountTitleOptions}
        selectedOption={sampleData.selectedAccountTitle}
      />
      <TaxCategory
        taxRate={sampleData.taxCategory.taxRate}
        deductibleAmount={sampleData.taxCategory.deductibleAmount}
      />
    </div>
  );
};

export default UsageExample;