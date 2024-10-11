import React from 'react';
import styled from '@emotion/styled';

type CompanyDetailProps = {
  fiscalYear: number;
  prefecture: string;
  years: number;
};

const CompanyDetail: React.FC<CompanyDetailProps> = ({ fiscalYear, prefecture, years }) => {
  return (
    <Container>
      <Title>科目別事務費按分計算</Title>
      <Subtitle>総務課 予算・会計担当 ぎょうせい太郎</Subtitle>
      <DateText>平成29年09月19日</DateText>
      
      <DetailContainer>
        {/* 各項目の表示 */}
        <DetailItem>
          <DetailLabel>按分年度</DetailLabel>
          <DetailValue>{fiscalYear}</DetailValue>
        </DetailItem>
        <DetailItem>
          <DetailLabel>年</DetailLabel>
          <DetailValue>{years}</DetailValue>
        </DetailItem>
        <DetailItem>
          <DetailLabel>都道府県</DetailLabel>
          <DetailValue>{prefecture}</DetailValue>
        </DetailItem>
      </DetailContainer>

      <ButtonContainer>
        <Button>OK</Button>
        <Button>終了</Button>
      </ButtonContainer>
    </Container>
  );
};

// サンプルデータを用いたコンポーネントの使用例
const SampleCompanyDetail: React.FC = () => {
  return (
    <CompanyDetail
      fiscalYear={29}
      prefecture="東京"
      years={4}
    />
  );
};

// スタイリング
const Container = styled.div`
  font-family: Arial, sans-serif;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
`;

const Subtitle = styled.p`
  font-size: 16px;
  color: #666;
  margin-bottom: 5px;
`;

const DateText = styled.p`
  font-size: 14px;
  color: #999;
  margin-bottom: 20px;
`;

const DetailContainer = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 4px;
  margin-bottom: 20px;
`;

const DetailItem = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

const DetailLabel = styled.span`
  font-weight: bold;
  margin-right: 10px;
`;

const DetailValue = styled.span`
  color: #333;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  margin-left: 10px;

  &:hover {
    background-color: #0056b3;
  }
`;

export default CompanyDetail;