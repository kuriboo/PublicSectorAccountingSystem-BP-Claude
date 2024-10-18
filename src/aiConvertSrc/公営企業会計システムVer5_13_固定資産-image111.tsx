import React from 'react';
import styled from '@emotion/styled';

// 管理画面の入力フォームのプロパティ型
type ManagementFormProps = {
  data?: {
    storeName: string;
    storeCode: string;
    storeTel: string;
    storeZip: string;
    managerName: string;
    managerCode: string;
    managerTel: string;
    managerAddress: string;
    startDate: string;
    endDate: string;
    name: string;
    address: string;
  };
};

// 管理画面の入力フォームコンポーネント
const ManagementForm: React.FC<ManagementFormProps> = ({ data }) => {
  // データが未定義の場合は空オブジェクトを使用
  const formData = data || {};

  return (
    <FormWrapper>
      <FormRow>
        <FormLabel>範囲指定</FormLabel>
        <FormInput value={formData.storeName || ''} />
        <NameLabel>～</NameLabel>
        <FormInput value={formData.storeCode || ''} />
        <FormButton>部門</FormButton>
      </FormRow>
      <FormRow>
        <FormLabel>資産番号</FormLabel>
        <FormNumberInput value={formData.storeTel || ''} />
        <NameLabel>～</NameLabel>
        <FormNumberInput value={formData.storeZip || ''} />
        <FormButton>施設</FormButton>
      </FormRow>
      <FormRow>
        <FormLabel>管理者枠</FormLabel>
        <FormNumberInput value={formData.managerName || ''} />
        <NameLabel>～</NameLabel>
        <FormNumberInput value={formData.managerCode || ''} />
        <FormButton>地区</FormButton>
      </FormRow>
      <FormRow>
        <FormLabel>管理規格</FormLabel>
        <FormNumberInput value={formData.managerTel || ''} />
        <NameLabel>～</NameLabel>
        <FormNumberInput value={formData.managerAddress || ''} />
        <FormButton>地区</FormButton>
      </FormRow>
      <FormRow>
        <FormLabel>取得年月日</FormLabel>
        <FormInput value={formData.startDate || ''} />
        <NameLabel>～</NameLabel>
        <FormInput value={formData.endDate || ''} />
      </FormRow>
      <FormRow>
        <FormLabel>名称</FormLabel>
        <FormInput value={formData.name || ''} />
      </FormRow>
      <FormRow>
        <FormLabel>所在地</FormLabel>
        <FormInput value={formData.address || ''} />
      </FormRow>
      <FormRow>
        <SearchButton>検索</SearchButton>
      </FormRow>
    </FormWrapper>
  );
};

// スタイル定義
const FormWrapper = styled.div`
  padding: 16px;
`;

const FormRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

const FormLabel = styled.div`
  width: 120px;
`;

const NameLabel = styled.span`
  margin: 0 8px;
`;

const FormInput = styled.input`
  width: 160px;
  height: 24px;
  padding: 4px;
`;

const FormNumberInput = styled.input`
  width: 120px;
  height: 24px;
  padding: 4px;
`;

const FormButton = styled.button`
  width: 64px;
  height: 24px;
  margin-left: 8px;
`;  

const SearchButton = styled.button`
  width: 120px;
  height: 32px;
  margin-left: auto;
`;

// 使用例
const App: React.FC = () => {
  const sampleData = {
    storeName: '資産管理',
    storeCode: '999999',
    storeTel: '9999999999',
    storeZip: '999999',
    managerName: '鈴木',
    managerCode: '001099',
    managerTel: '999999',
    managerAddress: '999999',
    startDate: 'H29.09.01',
    endDate: '～H30.08.31',
    name: '資産',
    address: '所在地',
  };

  return (
    <div>
      <h1>アセットマネジメント様式一括変換</h1>
      <ManagementForm data={sampleData} />
    </div>
  );
};

export default App;