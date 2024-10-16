import React from 'react';
import styled from 'styled-components';

// 定義可能な共通設定のタイプ
type CommonSettingType = {
  label: string;
  value: string;
};

// 定義可能なシステム設定のタイプ
type SystemSettingType = {
  label: string;
  value: string;
  onClick: () => void;
};

// コンポーネントのプロパティのタイプ
type SystemSettingsProps = {
  commonSettings: CommonSettingType[];
  systemSettings: SystemSettingType[];
};

// スタイル付きのセクションコンポーネント
const Section = styled.div`
  margin-bottom: 20px;
`;

// スタイル付きのラベルコンポーネント 
const Label = styled.div`
  font-weight: bold;
  margin-bottom: 5px;
`;

// スタイル付きの設定項目コンポーネント
const Setting = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
`;

// スタイル付きの設定値コンポーネント
const Value = styled.div`
  margin-right: 10px;
`;

// スタイル付きのボタンコンポーネント
const Button = styled.button`
  padding: 5px 10px;
  border: none;
  background-color: #f0f0f0;
  cursor: pointer;

  &:hover {
    background-color: #e0e0e0;
  }
`;

/**
 * システム設定コンポーネント
 */
const SystemSettings: React.FC<SystemSettingsProps> = ({ commonSettings, systemSettings }) => {
  return (
    <div>
      <Section>
        <Label>共通設定</Label>
        {commonSettings.map((setting, index) => (
          <Setting key={index}>
            <Value>{setting.label}</Value>
            <div>{setting.value}</div>
          </Setting>
        ))}
      </Section>

      <Section>
        <Label>システム・リソース</Label>
        {systemSettings.map((setting, index) => (
          <Setting key={index}>
            <Value>{setting.label}</Value>
            <div>{setting.value}</div>
            <Button onClick={setting.onClick}>参照</Button>
          </Setting>
        ))}
      </Section>
    </div>
  );
};

// サンプルデータ
const sampleCommonSettings: CommonSettingType[] = [
  { label: '業務コード', value: 'RY001' },
  { label: '得意先コード', value: '1111' },
  { label: '仕入先コード', value: '2222' },
];

const sampleSystemSettings: SystemSettingType[] = [
  { label: 'データ格納フォルダ', value: 'C:¥Ryosei¥Ryohin', onClick: () => console.log('Open data folder') },
  { label: 'シミュレーションパス', value: 'C:¥Ryosei¥RyohinSystem', onClick: () => console.log('Open simulation path') },
  { label: '会計連携フォルダ', value: 'C:¥Ryosei¥Ryohin¥System', onClick: () => console.log('Open accounting link folder') },
];

/**
 * サンプル表示用のコンポーネント
 */
const App: React.FC = () => {
  return (
    <div>
      <h1>システム設定</h1>
      <SystemSettings commonSettings={sampleCommonSettings} systemSettings={sampleSystemSettings} />
    </div>
  );
};

export default App;