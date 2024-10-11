import React from 'react';
import styled from 'styled-components';

interface CompanySystemProps {
  title?: string;
  description?: string;
}

const CompanySystem: React.FC<CompanySystemProps> = ({ title = '株式会社ぎょうせい', description = 'データ・システム事業部' }) => {
  return (
    <Container>
      {/* Globe icon */}
      <Icon>🌐</Icon>

      {/* Company name and department */}
      <ContentWrapper>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </ContentWrapper>
    </Container>
  );
};

// Styling with CSS-in-JS
const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: #000;
  color: #fff;
  padding: 16px;
  border-radius: 8px;

  @media (max-width: 600px) {
    flex-direction: column;
    text-align: center;
  }
`;

const Icon = styled.div`
  font-size: 48px;
  margin-right: 16px;

  @media (max-width: 600px) {
    margin-right: 0;
    margin-bottom: 8px;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  font-size: 24px;
  margin: 0;
`;

const Description = styled.p`
  font-size: 18px;
  margin: 4px 0 0;
`;

// Example usage
const App: React.FC = () => {
  return (
    <div>
      <CompanySystem />
      <CompanySystem title="株式会社ABC" description="営業部" />
    </div>
  );
};

export default App;