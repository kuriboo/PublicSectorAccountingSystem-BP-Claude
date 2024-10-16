// 必要なライブラリのインポート
import React from 'react';
import styled from 'styled-components';

// 型定義
type CompanyInfoFormProps = {
  companyName: string;
  companyAddress: string;
  companyTel: string;
  companyFax: string;
  businessNumber: string;
  representativeName: string;
  representativePosition: string;
  accountName: string;
  accountNumber: string;
  bankName: string;
  bankBranch: string;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
};

// スタイリング
const FormWrapper = styled.div`
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 5px;
`;

const FormTitle = styled.h2`
  font-size: 18px;
  margin-bottom: 15px;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const SubmitButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
`;

// コンポーネント
const CompanyInfoForm: React.FC<CompanyInfoFormProps> = ({
  companyName,
  companyAddress,
  companyTel,
  companyFax,
  businessNumber,
  representativeName,
  representativePosition,
  accountName,
  accountNumber,
  bankName,
  bankBranch,
  onSubmit,
}) => {
  return (
    <FormWrapper>
      <FormTitle>会社情報登録</FormTitle>
      <form onSubmit={onSubmit}>
        <FormGroup>
          <FormLabel>会社名</FormLabel>
          <FormInput type="text" value={companyName} required />
        </FormGroup>
        <FormGroup>
          <FormLabel>住所</FormLabel>
          <FormInput type="text" value={companyAddress} required />
        </FormGroup>
        <FormGroup>
          <FormLabel>電話番号</FormLabel>
          <FormInput type="tel" value={companyTel} required />
        </FormGroup>
        <FormGroup>
          <FormLabel>FAX番号</FormLabel>
          <FormInput type="tel" value={companyFax} />
        </FormGroup>
        <FormGroup>
          <FormLabel>業務年数</FormLabel>
          <FormInput type="number" value={businessNumber} required />
        </FormGroup>
        <FormGroup>
          <FormLabel>代表者氏名</FormLabel>
          <FormInput type="text" value={representativeName} required />
        </FormGroup>
        <FormGroup>
          <FormLabel>代表者役職</FormLabel>
          <FormInput type="text" value={representativePosition} required />
        </FormGroup>
        <FormGroup>
          <FormLabel>口座名義</FormLabel>
          <FormInput type="text" value={accountName} required />
        </FormGroup>
        <FormGroup>
          <FormLabel>口座番号</FormLabel>
          <FormInput type="text" value={accountNumber} required />
        </FormGroup>
        <FormGroup>
          <FormLabel>金融機関名</FormLabel>
          <FormInput type="text" value={bankName} required />
        </FormGroup>
        <FormGroup>
          <FormLabel>支店名</FormLabel>
          <FormInput type="text" value={bankBranch} required />
        </FormGroup>
        <SubmitButton type="submit">登録</SubmitButton>
      </form>
    </FormWrapper>
  );
};

// サンプルデータを用いた使用例
const SampleData = {
  companyName: 'ABC株式会社',
  companyAddress: '東京都新宿区西新宿1-1-1',
  companyTel: '03-1234-5678',
  companyFax: '03-1234-5679',
  businessNumber: '15',
  representativeName: '山田太郎',
  representativePosition: '代表取締役',
  accountName: 'ABC株式会社',
  accountNumber: '1234567',
  bankName: 'XYZ銀行',
  bankBranch: '新宿支店',
};

const CompanyInfoFormSample = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // フォーム送信の処理をここに記述
    console.log('Form submitted');
  };

  return (
    <CompanyInfoForm
      {...SampleData}
      onSubmit={handleSubmit}
    />
  );
};

export default CompanyInfoFormSample;