import React, { useState } from 'react';
import styled from '@emotion/styled';

// Define the type for table row data
type RowData = {
  no: number;
  text: string;
};

// Define the props for the CustomTable component
type CustomTableProps = {
  data: RowData[];
};

// Create a styled div for the table container
const TableContainer = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

// Create a styled table element
const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
`;

// Create a styled table header
const TableHeader = styled.th`
  padding: 10px;
  text-align: left;
  background-color: #e0e0e0;
  font-weight: bold;
`;

// Create a styled table data cell
const TableData = styled.td`
  padding: 10px;
  border-bottom: 1px solid #e0e0e0;
`;

// Create a styled input element
const Input = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 10px;
`;

// Create a styled button
const Button = styled.button`
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 10px;

  &:hover {
    background-color: #0056b3;
  }
`;

// Create the CustomTable component
const CustomTable: React.FC<CustomTableProps> = ({ data }) => {
  const [inputText, setInputText] = useState('');

  // Handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  // Handle form submission
  const handleSubmit = () => {
    // Perform any necessary actions with the input text
    console.log('Submitted text:', inputText);
    setInputText('');
  };

  return (
    <TableContainer>
      <Table>
        <thead>
          <tr>
            <TableHeader>No</TableHeader>
            <TableHeader>Text</TableHeader>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.no}>
              <TableData>{row.no}</TableData>
              <TableData>{row.text}</TableData>
            </tr>
          ))}
        </tbody>
      </Table>
      <Input
        type="text"
        value={inputText}
        onChange={handleInputChange}
        placeholder="Enter text"
      />
      <Button onClick={handleSubmit}>Submit</Button>
      <Button>Cancel</Button>
    </TableContainer>
  );
};

// Example usage of the CustomTable component
const App: React.FC = () => {
  // Sample data for the table
  const tableData: RowData[] = [
    { no: 1, text: '(納付義務者)' },
    { no: 2, text: '(金融機関保管)' },
    { no: 3, text: '(保管)' },
  ];

  return (
    <div>
      <h1>Custom Table Example</h1>
      <CustomTable data={tableData} />
    </div>
  );
};

export default App;