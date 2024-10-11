import React from 'react';
import styled from 'styled-components';

// Define types for component props
interface SystemMaintenanceProps {
  title?: string;
  description?: string;
  buttonText?: string;
  onButtonClick?: () => void;
}

// Define styled components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f5f5f5;
  padding: 20px;
`;

const Icon = styled.div`
  font-size: 64px;
  margin-bottom: 20px;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
  text-align: center;
`;

const Description = styled.p`
  font-size: 16px;
  text-align: center;
  margin-bottom: 20px;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

// Define the SystemMaintenance component
const SystemMaintenance: React.FC<SystemMaintenanceProps> = ({
  title = '株式会社ぎょうせい システム事業部',
  description = 'ただいまメンテナンス中です。ご不便をおかけし申し訳ございません。',
  buttonText = 'トップページへ',
  onButtonClick,
}) => {
  return (
    <Container>
      <Icon>🛠️</Icon>
      <Title>{title}</Title>
      <Description>{description}</Description>
      {buttonText && (
        <Button onClick={onButtonClick}>{buttonText}</Button>
      )}
    </Container>
  );
};

// Example usage of the SystemMaintenance component
const App: React.FC = () => {
  const handleButtonClick = () => {
    // Handle button click event
    console.log('Button clicked');
  };

  return (
    <SystemMaintenance
      title="System Maintenance"
      description="We are currently performing system maintenance. We apologize for any inconvenience."
      buttonText="Go to Homepage"
      onButtonClick={handleButtonClick}
    />
  );
};

export default App;