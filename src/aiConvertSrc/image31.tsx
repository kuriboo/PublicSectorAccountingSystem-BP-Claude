import React from 'react';
import styled from 'styled-components';

// UserInfoProps型定義
type UserInfoProps = {
  name: string;
  status: string;
  image: string;
};

// UserInfoコンポーネント
const UserInfo: React.FC<UserInfoProps> = ({ name, status, image }) => {
  return (
    <UserInfoWrapper>
      {/* 画像が指定されていない場合はデフォルトの画像を表示 */}
      <UserImage src={image || '/default-user-image.png'} alt="User" />
      <UserDetails>
        {/* 名前が指定されていない場合は「Unknown User」を表示 */}
        <UserName>{name || 'Unknown User'}</UserName>
        {/* ステータスが指定されていない場合は「No Status」を表示 */}
        <UserStatus>{status || 'No Status'}</UserStatus>
      </UserDetails>
    </UserInfoWrapper>
  );
};

// スタイリング
const UserInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;
  background-color: #f0f0f0;
  border-radius: 8px;

  @media (max-width: 480px) {
    flex-direction: column;
    text-align: center;
  }
`;

const UserImage = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  margin-right: 16px;

  @media (max-width: 480px) {
    margin-right: 0;
    margin-bottom: 8px;
  }
`;

const UserDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

const UserName = styled.h3`
  margin: 0;
  font-size: 18px;
  font-weight: bold;
`;

const UserStatus = styled.p`
  margin: 0;
  font-size: 14px;
  color: #666;
`;

// サンプルデータ
const sampleData: UserInfoProps = {
  name: '登録',
  status: '訂正',
  image: '/sample-user-image.jpg',
};

// 使用例コンポーネント
const UserInfoExample: React.FC = () => {
  return (
    <div>
      <h2>UserInfo Component Example</h2>
      <UserInfo {...sampleData} />
    </div>
  );
};

export default UserInfoExample;