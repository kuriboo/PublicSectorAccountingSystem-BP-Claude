import React from 'react';
import styled from '@emotion/styled';

type ButtonProps = {
  /**
   * ボタンのテキスト
   */
  text: string;
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
   * ボタンのフォントサイズ
   */
  fontSize?: string;
  /**
   * ボタンの角丸
   */
  borderRadius?: string;
  /**
   * ボタンのクリックイベントハンドラ
   */
  onClick?: () => void;
};

const StyledButton = styled.button<ButtonProps>`
  background-color: ${({ backgroundColor }) => backgroundColor || '#007bff'};
  color: ${({ color }) => color || '#fff'};
  width: ${({ width }) => width || 'auto'};
  height: ${({ height }) => height || '40px'};
  font-size: ${({ fontSize }) => fontSize || '16px'};
  border-radius: ${({ borderRadius }) => borderRadius || '4px'};
  border: none;
  cursor: pointer;
  padding: 0 16px;

  &:hover {
    opacity: 0.8;
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;

const Button: React.FC<ButtonProps> = ({
  text,
  backgroundColor,
  color,
  width,
  height,
  fontSize,
  borderRadius,
  onClick,
}) => {
  if (!text) {
    console.warn('Button component requires a text prop');
    return null;
  }

  return (
    <StyledButton
      backgroundColor={backgroundColor}
      color={color}
      width={width}
      height={height}  
      fontSize={fontSize}
      borderRadius={borderRadius}
      onClick={onClick}
    >
      {text}
    </StyledButton>
  );
};

const SampleUsage: React.FC = () => (
  <>
    <Button text="Click me!" />
    <Button 
      text="Custom Button"
      backgroundColor="#28a745"
      color="#fff"
      width="200px"
      height="50px"
      fontSize="18px"
      borderRadius="25px"
      onClick={() => alert('Custom button clicked!')}
    />
  </>
);

export default SampleUsage;