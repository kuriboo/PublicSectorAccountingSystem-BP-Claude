import React from 'react';
import styled from 'styled-components';

// Component props type definition
type ProfileProps = {
  name: string;
  role: string;
  comment: string;
  imageUrl: string;
};

// Default props
const defaultProps: ProfileProps = {
  name: '',
  role: '',
  comment: '',
  imageUrl: '',
};

// Styled components
const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 10px;

  @media (max-width: 600px) {
    flex-direction: column;
    text-align: center;
  }
`;

const Image = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-right: 20px;

  @media (max-width: 600px) {
    margin-right: 0;
    margin-bottom: 10px;
  }
`;

const TextContainer = styled.div`
  flex: 1;
`;

const Name = styled.h2`
  margin: 0;
  font-size: 24px;
  color: #333;
`;

const Role = styled.p`
  margin: 5px 0;
  font-size: 16px;
  color: #666;
`;

const Comment = styled.p`
  margin: 10px 0 0;
  font-size: 14px;
  color: #999;
`;

// Profile component
const Profile: React.FC<ProfileProps> = ({ name, role, comment, imageUrl }) => {
  // Handle empty props
  const displayName = name || 'Unknown';
  const displayRole = role || 'Not specified';
  const displayComment = comment || 'No comment provided';
  const displayImage = imageUrl || 'https://via.placeholder.com/100';

  return (
    <Container>
      <Image src={displayImage} alt="Profile" />
      <TextContainer>
        <Name>{displayName}</Name>
        <Role>{displayRole}</Role>
        <Comment>{displayComment}</Comment>
      </TextContainer>
    </Container>
  );
};

Profile.defaultProps = defaultProps;

// Example usage
const App: React.FC = () => {
  const profileData: ProfileProps = {
    name: 'John Doe',
    role: 'Developer',
    comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    imageUrl: 'https://example.com/profile.jpg',
  };

  return (
    <div>
      <h1>Profile Example</h1>
      <Profile {...profileData} />
    </div>
  );
};

export default App;