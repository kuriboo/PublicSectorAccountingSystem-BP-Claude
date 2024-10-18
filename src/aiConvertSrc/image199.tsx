import React from 'react';
import styled from '@emotion/styled';

// Define interface for component props
interface SystemBusinessProps {
  title: string;
  description: string;
}

// Define styled components
const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  background-color: #f0f0f0;
  border-radius: 8px;
  
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  background-color: #333;
  color: #fff;
  border-radius: 50%;
  font-size: 1.5rem;
  margin-right: 1rem;

  @media (max-width: 600px) {
    margin-right: 0;
    margin-bottom: 1rem;
  }
`;

const Content = styled.div`
  flex: 1;
`;

const Title = styled.h3`
  margin: 0;
  font-size: 1.25rem;
`;

const Description = styled.p`
  margin: 0.5rem 0 0;
`;

// Define main component
const SystemBusiness: React.FC<SystemBusinessProps> = ({ title, description }) => {
  // Handle case where title or description is not provided
  if (!title || !description) {
    console.warn('SystemBusiness: Missing required props');
    return null; 
  }

  return (
    <Container>
      <Icon>SB</Icon>
      <Content>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </Content>
    </Container>
  );
};

// Example usage
const ExampleUsage: React.FC = () => {
  return (
    <div>
      <SystemBusiness 
        title="システム事業部" 
        description="私たちのシステム事業部は、最新技術を活用し、お客様のビジネスに最適なソリューションを提供します。"
      />
    </div>
  );
};

export default SystemBusiness;