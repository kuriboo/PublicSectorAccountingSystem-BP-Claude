import React from 'react';
import styled from '@emotion/styled';

interface DateRangeFormProps {
  fromDate?: string;
  toDate?: string;
  fromAmount?: string;
  toAmount?: string;
  onSubmit: (data: { fromDate: string; toDate: string; fromAmount: string; toAmount: string }) => void;
}

const DateRangeForm: React.FC<DateRangeFormProps> = ({
  fromDate = '',
  toDate = '',
  fromAmount = '',
  toAmount = '',
  onSubmit,
}) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit({ fromDate, toDate, fromAmount, toAmount });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label>集計期間</Label>
        <InputGroup>
          <Input type="date" value={fromDate} readOnly />
          <Separator>〜</Separator>
          <Input type="date" value={toDate} readOnly />
        </InputGroup>
      </FormGroup>
      <FormGroup>
        <Label>相手先</Label>
        <InputGroup>
          <Input type="text" value={fromAmount} readOnly />
          <Separator>〜</Separator>
          <Input type="text" value={toAmount} readOnly />
        </InputGroup>
      </FormGroup>
      <ButtonGroup>
        <Button type="button">OK</Button>
        <Button type="button">クリア</Button>
        <Button type="submit">終了</Button>
      </ButtonGroup>
    </Form>
  );
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const FormGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Label = styled.label`
  flex: 0 0 80px;
  font-weight: bold;
`;

const InputGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Input = styled.input`
  padding: 4px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Separator = styled.span`
  margin: 0 8px;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
`;

const Button = styled.button`
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

// Usage example
const App = () => {
  const handleSubmit = (data: { fromDate: string; toDate: string; fromAmount: string; toAmount: string }) => {
    console.log('Form submitted:', data);
  };

  return (
    <div>
      <h1>Date Range Form</h1>
      <DateRangeForm
        fromDate="2023-07-24"
        toDate="2023-07-24"
        fromAmount="0000000000"
        toAmount="9999999999"
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default App;