import React from 'react';
import styled from '@emotion/styled';

type BannerProps = {
  title: string;
  description: string;
  buttonText: string;
  onButtonClick: () => void;
};

const BannerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background-color: #f0f0f0;
  text-align: center;

  @media (min-width: 768px) {
    padding: 4rem;
  }
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    font-size: 3rem;
  }
`;

const Description = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Button = styled.button`
  font-size: 1.2rem;
  padding: 1rem 2rem;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Banner: React.FC<BannerProps> = ({ title, description, buttonText, onButtonClick }) => {
  return (
    <BannerWrapper>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Button onClick={onButtonClick}>{buttonText}</Button>
    </BannerWrapper>
  );
};

// サンプル使用例
const SampleUsage: React.FC = () => {
  const handleButtonClick = () => {
    console.log('Button clicked');
  };

  return (
    <Banner
      title="決算統計"
      description="貴社計算書集計処理"
      buttonText="決算統計"
      onButtonClick={handleButtonClick}
    />
  );
};

export default Banner;