import React from 'react';
import styled from 'styled-components';

// ProfileCardProps interface defines the props for the ProfileCard component
interface ProfileCardProps {
  name: string;
  job: string;
  description: string;
  profileImage: string;
}

// StyledProfileCard is a styled component that represents the profile card
const StyledProfileCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  max-width: 300px;
  margin: 0 auto;

  @media (min-width: 768px) {
    flex-direction: row;
    max-width: 600px;
  }
`;

// ProfileImage is a styled component that represents the profile image
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

// ProfileInfo is a styled component that represents the profile information
const ProfileInfo = styled.div`
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
  }
`;

// Name is a styled component that represents the name
const Name = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

// Job is a styled component that represents the job title
const Job = styled.p`
  font-size: 1rem;
  color: #888888;
  margin-bottom: 1rem;
`;

// Description is a styled component that represents the description
const Description = styled.p`
  font-size: 1rem;
  line-height: 1.5;
`;

// ProfileCard component displays a profile card with an image, name, job title, and description
const ProfileCard: React.FC<ProfileCardProps> = ({ name, job, description, profileImage }) => {
  return (
    <StyledProfileCard>
      <ProfileImage src={profileImage} alt={`${name}'s profile`} />
      <ProfileInfo>
        <Name>{name}</Name>
        <Job>{job}</Job>
        <Description>{description}</Description>
      </ProfileInfo>
    </StyledProfileCard>
  );
};

// Sample data for demonstration purposes
const sampleData: ProfileCardProps = {
  name: 'John Doe',
  job: 'Software Engineer',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel metus euismod, dictum velit vel, malesuada nisi.',
  profileImage: 'https://example.com/profile-image.jpg',
};

// Example usage of the ProfileCard component
const ProfileCardExample: React.FC = () => {
  return (
    <div>
      <h1>Profile Card Example</h1>
      <ProfileCard {...sampleData} />
    </div>
  );
};

export default ProfileCardExample;