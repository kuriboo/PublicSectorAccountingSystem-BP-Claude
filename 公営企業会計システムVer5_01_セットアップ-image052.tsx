import React from 'react';
import styled from 'styled-components';

interface FormData {
  date: string;
  year: number;
  month: number;
  day: number;
}

interface NewYearHolidayConfirmationProps {
  onSubmit: (data: FormData) => void;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const Title = styled.h2`
  margin-bottom: 20px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

const Label = styled.label`
  margin-bottom: 5px;
`;

const Input = styled.input`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 10px 20px;
  margin: 0 10px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const NewYearHolidayConfirmation: React.FC<NewYearHolidayConfirmationProps> = ({ onSubmit }) => {
  const [date, setDate] = React.useState('');
  const [year, setYear] = React.useState(0);
  const [month, setMonth] = React.useState(0);
  const [day, setDay] = React.useState(0);

  const handleSubmit = () => {
    if (!date || !year || !month || !day) {
      alert('全ての項目を入力してください。');
      return;
    }

    const data: FormData = {
      date,
      year,
      month,
      day,
    };

    onSubmit(data);
  };

  return (
    <Container>
      <Title>新旧科目確認用一覧表</Title>
      <FormGroup>
        <Label>出力内容</Label>
        <Input type="text" value={date} onChange={(e) => setDate(e.target.value)} />
      </FormGroup>
      <FormGroup>
        <Label>出力種別</Label>
        <Input type="number" value={year} onChange={(e) => setYear(Number(e.target.value))} />
        <Label>年</Label>
        <Input type="number" value={month} onChange={(e) => setMonth(Number(e.target.value))} />
        <Label>月</Label>
        <Input type="number" value={day} onChange={(e) => setDay(Number(e.target.value))} />
        <Label>日</Label>
      </FormGroup>
      <ButtonGroup>
        <Button onClick={handleSubmit}>OK</Button>
        <Button>終了</Button>
      </ButtonGroup>
    </Container>
  );
};

// 使用例
const App: React.FC = () => {
  const handleSubmit = (data: FormData) => {
    console.log('Submitted data:', data);
    // ここでデータを送信するなどの処理を行う
  };

  return (
    <div>
      <NewYearHolidayConfirmation onSubmit={handleSubmit} />
    </div>
  );
};

export default App;