import React from 'react';
import styled from 'styled-components';

// Types
type ButtonProps = {
  label: string;
  onClick: () => void;
  disabled?: boolean;
  color?: string;
};

// Styled Components
const StyledButton = styled.button<{ color?: string }>`
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  background-color: ${props => props.color || '#007bff'};
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${props => props.color ? `${props.color}cc` : '#0056b3'};
  }

  &:disabled {
    background-color: #6c757d;
    cursor: not-allowed;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 16px;
  }
`;

// Button Component
const Button: React.FC<ButtonProps> = ({ label, onClick, disabled = false, color }) => {
  return (
    <StyledButton onClick={onClick} disabled={disabled} color={color}>
      {label}
    </StyledButton>
  );
};

// Sample usage
const SampleButtons: React.FC = () => {
  const handleClick = () => {
    console.log('Button clicked');
  };

  return (
    <div>
      <Button label="Primary Button" onClick={handleClick} />
      <Button label="Disabled Button" onClick={handleClick} disabled />
      <Button label="Custom Color Button" onClick={handleClick} color="#28a745" />
    </div>
  );
};

export default Button;