import React from 'react';
import styled from '@emotion/styled';

interface ReportPeriodFormProps {
  defaultPeriod?: string;
  defaultYear?: number;
  defaultMonth?: number;
  defaultDay?: number;
  onSubmit: (period: string, year: number, month: number, day: number) => void;
}

const ReportPeriodForm: React.FC<ReportPeriodFormProps> = ({
  defaultPeriod = '年度',
  defaultYear = new Date().getFullYear(),
  defaultMonth = new Date().getMonth() + 1,
  defaultDay = new Date().getDate(),
  onSubmit,
}) => {
  const [period, setPeriod] = React.useState(defaultPeriod);
  const [year, setYear] = React.useState(defaultYear);
  const [month, setMonth] = React.useState(defaultMonth);
  const [day, setDay] = React.useState(defaultDay);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(period, year, month, day);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormField>
        <Label>取り込み年度</Label>
        <Select value={period} onChange={(e) => setPeriod(e.target.value)}>
          <option value="年度">年度</option>
          <option value="平成29">平成29</option>
        </Select>
      </FormField>
      <FormField>
        <Label>更新年月日</Label>
        <Input
          type="text"
          value={`${year}年${month}月${day}日`}
          onChange={(e) => {
            const [y, m, d] = e.target.value.split(/年|月|日/);
            setYear(Number(y));
            setMonth(Number(m));
            setDay(Number(d));
          }}
        />
      </FormField>
      <ButtonGroup>
        <Button type="submit">OK</Button>
        <Button type="button">クリア</Button>
        <Button type="button">終了</Button>
      </ButtonGroup>
    </Form>
  );
};

// Styles
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const FormField = styled.div`
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

const Input = styled.input`
  padding: 5px;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  background-color: #007bff;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

// Sample usage
const App: React.FC = () => {
  const handleSubmit = (period: string, year: number, month: number, day: number) => {
    console.log('Submitted:', { period, year, month, day });
  };

  return (
    <div>
      <h1>業者情報取込更新処理</h1>
      <ReportPeriodForm onSubmit={handleSubmit} />
    </div>
  );
};

export default App;