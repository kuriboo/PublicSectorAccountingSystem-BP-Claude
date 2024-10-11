import React from 'react';
import styled from 'styled-components';

// Define the types for the component props
interface KiyoseiBannerProps {
  text?: string;
  backgroundColor?: string;
  textColor?: string;
  fontSize?: string;
}

// Create a styled component for the banner
const BannerContainer = styled.div<KiyoseiBannerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 10px;
  background-color: ${props => props.backgroundColor || '#000'};
  color: ${props => props.textColor || '#fff'};
  font-size: ${props => props.fontSize || '24px'};

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

// Define the KiyoseiBanner component
const KiyoseiBanner: React.FC<KiyoseiBannerProps> = ({
  text = '株式会社きようせい',
  backgroundColor,
  textColor,
  fontSize,
}) => {
  return (
    <BannerContainer
      backgroundColor={backgroundColor}
      textColor={textColor}
      fontSize={fontSize}
    >
      {text}
    </BannerContainer>
  );
};

// Example usage of the KiyoseiBanner component
const App: React.FC = () => {
  return (
    <div>
      <KiyoseiBanner />
      <KiyoseiBanner
        text="Custom Kiyosei Banner"
        backgroundColor="#f0f0f0"
        textColor="#333"
        fontSize="20px"
      />
    </div>
  );
};

export default App;