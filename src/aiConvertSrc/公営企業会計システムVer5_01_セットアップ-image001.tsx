import React from 'react';
import styled from 'styled-components';

// Define the types for the component properties
interface ProfileCardProps {
  avatarUrl: string;
  name: string;
  title: string;
  description: string;
}

// Define the styled components
const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const Avatar = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-bottom: 16px;

  @media (min-width: 768px) {
    margin-bottom: 0;
    margin-right: 24px;
  }
`;

const InfoContainer = styled.div`
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
  font-size: 16px;
  color: #666666;
`;

const Description = styled.p`
  margin: 0;
  font-size: 14px;
  color: #999999;
`;

// Define the ProfileCard component
const ProfileCard: React.FC<ProfileCardProps> = ({
  avatarUrl,
  name,
  title,
  description,
}) => {
  return (
    <Card>
      {avatarUrl && <Avatar src={avatarUrl} alt="Profile Avatar" />}
      <InfoContainer>
        {name && <Name>{name}</Name>}
        {title && <Title>{title}</Title>}
        {description && <Description>{description}</Description>}
      </InfoContainer>
    </Card>
  );
};

// Example usage of the ProfileCard component
const App: React.FC = () => {
  const profileData = {
    avatarUrl: 'https://example.com/avatar.jpg',
    name: 'John Doe',
    title: 'Software Engineer',
    description: 'Passionate about building great software.',
  };

  return (
    <div>
      <h1>Profile Card Example</h1>
      <ProfileCard {...profileData} />
    </div>
  );
};

export default App;