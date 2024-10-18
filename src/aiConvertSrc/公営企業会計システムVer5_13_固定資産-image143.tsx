import React from 'react';
import styled from '@emotion/styled';

type User = {
  id: number;
  name: string;
  email: string;
};

type UserCardProps = {
  user: User;
};

const UserCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: translateY(-4px);
  }

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 16px;

  @media (min-width: 768px) {
    margin-bottom: 0;
    margin-right: 16px;
  }
`;

const UserName = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 8px;
`;

const UserEmail = styled.p`
  font-size: 16px;
  color: #666;
`;

const UserActions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const UserActionButton = styled.button`
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #0056b3;
  }

  & + & {
    margin-top: 8px;

    @media (min-width: 768px) {
      margin-top: 0;
      margin-left: 8px;
    }
  }
`;

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  // デフォルトのユーザー情報を定義
  const defaultUser: User = {
    id: 0,
    name: 'Unknown User',
    email: 'example@example.com',
  };

  // 引数のuserが存在しない場合、デフォルトのユーザー情報を使用
  const safeUser = user || defaultUser;

  return (
    <UserCardContainer>
      <UserInfo>
        <UserName>{safeUser.name}</UserName>
        <UserEmail>{safeUser.email}</UserEmail>
      </UserInfo>
      <UserActions>
        <UserActionButton>Edit</UserActionButton>
        <UserActionButton>Delete</UserActionButton>
      </UserActions>
    </UserCardContainer>
  );
};

// サンプルデータを使用してUserCardコンポーネントを表示するコンポーネント
const UserCardExample: React.FC = () => {
  const sampleUser: User = {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
  };

  return (
    <div>
      <h1>User Card Example</h1>
      <UserCard user={sampleUser} />
    </div>
  );
};

export default UserCardExample;