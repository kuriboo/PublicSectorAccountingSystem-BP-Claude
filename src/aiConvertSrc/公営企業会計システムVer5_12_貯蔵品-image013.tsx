import React from 'react';
import styled from '@emotion/styled';

interface MeasurementProps {
  title: string;
  value: number;
  unit: string;
}

const MeasurementContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 16px;
`;

const Title = styled.div`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 4px;
`;

const Value = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

const Unit = styled.div`
  font-size: 14px;
  color: #666;
`;

const Measurement: React.FC<MeasurementProps> = ({ title, value, unit }) => {
  return (
    <MeasurementContainer>
      <Title>{title}</Title>
      {/* 値が未定義の場合は - を表示 */}
      <Value>{value !== undefined ? value : '-'}</Value>
      <Unit>{unit}</Unit>
    </MeasurementContainer>
  );
};

const MeasurementPanelContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 16px;
`;

const Button = styled.button`
  padding: 8px 16px;
  margin-left: 8px;
  font-size: 14px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

interface MeasurementPanelProps {
  measurementData: MeasurementProps[];
  onOk: () => void;
  onClear: () => void;
  onCancel: () => void;
}

const MeasurementPanel: React.FC<MeasurementPanelProps> = ({
  measurementData,
  onOk,
  onClear,
  onCancel,
}) => {
  return (
    <MeasurementPanelContainer>
      {measurementData.map((data, index) => (
        <Measurement key={index} {...data} />
      ))}
      <ButtonContainer>
        <Button onClick={onOk}>OK</Button>
        <Button onClick={onClear}>クリア</Button>
        <Button onClick={onCancel}>キャンセル</Button>
      </ButtonContainer>
    </MeasurementPanelContainer>
  );
};

// 使用例
const App: React.FC = () => {
  const sampleData: MeasurementProps[] = [
    { title: '品番', value: 123456789, unit: '' },
    { title: '規格', value: 19, unit: 'Φ' },
    { title: '数量', value: 1, unit: '' },
    { title: '単価', value: 1500, unit: '円' },
    { title: '金額', value: 1500, unit: '円' },
  ];

  const handleOk = () => {
    console.log('OK clicked');
  };

  const handleClear = () => {
    console.log('Clear clicked');
  };

  const handleCancel = () => {
    console.log('Cancel clicked');
  };

  return (
    <MeasurementPanel
      measurementData={sampleData}
      onOk={handleOk}
      onClear={handleClear}
      onCancel={handleCancel}
    />
  );
};

export default App;