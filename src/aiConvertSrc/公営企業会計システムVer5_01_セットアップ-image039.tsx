import React from 'react';
import styled from '@emotion/styled';

type FormProps = {
  title: string;
  fiscalYearOptions: string[];
  defaultFiscalYear: string;
  onSubmit: (data: { fiscalYear: string; range: string }) => void;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  padding: 20px;
`;

const Title = styled.h2`
  font-size: 18px;
  margin: 0;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Label = styled.label`
  font-size: 14px;
`;

const Select = styled.select`
  font-size: 14px;
  padding: 5px;
`;

const Input = styled.input`
  font-size: 14px;
  padding: 5px;
  width: 150px;
`;

const SubmitButton = styled.button`
  font-size: 14px;
  padding: 5px 10px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

const ReservationForm: React.FC<FormProps> = ({
  title,
  fiscalYearOptions,
  defaultFiscalYear,
  onSubmit,
}) => {
  const [fiscalYear, setFiscalYear] = React.useState(defaultFiscalYear);
  const [range, setRange] = React.useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ fiscalYear, range });
  };

  return (
    <Container>
      <Title>{title}</Title>
      <Row>
        <Label>予算編成区分</Label>
        <Select
          value={fiscalYear}
          onChange={(e) => setFiscalYear(e.target.value)}
        >
          {fiscalYearOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </Select>
      </Row>
      <Row>
        <Label>範囲指定</Label>
        <Input
          type="text"
          value={range}
          onChange={(e) => setRange(e.target.value)}
          placeholder="予算科目 ~ 予算科目"
        />
      </Row>
      <SubmitButton onClick={handleSubmit}>OK</SubmitButton>
    </Container>
  );
};

// Usage example
const App: React.FC = () => {
  const handleSubmit = (data: { fiscalYear: string; range: string }) => {
    console.log('Submitted data:', data);
  };

  return (
    <ReservationForm
      title="予算仕訳構成比率マスタリスト作成"
      fiscalYearOptions={['当初予算', '修正予算']}
      defaultFiscalYear="当初予算"
      onSubmit={handleSubmit}
    />
  );
};

export default App;