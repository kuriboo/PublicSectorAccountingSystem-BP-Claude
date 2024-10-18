import React from 'react';
import styled from '@emotion/styled';

type HeaderProps = {
  title: string;
  subtitle?: string;
}

const HeaderWrapper = styled.header`
  background-color: #f0f0f0;
  padding: 20px;
  text-align: center;

  @media (min-width: 768px) {
    padding: 40px;
  }
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 10px;

  @media (min-width: 768px) {
    font-size: 36px;
  }
`;

const Subtitle = styled.p`
  font-size: 16px;
  color: #666;

  @media (min-width: 768px) {
    font-size: 20px;
  }
`;

const Header: React.FC<HeaderProps> = ({ title, subtitle }) => {
  return (
    <HeaderWrapper>
      <Title>{title}</Title>
      {subtitle && <Subtitle>{subtitle}</Subtitle>}
    </HeaderWrapper>
  );
};

// Sample usage
const App: React.FC = () => {
  return (
    <div>
      <Header 
        title="Welcome to My Website" 
        subtitle="Discover amazing content"
      />
      {/* Add other components */}
    </div>
  );
};

export default App;