import React from 'react';
import styled from 'styled-components';

// Typesフォルダにこのインターフェースを置くこともできる
interface ProfileProps {
  name: string;
  role: string;
  imageUrl: string;
  message: string;
}

const ProfileWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;
  background-color: #f0f0f0;
  border-radius: 8px;
`;

const ProfileImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 16px;
`;

const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProfileName = styled.h2`
  font-size: 24px;
  margin: 0 0 4px;
`;

const ProfileRole = styled.p`
  font-size: 16px;
  color: #666;
  margin: 0 0 8px;
`;

const ProfileMessage = styled.p`
  font-size: 14px;
  margin: 0;
`;

/**
 * プロフィールコンポーネント
 */
const Profile: React.FC<ProfileProps> = ({ name, role, imageUrl, message }) => {
  return (
    <ProfileWrapper>
      <ProfileImage src={imageUrl} alt={name} />
      <ProfileInfo>
        <ProfileName>{name}</ProfileName>
        <ProfileRole>{role}</ProfileRole>
        <ProfileMessage>{message}</ProfileMessage>
      </ProfileInfo>
    </ProfileWrapper>
  );
};

export default Profile;

// 使用例
const SampleProfile = () => {
  const profileData = {
    name: '山田太郎',
    role: 'フロントエンドエンジニア',
    imageUrl: 'https://example.com/profile.jpg',
    message: '私はフロントエンドエンジニアとして働いています。',
  };

  return (
    <div>
      <h1>プロフィールサンプル</h1>
      <Profile {...profileData} />
    </div>
  );
};