import React from 'react';
import styled from '@emotion/styled';

type PipeProps = {
  pipeNumber: string;
  pipeManufacturer: string;
  pipeLength: number;
  pipeUnit: string;
  pipeArea: number;
  pipeMeasurementUnit: string;
  startHeight: number;
  endHeight: number;
  averagePipeSlope: number;
};

const PipeInfo: React.FC<PipeProps> = ({
  pipeNumber,
  pipeManufacturer,
  pipeLength,
  pipeUnit,
  pipeArea,
  pipeMeasurementUnit,
  startHeight,
  endHeight,
  averagePipeSlope,
}) => {
  return (
    <PipeInfoWrapper>
      <PipeInfoItem>
        <PipeInfoLabel>保管場所</PipeInfoLabel>
        <PipeInfoValue>{pipeNumber}</PipeInfoValue>
      </PipeInfoItem>
      <PipeInfoItem>
        <PipeInfoLabel>保管場所A</PipeInfoLabel>
        <PipeInfoValue>{pipeManufacturer}</PipeInfoValue>
      </PipeInfoItem>
      <PipeInfoItem>
        <PipeInfoLabel>品番</PipeInfoLabel>
        <PipeInfoValue>0000701015</PipeInfoValue>
      </PipeInfoItem>
      <PipeInfoItem>
        <PipeInfoLabel>品名</PipeInfoLabel>
        <PipeInfoValue>予算編成管高指摘</PipeInfoValue>
      </PipeInfoItem>
      <PipeInfoItem>
        <PipeInfoLabel>規格</PipeInfoLabel>
        <PipeInfoValue>φ{pipeLength}{pipeUnit}</PipeInfoValue>
      </PipeInfoItem>
      <PipeInfoItem>
        <PipeInfoLabel>数量</PipeInfoLabel>
        <PipeInfoValue>
          {pipeArea.toFixed(2)} {pipeMeasurementUnit}
        </PipeInfoValue>
      </PipeInfoItem>
      <PipeInfoItem>
        <PipeInfoLabel>底出確認</PipeInfoLabel>
        <PipeInfoValue>{startHeight.toFixed(2)}</PipeInfoValue>
      </PipeInfoItem>
      <PipeInfoItem>
        <PipeInfoLabel>現在確認</PipeInfoLabel>
        <PipeInfoValue>{endHeight.toFixed(2)}</PipeInfoValue>
      </PipeInfoItem>
      <PipeInfoItem>
        <PipeInfoLabel>平均単価</PipeInfoLabel>
        <PipeInfoValue>{averagePipeSlope.toLocaleString()}</PipeInfoValue>
      </PipeInfoItem>
    </PipeInfoWrapper>
  );
};

// Styles
const PipeInfoWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 4px;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const PipeInfoItem = styled.div`
  display: flex;
  align-items: center;
`;

const PipeInfoLabel = styled.span`
  font-weight: bold;
  margin-right: 10px;
`;

const PipeInfoValue = styled.span`
  color: #333;
`;

// Sample data for demonstration
const sampleData: PipeProps = {
  pipeNumber: '00000',
  pipeManufacturer: '保管場所A',
  pipeLength: 200,
  pipeUnit: 'mm',
  pipeArea: 1.0,
  pipeMeasurementUnit: 'm',
  startHeight: 0.0,
  endHeight: 3.0,
  averagePipeSlope: 2205948,
};

// Usage example
const App: React.FC = () => {
  return (
    <div>
      <h1>Pipe Information</h1>
      <PipeInfo {...sampleData} />
    </div>
  );
};

export default App;