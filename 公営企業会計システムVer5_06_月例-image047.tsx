import React from 'react';
import styled from '@emotion/styled';

type ContractType = '振替分' | '調定分' | '支払分';

interface EntryFormProps {
  contractTypes: ContractType[];
  startDate: string;
  endDate: string;
  onChangeContractType: (selectedTypes: ContractType[]) => void;
  onChangeDateRange: (startDate: string, endDate: string) => void;
}

const EntryForm: React.FC<EntryFormProps> = ({
  contractTypes,
  startDate,
  endDate,
  onChangeContractType,
  onChangeDateRange,
}) => {
  // Contract type checkbox change handler
  const handleContractTypeChange = (type: ContractType) => {
    const selectedTypes = contractTypes.includes(type)
      ? contractTypes.filter((t) => t !== type)
      : [...contractTypes, type];
    onChangeContractType(selectedTypes);
  };

  // Date range change handler
  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === 'startDate') {
      onChangeDateRange(value, endDate);
    } else if (name === 'endDate') {
      onChangeDateRange(startDate, value);
    }
  };

  return (
    <Container>
      <Title>仕訳帳</Title>
      <FormGroup>
        <Label>範囲指定</Label>
        <CheckboxGroup>
          <Checkbox
            type="checkbox"
            checked={contractTypes.includes('振替分')}
            onChange={() => handleContractTypeChange('振替分')}
          />
          <span>振替分</span>
          <Checkbox
            type="checkbox"
            checked={contractTypes.includes('調定分')}
            onChange={() => handleContractTypeChange('調定分')}
          />
          <span>調定分</span>
          <Checkbox
            type="checkbox"
            checked={contractTypes.includes('支払分')}
            onChange={() => handleContractTypeChange('支払分')}
          />
          <span>支払分</span>
        </CheckboxGroup>
        <DateRangeInput>
          <span>日付</span>
          <input
            type="date"
            name="startDate"
            value={startDate}
            onChange={handleDateChange}
          />
          <span>〜</span>
          <input
            type="date"
            name="endDate"
            value={endDate}
            onChange={handleDateChange}
          />
        </DateRangeInput>
      </FormGroup>
      <ButtonGroup>
        <Button>OK</Button>
        <Button>クリア</Button>
        <Button primary>終了</Button>
      </ButtonGroup>
    </Container>
  );
};

// Styled components
const Container = styled.div`
  padding: 16px;
  background-color: #f0f0f0;
`;

const Title = styled.h2`
  margin-top: 0;
`;

const FormGroup = styled.div`
  margin-bottom: 16px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
`;

const CheckboxGroup = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;

  span {
    margin-left: 4px;
  }
`;

const Checkbox = styled.input`
  margin-right: 8px;
`;

const DateRangeInput = styled.div`
  display: flex;
  align-items: center;

  span {
    margin: 0 8px;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Button = styled.button<{ primary?: boolean }>`
  padding: 8px 16px;
  margin-left: 8px;
  background-color: ${({ primary }) => (primary ? '#007bff' : '#fff')};
  color: ${({ primary }) => (primary ? '#fff' : '#000')};
  border: 1px solid ${({ primary }) => (primary ? '#007bff' : '#ccc')};
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: ${({ primary }) => (primary ? '#0056b3' : '#f0f0f0')};
  }
`;

// Usage example
const App: React.FC = () => {
  const [selectedContractTypes, setSelectedContractTypes] = React.useState<
    ContractType[]
  >([]);
  const [startDate, setStartDate] = React.useState('2022-12-06');
  const [endDate, setEndDate] = React.useState('2022-12-06');

  const handleContractTypeChange = (selectedTypes: ContractType[]) => {
    setSelectedContractTypes(selectedTypes);
  };

  const handleDateRangeChange = (start: string, end: string) => {
    setStartDate(start);
    setEndDate(end);
  };

  return (
    <EntryForm
      contractTypes={selectedContractTypes}
      startDate={startDate}
      endDate={endDate}
      onChangeContractType={handleContractTypeChange}
      onChangeDateRange={handleDateRangeChange}
    />
  );
};

export default App;