import React from 'react';
import styled from '@emotion/styled';

type MeetingReservationFormProps = {
  onSubmit: (formData: FormData) => void;
};

type FormData = {
  date: string;
  startTime: string;
  endTime: string;
  participants: 'everyone' | 'members';
  notification: 'yes' | 'no';
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
`;

const Label = styled.label`
  font-weight: bold;
`;

const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const RadioGroup = styled.div`
  display: flex;
  gap: 1rem;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 1rem;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const MeetingReservationForm: React.FC<MeetingReservationFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = React.useState<FormData>({
    date: '',
    startTime: '',
    endTime: '',
    participants: 'everyone',
    notification: 'yes',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <div>
          <Label>集計日付</Label>
          <Input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <Label>決算仕訳</Label>
          <div>
            <Label>
              <Input
                type="radio"
                name="participants"
                value="everyone"
                checked={formData.participants === 'everyone'}
                onChange={handleChange}
              />
              含む
            </Label>
            <Label>
              <Input
                type="radio"
                name="participants"
                value="members"
                checked={formData.participants === 'members'}
                onChange={handleChange}
              />
              含まない
            </Label>
          </div>
        </div>
        <div>
          <Label>期間</Label>
          <Input
            type="time"
            name="startTime"
            value={formData.startTime}
            onChange={handleChange}
            required
          />
          <span> ～ </span>
          <Input
            type="time"
            name="endTime"
            value={formData.endTime}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <Label>通知</Label>
          <RadioGroup>
            <Label>
              <Input
                type="radio"
                name="notification"
                value="yes"
                checked={formData.notification === 'yes'}
                onChange={handleChange}
              />
              する
            </Label>
            <Label>
              <Input
                type="radio"
                name="notification"
                value="no"
                checked={formData.notification === 'no'}
                onChange={handleChange}
              />
              しない
            </Label>
          </RadioGroup>
        </div>
        <ButtonGroup>
          <Button type="submit">終了</Button>
          <Button type="button">クリア</Button>
          <Button type="button">終了</Button>
        </ButtonGroup>
      </form>
    </Container>
  );
};

// Usage example
const App = () => {
  const handleSubmit = (formData: FormData) => {
    console.log('Form submitted:', formData);
  };

  return (
    <div>
      <h1>Meeting Reservation Form</h1>
      <MeetingReservationForm onSubmit={handleSubmit} />
    </div>
  );
};

export default App;