import React from 'react';
import styled from '@emotion/styled';

type UserCardProps = {
  /** ユーザー名 */
  userName: string;
  /** ユーザーアバターのURL */
  avatarUrl: string;
  /** ユーザーの肩書き */
  title: string;
  /** ユーザーの自己紹介文 */
  bio?: string;
};

const UserCard: React.FC<UserCardProps> = ({ userName, avatarUrl, title, bio }) => {
  return (
    <Container>
      <AvatarWrapper>
        <Avatar src={avatarUrl} alt={userName} />
      </AvatarWrapper>
      <UserInfo>
        <Name>{userName}</Name>
        <Title>{title}</Title>
        {bio && <Bio>{bio}</Bio>}
      </UserInfo>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 480px) {
    flex-direction: column;
    text-align: center;
  }
`;

const AvatarWrapper = styled.div`
  flex-shrink: 0;
  width: 80px;
  height: 80px;
  margin-right: 16px;

  @media (max-width: 480px) {
    margin-right: 0;
    margin-bottom: 16px;
  }
`;

const Avatar = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
`;

const UserInfo = styled.div`
  flex-grow: 1;
`;

const Name = styled.h2`
  margin: 0;
  font-size: 24px;
  font-weight: bold;
`;

const Title = styled.p`
  margin: 4px 0;
  font-size: 16px;
  color: #666666;
`;

const Bio = styled.p`
  margin: 8px 0 0;
  font-size: 14px;
  color: #333333;
`;

// サンプルデータを用いた使用例
const UserCardExample: React.FC = () => {
  const userData = {
    userName: 'John Doe',
    avatarUrl: 'https://example.com/avatar.jpg',
    title: 'Software Engineer',
    bio: 'Passionate about coding and creating amazing user experiences.',
  };

  return (
    <div>
      <h1>User Card Example</h1>
      <UserCard {...userData} />
    </div>
  );
};

export default UserCard;