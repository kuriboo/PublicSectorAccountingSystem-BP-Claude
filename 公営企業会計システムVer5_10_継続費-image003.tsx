import React from 'react';
import styled from '@emotion/styled';

interface ProfileCardProps {
  name: string;
  jobTitle: string;
  company: string;
  avatarUrl: string;
}

const ProfileCardContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;
  border-radius: 8px;
  background-color: #f5f5f5;
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

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Name = styled.h2`
  margin: 0;
  font-size: 24px;
  font-weight: bold;
`;

const JobTitle = styled.p`
  margin: 0;
  font-size: 16px;
  color: #666;
`;

const Company = styled.p`
  margin: 0;
  font-size: 14px;
  color: #999;
`;

const ProfileCard: React.FC<ProfileCardProps> = ({ name, jobTitle, company, avatarUrl }) => {
  return (
    <ProfileCardContainer>
      {/* レンダリング前にavatarUrlが存在するかチェック */}
      {avatarUrl && <Avatar src={avatarUrl} alt={`${name}'s avatar`} />}
      <InfoContainer>
        {/* nameが存在しない場合は'Unknown'を表示 */}
        <Name>{name || 'Unknown'}</Name>
        {/* jobTitleとcompanyが存在する場合のみ表示 */}
        {jobTitle && <JobTitle>{jobTitle}</JobTitle>}
        {company && <Company>{company}</Company>}
      </InfoContainer>
    </ProfileCardContainer>
  );
};

// サンプルデータを用いた使用例
const ProfileCardExample = () => {
  const sampleData: ProfileCardProps = {
    name: 'John Doe',
    jobTitle: 'Software Engineer',
    company: 'ABC Company',
    avatarUrl: 'https://example.com/avatar.jpg',
  };

  return <ProfileCard {...sampleData} />;
};

export default ProfileCard;