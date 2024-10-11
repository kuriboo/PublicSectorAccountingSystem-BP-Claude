import React from 'react';
import styled from 'styled-components';

// マスタ設定の型定義
type MasterConfig = {
  autoSetJigyoDate: string;
  roudoCode: string;
}

// 自由設定項目の型定義
type FreeConfig = {
  name: string;
  code: string;
  checked: boolean;
}

// コンポーネントのプロパティの型定義
type Props = {
  title: string;
  masterConfig: MasterConfig;
  freeConfigs: FreeConfig[];
  onMasterConfigChange: (config: MasterConfig) => void;
  onFreeConfigChange: (index: number, checked: boolean) => void;
  onPrev: () => void;
  onNext: () => void;
  onSubmit: () => void;
  onCancel: () => void;
};

// スタイル定義
const Container = styled.div`
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const ConfigSection = styled.div`
  margin-bottom: 20px;
`;

const MasterConfigLabel = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const MasterConfigSelect = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FreeConfigLabel = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
`;

const FreeConfigCheckbox = styled.input`
  margin-right: 5px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

// メインコンポーネント
const ConfigScreen: React.FC<Props> = ({
  title,
  masterConfig,
  freeConfigs,
  onMasterConfigChange,
  onFreeConfigChange,
  onPrev,
  onNext,
  onSubmit,
  onCancel,
}) => {
  // マスタ設定の変更ハンドラ
  const handleMasterConfigChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    onMasterConfigChange({ ...masterConfig, [name]: value });
  };

  // 自由設定の変更ハンドラ
  const handleFreeConfigChange = (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
    onFreeConfigChange(index, e.target.checked);
  };

  return (
    <Container>
      <Title>{title}</Title>

      <ConfigSection>
        <MasterConfigLabel>
          自由設定項目コード
          <MasterConfigSelect
            name="autoSetJigyoDate"
            value={masterConfig.autoSetJigyoDate}
            onChange={handleMasterConfigChange}
          >
            <option value="">選択してください</option>
            <option value="001">001</option>
          </MasterConfigSelect>
        </MasterConfigLabel>

        <MasterConfigLabel>
          路線番号
          <MasterConfigSelect
            name="roudoCode"
            value={masterConfig.roudoCode}
            onChange={handleMasterConfigChange}
          >
            <option value="">選択してください</option>
            <option value="路線番号">路線番号</option>
            <option value="区間番号">区間番号</option>
            <option value="その以外">その以外</option>
          </MasterConfigSelect>
        </MasterConfigLabel>
      </ConfigSection>

      <ConfigSection>
        {freeConfigs.map((config, index) => (
          <FreeConfigLabel key={config.code}>
            <FreeConfigCheckbox
              type="checkbox"
              checked={config.checked}
              onChange={handleFreeConfigChange(index)}
            />
            {config.name}
          </FreeConfigLabel>
        ))}
      </ConfigSection>

      <ButtonContainer>
        <div>
          <Button onClick={onPrev}>前データ</Button>
          <Button onClick={onNext}>次データ</Button>
        </div>
        <div>
          <Button onClick={onSubmit}>OK</Button>
          <Button onClick={onCancel}>クリア</Button>
          <Button onClick={onCancel}>終了</Button>
        </div>
      </ButtonContainer>
    </Container>
  );
};

export default ConfigScreen;

// 使用例
const sampleMasterConfig: MasterConfig = {
  autoSetJigyoDate: '',
  roudoCode: '',
};

const sampleFreeConfigs: FreeConfig[] = [
  { name: '路線番号', code: 'routeNumber', checked: false },
  { name: '区間番号', code: 'sectionNumber', checked: false },
  { name: 'その以外', code: 'other', checked: false },
];

const UsageExample: React.FC = () => {
  const [masterConfig, setMasterConfig] = React.useState(sampleMasterConfig);
  const [freeConfigs, setFreeConfigs] = React.useState(sampleFreeConfigs);

  const handleMasterConfigChange = (config: MasterConfig) => {
    setMasterConfig(config);
  };

  const handleFreeConfigChange = (index: number, checked: boolean) => {
    const updatedConfigs = [...freeConfigs];
    updatedConfigs[index].checked = checked;
    setFreeConfigs(updatedConfigs);
  };

  const handlePrev = () => {
    console.log('前データボタンがクリックされました');
  };

  const handleNext = () => {
    console.log('次データボタンがクリックされました');
  };

  const handleSubmit = () => {
    console.log('OKボタンがクリックされました');
  };

  const handleCancel = () => {
    console.log('クリアまたは終了ボタンがクリックされました');
  };

  return (
    <ConfigScreen
      title="自由設定項目マスタ"
      masterConfig={masterConfig}
      freeConfigs={freeConfigs}
      onMasterConfigChange={handleMasterConfigChange}
      onFreeConfigChange={handleFreeConfigChange}
      onPrev={handlePrev}
      onNext={handleNext}
      onSubmit={handleSubmit}
      onCancel={handleCancel}
    />
  );
};