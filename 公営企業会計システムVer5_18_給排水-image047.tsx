import React from 'react';
import styled from 'styled-components';

// Define types for component props
interface ButtonProps {
  label: string;
  onClick: () => void;
}

interface SectionProps {
  title: string;
  description?: string;
  buttonLabel?: string;
  onButtonClick?: () => void;
}

// Styled components
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

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
  }
`;

const Description = styled.p`
  font-size: 16px;
  margin-bottom: 20px;
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
  }
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

// Button component
const CustomButton: React.FC<ButtonProps> = ({ label, onClick }) => {
  return <Button onClick={onClick}>{label}</Button>;
};

// Section component
const Section: React.FC<SectionProps> = ({
  title,
  description,
  buttonLabel,
  onButtonClick,
}) => {
  return (
    <Container>
      <div>
        <Title>{title}</Title>
        {description && <Description>{description}</Description>}
      </div>
      {buttonLabel && onButtonClick && (
        <CustomButton label={buttonLabel} onClick={onButtonClick} />
      )}
    </Container>
  );
};

// Sample usage
const SampleSection: React.FC = () => {
  const handleButtonClick = () => {
    console.log('Button clicked!');
  };

  return (
    <Section
      title="Sample Section"
      description="This is a sample section with a button."
      buttonLabel="Click Me"
      onButtonClick={handleButtonClick}
    />
  );
};

export default SampleSection;