import React from 'react';

import { useState } from 'react';
import styled from '@emotion/styled';

type PrintSetting = 'プレビュー' | 'PDF' | 'CSV';

type Props = {
  onPrint: (printSetting: PrintSetting) => void;
  onCancel: () => void;
};

const PrintSettingDialog: React.FC<Props> = ({ onPrint, onCancel }) => {
  const [selectedPrintSetting, setSelectedPrintSetting] = useState<PrintSetting>('プレビュー');

  const handlePrintSettingChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedPrintSetting(event.target.value as PrintSetting);
  };

  const handlePrintClick = () => {
    onPrint(selectedPrintSetting);
  };

  return (
    <Container>
      <Title>印刷先選択</Title>
      <Select value={selectedPrintSetting} onChange={handlePrintSettingChange}>
        <option value="プレビュー">プレビュー</option>
        <option value="PDF">PDF</option>
        <option value="CSV">CSV</option>
      </Select>
      <ButtonContainer>
        <Button onClick={handlePrintClick}>OK</Button>
        <Button onClick={onCancel}>キャンセル</Button>
      </ButtonContainer>
    </Container>
  );
};

// Usage example
const App: React.FC = () => {
  const handlePrint = (printSetting: PrintSetting) => {
    console.log('Selected print setting:', printSetting);
    // Perform printing logic based on the selected print setting
  };

  const handleCancel = () => {
    console.log('Print canceled');
    // Handle cancel action
  };

  return (
    <div>
      <h1>Print Setting Example</h1>
      <PrintSettingDialog onPrint={handlePrint} onCancel={handleCancel} />
    </div>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #f5f5f5;
`;

const Title = styled.h2`
  margin-bottom: 16px;
`;

const Select = styled.select`
  margin-bottom: 16px;
  padding: 8px;
  font-size: 16px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  margin: 0 8px;
  padding: 8px 16px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export default PrintSettingDialog;