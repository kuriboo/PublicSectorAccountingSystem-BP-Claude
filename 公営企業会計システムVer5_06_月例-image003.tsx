import React from 'react';
import styled from 'styled-components';

type InputData = {
  title: string;
  value: string;
  unit: string;
  taxIncluded?: boolean;
};

type TaxIncludedProps = {
  data: InputData[];
};

// スタイリング用のコンポーネント
const Container = styled.div`
  font-family: Arial, sans-serif;
  background-color: #f0f0f0;
  padding: 16px;
  border-radius: 8px;
  width: 300px;
  @media (max-width: 480px) {
    width: 100%;
  }
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 8px;
`;

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 4px;
`;

const ItemTitle = styled.div`
  font-size: 14px;
`;

const ItemValue = styled.div`
  font-size: 14px;
  font-weight: bold;
`;

const Divider = styled.hr`
  border: none;
  border-top: 1px solid #ccc;
  margin: 8px 0;
`;

const TaxIncluded: React.FC<TaxIncludedProps> = ({ data }) => {
  return (
    <Container>
      {data.map((item, index) => (
        <React.Fragment key={index}>
          <Item>
            <ItemTitle>{item.title}</ItemTitle>
            <ItemValue>
              {item.value} {item.unit}
            </ItemValue>
          </Item>
          {item.taxIncluded && <ItemTitle>税目検索</ItemTitle>}
          {index < data.length - 1 && <Divider />}
        </React.Fragment>
      ))}
    </Container>
  );
};

// サンプルデータ
const sampleData: InputData[] = [
  { title: '借方', value: '002010211', unit: '記事・備品統品' },
  { value: '0.00', unit: '自動車用消耗品', taxIncluded: true },
  { value: '0.00', unit: '自動車用備品' },
];

// 使用例
const App: React.FC = () => {
  return (
    <div>
      <Title>振替入力明細画面</Title>
      <TaxIncluded data={sampleData} />
    </div>
  );
};

export default App;