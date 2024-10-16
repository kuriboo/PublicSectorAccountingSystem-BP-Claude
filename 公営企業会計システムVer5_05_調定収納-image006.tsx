import React from 'react';
import styled from '@emotion/styled';

type ReceiptFilterProps = {
  onSearch: () => void;
  onClear: () => void;
};

const ReceiptFilter: React.FC<ReceiptFilterProps> = ({ onSearch, onClear }) => {
  return (
    <Container>
      <Title>集合収納受付解除</Title>
      <DateRangeContainer>
        <DateRangeLabel>収納受付日</DateRangeLabel>
        <DateInput type="date" />
        <Separator>~</Separator>
        <DateInput type="date" />
      </DateRangeContainer>
      <ReceiptRangeContainer>
        <ReceiptRangeLabel>起案所機</ReceiptRangeLabel>
        <ReceiptInput type="number" min="0" max="999999" />
        <Separator>~</Separator>
        <ReceiptInput type="number" min="0" max="999999" />
      </ReceiptRangeContainer>
      <ButtonContainer>
        <Button onClick={onSearch}>表示</Button>
        <Button onClick={onClear}>クリア</Button>
      </ButtonContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f0f0f0;
`;

const Title = styled.h2`
  margin-bottom: 20px;
`;

const DateRangeContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const DateRangeLabel = styled.label`
  margin-right: 10px;
`;

const DateInput = styled.input`
  margin-right: 5px;
  padding: 5px;
`;

const ReceiptRangeContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ReceiptRangeLabel = styled.label`
  margin-right: 10px;
`;

const ReceiptInput = styled.input`
  margin-right: 5px;
  padding: 5px;
  width: 100px;
`;

const Separator = styled.span`
  margin: 0 5px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  padding: 10px 20px;
  margin: 0 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

// Usage example
const App: React.FC = () => {
  const handleSearch = () => {
    // Perform search logic
    console.log('Search button clicked');
  };

  const handleClear = () => {
    // Perform clear logic
    console.log('Clear button clicked');
  };

  return (
    <div>
      <ReceiptFilter onSearch={handleSearch} onClear={handleClear} />
      {/* Other components */}
    </div>
  );
};

export default App;