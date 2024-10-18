import React from 'react';
import styled from '@emotion/styled';

// カードのプロパティの型定義
type CardProps = {
  iconUrl: string;
  yearDuration: string;
  title: string;
};

// カードのスタイル定義
const CardWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;

  @media (max-width: 600px) {
    flex-direction: column;
    text-align: center;
  }
`;

const IconWrapper = styled.div`
  width: 48px;
  height: 48px;
  margin-right: 16px;

  @media (max-width: 600px) {
    margin-right: 0;
    margin-bottom: 8px;
  }
`;

const Icon = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
`;

const ContentWrapper = styled.div`
  flex: 1;
`;

const YearDuration = styled.p`
  margin: 0;
  font-size: 14px;
  color: #888888;
`;

const Title = styled.h3`
  margin: 4px 0 0;
  font-size: 18px;
  color: #333333;
`;

// カードコンポーネントの実装
const Card: React.FC<CardProps> = ({ iconUrl, yearDuration, title }) => {
  return (
    <CardWrapper>
      <IconWrapper>
        {/* アイコン画像が提供されていない場合はデフォルトのアイコンを表示 */}
        <Icon src={iconUrl || '/default-icon.png'} alt="Icon" />
      </IconWrapper>
      <ContentWrapper>
        {/* 期間が提供されていない場合は表示しない */}
        {yearDuration && <YearDuration>{yearDuration}</YearDuration>}
        {/* タイトルが提供されていない場合はデフォルトのタイトルを表示 */}
        <Title>{title || 'No Title'}</Title>
      </ContentWrapper>
    </CardWrapper>
  );
};

// サンプルデータを用いたカードの表示例
const CardExample: React.FC = () => {
  const cardData = {
    iconUrl: 'https://example.com/icon.png',
    yearDuration: '平成29年',
    title: '年度',
  };

  return (
    <div>
      <h2>Card Example</h2>
      <Card {...cardData} />
    </div>
  );
};

export default CardExample;