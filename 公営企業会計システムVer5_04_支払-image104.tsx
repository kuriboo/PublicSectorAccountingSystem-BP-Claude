import React from 'react';
import styled from '@emotion/styled';

type VacationDeclarationFormProps = {
  onSubmit: (formData: { reason: string; startDate: string; endDate: string; contact: string }) => void;
};

const VacationDeclarationForm: React.FC<VacationDeclarationFormProps> = ({ onSubmit }) => {
  const [reason, setReason] = React.useState('');
  const [startDate, setStartDate] = React.useState('');
  const [endDate, setEndDate] = React.useState('');
  const [contact, setContact] = React.useState('自宅連絡以外');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit({ reason, startDate, endDate, contact });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        範囲指定
        <Input
          type="text"
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          required
        />
      </Label>
      <Label>
        決裁確定日
        <InputWrapper>
          <Input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            required
          />
          〜
          <Input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            required
          />
        </InputWrapper>
      </Label>
      <Label>
        対象
        <RadioWrapper>
          <label>
            <input
              type="radio"
              value="給与連携以外"
              checked={contact === '給与連携以外'}
              onChange={(e) => setContact(e.target.value)}
            />
            給与連携以外
          </label>
          <label>
            <input
              type="radio"
              value="給与連携"
              checked={contact === '給与連携'}
              onChange={(e) => setContact(e.target.value)}
            />
            給与連携
          </label>
          <label>
            <input
              type="radio"
              value="すべて"
              checked={contact === 'すべて'}
              onChange={(e) => setContact(e.target.value)}
            />
            すべて
          </label>
        </RadioWrapper>
      </Label>
      <ButtonWrapper>
        <Button type="submit">OK</Button>
        <Button type="button">クリア</Button>
        <Button type="button">終了</Button>
      </ButtonWrapper>
    </Form>
  );
};

// Sample usage
const App: React.FC = () => {
  const handleSubmit = (formData: {
    reason: string;
    startDate: string;
    endDate: string;
    contact: string;
  }) => {
    console.log(formData);
  };

  return (
    <div>
      <h1>振替伝票決裁確定</h1>
      <VacationDeclarationForm onSubmit={handleSubmit} />
    </div>
  );
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 400px;
  margin: 0 auto;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const RadioWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;
  margin-top: 1rem;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export default App;