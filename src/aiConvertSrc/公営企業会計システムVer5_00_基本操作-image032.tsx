import React from 'react';
import styled from '@emotion/styled';

// Define types for the component props
type FileListProps = {
  files: {
    name: string;
    lastModified: string;
    size: string;
  }[];
};

// Define styles using CSS-in-JS
const Container = styled.div`
  margin: 20px;
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHeader = styled.th`
  background-color: #f2f2f2;
  padding: 8px;
  text-align: left;
  font-weight: bold;
`;

const TableData = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
`;

const TableRow = styled.tr`
  &:nth-of-type(even) {
    background-color: #f2f2f2;
  }
`;

// Define the FileList component
const FileList: React.FC<FileListProps> = ({ files }) => {
  return (
    <Container>
      <Title>公営企業会計システムのヘルプ</Title>
      <Table>
        <thead>
          <TableRow>
            <TableHeader>Name</TableHeader>
            <TableHeader>Last modified</TableHeader>
            <TableHeader>Size</TableHeader>
          </TableRow>
        </thead>
        <tbody>
          {files.map((file, index) => (
            <TableRow key={index}>
              <TableData>{file.name}</TableData>
              <TableData>{file.lastModified}</TableData>
              <TableData>{file.size}</TableData>
            </TableRow>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

// Sample data for demonstration
const sampleData = [
  { name: 'MAD0020/', lastModified: '07-Jul-2021 16:59', size: '-' },
  { name: 'MAD0040/', lastModified: '07-Jul-2021 16:59', size: '-' },
  { name: 'MAD0060/', lastModified: '07-Jul-2021 16:59', size: '-' },
  { name: 'MAD0170/', lastModified: '07-Jul-2021 16:59', size: '-' },
  { name: 'MAD0180/', lastModified: '07-Jul-2021 16:59', size: '-' },
  { name: 'MAD0190/', lastModified: '07-Jul-2021 16:59', size: '-' },
  { name: 'MAD2020/', lastModified: '07-Jul-2021 16:59', size: '-' },
];

// Usage example
const App: React.FC = () => {
  return (
    <div>
      <FileList files={sampleData} />
    </div>
  );
};

export default App;