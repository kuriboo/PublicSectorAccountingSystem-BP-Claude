import React from 'react';
import styled from '@emotion/styled';

type ReservationItemType = {
  name: string;
  value: string;
  unit?: string;
};

type ReservationMaskPreserveProps = {
  title: string;
  items: ReservationItemType[];
};

const ReservationMaskPreserveContainer = styled.div`
  background-color: #f0f0f0;
  padding: 16px;
  border-radius: 8px;
`;

const Title = styled.h2`
  font-size: 20px;
  margin-bottom: 16px;
`;

const ItemContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const ItemName = styled.div`
  font-weight: bold;
  margin-right: 8px;
`;

const ItemValue = styled.div``;

const ItemUnit = styled.div`
  margin-left: 4px;
  color: #666;
`;

const ReservationMaskPreserve: React.FC<ReservationMaskPreserveProps> = ({ title, items }) => {
  return (
    <ReservationMaskPreserveContainer>
      <Title>{title}</Title>
      <ItemContainer>
        {items.map((item, index) => (
          <ItemWrapper key={index}>
            <ItemName>{item.name}</ItemName>
            <ItemValue>{item.value}</ItemValue>
            {item.unit && <ItemUnit>{item.unit}</ItemUnit>}
          </ItemWrapper>
        ))}
      </ItemContainer>
    </ReservationMaskPreserveContainer>
  );
};

// Usage example
const App: React.FC = () => {
  const sampleData: ReservationMaskPreserveProps = {
    title: '制御マスク保守',
    items: [
      { name: '脱臭電流', value: '1', unit: 'ppm' },
      { name: '脱臭温度', value: '0', unit: '℃' },
      { name: '送風機回転速度', value: '1' },
      { name: '蒸気バルブ', value: '2', unit: '%' },
    ],
  };

  return (
    <div>
      <h1>Reservation Mask Preserve Example</h1>
      <ReservationMaskPreserve {...sampleData} />
    </div>
  );
};

export default App;