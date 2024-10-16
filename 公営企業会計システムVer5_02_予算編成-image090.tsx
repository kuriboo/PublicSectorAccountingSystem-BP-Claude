import React from 'react';
import styled from '@emotion/styled';

interface ConsumptionTaxCalculatorProps {
  initialYear?: number;
  initialDistrict?: string;
  initialRound?: boolean;
  initialTimes?: number;
}

const ConsumptionTaxCalculator: React.FC<ConsumptionTaxCalculatorProps> = ({
  initialYear = new Date().getFullYear(),
  initialDistrict = '東京',
  initialRound = true,
  initialTimes = 1,
}) => {
  const [year, setYear] = React.useState(initialYear);
  const [district, setDistrict] = React.useState(initialDistrict);
  const [round, setRound] = React.useState(initialRound);
  const [times, setTimes] = React.useState(initialTimes);

  const handleYearChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setYear(Number(e.target.value));
  };

  const handleDistrictChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setDistrict(e.target.value);
  };

  const handleRoundChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRound(e.target.checked);
  };

  const handleTimesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTimes(Number(e.target.value));
  };

  return (
    <Container>
      <Title>予算消費税仕訳一覧</Title>
      <Form>
        <FormItem>
          <Label>会計年度</Label>
          <Input type="number" value={year} onChange={handleYearChange} />
          <Label>年度</Label>
        </FormItem>
        <FormItem>
          <Label>予算区分</Label>
          <Select value={district} onChange={handleDistrictChange}>
            <option value="東京">東京</option>
            <option value="大阪">大阪</option>
          </Select>
        </FormItem>
        <FormItem>
          <Label>回数</Label>
          <Input type="number" value={times} onChange={handleTimesChange} />
        </FormItem>
        <FormItem>
          <Label>最終査定値</Label>
          <Input type="checkbox" checked={round} onChange={handleRoundChange} />
          <Label>査定額</Label>
          <Label>1</Label>
          <Label>回</Label>
        </FormItem>
      </Form>
    </Container>
  );
};

// Sample usage
const App: React.FC = () => {
  return (
    <div>
      <h1>Consumption Tax Calculator</h1>
      <ConsumptionTaxCalculator />
    </div>
  );
};

export default App;

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

const Form = styled.div`
  display: grid;
  grid-gap: 16px;
`;

const FormItem = styled.div`
  display: flex;
  align-items: center;
`;

const Label = styled.label`
  margin-right: 8px;
`;

const Input = styled.input`
  padding: 4px;
`;

const Select = styled.select`
  padding: 4px;
`;