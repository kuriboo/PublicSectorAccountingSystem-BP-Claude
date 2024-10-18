import React from 'react';
import styled from '@emotion/styled';

type ReservationFormProps = {
  onSubmit: (data: ReservationData) => void;
};

type ReservationData = {
  date: string;
  startTime: string;
  endTime: string;
  category: string;
  note: string;
};

const ReservationForm: React.FC<ReservationFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = React.useState<ReservationData>({
    date: '',
    startTime: '',
    endTime: '',
    category: '',
    note: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        作業日
        <Input
          type="text"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />
      </Label>
      <Label>
        予算料日
        <Input
          type="text"
          name="startTime"
          value={formData.startTime}
          onChange={handleChange}
          required
        />
        〜
        <Input
          type="text"
          name="endTime"
          value={formData.endTime}
          onChange={handleChange}
          required
        />
      </Label>
      <Label>
        作業区分
        <Input
          type="text"
          name="category"
          value={formData.category}
          onChange={handleChange}
        />
      </Label>
      <Label>
        集計対象
        <RadioGroup>
          <Radio type="radio" name="target" value="全体" defaultChecked />
          全体
          <Radio type="radio" name="target" value="ブロック" />
          ブロック
          <Radio type="radio" name="target" value="セグメント" />
          セグメント
        </RadioGroup>
      </Label>
      <TextArea
        name="note"
        value={formData.note}
        onChange={handleChange}
        placeholder="備考"
      />
      <ButtonGroup>
        <Button type="submit">OK</Button>
        <Button type="button">クリア</Button>
        <Button type="button">終了</Button>
      </ButtonGroup>
    </Form>
  );
};

// Sample usage
const App: React.FC = () => {
  const handleReservationSubmit = (data: ReservationData) => {
    console.log('Reservation submitted:', data);
    // Handle form submission
  };

  return (
    <div>
      <h1>予算額内訳表作成</h1>
      <ReservationForm onSubmit={handleReservationSubmit} />
    </div>
  );
};

// Styled components
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 400px;
  margin: 0 auto;
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Input = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const RadioGroup = styled.div`
  display: flex;
  gap: 8px;
`;

const Radio = styled.input`
  margin-right: 4px;
`;

const TextArea = styled.textarea`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
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

export default App;