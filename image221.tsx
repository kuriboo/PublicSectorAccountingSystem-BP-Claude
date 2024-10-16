import React from 'react';
import styled from '@emotion/styled';

type PrintSetting = {
  doubleSided: boolean;
  collectPrint: boolean;
  repeat: boolean;
  nUp: boolean;
  reverseOrder: boolean;
  separateByBlankPage: boolean;
  startDate?: Date;
  endDate?: Date;
  expirationDate?: Date;
};

type PrintSettingProps = {
  settings: PrintSetting;
  onSettingsChange: (settings: PrintSetting) => void;
};

const Container = styled.div`
  padding: 16px;
  border: 1px solid #ccc;
`;

const Title = styled.div`
  font-weight: bold;
  margin-bottom: 8px;
`;

const CheckboxList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const CheckboxItem = styled.label`
  display: flex;
  align-items: center;
  gap: 4px;

  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

const DateInputs = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 12px;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const DateInput = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;

  > input {
    padding: 4px;
  }
`;

const Buttons = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 16px;
  gap: 8px;
`;

const PrintSettingComponent: React.FC<PrintSettingProps> = ({ settings, onSettingsChange }) => {
  const handleCheckboxChange = (key: keyof PrintSetting) => {
    onSettingsChange({ ...settings, [key]: !settings[key] });
  };

  const handleDateChange = (key: keyof PrintSetting, value: Date | undefined) => {
    onSettingsChange({ ...settings, [key]: value });
  };

  return (
    <Container>
      <Title>印刷対象集計名</Title>
      <CheckboxList>
        <CheckboxItem>
          <input
            type="checkbox"
            checked={settings.doubleSided}
            onChange={() => handleCheckboxChange('doubleSided')}
          />
          <span>両面印刷</span>
        </CheckboxItem>
        {/* 他のチェックボックスの実装は省略 */}
      </CheckboxList>
      <DateInputs>
        <DateInput>
          <span>開始日付</span>
          <input type="date" />
        </DateInput>
        {/* 他の日付入力の実装は省略 */}
      </DateInputs>
      <Buttons>
        <button>OK</button>
        <button>クリア</button>
        <button>キャンセル</button>
      </Buttons>
    </Container>
  );
};

// サンプルデータを使用した表示用コンポーネント
const SamplePrintSettingComponent: React.FC = () => {
  const [settings, setSettings] = React.useState<PrintSetting>({
    doubleSided: true,
    collectPrint: false,
    repeat: true,
    nUp: true,
    reverseOrder: true,
    separateByBlankPage: false,
  });

  return (
    <PrintSettingComponent
      settings={settings}
      onSettingsChange={(newSettings) => setSettings(newSettings)}
    />
  );
};

export default SamplePrintSettingComponent;