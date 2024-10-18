import React from 'react';
import styled from 'styled-components';

interface FileUploadProps {
  onSubmit: (file: File) => void;
}

const FileUpload: React.FC<FileUploadProps> = ({ onSubmit }) => {
  const [selectedFile, setSelectedFile] = React.useState<File | null>(null);

  // ファイル選択ダイアログを開く
  const handleOpenFileDialog = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.csv'; // CSV ファイルのみ許可
    input.onchange = (event) => {
      const file = (event.target as HTMLInputElement).files?.[0];
      if (file) {
        setSelectedFile(file);
      }
    };
    input.click();
  };

  // フォームの送信を処理
  const handleSubmit = () => {
    if (!selectedFile) return;
    onSubmit(selectedFile);
  };

  return (
    <Container>
      <Label>{selectedFile ? selectedFile.name : '小道寺衆収益'}</Label>
      <ActionButton type="button" onClick={handleOpenFileDialog}>
        予算科目
      </ActionButton>
      <ActionButton type="button" onClick={handleSubmit} disabled={!selectedFile}>
        OK
      </ActionButton>
      <CancelButton type="button">クリア</CancelButton>
    </Container>
  );
};

// スタイリング
const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
  background-color: #f0f0f0;
  border-radius: 5px;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const Label = styled.span`
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ActionButton = styled.button`
  padding: 5px 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 3px;
  cursor: pointer;

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;

const CancelButton = styled(ActionButton)`
  background-color: #6c757d;
`;

// 使用例
const App: React.FC = () => {
  const handleFileUpload = (file: File) => {
    console.log('Uploaded file:', file);
    // アップロードされたファイルの処理を行う
  };

  return (
    <div>
      <h1>ファイルアップロードコンポーネント</h1>
      <FileUpload onSubmit={handleFileUpload} />
    </div>
  );
};

export default App;