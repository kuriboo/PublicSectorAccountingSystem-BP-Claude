import React from 'react';
import styled from '@emotion/styled';

type SubscriptionListProps = {
  title: string;
  fromDate: string;
  toDate: string;
};

const SubscriptionList: React.FC<SubscriptionListProps> = ({ title, fromDate, toDate }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <DateRange>
        <DateInput value={fromDate} readOnly />
        <Separator>~</Separator>
        <DateInput value={toDate} readOnly />
      </DateRange>
      <ButtonGroup>
        <Button>OK</Button>
        <Button>クリア</Button>
        <Button>終了</Button>
      </ButtonGroup>
    </Container>
  );
};

// Styled components
const Container = styled.div`
  background-color: #f0f0f0;
  padding: 16px;
  border-radius: 4px;
  width: 300px;
`;

const Title = styled.h2`
  margin: 0 0 16px;
  font-size: 18px;
`;

const DateRange = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

const DateInput = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
  width: 120px;
`;

const Separator = styled.span`
  margin: 0 8px;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Button = styled.button`
  padding: 8px 16px;
  margin-left: 8px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

// Usage example
const App: React.FC = () => {
  return (
    <SubscriptionList
      title="支払分割指示マスタリスト作成"
      fromDate="0000000000"
      toDate="9999999999999"
    />
  );
};

export default App;