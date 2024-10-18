import React from 'react';
import styled from '@emotion/styled';

// 型定義
type CompanyRegistrationFormProps = {
  companyNumber: string;
  companyName: string;
  establishmentDate: string;
  capital: number;
  numberOfExecutives: number;
  numberOfEmployees: number;
  businessDescription: string;
  // その他のプロパティ...
};

// スタイル定義
const FormContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 5px;
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const FormLabel = styled.label`
  font-weight: bold;
`;

const FormInput = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const FormSelect = styled.select`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

// コンポーネント定義
const CompanyRegistrationForm: React.FC<CompanyRegistrationFormProps> = ({
  companyNumber,
  companyName,
  establishmentDate,
  capital,
  numberOfExecutives,
  numberOfEmployees,
  businessDescription,
}) => {
  return (
    <FormContainer>
      <div>
        <FormLabel>会社番号</FormLabel>
        <FormInput type="text" value={companyNumber || ''} readOnly />
      </div>
      <div>
        <FormLabel>会社名</FormLabel>
        <FormInput type="text" value={companyName || ''} readOnly />
      </div>
      <div>
        <FormLabel>設立年月日</FormLabel>
        <FormInput type="text" value={establishmentDate || ''} readOnly />
      </div>
      <div>
        <FormLabel>資本金</FormLabel>
        <FormInput type="number" value={capital || 0} readOnly />
      </div>
      <div>
        <FormLabel>役員数</FormLabel>
        <FormSelect>
          <option value={numberOfExecutives || 0}>{numberOfExecutives || 0}</option>
        </FormSelect>
      </div>
      <div>
        <FormLabel>従業員数</FormLabel>
        <FormSelect>
          <option value={numberOfEmployees || 0}>{numberOfEmployees || 0}</option>
        </FormSelect>
      </div>
      <div>
        <FormLabel>事業内容</FormLabel>
        <FormInput type="text" value={businessDescription || ''} readOnly />
      </div>
    </FormContainer>
  );
};

// サンプルデータを用いた使用例
const SampleData: CompanyRegistrationFormProps = {
  companyNumber: '0000002001',
  companyName: '○○建設株式会社',
  establishmentDate: '平成29年09月04日',
  capital: 123456780,
  numberOfExecutives: 30,
  numberOfEmployees: 30,
  businessDescription: '建設業',
};

const App: React.FC = () => {
  return (
    <div>
      <h1>会社登録フォーム</h1>
      <CompanyRegistrationForm {...SampleData} />
    </div>
  );
};

export default App;