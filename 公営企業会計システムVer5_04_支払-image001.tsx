import React from 'react';
import styled from 'styled-components';

// Define the types for the component props
interface ProfileCardProps {
  name: string;
  title: string;
  avatarUrl: string;
  description: string;
  twitterUrl?: string;
  facebookUrl?: string;
  linkedinUrl?: string;
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
  font-size: 16px;
  color: #666666;
  margin-bottom: 16px;
`;

const Description = styled.p`
  font-size: 14px;
  color: #888888;
  margin-bottom: 16px;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;

  @media (min-width: 768px) {
    justify-content: flex-start;
  }
`;

const SocialLink = styled.a`
  color: #333333;
  font-size: 20px;
  margin: 0 8px;
  text-decoration: none;
`;

// Define the ProfileCard component
const ProfileCard: React.FC<ProfileCardProps> = ({
  name,
  title,
  avatarUrl,
  description,
  twitterUrl,
  facebookUrl,
  linkedinUrl,
}) => {
  return (
    <CardContainer>
      <Avatar src={avatarUrl} alt="Profile Avatar" />
      <InfoContainer>
        <Name>{name}</Name>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <SocialLinks>
          {twitterUrl && (
            <SocialLink href={twitterUrl} target="_blank" rel="noopener noreferrer">
              {/* Add Twitter icon */}
            </SocialLink>
          )}
          {facebookUrl && (
            <SocialLink href={facebookUrl} target="_blank" rel="noopener noreferrer">
              {/* Add Facebook icon */}
            </SocialLink>
          )}
          {linkedinUrl && (
            <SocialLink href={linkedinUrl} target="_blank" rel="noopener noreferrer">
              {/* Add LinkedIn icon */}
            </SocialLink>
          )}
        </SocialLinks>
      </InfoContainer>
    </CardContainer>
  );
};

// Example usage of the ProfileCard component
const ExampleProfileCard: React.FC = () => {
  const profileData: ProfileCardProps = {
    name: 'John Doe',
    title: 'Software Engineer',
    avatarUrl: 'https://example.com/avatar.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    twitterUrl: 'https://twitter.com/johndoe',
    facebookUrl: 'https://facebook.com/johndoe',
    linkedinUrl: 'https://linkedin.com/in/johndoe',
  };

  return <ProfileCard {...profileData} />;
};

export default ProfileCard;