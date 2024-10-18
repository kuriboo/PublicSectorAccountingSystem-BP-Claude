import React from 'react';
import styled from '@emotion/styled';

type Props = {
  title: string;
  text: string;
  buttonText: string;
  onButtonClick: () => void;
};

const Card: React.FC<Props> = ({ title, text, buttonText, onButtonClick }) => {
  return (
    <CardWrapper>
      <Title>{title}</Title>
      <Text>{text}</Text>
      <Button onClick={onButtonClick}>{buttonText}</Button>
    </CardWrapper>
  );
};

// スタイリング
const CardWrapper = styled.div`
  background-color: #f5f5f5;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  max-width: 300px;
  margin: 0 auto;

  @media (min-width: 768px) {
    max-width: 400px;
  }
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 8px;
  color: #333;
`;

const Text = styled.p`
  font-size: 16px;
  margin-bottom: 16px;
  color: #666;
`;

const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

// サンプルデータ
const sampleData = {
  title: 'カードのタイトル',
  text: 'カードの本文テキストです。ここにカードの内容を表示します。',
  buttonText: 'クリック',
};

// 使用例
const CardExample: React.FC = () => {
  const handleButtonClick = () => {
    console.log('ボタンがクリックされました');
  };

  return (
    <Card
      title={sampleData.title}
      text={sampleData.text}
      buttonText={sampleData.buttonText}
      onButtonClick={handleButtonClick}
    />
  );
};

export default CardExample;