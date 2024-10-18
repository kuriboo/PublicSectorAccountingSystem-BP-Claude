import React from 'react';
import styled from 'styled-components';

type InsurancePolicyProps = {
  companyName?: string;
  policyNumber?: string;
  effectiveDate?: string;
  status?: '000000' | '999999';
  amount?: string;
  onCancel?: () => void;
  onSubmit?: () => void;
  onEnd?: () => void;
};

const Container = styled.div`
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 8px;
  width: 400px;
  margin: 0 auto;
`;

const Title = styled.h2`
  margin-bottom: 20px;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const Label = styled.label`
  font-weight: bold;
`;

const Value = styled.span``;

const StatusValue = styled(Value)<{ status?: string }>`
  color: ${({ status }) => (status === '000000' ? 'green' : 'red')};
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 8px 16px;
  border-radius: 4px;
  border: none;
  margin-left: 10px;
  cursor: pointer;
`;

const InsurancePolicy: React.FC<InsurancePolicyProps> = ({
  companyName = '管理者予物',
  policyNumber = '',
  effectiveDate = '平成30年06月25日',
  status = '000000',
  amount = '',
  onCancel,
  onSubmit,
  onEnd,
}) => {
  return (
    <Container>
      <Title>在庫表作成</Title>
      <Row>
        <Label>会社区分:</Label>
        <Value>{companyName}</Value>
      </Row>
      <Row>
        <Label>在庫現在日:</Label>
        <Value>{effectiveDate}</Value>
      </Row>
      <Row>
        <Label>保管場所:</Label>
        <Value>{status === '000000' ? '000000' : '999999'}</Value>
      </Row>
      <Row>
        <Label>品番:</Label>
        <Value>{policyNumber}</Value>
      </Row>
      <Row>
        <Label>品番:</Label>
        <StatusValue status={status}>{status}</StatusValue>
      </Row>
      <ButtonContainer>
        <Button onClick={onEnd}>終了</Button>
        <Button onClick={onCancel}>クリア</Button>
        <Button onClick={onSubmit}>OK</Button>
      </ButtonContainer>
    </Container>
  );
};

// Usage example
const App: React.FC = () => {
  return (
    <div>
      <InsurancePolicy
        policyNumber="1234"
        amount="1000000"
        onCancel={() => console.log('Cancelled')}
        onSubmit={() => console.log('Submitted')}
        onEnd={() => console.log('Ended')}
      />
    </div>
  );
};

export default App;