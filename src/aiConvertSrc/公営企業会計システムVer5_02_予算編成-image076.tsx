import React from 'react';
import styled from '@emotion/styled';

// 予算税区分のタイプ定義
type TaxType = '課税' | '非課税';

// 予算権限のタイプ定義
type AuthorityType = '当初予算' | '予算権限';

// コンポーネントのプロパティタイプ定義
interface TaxDistrictFormProps {
  companyYear: string;
  taxType: TaxType;
  authorityType: AuthorityType;
  totalAmount: number;
}

// スタイル定義
const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f0f0f0;
`;

const FormTitle = styled.h2`
  margin-bottom: 20px;
`;

const FormField = styled.div`
  display: flex;
  justify-content: space-between;
  width: 300px;
  margin-bottom: 10px;
`;

const FormLabel = styled.label`
  font-weight: bold;
`;

const FormValue = styled.span``;

// 予算税区分フォームコンポーネント
const TaxDistrictForm: React.FC<TaxDistrictFormProps> = ({
  companyYear,
  taxType,
  authorityType,
  totalAmount,
}) => {
  return (
    <FormWrapper>
      <FormTitle>予算税区分集計</FormTitle>
      <FormField>
        <FormLabel>年度</FormLabel>
        <FormValue>{companyYear}</FormValue>
      </FormField>
      <FormField>
        <FormLabel>会計年度</FormLabel>
        <FormValue>{companyYear}</FormValue>
      </FormField>
      <FormField>
        <FormLabel>予算税区分</FormLabel>
        <FormValue>{taxType}</FormValue>
      </FormField>
      <FormField>
        <FormLabel>最終査定値</FormLabel>
        <FormValue>{totalAmount}</FormValue>
      </FormField>
    </FormWrapper>
  );
};

// サンプルデータ
const sampleData: TaxDistrictFormProps = {
  companyYear: '令和02年11月25日',
  taxType: '課税',
  authorityType: '当初予算',
  totalAmount: 1,
};

// 使用例コンポーネント
const UsageExample: React.FC = () => {
  return (
    <div>
      <h1>予算税区分フォームの使用例</h1>
      <TaxDistrictForm {...sampleData} />
    </div>
  );
};

export default UsageExample;