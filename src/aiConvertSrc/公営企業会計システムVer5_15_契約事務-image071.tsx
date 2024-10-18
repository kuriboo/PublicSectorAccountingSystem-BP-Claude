import React from 'react';
import styled from '@emotion/styled';

interface CompanyInfoFormProps {
  company: string;
  name: string;
  fiscalYear: number;
  outputRange: string;
  onCompanyChange: (company: string) => void;
  onNameChange: (name: string) => void;
  onFiscalYearChange: (fiscalYear: number) => void;
  onOutputRangeChange: (outputRange: string) => void;
  onSubmit: () => void;
  onCancel: () => void;
  onClear: () => void;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 5px;
  width: 100%;
  max-width: 400px;

  @media (max-width: 600px) {
    max-width: 100%;
  }
`;

const Row = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  flex: 1;
`;

const Label = styled.label`
  font-weight: bold;
`;

const Input = styled.input`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
  width: 100%;
`;

const Select = styled.select`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
  width: 100%;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
`;

const Button = styled.button`
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 3px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const CompanyInfoForm: React.FC<CompanyInfoFormProps> = ({
  company,
  name,
  fiscalYear,
  outputRange,
  onCompanyChange,
  onNameChange,
  onFiscalYearChange,
  onOutputRangeChange,
  onSubmit,
  onCancel,
  onClear,
}) => {
  return (
    <Container>
      <Row>
        <InputGroup>
          <Label htmlFor="company">会社名</Label>
          <Select id="company" value={company} onChange={(e) => onCompanyChange(e.target.value)}>
            <option value="有">有</option>
            <option value="無">無</option>
          </Select>
        </InputGroup>
        <InputGroup>
          <Label htmlFor="fiscalYear">年度</Label>
          <Input
            type="number"
            id="fiscalYear"
            value={fiscalYear}
            onChange={(e) => onFiscalYearChange(Number(e.target.value))}
          />
        </InputGroup>
      </Row>
      <Row>
        <InputGroup>
          <Label>対象者</Label>
          <Input
            type="radio"
            id="target-on"
            name="target"
            checked={name === '有'}
            onChange={() => onNameChange('有')}
          />
          <Label htmlFor="target-on">有</Label>
          <Input
            type="radio"
            id="target-off"
            name="target"
            checked={name === '無'}
            onChange={() => onNameChange('無')}
          />
          <Label htmlFor="target-off">無</Label>
        </InputGroup>
      </Row>
      <Row>
        <InputGroup>
          <Label htmlFor="outputFrom">受付番号</Label>
          <Input
            type="number"
            id="outputFrom"
            value={outputRange.split('~')[0]}
            onChange={(e) => onOutputRangeChange(`${e.target.value}~${outputRange.split('~')[1]}`)}
          />
        </InputGroup>
        <InputGroup>
          <Label htmlFor="outputTo">~</Label>
          <Input
            type="number"
            id="outputTo"
            value={outputRange.split('~')[1]}
            onChange={(e) => onOutputRangeChange(`${outputRange.split('~')[0]}~${e.target.value}`)}
          />
        </InputGroup>
      </Row>
      <ButtonGroup>
        <Button onClick={onSubmit}>OK</Button>
        <Button onClick={onCancel}>クリア</Button>
        <Button onClick={onClear}>終了</Button>
      </ButtonGroup>
    </Container>
  );
};

// Usage example
const App: React.FC = () => {
  const [company, setCompany] = React.useState('有');
  const [name, setName] = React.useState('有');
  const [fiscalYear, setFiscalYear] = React.useState(29);
  const [outputRange, setOutputRange] = React.useState('00000000~99999999');

  const handleSubmit = () => {
    // Handle form submission
    console.log('Form submitted');
  };

  const handleCancel = () => {
    // Handle form cancellation
    console.log('Form cancelled');
  };

  const handleClear = () => {
    // Handle form clearing
    setCompany('有');
    setName('有');
    setFiscalYear(29);
    setOutputRange('00000000~99999999');
  };

  return (
    <CompanyInfoForm
      company={company}
      name={name}
      fiscalYear={fiscalYear}
      outputRange={outputRange}
      onCompanyChange={setCompany}
      onNameChange={setName}
      onFiscalYearChange={setFiscalYear}
      onOutputRangeChange={setOutputRange}
      onSubmit={handleSubmit}
      onCancel={handleCancel}
      onClear={handleClear}
    />
  );
};

export default App;