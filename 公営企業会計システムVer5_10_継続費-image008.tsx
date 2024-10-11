import React from 'react';
import styled from 'styled-components';

type Props = {
  title: string;
  date: string;
  items: {
    label: string;
    value: string;
  }[];
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  font-family: sans-serif;
`;

const Title = styled.h2`
  margin-bottom: 10px;
`;

const Date = styled.p`
  color: #999;
  margin-bottom: 20px;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 300px;
  margin-bottom: 10px;
`;

const Label = styled.span`
  font-weight: bold;
`;

const Value = styled.span``;

const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  max-width: 300px;
  margin-top: 20px;

  button {
    margin-left: 10px;
  }
`;

const ContinuingRegistrationDetails: React.FC<Props> = ({ title, date, items }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Date>{date}</Date>
      {items.map(({ label, value }, index) => (
        <Row key={index}>
          <Label>{label}</Label>
          <Value>{value}</Value>
        </Row>
      ))}
      <Footer>
        <button>CSV出力</button>
        <button>クリア</button>
        <button>終了</button>
      </Footer>
    </Wrapper>
  );
};

// サンプルデータを使用した表示例
const App: React.FC = () => {
  const sampleData = {
    title: '継続費に関する調書',
    date: '令和29年09月19日',
    items: [
      { label: '事業科目', value: '0000' },
      { label: '事業科目', value: '9999' },
    ],
  };

  return <ContinuingRegistrationDetails {...sampleData} />;
};

export default App;