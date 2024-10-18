import React from 'react';
import styled from '@emotion/styled';

type UserCardProps = {
  imageUrl: string;
  username: string;
  profileUrl: string;
  location?: string;
  biography?: string;
};

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  max-width: 300px;
  margin: 0 auto;
  
  @media (min-width: 768px) {
    flex-direction: row;
    max-width: 600px;
  }
`;

const UserImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 1rem;
  
  @media (min-width: 768px) {
    margin-bottom: 0;
    margin-right: 1rem;
  }
`;

const UserInfo = styled.div`
  text-align: center;
  
  @media (min-width: 768px) {
    text-align: left;
  }
`;

const Username = styled.h2`
  margin: 0;
  font-size: 1.5rem;
`;

const ProfileLink = styled.a`
  color: #0070f3;
  text-decoration: none;
`;

const Location = styled.p`
  margin: 0.5rem 0;
`;

const Biography = styled.p`
  margin: 0;
`;

const UserCard: React.FC<UserCardProps> = ({
  imageUrl,
  username,
  profileUrl,
  location,
  biography,
}) => {
  return (
    <CardContainer>
      <UserImage src={imageUrl} alt={`${username}'s profile picture`} />
      <UserInfo>
        <Username>{username}</Username>
        <ProfileLink href={profileUrl} target="_blank" rel="noopener noreferrer">
          View Profile
        </ProfileLink>
        {location && <Location>{location}</Location>}
        {biography && <Biography>{biography}</Biography>}
      </UserInfo>
    </CardContainer>
  );
};

// Sample usage
const App: React.FC = () => {
  const sampleUser: UserCardProps = {
    imageUrl: 'https://example.com/profile.jpg',
    username: 'JohnDoe',
    profileUrl: 'https://example.com/johndoe',
    location: 'New York, USA',
    biography: 'A passionate developer.',
  };

  return (
    <div>
      <h1>User Card Example</h1>
      <UserCard {...sampleUser} />
    </div>
  );
};

export default App;