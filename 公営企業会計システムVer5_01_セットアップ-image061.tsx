import React from 'react';
import styled from 'styled-components';

// Props type definition for the DateInput component
type DateInputProps = {
  value: string;
  onChange: (value: string) => void;
};

// Styled components for the DateInput
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  background-color: #f0f0f0;
  border-radius: 4px;
`;

const Input = styled.input`
  flex: 1;
  padding: 5px;
  border: none;
  background-color: transparent;
  font-size: 16px;
`;

const Button = styled.button`
  margin-left: 10px;
  padding: 5px 10px;
  border: none;
  border-radius: 4px;
  background-color: #e0e0e0;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    background-color: #d0d0d0;
  }
`;

/**
 * DateInput component
 * Renders an input field for entering a date along with action buttons
 */
const DateInput: React.FC<DateInputProps> = ({ value, onChange }) => {
  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <Container>
      <Input type="text" value={value} onChange={handleChange} />
      <Button>OK</Button>
      <Button>Clear</Button>
      <Button>Cancel</Button>
    </Container>
  );
};

// Sample usage of the DateInput component
const App: React.FC = () => {
  const [date, setDate] = React.useState('');

  return (
    <div>
      <h1>Date Input Example</h1>
      <DateInput
        value={date}
        onChange={(value) => setDate(value)}
      />
      <p>Selected Date: {date}</p>
    </div>
  );
};

export default App;