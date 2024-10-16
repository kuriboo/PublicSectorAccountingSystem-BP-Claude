import React from 'react';
import styled from 'styled-components';

// 工事名場所マスタリストコンポーネントのプロパティ型定義
type ConstructionLocationMasterListProps = {
  range: {
    from: string;
    to: string;
  };
};

// 工事名場所マスタリストコンポーネント
const ConstructionLocationMasterList: React.FC<ConstructionLocationMasterListProps> = ({ range }) => {
  return (
    <Container>
      <Title>工事名場所マスタリスト作成</Title>
      <RangeInputContainer>
        <RangeInput value={range.from} readOnly />
        <RangeSeparator>〜</RangeSeparator>
        <RangeInput value={range.to} readOnly />
      </RangeInputContainer>
      <ButtonContainer>
        <Button>OK</Button>
        <Button>クリア</Button>
        <Button>終了</Button>
      </ButtonContainer>
    </Container>
  );
};

// 使用例
const SampleData: ConstructionLocationMasterListProps = {
  range: {
    from: '000000',
    to: '999999',
  },
};

const App: React.FC = () => {
  return (
    <div>
      <h1>工事名場所マスタリストサンプル</h1>
      <ConstructionLocationMasterList {...SampleData} />
    </div>
  );
};

export default App;

// スタイリング
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  margin-bottom: 20px;
  font-size: 24px;
  color: #333;
`;

const RangeInputContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const RangeInput = styled.input`
  width: 100px;
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  text-align: center;
`;

const RangeSeparator = styled.span`
  margin: 0 10px;
  font-size: 18px;
  color: #666;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  padding: 10px 20px;
  margin: 0 10px;
  font-size: 16px;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;