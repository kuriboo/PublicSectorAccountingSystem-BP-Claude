import React from 'react';
import styled from 'styled-components';

// Define types for component props
type SystemSettingsProps = {
  businessMessageFolder?: string;
  receiptFolder?: string;
  invoiceFolder?: string;
  estimateFolder?: string;
  simulationInputFilename?: string;
  simulationOutputFilename?: string;
  simulationTempFolder?: string;
  watermarkImageFolder?: string;
  registrationDataFolder?: string;
  tempFolder?: string;
  onFolderChange: (key: string, value: string) => void;
};

// Define styled components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  box-sizing: border-box;

  @media (max-width: 600px) {
    padding: 10px;
  }
`;

const Title = styled.h2`
  margin-bottom: 20px;
`;

const SettingsGroup = styled.div`
  margin-bottom: 30px;
`;

const SettingsRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const SettingsLabel = styled.label`
  flex: 1;
  margin-right: 10px;
`;

const SettingsInput = styled.input`
  flex: 2;
  padding: 5px;
`;

const SystemSettings: React.FC<SystemSettingsProps> = ({
  businessMessageFolder = '',
  receiptFolder = '',
  invoiceFolder = '',
  estimateFolder = '',
  simulationInputFilename = '',
  simulationOutputFilename = '',
  simulationTempFolder = '',
  watermarkImageFolder = '',
  registrationDataFolder = '',
  tempFolder = '',
  onFolderChange,
}) => {
  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    onFolderChange(name, value);
  };

  return (
    <Container>
      <Title>その他</Title>
      <SettingsGroup>
        <SettingsRow>
          <SettingsLabel>業務メッセージ</SettingsLabel>
          <SettingsInput
            type="text"
            name="businessMessageFolder"
            value={businessMessageFolder}
            onChange={handleChange}
          />
        </SettingsRow>
        <SettingsRow>
          <SettingsLabel>領収書</SettingsLabel>
          <SettingsInput
            type="text"
            name="receiptFolder"
            value={receiptFolder}
            onChange={handleChange}
          />
        </SettingsRow>
        <SettingsRow>
          <SettingsLabel>請求</SettingsLabel>
          <SettingsInput
            type="text"
            name="invoiceFolder"
            value={invoiceFolder}
            onChange={handleChange}
          />
        </SettingsRow>
        <SettingsRow>
          <SettingsLabel>見積</SettingsLabel>
          <SettingsInput
            type="text"
            name="estimateFolder"
            value={estimateFolder}
            onChange={handleChange}
          />
        </SettingsRow>
      </SettingsGroup>
      <SettingsGroup>
        <SettingsRow>
          <SettingsLabel>シミュレーション　パス</SettingsLabel>
          <SettingsInput
            type="text"
            name="simulationInputFilename"
            value={simulationInputFilename}
            onChange={handleChange}
          />
        </SettingsRow>
        <SettingsRow>
          <SettingsLabel>料金改定　調定ファイル名</SettingsLabel>
          <SettingsInput
            type="text"
            name="simulationOutputFilename"
            value={simulationOutputFilename}
            onChange={handleChange}
          />
        </SettingsRow>
        <SettingsRow>
          <SettingsLabel>料金改定　集計分類</SettingsLabel>
          <SettingsInput
            type="text"
            name="simulationTempFolder"
            value={simulationTempFolder}
            onChange={handleChange}
          />
        </SettingsRow>
      </SettingsGroup>  
      <SettingsGroup>
        <SettingsRow>
          <SettingsLabel>年次更新 不納欠損パス</SettingsLabel>
          <SettingsInput
            type="text"
            name="watermarkImageFolder"
            value={watermarkImageFolder}
            onChange={handleChange}
          />
        </SettingsRow>
        <SettingsRow>
          <SettingsLabel>会計連携データパス</SettingsLabel>
          <SettingsInput
            type="text"
            name="registrationDataFolder"
            value={registrationDataFolder}
            onChange={handleChange}
          />
        </SettingsRow>
        <SettingsRow>
          <SettingsLabel>地区種別</SettingsLabel>
          <SettingsInput
            type="text"
            name="tempFolder"
            value={tempFolder}
            onChange={handleChange}
          />
        </SettingsRow>
      </SettingsGroup>
    </Container>
  );
};

export default SystemSettings;

// Example usage
const App: React.FC = () => {
  const handleFolderChange = (key: string, value: string) => {
    console.log(`Folder settings changed: ${key} = ${value}`);
    // Implement logic to update folder settings
  };

  return (
    <div>
      <h1>System Settings Example</h1>
      <SystemSettings onFolderChange={handleFolderChange} />
    </div>
  );
};