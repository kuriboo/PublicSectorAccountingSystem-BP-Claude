import React from 'react';
import styled from '@emotion/styled';

// カードのプロパティの型定義
interface CardProps {
  icon?: string;
  label: string;
  value: string;
  unit: string;
  isSelected?: boolean;
  onSelect?: () => void;
}

// カードコンポーネント
const Card: React.FC<CardProps> = ({ icon, label, value, unit, isSelected = false, onSelect }) => {
  return (
    <CardWrapper isSelected={isSelected} onClick={onSelect}>
      {icon && <Icon src={icon} alt={label} />}
      <Label>{label}</Label>
      <Value>
        {value}
        <Unit>{unit}</Unit>
      </Value>
    </CardWrapper>
  );
};

// カードのスタイル定義
const CardWrapper = styled.div<{ isSelected: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 200px;
  padding: 16px;
  border: 2px solid ${({ isSelected }) => (isSelected ? '#007bff' : '#e0e0e0')};
  border-radius: 8px;
  cursor: pointer;
  transition: border-color 0.3s ease;

  &:hover {
    border-color: #007bff;
  }

  @media (max-width: 600px) {
    max-width: 100%;
  }
`;

const Icon = styled.img`
  width: 48px;
  height: 48px;
  margin-bottom: 8px;
`;

const Label = styled.div`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 4px;
`;

const Value = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

const Unit = styled.span`
  font-size: 14px;
  margin-left: 4px;
`;

// サンプルデータ
const sampleData = [
  {
    icon: 'https://example.com/icon1.png',
    label: '電子決済状況',
    value: '完了',
    unit: '',
  },
  {
    label: '決裁中',
    value: '伝票削除',
    unit: '',
  },
  {
    label: '未連携',
    value: '木運搬',
    unit: '',
  },
  {
    label: '運搬対象外',
    value: '対象',
    unit: '',
  },
];

// サンプル表示用コンポーネント
const CardList: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = React.useState<number | null>(null);

  const handleCardSelect = (index: number) => {
    setSelectedIndex(index);
  };

  return (
    <CardListWrapper>
      {sampleData.map((data, index) => (
        <Card
          key={index}
          icon={data.icon}
          label={data.label}
          value={data.value}
          unit={data.unit}
          isSelected={selectedIndex === index}
          onSelect={() => handleCardSelect(index)}
        />
      ))}
    </CardListWrapper>
  );
};

const CardListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`;

export default CardList;