import React from 'react';
import styled from '@emotion/styled';

interface FileSystemItem {
  name: string;
  lastModified: string;
  size: string;
}

interface FileSystemListProps {
  items: FileSystemItem[];
}

const FileSystemList: React.FC<FileSystemListProps> = ({ items }) => {
  return (
    <Container>
      <Title>公営企業会計システムのヘルプ</Title>
      <Table>
        <TableHeader>
          <TableHeaderCell>Name</TableHeaderCell>
          <TableHeaderCell>Last modified</TableHeaderCell>
          <TableHeaderCell>Size</TableHeaderCell>
        </TableHeader>
        <TableBody>
          {items.map((item, index) => (
            <TableRow key={index}>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.lastModified}</TableCell>
              <TableCell>{item.size}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
};

// Styled components
const Container = styled.div`
  background-color: #f0f0f0;
  padding: 20px;
  font-family: Arial, sans-serif;
`;

const Title = styled.h2`
  margin: 0 0 20px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHeader = styled.thead`
  background-color: #e0e0e0;
`;

const TableHeaderCell = styled.th`
  padding: 10px;
  text-align: left;
`;

const TableBody = styled.tbody``;

const TableRow = styled.tr`
  &:nth-of-type(odd) {
    background-color: #f8f8f8;
  }
`;

const TableCell = styled.td`
  padding: 10px;
`;

// Sample usage
const SampleFileSystemList: React.FC = () => {
  const sampleData: FileSystemItem[] = [
    {
      name: 'Parent Directory',
      lastModified: '-',
      size: '',
    },
    {
      name: 'MAD0060_支出決定入力（一般・負担有）.pdf',
      lastModified: '16-Jun-2021 10:32',
      size: '1.1M',
    },
  ];

  return <FileSystemList items={sampleData} />;
};

export default FileSystemList;