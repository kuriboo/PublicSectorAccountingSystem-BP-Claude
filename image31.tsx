import React from 'react';
import styled from '@emotion/styled';

// 登録・訂正・削除のボタンコンポーネント
type ButtonProps = {
  label: string;
  onClick: () => void;
  disabled?: boolean;
};

const Button: React.FC<ButtonProps> = ({ label, onClick, disabled = false }) => {
  return (
    <StyledButton onClick={onClick} disabled={disabled}>
      {label}
    </StyledButton>
  );
};

// ボタンのスタイリング
const StyledButton = styled.button`
  padding: 4px 8px;
  margin-right: 8px;
  font-size: 14px;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }

  &:disabled {
    background-color: #6c757d;
    cursor: not-allowed;
  }

  @media (max-width: 480px) {
    font-size: 12px;
    padding: 2px 6px;
  }
`;

// ボタングループのコンポーネント
const ButtonGroup: React.FC = () => {
  // ボタンクリック時のハンドラー
  const handleRegisterClick = () => {
    console.log('登録ボタンがクリックされました');
  };

  const handleCorrectClick = () => {
    console.log('訂正ボタンがクリックされました');
  };

  const handleDeleteClick = () => {
    console.log('削除ボタンがクリックされました');
  };

  return (
    <Container>
      <Button label="登録" onClick={handleRegisterClick} />
      <Button label="訂正" onClick={handleCorrectClick} />
      <Button label="削除" onClick={handleDeleteClick} disabled />
    </Container>
  );
};

// ボタングループのスタイリング
const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 16px;
  background-color: #f8f9fa;
  border-radius: 4px;

  @media (max-width: 480px) {
    padding: 8px;
  }
`;

// 使用例
const App: React.FC = () => {
  return (
    <div>
      <h1>ボタングループの例</h1>
      <ButtonGroup />
    </div>
  );
};

export default App;