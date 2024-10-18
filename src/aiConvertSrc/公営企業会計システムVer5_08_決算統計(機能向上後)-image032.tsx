import React from 'react';
import styled from 'styled-components';

interface DecisionFormProps {
  booking_date: string;
  booking_time: string;
  onSubmit: () => void;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f0f0f0;
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

const FormGroup = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const Label = styled.label`
  font-size: 18px;
  margin-right: 10px;
`;

const Input = styled.input`
  padding: 5px;
  font-size: 16px;
`;

const TextArea = styled.textarea`
  width: 300px;
  height: 100px;
  padding: 10px;
  font-size: 16px;
  resize: none;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 18px;
  margin: 0 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const DecisionForm: React.FC<DecisionFormProps> = ({ booking_date, booking_time, onSubmit }) => {
  // Handle form submission
  const handleSubmit = () => {
    onSubmit();
  };

  return (
    <Container>
      <Title>決算金額集計</Title>
      <FormGroup>
        <Label>予算管理</Label>
        <Input type="text" value={booking_date} readOnly />
      </FormGroup>
      <FormGroup>
        <Label>予算科目</Label>
        <Input type="text" value={booking_time} readOnly />
      </FormGroup>
      <FormGroup>
        <Label>処理概要</Label>
        <TextArea placeholder="予算科目・仕訳科目別に決算値を集計します。決算値が存在する科目のうち、振替コードが設定されていない科目をCSVファイルで出力します。・振替コード未設定科目.csv何回でも実行できます。" readOnly />
      </FormGroup>
      <ButtonGroup>
        <Button onClick={handleSubmit}>OK</Button>
        <Button>クリア</Button>
        <Button>終了</Button>
      </ButtonGroup>
    </Container>
  );
};

// Sample usage
const App: React.FC = () => {
  const handleSubmit = () => {
    console.log('Form submitted');
  };

  return (
    <DecisionForm
      booking_date="令和05年11月14日"
      booking_time="当和03年11月決算権限者 全権限"
      onSubmit={handleSubmit}
    />
  );
};

export default App;