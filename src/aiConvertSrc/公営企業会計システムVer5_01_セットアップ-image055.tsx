import React from 'react';
import styled from '@emotion/styled';

interface HeaderProps {
  projectName?: string;
  userName?: string;
  onOkClick?: () => void;
  onClearClick?: () => void;
  onCancelClick?: () => void;
}

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px;
  background-color: #f0f0f0;
  border-bottom: 1px solid #ccc;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const ProjectName = styled.div`
  font-weight: bold;
  font-size: 18px;

  @media (max-width: 600px) {
    margin-bottom: 8px;
  }
`;

const UserName = styled.div`
  font-size: 14px;
  color: #666;
  margin-left: 16px;

  @media (max-width: 600px) {
    margin-left: 0;
    margin-bottom: 8px;
  }
`;

const ButtonsWrapper = styled.div`
  display: flex;
  gap: 8px;
`;

const Button = styled.button`
  padding: 6px 12px;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

const OkButton = styled(Button)`
  background-color: #007bff;
  color: #fff;
`;

const ClearButton = styled(Button)`
  background-color: #6c757d;
  color: #fff;
`;

const CancelButton = styled(Button)`
  background-color: #dc3545;
  color: #fff;
`;

const Header: React.FC<HeaderProps> = ({
  projectName = '',
  userName = '',
  onOkClick,
  onClearClick,
  onCancelClick,
}) => {
  return (
    <HeaderWrapper>
      <div>
        <ProjectName>{projectName || '無題のプロジェクト'}</ProjectName>
        <UserName>{userName || 'ゲスト'}</UserName>
      </div>
      <ButtonsWrapper>
        <OkButton onClick={onOkClick}>OK</OkButton>
        <ClearButton onClick={onClearClick}>クリア</ClearButton>
        <CancelButton onClick={onCancelClick}>キャンセル</CancelButton>
      </ButtonsWrapper>
    </HeaderWrapper>
  );
};

// Usage example
const App: React.FC = () => {
  const handleOkClick = () => {
    console.log('OKがクリックされました');
  };

  const handleClearClick = () => {
    console.log('クリアがクリックされました');
  };

  const handleCancelClick = () => {
    console.log('キャンセルがクリックされました');
  };

  return (
    <div>
      <Header
        projectName="プロジェクト1"
        userName="山田太郎"
        onOkClick={handleOkClick}
        onClearClick={handleClearClick}
        onCancelClick={handleCancelClick}
      />
      {/* Rest of the app content */}
    </div>
  );
};

export default App;