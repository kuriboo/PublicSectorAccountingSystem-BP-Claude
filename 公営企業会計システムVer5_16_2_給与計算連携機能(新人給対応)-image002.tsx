import React from 'react';
import styled from '@emotion/styled';

// プロフィール画像のProps型定義
type ProfileImageProps = {
  src: string;
  alt: string;
  size?: number;
};

// プロフィール画像コンポーネント
const ProfileImage: React.FC<ProfileImageProps> = ({ src, alt, size = 100 }) => {
  return <Image src={src} alt={alt} size={size} />;
};

// プロフィール画像のスタイル定義
const Image = styled.img<{ size: number }>`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  border-radius: 50%;
  object-fit: cover;
`;

// プロフィールのProps型定義
type ProfileProps = {
  image: ProfileImageProps;
  name: string;
  description: string;
};

// プロフィールコンポーネント
const Profile: React.FC<ProfileProps> = ({ image, name, description }) => {
  return (
    <Container>
      <ProfileImage {...image} />
      <InfoContainer>
        {/* 名前が空の場合は 'No Name' と表示 */}
        <Name>{name || 'No Name'}</Name>
        {/* 説明文が空の場合は何も表示しない */}
        {description && <Description>{description}</Description>}
      </InfoContainer>
    </Container>
  );
};

// プロフィールのスタイル定義
const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  @media (max-width: 480px) {
    flex-direction: column;
    text-align: center;
  }
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Name = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin: 0;
`;

const Description = styled.p`
  font-size: 16px;
  margin: 0;
`;

// サンプルデータを用いた使用例
const ProfileExample: React.FC = () => {
  const sampleData: ProfileProps = {
    image: {
      src: 'path/to/profile-image.jpg',
      alt: 'Profile Image',
      size: 120,
    },
    name: '鈴木太郎',
    description: 'フロントエンドエンジニア',
  };

  return (
    <div>
      <h1>プロフィールの例</h1>
      <Profile {...sampleData} />
    </div>
  );
};

export default ProfileExample;