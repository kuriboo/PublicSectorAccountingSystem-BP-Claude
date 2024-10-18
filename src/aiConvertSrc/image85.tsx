import React, { useState } from 'react';
import styled from '@emotion/styled';

type CsvUploadProps = {
  onFileUpload: (file: File) => void;
};

const CsvUpload: React.FC<CsvUploadProps> = ({ onFileUpload }) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleUpload = () => {
    if (selectedFile) {
      onFileUpload(selectedFile);
    }
  };

  return (
    <Container>
      <Title>営業情報取込準備処理</Title>
      <Table>
        <tbody>
          <TableRow>
            <TableHeader>CSVファイル</TableHeader>
            <TableData>
              <FileInput type="file" onChange={handleFileChange} />
            </TableData>
          </TableRow>
        </tbody>
      </Table>
      <ButtonContainer>
        <Button onClick={handleUpload} disabled={!selectedFile}>
          行確定
        </Button>
        <CancelButton>キャンセル</CancelButton>
        <TerminateButton>終了</TerminateButton>
      </ButtonContainer>
    </Container>
  );
};

const Container = styled.div`
  background-color: #f0f0f0;
  padding: 16px;
`;

const Title = styled.h2`
  font-size: 18px;
  margin-bottom: 16px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 16px;
`;

const TableRow = styled.tr``;

const TableHeader = styled.th`
  background-color: #d0d0d0;
  padding: 8px;
  text-align: left;
`;

const TableData = styled.td`
  padding: 8px;
`;

const FileInput = styled.input`
  width: 100%;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 8px 16px;
  margin-left: 8px;
  cursor: pointer;

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const CancelButton = styled(Button)`
  background-color: #dc3545;
`;

const TerminateButton = styled(Button)`
  background-color: #6c757d;
`;

// Usage example
const App: React.FC = () => {
  const handleFileUpload = (file: File) => {
    // Handle the uploaded file here
    console.log('Uploaded file:', file);
  };

  return (
    <div>
      <CsvUpload onFileUpload={handleFileUpload} />
    </div>
  );
};

export default App;