import React from 'react';
import styled from '@emotion/styled';

type PrintRequirementSelectorProps = {
  onConfirm: () => void;
  onCancel: () => void;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #fff;
  width: 300px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 480px) {
    width: 100%;
  }
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 20px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const Button = styled.button`
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

const ConfirmButton = styled(Button)`
  background-color: #007bff;
  color: #fff;
`;

const CancelButton = styled(Button)`
  background-color: #ccc;
  color: #333;
`;

const PrintRequirementSelector: React.FC<PrintRequirementSelectorProps> = ({
  onConfirm,
  onCancel,
}) => {
  // Component state for checkboxes
  const [isPrintingDoublePages, setIsPrintingDoublePages] = React.useState(false);
  const [isPrintingReverseSides, setIsPrintingReverseSides] = React.useState(false);

  // Event handlers
  const handleConfirm = () => {
    onConfirm();
  };

  const handleCancel = () => {
    onCancel();
  };

  return (
    <Container>
      <Title>印刷対象帳票名</Title>
      <CheckboxContainer>
        <label>
          <input
            type="checkbox"
            checked={isPrintingDoublePages}
            onChange={() => setIsPrintingDoublePages(!isPrintingDoublePages)}
          />
          予定負担行為伺書(物品)
        </label>
        <label>
          <input
            type="checkbox"
            checked={isPrintingReverseSides}
            onChange={() => setIsPrintingReverseSides(!isPrintingReverseSides)}
          />
          入札執行依頼書(物品)
        </label>
      </CheckboxContainer>
      <ButtonContainer>
        <ConfirmButton onClick={handleConfirm}>OK</ConfirmButton>
        <CancelButton onClick={handleCancel}>クリア</CancelButton>
      </ButtonContainer>
    </Container>
  );
};

// Sample usage
const App: React.FC = () => {
  const handleConfirm = () => {
    console.log('Confirmed');
  };

  const handleCancel = () => {
    console.log('Canceled');
  };

  return (
    <div>
      <h1>Print Requirement Selector Example</h1>
      <PrintRequirementSelector onConfirm={handleConfirm} onCancel={handleCancel} />
    </div>
  );
};

export default App;