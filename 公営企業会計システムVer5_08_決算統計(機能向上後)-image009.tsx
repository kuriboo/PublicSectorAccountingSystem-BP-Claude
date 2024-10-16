// CompanyRegistrationForm.tsx
import React, { useState } from 'react';
import styled from '@emotion/styled';

// 型定義
type CompanyData = {
  name: string;
  address: string;
  industry: string;
  fiscalYear: string;
  closingMonth: string;
  qualifiedDate: string;
};

type CompanyRegistrationFormProps = {
  onSubmit: (data: CompanyData) => void;
};

// スタイリング
const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  background-color: #f0f0f0;
  border-radius: 4px;

  @media (min-width: 768px) {
    max-width: 500px;
    margin: 0 auto;
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  font-weight: bold;
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

const SubmitButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

// コンポーネント
const CompanyRegistrationForm: React.FC<CompanyRegistrationFormProps> = ({ onSubmit }) => {
  const [companyData, setCompanyData] = useState<CompanyData>({
    name: '',
    address: '',
    industry: '',
    fiscalYear: '',
    closingMonth: '',
    qualifiedDate: '',
  });

  // フォーム入力値の変更ハンドラ
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setCompanyData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // 送信ハンドラ
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(companyData);
  };

  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="name">企業名</Label>
          <Input
            type="text"
            id="name"
            name="name"
            value={companyData.name}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="address">所在地</Label>
          <Input
            type="text"
            id="address"
            name="address"
            value={companyData.address}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="industry">業種</Label>
          <Select
            id="industry"
            name="industry"
            value={companyData.industry}
            onChange={handleChange}
            required
          >
            <option value="">選択してください</option>
            {/* 業種のオプションを追加 */}
          </Select>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="fiscalYear">事業年度</Label>
          <Input
            type="text"
            id="fiscalYear"
            name="fiscalYear"
            value={companyData.fiscalYear}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="closingMonth">決算月</Label>
          <Select
            id="closingMonth"
            name="closingMonth"
            value={companyData.closingMonth}
            onChange={handleChange}
            required
          >
            <option value="">選択してください</option>
            {/* 決算月のオプションを追加 */}
          </Select>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="qualifiedDate">資格取得年月日</Label>
          <Input
            type="date"
            id="qualifiedDate"
            name="qualifiedDate"
            value={companyData.qualifiedDate}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <SubmitButton type="submit">登録</SubmitButton>
      </form>
    </FormContainer>
  );
};

// サンプルデータ
const sampleData: CompanyData = {
  name: '株式会社サンプル',
  address: '東京都渋谷区',
  industry: 'IT',
  fiscalYear: '2023年',
  closingMonth: '3月',
  qualifiedDate: '2023-01-01',
};

// 使用例
const App: React.FC = () => {
  const handleSubmit = (data: CompanyData) => {
    console.log('Submitted data:', data);
  };

  return (
    <div>
      <h1>企業登録フォーム</h1>
      <CompanyRegistrationForm onSubmit={handleSubmit} />
      <h2>サンプルデータ</h2>
      <pre>{JSON.stringify(sampleData, null, 2)}</pre>
    </div>
  );
};

export default App;