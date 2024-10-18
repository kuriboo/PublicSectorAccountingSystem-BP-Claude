import React from 'react';
import styled from 'styled-components';

// 型定義
interface InputModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (inputValue: string) => void;
}

// スタイル定義
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 4px;
  width: 400px;
  max-width: 90%;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
`;

const ModalTitle = styled.h2`
  margin-top: 0;
`;

const InputField = styled.input`
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Button = styled.button`
  padding: 8px 16px;
  margin-left: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

// InputModalコンポーネント
const InputModal: React.FC<InputModalProps> = ({ isOpen, onClose, onConfirm }) => {
  const [inputValue, setInputValue] = React.useState('');

  // 入力値が変更されたときに呼び出されるハンドラー
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  // OKボタンがクリックされたときに呼び出されるハンドラー  
  const handleConfirm = () => {
    onConfirm(inputValue);
    setInputValue('');
  };

  // モーダルが閉じるときに呼び出されるハンドラー
  const handleClose = () => {
    onClose();
    setInputValue('');
  };

  if (!isOpen) {
    return null;
  }

  return (
    <ModalOverlay>
      <ModalContent>
        <ModalTitle>入札結果取込準備処理</ModalTitle>
        <p>本処理はデータ件数によって時間を要します。処理中はシステムを停止せずにお待ちください。</p>
        <InputField
          type="text"
          placeholder="内容"
          value={inputValue}
          onChange={handleInputChange}
        />
        <ButtonGroup>
          <Button onClick={handleClose}>キャンセル</Button>
          <Button onClick={handleConfirm}>OK</Button>
        </ButtonGroup>
      </ModalContent>
    </ModalOverlay>
  );
};

// サンプルデータ
const sampleData = {
  isOpen: true,
  onClose: () => console.log('Modal closed'),
  onConfirm: (value: string) => console.log(`Confirmed with value: ${value}`),
};

// 使用例
export const InputModalSample: React.FC = () => {
  return <InputModal {...sampleData} />;
};