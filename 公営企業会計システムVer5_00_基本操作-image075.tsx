import React from 'react';
import styled from 'styled-components';

// 雪だるまのプロパティの型定義
interface SnowmanProps {
  size?: number;
  color?: string;
  backgroundColor?: string;
}

// 雪だるまコンポーネント
const Snowman: React.FC<SnowmanProps> = ({
  size = 200,
  color = '#fff',
  backgroundColor = '#6cf',
}) => {
  return (
    <SnowmanWrapper backgroundColor={backgroundColor}>
      <SnowmanBody size={size} color={color} />
      <SnowmanFace size={size} />
    </SnowmanWrapper>
  );
};

// 雪だるまのラッパーコンポーネント
const SnowmanWrapper = styled.div<{ backgroundColor: string }>`
  display: inline-block;
  background-color: ${(props) => props.backgroundColor};
  border-radius: 20px;
  padding: 20px;
`;

// 雪だるまの胴体コンポーネント
const SnowmanBody = styled.div<{ size: number; color: string }>`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  background-color: ${(props) => props.color};
  border-radius: 50%;
  position: relative;

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 70%;
    height: 70%;
    background-color: ${(props) => props.color};
    border-radius: 50%;
  }

  &::before {
    top: -45%;
    left: 15%;
  }

  &::after {
    bottom: -35%;
    left: 15%;
  }
`;

// 雪だるまの顔のコンポーネント
const SnowmanFace = styled.div<{ size: number }>`
  position: absolute;
  top: 15%;
  left: 50%;
  transform: translateX(-50%);

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: ${(props) => props.size * 0.08}px;
    height: ${(props) => props.size * 0.08}px;
    background-color: #333;
    border-radius: 50%;
    top: ${(props) => props.size * 0.1}px;
  }

  &::before {
    left: ${(props) => props.size * 0.15}px;
  }

  &::after {
    right: ${(props) => props.size * 0.15}px;
  }
`;

// サンプルデータを用いた雪だるまの表示コンポーネント
const SnowmanDemo = () => {
  return (
    <div>
      <h1>雪だるまコンポーネントのデモ</h1>
      <Snowman />
      <Snowman size={150} color="#eee" backgroundColor="#36c" />
      <Snowman size={120} color="#ddd" backgroundColor="#396" />
    </div>
  );
};

export default SnowmanDemo;