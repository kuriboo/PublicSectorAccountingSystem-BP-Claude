import React from 'react';
import styled from 'styled-components';

// 補正予算事項の型定義
type SupplementaryBudgetItemType = {
  id: number;
  title: string;
  year: number;
  lastDay: string;
};

// コンポーネントのプロパティの型定義
type SupplementaryBudgetFormProps = {
  item?: SupplementaryBudgetItemType;
  onSave: (item: SupplementaryBudgetItemType) => void;
  onCancel: () => void;
};

// スタイル定義
const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 5px;
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
  flex: 0 0 100px;
`;

const FormInput = styled.input`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
  flex: 1;
`;

const FormSelect = styled.select`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
  flex: 1;
`;

const FormRadio = styled.input`
  margin-right: 5px;
`;

const FormButton = styled.button`
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 3px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

// 補正予算事項登録フォームコンポーネント
const SupplementaryBudgetForm: React.FC<SupplementaryBudgetFormProps> = ({ item, onSave, onCancel }) => {
  // フォームの状態管理
  const [formData, setFormData] = React.useState<SupplementaryBudgetItemType>(
    item || {
      id: 0,
      title: '',
      year: 0,
      lastDay: '',
      // その他のプロパティを初期化
    }
  );

  // フォームの入力値が変更された時のハンドラ
  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  // 保存ボタンがクリックされた時のハンドラ
  const handleSave = () => {
    onSave(formData);
  };

  return (
    <FormWrapper>
      <FormRow>
        <FormLabel>年度</FormLabel>
        <FormInput type="text" name="year" value={formData.year} onChange={handleChange} />
      </FormRow>
      <FormRow>
        <FormLabel>補正予算番号</FormLabel>
        <FormInput type="text" name="id" value={formData.id} onChange={handleChange} />
      </FormRow>
      <FormRow>
        <FormLabel>タイトル</FormLabel>
        <FormInput type="text" name="title" value={formData.title} onChange={handleChange} />
      </FormRow>
      {/* その他のフォーム項目を追加 */}
      <FormRow>
        <FormButton onClick={handleSave}>OK</FormButton>
        <FormButton onClick={onCancel}>クリア</FormButton>
      </FormRow>
    </FormWrapper>
  );
};

// サンプルデータ
const sampleItem: SupplementaryBudgetItemType = {
  id: 1,
  title: '補正1号',
  year: 2023,
  lastDay: '2024-01-21',
};

// 使用例
const App: React.FC = () => {
  const handleSave = (item: SupplementaryBudgetItemType) => {
    console.log('Saved:', item);
  };

  const handleCancel = () => {
    console.log('Cancelled');
  };

  return (
    <div>
      <h1>補正予算事項登録画面</h1>
      <SupplementaryBudgetForm item={sampleItem} onSave={handleSave} onCancel={handleCancel} />
    </div>
  );
};

export default App;