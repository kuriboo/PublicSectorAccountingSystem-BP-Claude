import React from 'react';
import styled from '@emotion/styled';

interface CheckboxGroupProps {
  label: string;
  options: {
    value: string;
    label: string;
  }[];
  onSelect: (selectedValues: string[]) => void;
}

const CheckboxGroup: React.FC<CheckboxGroupProps> = ({ label, options, onSelect }) => {
  const [selectedValues, setSelectedValues] = React.useState<string[]>([]);

  const handleChange = (value: string) => {
    const newSelectedValues = selectedValues.includes(value)
      ? selectedValues.filter(v => v !== value)
      : [...selectedValues, value];
    setSelectedValues(newSelectedValues);
    onSelect(newSelectedValues);
  };

  return (
    <Container>
      <Label>{label}</Label>
      <OptionsContainer>
        {options.map(option => (
          <Option key={option.value}>
            <Checkbox
              type="checkbox"
              value={option.value}
              checked={selectedValues.includes(option.value)}
              onChange={() => handleChange(option.value)}
            />
            <span>{option.label}</span>
          </Option>
        ))}
      </OptionsContainer>
      <ButtonContainer>
        <Button>OK</Button>
        <Button>クリア</Button>
        <Button>キャンセル</Button>
      </ButtonContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #ccc;
  padding: 16px;
  width: 300px;
`;

const Label = styled.div`
  font-weight: bold;
  margin-bottom: 8px;
`;

const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Option = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 4px;
`;

const Checkbox = styled.input`
  margin-right: 8px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 16px;
`;

const Button = styled.button`
  margin-left: 8px;
  padding: 4px 8px;
`;

// Usage example
const App: React.FC = () => {
  const options = [
    { value: 'option1', label: '調書兼命令書(その他 前渡)' },
    { value: 'option2', label: '精算書(その他 前渡)' },
    { value: 'option3', label: '支払通知書' },
  ];

  const handleSelect = (selectedValues: string[]) => {
    console.log('Selected values:', selectedValues);
  };

  return (
    <div>
      <h1>Checkbox Group Example</h1>
      <CheckboxGroup
        label="印刷対象帳票の選択 (その他前渡)"
        options={options}
        onSelect={handleSelect}
      />
    </div>
  );
};

export default App;