import React from 'react';
import styled from '@emotion/styled';

type Props = {
  name: string;
  code: string;
  zipCode: string;
  address: string;
  onConfirm: () => void;
  onCancel: () => void;
};

const Container = styled.div`
  background-color: #f0f0f0;
  padding: 16px;
  border-radius: 4px;
  width: 300px;
  @media (max-width: 480px) {
    width: 100%;
  }
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 16px;
`;

const Label = styled.div`
  font-size: 14px;
  margin-bottom: 4px;
`;

const Value = styled.div`
  font-size: 16px;
  margin-bottom: 16px;
`;

const CodeValue = styled.div`
  font-size: 16px;
  margin-bottom: 8px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Button = styled.button`
  padding: 8px 16px;
  margin-left: 8px;
  font-size: 14px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const CustomerInfo: React.FC<Props> = ({ name, code, zipCode, address, onConfirm, onCancel }) => {
  return (
    <Container>
      <Title>内容設定</Title>
      <Label>名称</Label>
      <Value>{name || '保存年限'}</Value>
      <Label>自由設定項目コード</Label>
      <CodeValue>{code || '00001'}</CodeValue>
      <Label>内容</Label>
      <Value>{address || '7年保存'}</Value>
      <ButtonContainer>
        <Button onClick={onCancel}>キャンセル</Button>
        <Button onClick={onConfirm}>OK</Button>
      </ButtonContainer>
    </Container>
  );
};

// Example usage
const App: React.FC = () => {
  const handleConfirm = () => {
    console.log('Confirmed');
  };

  const handleCancel = () => {
    console.log('Cancelled');
  };

  return (
    <CustomerInfo
      name="保存年限"
      code="00001"
      zipCode="000-0000"
      address="7年保存"
      onConfirm={handleConfirm}
      onCancel={handleCancel}
    />
  );
};

export default App;