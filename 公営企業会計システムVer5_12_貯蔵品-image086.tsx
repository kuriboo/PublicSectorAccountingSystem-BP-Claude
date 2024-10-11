import React from 'react';
import styled from '@emotion/styled';

type ContractType = '仕訳作成' | '仕訳解除';

interface Props {
  currentYear: number;
  onContractTypeChange: (type: ContractType) => void;
  onExecute: () => void;
  onCancel: () => void;
  onClose: () => void;
}

const Container = styled.div`
  background-color: #f0f0f0;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 16px;
`;

const YearText = styled.div`
  font-size: 16px;
  margin-bottom: 8px;
`;

const RadioGroup = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 16px;
`;

const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 8px;
`;

const Button = styled.button`
  padding: 8px 16px;
  font-size: 14px;
  border-radius: 4px;
  border: none;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

const ExecuteButton = styled(Button)`
  background-color: #007bff;
  color: white;
`;

const CancelButton = styled(Button)`
  background-color: #6c757d;
  color: white;
`;

const CloseButton = styled(Button)`
  background-color: #dc3545;
  color: white;
`;

const SampleData: Props = {
  currentYear: 2029,
  onContractTypeChange: (type: ContractType) => {
    console.log(`Contract type changed to: ${type}`);
  },
  onExecute: () => {
    console.log('Execute button clicked');
  },
  onCancel: () => {
    console.log('Cancel button clicked');
  },
  onClose: () => {
    console.log('Close button clicked');
  },
};

const CarryforwardSettingSystemComponent: React.FC<Props> = ({
  currentYear,
  onContractTypeChange,
  onExecute,
  onCancel,
  onClose,
}) => {
  const [contractType, setContractType] = React.useState<ContractType>('仕訳作成');

  const handleContractTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const type = e.target.value as ContractType;
    setContractType(type);
    onContractTypeChange(type);
  };

  return (
    <Container>
      <Title>たな卸資産価格自動仕訳作成</Title>
      <YearText>行政市水道事業会計 {currentYear}年度</YearText>

      <RadioGroup>
        <RadioLabel>
          <input
            type="radio"
            value="仕訳作成"
            checked={contractType === '仕訳作成'}
            onChange={handleContractTypeChange}
          />
          仕訳作成
        </RadioLabel>
        <RadioLabel>
          <input
            type="radio"
            value="仕訳解除"
            checked={contractType === '仕訳解除'}
            onChange={handleContractTypeChange}
          />
          仕訳解除
        </RadioLabel>
      </RadioGroup>

      <ButtonGroup>
        <ExecuteButton onClick={onExecute}>OK</ExecuteButton>
        <CancelButton onClick={onCancel}>クリア</CancelButton>
        <CloseButton onClick={onClose}>終了</CloseButton>
      </ButtonGroup>
    </Container>
  );
};

const App: React.FC = () => {
  return (
    <div>
      <h1>Sample Usage</h1>
      <CarryforwardSettingSystemComponent {...SampleData} />
    </div>
  );
};

export default App;