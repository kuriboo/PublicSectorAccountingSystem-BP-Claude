import React from 'react';
import styled from 'styled-components';

// 水道管路情報の型定義
type WaterPipeInfo = {
  reservoirName: string;
  pipeNumber: string;
  material: string;
  length: number;
};

// 担当部署の型定義
type Department = {
  code: string;
  name: string;
};

// コンポーネントのプロパティの型定義
type PipeInfoProps = {
  waterPipeInfo: WaterPipeInfo;
  department: Department;
};

// スタイル定義
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  max-width: 400px;

  @media (max-width: 480px) {
    max-width: 100%;
  }
`;

const Label = styled.label`
  font-weight: bold;
`;

const InfoRow = styled.div`
  display: flex;
  gap: 16px;
`;

const InfoItem = styled.div`
  flex: 1;
`;

// 水道管路情報コンポーネント
const PipeInfo: React.FC<PipeInfoProps> = ({ waterPipeInfo, department }) => {
  // 水道管路情報が未定義の場合はエラーメッセージを表示
  if (!waterPipeInfo) {
    return <div>水道管路情報が見つかりません。</div>;
  }

  // 担当部署が未定義の場合はエラーメッセージを表示  
  if (!department) {
    return <div>担当部署情報が見つかりません。</div>;
  }

  return (
    <Container>
      <InfoRow>
        <InfoItem>
          <Label>予算課</Label>
          <div>{waterPipeInfo.reservoirName}</div>
        </InfoItem>
        <InfoItem>
          <Label>担当課</Label>
          <div>{department.code} {department.name}</div>
        </InfoItem>
      </InfoRow>
      <InfoRow>
        <InfoItem>
          <Label>業務担当者</Label>
          <div>{waterPipeInfo.pipeNumber} 水道管路維持課</div>
        </InfoItem>
        <InfoItem>
          <Label>担当者</Label>
          <div>{department.code} さむせい 一郎</div>
        </InfoItem>
      </InfoRow>
    </Container>
  );
};

// サンプルデータ
const sampleWaterPipeInfo: WaterPipeInfo = {
  reservoirName: '0000004 水道管路維持課',
  pipeNumber: '0000004',
  material: 'さむせい 一郎',
  length: 0.001,
};

const sampleDepartment: Department = {
  code: '0001',
  name: 'さむせい 八郎',  
};

// 使用例
const App: React.FC = () => {
  return (
    <div>
      <h1>水道管路情報</h1>
      <PipeInfo waterPipeInfo={sampleWaterPipeInfo} department={sampleDepartment} />
    </div>
  );
};

export default App;