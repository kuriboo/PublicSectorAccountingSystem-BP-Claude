import React from 'react';
import styled from 'styled-components';

type FileListProps = {
  files: string[];
  onFileClick: (file: string) => void;
};

const FileList: React.FC<FileListProps> = ({ files, onFileClick }) => {
  return (
    <Container>
      <Title>給与支払_CSVの検索</Title>
      <FileListContainer>
        {files.map((file) => (
          <FileItem key={file} onClick={() => onFileClick(file)}>
            {file}
          </FileItem>
        ))}
      </FileListContainer>
      <Footer>
        <CancelButton>閉じる</CancelButton>
        <OpenButton>開く(O)</OpenButton>
      </Footer>
    </Container>
  );
};

const Container = styled.div`
  width: 500px;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  font-family: Arial, sans-serif;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

const Title = styled.div`
  padding: 8px;
  background-color: #0078d7;
  color: white;
  font-weight: bold;
`;

const FileListContainer = styled.div`
  height: 200px;
  overflow-y: auto;
  padding: 8px;
`;

const FileItem = styled.div`
  padding: 4px;
  cursor: pointer;

  &:hover {
    background-color: #e0e0e0;
  }
`;

const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 8px;
  border-top: 1px solid #ccc;
`;

const Button = styled.button`
  margin-left: 8px;
  padding: 4px 8px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const CancelButton = styled(Button)`
  background-color: #ccc;
  color: black;
`;

const OpenButton = styled(Button)`
  background-color: #0078d7;
  color: white;
`;

// Usage example
const App: React.FC = () => {
  const files = ['shikyuukoujo.csv', 'file2.csv', 'file3.csv'];

  const handleFileClick = (file: string) => {
    console.log(`Clicked on file: ${file}`);
    // Handle file click logic here
  };

  return (
    <div>
      <h1>File List Example</h1>
      <FileList files={files} onFileClick={handleFileClick} />
    </div>
  );
};

export default App;