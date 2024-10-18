import React from 'react';
import styled from '@emotion/styled';

interface MaterialInputProps {
  label: string;
  value: number;
  unit: string;
  onChange: (value: number) => void;
}

const MaterialInput: React.FC<MaterialInputProps> = ({ label, value, unit, onChange }) => {
  // 値が入力されていない場合は0を設定
  const inputValue = value || 0;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.target.value, 10);
    onChange(newValue);
  };

  return (
    <Container>
      <Label>{label}</Label>
      <InputContainer>
        <Input type="number" value={inputValue} onChange={handleChange} />
        <Unit>{unit}</Unit>
      </InputContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

const Label = styled.label`
  width: 120px;
  font-size: 14px;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  width: 80px;
  padding: 4px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  text-align: right;
`;

const Unit = styled.span`
  margin-left: 8px;
  font-size: 14px;
`;

// 使用例
const App: React.FC = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (newValue: number) => {
    setValue(newValue);
  };

  return (
    <div>
      <MaterialInput
        label="工事台帳年度"
        value={value}
        unit="年度"
        onChange={handleChange}
      />
      {/* 他の入力欄も同様に追加 */}
    </div>
  );
};

export default App;