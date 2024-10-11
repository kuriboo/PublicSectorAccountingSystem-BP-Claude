import React from 'react';
import styled from '@emotion/styled';

interface ProfileProps {
  name: string;
  title: string;
  description: string;
  profileImage: string;
}

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background-color: #f5f5f5;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
  }
`;

const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    margin-right: 2rem;
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
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

const Title = styled.p`
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  font-size: 1rem;
  line-height: 1.5;
`;

const Profile: React.FC<ProfileProps> = ({ name, title, description, profileImage }) => {
  // 値が入っていない場合のデフォルト値を設定
  const defaultName = '名前が設定されていません';
  const defaultTitle = 'タイトルが設定されていません';
  const defaultDescription = '説明文が設定されていません';
  const defaultImage = 'https://via.placeholder.com/150';

  return (
    <ProfileContainer>
      <ProfileImage src={profileImage || defaultImage} alt="Profile" />
      <ProfileInfo>
        <Name>{name || defaultName}</Name>
        <Title>{title || defaultTitle}</Title>
        <Description>{description || defaultDescription}</Description>
      </ProfileInfo>
    </ProfileContainer>
  );
};

// 使用例
const App: React.FC = () => {
  const profileData = {
    name: '鈴木 太郎',
    title: 'フロントエンドエンジニア',
    description: 'TypeScriptとReactが得意なフロントエンドエンジニアです。',
    profileImage: 'https://example.com/profile.jpg',
  };

  return (
    <div>
      <h1>プロフィール</h1>
      <Profile {...profileData} />
    </div>
  );
};

export default App;