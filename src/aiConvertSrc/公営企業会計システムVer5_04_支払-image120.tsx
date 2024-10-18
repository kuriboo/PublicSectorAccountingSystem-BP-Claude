// 公衆企業会計パッケージコンポーネント
import React from 'react';
import styled from 'styled-components';

// プロパティの型定義
type PublicAccountingPackageProps = {
  warning?: string;
  description?: string;
};

// スタイルコンポーネント
const Container = styled.div`
  border: 2px solid #ffd700;
  border-radius: 5px;
  padding: 20px;
  margin-bottom: 20px;
  background-color: #fff;
  
  @media (max-width: 600px) {
    padding: 10px;
  }
`;

const Warning = styled.p`
  color: #ff0000;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Description = styled.p`
  margin-bottom: 0;
`;

// 公衆企業会計パッケージコンポーネント
const PublicAccountingPackage: React.FC<PublicAccountingPackageProps> = ({ warning, description }) => {
  return (
    <Container>
      {warning && <Warning>{warning}</Warning>}
      {description ? (
        <Description>{description}</Description>
      ) : (
        <Description>説明文が設定されていません。</Description>
      )}
    </Container>
  );
};



// 使用例
const PackageSample = () => {
  return (
    <div>
      <PublicAccountingPackage
        warning="現時点では動作確認段階であり、実際の業務に適用はできません。詳細は担当者までお問い合わせください。"
        description="この度は公衆企業会計パッケージをご利用いただきありがとうございます。"
      />
      <PublicAccountingPackage description="この度は公衆企業会計パッケージをご利用いただきありがとうございます。" />
      <PublicAccountingPackage />
    </div>
  );
};

export default PackageSample;