import React from 'react';
import styled from '@emotion/styled';

// 担当者情報の型定義
type PersonInfo = {
  name: string;
  role: string;
  image: string;
};

// コンポーネントのプロパティの型定義
type PersonCardProps = {
  person: PersonInfo;
};

// コンポーネントのスタイリング
const CardWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
  max-width: 400px;
  margin: 0 auto;

  @media (max-width: 480px) {
    flex-direction: column;
    text-align: center;
  }
`;

const Avatar = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 16px;

  @media (max-width: 480px) {
    margin-right: 0;
    margin-bottom: 16px;
  }
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Name = styled.h3`
  margin: 0;
  font-size: 18px;
`;

const Role = styled.p`
  margin: 4px 0 0;
  font-size: 14px;
  color: #666;
`;

// 担当者情報を表示するコンポーネント
const PersonCard: React.FC<PersonCardProps> = ({ person }) => {
  // 担当者情報が空の場合の例外処理
  if (!person) {
    return null;
  }

  const { name, role, image } = person;

  return (
    <CardWrapper>
      <Avatar src={image} alt={name} />
      <InfoWrapper>
        <Name>{name}</Name>
        <Role>{role}</Role>
      </InfoWrapper>
    </CardWrapper>
  );
};

// サンプルデータ
const samplePerson: PersonInfo = {
  name: '山田太郎',
  role: 'フロントエンドエンジニア',
  image: 'https://example.com/avatar.jpg',
};

// 使用例
const App: React.FC = () => {
  return (
    <div>
      <h1>担当者情報</h1>
      <PersonCard person={samplePerson} />
    </div>
  );
};

export default App;