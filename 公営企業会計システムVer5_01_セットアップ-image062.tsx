import React, { useState } from 'react';
import styled from 'styled-components';

interface FileUploadProps {
  onFileSelect: (file: File) => void;
}

const FileUpload: React.FC<FileUploadProps> = ({ onFileSelect }) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      onFileSelect(file);
    }
  };

  return (
    <Container>
      <Title>試算表ファイルリスト作成</Title>
      <FileInputContainer>
        <FileInput type="file" accept=".csv" onChange={handleFileChange} />
        <FileName>{selectedFile ? selectedFile.name : '集計番号'}</FileName>
      </FileInputContainer>
      <ButtonContainer>
        <Button>OK</Button>
        <Button>クリア</Button>
        <Button>終了</Button>
      </ButtonContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const Title = styled.h2`
  margin-bottom: 20px;
`;

const FileInputContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const FileInput = styled.input`
  margin-right: 10px;
`;

const FileName = styled.span`
  font-size: 16px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  margin: 0 10px;
  padding: 8px 16px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  background-color: #f0f0f0;
  cursor: pointer;

  &:hover {
    background-color: #e0e0e0;
  }
`;

// Usage example
const App: React.FC = () => {
  const handleFileSelect = (file: File) => {
    console.log('Selected file:', file);
    // Perform further actions with the selected file
  };

  return (
    <div>
      <FileUpload onFileSelect={handleFileSelect} />
    </div>
  );
};

export default App;