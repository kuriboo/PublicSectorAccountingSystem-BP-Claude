import React from 'react';
import styled from 'styled-components';

interface FileDownloadProps {
  title: string;
  fileUrl: string;
  fileSize?: string;
  format?: string;
}

const FileDownloadContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #f5f5f5;
  margin-bottom: 16px;
`;

const FileIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  background-color: #fff;
  border-radius: 50%;
  margin-right: 16px;
  font-size: 24px;
  color: #333;
`;

const FileInfo = styled.div`
  flex: 1;
`;

const FileTitle = styled.h3`
  margin: 0;
  font-size: 18px;
  font-weight: bold;
`;

const FileDetails = styled.div`
  font-size: 14px;
  color: #666;
`;

const DownloadButton = styled.a`
  display: inline-block;
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  text-decoration: none;
  border-radius: 4px;
  font-size: 14px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const FileDownload: React.FC<FileDownloadProps> = ({ title, fileUrl, fileSize, format }) => {
  return (
    <FileDownloadContainer>
      <FileIcon>📥</FileIcon>
      <FileInfo>
        <FileTitle>{title}</FileTitle>
        <FileDetails>
          {fileSize && <span>{fileSize} | </span>}
          {format && <span>{format}</span>}
        </FileDetails>
      </FileInfo>
      <DownloadButton href={fileUrl} download>
        ダウンロード
      </DownloadButton>
    </FileDownloadContainer>
  );
};

// Usage example
const App: React.FC = () => {
  return (
    <div>
      <h1>File Download Component Example</h1>
      <FileDownload
        title="Sample File"
        fileUrl="/path/to/file.pdf"
        fileSize="10MB"
        format="PDF"
      />
      <FileDownload
        title="Another File"
        fileUrl="/path/to/file.zip"
        format="ZIP"
      />
    </div>
  );
};

export default App;