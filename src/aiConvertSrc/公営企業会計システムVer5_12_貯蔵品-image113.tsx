import React from 'react';
import styled from 'styled-components';

interface ProfileCardProps {
  avatarUrl: string;
  name: string;
  username: string;
  bio?: string;
  location?: string;
  website?: string;
}

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
  border-radius: 8px;
  background-color: #ffffff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 300px;
  margin: 0 auto;

  @media (min-width: 768px) {
    flex-direction: row;
    max-width: 600px;
  }
`;

const Avatar = styled.img`
  width: 100px;
  height: 100px;
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
  margin-bottom: 4px;
`;

const Username = styled.p`
  font-size: 16px;
  color: #666666;
  margin-bottom: 8px;
`;

const Bio = styled.p`
  font-size: 14px;
  color: #333333;
  margin-bottom: 8px;
`;

const Location = styled.p`
  font-size: 14px;
  color: #666666;
  margin-bottom: 4px;
`;

const Website = styled.a`
  font-size: 14px;
  color: #0077cc;
  text-decoration: none;
`;

const ProfileCard: React.FC<ProfileCardProps> = ({
  avatarUrl,
  name,
  username,
  bio,
  location,
  website,
}) => (
  <Card>
    <Avatar src={avatarUrl} alt={`${name}'s avatar`} />
    <InfoContainer>
      <Name>{name}</Name>
      <Username>@{username}</Username>
      {bio && <Bio>{bio}</Bio>}
      {location && <Location>{location}</Location>}
      {website && <Website href={website}>{website}</Website>}
    </InfoContainer>
  </Card>
);

// Example usage
const ProfileCardExample: React.FC = () => {
  const sampleData: ProfileCardProps = {
    avatarUrl: 'https://example.com/avatar.jpg',
    name: 'John Doe',
    username: 'johndoe',
    bio: 'Web developer and coffee enthusiast',
    location: 'San Francisco, CA',
    website: 'https://johndoe.com',
  };

  return <ProfileCard {...sampleData} />;
};

export default ProfileCard;