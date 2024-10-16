import React from 'react';
import styled from 'styled-components';

// Define the interface for the component props
interface ProfileCardProps {
  imageUrl: string;
  name: string;
  role: string;
  description: string;
}

// Define the styled components
const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  max-width: 300px;
  margin: 0 auto;
`;

const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 20px;
`;

const Name = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Role = styled.p`
  font-size: 18px;
  color: #666;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 16px;
  text-align: center;
`;

// Define the ProfileCard component
const ProfileCard: React.FC<ProfileCardProps> = ({ imageUrl, name, role, description }) => {
  // Handle missing or empty values
  const displayName = name ? name : 'Unknown';
  const displayRole = role ? role : '';
  const displayDescription = description ? description : '';

  return (
    <CardContainer>
      {imageUrl && <ProfileImage src={imageUrl} alt={`${displayName}'s profile`} />}
      <Name>{displayName}</Name>
      <Role>{displayRole}</Role>
      <Description>{displayDescription}</Description>
    </CardContainer>
  );
};

// Sample usage of the ProfileCard component
const App: React.FC = () => {
  const profileData = {
    imageUrl: 'https://example.com/profile-image.jpg',
    name: 'John Doe',
    role: 'Software Engineer',
    description: 'Passionate about building web applications using React and TypeScript.',
  };

  return (
    <div>
      <ProfileCard {...profileData} />
    </div>
  );
};

export default App;