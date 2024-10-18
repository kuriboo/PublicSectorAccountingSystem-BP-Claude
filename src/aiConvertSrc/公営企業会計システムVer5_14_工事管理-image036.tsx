import React from 'react';
import styled from 'styled-components';

// Material設定の型定義
type MaterialSettingProps = {
  name: string;
  value: string;
};

// コンポーネントのプロパティの型定義
type WorkspaceConfigProps = {
  materials: MaterialSettingProps[];
  mold: string;
  direction: string;
  clampPressure: number;
  temperature: number;
  ejectorNumber: number;
  ejectorStroke: number;
  onOk?: () => void;
  onCancel?: () => void;
};

// スタイル定義
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 16px;
  box-sizing: border-box;
`;

const Row = styled.div`
  display: flex;
  margin-bottom: 8px;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const Label = styled.div`
  width: 120px;
  margin-right: 8px;
`;

const Value = styled.div`
  flex: 1;
`;

const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 16px;
`;

const Button = styled.button`
  margin-left: 8px;
`;

// ワークスペース設定コンポーネント
const WorkspaceConfig: React.FC<WorkspaceConfigProps> = ({
  materials,
  mold,
  direction,
  clampPressure,
  temperature,
  ejectorNumber,
  ejectorStroke,
  onOk,
  onCancel,
}) => {
  return (
    <Container>
      {materials.map((material, index) => (
        <Row key={index}>
          <Label>{material.name}</Label>
          <Value>{material.value}</Value>
        </Row>
      ))}
      <Row>
        <Label>成型・単位</Label>
        <Value>{mold}</Value>
      </Row>
      <Row>
        <Label>射出方向</Label>
        <Value>{direction}</Value>
      </Row>
      <Row>
        <Label>型締圧力</Label>
        <Value>{clampPressure} ton</Value>
      </Row>
      <Row>
        <Label>シリンダ温度</Label>
        <Value>{temperature} ℃</Value>
      </Row>
      <Row>
        <Label>エジェクター数</Label>
        <Value>{ejectorNumber}</Value>
      </Row>
      <Row>
        <Label>エジェクターストローク</Label>
        <Value>{ejectorStroke} mm</Value>
      </Row>
      <Actions>
        <Button onClick={onCancel}>キャンセル</Button>
        <Button onClick={onOk}>OK</Button>
      </Actions>
    </Container>
  );
};

// サンプルデータ
const sampleData: WorkspaceConfigProps = {
  materials: [
    { name: '材料名称', value: '00001' },
    { name: '規格名称', value: '00010' },
  ],
  mold: '66101/600',
  direction: '導送部水平',
  clampPressure: 0.00,
  temperature: 0.01,
  ejectorNumber: 1,
  ejectorStroke: 10.000,
};

// 使用例
const App: React.FC = () => {
  return (
    <div>
      <h1>工事関連設定明細編集</h1>
      <WorkspaceConfig {...sampleData} />
    </div>
  );
};

export default App;