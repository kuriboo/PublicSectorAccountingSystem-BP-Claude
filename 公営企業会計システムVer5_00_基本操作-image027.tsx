import React from 'react';
import styled from '@emotion/styled';

// Define types for component props
type PublicCompanyFAQProps = {
  title: string;
  searchKeyword: string;
  faqList: {
    question: string;
    answer: string;
    date: string;
  }[];
  onSearch: (keyword: string) => void;
};

// Define styled components
const Container = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
  color: #333;
`;

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const SearchInput = styled.input`
  flex: 1;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const SearchButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-left: 10px;

  &:hover {
    background-color: #0056b3;
  }
`;

const FAQList = styled.ul`
  list-style: none;
  padding: 0;
`;

const FAQItem = styled.li`
  margin-bottom: 20px;
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 4px;
`;

const Question = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Answer = styled.p`
  font-size: 16px;
  margin-bottom: 10px;
`;

const Date = styled.p`
  font-size: 14px;
  color: #6c757d;
`;

const NoResults = styled.p`
  font-size: 16px;
  text-align: center;
  color: #6c757d;
`;

// Define main component
const PublicCompanyFAQ: React.FC<PublicCompanyFAQProps> = ({
  title,
  searchKeyword,
  faqList,
  onSearch,
}) => {
  // Filter FAQ list based on search keyword
  const filteredFAQList = faqList.filter((faq) =>
    faq.question.toLowerCase().includes(searchKeyword.toLowerCase())
  );

  return (
    <Container>
      <Title>{title}</Title>
      <SearchBar>
        <SearchInput
          type="text"
          placeholder="Search FAQs..."
          value={searchKeyword}
          onChange={(e) => onSearch(e.target.value)}
        />
        <SearchButton>Search</SearchButton>
      </SearchBar>
      {filteredFAQList.length > 0 ? (
        <FAQList>
          {filteredFAQList.map((faq, index) => (
            <FAQItem key={index}>
              <Question>{faq.question}</Question>
              <Answer>{faq.answer}</Answer>
              <Date>{faq.date}</Date>
            </FAQItem>
          ))}
        </FAQList>
      ) : (
        <NoResults>No results found.</NoResults>
      )}
    </Container>
  );
};

// Example usage of the component
const App: React.FC = () => {
  const faqData = [
    {
      question: 'How can I contact the company?',
      answer: 'You can contact us via email at info@example.com or call us at 555-123-4567.',
      date: '2023-01-01',
    },
    {
      question: 'What are your business hours?',
      answer: 'Our business hours are Monday to Friday, 9am to 5pm.',
      date: '2023-02-15',
    },
    // Add more sample FAQ data
  ];

  const [searchKeyword, setSearchKeyword] = React.useState('');

  return (
    <PublicCompanyFAQ
      title="公営企業会計FAQ"
      searchKeyword={searchKeyword}
      faqList={faqData}
      onSearch={setSearchKeyword}
    />
  );
};

export default App;