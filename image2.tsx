// Profile.tsx
import React from 'react';
import styled from '@emotion/styled';

interface ProfileProps {
  name: string;
  role: string;
  description: string;
}

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;
  background-color: #f0f0f0;
  border-radius: 8px;
  
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const ProfileImage = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: #ddd;
  margin-right: 16px;
  
  @media (max-width: 600px) {
    margin-right: 0;
    margin-bottom: 16px;
  }
`;

const ProfileInfo = styled.div`
  flex: 1;
`;

const Name = styled.h2`
  font-size: 24px;
  margin-bottom: 8px;
`;

const Role = styled.p`
  font-size: 16px;
  color: #666;
  margin-bottom: 8px;
`;

const Description = styled.p`
  font-size: 14px;
`;

const Profile: React.FC<ProfileProps> = ({ name, role, description }) => {
  return (
    <ProfileContainer>
      <ProfileImage />
      <ProfileInfo>
        {/* Display name if provided, otherwise show a default message */}
        <Name>{name || 'Name not provided'}</Name>
        
        {/* Display role if provided */}
        {role && <Role>{role}</Role>}
        
        {/* Display description if provided */}
        {description && <Description>{description}</Description>}
      </ProfileInfo>
    </ProfileContainer>
  );
};

// Example usage
const ProfileExample: React.FC = () => {
  return (
    <div>
      <h1>Profile Examples</h1>
      <Profile
        name="John Doe"
        role="Software Engineer"
        description="Experienced software engineer with expertise in web development."
      />
      <Profile
        name="Jane Smith"
        role="UI Designer"
        description="Creative UI designer with a passion for user experience."
      />
      <Profile name="Alice" role="Data Analyst" description="" />
      <Profile name="" role="Manager" description="Experienced manager leading high-performing teams." />
    </div>
  );
};

export default ProfileExample;