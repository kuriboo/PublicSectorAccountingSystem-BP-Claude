以下は、画像を元にしたNext.js + TypeScriptのコンポーネントです。

import React from 'react';
import styled from '@emotion/styled';

// コンポーネントのプロパティ型定義
interface ProfileProps {
  name?: string;
  title?: string;
  description?: string;
}

// スタイリング定義
const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  max-width: 300px;
  margin: 0 auto;

  @media (min-width: 768px) {
    max-width: 500px;
  }
`;

const ProfileImage = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-color: #ddd;
  margin-bottom: 1rem;
`;

const ProfileName = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

const ProfileTitle = styled.p`
  font-size: 1rem;
  color: #666;
  margin-bottom: 1rem;
`;

const ProfileDescription = styled.p`
  font-size: 0.9rem;
  text-align: center;
`;

// Profileコンポーネント定義
const Profile: React.FC<ProfileProps> = ({ name, title, description }) => {
  return (
    <ProfileWrapper>
      <ProfileImage />
      <ProfileName>{name || 'No Name'}</ProfileName>
      <ProfileTitle>{title || 'No Title'}</ProfileTitle>
      <ProfileDescription>{description || 'No Description'}</ProfileDescription>
    </ProfileWrapper>
  );
};

// サンプルデータ
const sampleData: ProfileProps = {
  name: 'John Doe',
  title: 'Software Engineer',
  description: 'Passionate about coding and creating amazing web applications.',
};

// 表示用コンポーネント
const ProfilePage: React.FC = () => {
  return (
    <div>
      <h1>Profile Page</h1>
      <Profile {...sampleData} />
    </div>
  );
};

export default ProfilePage;