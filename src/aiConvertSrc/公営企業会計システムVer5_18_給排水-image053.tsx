import React from 'react';
import styled from 'styled-components';

// プロパティの型定義
type Props = {
  onOk?: () => void;
  onCancel?: () => void;
  copies?: number;
  fileType?: 'PDF' | 'プレビュー';
};

// スタイル定義
const Container = styled.div`
  background-color: #f0f0f0;
  padding: 16px;
  border-radius: 4px;
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 16px;
`;

const RadioGroup = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 16px;
`;

const NumberInput = styled.input`
  width: 60px;
  padding: 4px;
  margin-bottom: 16px;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
`;

const Button = styled.button`
  padding: 8px 16px;
  border-radius: 4px;
  border: none;
  background-color: #007bff;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

// コンポーネントの実装
const PrintSettings: React.FC<Props> = ({
  onOk,
  onCancel,
  copies = 1,
  fileType = 'PDF',
}) => {
  const [selectedFileType, setSelectedFileType] = React.useState(fileType);
  const [numCopies, setNumCopies] = React.useState(copies);

  // OKボタンクリック時の処理
  const handleOk = () => {
    onOk?.();
  };

  // キャンセルボタンクリック時の処理
  const handleCancel = () => {
    onCancel?.();
  };

  return (
    <Container>
      <Title>印刷機能選択</Title>
      <RadioGroup>
        <label>
          <input
            type="radio"
            checked={selectedFileType === 'PDF'}
            onChange={() => setSelectedFileType('PDF')}
          />
          PDF
        </label>
        <label>
          <input
            type="radio"
            checked={selectedFileType === 'プレビュー'}
            onChange={() => setSelectedFileType('プレビュー')}
          />
          プレビュー
        </label>
      </RadioGroup>
      <label>
        部数
        <NumberInput
          type="number"
          value={numCopies}
          min={1}
          onChange={(e) => setNumCopies(Number(e.target.value))}
        />
      </label>
      <ButtonGroup>
        <Button onClick={handleOk}>OK</Button>
        <Button onClick={handleCancel}>キャンセル</Button>
      </ButtonGroup>
    </Container>
  );
};

export default PrintSettings;

// 使用例
const App: React.FC = () => {
  return (
    <div>
      <h1>印刷設定</h1>
      <PrintSettings
        onOk={() => console.log('印刷を実行')}
        onCancel={() => console.log('印刷をキャンセル')}
        copies={2}
        fileType="プレビュー"
      />
    </div>
  );
};