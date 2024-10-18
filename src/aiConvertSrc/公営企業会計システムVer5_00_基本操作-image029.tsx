import React from 'react';
import styled from 'styled-components';

// 企業情報の型定義
interface CompanyInfo {
  name: string;
  department: string;
  address: string;
}

// コンポーネントのプロパティの型定義
interface CompanyInfoProps {
  companyInfo: CompanyInfo;
}

// スタイル定義
const CompanyInfoWrapper = styled.div`
  background-color: #f0f0f0;
  padding: 16px;
  border-radius: 4px;
  margin-bottom: 16px;

  @media (max-width: 600px) {
    padding: 12px;
  }
`;

const CompanyName = styled.h2`
  font-size: 24px;
  margin-bottom: 8px;

  @media (max-width: 600px) {
    font-size: 20px;
  }
`;

const CompanyDepartment = styled.p`
  font-size: 16px;
  margin-bottom: 4px;

  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

const CompanyAddress = styled.p`
  font-size: 16px;

  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

// 企業情報コンポーネント
const CompanyInfoComponent: React.FC<CompanyInfoProps> = ({ companyInfo }) => {
  // プロパティの値が空の場合のデフォルト値を設定
  const { name = '', department = '', address = '' } = companyInfo;

  return (
    <CompanyInfoWrapper>
      <CompanyName>{name}</CompanyName>
      <CompanyDepartment>{department}</CompanyDepartment>
      <CompanyAddress>{address}</CompanyAddress>
    </CompanyInfoWrapper>
  );
};

// サンプルデータ
const sampleCompanyInfo: CompanyInfo = {
  name: '支出決定入力(一般 負担者)',
  department: '行政市事業会計',
  address: '高高青沢 管理者 行政 太郎',
};

// 使用例
const App: React.FC = () => {
  return (
    <div>
      <h1>企業情報</h1>
      <CompanyInfoComponent companyInfo={sampleCompanyInfo} />
    </div>
  );
};

export default App;