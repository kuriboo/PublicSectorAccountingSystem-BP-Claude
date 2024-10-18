import React from 'react';
import styled from '@emotion/styled';

type BillingPeriodProps = {
  startDate?: string;
  endDate?: string;
  billingAmount?: number;
};

const BillingPeriod: React.FC<BillingPeriodProps> = ({
  startDate = '',
  endDate = '',
  billingAmount = 0,
}) => {
  return (
    <Container>
      <Title>範囲指定</Title>
      <PeriodInputs>
        <PeriodInput>
          <PeriodLabel>収納日</PeriodLabel>
          <DateInput type="text" defaultValue={startDate} />
          <Separator>〜</Separator>
          <DateInput type="text" defaultValue={endDate} />
        </PeriodInput>
        <PeriodInput>
          <PeriodLabel>所属</PeriodLabel>
          <NumberInput type="text" defaultValue={billingAmount} />
          <Separator>〜</Separator>
          <NumberInput type="text" defaultValue={9999999} />
        </PeriodInput>
      </PeriodInputs>
    </Container>
  );
};

const Container = styled.div`
  background-color: #f0f0f0;
  padding: 16px;
  border-radius: 4px;
`;

const Title = styled.h3`
  margin: 0 0 8px;
`;

const PeriodInputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const PeriodInput = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const PeriodLabel = styled.span`
  width: 60px;
`;

const DateInput = styled.input`
  padding: 4px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100px;
`;

const NumberInput = styled.input`
  padding: 4px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 80px;
`;

const Separator = styled.span`
  margin: 0 4px;
`;

// Example usage
const App: React.FC = () => {
  return (
    <div>
      <h2>Billing Period Example</h2>
      <BillingPeriod
        startDate="2029年06月21日"
        endDate="2029年08月31日"
        billingAmount={0}
      />
    </div>
  );
};

export default App;