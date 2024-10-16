import React from 'react';
import styled from '@emotion/styled';

// プロパティの型定義
interface ProfileCardProps {
  avatar: string;
  name: string;
  position: string;
  description: string;
}

// スタイル定義
const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 300px;
  margin: 0 auto;

  @media (max-width: 480px) {
    width: 100%;
  }
`;

const Avatar = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 16px;
`;

const Name = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 8px;
`;

const Position = styled.p`
  font-size: 16px;
  color: #666666;
  margin-bottom: 16px;
`;

const Description = styled.p`
  font-size: 14px;
  text-align: center;
  color: #333333;
`;

// プロファイルカードコンポーネント
const ProfileCard: React.FC<ProfileCardProps> = ({ avatar, name, position, description }) => {
  return (
    <CardContainer>
      {/* アバター画像が指定されている場合のみ表示 */}
      {avatar && <Avatar src={avatar} alt={`${name}'s avatar`} />}
      
      {/* 名前が指定されている場合のみ表示 */}
      {name && <Name>{name}</Name>}
      
      {/* 役職が指定されている場合のみ表示 */}
      {position && <Position>{position}</Position>}
      
      {/* 説明が指定されている場合のみ表示 */}
      {description && <Description>{description}</Description>}
    </CardContainer>
  );
};

// サンプルデータを用いた使用例
const App: React.FC = () => {
  return (
    <ProfileCard
      avatar="https://example.com/avatar.jpg"
      name="John Doe"
      position="Software Engineer"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nulla sit amet aliquam lacinia, nisl nisl aliquam nisl, nec aliquam nisl nisl sit amet nisl."
    />
  );
};

export default App;