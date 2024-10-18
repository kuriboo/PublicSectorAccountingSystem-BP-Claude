import React from 'react';
import styled from '@emotion/styled';

type ButtonProps = {
  /**
   * ボタンのラベル
   */
  label: string;
  /**
   * ボタンのオンクリックイベントハンドラ
   */
  onClick: () => void;
  /**
   * ボタンの背景色
   */
  backgroundColor?: string;
  /**
   * ボタンの文字色
   */
  color?: string;
  /**
   * ボタンの幅
   */
  width?: string;
  /**
   * ボタンの高さ
   */
  height?: string;
  /**
   * ボタンの境界線の丸み
   */
  borderRadius?: string;
};

const StyledButton = styled.button<ButtonProps>`
  background-color: ${({ backgroundColor }) => backgroundColor || '#007bff'};
  color: ${({ color }) => color || '#fff'};
  width: ${({ width }) => width || '100%'};
  height: ${({ height }) => height || '40px'};
  border: none;
  border-radius: ${({ borderRadius }) => borderRadius || '4px'};
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }

  &:active {
    background-color: #003d80;
  }

  @media (min-width: 768px) {
    width: auto;
    padding: 0 20px;
  }
`;

/**
 * カスタマイズ可能なボタンコンポーネント
 */
const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  backgroundColor,
  color,
  width,
  height,
  borderRadius,
}) => {
  if (!label) {
    console.warn('Button: labelプロパティが指定されていません。');
    return null;
  }

  return (
    <StyledButton
      onClick={onClick}
      backgroundColor={backgroundColor}
      color={color}
      width={width}
      height={height}
      borderRadius={borderRadius}
    >
      {label}
    </StyledButton>
  );
};

// 使用例
const SamplePage: React.FC = () => {
  const handleClick = () => {
    console.log('ボタンがクリックされました');
  };

  return (
    <div>
      <h1>ボタンサンプル</h1>
      <Button label="クリック" onClick={handleClick} />
      <Button
        label="カスタムボタン"
        onClick={handleClick}
        backgroundColor="#28a745"
        color="#fff"
        width="200px"
        height="50px"
        borderRadius="25px"
      />
    </div>
  );
};

export default SamplePage;