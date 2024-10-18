import React from 'react';
import styled from 'styled-components';

// Props type definition for the KyushuLotteryNumberInput component
type KyushuLotteryNumberInputProps = {
  value?: string;
  onChange?: (value: string) => void;
  onOk?: () => void;
  onClear?: () => void;
  onCancel?: () => void;
};

// Styled components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 300px;
  margin: 0 auto;

  @media (max-width: 480px) {
    width: 100%;
  }
`;

const Title = styled.h2`
  margin-bottom: 16px;
`;

const Input = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  margin-bottom: 16px;
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
  cursor: pointer;
`;

const OkButton = styled(Button)`
  background-color: #007bff;
  color: #fff;
`;

const ClearButton = styled(Button)`
  background-color: #dc3545;
  color: #fff;
`;

const CancelButton = styled(Button)`
  background-color: #6c757d;
  color: #fff;
`;

// KyushuLotteryNumberInput component
const KyushuLotteryNumberInput: React.FC<KyushuLotteryNumberInputProps> = ({
  value = '',
  onChange,
  onOk,
  onClear,
  onCancel,
}) => {
  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };

  return (
    <Container>
      <Title>西日本宝券計畫目標集團面</Title>
      <Input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="請輸入藥劑碼"
      />
      <ButtonContainer>
        <OkButton onClick={onOk}>OK</OkButton>
        <ClearButton onClick={onClear}>クリア</ClearButton>
        <CancelButton onClick={onCancel}>キャンセル</CancelButton>
      </ButtonContainer>
    </Container>
  );
};

// Example usage of the KyushuLotteryNumberInput component
const ExampleUsage: React.FC = () => {
  const [value, setValue] = React.useState('0020101350001000');

  const handleOk = () => {
    console.log('OK clicked');
  };

  const handleClear = () => {
    setValue('');
  };

  const handleCancel = () => {
    console.log('Cancel clicked');
  };

  return (
    <KyushuLotteryNumberInput
      value={value}
      onChange={setValue}
      onOk={handleOk}
      onClear={handleClear}
      onCancel={handleCancel}
    />
  );
};

export default ExampleUsage;