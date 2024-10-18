import React from 'react';
import styled from 'styled-components';

// Define the types for the component props
interface ProfileCardProps {
  imageUrl: string;
  name: string;
  title: string;
  description: string;
}

// Create a styled component for the profile card container
const ProfileCardContainer = styled.div`
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

// Create a styled component for the profile image
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

// Create a styled component for the profile details
const ProfileDetails = styled.div`
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
  }
`;

// Create a styled component for the profile name
const ProfileName = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 8px;
`;

// Create a styled component for the profile title
const ProfileTitle = styled.p`
  font-size: 18px;
  color: #666666;
  margin-bottom: 16px;
`;

// Create a styled component for the profile description
const ProfileDescription = styled.p`
  font-size: 16px;
  line-height: 1.5;
`;

// Define the ProfileCard component
const ProfileCard: React.FC<ProfileCardProps> = ({
  imageUrl,
  name,
  title,
  description,
}) => {
  return (
    <ProfileCardContainer>
      {/* Render the profile image */}
      <ProfileImage src={imageUrl} alt={name} />
      <ProfileDetails>
        {/* Render the profile name */}
        <ProfileName>{name}</ProfileName>
        {/* Render the profile title */}
        <ProfileTitle>{title}</ProfileTitle>
        {/* Render the profile description */}
        <ProfileDescription>{description}</ProfileDescription>
      </ProfileDetails>
    </ProfileCardContainer>
  );
};

// Example usage of the ProfileCard component
const App: React.FC = () => {
  const profileData = {
    imageUrl: 'https://example.com/profile.jpg',
    name: 'John Doe',
    title: 'Software Engineer',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed malesuada velit.',
  };

  return (
    <div>
      <h1>Profile Card Example</h1>
      <ProfileCard {...profileData} />
    </div>
  );
};

export default App;