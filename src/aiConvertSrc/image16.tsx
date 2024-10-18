import React from 'react';
import styled from '@emotion/styled';

// プロパティの型定義
type ProfileCardProps = {
  profileImage: string;
  profileAlt?: string;
  name: string;
  title: string;
  description: string;
};

// スタイルコンポーネント
const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  max-width: 300px;
  margin: 0 auto;

  @media (min-width: 768px) {
    flex-direction: row;
    max-width: 500px;
  }
`;

const ProfileImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    margin-right: 1rem;
    margin-bottom: 0;
  }
`;

const ProfileInfo = styled.div`
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
  }
`;

const Name = styled.h2`
  margin: 0;
  font-size: 1.5rem;
`;

const Title = styled.h3`
  margin: 0.5rem 0;
  font-size: 1.2rem;
  color: #666666;
`;

const Description = styled.p`
  margin: 0;
  font-size: 1rem;
  color: #333333;
`;

// プロフィールカードコンポーネント
const ProfileCard: React.FC<ProfileCardProps> = ({
  profileImage,
  profileAlt = 'Profile',
  name,
  title,
  description,
}) => {
  // 値が入っていない場合の処理
  const validName = name || 'Unknown';
  const validTitle = title || 'Not specified';
  const validDescription = description || 'No description available';

  return (
    <CardWrapper>
      <ProfileImage src={profileImage} alt={profileAlt} />
      <ProfileInfo>
        <Name>{validName}</Name>
        <Title>{validTitle}</Title>
        <Description>{validDescription}</Description>
      </ProfileInfo>
    </CardWrapper>
  );
};

// サンプルデータ
const sampleData = {
  profileImage: 'https://example.com/profile.jpg',
  name: 'John Doe',
  title: 'Software Engineer',
  description: 'Passionate about creating amazing web applications.',
};

// 使用例コンポーネント
const App: React.FC = () => {
  return (
    <div>
      <h1>Profile Card Example</h1>
      <ProfileCard {...sampleData} />
    </div>
  );
};

export default App;