// CheckboxWithLabel.tsx
import React from 'react';
import styled from 'styled-components';

type CheckboxWithLabelProps = {
  label: string;
  checked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const CheckboxWithLabel: React.FC<CheckboxWithLabelProps> = ({ label, checked = false, onChange }) => {
  return (
    <Label>
      <Input type="checkbox" checked={checked} onChange={onChange} />
      {label}
    </Label>
  );
};

const Label = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  font-size: 14px;
  user-select: none;
`;

const Input = styled.input`
  margin-right: 8px;
`;

// App.tsx
import React, { useState } from 'react';
import styled from 'styled-components';
import CheckboxWithLabel from './CheckboxWithLabel';

const App: React.FC = () => {
  const [checkedItems, setCheckedItems] = useState<string[]>([]);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;
    setCheckedItems(prevCheckedItems =>
      checked ? [...prevCheckedItems, value] : prevCheckedItems.filter(item => item !== value)
    );
  };

  return (
    <Container>
      <Title>細てん財源表前回参照設定</Title>
      <CheckboxGroup>
        <CheckboxWithLabel label="企業債金額" checked={checkedItems.includes('企業債金額')} onChange={handleCheckboxChange} />
        <CheckboxWithLabel label="出資金金額" checked={checkedItems.includes('出資金金額')} onChange={handleCheckboxChange} />
        <CheckboxWithLabel label="補助金金額" checked={checkedItems.includes('補助金金額')} onChange={handleCheckboxChange} />
        <CheckboxWithLabel label="負担金金額" checked={checkedItems.includes('負担金金額')} onChange={handleCheckboxChange} />
      </CheckboxGroup>
      <ButtonGroup>
        <Button>OK</Button>
        <Button>クリア</Button>
        <Button>キャンセル</Button>
      </ButtonGroup>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #fff;
  max-width: 300px;
`;

const Title = styled.h2`
  margin-bottom: 16px;
  font-size: 18px;
`;

const CheckboxGroup = styled.div`
  display: flex; 
  flex-direction: column;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 16px;
`;

const Button = styled.button`
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: #fff;
  font-size: 14px;
  cursor: pointer;
  
  & + & {
    margin-left: 8px;
  }
`;

export default App;