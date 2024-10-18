import React from 'react';
import styled from '@emotion/styled';

interface PasswordPolicyMasterProps {
  validity: number;
  complexity: number;
  warningDays: number;
  expiresIn: number;
}

const Container = styled.div`
  font-family: Arial, sans-serif;
  padding: 20px;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 300px;
  margin: 0 auto;

  @media (max-width: 480px) {
    width: 100%;
  }
`;

const Row = styled.div`
  margin-bottom: 10px;
`;

const Label = styled.span`
  display: inline-block;
  width: 100px;
  font-weight: bold;
`;

const Value = styled.span`
  display: inline-block;
  width: 50px;
`;

const Text = styled.div`
  margin-left: 100px;
  font-size: 0.8em;
`;

const PasswordPolicyMaster: React.FC<PasswordPolicyMasterProps> = ({
  validity,
  complexity,
  warningDays,
  expiresIn,
}) => {
  return (
    <Container>
      <Row>
        <Label>有効期限</Label>
        <Value>{validity}</Value>
        <Text>日間</Text>
      </Row>
      <Row>
        <Label>変更催促</Label>
        <Value>{complexity}</Value>
        <Text>日前</Text>
      </Row>
      <Row>
        <Label>複雑さ</Label>
        <Text>半角英字と数値の混合を必須とする。</Text>
      </Row>
      <Row>
        <Label>桁数</Label> 
        <Value>{expiresIn}</Value>
        <Text>桁以上</Text>
      </Row>
    </Container>
  );
};

// Usage example
const App: React.FC = () => {
  return (
    <div>
      <h1>Password Policy Master</h1>
      <PasswordPolicyMaster validity={5} complexity={0} warningDays={0} expiresIn={5} />
    </div>
  );
};

export default App;