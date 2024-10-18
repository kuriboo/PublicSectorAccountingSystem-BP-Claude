import React from 'react';
import styled from '@emotion/styled';

// プロパティの型定義
interface UserProfileProps {
  username: string;
  profileImage: string;
  biography: string;
  location: string;
  website: string;
}

// スタイル定義
const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  margin: 0 auto;

  @media (max-width: 480px) {
    padding: 10px;
  }
`;

const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 20px;

  @media (max-width: 480px) {
    width: 100px;
    height: 100px;
  }
`;

const Username = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
  text-align: center;

  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

const Biography = styled.p`
  font-size: 16px;
  text-align: center;
  margin-bottom: 20px;

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

const Location = styled.p`
  font-size: 14px;
  margin-bottom: 5px;

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

const Website = styled.a`
  font-size: 14px;
  color: #007bff;
  text-decoration: none;

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

// ユーザープロフィールコンポーネント
const UserProfile: React.FC<UserProfileProps> = ({
  username,
  profileImage,
  biography,
  location,
  website,
}) => {
  return (
    <ProfileContainer>
      {/* プロフィール画像が空の場合はデフォルト画像を表示 */}
      <ProfileImage src={profileImage || '/default-profile.png'} alt="Profile" />
      <Username>{username}</Username>
      {/* 自己紹介文が空でない場合のみ表示 */}
      {biography && <Biography>{biography}</Biography>}
      {/* 場所が空でない場合のみ表示 */}
      {location && <Location>{location}</Location>}
      {/* ウェブサイトが空でない場合のみ表示 */}
      {website && <Website href={website}>{website}</Website>}
    </ProfileContainer>
  );
};

// サンプルデータを用いた使用例
const SampleUserProfile = () => {
  const sampleUser: UserProfileProps = {
    username: 'John Doe',
    profileImage: 'https://example.com/profile.jpg',
    biography: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    location: 'New York, USA',
    website: 'https://example.com',
  };

  return <UserProfile {...sampleUser} />;
};

export default UserProfile;