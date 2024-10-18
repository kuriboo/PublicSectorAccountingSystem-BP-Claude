import React from 'react';
import styled from 'styled-components';

// 製品情報の型定義
type ProductInfo = {
  id: string;
  name: string;
  price: number;
  unitPrice: number;
  annualOutput: number;
  location: number;
  flatness: number;
  parallelism: number;
  perpendicularityTolerance: number;
  positionTolerance: number;
};

// コンポーネントのプロパティの型定義
interface ProductInfoProps {
  productInfo: ProductInfo;
}

// スタイル定義
const InfoWrapper = styled.div`
  background-color: #f0f0f0;
  padding: 16px;
  border-radius: 8px;
  width: 100%;
  max-width: 400px;
  box-sizing: border-box;

  @media (max-width: 480px) {
    max-width: 100%;
  }
`;

const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`;

const InfoLabel = styled.div`
  font-weight: bold;
`;

const InfoValue = styled.div`
  text-align: right;
`;

// 製品情報コンポーネント
const ProductInfoComponent: React.FC<ProductInfoProps> = ({ productInfo }) => {
  // 製品情報が空の場合はnullを返す
  if (!productInfo) {
    return null;
  }

  return (
    <InfoWrapper>
      <InfoRow>
        <InfoLabel>品番</InfoLabel>
        <InfoValue>{productInfo.id || '-'}</InfoValue>
      </InfoRow>
      <InfoRow>
        <InfoLabel>品名</InfoLabel>
        <InfoValue>{productInfo.name || '-'}</InfoValue>
      </InfoRow>
      <InfoRow>
        <InfoLabel>規格</InfoLabel>
        <InfoValue>{`φ${productInfo.price}`}</InfoValue>
      </InfoRow>
      <InfoRow>
        <InfoLabel>当初出庫年度</InfoLabel>
        <InfoValue>{productInfo.annualOutput ? `平成${productInfo.annualOutput}年度` : '-'}</InfoValue>
      </InfoRow>
      <InfoRow>
        <InfoLabel>当初出庫番号</InfoLabel>
        <InfoValue>{productInfo.unitPrice || '-'}</InfoValue>
      </InfoRow>
      <InfoRow>
        <InfoLabel>行番号</InfoLabel>
        <InfoValue>{productInfo.location || '-'}</InfoValue>
      </InfoRow>
      <InfoRow>
        <InfoLabel>数量</InfoLabel>
        <InfoValue>{productInfo.flatness || '-'}</InfoValue>
      </InfoRow>
      <InfoRow>
        <InfoLabel>単位</InfoLabel>
        <InfoValue>m</InfoValue>
      </InfoRow>
      <InfoRow>
        <InfoLabel>単価</InfoLabel>
        <InfoValue>{productInfo.parallelism}</InfoValue>
      </InfoRow>
      <InfoRow>
        <InfoLabel>平均単価</InfoLabel>
        <InfoValue>{productInfo.perpendicularityTolerance}</InfoValue>
      </InfoRow>
      <InfoRow>
        <InfoLabel>仮出庫数</InfoLabel>
        <InfoValue>{productInfo.positionTolerance || '0.00'}</InfoValue>
      </InfoRow>
      <InfoRow>
        <InfoLabel>現在庫数</InfoLabel>
        <InfoValue>{(productInfo.flatness || 0) - (productInfo.positionTolerance || 0)}</InfoValue>
      </InfoRow>
    </InfoWrapper>
  );
};

// サンプルデータ
const sampleData: ProductInfo = {
  id: '0000701015',
  name: '瀬尾博',
  price: 200,
  unitPrice: 2828798.00,
  annualOutput: 18,
  location: 1,
  flatness: 1,
  parallelism: 2823798.00,
  perpendicularityTolerance: 2205949.50,
  positionTolerance: 0.00,
};

// 使用例
const App: React.FC = () => {
  return (
    <div>
      <h1>製品情報</h1>
      <ProductInfoComponent productInfo={sampleData} />
    </div>
  );
};

export default App;