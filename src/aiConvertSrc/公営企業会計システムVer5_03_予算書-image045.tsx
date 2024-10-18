import React from 'react';
import styled from '@emotion/styled';

interface BookData {
  title: string;
  author: string;
  description: string;
}

interface BookCardProps {
  book: BookData;
}

const CardWrapper = styled.div`
  background-color: #f5f5f5;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
  }
`;

const BookImage = styled.div`
  width: 120px;
  height: 180px;
  background-color: #ddd;
  margin-right: 16px;
  flex-shrink: 0;

  @media (max-width: 767px) {
    margin-bottom: 16px;
  }
`;

const BookDetails = styled.div`
  flex-grow: 1;
`;

const BookTitle = styled.h3`
  font-size: 20px;
  margin-bottom: 8px;
`;

const BookAuthor = styled.p`
  font-size: 14px;
  color: #666;
  margin-bottom: 8px;
`;

const BookDescription = styled.p`
  font-size: 14px;
  line-height: 1.5;
`;

const BookCard: React.FC<BookCardProps> = ({ book }) => {
  // 値が空の場合のデフォルト値を設定
  const { title = 'No Title', author = 'Unknown', description = 'No description available.' } = book;

  return (
    <CardWrapper>
      <BookImage />
      <BookDetails>
        <BookTitle>{title}</BookTitle>
        <BookAuthor>{author}</BookAuthor>
        <BookDescription>{description}</BookDescription>
      </BookDetails>
    </CardWrapper>
  );
};

// 使用例
const App: React.FC = () => {
  const sampleBooks: BookData[] = [
    {
      title: 'Sample Book 1',
      author: 'John Doe',
      description: 'This is a sample book description.',
    },
    {
      title: 'Sample Book 2',
      author: 'Jane Smith',
      description: 'Another sample book description.',
    },
  ];

  return (
    <div>
      {sampleBooks.map((book, index) => (
        <BookCard key={index} book={book} />
      ))}
    </div>
  );
};

export default App;