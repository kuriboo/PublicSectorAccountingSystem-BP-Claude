import React from 'react';
import styled from '@emotion/styled';

interface PrintSettingsProps {
  showCommandLines?: boolean;
  useBoldFont?: boolean;
  useVerticalPrint?: boolean;
  useAdjustSize?: boolean;
}

const PrintSettingsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #f5f5f5;
  width: 100%;
  max-width: 400px;
  
  @media (max-width: 480px) {
    padding: 12px;
  }
`;

const SettingItem = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  font-size: 14px;
  
  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

const SettingCheckbox = styled.input`
  margin-right: 8px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-top: 16px;
`;

const Button = styled.button`
  padding: 8px 16px;
  margin-left: 8px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: #fff;
  font-size: 14px;
  cursor: pointer;
  
  &:hover {
    background-color: #0056b3;
  }
  
  @media (max-width: 480px) {
    font-size: 12px;
    padding: 6px 12px;
  }
`;

const PrintSettings: React.FC<PrintSettingsProps> = ({
  showCommandLines = false,
  useBoldFont = false,
  useVerticalPrint = false,
  useAdjustSize = false,
}) => {
  return (
    <PrintSettingsContainer>
      <SettingItem>
        <SettingCheckbox type="checkbox" checked={showCommandLines} readOnly />
        調書兼命令書（その他 ES）
      </SettingItem>
      <SettingItem>
        <SettingCheckbox type="checkbox" checked={useBoldFont} readOnly />
        太字
      </SettingItem>
      <SettingItem>
        <SettingCheckbox type="checkbox" checked={useVerticalPrint} readOnly />
        横書き一覧
      </SettingItem>
      <SettingItem>
        <SettingCheckbox type="checkbox" checked={useAdjustSize} readOnly />
        調整同書
      </SettingItem>
      <ButtonContainer>
        <Button>OK</Button>
        <Button>クリア</Button>
        <Button>キャンセル</Button>
      </ButtonContainer>
    </PrintSettingsContainer>
  );
};

// Usage example
const App: React.FC = () => {
  return (
    <div>
      <h1>Print Settings Example</h1>
      <PrintSettings
        showCommandLines={true}
        useBoldFont={false}
        useVerticalPrint={true}
        useAdjustSize={true}
      />
    </div>
  );
};

export default App;