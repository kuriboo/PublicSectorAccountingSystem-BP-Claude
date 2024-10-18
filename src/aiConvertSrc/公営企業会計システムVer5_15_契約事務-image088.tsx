import React from 'react';
import styled from 'styled-components';

// 入札結果取込準備処理コンポーネントのプロパティ型定義
type PrepareImportBidResultProps = {
  csvFile: File | null; // CSVファイル
  onFileChange: (file: File | null) => void; // ファイル変更時のイベントハンドラ
  onExecute: () => void; // 実行ボタンクリック時のイベントハンドラ
  onCancel: () => void; // クリアボタンクリック時のイベントハンドラ
  onBack: () => void; // 終了ボタンクリック時のイベントハンドラ
};

// 入札結果取込準備処理コンポーネント
const PrepareImportBidResult: React.FC<PrepareImportBidResultProps> = ({
  csvFile,
  onFileChange,
  onExecute,
  onCancel,
  onBack,
}) => {
  return (
    <Container>
      <Title>入札結果取込準備処理</Title>
      <FileInputContainer>
        <FileInput
          type="file"
          accept=".csv"
          onChange={(e) => onFileChange(e.target.files?.[0] || null)}
        />
        <FileName>{csvFile?.name || 'CSVファイル'}</FileName>
      </FileInputContainer>
      <ButtonContainer>
        <Button onClick={onExecute} disabled={!csvFile}>
          OK
        </Button>
        <Button onClick={onCancel}>クリア</Button>
        <Button onClick={onBack}>終了</Button>
      </ButtonContainer>
    </Container>
  );
};

// スタイリング用のコンポーネント
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const Title = styled.h2`
  font-size: 18px;
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
  font-size: 14px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  padding: 8px 16px;
  margin: 0 10px;
  font-size: 14px;
  cursor: pointer;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

// サンプルデータ
const sampleData = {
  csvFile: null,
  onFileChange: (file: File | null) => {
    console.log('File changed:', file);
  },
  onExecute: () => {
    console.log('Execute button clicked');
  },
  onCancel: () => {
    console.log('Cancel button clicked');
  },
  onBack: () => {
    console.log('Back button clicked');
  },
};

// 使用例
const App: React.FC = () => {
  return <PrepareImportBidResult {...sampleData} />;
};

export default PrepareImportBidResult;