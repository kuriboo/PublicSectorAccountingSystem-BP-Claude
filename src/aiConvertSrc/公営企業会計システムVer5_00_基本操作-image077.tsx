import React from 'react';
import styled from '@emotion/styled';

type ProfileCardProps = {
  name: string;
  position: string;
  description: string;
  profileImage: string;
};

const ProfileCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background-color: #f5f5f5;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 300px;
  margin: 0 auto;

  @media (min-width: 768px) {
    flex-direction: row;
    max-width: 600px;
  }
`;

const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    margin-right: 2rem;
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
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

const Position = styled.p`
  font-size: 1rem;
  color: #666;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  font-size: 0.9rem;
  line-height: 1.5;
`;

const ProfileCard: React.FC<ProfileCardProps> = ({ name, position, description, profileImage }) => {
  // Handle case when any of the required props are missing
  if (!name || !position || !description || !profileImage) {
    console.warn('One or more required props are missing for ProfileCard component');
    return null;
  }

  return (
    <ProfileCardContainer>
      <ProfileImage src={profileImage} alt={`${name}'s profile picture`} />
      <ProfileInfo>
        <Name>{name}</Name>
        <Position>{position}</Position>
        <Description>{description}</Description>
      </ProfileInfo>
    </ProfileCardContainer>
  );
};

// Example usage
const App: React.FC = () => {
  return (
    <ProfileCard
      name="John Doe"
      position="Software Engineer"
      description="John is a skilled software engineer with experience in web development and mobile app development."
      profileImage="https://example.com/profile-image.jpg"
    />
  );
};

export default App;