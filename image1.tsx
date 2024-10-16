import React from 'react';
import styled from 'styled-components';

// Define the types for the component props
interface ProfileCardProps {
  name: string;
  title: string;
  description: string;
  avatarUrl: string;
}

// Define the styled components
const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  max-width: 300px;
  margin: 0 auto;

  @media (min-width: 768px) {
    flex-direction: row;
    max-width: 600px;
  }
`;

const Avatar = styled.img`
  width: 128px;
  height: 128px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 16px;

  @media (min-width: 768px) {
    margin-right: 24px;
    margin-bottom: 0;
  }
`;

const InfoContainer = styled.div`
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
  }
`;

const Name = styled.h2`
  font-size: 24px;
  margin-bottom: 8px;
`;

const Title = styled.p`
  font-size: 18px;
  color: #666666;
  margin-bottom: 16px;
`;

const Description = styled.p`
  font-size: 16px;
  line-height: 1.5;
`;

// Define the ProfileCard component
const ProfileCard: React.FC<ProfileCardProps> = ({ name, title, description, avatarUrl }) => {
  // Render a default avatar if avatarUrl is not provided
  const renderAvatar = () => {
    if (avatarUrl) {
      return <Avatar src={avatarUrl} alt={name} />;
    } else {
      return <Avatar src="/default-avatar.png" alt="Default Avatar" />;
    }
  };

  return (
    <CardContainer>
      {renderAvatar()}
      <InfoContainer>
        <Name>{name || 'Unknown'}</Name>
        <Title>{title || 'No Title'}</Title>
        <Description>{description || 'No description available.'}</Description>
      </InfoContainer>
    </CardContainer>
  );
};

// Example usage of the ProfileCard component
const App: React.FC = () => {
  const profileData = {
    name: 'John Doe',
    title: 'Software Engineer',
    description: 'Passionate developer with expertise in web technologies.',
    avatarUrl: 'https://example.com/avatar.jpg',
  };

  return (
    <div>
      <h1>Profile Card Example</h1>
      <ProfileCard {...profileData} />
    </div>
  );
};

export default App;