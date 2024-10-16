import React from 'react';
import styled from '@emotion/styled';

interface FiscalYearInputProps {
  onSubmit: (fiscalYear: string, month: string) => void;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 300px;
  margin: 0 auto;
`;

const Title = styled.h2`
  margin-bottom: 20px;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const Label = styled.label`
  margin-right: 10px;
`;

const Select = styled.select`
  padding: 5px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const FiscalYearInput: React.FC<FiscalYearInputProps> = ({ onSubmit }) => {
  const [fiscalYear, setFiscalYear] = React.useState('');
  const [month, setMonth] = React.useState('');

  const handleSubmit = () => {
    if (!fiscalYear || !month) {
      alert('Please select both fiscal year and month.');
      return;
    }
    onSubmit(fiscalYear, month);
  };

  return (
    <Container>
      <Title>料金体系別収入状況集計処理</Title>
      <InputContainer>
        <Label>年度:</Label>
        <Select value={fiscalYear} onChange={(e) => setFiscalYear(e.target.value)}>
          <option value="">Select fiscal year</option>
          <option value="2023">2023年09月</option>
          {/* Add more fiscal year options */}
        </Select>
      </InputContainer>
      <InputContainer>
        <Label>月:</Label>
        <Select value={month} onChange={(e) => setMonth(e.target.value)}>
          <option value="">Select month</option>
          <option value="04">04月</option>
          {/* Add more month options */}
        </Select>
      </InputContainer>
      <ButtonContainer>
        <Button onClick={handleSubmit}>OK</Button>
        <Button>クリア</Button>
        <Button>終了</Button>
      </ButtonContainer>
    </Container>
  );
};

// Example usage
const App: React.FC = () => {
  const handleSubmit = (fiscalYear: string, month: string) => {
    console.log(`Selected fiscal year: ${fiscalYear}, month: ${month}`);
    // Perform further actions with the selected values
  };

  return (
    <div>
      <h1>Fiscal Year Input Example</h1>
      <FiscalYearInput onSubmit={handleSubmit} />
    </div>
  );
};

export default App;