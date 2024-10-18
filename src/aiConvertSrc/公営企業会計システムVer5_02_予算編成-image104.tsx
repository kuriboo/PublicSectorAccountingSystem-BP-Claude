import React from 'react';
import styled from 'styled-components';

// Component props type definition
type ProfileCardProps = {
  name: string;
  role: string;
  avatar: string;
};

// Styled components
const CardWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;
  border-radius: 8px;
  background-color: #f0f0f0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 600px) {
    flex-direction: column;
    text-align: center;
  }
`;

const Avatar = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-right: 16px;

  @media (max-width: 600px) {
    margin-right: 0;
    margin-bottom: 16px;
  }
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Name = styled.h2`
  font-size: 24px;
  margin: 0;
  margin-bottom: 8px;
`;

const Role = styled.p`
  font-size: 16px;
  color: #666;
  margin: 0;
`;

// ProfileCard component
const ProfileCard: React.FC<ProfileCardProps> = ({ name, role, avatar }) => {
  // Handle missing prop values
  const displayName = name ? name : 'Unknown';
  const displayRole = role ? role : 'Not specified';
  const displayAvatar = avatar ? avatar : 'default-avatar.png';

  return (
    <CardWrapper>
      <Avatar src={displayAvatar} alt="Avatar" />
      <InfoWrapper>
        <Name>{displayName}</Name>
        <Role>{displayRole}</Role>
      </InfoWrapper>
    </CardWrapper>
  );
};

// Example usage
const App: React.FC = () => {
  return (
    <div>
      <ProfileCard
        name="Satou Takeshi"
        role="Engineer"
        avatar="https://example.com/avatar.png"
      />
      <ProfileCard
        name="Suzuki Yumi"
        role="Designer"
        avatar="https://example.com/avatar2.png"
      />
      {/* Example with missing props */}
      <ProfileCard 
        name=""
        role=""
        avatar=""
      />  
    </div>
  );
};

export default App;