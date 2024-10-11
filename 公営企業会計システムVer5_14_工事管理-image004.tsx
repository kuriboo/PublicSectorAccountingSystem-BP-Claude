import React from 'react';
import styled from '@emotion/styled';

type MasterMaintenanceProps = {
  items: {
    code: string;
    name: string;
  }[];
  onRegister: () => void;
  onCancel: () => void;
};

const MasterMaintenance: React.FC<MasterMaintenanceProps> = ({ items, onRegister, onCancel }) => {
  const [selectedCode, setSelectedCode] = React.useState('01');
  const [name, setName] = React.useState('');

  const handleCodeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCode(e.target.value);
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onRegister();
  };

  return (
    <Container>
      <Title>工種区分マスタ保守</Title>
      <Form onSubmit={handleSubmit}>
        <Label>
          区分コード
          <Select value={selectedCode} onChange={handleCodeChange}>
            {items.map(item => (
              <option key={item.code} value={item.code}>
                {item.code}
              </option>
            ))}
          </Select>
        </Label>
        <Label>
          区分名称
          <Input type="text" value={name} onChange={handleNameChange} />
        </Label>
        <ButtonContainer>
          <Button type="submit">確定</Button>
          <Button type="button" onClick={onCancel}>
            キャンセル
          </Button>
        </ButtonContainer>
      </Form>
    </Container>
  );
};

const Container = styled.div`
  padding: 16px;
`;

const Title = styled.h2`
  font-size: 18px;
  margin-bottom: 16px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

const Select = styled.select`
  margin-left: 8px;
  padding: 4px;
  font-size: 14px;
`;

const Input = styled.input`
  margin-left: 8px;
  padding: 4px;
  font-size: 14px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 16px;
`;

const Button = styled.button`
  padding: 8px 16px;
  font-size: 14px;
  border: none;
  border-radius: 4px;
  margin-left: 8px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

// Usage example
const App: React.FC = () => {
  const items = [
    { code: '01', name: '配水管布設工事' },
    { code: '02', name: '配水管改良工事' },
    { code: '03', name: '配水管移設工事' },
    // ... more items
  ];

  const handleRegister = () => {
    // Handle registration logic
    console.log('Registered');
  };

  const handleCancel = () => {
    // Handle cancellation logic
    console.log('Cancelled');
  };

  return (
    <MasterMaintenance
      items={items}
      onRegister={handleRegister}
      onCancel={handleCancel}
    />
  );
};

export default App;