import React from 'react';
import styled from '@emotion/styled';

type ReservationFormProps = {
  onSubmit: (data: { date: string; period: number; name: string; confirmed: boolean; expirationDate: string; purpose: string; }) => void;
};

const ReservationForm: React.FC<ReservationFormProps> = ({ onSubmit }) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {
      date: formData.get('date') as string,
      period: Number(formData.get('period')),
      name: formData.get('name') as string,
      confirmed: formData.get('confirmed') === '1',
      expirationDate: formData.get('expirationDate') as string,
      purpose: formData.get('purpose') as string,
    };
    onSubmit(data);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        日付
        <Input type="text" name="date" required />  
      </Label>
      <FieldSet>
        <legend>予回確定情報</legend>
        <Label>
          年度
          <Input type="number" name="period" required min="0" />
          年度
        </Label>
        <Label>
          予算編成区分
          <Select name="name" required>
            <option value="補正予算">補正予算</option>
          </Select>
        </Label>
        <Label>
          回数
          <Input type="number" name="confirmed" required min="0" max="9" />  
          回 
          <Input type="checkbox" name="isConfirmed" />
          6月補正予算
        </Label>
      </FieldSet>
      <Label>
        確定日 
        <Input type="text" name="expirationDate" required pattern="\d{4}/\d{2}/\d{2}" />
      </Label>
      <Label>
        処理概要
        <Textarea name="purpose" required rows={3}></Textarea>
      </Label>
      <ButtonContainer>
        <Button type="button">OK</Button>
        <Button type="button">クリア</Button>
        <Button type="submit">終了</Button>
      </ButtonContainer>
    </Form>
  );
};

const Form = styled.form`
  display: flex; 
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 24px;
  box-sizing: border-box;
  background: #f0f0f0;
  font-size: 16px;
`;

const Label = styled.label`
  display: flex;
  align-items: center; 
  gap: 8px;
`;

const Input = styled.input`
  padding: 4px 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;  
`;

const FieldSet = styled.fieldset`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin: 0;
  padding: 16px;
  border: 1px solid #ccc;
`;

const Select = styled.select`
  padding: 4px 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;

const Textarea = styled.textarea`
  padding: 4px 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  resize: vertical;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  width: 100%;
`;

const Button = styled.button`
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  background: #007bff;
  color: #fff;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background: #0056b3;
  }
`;

// Usage example
const App: React.FC = () => {
  const handleReservationSubmit = (data: { date: string; period: number; name: string; confirmed: boolean; expirationDate: string; purpose: string; }) => {
    console.log(data);
  };

  return (
    <div>
      <h1>Reservation Form</h1>
      <ReservationForm onSubmit={handleReservationSubmit} />
    </div>
  );
};

export default App;