import React from 'react';
import styled from 'styled-components';

// Define types for component props
type FileListProps = {
  files: string[];
};

type FileInfoProps = {
  info: {
    [key: string]: string;
  };
};

// Styled components
const Container = styled.div`
  display: flex;
  height: 100vh;
  background-color: #1e1e1e;
  color: #fff;
`;

const Sidebar = styled.div`
  width: 200px;
  padding: 20px;
  background-color: #252526;
`;

const FileList = styled.ul`
  list-style: none;
  padding: 0;
`;

const FileItem = styled.li`
  margin-bottom: 10px;
  cursor: pointer;
`;

const MainContent = styled.div`
  flex: 1;
  padding: 20px;
`;

const FileInfo = styled.div`
  margin-bottom: 20px;
`;

const InfoItem = styled.div`
  margin-bottom: 5px;
`;

// FileList component
const FileListComponent: React.FC<FileListProps> = ({ files }) => {
  return (
    <FileList>
      {files.map((file, index) => (
        <FileItem key={index}>{file}</FileItem>
      ))}
    </FileList>
  );
};

// FileInfo component 
const FileInfoComponent: React.FC<FileInfoProps> = ({ info }) => {
  return (
    <FileInfo>
      {Object.entries(info).map(([key, value]) => (
        <InfoItem key={key}>
          {key}: {value}
        </InfoItem>
      ))}
    </FileInfo>
  );
};

// Main component
const App: React.FC = () => {
  // Sample data
  const files = ['file1.txt', 'file2.jpg', 'file3.pdf'];
  const fileInfo = {
    'File Name': 'sample.txt',
    Size: '1.5MB',
    'Last Modified': '2023-06-08',
  };

  return (
    <Container>
      <Sidebar>
        <h3>Files</h3>
        <FileListComponent files={files} />
      </Sidebar>
      <MainContent>
        <h2>File Information</h2>
        <FileInfoComponent info={fileInfo} />
        {/* Add other components */}
      </MainContent>
    </Container>
  );
};

export default App;