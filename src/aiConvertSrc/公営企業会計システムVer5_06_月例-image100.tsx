import React from 'react';
import styled from 'styled-components';

// 型定義
interface FormData {
  companyName: string;
  fiscalYear: string;
  startMonth: number;
  segment: string;
  accountClosingType: string;
}

// スタイル定義
const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  max-width: 400px;
  margin: 0 auto;
`;

const FormLabel = styled.label`
  font-weight: bold;
`;

const FormInput = styled.input`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const FormRadio = styled.input`
  margin-right: 0.5rem;
`;

const SubmitButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

// コンポーネント定義
const CompanyForm: React.FC = () => {
  const [formData, setFormData] = React.useState<FormData>({
    companyName: '',
    fiscalYear: '',
    startMonth: 4,
    segment: '',
    accountClosingType: '円単位',
  });

  // フォーム入力値の更新処理
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // フォーム送信処理
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // ここでフォームデータを送信する処理を実装
    console.log(formData);
  };

  return (
    <FormWrapper>
      <form onSubmit={handleSubmit}>
        <div>
          <FormLabel>範囲指定</FormLabel>
          <div>
            <FormLabel>
              作業年月 
              <FormInput
                type="text"
                name="fiscalYear"
                value={formData.fiscalYear}
                onChange={handleChange}
                required
              />
            </FormLabel>
          </div>
          <div>
            <FormLabel>
              計算方式 
              <FormRadio
                type="radio"
                name="startMonth"
                value={4}
                checked={formData.startMonth === 4}
                onChange={handleChange}
              />
              4月始まり
              <FormRadio
                type="radio"
                name="startMonth"
                value={12}
                checked={formData.startMonth === 12}
                onChange={handleChange}
              />
              12月始まり
            </FormLabel>
          </div>
          <div>
            <FormLabel>
              セグメント
              <FormInput
                type="text"
                name="segment"
                value={formData.segment}
                onChange={handleChange}
              />
            </FormLabel>
          </div>
          <div>
            <FormLabel>
              金額単位選択
              <FormRadio
                type="radio"
                name="accountClosingType"
                value="円単位"
                checked={formData.accountClosingType === '円単位'}
                onChange={handleChange}
              />
              円単位
              <FormRadio
                type="radio"
                name="accountClosingType"
                value="千円単位"
                checked={formData.accountClosingType === '千円単位'}
                onChange={handleChange}
              />  
              千円単位
            </FormLabel>
          </div>
        </div>
        <SubmitButton type="submit">CSV</SubmitButton>
      </form>
    </FormWrapper>
  );
};

// サンプルデータを用いた使用例
const App: React.FC = () => {
  return (
    <div>
      <h1>月次予定キャッシュ・フロー計算書</h1>
      <CompanyForm />
    </div>
  );
};

export default App;