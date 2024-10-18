import React from 'react';

import { useState } from 'react';
import styled from 'styled-components';

type Division = '現場説明日' | '入札日';
type Period = {
  startYear: number;
  startMonth: number;
  startDate: number;
  endYear: number;
  endMonth: number;
  endDate: number;
};
type Region = '指名競争入札' | '隠蔽契約';

interface BidFormProps {
  onSubmit: (division: Division, period: Period, region: Region) => void;
}

const BidForm: React.FC<BidFormProps> = ({ onSubmit }) => {
  // State for form fields
  const [division, setDivision] = useState<Division>('現場説明日');
  const [period, setPeriod] = useState<Period>({
    startYear: 0,
    startMonth: 0,
    startDate: 0,
    endYear: 0,
    endMonth: 0,
    endDate: 0,
  });
  const [region, setRegion] = useState<Region>('指名競争入札');

  // Event handlers
  const handleDivisionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDivision(e.target.value as Division);
  };

  const handlePeriodChange = (field: keyof Period, value: number) => {
    setPeriod((prevPeriod) => ({
      ...prevPeriod,
      [field]: value,
    }));
  };

  const handleRegionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setRegion(e.target.value as Region);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(division, period, region);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label>区分:</Label>
        <RadioGroup>
          <RadioLabel>
            <input
              type="radio"
              value="現場説明日"
              checked={division === '現場説明日'}
              onChange={handleDivisionChange}
            />
            現場説明日
          </RadioLabel>
          <RadioLabel>
            <input
              type="radio"
              value="入札日"
              checked={division === '入札日'}
              onChange={handleDivisionChange}
            />
            入札日
          </RadioLabel>
        </RadioGroup>
      </FormGroup>

      <FormGroup>
        <Label>期間:</Label>
        <PeriodGroup>
          <PeriodInput
            type="number"
            value={period.startYear}
            onChange={(e) => handlePeriodChange('startYear', Number(e.target.value))}
          />
          年
          <PeriodInput
            type="number"
            value={period.startMonth}
            onChange={(e) => handlePeriodChange('startMonth', Number(e.target.value))}
          />
          月
          <PeriodInput
            type="number"
            value={period.startDate}
            onChange={(e) => handlePeriodChange('startDate', Number(e.target.value))}
          />
          日 〜
          <PeriodInput
            type="number"
            value={period.endYear}
            onChange={(e) => handlePeriodChange('endYear', Number(e.target.value))}
          />
          年
          <PeriodInput
            type="number"
            value={period.endMonth}
            onChange={(e) => handlePeriodChange('endMonth', Number(e.target.value))}
          />
          月
          <PeriodInput
            type="number"
            value={period.endDate}
            onChange={(e) => handlePeriodChange('endDate', Number(e.target.value))}
          />
          日
        </PeriodGroup>
      </FormGroup>

      <FormGroup>
        <Label>契約区分:</Label>
        <Select value={region} onChange={handleRegionChange}>
          <option value="指名競争入札">指名競争入札</option>
          <option value="隠蔽契約">隠蔽契約</option>
        </Select>
      </FormGroup>

      <Button type="submit">検索</Button>
    </Form>
  );
};

// Example usage
const ExampleUsage: React.FC = () => {
  const handleSubmit = (division: Division, period: Period, region: Region) => {
    console.log('Submitted:', division, period, region);
  };

  return <BidForm onSubmit={handleSubmit} />;
};

// Styled components
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormGroup = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const Label = styled.label`
  margin-right: 10px;
`;

const RadioGroup = styled.div`
  display: flex;
`;

const RadioLabel = styled.label`
  margin-right: 10px;
`;

const PeriodGroup = styled.div`
  display: flex;
  align-items: center;
`;

const PeriodInput = styled.input`
  width: 50px;
  margin: 0 5px;
`;

const Select = styled.select`
  padding: 5px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
`;

export default BidForm;