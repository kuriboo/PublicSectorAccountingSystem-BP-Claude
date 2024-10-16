import React from 'react';
import styled from 'styled-components';

type ResultProps = {
  fileName: string;
  fileSize: number;
  downloadUrl: string;
};

const Result: React.FC<ResultProps> = ({ fileName, fileSize, downloadUrl }) => {
  // ファイルサイズを適切な単位に変換
  const formatFileSize = (size: number): string => {
    const units = ['B', 'KB', 'MB', 'GB', 'TB'];
    let unitIndex = 0;
    while (size >= 1024 && unitIndex < units.length - 1) {
      size /= 1024;
      unitIndex++;
    }
    return `${size.toFixed(2)} ${units[unitIndex]}`;
  };

  // ファイル名が空の場合はデフォルトのファイル名を表示
  const displayFileName = fileName || 'Untitled';

  return (
    <Container>
      <Title>{displayFileName}</Title>
      <Details>
        <FileSize>{formatFileSize(fileSize)}</FileSize>
        <Link href={downloadUrl} download>
          ダウンロード
        </Link>
      </Details>
    </Container>
  );
};

// サンプルデータを使用した表示用コンポーネント
const SampleResult: React.FC = () => {
  const sampleData: ResultProps = {
    fileName: '091929result.csv',
    fileSize: 19216831,
    downloadUrl: 'http://example.com/download',
  };

  return <Result {...sampleData} />;
};

// スタイリング
const Container = styled.div`
  background-color: #f0f0f0;
  padding: 16px;
  border-radius: 4px;
`;

const Title = styled.h3`
  margin: 0;
  font-size: 18px;
  font-weight: bold;
`;

const Details = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 8px;
`;

const FileSize = styled.span`
  font-size: 14px;
  color: #666;
`;

const Link = styled.a`
  color: #007bff;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export default Result;