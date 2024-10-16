import React from 'react';
import styled from 'styled-components';

type LoanDetailProps = {
  date: string;
  amount: number;
};

const LoanDetail: React.FC<LoanDetailProps> = ({ date, amount }) => {
  return (
    <Container>
      <Title>月次貸借対照表作成</Title>
      <DetailRow>
        <Label>作成日付</Label>
        <Value>{date}</Value>
      </DetailRow>
      <DetailRow>
        <Label>集計日時</Label>
        <Value>{amount.toLocaleString()}円 14時40分</Value>
      </DetailRow>
    </Container>
  );
};

// Styled components
const Container = styled.div`
  background-color: #f0f0f0;
  padding: 16px;
  border-radius: 4px;
`;

const Title = styled.h2`
  font-size: 18px;
  margin-bottom: 16px;
`;

const DetailRow = styled.div`
  display: flex;
  margin-bottom: 8px;
`;

const Label = styled.div`
  width: 100px;
  font-weight: bold;
`;

const Value = styled.div`
  flex: 1;
`;

// Usage example
const LoanDetailExample = () => {
  return (
    <div>
      <h1>Loan Detail Example</h1>
      <LoanDetail date="平成29年09月04日" amount={29} />
    </div>
  );
};

export default LoanDetailExample;