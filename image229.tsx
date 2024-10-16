import React from 'react';
import styled from '@emotion/styled';

// 入力フィールドのスタイル定義
const InputField = styled.input`
  width: 100%;
  padding: 4px;
  box-sizing: border-box;
`;

// ラベルのスタイル定義
const Label = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

// チェックボックスのスタイル定義
const Checkbox = styled.input`
  margin-right: 4px;
`;

// セレクトボックスのスタイル定義
const SelectBox = styled.select`
  width: 100%;
  padding: 4px;
`;

// ボタンのスタイル定義
const Button = styled.button`
  padding: 8px 16px;
  margin-right: 8px;
`;

// 入力フォームのコンポーネント定義
type Props = {
  onSubmit: (data: FormData) => void;
};

type FormData = {
  name: string;
  code: string;
  faxNumber: string;
  postalCode: string;
  address: string;
  bankName: string;
  bankCode: string;
  bankBranchName: string;
  bankAccountType: string;
  bankAccountNumber: string;
  isSpecialBank: boolean;
  isPrePaid: boolean;
};

const InputForm: React.FC<Props> = ({ onSubmit }) => {
  const [formData, setFormData] = React.useState<FormData>({
    name: '',
    code: '',
    faxNumber: '',
    postalCode: '',
    address: '',
    bankName: '',
    bankCode: '',
    bankBranchName: '',
    bankAccountType: '普通',
    bankAccountNumber: '',
    isSpecialBank: false,
    isPrePaid: false,
  });

  // フォームの入力値が変更された時の処理
  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type, checked } = event.target;
    const fieldValue = type === 'checkbox' ? checked : value;
    setFormData({ ...formData, [name]: fieldValue });
  };

  // フォーム送信時の処理
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Label>相手先情報</Label>
        <Label>名称 <InputField type="text" name="name" value={formData.name} onChange={handleChange} /></Label>
        <Label>略号 <InputField type="text" name="code" value={formData.code} onChange={handleChange} /></Label>
        <Label>郵便番号 <InputField type="text" name="postalCode" value={formData.postalCode} onChange={handleChange} /></Label>
        <Label>住所 <InputField type="text" name="address" value={formData.address} onChange={handleChange} /></Label>
        <Label>電話番号 <InputField type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} /></Label>
        <Label>FAX番号 <InputField type="text" name="faxNumber" value={formData.faxNumber} onChange={handleChange} /></Label>
      </div>

      <div>
        <Label>課税事業者登録</Label>
        <Label><Checkbox type="checkbox" name="isSpecialBank" checked={formData.isSpecialBank} onChange={handleChange} />課税事業者登録番号</Label>

        <div>
          <Label>振込先銀行情報</Label>
          <Label>銀行 <InputField type="text" name="bankName" value={formData.bankName} onChange={handleChange} /></Label>  
          <Label>支店 <InputField type="text" name="bankBranchName" value={formData.bankBranchName} onChange={handleChange} /></Label>

          <Label>預金種別 
            <SelectBox name="bankAccountType" value={formData.bankAccountType} onChange={handleChange}>
              <option value="普通">普通</option>
              <option value="当座">当座</option>
            </SelectBox>
          </Label>

          <div>
            <Label><Checkbox type="checkbox" name="isPrePaid" checked={formData.isPrePaid} onChange={handleChange} />前</Label>  
            <Label>FPD用口座番号 <InputField type="text" name="bankAccountNumber" value={formData.bankAccountNumber} onChange={handleChange} /></Label>
          </div>
        </div>

        <div>
          <Label>依頼書用口座番号</Label>  
          <Label>口座名義人</Label>
        </div>
      </div>

      <div>
        <Button type="submit">OK</Button>
        <Button type="button">クリア</Button>
        <Button type="button">キャンセル</Button>  
      </div>
    </form>
  );
};

export default InputForm;

// サンプルデータを用いた使用例
const sampleData: FormData = {
  name: 'ABC株式会社',
  code: 'ABC',
  phoneNumber: '03-1234-5678',
  faxNumber: '03-1234-5679',
  postalCode: '123-4567',
  address: '東京都港区1-2-3',
  bankName: 'XX銀行',
  bankCode: '1234',
  bankBranchName: 'YY支店',  
  bankAccountType: '普通',
  bankAccountNumber: '1234567',
  isSpecialBank: true,
  isPrePaid: false,
};

const App: React.FC = () => {
  const handleSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <div>
      <h1>取引先登録フォーム</h1>
      <InputForm onSubmit={handleSubmit} />
    </div>
  );
};