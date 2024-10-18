import React from 'react';
import styled from '@emotion/styled';

// PromoSectionコンポーネントのプロパティ型定義
type PromoSectionProps = {
  title: string;
  description: string;
  buttonText: string;
  onButtonClick: () => void;
};

// PromoSectionコンポーネント
const PromoSection: React.FC<PromoSectionProps> = ({ 
  title,
  description, 
  buttonText,
  onButtonClick
}) => {
  return (
    <Container>
      <Content>
        {/* タイトルが空の場合は表示しない */}
        {title && <Title>{title}</Title>}
        
        {/* 説明文が空の場合は表示しない */}
        {description && <Description>{description}</Description>}
        
        {/* ボタンテキストが空の場合は表示しない */}
        {buttonText && <Button onClick={onButtonClick}>{buttonText}</Button>}
      </Content>
    </Container>
  );
};

// スタイリング
const Container = styled.section`
  background-color: #f8f8f8;
  padding: 60px 20px;
  text-align: center;

  @media (min-width: 768px) {
    padding: 80px 20px;
  }
`;

const Content = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 28px;
  margin-bottom: 20px;
  color: #333;

  @media (min-width: 768px) {
    font-size: 36px;
  }
`;

const Description = styled.p`
  font-size: 18px;
  margin-bottom: 30px;
  color: #666;

  @media (min-width: 768px) {
    font-size: 20px;
  }
`;

const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 12px 24px;
  font-size: 18px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

// サンプルデータ
const sampleData = {
  title: 'プロモーションタイトル',
  description: 'これはプロモーションの説明文です。ここでは製品やサービスの特徴や利点について説明します。',
  buttonText: '詳細はこちら',
  onButtonClick: () => {
    console.log('ボタンがクリックされました');
  },
};

// 表示用のコンポーネント
const PromoSectionExample: React.FC = () => {
  return (
    <PromoSection 
      title={sampleData.title}
      description={sampleData.description}
      buttonText={sampleData.buttonText}
      onButtonClick={sampleData.onButtonClick}
    />
  );
};

export default PromoSectionExample;