import React from 'react';

import { FC } from 'react';
import styled from '@emotion/styled';

type UserProfileProps = {
  avatarUrl: string;
  userName: string;
  description: string;
  followersCount: number;
  followingCount: number;
};

const UserProfileWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;
  border-bottom: 1px solid #eee;

  @media (max-width: 600px) {
    flex-direction: column;
    text-align: center;
  }
`;

const Avatar = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-right: 16px;

  @media (max-width: 600px) {
    margin-right: 0;
    margin-bottom: 8px;
  }
`;

const UserInfo = styled.div`
  flex: 1;
`;

const UserName = styled.h2`
  margin: 0;
  font-size: 18px;
`;

const Description = styled.p`
  margin: 8px 0;
  color: #666;
`;

const FollowInfo = styled.div`
  display: flex;

  @media (max-width: 600px) {
    justify-content: center;
  }
`;

const FollowItem = styled.div`
  margin-right: 16px;

  &:last-child {
    margin-right: 0;
  }
`;

const FollowCount = styled.span`
  font-weight: bold;
`;

const UserProfile: FC<UserProfileProps> = ({
  avatarUrl,
  userName,
  description,
  followersCount,
  followingCount,
}) => {
  // Handle missing avatar URL
  const avatarSrc = avatarUrl || '/default-avatar.png';

  return (
    <UserProfileWrapper>
      <Avatar src={avatarSrc} alt={userName} />
      <UserInfo>
        <UserName>{userName || 'Unknown User'}</UserName>
        {description && <Description>{description}</Description>}
        <FollowInfo>
          <FollowItem>
            <FollowCount>{followersCount || 0}</FollowCount> followers
          </FollowItem>
          <FollowItem>
            <FollowCount>{followingCount || 0}</FollowCount> following
          </FollowItem>
        </FollowInfo>
      </UserInfo>
    </UserProfileWrapper>
  );
};

// Sample usage
const App: FC = () => {
  const user = {
    avatarUrl: 'https://example.com/avatar.png',
    userName: 'John Doe',
    description: 'Web developer',
    followersCount: 100,
    followingCount: 50,
  };

  return <UserProfile {...user} />;
};

export default App;