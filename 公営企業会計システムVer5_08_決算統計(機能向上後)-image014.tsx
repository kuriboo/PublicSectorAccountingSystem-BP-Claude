import React from 'react';
import styled from 'styled-components';

type ProfileProps = {
  name: string;
  title: string;
  description: string;
  imageUrl: string;
};

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const ProfileImage = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 16px;

  @media (min-width: 768px) {
    margin-bottom: 0;
    margin-right: 24px;
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
  margin-bottom: 8px;
`;

const ProfileTitle = styled.p`
  font-size: 18px;
  color: #666;
  margin-bottom: 16px;
`;

const ProfileDescription = styled.p`
  font-size: 16px;
  line-height: 1.5;
`;

const Profile: React.FC<ProfileProps> = ({ name, title, description, imageUrl }) => {
  // プロパティのデフォルト値を設定
  const defaultName = name || 'Unknown';
  const defaultTitle = title || '';
  const defaultDescription = description || 'No description provided.';
  const defaultImageUrl = imageUrl || 'https://via.placeholder.com/120';

  return (
    <ProfileContainer>
      <ProfileImage src={defaultImageUrl} alt={defaultName} />
      <ProfileInfo>
        <ProfileName>{defaultName}</ProfileName>
        <ProfileTitle>{defaultTitle}</ProfileTitle>
        <ProfileDescription>{defaultDescription}</ProfileDescription>
      </ProfileInfo>
    </ProfileContainer>
  );
};

// 使用例
const App: React.FC = () => {
  return (
    <div>
      <Profile
        name="John Doe"
        title="Software Engineer"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        imageUrl="https://example.com/profile.jpg"
      />
    </div>
  );
};

export default App;