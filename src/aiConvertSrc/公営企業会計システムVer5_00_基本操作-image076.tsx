import React, { useState } from 'react';
import styled from '@emotion/styled';

type ApprovalFlowProps = {
  steps: string[];
};

const ApprovalFlow: React.FC<ApprovalFlowProps> = ({ steps }) => {
  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <Container>
      <FlowContainer>
        {steps.map((step, index) => (
          <React.Fragment key={step}>
            <StepBox active={index === currentStep}>{step}</StepBox>
            {index !== steps.length - 1 && <Arrow />}
          </React.Fragment>
        ))}
      </FlowContainer>
      <ButtonContainer>
        <Button onClick={handleBack} disabled={currentStep === 0}>
          戻る
        </Button>
        <Button onClick={handleNext} disabled={currentStep === steps.length - 1}>
          次へ
        </Button>
      </ButtonContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const FlowContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const StepBox = styled.div<{ active: boolean }>`
  background-color: ${({ active }) => (active ? '#007bff' : '#f0f0f0')};
  color: ${({ active }) => (active ? '#fff' : '#000')};
  padding: 10px;
  border-radius: 5px;
  margin-right: 10px;
`;

const Arrow = styled.div`
  width: 0;
  height: 0;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  border-left: 10px solid #ccc;
  margin-right: 10px;
`;

const ButtonContainer = styled.div`
  display: flex;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  margin-right: 10px;
  cursor: pointer;

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

// Usage example
const App: React.FC = () => {
  const steps = ['予定処理', '貨物処理', '決定処理', '支払処理'];

  return (
    <div>
      <h1>Approval Flow</h1>
      <ApprovalFlow steps={steps} />
    </div>
  );
};

export default App;