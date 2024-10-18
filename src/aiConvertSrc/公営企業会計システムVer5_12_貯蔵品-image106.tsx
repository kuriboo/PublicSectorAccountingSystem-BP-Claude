import React from 'react';
import styled from '@emotion/styled';

interface SystemManagementProps {
  endDate: string;
  systemOrder: string[];
  systemStep: string[];
  reserveMidPeriodFlag: boolean;
  useShutdownFlag: boolean;
  extractNightShutdownFlag: boolean;
  allowInitialization: boolean;
  maintenanceCheckFlag: boolean;
}

const Container = styled.div`
  padding: 16px;
  background-color: #f0f0f0;
  border-radius: 4px;
`;

const Title = styled.h2`
  margin: 0 0 16px;
  font-size: 18px;
`;

const Row = styled.div`
  margin-bottom: 8px;

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
  }
`;

const Label = styled.span`
  display: inline-block;
  width: 180px;
  font-weight: bold;
  margin-right: 8px;

  @media (min-width: 768px) {
    text-align: right;
  }
`;

const Select = styled.select`
  padding: 4px;
  font-size: 14px;
`;

const Option = styled.option``;

const RadioGroup = styled.div`
  display: flex;
  align-items: center;
`;

const Radio = styled.input`
  margin-right: 4px;
`;

const Button = styled.button`
  padding: 8px 16px;
  font-size: 14px;
  border-radius: 4px;
  margin-right: 8px;
`;

const SystemManagement: React.FC<SystemManagementProps> = ({
  endDate,
  systemOrder,
  systemStep,
  reserveMidPeriodFlag,
  useShutdownFlag,
  extractNightShutdownFlag,
  allowInitialization,
  maintenanceCheckFlag,
}) => {
  return (
    <Container>
      <Title>貯蔵品システム管理保守</Title>
      <Row>
        <Label>終了年月日</Label>
        {endDate}
      </Row>
      <Row>
        <Label>端数設定区分コード</Label>
        <Select>
          {systemOrder.map((order, index) => (
            <Option key={index} value={index + 1}>
              {order}
            </Option>
          ))}
        </Select>
      </Row>
      <Row>
        <Label>システム計価方法区分コード</Label>
        <Select>
          {systemStep.map((step, index) => (
            <Option key={index} value={index + 1}>
              {step}
            </Option>
          ))}
        </Select>
      </Row>
      <Row>
        <Label>予定負担行為初期値フラグ</Label>
        <RadioGroup>
          <Radio type="radio" checked={reserveMidPeriodFlag} readOnly /> 記載あり
          <Radio type="radio" checked={!reserveMidPeriodFlag} readOnly /> 記載なし
        </RadioGroup>
      </Row>
      <Row>
        <Label>支出負担行為初期値フラグ</Label>
        <RadioGroup>
          <Radio type="radio" checked={useShutdownFlag} readOnly /> 記載さない
          <Radio type="radio" checked={!useShutdownFlag} readOnly /> 記載する
        </RadioGroup>
      </Row>
      <Row>
        <Label>出庫伝票点印字フラグ</Label>
        <RadioGroup>
          <Radio type="radio" checked={extractNightShutdownFlag} readOnly /> 小数点印字なし
          <Radio type="radio" checked={!extractNightShutdownFlag} readOnly /> 小数点印字あり
        </RadioGroup>
      </Row>
      <Row>
        <Label>移動平均端数調整</Label>
        <RadioGroup>
          <Radio type="radio" checked={!allowInitialization} readOnly /> しない 
          <Radio type="radio" checked={allowInitialization} readOnly /> する
        </RadioGroup>
      </Row>
      <Row>
        <Label>入庫・出庫通知書出力フラグ</Label>
        <RadioGroup>
          <Radio type="radio" checked={maintenanceCheckFlag} readOnly /> 発行しない
          <Radio type="radio" checked={!maintenanceCheckFlag} readOnly /> 発行する
        </RadioGroup>
      </Row>
      <Row>
        <Label>監査終了年月</Label>
        {endDate.slice(0, 6)}
      </Row>
      <Row>
        <Button>OK</Button>
        <Button>クリア</Button>
        <Button>終了</Button>
      </Row>
    </Container>
  );
};

// Usage example
const sampleData: SystemManagementProps = {
  endDate: '平成29年09月15日',
  systemOrder: ['1:切り捨て', '2:切り上げ', '3:四捨五入'],
  systemStep: ['1:先入先出', '2:移動平均', '3:個別法'],
  reserveMidPeriodFlag: false,
  useShutdownFlag: false, 
  extractNightShutdownFlag: true,
  allowInitialization: false,
  maintenanceCheckFlag: true,
};

const App: React.FC = () => {
  return (
    <div>
      <SystemManagement {...sampleData} />
    </div>
  );
};

export default App;