import React from 'react';
import styled from 'styled-components';

// 業者登録フォームのプロパティ型定義
type RegistrationFormProps = {
  onSubmit: (data: RegistrationData) => void;
};

// 登録データの型定義
type RegistrationData = {
  companyName: string;
  postalCode: string;
  address: string;
  phoneNumber: string;
  faxNumber: string;
  email: string;
  representative: string;
  capital: string;
  businessType: string;
  industry: string;
};

// 業者登録フォームコンポーネント
const RegistrationForm: React.FC<RegistrationFormProps> = ({ onSubmit }) => {
  // フォームの状態管理
  const [formData, setFormData] = React.useState<RegistrationData>({
    companyName: '',
    postalCode: '',
    address: '',
    phoneNumber: '',
    faxNumber: '',
    email: '',
    representative: '',
    capital: '',
    businessType: '',
    industry: '',
  });

  // フォーム入力値の変更ハンドラ
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  // フォーム送信ハンドラ  
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(formData);
  };

  return (
    <FormContainer>
      <Title>業者登録</Title>
      <Form onSubmit={handleSubmit}>
        <InputGroup>
          <Label>業者名</Label>
          <Input
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            required
          />
        </InputGroup>
        <InputGroup>
          <Label>郵便番号</Label>
          <Input
            type="text"
            name="postalCode"
            value={formData.postalCode}
            onChange={handleChange}
          />
        </InputGroup>
        <InputGroup>
          <Label>住所</Label>
          <Input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
        </InputGroup>
        <InputGroup>
          <Label>電話番号</Label>
          <Input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
        </InputGroup>
        <InputGroup>
          <Label>FAX番号</Label>
          <Input
            type="tel"
            name="faxNumber"
            value={formData.faxNumber}
            onChange={handleChange}
          />
        </InputGroup>
        <InputGroup>
          <Label>メールアドレス</Label>
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </InputGroup>
        <InputGroup>
          <Label>代表者</Label>
          <Input
            type="text"
            name="representative"
            value={formData.representative}
            onChange={handleChange}
          />
        </InputGroup>
        <InputGroup>
          <Label>資本金</Label>
          <Input
            type="text"
            name="capital"
            value={formData.capital}
            onChange={handleChange}
          />
        </InputGroup>
        <InputGroup>
          <Label>業種</Label>
          <Input
            type="text"
            name="businessType"
            value={formData.businessType}
            onChange={handleChange}
          />
        </InputGroup>
        <InputGroup>
          <Label>業態</Label>
          <Input
            type="text"
            name="industry"
            value={formData.industry}
            onChange={handleChange}
          />
        </InputGroup>
        <SubmitButton type="submit">登録</SubmitButton>
      </Form>
    </FormContainer>
  );
};

// スタイリング
const FormContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: grid;
  gap: 20px;
`;

const InputGroup = styled.div`
  display: grid;
  gap: 5px;
`;

const Label = styled.label`
  font-weight: bold;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

// 使用例
const App: React.FC = () => {
  const handleRegistration = (data: RegistrationData) => {
    // 登録処理の実装
    console.log(data);
  };

  return (
    <div>
      <h1>業者登録ページ</h1>
      <RegistrationForm onSubmit={handleRegistration} />
    </div>
  );
};

export default App;