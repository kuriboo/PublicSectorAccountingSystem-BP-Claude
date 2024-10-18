import React from 'react';
import styled from 'styled-components';

type PrinterRequirementSelectorProps = {
  onSubmit: (selectedOption: string) => void;
};

const PrinterRequirementSelector: React.FC<PrinterRequirementSelectorProps> = ({ onSubmit }) => {
  const [selectedOption, setSelectedOption] = React.useState('');

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = () => {
    if (selectedOption) {
      onSubmit(selectedOption);
    }
  };

  return (
    <Container>
      <Title>印刷対象帳票名</Title>
      <OptionList>
        <OptionItem>
          <RadioButton
            type="radio"
            value="負担行為何兼調書(その他 前渡)"
            checked={selectedOption === '負担行為何兼調書(その他 前渡)'}
            onChange={handleOptionChange}
          />
          <OptionLabel>負担行為何兼調書(その他 前渡)</OptionLabel>
        </OptionItem>
        <OptionItem>
          <RadioButton
            type="radio"
            value="精算書(その他 前渡)"
            checked={selectedOption === '精算書(その他 前渡)'}
            onChange={handleOptionChange}
          />
          <OptionLabel>精算書(その他 前渡)</OptionLabel>
        </OptionItem>
        <OptionItem>
          <RadioButton
            type="radio"
            value="支払通知書"
            checked={selectedOption === '支払通知書'}
            onChange={handleOptionChange}
          />
          <OptionLabel>支払通知書</OptionLabel>
        </OptionItem>
      </OptionList>
      <ButtonGroup>
        <SubmitButton onClick={handleSubmit}>OK</SubmitButton>
        <CancelButton>クリア</CancelButton>
        <CancelButton>キャンセル</CancelButton>
      </ButtonGroup>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #f5f5f5;
`;

const Title = styled.h3`
  margin-bottom: 10px;
`;

const OptionList = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 20px;
`;

const OptionItem = styled.li`
  margin-bottom: 10px;
`;

const RadioButton = styled.input`
  margin-right: 5px;
`;

const OptionLabel = styled.label`
  font-size: 16px;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  padding: 10px 20px;
  margin: 0 10px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  @media (max-width: 480px) {
    padding: 8px 16px;
    font-size: 14px;
  }
`;

const SubmitButton = styled(Button)`
  background-color: #007bff;
  color: #fff;

  &:hover {
    background-color: #0056b3;
  }
`;

const CancelButton = styled(Button)`
  background-color: #6c757d;
  color: #fff;

  &:hover {
    background-color: #5a6268;
  }
`;

// Usage example
const App: React.FC = () => {
  const handleSubmit = (selectedOption: string) => {
    console.log('Selected option:', selectedOption);
  };

  return (
    <div>
      <PrinterRequirementSelector onSubmit={handleSubmit} />
    </div>
  );
};

export default App;