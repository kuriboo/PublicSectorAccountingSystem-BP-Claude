import React from 'react';
import styled from '@emotion/styled';

type DivisionInputProps = {
  code: string;
  name: string;
  onChange: (value: string) => void;
};

const DivisionInput: React.FC<DivisionInputProps> = ({ code, name, onChange }) => {
  return (
    <InputContainer>
      <Input type="text" value={code} onChange={(e) => onChange(e.target.value)} />
      <Label>{name}</Label>
    </InputContainer>
  );
};

type SmallDivisionFormProps = {
  divisions: Array<{ code: string; name: string }>;
  onChange: (index: number, value: string) => void;
};

const SmallDivisionForm: React.FC<SmallDivisionFormProps> = ({ divisions, onChange }) => {
  return (
    <Container>
      <Title>小分類</Title>
      {divisions.map((division, index) => (
        <DivisionInput
          key={index}
          code={division.code}
          name={division.name}
          onChange={(value) => onChange(index, value)}
        />
      ))}
    </Container>
  );
};

const Container = styled.div`
  background-color: #f0f0f0;
  padding: 16px;
  border-radius: 4px;
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 8px;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

const Input = styled.input`
  width: 60px;
  padding: 4px;
  margin-right: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

const Label = styled.div`
  font-size: 14px;
`;

// Usage example
const App: React.FC = () => {
  const [divisions, setDivisions] = React.useState([
    { code: '001', name: '単価性買小分類' },
    { code: '002', name: '単価性買中分類' },
  ]);

  const handleChange = (index: number, value: string) => {
    const newDivisions = [...divisions];
    newDivisions[index].code = value;
    setDivisions(newDivisions);
  };

  return (
    <div>
      <h1>単価性買小分類設定</h1>
      <SmallDivisionForm divisions={divisions} onChange={handleChange} />
    </div>
  );
};

export default App;