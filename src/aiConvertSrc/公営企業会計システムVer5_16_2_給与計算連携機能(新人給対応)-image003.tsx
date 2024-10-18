import React from 'react';
import styled from 'styled-components';

// 支払フロー全体のコンテナ
const PaymentFlowContainer = styled.div`
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 4px;
`;

// 支払フローの各ステップを表すボックス
const PaymentStep = styled.div<{ active?: boolean }>`
  background-color: ${props => (props.active ? '#ffc107' : '#e0e0e0')};
  color: ${props => (props.active ? '#fff' : '#000')};
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

// 支払フローのステップ間の矢印
const Arrow = styled.div`
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-top: 10px solid #ccc;
  margin: 5px auto;
`;

// 支払フローのプロパティの型定義
type PaymentFlowProps = {
  currentStep: number;
  steps: string[];
  onStepClick: (stepIndex: number) => void;
};

// 支払フローのコンポーネント
const PaymentFlow: React.FC<PaymentFlowProps> = ({ currentStep, steps, onStepClick }) => {
  return (
    <PaymentFlowContainer>
      {steps.map((step, index) => (
        <React.Fragment key={step}>
          <PaymentStep active={index === currentStep} onClick={() => onStepClick(index)}>
            {step}
          </PaymentStep>
          {index < steps.length - 1 && <Arrow />}
        </React.Fragment>
      ))}
    </PaymentFlowContainer>
  );
};

// サンプルデータ
const sampleSteps = [
  '給与データ入力',
  '振替伝票決裁依頼',
  '出納受渡入力',
  '給与支払',
  '給与振り込み済',
];

// 使用例
const App: React.FC = () => {
  const [currentStep, setCurrentStep] = React.useState(0);

  const handleStepClick = (stepIndex: number) => {
    setCurrentStep(stepIndex);
  };

  return (
    <div>
      <h2>支払フロー</h2>
      <PaymentFlow
        currentStep={currentStep}
        steps={sampleSteps}
        onStepClick={handleStepClick}
      />
    </div>
  );
};

export default App;