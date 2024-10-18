import React from 'react';
import styled from 'styled-components';

// プロパティの型定義
type ProfileProps = {
  imgSrc: string;
  name: string;
  bio: string;
  email: string;
  phone: string;
};

// スタイル定義
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  max-width: 300px;
  margin: 0 auto;

  @media (min-width: 768px) {
    flex-direction: row;
    max-width: 600px;
  }
`;

const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    margin-right: 20px;
    margin-bottom: 0;
  }
`;

const ProfileDetails = styled.div`
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
  }
`;

const ProfileName = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
`;

const ProfileBio = styled.p`
  font-size: 16px;
  margin-bottom: 10px;
`;

const ProfileContact = styled.div`
  font-size: 14px;
`;

// プロフィールコンポーネント
const Profile: React.FC<ProfileProps> = ({ imgSrc, name, bio, email, phone }) => {
  // 値が空の場合のデフォルト値
  const defaultImgSrc = 'default.jpg';
  const defaultName = 'Unknown';
  const defaultBio = 'No bio available';
  const defaultEmail = 'Not provided';
  const defaultPhone = 'Not provided';

  return (
    <Container>
      <ProfileImage src={imgSrc || defaultImgSrc} alt="Profile" />
      <ProfileDetails>
        <ProfileName>{name || defaultName}</ProfileName>
        <ProfileBio>{bio || defaultBio}</ProfileBio>
        <ProfileContact>
          <div>Email: {email || defaultEmail}</div>
          <div>Phone: {phone || defaultPhone}</div>
        </ProfileContact>
      </ProfileDetails>
    </Container>
  );
};

// サンプルデータ
const sampleData: ProfileProps = {
  imgSrc: 'https://example.com/profile.jpg',
  name: 'John Doe',
  bio: 'Software Engineer',
  email: 'john@example.com',
  phone: '123-456-7890',
};

// 使用例コンポーネント
const App: React.FC = () => {
  return (
    <div>
      <h1>Profile Example</h1>
      <Profile {...sampleData} />
    </div>
  );
};

export default App;