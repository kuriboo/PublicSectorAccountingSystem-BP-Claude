以下のコードは、画像を元にNext.js + TypeScriptでファイル選択ダイアログのコンポーネントを実装したものです。

import React, { ChangeEvent, useState } from 'react';
import styled from 'styled-components';

type FileSelectProps = {
  onFileSelect: (file: File | null) => void;
  acceptedFileTypes?: string;
};

const FileSelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
`;

const FileInput = styled.input`
  display: none;
`;

const FileSelectButton = styled.button`
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #0056b3;
  }
`;

const SelectedFile = styled.div`
  font-size: 14px;
`;

const FileSelect: React.FC<FileSelectProps> = ({ onFileSelect, acceptedFileTypes = '*' }) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    setSelectedFile(file);
    onFileSelect(file);
  };

  return (
    <FileSelectWrapper>
      <FileSelectButton onClick={() => document.getElementById('fileInput')?.click()}>
        ファイル選択
      </FileSelectButton>
      <FileInput
        id="fileInput"
        type="file"
        accept={acceptedFileTypes}
        onChange={handleFileChange}
      />
      {selectedFile && <SelectedFile>選択されたファイル: {selectedFile.name}</SelectedFile>}
    </FileSelectWrapper>
  );
};

// サンプル用のコンポーネント
const App: React.FC = () => {
  const handleFileSelect = (file: File | null) => {
    console.log('Selected file:', file);
  };

  return (
    <div>
      <h1>ファイル選択サンプル</h1>
      <FileSelect onFileSelect={handleFileSelect} acceptedFileTypes=".txt" />
    </div>
  );
};

export default App;

ポイント:
- FileSelectPropsでonFileSelectとacceptedFileTypesのプロパティを定義
- styled-componentsを使用してCSSを組み込み、レスポンシブデザインを考慮
- FileInputを非表示にし、FileSelectButtonでクリックイベントを捕捉
- handleFileChange関数で選択されたファイルを取得し、onFileSelectコールバックに渡す
- selectedFileがある場合は選択されたファイル名を表示
- サンプル用のAppコンポーネントでFileSelectを使用し、onFileSelectとacceptedFileTypesを指定