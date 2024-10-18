// 仕訳登録コンポーネント
import React from 'react';
import styled from '@emotion/styled';

// 仕訳入力フォームのプロパティ型定義
type JournalEntryFormProps = {
  journalCode: string;
  date: string;
  debitAccount: string;
  debitAmount: number;
  creditAccount: string;
  creditAmount: number;
  isOutdoorWork: boolean;
  remarks: string;
  onInputChange: (name: string, value: string | number | boolean) => void;
  onSubmit: () => void;
  onCancel: () => void;
};

// 仕訳入力フォーム
const JournalEntryForm: React.FC<JournalEntryFormProps> = ({
  journalCode,
  date,
  debitAccount,
  debitAmount,
  creditAccount,
  creditAmount,
  isOutdoorWork,
  remarks,
  onInputChange,
  onSubmit,
  onCancel,
}) => {
  return (
    <FormWrapper>
      <FormRow>
        <FormLabel>仕訳コード</FormLabel>
        <FormInput
          type="text"
          name="journalCode"
          value={journalCode}
          onChange={(e) => onInputChange('journalCode', e.target.value)}
          readOnly
        />
        <FormLabel>予算仕訳</FormLabel>
      </FormRow>
      <FormRow>
        <FormLabel>借方</FormLabel>
        <AmountWrapper>
          <FormInput
            type="text"
            name="debitAccount"
            value={debitAccount}
            onChange={(e) => onInputChange('debitAccount', e.target.value)}
          />
          <FormInput
            type="number"
            name="debitAmount"
            value={debitAmount}
            onChange={(e) => onInputChange('debitAmount', Number(e.target.value))}
          />
        </AmountWrapper>
      </FormRow>
      <FormRow>
        <FormLabel>貸方</FormLabel>
        <AmountWrapper>  
          <FormInput
            type="text"
            name="creditAccount"
            value={creditAccount}
            onChange={(e) => onInputChange('creditAccount', e.target.value)}
          />
          <FormInput
            type="number"
            name="creditAmount"
            value={creditAmount}
            onChange={(e) => onInputChange('creditAmount', Number(e.target.value))}
          />
          <CheckboxWrapper>
            <input
              type="checkbox"
              name="isOutdoorWork"
              checked={isOutdoorWork}
              onChange={(e) => onInputChange('isOutdoorWork', e.target.checked)}
            />
            <span>現地払い</span>
          </CheckboxWrapper>
        </AmountWrapper>
      </FormRow>
      <FormRow>
        <FormLabel>摘要欄</FormLabel>
        <textarea
          name="remarks"
          value={remarks}
          onChange={(e) => onInputChange('remarks', e.target.value)}
        ></textarea>
      </FormRow>
      <ButtonRow>
        <Button onClick={onSubmit}>OK</Button>
        <Button onClick={onCancel}>クリア</Button>
        <Button>キャンセル</Button>
      </ButtonRow>
    </FormWrapper>
  );
};

// スタイル定義
const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
`;

const FormRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const FormLabel = styled.label`
  flex: 0 0 80px;
`;

const FormInput = styled.input`
  flex: 1;
  padding: 5px;
`;

const AmountWrapper = styled.div`
  display: flex;
  gap: 10px;
  flex: 1;
`;

const CheckboxWrapper = styled.label`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const ButtonRow = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 5px 10px;
`;

// 仕訳入力フォームの使用例
const JournalEntryFormExample = () => {
  const [formData, setFormData] = React.useState({
    journalCode: '10001',
    date: '2023-01-01',
    debitAccount: '売掛金',
    debitAmount: 10000,
    creditAccount: '売上',
    creditAmount: 10000,
    isOutdoorWork: false,
    remarks: '',
  });

  const handleInputChange = (name: string, value: string | number | boolean) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
  };

  const handleCancel = () => {
    console.log('Form canceled');
  };

  return (
    <JournalEntryForm
      {...formData}
      onInputChange={handleInputChange}
      onSubmit={handleSubmit}
      onCancel={handleCancel}
    />
  );
};

export default JournalEntryFormExample;