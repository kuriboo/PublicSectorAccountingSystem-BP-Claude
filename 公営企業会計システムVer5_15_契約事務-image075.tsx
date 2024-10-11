import React from 'react';
import styled from '@emotion/styled';

type Division = {
  code: string;
  name: string;
};

type Props = {
  title: string;
  divisions: Division[];
  fromDate: string;
  toDate: string;
  onFromDateChange: (date: string) => void;
  onToDateChange: (date: string) => void;
  onDivisionChange: (division: Division) => void;
  onSubmit: () => void;
  onCancel: () => void;
  onClear: () => void;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const Title = styled.h2`
  margin-bottom: 20px;
  font-size: 24px;
  color: #333;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    margin-bottom: 0;
  }
`;

const Label = styled.label`
  margin-bottom: 10px;
  font-size: 16px;
  color: #555;

  @media (min-width: 768px) {
    margin-right: 10px;
    margin-bottom: 0;
  }
`;

const Select = styled.select`
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Input = styled.input`
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 8px 16px;
  font-size: 16px;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-left: 10px;

  &:hover {
    background-color: #0056b3;
  }
`;

const SalesFilterForm: React.FC<Props> = ({
  title,
  divisions,
  fromDate,
  toDate,
  onFromDateChange,
  onToDateChange,
  onDivisionChange,
  onSubmit,
  onCancel,
  onClear,
}) => {
  return (
    <Container>
      <Title>{title}</Title>
      <FormGroup>
        <Label>業種</Label>
        <Select
          defaultValue={divisions[0]?.code || ''}
          onChange={(e) =>
            onDivisionChange(
              divisions.find((d) => d.code === e.target.value) ||
                divisions[0]
            )
          }
        >
          {divisions.map((d) => (
            <option key={d.code} value={d.code}>
              {d.name}
            </option>
          ))}
        </Select>
      </FormGroup>
      <FormGroup>
        <Label>対象期間</Label>
        <Input
          type="date"
          value={fromDate}
          onChange={(e) => onFromDateChange(e.target.value)}
        />
        <span>〜</span>
        <Input
          type="date"
          value={toDate}
          onChange={(e) => onToDateChange(e.target.value)}
        />
      </FormGroup>
      <ButtonGroup>
        <Button onClick={onSubmit}>検索</Button>
        <Button onClick={onClear}>クリア</Button>
        <Button onClick={onCancel}>終了</Button>
      </ButtonGroup>
    </Container>
  );
};

// Usage example
const divisions: Division[] = [
  { code: '001', name: '土木' },
  { code: '002', name: '建築' },
  { code: '003', name: '大工工事' },
];

const ExampleUsage: React.FC = () => {
  const [fromDate, setFromDate] = React.useState('');
  const [toDate, setToDate] = React.useState('');
  const [selectedDivision, setSelectedDivision] =
    React.useState<Division>(divisions[0]);

  const handleSubmit = () => {
    console.log('Submitted:', {
      fromDate,
      toDate,
      division: selectedDivision,
    });
  };

  const handleClear = () => {
    setFromDate('');
    setToDate('');
    setSelectedDivision(divisions[0]);
  };

  return (
    <SalesFilterForm
      title="業者別指名一覧表"
      divisions={divisions}
      fromDate={fromDate}
      toDate={toDate}
      onFromDateChange={setFromDate}
      onToDateChange={setToDate}
      onDivisionChange={setSelectedDivision}
      onSubmit={handleSubmit}
      onCancel={() => console.log('Cancelled')}
      onClear={handleClear}
    />
  );
};

export default SalesFilterForm;