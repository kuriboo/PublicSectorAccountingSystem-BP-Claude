import React from 'react';
import styled from 'styled-components';

// 資産マスタの型定義
type Asset = {
  code: string;
  name: string;
  branch: string;
  manager: string;
  amount: number;
  currentAmount: number;
  note: string;
  location: string[];
  acquisitionYear: number;
  disposalYear: number | null;
};

// コンポーネントのProps型定義
type AssetDetailFormProps = {
  asset: Asset;
  onSave: (asset: Asset) => void;
  onCancel: () => void;
};

// スタイルコンポーネント
const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 500px;
  margin: 0 auto;
`;

const FormRow = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

const FormLabel = styled.label`
  flex: 1;
`;

const FormInput = styled.input`
  flex: 2;
  padding: 5px;
`;

const FormSelect = styled.select`
  flex: 2;
  padding: 5px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

// 資産の詳細フォームコンポーネント
const AssetDetailForm: React.FC<AssetDetailFormProps> = ({ asset, onSave, onCancel }) => {
  // 資産情報のステート管理
  const [formData, setFormData] = React.useState<Asset>(asset);

  // フォーム入力値の変更ハンドラ
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  // 保存ボタンクリックハンドラ  
  const handleSave = () => {
    onSave(formData);
  };

  return (
    <FormContainer>
      <FormRow>
        <FormLabel>資産番号</FormLabel>
        <FormInput type="text" name="code" value={formData.code} onChange={handleChange} />
      </FormRow>
      <FormRow>  
        <FormLabel>資産名称</FormLabel>
        <FormInput type="text" name="name" value={formData.name} onChange={handleChange} />
      </FormRow>
      <FormRow>
        <FormLabel>部署</FormLabel>  
        <FormInput type="text" name="branch" value={formData.branch} onChange={handleChange} />
      </FormRow>
      <FormRow>
        <FormLabel>管理者</FormLabel>
        <FormInput type="text" name="manager" value={formData.manager} onChange={handleChange} />
      </FormRow>
      <FormRow>
        <FormLabel>金額</FormLabel>
        <FormInput type="number" name="amount" value={formData.amount} onChange={handleChange} />  
      </FormRow>
      <FormRow>
        <FormLabel>現在金額</FormLabel>
        <FormInput type="number" name="currentAmount" value={formData.currentAmount} onChange={handleChange} />
      </FormRow>
      <FormRow>
        <FormLabel>摘要</FormLabel>
        <FormInput type="text" name="note" value={formData.note} onChange={handleChange} />
      </FormRow>
      <FormRow>
        <FormLabel>設置場所</FormLabel>
        <FormInput type="text" name="location" value={formData.location.join(',')} onChange={handleChange} />
      </FormRow>    
      <FormRow>
        <FormLabel>取得年</FormLabel>
        <FormSelect name="acquisitionYear" value={formData.acquisitionYear} onChange={handleChange}>
          <option value="">選択してください</option>
          {[...Array(50)].map((_, i) => (
            <option key={i} value={new Date().getFullYear() - i}>{new Date().getFullYear() - i}年</option>
          ))}
        </FormSelect>
      </FormRow>
      <FormRow>
        <FormLabel>廃棄予定年</FormLabel>
        <FormSelect name="disposalYear" value={formData.disposalYear ?? ''} onChange={handleChange}>
          <option value="">選択してください</option>
          {[...Array(20)].map((_, i) => (
            <option key={i} value={new Date().getFullYear() + i}>{new Date().getFullYear() + i}年</option>
          ))}
        </FormSelect>
      </FormRow>

      <ButtonContainer>
        <Button onClick={handleSave}>保存</Button>
        <Button onClick={onCancel}>キャンセル</Button>  
      </ButtonContainer>
    </FormContainer>
  );
};

// 使用例
const sampleAsset: Asset = {
  code: '8002400',
  name: '水道施設管理センター',
  branch: '管理部',
  manager: '田中',
  amount: 5000000,
  currentAmount: 1000000,
  note: '行政市町水道局',
  location: ['取水所'],
  acquisitionYear: 1998, 
  disposalYear: 2029
};

const AssetDetailFormExample: React.FC = () => {
  const handleSave = (asset: Asset) => {
    console.log('Saved:', asset);
    // 保存処理を実装
  };

  const handleCancel = () => {
    console.log('Cancelled');
    // キャンセル処理を実装  
  };

  return <AssetDetailForm asset={sampleAsset} onSave={handleSave} onCancel={handleCancel} />;
};

export default AssetDetailFormExample;