import React from 'react';
import styled from '@emotion/styled';

// 型定義
interface TaxCertificateFormProps {
  onSubmit: (data: {
    startDate: string;
    endDate: string;
    bankCode: string;
    branchCode: string;
    accountType: string;
    accountNumber: string;
    accountHolder: string;
  }) => void;
}

// スタイルコンポーネント
const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 5px;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;

  @media (max-width: 600px) {
    padding: 10px;
  }
`;

const FormTitle = styled.h2`
  margin-bottom: 20px;
`;

const FormGroup = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  width: 100%;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const FormLabel = styled.label`
  margin-right: 10px;
  min-width: 100px;

  @media (max-width: 600px) {
    margin-bottom: 5px;
  }
`;

const FormInput = styled.input`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
  width: 100%;
  max-width: 200px;
`;

const FormSelect = styled.select`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
  width: 100%;
  max-width: 200px;
`;

const FormCheckbox = styled.input`
  margin-right: 5px;
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 3px;
  cursor: pointer;
`;

// メインコンポーネント
const TaxCertificateForm: React.FC<TaxCertificateFormProps> = ({ onSubmit }) => {
  // フォーム送信時の処理
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // フォームデータの取得と送信
    const formData = {
      startDate: (e.currentTarget.elements.namedItem('startDate') as HTMLInputElement).value,
      endDate: (e.currentTarget.elements.namedItem('endDate') as HTMLInputElement).value,
      bankCode: (e.currentTarget.elements.namedItem('bankCode') as HTMLInputElement).value,
      branchCode: (e.currentTarget.elements.namedItem('branchCode') as HTMLInputElement).value,
      accountType: (e.currentTarget.elements.namedItem('accountType') as HTMLSelectElement).value,
      accountNumber: (e.currentTarget.elements.namedItem('accountNumber') as HTMLInputElement).value,
      accountHolder: (e.currentTarget.elements.namedItem('accountHolder') as HTMLInputElement).value,
    };
    onSubmit(formData);
  };

  return (
    <FormContainer>
      <FormTitle>特定課税仕入控除管理入力</FormTitle>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <FormLabel>対象期間</FormLabel>
          <FormInput type="date" name="startDate" required />
          ～
          <FormInput type="date" name="endDate" required />
          <FormCheckbox type="checkbox" name="includeTaxDate" />
          <span>課税のみ出力算納行から税額の入出金も抽出</span>
        </FormGroup>
        <FormGroup>
          <FormLabel>銀行</FormLabel>
          <FormInput type="text" name="bankCode" />
        </FormGroup>
        <FormGroup>
          <FormLabel>支店</FormLabel>
          <FormInput type="text" name="branchCode" />
        </FormGroup>
        <FormGroup>
          <FormLabel>種別</FormLabel>
          <FormSelect name="accountType">
            <option value="">種別</option>
            <option value="普通">普通</option>
            <option value="当座">当座</option>
            <option value="貯蓄">貯蓄</option>
          </FormSelect>
        </FormGroup>
        <FormGroup>
          <FormLabel>口座番号</FormLabel>
          <FormInput type="text" name="accountNumber" />
        </FormGroup>
        <FormGroup>
          <FormLabel>名義</FormLabel>
          <FormInput type="text" name="accountHolder" />
        </FormGroup>
        <SubmitButton type="submit">検索</SubmitButton>
        <button type="button">クリア</button>
        <button type="button">終了</button>
      </form>
    </FormContainer>
  );
};

// 使用例
const App: React.FC = () => {
  const handleSubmit = (data: {
    startDate: string;
    endDate: string;
    bankCode: string;
    branchCode: string;
    accountType: string;
    accountNumber: string;
    accountHolder: string;
  }) => {
    console.log(data);
  };

  return (
    <div>
      <h1>特定課税仕入控除管理入力</h1>
      <TaxCertificateForm onSubmit={handleSubmit} />
    </div>
  );
};

export default App;