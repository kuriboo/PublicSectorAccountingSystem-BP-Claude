import React from 'react';
import styled from '@emotion/styled';

interface UserCardProps {
  name: string;
  role: string;
  imageUrl: string;
  description: string;
}

const UserCard: React.FC<UserCardProps> = ({ name, role, imageUrl, description }) => {
  return (
    <CardContainer>
      <ProfileImage src={imageUrl} alt={`${name}'s profile`} />
      <UserInfo>
        <Name>{name}</Name>
        <Role>{role}</Role>
        <Description>{description}</Description>
      </UserInfo>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;
  border-radius: 8px;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 600px) {
    flex-direction: column;
    text-align: center;
  }
`;

const ProfileImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 16px;

  @media (max-width: 600px) {
    margin-right: 0;
    margin-bottom: 16px;
  }
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const Name = styled.h3`
  margin: 0;
  font-size: 18px;
  font-weight: bold;
`;

const Role = styled.p`
  margin: 4px 0;
  font-size: 14px;
  color: #666666;
`;

const Description = styled.p`
  margin: 0;
  font-size: 14px;
  line-height: 1.4;
`;

// Usage example
const SampleUserCard: React.FC = () => {
  const sampleUser = {
    name: 'John Doe',
    role: 'Software Engineer',
    imageUrl: 'https://example.com/profile.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  };

  return (
    <div>
      <h2>User Card Example</h2>
      <UserCard {...sampleUser} />
    </div>
  );
};

export default SampleUserCard;