import React from 'react';
import styled from '@emotion/styled';

type AboutSectionProps = {
  title?: string;
  description?: string;
  imageUrl?: string;
  imageAlt?: string;
};

const AboutSectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background-color: #f8f8f8;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const AboutImage = styled.img`
  width: 100%;
  max-width: 400px;
  height: auto;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    margin-bottom: 0;
    margin-right: 2rem;
  }
`;

const AboutContent = styled.div`
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
  }
`;

const AboutTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const AboutDescription = styled.p`
  font-size: 1rem;
  line-height: 1.5;
`;

const AboutSection: React.FC<AboutSectionProps> = ({
  title = 'About Us',
  description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  imageUrl = 'https://via.placeholder.com/400x300',
  imageAlt = 'About Us',
}) => {
  return (
    <AboutSectionWrapper>
      <AboutImage src={imageUrl} alt={imageAlt} />
      <AboutContent>
        <AboutTitle>{title}</AboutTitle>
        <AboutDescription>{description}</AboutDescription>
      </AboutContent>
    </AboutSectionWrapper>
  );
};

// Usage example
const App: React.FC = () => {
  return (
    <div>
      <AboutSection
        title="About Our Company"
        description="We are a team of dedicated professionals committed to delivering high-quality products and services."
        imageUrl="https://example.com/about-us.jpg"
        imageAlt="Our Team"
      />
    </div>
  );
};

export default App;