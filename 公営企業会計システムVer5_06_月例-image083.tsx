import React from 'react';
import styled from 'styled-components';

interface MonthlyUpdateProps {
  month: number;
  message: string;
}

const MonthlyUpdate: React.FC<MonthlyUpdateProps> = ({ month, message }) => {
  return (
    <Container>
      <Title>現在の端末終了年月</Title>
      <MonthText>{month}月</MonthText>
      <Message>{message}</Message>
    </Container>
  );
};

// Styling
const Container = styled.div`
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 4px;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 18px;
  margin-bottom: 10px;
`;

const MonthText = styled.p`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Message = styled.p`
  font-size: 14px;
`;

// Sample usage
const App: React.FC = () => {
  const sampleData = {
    month: 6,
    message: '※端点終了年月を更新します。\n月次更新後の追加登録はできません。\nご了承者様了解に実行して下さい。',
  };

  return (
    <div>
      <h1>Monthly Update Example</h1>
      <MonthlyUpdate month={sampleData.month} message={sampleData.message} />
    </div>
  );
};

export default App;