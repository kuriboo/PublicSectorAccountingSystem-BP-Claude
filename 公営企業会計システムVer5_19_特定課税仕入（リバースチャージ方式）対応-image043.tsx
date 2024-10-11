import React from 'react';
import styled from 'styled-components';

// Define the interface for the component props
interface HeaderProps {
  title: string;
  description?: string;
}

// Create a styled component for the header container
const HeaderContainer = styled.header`
  background-color: #f0f0f0;
  padding: 20px;
  text-align: center;
  font-family: Arial, sans-serif;

  @media (max-width: 600px) {
    padding: 10px;
  }
`;

// Create a styled component for the title
const Title = styled.h1`
  color: #333;
  font-size: 24px;
  margin-bottom: 10px;

  @media (max-width: 600px) {
    font-size: 20px;
  }
`;

// Create a styled component for the description
const Description = styled.p`
  color: #666;
  font-size: 16px;

  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

// Define the Header component
const Header: React.FC<HeaderProps> = ({ title, description }) => {
  return (
    <HeaderContainer>
      <Title>{title}</Title>
      {description && <Description>{description}</Description>}
    </HeaderContainer>
  );
};

// Define a sample data object
const sampleData: HeaderProps = {
  title: 'Welcome to My Website',
  description: 'This is a sample header component.',
};

// Create a sample usage of the Header component
const App: React.FC = () => {
  return (
    <div>
      <Header {...sampleData} />
      {/* Other content */}
    </div>
  );
};

export default App;