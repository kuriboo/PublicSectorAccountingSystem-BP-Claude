import React from 'react';
import styled from '@emotion/styled';

type ReservationFormProps = {
  onSubmit: (data: ReservationData) => void;
};

type ReservationData = {
  reservationYear: number;
  reservationType: '事業別' | '所属別';
  accountTitle: string;
  startDate: string;
  endDate: string;
  amountMonth: string;
  amountYear: string;
};

const ReservationForm: React.FC<ReservationFormProps> = ({ onSubmit }) => {
  const currentYear = new Date().getFullYear();

  const [formData, setFormData] = React.useState<ReservationData>({
    reservationYear: currentYear,
    reservationType: '事業別',
    accountTitle: '',
    startDate: '',
    endDate: '',
    amountMonth: '',
    amountYear: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(formData);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label>年度</Label>
        <Select
          name="reservationYear"
          value={formData.reservationYear}
          onChange={handleChange}
        >
          <option value={currentYear - 1}>{currentYear - 1}年度</option>
          <option value={currentYear}>{currentYear}年度</option>
        </Select>
      </FormGroup>

      <FormGroup>
        <Label>補正回数</Label>
        <Input type="text" value="1" readOnly />
        <span>6月補正予算</span>
      </FormGroup>

      <FormGroup>
        <Label>帳票種別</Label>
        <RadioGroup>
          <RadioButton
            type="radio"
            name="reservationType"
            value="事業別"
            checked={formData.reservationType === '事業別'}
            onChange={handleChange}
          />
          <span>事業別</span>
          <RadioButton
            type="radio"
            name="reservationType"
            value="所属別"
            checked={formData.reservationType === '所属別'}
            onChange={handleChange}
          />
          <span>所属別</span>
        </RadioGroup>
      </FormGroup>

      <FormGroup>
        <Label>印字区分</Label>
        <RadioGroup>
          <RadioButton type="radio" checked readOnly />
          <span>見積要求額</span>
          <RadioButton type="radio" disabled />
          <span>査定額</span>
        </RadioGroup>
        <Input type="text" value="1" readOnly />
        <span>回</span>
      </FormGroup>

      <FormGroup>
        <Label>範囲指定</Label>
        <div>
          <span>所属</span>
          <Input type="text" name="startDate" value={formData.startDate} onChange={handleChange} />
          <span>～</span>
          <Input type="text" name="endDate" value={formData.endDate} onChange={handleChange} />
        </div>
        <div>
          <span>事業科目</span>
          <Input type="text" name="amountMonth" value={formData.amountMonth} onChange={handleChange} />
          <span>～</span>
          <Input type="text" name="amountYear" value={formData.amountYear} onChange={handleChange} />
        </div>
      </FormGroup>

      <ButtonGroup>
        <Button type="button">クリア</Button>
        <Button type="submit">OK</Button>
        <Button type="button">終了</Button>
      </ButtonGroup>
    </Form>
  );
};

// Sample usage
const App: React.FC = () => {
  const handleReservationSubmit = (data: ReservationData) => {
    console.log('Reservation data submitted:', data);
    // Handle form submission logic here
  };

  return (
    <div>
      <h1>予算積算資料システム</h1>
      <ReservationForm onSubmit={handleReservationSubmit} />
    </div>
  );
};

export default App;

// Styles
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 400px;
  margin: 0 auto;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  font-weight: bold;
`;

const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Select = styled.select`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const RadioGroup = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

const RadioButton = styled.input`
  margin-right: 0.5rem;
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