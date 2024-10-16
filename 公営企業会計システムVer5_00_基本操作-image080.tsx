import React from 'react';
import styled from 'styled-components';

// Component props type definition
type ProfileCardProps = {
  imageUrl: string;
  name: string;
  description: string;
};

// Styled components
const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  max-width: 300px;
  margin: 0 auto;

  @media (min-width: 768px) {
    flex-direction: row;
    max-width: 500px;
  }
`;

const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    margin-right: 20px;
    margin-bottom: 0;
  }
`;

const ProfileInfo = styled.div`
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
  }
`;

const ProfileName = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
`;

const ProfileDescription = styled.p`
  font-size: 16px;
  line-height: 1.5;
`;

// Profile card component
const ProfileCard: React.FC<ProfileCardProps> = ({ imageUrl, name, description }) => {
  // Handle missing props
  const defaultImage = 'https://via.placeholder.com/150';
  const defaultName = 'Unknown';
  const defaultDescription = 'No description available';

  return (
    <CardContainer>
      <ProfileImage src={imageUrl || defaultImage} alt={name || defaultName} />
      <ProfileInfo>
        <ProfileName>{name || defaultName}</ProfileName>
        <ProfileDescription>{description || defaultDescription}</ProfileDescription>
      </ProfileInfo>
    </CardContainer>
  );
};

// Sample usage
const App: React.FC = () => {
  const sampleData = {
    imageUrl: 'https://example.com/profile-image.jpg',
    name: 'John Doe',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  };

  return (
    <div>
      <h1>Profile Card Example</h1>
      <ProfileCard {...sampleData} />
    </div>
  );
};

export default App;