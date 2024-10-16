import React from 'react';
import styled from '@emotion/styled';

// コンポーネントのプロパティの型定義
type ProfileCardProps = {
  profileImage?: string;
  name: string;
  title: string;
  description: string;
};

// プロフィール画像のスタイル
const ProfileImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 16px;

  @media (min-width: 768px) {
    width: 150px;
    height: 150px;
  }
`;

// プロフィールカードのスタイル
const ProfileCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
  background-color: #f5f5f5;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;

  @media (min-width: 768px) {
    padding: 32px;
  }
`;

// 名前のスタイル
const Name = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 8px;

  @media (min-width: 768px) {
    font-size: 32px;
  }
`;

// 役職のスタイル
const Title = styled.p`
  font-size: 16px;
  color: #666;
  margin-bottom: 16px;

  @media (min-width: 768px) {
    font-size: 18px;
  }
`;

// 説明文のスタイル
const Description = styled.p`
  font-size: 14px;
  line-height: 1.5;

  @media (min-width: 768px) {
    font-size: 16px;
  }
`;

// プロフィールカードコンポーネント
const ProfileCard: React.FC<ProfileCardProps> = ({ profileImage, name, title, description }) => {
  return (
    <ProfileCardWrapper>
      {profileImage && <ProfileImage src={profileImage} alt={name} />}
      <Name>{name}</Name>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </ProfileCardWrapper>
  );
};

// サンプルデータ
const sampleData: ProfileCardProps = {
  profileImage: 'https://example.com/profile.jpg',
  name: 'John Doe',
  title: 'Software Engineer',
  description: 'Experienced software engineer with a passion for building scalable and maintainable applications.',
};

// 使用例コンポーネント
const ProfileCardExample: React.FC = () => {
  return (
    <div>
      <h1>Profile Card Example</h1>
      <ProfileCard {...sampleData} />
    </div>
  );
};

export default ProfileCardExample;