import React from 'react';
import styled from 'styled-components';

// Define the types for the component props
interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
}

// Define the styled components
const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background-color: #f5f5f5;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;

  @media (min-width: 768px) {
    flex-direction: row;
    text-align: left;
  }
`;

const IconWrapper = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    margin-right: 2rem;
    margin-bottom: 0;
  }
`;

const ContentWrapper = styled.div`
  flex: 1;
`;

const Title = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

const Description = styled.p`
  font-size: 1rem;
  color: #666;
`;

// Define the FeatureCard component
const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon }) => {
  // Handle the case when title, description, or icon is missing
  if (!title || !description || !icon) {
    return null;
  }

  return (
    <CardContainer>
      <IconWrapper>{icon}</IconWrapper>
      <ContentWrapper>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </ContentWrapper>
    </CardContainer>
  );
};

// Sample usage of the FeatureCard component
const FeatureCardExample: React.FC = () => {
  return (
    <div>
      <FeatureCard
        title="Feature 1"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        icon="🚀"
      />
      <FeatureCard
        title="Feature 2"
        description="Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        icon="🌟"
      />
    </div>
  );
};

export default FeatureCardExample;