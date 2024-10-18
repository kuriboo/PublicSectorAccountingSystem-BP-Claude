import React from 'react';
import styled from '@emotion/styled';

type InputSectionProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
};

const InputSection: React.FC<InputSectionProps> = ({ label, value, onChange }) => {
  return (
    <InputSectionWrapper>
      <Label>{label}</Label>
      <Input type="text" value={value} onChange={(e) => onChange(e.target.value)} />
    </InputSectionWrapper>
  );
};

type RadioSectionProps = {
  options: { label: string; value: string }[];
  value: string;
  onChange: (value: string) => void;
};

const RadioSection: React.FC<RadioSectionProps> = ({ options, value, onChange }) => {
  return (
    <RadioSectionWrapper>
      {options.map((option) => (
        <RadioItem key={option.value}>
          <RadioInput
            type="radio"
            id={option.value}
            value={option.value}
            checked={value === option.value}
            onChange={(e) => onChange(e.target.value)}
          />
          <RadioLabel htmlFor={option.value}>{option.label}</RadioLabel>
        </RadioItem>
      ))}
    </RadioSectionWrapper>
  );
};

type EntryFormProps = {
  onSubmit: (values: { [key: string]: string }) => void;
};

const EntryForm: React.FC<EntryFormProps> = ({ onSubmit }) => {
  const [inputValue, setInputValue] = React.useState('');
  const [radioValue, setRadioValue] = React.useState('');

  const handleSubmit = () => {
    onSubmit({
      input: inputValue,
      radio: radioValue,
    });
  };

  return (
    <FormWrapper>
      <Title>入出庫明細表作成</Title>
      <InputSection label="入出庫年月" value={inputValue} onChange={setInputValue} />
      <RadioSection
        options={[
          { label: '所属別', value: '所属別' },
          { label: '全体', value: '全体' },
          { label: '保管場所別', value: '保管場所別' },
        ]}
        value={radioValue}
        onChange={setRadioValue}
      />
      <ButtonWrapper>
        <Button onClick={handleSubmit}>OK</Button>
        <Button>クリア</Button>
        <Button>終了</Button>
      </ButtonWrapper>
    </FormWrapper>
  );
};

// Usage example
const App: React.FC = () => {
  const handleSubmit = (values: { [key: string]: string }) => {
    console.log(values);
  };

  return <EntryForm onSubmit={handleSubmit} />;
};

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f0f0f0;
`;

const Title = styled.h2`
  margin-bottom: 20px;
`;

const InputSectionWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const Label = styled.label`
  margin-right: 10px;
`;

const Input = styled.input`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const RadioSectionWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const RadioItem = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
`;

const RadioInput = styled.input`
  margin-right: 5px;
`;

const RadioLabel = styled.label``;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  padding: 10px 20px;
  margin: 0 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export default App;