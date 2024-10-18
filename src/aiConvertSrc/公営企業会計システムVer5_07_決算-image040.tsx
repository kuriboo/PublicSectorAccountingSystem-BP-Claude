import React from 'react';
import styled from 'styled-components';

// Type definition for ProfileCard props
type ProfileCardProps = {
  imageUrl: string;
  name: string;
  title: string;
  description: string;
};

// Styled components
const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
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

const Title = styled.h3`
  font-size: 18px;
  color: #666666;
  margin-bottom: 16px;
`;

const Description = styled.p`
  font-size: 14px;
  line-height: 1.5;
`;

// ProfileCard component
const ProfileCard: React.FC<ProfileCardProps> = ({ imageUrl, name, title, description }) => {
  // Handle missing values
  const displayName = name ? name : 'Unknown';
  const displayTitle = title ? title : '';
  const displayDescription = description ? description : '';

  return (
    <Card>
      <ProfileImage src={imageUrl} alt={`${displayName}'s profile`} />
      <ProfileInfo>
        <Name>{displayName}</Name>
        <Title>{displayTitle}</Title>
        <Description>{displayDescription}</Description>
      </ProfileInfo>
    </Card>
  );
};

// Sample data
const sampleData = {
  imageUrl: 'https://example.com/profile.jpg',
  name: 'John Doe',
  title: 'Software Engineer',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nulla sit amet aliquam lacinia, nisl nisl aliquam nisl, nec aliquam nisl nisl sit amet nisl.',
};

// Usage example
const App: React.FC = () => {
  return (
    <div>
      <h1>Profile Card Example</h1>
      <ProfileCard {...sampleData} />
    </div>
  );
};

export default App;