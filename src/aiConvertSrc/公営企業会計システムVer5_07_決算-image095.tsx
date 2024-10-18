import React from 'react';
import styled from 'styled-components';

// 型定義
interface FormData {
  bankName: string;
  bankBranch: string;
  postalCode: string;
  postalAddress: string;
  phoneNumber: string;
  memo: string;
  name1: string;
  name2: string;
}

interface BankFormProps {
  formData: FormData;
  onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onSubmit: () => void;
  onCancel: () => void;
}

// スタイリング
const FormWrapper = styled.div`
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 5px;
  width: 100%;
  max-width: 500px;
  box-sizing: border-box;
`;

const FormTitle = styled.h2`
  margin: 0 0 20px;
`;

const InputWrapper = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;

const Select = styled.select`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;

const ButtonWrapper = styled.div`
  text-align: center;
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 10px 20px;
  margin: 0 10px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  
  &:hover {
    opacity: 0.8;
  }
`;

const OkButton = styled(Button)`
  background-color: #007bff;
  color: #fff;
`;

const CancelButton = styled(Button)`
  background-color: #6c757d;
  color: #fff;
`;

// コンポーネント
const BankForm: React.FC<BankFormProps> = ({ formData, onChange, onSubmit, onCancel }) => {
  return (
    <FormWrapper>
      <FormTitle>還付用金融機関情報</FormTitle>
      <InputWrapper>
        <Label>銀行名</Label>
        <Input type="text" name="bankName" value={formData.bankName} onChange={onChange} />
      </InputWrapper>
      <InputWrapper>
        <Label>支店名</Label>
        <Select name="bankBranch" value={formData.bankBranch} onChange={onChange}>
          <option value="">選択してください</option>
          {/* 支店リストをオプションとして追加 */}
        </Select>
      </InputWrapper>
      <InputWrapper>
        <Label>郵便番号</Label>
        <Input type="text" name="postalCode" value={formData.postalCode} onChange={onChange} />
      </InputWrapper>
      <InputWrapper>
        <Label>郵便局住所</Label>
        <Select name="postalAddress" value={formData.postalAddress} onChange={onChange}>
          <option value="">選択してください</option>
          {/* 郵便局リストをオプションとして追加 */}
        </Select>
      </InputWrapper>
      <InputWrapper>
        <Label>預金種別</Label>
        <Select name="accountType" value={formData.accountType} onChange={onChange}>
          <option value="">選択してください</option>
          {/* 預金種別リストをオプションとして追加 */}
        </Select>
      </InputWrapper>
      <InputWrapper>
        <Label>口座番号</Label>
        <Input type="text" name="accountNumber" value={formData.accountNumber} onChange={onChange} />
      </InputWrapper>
      <InputWrapper>
        <Label>ゆうちょ記号番号</Label>
        <div>
          <Input type="text" name="name1" value={formData.name1} onChange={onChange} />
          <Input type="text" name="name2" value={formData.name2} onChange={onChange} />
        </div>
      </InputWrapper>
      <InputWrapper>
        <Label>郵便局名等</Label>
        <Input type="text" name="postOfficeName" value={formData.postOfficeName} onChange={onChange} />
      </InputWrapper>
      <ButtonWrapper>
        <OkButton onClick={onSubmit}>OK</OkButton>
        <CancelButton onClick={onCancel}>クリア</CancelButton>
      </ButtonWrapper>
    </FormWrapper>
  );
};

// サンプルデータ
const sampleData: FormData = {
  bankName: '',
  bankBranch: '',
  postalCode: '',
  postalAddress: '',
  accountType: '',
  accountNumber: '',
  memo: '',
  name1: '',
  name2: '',
};

// 使用例
const App: React.FC = () => {
  const [formData, setFormData] = React.useState<FormData>(sampleData);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    // フォームのサブミット処理
    console.log(formData);
  };

  const handleCancel = () => {
    // フォームのクリア処理
    setFormData(sampleData);
  };

  return (
    <div>
      <h1>銀行情報フォーム</h1>
      <BankForm
        formData={formData}
        onChange={handleChange}
        onSubmit={handleSubmit}
        onCancel={handleCancel}
      />
    </div>
  );
};

export default App;