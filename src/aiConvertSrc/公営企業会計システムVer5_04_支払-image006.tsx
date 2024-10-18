import React from 'react';
import styled from 'styled-components';

// Interface for SingleLineInputProps
interface SingleLineInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
}

// Styled component for the input field
const Input = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: #007bff;
  }

  &::placeholder {
    color: #999;
  }

  &:disabled {
    background-color: #f5f5f5;
    cursor: not-allowed;
  }
`;

// Single line input component
const SingleLineInput: React.FC<SingleLineInputProps> = ({ value, onChange, placeholder, disabled }) => {
  // Handle input change
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <Input
      type="text"
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
      disabled={disabled}
    />
  );
};

// Example usage of the SingleLineInput component
const ExampleUsage: React.FC = () => {
  const [inputValue, setInputValue] = React.useState('');

  return (
    <div>
      <h2>Single Line Input Example</h2>
      <SingleLineInput
        value={inputValue}
        onChange={setInputValue}
        placeholder="Enter text here"
        disabled={false}
      />
      <p>Input Value: {inputValue}</p>
    </div>
  );
};

export default ExampleUsage;