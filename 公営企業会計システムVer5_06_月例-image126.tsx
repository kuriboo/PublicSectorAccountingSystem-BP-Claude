import React from 'react';
import styled from 'styled-components';

// Interface for BookInfo component props
interface BookInfoProps {
  title: string;
  author: string;
  description: string;
}

// Styled components
const BookInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  margin: 0 auto;
  
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const BookTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
  text-align: center;
  
  @media (min-width: 768px) {
    text-align: left;
  }
`;

const BookAuthor = styled.p`
  font-size: 16px;
  color: #666;
  margin-bottom: 20px;
  text-align: center;
  
  @media (min-width: 768px) {
    text-align: left;
  }
`;

const BookDescription = styled.p`
  font-size: 16px;
  line-height: 1.5;
  text-align: center;
  
  @media (min-width: 768px) {
    text-align: left;
  }
`;

// BookInfo component
const BookInfo: React.FC<BookInfoProps> = ({ title, author, description }) => {
  // Render nothing if any of the required props are missing
  if (!title || !author || !description) {
    return null;
  }

  return (
    <BookInfoWrapper>
      <div>
        <BookTitle>{title}</BookTitle>
        <BookAuthor>By {author}</BookAuthor>
      </div>
      <BookDescription>{description}</BookDescription>
    </BookInfoWrapper>
  );
};

// Sample data for the BookInfo component
const sampleBookData = {
  title: 'Sample Book Title',
  author: 'John Doe',
  description: 'This is a sample book description. It provides a brief overview of the book.',
};

// Example usage of the BookInfo component
const BookInfoExample: React.FC = () => {
  return (
    <div>
      <h1>Book Information</h1>
      <BookInfo {...sampleBookData} />
    </div>
  );
};

export default BookInfoExample;