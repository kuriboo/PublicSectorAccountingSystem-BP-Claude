import React from 'react';
import styled from '@emotion/styled';

// 定義されたプロパティの型
interface ProfileCardProps {
  avatarUrl: string;
  name: string;
  title: string;
  description: string;
}

// プロフィールカードのスタイル
const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;

  @media (max-width: 480px) {
    width: 100%;
  }
`;

const Avatar = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 20px;
`;

const Name = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
  text-align: center;
`;

const Title = styled.p`
  font-size: 18px;
  color: #666666;
  margin-bottom: 20px;
  text-align: center;
`;

const Description = styled.p`
  font-size: 16px;
  text-align: center;
  line-height: 1.5;
`;

// プロフィールカードのコンポーネント
const ProfileCard: React.FC<ProfileCardProps> = ({ avatarUrl, name, title, description }) => {
  return (
    <CardContainer>
      {avatarUrl && <Avatar src={avatarUrl} alt="Avatar" />}
      <Name>{name || 'Unknown'}</Name>
      <Title>{title || 'No Title'}</Title>
      <Description>{description || 'No description provided.'}</Description>
    </CardContainer>
  );
};

// サンプルデータを使用した表示用コンポーネント
const ProfileCardExample: React.FC = () => {
  const sampleData: ProfileCardProps = {
    avatarUrl: 'https://example.com/avatar.jpg',
    name: 'John Doe',
    title: 'Software Engineer',
    description: 'Passionate about building scalable and efficient web applications.',
  };

  return (
    <div>
      <h1>Profile Card Example</h1>
      <ProfileCard {...sampleData} />
    </div>
  );
};

export default ProfileCardExample;