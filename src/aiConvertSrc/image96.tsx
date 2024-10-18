import React from 'react';
import styled from '@emotion/styled';

interface InputModalProps {
  onSubmit: () => void;
  onCancel: () => void;
}

const InputModal: React.FC<InputModalProps> = ({ onSubmit, onCancel }) => {
  const [input, setInput] = React.useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return (
    <ModalContainer>
      <ModalTitle>入札結果取込準備処理</ModalTitle>
      <ModalContent>
        <ModalText>
          本処理はデータ作成により時間を要します。
          処理中はシステムを停止させずにお待ちください。
        </ModalText>
        <InputField
          type="text"
          value={input}
          onChange={handleChange}
          placeholder="内容"
        />
        <ButtonContainer>
          <Button onClick={onCancel}>キャンセル</Button>
          <SubmitButton onClick={onSubmit} disabled={!input}>
            行確定
          </SubmitButton>
        </ButtonContainer>
      </ModalContent>
    </ModalContainer>
  );
};

// Sample usage
const SampleUsage: React.FC = () => {
  const handleSubmit = () => {
    console.log('Submitted');
  };

  const handleCancel = () => {
    console.log('Cancelled');
  };

  return <InputModal onSubmit={handleSubmit} onCancel={handleCancel} />;
};

export default SampleUsage;

// Styled components
const ModalContainer = styled.div`
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 20px;
  width: 400px;
  margin: 0 auto;
  text-align: center;
`;

const ModalTitle = styled.h2`
  color: #333;
  margin-bottom: 20px;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const ModalText = styled.p`
  color: #666;
  margin-bottom: 20px;
`;

const InputField = styled.input`
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  background-color: #f0f0f0;
  color: #333;
  cursor: pointer;
  margin-left: 10px;

  &:hover {
    background-color: #e0e0e0;
  }
`;

const SubmitButton = styled(Button)`
  background-color: #007bff;
  color: white;

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;