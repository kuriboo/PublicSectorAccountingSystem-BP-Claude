import React, { useState } from 'react';
import styled from 'styled-components';

type PrintModeOption = 'プレビュー' | 'PDF';

interface PrintSettingsProps {
  onPrint: (copies: number, printMode: PrintModeOption) => void;
}

const PrintSettings: React.FC<PrintSettingsProps> = ({ onPrint }) => {
  const [printMode, setPrintMode] = useState<PrintModeOption>('プレビュー');
  const [copies, setCopies] = useState(1);

  const handlePrintModeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPrintMode(event.target.value as PrintModeOption);
  };

  const handleCopiesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value, 10);
    setCopies(isNaN(value) ? 1 : value);
  };

  const handlePrint = () => {
    onPrint(copies, printMode);
  };

  return (
    <Container>
      <Title>印刷機能選択</Title>
      <InputGroup>
        <input
          type="radio"
          id="preview"
          value="プレビュー"
          checked={printMode === 'プレビュー'}
          onChange={handlePrintModeChange}
        />
        <label htmlFor="preview">プレビュー</label>
      </InputGroup>
      <InputGroup>
        <input
          type="radio"
          id="pdf"
          value="PDF"
          checked={printMode === 'PDF'}
          onChange={handlePrintModeChange}
        />
        <label htmlFor="pdf">PDF</label>
      </InputGroup>
      <InputGroup>
        <label htmlFor="copies">部数</label>
        <input
          type="number"
          id="copies"
          min="1"
          value={copies}
          onChange={handleCopiesChange}
        />
      </InputGroup>
      <ButtonGroup>
        <Button type="button" onClick={handlePrint}>
          OK
        </Button>
        <Button type="button">キャンセル</Button>
      </ButtonGroup>
    </Container>
  );
};

// サンプルデータを用いた使用例
const App: React.FC = () => {
  const handlePrint = (copies: number, printMode: PrintModeOption) => {
    console.log(`印刷設定: 部数=${copies}, モード=${printMode}`);
    // 実際の印刷処理を実装する
  };

  return <PrintSettings onPrint={handlePrint} />;
};

// スタイリング
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-family: sans-serif;
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const InputGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 5px 10px;
  font-size: 14px;
  border-radius: 4px;
  cursor: pointer;
`;

export default PrintSettings;