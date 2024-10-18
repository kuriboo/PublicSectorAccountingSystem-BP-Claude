import React from 'react';
import styled from 'styled-components';

// 事業情報の型定義
interface BusinessInfo {
  businessDivision: string;
  managementSection: string;
}

// 詳細情報の型定義
interface DetailInfo {
  label: string;
  value: number;
}

// コンポーネントのプロパティの型定義
interface BusinessReportFormProps {
  year: number;
  businessType: string;
  waterDrainage: string;
  businessInfo: BusinessInfo;
  detailInfo: DetailInfo[];
}

// スタイルコンポーネント
const FormWrapper = styled.div`
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
`;

const FormLabel = styled.div`
  margin-bottom: 10px;
  font-weight: bold;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 5px;
  margin-bottom: 10px;
  box-sizing: border-box;
`;

const FormSelect = styled.select`
  width: 100%;
  padding: 5px;
  margin-bottom: 10px;
`;

const DetailLabel = styled.div`
  display: inline-block;
  width: 80%;
  margin-bottom: 5px;
`;

const DetailInput = styled.input`
  display: inline-block;
  width: 20%;
  padding: 5px;
  box-sizing: border-box;
  margin-bottom: 5px;
`;

const ButtonWrapper = styled.div`
  text-align: center;
  button {
    margin: 0 10px;
  }
`;

// ビジネスレポートフォームコンポーネント
const BusinessReportForm: React.FC<BusinessReportFormProps> = ({
  year,
  businessType,
  waterDrainage,
  businessInfo,
  detailInfo,
}) => {
  return (
    <FormWrapper>
      <FormLabel>年度</FormLabel>
      <FormInput type="number" value={year} readOnly />

      <FormLabel>事業情報</FormLabel>
      <FormInput type="text" value={businessInfo.businessDivision} readOnly />
      <FormInput type="text" value={businessInfo.managementSection} readOnly />

      <FormLabel>詳細情報</FormLabel>
      {detailInfo.map((info, index) => (
        <div key={index}>
          <DetailLabel>{info.label}</DetailLabel>
          <DetailInput type="number" value={info.value} readOnly />
        </div>
      ))}

      <ButtonWrapper>
        <button>OK</button>
        <button>クリア</button>
        <button>キャンセル</button>
      </ButtonWrapper>
    </FormWrapper>
  );
};

// サンプルデータ
const sampleData: BusinessReportFormProps = {
  year: 2002,
  businessType: '事業・事業',
  waterDrainage: '簡易水道事業',
  businessInfo: {
    businessDivision: '東京都行政市',
    managementSection: '行政 太郎',
  },
  detailInfo: [
    { label: '設定なし', value: 0 },
    { label: 'F', value: 0 },
    { label: 'F', value: 0 },
    { label: 'F', value: 0 },
    { label: 'F', value: 0 },
    { label: 'F', value: 0 },
    { label: 'F', value: 0 },
  ],
};

// 使用例
const App: React.FC = () => {
  return (
    <div>
      <h1>決算統計事業詳細情報</h1>
      <BusinessReportForm {...sampleData} />
    </div>
  );
};

export default App;