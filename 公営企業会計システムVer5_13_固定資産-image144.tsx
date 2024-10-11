import React from 'react';
import styled from 'styled-components';

// 定食メニューのプロパティ
interface SetMealProps {
  name: string;
  price: number;
  description: string;
}

// 定食メニューのスタイル
const SetMealContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const SetMealName = styled.h3`
  font-size: 1.2rem;
  margin: 0;
`;

const SetMealPrice = styled.p`
  font-size: 1rem;
  color: #888;
  margin: 0.5rem 0;
`;

const SetMealDescription = styled.p`
  font-size: 0.9rem;
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
  }
`;

// 定食メニューのコンポーネント
const SetMeal: React.FC<SetMealProps> = ({ name, price, description }) => {
  return (
    <SetMealContainer>
      <div>
        <SetMealName>{name}</SetMealName>
        <SetMealPrice>¥{price}</SetMealPrice>
      </div>
      <SetMealDescription>{description}</SetMealDescription>
    </SetMealContainer>
  );
};

// サンプルデータ
const sampleSetMeals: SetMealProps[] = [
  {
    name: 'からあげ定食',
    price: 800,
    description: 'からあげ、ご飯、味噌汁、お新香付き',
  },
  {
    name: '鮭の塩焼き定食',
    price: 850,
    description: '鮭の塩焼き、ご飯、味噌汁、お新香付き',
  },
];

// 使用例
const SetMealList: React.FC = () => {
  return (
    <div>
      {sampleSetMeals.map((meal, index) => (
        <SetMeal key={index} {...meal} />
      ))}
    </div>
  );
};

export default SetMealList;