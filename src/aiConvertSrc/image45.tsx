import React from 'react';
import styled from 'styled-components';

// ボタンのプロパティの型定義
interface ButtonProps {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
}

// ボタンのスタイルコンポーネント
const StyledButton = styled.button<{ disabled?: boolean }>`
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 5px;
  border: none;
  background-color: ${({ disabled }) => (disabled ? '#ccc' : '#007bff')};
  color: #fff;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  transition: opacity 0.2s;

  &:hover {
    opacity: ${({ disabled }) => (disabled ? 0.6 : 0.8)};
  }

  @media (max-width: 480px) {
    font-size: 14px;
    padding: 8px 16px;
  }
`;

// 再利用可能なボタンコンポーネント
const Button: React.FC<ButtonProps> = ({ label, onClick, disabled }) => {
  // ボタンのクリックハンドラ
  const handleClick = () => {
    if (onClick && !disabled) {
      onClick();
    }
  };

  return <StyledButton onClick={handleClick} disabled={disabled}>{label}</StyledButton>;
};

// デフォルトプロパティ
Button.defaultProps = {
  disabled: false,
};

// サンプルデータを用いたボタンコンポーネントの使用例
const ButtonExample: React.FC = () => {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <div>
      <Button label="OK" onClick={handleClick} />
      <Button label="キャンセル" disabled />
      <Button label="終了" />
    </div>
  );
};

export default ButtonExample;