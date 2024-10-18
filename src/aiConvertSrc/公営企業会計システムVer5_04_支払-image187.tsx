// AmountDisplay.tsx
import React from 'react';
import styled from 'styled-components';

type AmountDisplayProps = {
  title: string;
  date: string;
  amount: number;
};

const AmountDisplay: React.FC<AmountDisplayProps> = ({ title, date, amount }) => {
  // 金額の表示形式を整形
  const formattedAmount = amount.toLocaleString(undefined, {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  return (
    <Container>
      <Title>{title}</Title>
      <DateAmount>
        <Date>{date}</Date>
        <Amount negative={amount < 0}>{formattedAmount}</Amount>
      </DateAmount>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 16px;
  border-bottom: 1px solid #ccc;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Title = styled.div`
  font-weight: bold;
`;

const DateAmount = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-end;
  }
`;

const Date = styled.div`
  margin-right: 16px;
  color: #666;

  @media (max-width: 480px) {
    margin-right: 0;
    margin-bottom: 4px;
  }
`;

const Amount = styled.div<{ negative: boolean }>`
  color: ${({ negative }) => (negative ? 'red' : 'inherit')};
`;

// サンプルデータを使用した使用例
const SampleUsage: React.FC = () => {
  const data = [
    { title: '変更日', date: '29/04/11', amount: -100000 },
    { title: '完了日', date: '29/04/11', amount: -300000 },
  ];

  return (
    <div>
      {data.map((item, index) => (
        <AmountDisplay
          key={index}
          title={item.title}
          date={item.date}
          amount={item.amount}
        />
      ))}
    </div>
  );
};

export default SampleUsage;