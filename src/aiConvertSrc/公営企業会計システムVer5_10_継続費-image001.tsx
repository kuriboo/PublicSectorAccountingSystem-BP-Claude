import React from 'react';
import styled from 'styled-components';

// Define types for component props
type SystemBusinessProps = {
  title?: string;
  description?: string;
};

// Define styled components
const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 10px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);

  @media (max-width: 600px) {
    flex-direction: column;
    text-align: center;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  background-color: #fff;
  border-radius: 50%;
  margin-right: 20px;
  flex-shrink: 0;

  @media (max-width: 600px) {
    margin-right: 0;
    margin-bottom: 20px;
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

// Define main component
const SystemBusiness: React.FC<SystemBusinessProps> = ({ title = 'システム事業部', description = '社内システムの開発・運用を行っています。' }) => {
  return (
    <Container>
      <IconWrapper>
        {/* Globe icon */}
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      </IconWrapper>
      <div>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </div>
    </Container>
  );
};

export default SystemBusiness;

// Example usage
const Example = () => {
  return (
    <div>
      <SystemBusiness />
      <SystemBusiness title="カスタムタイトル" description="カスタム説明文" />
    </div>
  );
};