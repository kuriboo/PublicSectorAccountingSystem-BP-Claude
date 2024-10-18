// ProfileCard.tsx
import React from 'react';
import styled from '@emotion/styled';

type ProfileCardProps = {
  imageSrc: string;
  name: string;
  role: string;
  description: string;
};

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  max-width: 300px;
  margin: 0 auto;

  @media (min-width: 768px) {
    flex-direction: row;
    max-width: 600px;
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
  font-size: 24px;
  margin-bottom: 8px;
`;

const Role = styled.p`
  font-size: 16px;
  color: #666666;
  margin-bottom: 16px;
`;

const Description = styled.p`
  font-size: 14px;
  line-height: 1.5;
`;

const ProfileCard: React.FC<ProfileCardProps> = ({ imageSrc, name, role, description }) => {
  return (
    <Card>
      {imageSrc && <ProfileImage src={imageSrc} alt={`${name}'s profile`} />}
      <ProfileInfo>
        {name && <Name>{name}</Name>}
        {role && <Role>{role}</Role>}
        {description && <Description>{description}</Description>}
      </ProfileInfo>
    </Card>
  );
};

// Usage example
const App: React.FC = () => {
  return (
    <div>
      <ProfileCard
        imageSrc="https://example.com/profile.jpg"
        name="山田太郎"
        role="システムエンジニア"
        description="5年以上のWeb開発経験があります。React、TypeScriptが得意です。"
      />
    </div>
  );
};

export default ProfileCard;