import React from 'react';
import styled from 'styled-components';

// Define types for component props
interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

// Define styled components
const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background-color: #f8f8f8;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 300px;
  margin: 1rem;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const IconWrapper = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const Title = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  font-size: 1rem;
  color: #666;
`;

// Define the FeatureCard component
const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <CardContainer>
      {/* Render the icon if provided */}
      {icon && <IconWrapper>{icon}</IconWrapper>}
      
      {/* Render the title if provided */}
      {title && <Title>{title}</Title>}
      
      {/* Render the description if provided */}
      {description && <Description>{description}</Description>}
    </CardContainer>
  );
};

// Example usage of the FeatureCard component
const App: React.FC = () => {
  return (
    <div>
      <FeatureCard
        icon={<i className="fas fa-rocket"></i>}
        title="Feature 1"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />
      <FeatureCard
        icon={<i className="fas fa-cog"></i>}
        title="Feature 2"
        description="Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
      <FeatureCard
        icon={<i className="fas fa-chart-line"></i>}
        title="Feature 3"
        description="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      />
    </div>
  );
};

export default App;