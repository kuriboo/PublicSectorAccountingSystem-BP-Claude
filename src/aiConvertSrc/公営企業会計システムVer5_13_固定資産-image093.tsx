// FileList.tsx
import React from 'react';
import styled from '@emotion/styled';

type File = {
  name: string;
  extension: string;
};

type FileListProps = {
  files: File[];
};

const FileListContainer = styled.div`
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  padding: 10px;
  height: 200px;
  overflow-y: auto;
`;

const FileItem = styled.div`
  padding: 5px;
  border-bottom: 1px solid #ccc;

  &:last-child {
    border-bottom: none;
  }
`;

const FileIcon = styled.span`
  display: inline-block;
  width: 20px;
  height: 20px;
  margin-right: 5px;
  background-repeat: no-repeat;
  background-size: contain;
  vertical-align: middle;
`;

const getFileIcon = (extension: string) => {
  switch (extension) {
    case 'txt':
      return '/path/to/txt-icon.png';
    case 'docx':
      return '/path/to/docx-icon.png';
    case 'pdf':
      return '/path/to/pdf-icon.png';
    case 'xlsx':
      return '/path/to/xlsx-icon.png';
    default:
      return '/path/to/default-icon.png';
  }
};

const FileList: React.FC<FileListProps> = ({ files }) => {
  return (
    <FileListContainer>
      {files.map((file, index) => (
        <FileItem key={index}>
          <FileIcon
            style={{ backgroundImage: `url(${getFileIcon(file.extension)})` }}
          />
          {file.name}
        </FileItem>
      ))}
    </FileListContainer>
  );
};

export default FileList;

// Usage example
const sampleFiles: File[] = [
  { name: '豪徳の丘配水管整備概要.txt', extension: 'txt' },
  { name: '豪徳の丘配水管敷設工事設計.docx', extension: 'docx' },
  { name: '豪徳の丘配水管整備工事設計図面.pdf', extension: 'pdf' },
  { name: '豪徳の丘水需給一覧表_水道総括.xlsx', extension: 'xlsx' },
];

const App: React.FC = () => {
  return (
    <div>
      <h1>File List</h1>
      <FileList files={sampleFiles} />
    </div>
  );
};