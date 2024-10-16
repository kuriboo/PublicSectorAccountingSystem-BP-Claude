import React from 'react';
import styled from '@emotion/styled';

// PDFファイルの型定義
type PdfFile = {
  name: string;
  path: string;
};

// PDFエクスプローラーのプロパティ型定義
type PdfExplorerProps = {
  files: PdfFile[];
};

// PDFアイコンコンポーネント
const PdfIcon: React.FC<{ name: string }> = ({ name }) => (
  <Icon>
    <img src={`/${name}`} alt={name} />
    <span>{name}</span>
  </Icon>
);

// PDFエクスプローラーコンポーネント
const PdfExplorer: React.FC<PdfExplorerProps> = ({ files }) => {
  return (
    <Container>
      {files.map((file, index) => (
        <PdfIcon key={index} name={file.name} />
      ))}
    </Container>
  );
};

// スタイリング
const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  grid-gap: 10px;
  padding: 20px;
`;

const Icon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  cursor: pointer;

  img {
    width: 50px;
    height: 50px;
    object-fit: contain;
    margin-bottom: 5px;
  }

  span {
    font-size: 12px;
    text-align: center;
    word-break: break-all;
  }
`;

// サンプルデータ
const sampleFiles: PdfFile[] = [
  { name: 'ファイル_00基本情報.pdf', path: '/path/to/file1.pdf' },
  { name: 'ファイル_01注意事項.pdf', path: '/path/to/file2.pdf' },
  { name: 'ファイル_02データ.pdf', path: '/path/to/file3.pdf' },
  { name: 'ファイル_06資料01.pdf', path: '/path/to/file4.pdf' },
  { name: 'ファイル_07資料02.pdf', path: '/path/to/file5.pdf' },
  { name: 'ファイル_08資料03.pdf', path: '/path/to/file6.pdf' },
];

// 使用例
const App: React.FC = () => {
  return (
    <div>
      <h1>PDFエクスプローラー</h1>
      <PdfExplorer files={sampleFiles} />
    </div>
  );
};

export default App;