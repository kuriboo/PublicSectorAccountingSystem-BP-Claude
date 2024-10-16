import React from 'react';
import styled from '@emotion/styled';

interface ChecklistFormProps {
  onSubmit: (params: { ranges: string; startDate: Date; endDate: Date; }) => void;
}

const ChecklistForm: React.FC<ChecklistFormProps> = ({ onSubmit }) => {
  const [ranges, setRanges] = React.useState('所属別');
  const [startDate, setStartDate] = React.useState(new Date());
  const [endDate, setEndDate] = React.useState(new Date());

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit({ ranges, startDate, endDate });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormField>
        <Label>範囲指定</Label>
        <RadioWrapper>
          <Radio
            type="radio"
            id="ranges-all"
            value="所属別"
            checked={ranges === '所属別'}
            onChange={() => setRanges('所属別')}
          />
          <RadioLabel htmlFor="ranges-all">全て</RadioLabel>
          <Radio
            type="radio"
            id="ranges-personal"
            value="所属"
            checked={ranges === '所属'}
            onChange={() => setRanges('所属')}
          />
          <RadioLabel htmlFor="ranges-personal">本自担</RadioLabel>
        </RadioWrapper>
      </FormField>
      <FormField>
        <Label>予定処理日</Label>
        <DateRangeWrapper>
          <DateInput
            type="date"
            value={startDate.toISOString().slice(0, 10)}
            onChange={e => setStartDate(new Date(e.target.value))}
          />
          <DateDelimiter>〜</DateDelimiter>
          <DateInput
            type="date"
            value={endDate.toISOString().slice(0, 10)}
            onChange={e => setEndDate(new Date(e.target.value))}
          />
        </DateRangeWrapper>
      </FormField>
      <ButtonWrapper>
        <SubmitButton type="submit">終了</SubmitButton>
        <CancelButton type="button">クリア</CancelButton>
        <EndButton type="button">終了</EndButton>
      </ButtonWrapper>
    </Form>
  );
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
`;

const FormField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Label = styled.div`
  font-weight: bold;
`;

const RadioWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Radio = styled.input`
  margin: 0;
`;

const RadioLabel = styled.label`
  cursor: pointer;
`;

const DateRangeWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const DateInput = styled.input`
  padding: 4px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 120px;
`;

const DateDelimiter = styled.span`
  margin: 0 4px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  margin-top: 16px;
`;

const Button = styled.button`
  padding: 8px 16px;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
  
  &:hover {
    opacity: 0.8;
  }
`;

const SubmitButton = styled(Button)`
  background-color: #007bff;
  color: #fff;
  border: none;
`;

const CancelButton = styled(Button)`
  background-color: #6c757d;
  color: #fff;
  border: none;
`;

const EndButton = styled(Button)`
  background-color: #dc3545;
  color: #fff;
  border: none;
`;

// Usage example
const UsageExample: React.FC = () => {
  const handleSubmit = (params: { ranges: string; startDate: Date; endDate: Date; }) => {
    console.log(params);
    // Handle form submission logic here
  };

  return (
    <div>
      <h1>Checklist Form Example</h1>
      <ChecklistForm onSubmit={handleSubmit} />
    </div>
  );
};

export default UsageExample;