import React from 'react';
import styled from '@emotion/styled';

// データ型定義
type User = {
  name: string;
  email: string;
  phone: string;
};

type UserInfoProps = {
  user: User;
};

// スタイルコンポーネント
const UserInfoWrapper = styled.div`
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 5px;
  margin-bottom: 20px;
  
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const UserInfoLabel = styled.div`
  font-weight: bold;
  margin-right: 10px;
`;

const UserInfoValue = styled.div`
  @media (min-width: 768px) {
    text-align: right;
  }
`;

// ユーザー情報コンポーネント
const UserInfo: React.FC<UserInfoProps> = ({ user }) => {
  // ユーザーデータが存在しない場合の処理
  if (!user) {
    return <div>ユーザー情報がありません。</div>;
  }

  return (
    <UserInfoWrapper>
      <div>
        <UserInfoLabel>名前:</UserInfoLabel>
        <UserInfoValue>{user.name || 'なし'}</UserInfoValue>
      </div>
      <div>
        <UserInfoLabel>メール:</UserInfoLabel>
        <UserInfoValue>{user.email || 'なし'}</UserInfoValue>
      </div>
      <div>
        <UserInfoLabel>電話番号:</UserInfoLabel>
        <UserInfoValue>{user.phone || 'なし'}</UserInfoValue>
      </div>
    </UserInfoWrapper>
  );
};

// サンプルデータ
const sampleUser: User = {
  name: '山田太郎',
  email: 'yamada@example.com',
  phone: '090-1234-5678',
};

// 使用例
const UserInfoExample: React.FC = () => {
  return (
    <div>
      <h2>ユーザー情報</h2>
      <UserInfo user={sampleUser} />
    </div>
  );
};

export default UserInfoExample;