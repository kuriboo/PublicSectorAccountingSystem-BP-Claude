import React from 'react';
import styled from '@emotion/styled';

type ReservationFormProps = {
  year: number;
  month: number;
  onYearChange: (year: number) => void;
  onMonthChange: (month: number) => void;
  onSubmit: () => void;
  onCancel: () => void;
  onClose: () => void;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  @media (min-width: 768px) {
    width: 400px;
    margin: 0 auto;
  }
`;

const Title = styled.h2`
  margin-bottom: 20px;
  font-size: 24px;
  color: #333;
`;

const FormGroup = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;

const Label = styled.label`
  margin-right: 10px;
  font-size: 16px;
  color: #555;
`;

const Select = styled.select`
  padding: 5px 10px;
  font-size: 16px;
  border-radius: 3px;
  border: 1px solid #ccc;
`;

const Input = styled.input`
  padding: 5px 10px;
  font-size: 16px;
  border-radius: 3px;
  border: 1px solid #ccc;
  width: 100px;
`;

const Radio = styled.input`
  margin-right: 5px;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 3px;
  border: none;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
  margin-right: 10px;
  &:last-child {
    margin-right: 0;
  }
`;

const ReservationForm: React.FC<ReservationFormProps> = ({
  year,
  month,
  onYearChange,
  onMonthChange,
  onSubmit,
  onCancel,
  onClose,
}) => {
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 10 }, (_, i) => currentYear + i);
  const months = Array.from({ length: 12 }, (_, i) => i + 1);

  return (
    <Container>
      <Title>予算配当表</Title>
      <FormGroup>
        <Label>年度</Label>
        <Select value={year} onChange={(e) => onYearChange(Number(e.target.value))}>
          {years.map((y) => (
            <option key={y} value={y}>
              {y}年
            </option>
          ))}
        </Select>
      </FormGroup>
      <FormGroup>
        <Label>予算編成区分</Label>
        <Select>
          <option>当初予算</option>
        </Select>
        <Input type="number" />
        回
      </FormGroup>
      <FormGroup>
        <Label>配当期間</Label>
        <Select value={month} onChange={(e) => onMonthChange(Number(e.target.value))}>
          {months.map((m) => (
            <option key={m} value={m}>
              {m}月
            </option>
          ))}
        </Select>
        ～
        <Select value={month} onChange={(e) => onMonthChange(Number(e.target.value))}>
          {months.map((m) => (
            <option key={m} value={m}>
              {m}月
            </option>
          ))}
        </Select>
      </FormGroup>
      <FormGroup>
        <Label>所属</Label>
        <Radio type="radio" name="affiliation" />
        <Radio type="radio" name="affiliation" />
        明細 
        <Radio type="radio" name="affiliation" />
        明細計
      </FormGroup>
      <FormGroup>
        <Button onClick={onSubmit}>終了</Button>
        <Button onClick={onCancel}>クリア</Button>
        <Button onClick={onClose}>終了</Button>
      </FormGroup>
    </Container>
  );
};



// Usage example
const App: React.FC = () => {
  const handleYearChange = (year: number) => {
    console.log('Selected year:', year);
  };

  const handleMonthChange = (month: number) => {
    console.log('Selected month:', month);
  };

  const handleSubmit = () => {
    console.log('Form submitted');
  };

  const handleCancel = () => {
    console.log('Form canceled');
  };

  const handleClose = () => {
    console.log('Form closed');
  };

  return (
    <ReservationForm
      year={2023}
      month={6}
      onYearChange={handleYearChange}
      onMonthChange={handleMonthChange}
      onSubmit={handleSubmit}
      onCancel={handleCancel}
      onClose={handleClose}
    />
  );
};

export default App;