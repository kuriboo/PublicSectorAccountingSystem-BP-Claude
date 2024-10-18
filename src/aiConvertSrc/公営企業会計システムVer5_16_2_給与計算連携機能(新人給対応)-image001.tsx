import React from 'react';
import styled from 'styled-components';

// Define the types for the component props
interface AccordionProps {
  title: string;
  content: string;
}

// Define the styled components
const AccordionContainer = styled.div`
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 10px;
`;

const AccordionTitle = styled.div`
  padding: 10px;
  background-color: #f0f0f0;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  user-select: none;

  &:hover {
    background-color: #e0e0e0;
  }
`;

const AccordionContent = styled.div`
  padding: 10px;
  display: none;

  &.open {
    display: block;
  }
`;

const AccordionArrow = styled.span`
  margin-left: 10px;
  transition: transform 0.3s ease;

  &.open {
    transform: rotate(180deg);
  }
`;

// Define the Accordion component
const Accordion: React.FC<AccordionProps> = ({ title, content }) => {
  // State to track if the accordion is open or closed
  const [isOpen, setIsOpen] = React.useState(false);

  // Toggle the accordion state
  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <AccordionContainer>
      <AccordionTitle onClick={toggleAccordion}>
        {title}
        <AccordionArrow className={isOpen ? 'open' : ''}>▼</AccordionArrow>
      </AccordionTitle>
      <AccordionContent className={isOpen ? 'open' : ''}>{content}</AccordionContent>
    </AccordionContainer>
  );
};

// Sample data for demonstration
const accordionData = [
  {
    title: 'Section 1',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  {
    title: 'Section 2',
    content: 'Pellentesque euismod, nulla sit amet aliquam lacinia, nisl nisl aliquam nisl, nec aliquam nisl nisl sit amet nisl.'
  }
];

// Usage example
const AccordionExample: React.FC = () => {
  return (
    <div>
      {accordionData.map((item, index) => (
        <Accordion key={index} title={item.title} content={item.content} />
      ))}
    </div>
  );
};

export default AccordionExample;