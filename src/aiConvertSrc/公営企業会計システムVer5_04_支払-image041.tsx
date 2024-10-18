import React from 'react';
import styled from 'styled-components';

// 工事情報のプロパティ型定義
type ConstructionInfoProps = {
  name: string;
  startDate: string;
  endDate: string;
  status: string;
};

// 工事情報コンポーネント
const ConstructionInfo: React.FC<ConstructionInfoProps> = ({ name, startDate, endDate, status }) => {
  return (
    <Container>
      <Title>工事名</Title>
      <Name>{name || '---'}</Name>
      <InfoRow>
        <InfoItem>
          <InfoLabel>着手日</InfoLabel>
          <InfoValue>{startDate || '---'}</InfoValue>
        </InfoItem>
        <InfoItem>
          <InfoLabel>竣工日</InfoLabel>
          <InfoValue>{endDate || '---'}</InfoValue>
        </InfoItem>
      </InfoRow>
      <InfoRow>
        <InfoItem>
          <InfoLabel>工事進捗</InfoLabel>
          <InfoValue>{status || '---'}</InfoValue>
        </InfoItem>
      </InfoRow>
    </Container>
  );
};

// スタイリング
const Container = styled.div`
  background-color: #f0f0f0;
  padding: 16px;
  border-radius: 4px;
`;

const Title = styled.h4`
  margin: 0 0 8px;
`;

const Name = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin: 0 0 16px;
`;

const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

const InfoItem = styled.div`
  flex: 1;
`;

const InfoLabel = styled.span`
  font-weight: bold;
  margin-right: 8px;
`;

const InfoValue = styled.span`
  color: #666;
`;

// 使用例
const ConstructionInfoExample: React.FC = () => {
  const sampleData: ConstructionInfoProps = {
    name: '3街 町口橋の補強工事および舗装工事',
    startDate: '平成31年4月15日',
    endDate: '平成31年4月15日',
    status: '---',
  };

  return <ConstructionInfo {...sampleData} />;
};

export default ConstructionInfoExample;