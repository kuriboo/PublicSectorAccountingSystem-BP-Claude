import React from 'react';
import styled from '@emotion/styled';

type WeatherRegistrationFormProps = {
  onSubmit: (data: { date: string; weather: string; }) => void;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 8px;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;

  @media (max-width: 600px) {
    max-width: 100%;
  }
`;

const Title = styled.h2`
  margin-bottom: 20px;
  font-size: 1.5rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Select = styled.select`
  width: 100%;
  padding: 8px;
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
  margin-left: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const WeatherRegistrationForm: React.FC<WeatherRegistrationFormProps> = ({ onSubmit }) => {
  const [date, setDate] = React.useState('');
  const [weather, setWeather] = React.useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ date, weather });
  };

  return (
    <Container>
      <Title>科目整理用データ出力</Title>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label>出力種別</Label>
          <Select value={weather} onChange={(e) => setWeather(e.target.value)} required>
            <option value="">選択してください</option>
            <option value="予算科目">予算科目</option>
            <option value="仕訳科目">仕訳科目</option>
          </Select>
        </FormGroup>
        <FormGroup>
          <Label>出力年度</Label>
          <Input type="text" value={date} onChange={(e) => setDate(e.target.value)} required />
        </FormGroup>
        <ButtonGroup>
          <Button type="button">終了</Button>
          <Button type="submit">CSV出力</Button>
        </ButtonGroup>
      </Form>
    </Container>
  );
};

// Sample usage
const App = () => {
  const handleSubmit = (data: { date: string; weather: string; }) => {
    console.log('Submitted data:', data);
    // Perform further actions with the submitted data
  };

  return (
    <div>
      <h1>Weather Registration Form Sample</h1>
      <WeatherRegistrationForm onSubmit={handleSubmit} />
    </div>
  );
};

export default App;