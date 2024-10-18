import React from 'react';
import styled from 'styled-components';

// 資産取得登録フォームのプロパティ
interface AssetPurchaseFormProps {
  onSubmit: (data: AssetPurchaseData) => void;
}

// 資産取得登録フォームの入力データ
interface AssetPurchaseData {
  assetType: string;
  registrationDivision: string;
  assetCategory: string;
  registrationNumber: string;
  divisionCode: string;
  sectionCode: string;
  lifetimeInYears: string;
  manufacturingNumber: string;
  assetName: string;
  acquisitionMethod: string;
  managementDivision: string;
  acquisitionAmount: number;
  acquisitionDate: string;
  startOfUseDate: string;
  note: string;
  usageInfo: string;
  budgetInfo: string;
  taxInfo: string;
}

// 資産取得登録フォームのスタイル
const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  max-width: 600px;
  margin: 0 auto;

  @media (max-width: 600px) {
    max-width: 100%;
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
`;

const FormLabel = styled.label`
  font-weight: bold;
`;

const FormInput = styled.input`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
`;

const FormSelect = styled.select`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
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

// 資産取得登録フォームコンポーネント
const AssetPurchaseForm: React.FC<AssetPurchaseFormProps> = ({ onSubmit }) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // フォームの入力値を取得して、onSubmitコールバックを呼び出す
    const formData = new FormData(event.currentTarget);
    const data: AssetPurchaseData = {
      assetType: formData.get('assetType') as string,
      registrationDivision: formData.get('registrationDivision') as string,
      assetCategory: formData.get('assetCategory') as string,
      registrationNumber: formData.get('registrationNumber') as string,
      divisionCode: formData.get('divisionCode') as string,
      sectionCode: formData.get('sectionCode') as string,
      lifetimeInYears: formData.get('lifetimeInYears') as string,
      manufacturingNumber: formData.get('manufacturingNumber') as string,
      assetName: formData.get('assetName') as string,
      acquisitionMethod: formData.get('acquisitionMethod') as string,
      managementDivision: formData.get('managementDivision') as string,
      acquisitionAmount: Number(formData.get('acquisitionAmount')),
      acquisitionDate: formData.get('acquisitionDate') as string,
      startOfUseDate: formData.get('startOfUseDate') as string,
      note: formData.get('note') as string,
      usageInfo: formData.get('usageInfo') as string,
      budgetInfo: formData.get('budgetInfo') as string,
      taxInfo: formData.get('taxInfo') as string,
    };
    onSubmit(data);
  };

  return (
    <FormWrapper>
      <h2>資産取得登録</h2>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <FormLabel>資産区分</FormLabel>
          <FormSelect name="assetType" required>
            <option value="">選択してください</option>
            <option value="登録">登録</option>
            <option value="計上">計上</option>
            <option value="削除">削除</option>
          </FormSelect>
        </FormGroup>
        {/* 他のフォーム要素も同様に実装 */}
        <SubmitButton type="submit">登録</SubmitButton>
      </form>
    </FormWrapper>
  );
};

// サンプルデータ
const sampleData: AssetPurchaseData = {
  assetType: '登録',
  registrationDivision: '本部経費',
  assetCategory: 'リース資産',
  registrationNumber: '051106001',
  divisionCode: '0001',
  sectionCode: '1001',
  lifetimeInYears: 'リース資産',
  manufacturingNumber: '',
  assetName: '所有権移転ファイナンスリース',
  acquisitionMethod: '取得',
  managementDivision: '定額法',
  acquisitionAmount: 1000000,
  acquisitionDate: '令和3年12月1日',
  startOfUseDate: '令和3年12月1日',
  note: '',
  usageInfo: '',
  budgetInfo: '',
  taxInfo: '',
};

// 使用例
const App: React.FC = () => {
  const handleSubmit = (data: AssetPurchaseData) => {
    console.log(data);
    // 登録処理を実装
  };

  return (
    <div>
      <h1>資産取得登録システム</h1>
      <AssetPurchaseForm onSubmit={handleSubmit} />
    </div>
  );
};

export default App;