import React from 'react';
import styled from '@emotion/styled';

type FixedAssetRatioProps = {
  /** 固定資産構成比率(%) */
  fixedAssetRatio: number;
  /** 固定資産 + 流動資産 + 繰延資産 */
  totalAssets: number;
};

const FixedAssetRatio: React.FC<FixedAssetRatioProps> = ({ fixedAssetRatio, totalAssets }) => {
  return (
    <Container>
      <Title>固定資産</Title>
      <InputContainer>
        <Input type="number" value={fixedAssetRatio} readOnly />
        <Unit>%</Unit>
      </InputContainer>
      <Divider />
      <TotalAssetsContainer>
        <TotalAssetsLabel>固定資産+流動資産+繰延資産</TotalAssetsLabel>
        <TotalAssets>{totalAssets.toLocaleString()}</TotalAssets>
      </TotalAssetsContainer>
    </Container>
  );
};

// スタイリング
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  max-width: 300px;
  margin: 0 auto;

  @media (max-width: 600px) {
    max-width: 100%;
  }
`;

const Title = styled.h3`
  margin: 0 0 8px;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  width: 60px;
  padding: 4px;
  border: 1px solid #ccc;
  border-radius: 4px;
  text-align: right;
`;

const Unit = styled.span`
  margin-left: 4px;
`;

const Divider = styled.hr`
  width: 100%;
  margin: 16px 0;
  border: none;
  border-top: 1px solid #ccc;
`;

const TotalAssetsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TotalAssetsLabel = styled.p`
  margin: 0;
  font-size: 14px;
  text-align: center;
`;

const TotalAssets = styled.p`
  margin: 4px 0 0;
  font-size: 18px;
  font-weight: bold;
`;

// サンプルデータを用いた使用例
const SampleUsage: React.FC = () => {
  const sampleData = {
    fixedAssetRatio: 56.72,
    totalAssets: 100,
  };

  return <FixedAssetRatio {...sampleData} />;
};

export default FixedAssetRatio;