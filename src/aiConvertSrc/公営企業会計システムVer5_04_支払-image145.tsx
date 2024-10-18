import React from 'react';
import styled from '@emotion/styled';

interface ChecklistItemProps {
  title: string;
  date: string;
}

const ChecklistItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #fff;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const Title = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;

  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`;

const Date = styled.p`
  font-size: 1rem;
  color: #666;
`;

const ChecklistItem: React.FC<ChecklistItemProps> = ({ title, date }) => {
  // Exception handling for missing title or date
  if (!title || !date) {
    console.warn('ChecklistItem: Missing title or date');
    return null;
  }

  return (
    <ChecklistItemContainer>
      <Title>{title}</Title>
      <Date>{date}</Date>
    </ChecklistItemContainer>
  );
};

// Example usage
const ChecklistItemExample: React.FC = () => {
  return (
    <div>
      <ChecklistItem title="支払予定日" date="令和29年06月17日" />
      <ChecklistItem title="範囲指定" date="" /> {/* Empty date */}
      <ChecklistItem title="" date="令和29年06月17日" /> {/* Empty title */}
    </div>
  );
};

export default ChecklistItemExample;