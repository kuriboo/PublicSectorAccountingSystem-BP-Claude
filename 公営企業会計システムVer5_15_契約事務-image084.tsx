import React from 'react';
import styled from 'styled-components';

interface CSVFileUploadProps {
  onFileSelect: (file: File) => void;
  onCancel: () => void;
  onSubmit: () => void;
}

const CSVFileUpload: React.FC<CSVFileUploadProps> = ({ onFileSelect, onCancel, onSubmit }) => {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      onFileSelect(file);
    }
  };

  return (
    <Container>
      <Title>業者情報取込準備処理</Title>
      <TableHeader>
        <HeaderCell>CSVファイル</HeaderCell>
        <HeaderCell>内容</HeaderCell>
      </TableHeader>
      <TableRow>
        <Cell>
          <FileInput type="file" accept=".csv" onChange={handleFileChange} />
        </Cell>
        <Cell />
      </TableRow>
      <ButtonContainer>
        <Button onClick={onSubmit}>OK</Button>
        <Button onClick={onCancel}>クリア</Button>
        <Button onClick={onCancel}>終了</Button>
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

const TableHeader = styled.div`
  display: flex;
  width: 100%;
  background-color: #f0f0f0;
  font-weight: bold;
`;

const HeaderCell = styled.div`
  flex: 1;
  padding: 10px;
  text-align: center;
`;

const TableRow = styled.div`
  display: flex;
  width: 100%;
`;

const Cell = styled.div`
  flex: 1;
  padding: 10px;
  text-align: center;
`;

const FileInput = styled.input`
  width: 100%;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`;

const Button = styled.button`
  margin-left: 10px;
  padding: 5px 10px;
`;

// Usage example
const ExampleUsage: React.FC = () => {
  const handleFileSelect = (file: File) => {
    console.log('Selected file:', file);
  };

  const handleCancel = () => {
    console.log('Cancelled');
  };

  const handleSubmit = () => {
    console.log('Submitted');
  };

  return (
    <CSVFileUpload
      onFileSelect={handleFileSelect}
      onCancel={handleCancel}
      onSubmit={handleSubmit}
    />
  );
};

export default CSVFileUpload;