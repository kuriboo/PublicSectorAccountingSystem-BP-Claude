import React from 'react';
import styled from '@emotion/styled';

interface ReservationConfirmationProps {
  year: number;
  forecastAreaCode: number;
  returnDate: string;
  processMonth: number;
  processDate: number;
  comment?: string;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f0f0f0;
  font-family: Arial, sans-serif;
`;

const Title = styled.h2`
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  max-width: 400px;
`;

const Label = styled.label`
  font-weight: bold;
`;

const Input = styled.input`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Select = styled.select`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Checkbox = styled.input`
  margin-right: 5px;
`;

const Textarea = styled.textarea`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
  min-height: 100px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  align-self: flex-end;

  &:hover {
    background-color: #0056b3;
  }
`;

const ReservationConfirmation: React.FC<ReservationConfirmationProps> = ({
  year,
  forecastAreaCode,
  returnDate,
  processMonth,
  processDate,
  comment = '',
}) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <Container>
      <Title>予算確定解除</Title>
      <Form onSubmit={handleSubmit}>
        <Label>
          年度
          <Input type="number" value={year} readOnly />
        </Label>
        <Label>
          予算編成区分
          <Select value={forecastAreaCode} disabled>
            <option value={3}>補正</option>
          </Select>
        </Label>
        <Label>
          回数
          <Input type="number" value={1} readOnly />
          <Checkbox type="checkbox" checked readOnly />
          6月補正予算
        </Label>
        <Label>
          確定日
          <Input type="text" value={returnDate} readOnly />
        </Label>
        <Label>
          処理概要
          <Textarea value={comment} readOnly />
        </Label>
        <Button type="submit">OK</Button>
      </Form>
    </Container>
  );
};

// Usage example
const App: React.FC = () => {
  return (
    <ReservationConfirmation
      year={2023}
      forecastAreaCode={3}
      returnDate="平成31年07月01日" 
      processMonth={6}
      processDate={9}
      comment="指定した予算確定情報を解除します。これにより、予算策定に該当予算額が含まれなくなります。再度登録をする場合は「予算確定登録」にて行います。"
    />
  );
};

export default App;