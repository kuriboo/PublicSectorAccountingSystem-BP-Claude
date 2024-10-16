import React from 'react';
import styled from '@emotion/styled';

// カードのプロパティの型定義
type CardProps = {
  title: string;
  message: string;
  buttonText: string;
  onButtonClick: () => void;
};

// カードのスタイル定義
const CardContainer = styled.div`
  background-color: #ffffff;
  border: 1px solid #cccccc;
  border-radius: 4px;
  padding: 16px;
  width: 300px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 600px) {
    width: 100%;
  }
`;

const Title = styled.h2`
  font-size: 20px;
  margin-bottom: 8px;
`;

const Message = styled.p`
  font-size: 16px;
  margin-bottom: 16px;
`;

const Button = styled.button`
  background-color: #007bff;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

// カードコンポーネントの定義
const Card: React.FC<CardProps> = ({ title, message, buttonText, onButtonClick }) => {
  // プロパティのデフォルト値を設定
  const defaultProps: CardProps = {
    title: '',
    message: '',
    buttonText: 'OK',
    onButtonClick: () => {},
  };

  // プロパティのデフォルト値を適用
  const { title: cardTitle, message: cardMessage, buttonText: cardButtonText, onButtonClick: cardOnButtonClick } = {
    ...defaultProps,
    ...{ title, message, buttonText, onButtonClick },
  };

  return (
    <CardContainer>
      <Title>{cardTitle}</Title>
      <Message>{cardMessage}</Message>
      <Button onClick={cardOnButtonClick}>{cardButtonText}</Button>
    </CardContainer>
  );
};

// サンプルデータを用いたカードコンポーネントの使用例
const SampleCard: React.FC = () => {
  const handleButtonClick = () => {
    alert('ボタンがクリックされました');
  };

  return (
    <Card
      title="危険性の高い問題が見つかります。"
      message="はい(Y) いいえ(N)"
      buttonText="OK"
      onButtonClick={handleButtonClick}
    />
  );
};

export default SampleCard;