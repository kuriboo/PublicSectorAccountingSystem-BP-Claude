import React from 'react';
import styled from 'styled-components';

// Define types for component props
interface SystemProps {
  title?: string;
  description?: string;
}

// Define styled components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  background-color: #333;
  color: #fff;
  font-size: 48px;
  border-radius: 50%;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    margin-bottom: 0;
    margin-right: 20px;
  }
`;

const Content = styled.div`
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
  }
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 16px;
  color: #666;
`;

// Define the main component
const System: React.FC<SystemProps> = ({ title, description }) => {
  return (
    <Container>
      <Icon>
        {/* Replace with appropriate icon */}
        <span>🌐</span>
      </Icon>
      <Content>
        <Title>{title || 'Default Title'}</Title>
        <Description>{description || 'Default description.'}</Description>
      </Content>
    </Container>
  );
};

// Example usage of the component
const App: React.FC = () => {
  return (
    <div>
      <System
        title="システム事業部"
        description="私たちのシステム事業部では、最新のテクノロジーを活用し、お客様のビジネスに最適なソリューションを提供します。"
      />
    </div>
  );
};

export default App;