import React from 'react';
import styled from '@emotion/styled';

type ProfileCardProps = {
  name: string;
  title: string;
  imageSrc: string;
  description: string;
};

const ProfileCard: React.FC<ProfileCardProps> = ({ name, title, imageSrc, description }) => {
  return (
    <CardContainer>
      <ProfileImage src={imageSrc} alt={`${name}'s profile`} />
      <ProfileInfo>
        <Name>{name}</Name>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </ProfileInfo>
    </CardContainer>
  );
};

// Styled components
const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
  border-radius: 8px;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const ProfileImage = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 16px;

  @media (min-width: 768px) {
    margin-right: 24px;
    margin-bottom: 0;
  }
`;

const ProfileInfo = styled.div`
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
  }
`;

const Name = styled.h2`
  margin: 0;
  font-size: 24px;
  font-weight: bold;
`;

const Title = styled.p`
  margin: 8px 0;
  font-size: 18px;
  color: #666666;
`;

const Description = styled.p`
  margin: 0;
  font-size: 16px;
  line-height: 1.5;
`;

// Sample usage
const SampleProfileCard: React.FC = () => {
  const sampleData: ProfileCardProps = {
    name: '山田 太郎',
    title: 'フロントエンドエンジニア',
    imageSrc: 'https://example.com/profile.jpg',
    description: '5年以上のフロントエンド開発経験を持つエンジニアです。React、TypeScript、Next.jsを専門としています。',
  };

  return (
    <div>
      <h1>Profile Card Sample</h1>
      <ProfileCard {...sampleData} />
    </div>
  );
};

export default SampleProfileCard;