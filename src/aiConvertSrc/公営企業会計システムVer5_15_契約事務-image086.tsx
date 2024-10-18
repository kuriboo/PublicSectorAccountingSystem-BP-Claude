// CsvUploadForm.tsx
import React, { useState } from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
`;

const Title = styled.h2`
  font-size: 18px;
  margin-bottom: 10px;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const RadioGroup = styled.div`
  display: flex;
  gap: 10px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHeader = styled.th`
  padding: 10px;
  text-align: center;
  border: 1px solid #ccc;
  background-color: #f0f0f0;
`;

const TableCell = styled.td`
  padding: 10px;
  border: 1px solid #ccc;
`;

const Button = styled.button`
  padding: 10px 20px;
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

type CsvUploadFormProps = {
  onUpload: (file: File, encoding: string) => void;
  onCancel: () => void;
};

const CsvUploadForm: React.FC<CsvUploadFormProps> = ({ onUpload, onCancel }) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [encoding, setEncoding] = useState<string>('shiftjis');

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    setSelectedFile(file);
  };

  const handleEncodingChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEncoding(event.target.value);
  };

  const handleUpload = () => {
    if (selectedFile) {
      onUpload(selectedFile, encoding);
    }
  };

  return (
    <Container>
      <Title>CSV速攻一時格納保守</Title>
      <FormGroup>
        <Label>連携区分</Label>
        <RadioGroup>
          <label>
            <input type="radio" name="linkType" value="乗車情報取り込み" defaultChecked />
            乗車情報取り込み
          </label>
          <label>
            <input type="radio" name="linkType" value="入札結果取り込み" />
            入札結果取り込み
          </label>
        </RadioGroup>
      </FormGroup>
      <FormGroup>
        <Label htmlFor="fileInput">一時格納テーブル</Label>
        <Input type="file" id="fileInput" onChange={handleFileChange} />
      </FormGroup>
      <Table>
        <thead>
          <tr>
            <TableHeader></TableHeader>
            <TableHeader>行追加</TableHeader>
            <TableHeader>行削除</TableHeader>
          </tr>
        </thead>
        <tbody>
          <tr>
            <TableCell colSpan={3}></TableCell>
          </tr>
        </tbody>
      </Table>
      <div>
        <Button onClick={handleUpload}>CSV出力</Button>
        <Button onClick={onCancel}>終了</Button>
      </div>
    </Container>
  );
};

// Example usage
const App: React.FC = () => {
  const handleUpload = (file: File, encoding: string) => {
    // Handle file upload logic here
    console.log('Uploaded file:', file);
    console.log('Encoding:', encoding);
  };

  const handleCancel = () => {
    // Handle cancel logic here
    console.log('Upload canceled');
  };

  return (
    <div>
      <h1>CSV Upload Example</h1>
      <CsvUploadForm onUpload={handleUpload} onCancel={handleCancel} />
    </div>
  );
};

export default App;