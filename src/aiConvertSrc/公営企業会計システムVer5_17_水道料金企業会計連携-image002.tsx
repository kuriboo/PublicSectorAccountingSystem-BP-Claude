import React from 'react';
import styled from '@emotion/styled';

// カラム1つ分のコンポーネント
type ColumnProps = {
  title: string;
  description: string;
};

const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  text-align: center;

  @media (min-width: 768px) {
    width: 33.33%;
  }
`;

const ColumnIcon = styled.div`
  font-size: 48px;
  margin-bottom: 10px;
`;

const ColumnTitle = styled.h3`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const ColumnDescription = styled.p`
  font-size: 16px;
  color: #666;
`;

const Column: React.FC<ColumnProps> = ({ title, description }) => {
  return (
    <ColumnContainer>
      <ColumnIcon>📌</ColumnIcon>
      <ColumnTitle>{title}</ColumnTitle>
      <ColumnDescription>{description}</ColumnDescription>
    </ColumnContainer>
  );
};

// 3つのカラムを持つコンポーネント
type ThreeColumnProps = {
  columns: ColumnProps[];
};

const ThreeColumnContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 40px 20px;
`;

const ThreeColumn: React.FC<ThreeColumnProps> = ({ columns }) => {
  // カラムデータが3つ以下の場合のみ表示する
  if (columns.length > 3) {
    console.warn('ThreeColumn component supports a maximum of 3 columns.');
    return null;
  }

  return (
    <ThreeColumnContainer>
      {columns.map((column, index) => (
        <Column key={index} title={column.title} description={column.description} />
      ))}
    </ThreeColumnContainer>
  );
};

// サンプルデータと使用例
const sampleColumns: ColumnProps[] = [
  {
    title: 'Column 1',
    description: 'This is the description for column 1.',
  },
  {
    title: 'Column 2',
    description: 'This is the description for column 2.',
  },
  {
    title: 'Column 3',
    description: 'This is the description for column 3.',
  },
];

const App: React.FC = () => {
  return (
    <div>
      <h1>Three Column Component Example</h1>
      <ThreeColumn columns={sampleColumns} />
    </div>
  );
};

export default App;