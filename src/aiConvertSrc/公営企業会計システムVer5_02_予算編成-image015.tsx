import React from 'react';
import styled from '@emotion/styled';

type ReservationFormProps = {
  onSubmit: (data: ReservationData) => void;
};

type ReservationData = {
  date: string;
  time: string;
  isCold: boolean;
  isFixed: boolean;
};

const ReservationForm: React.FC<ReservationFormProps> = ({ onSubmit }) => {
  const [reservationData, setReservationData] = React.useState<ReservationData>({
    date: '',
    time: '',
    isCold: false,
    isFixed: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type, checked } = e.target;
    setReservationData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(reservationData);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label>予算</Label>
        <Select name="price">
          <option value="1">合せ</option>
          <option value="2">合せない</option>
        </Select>
      </FormGroup>
      <FormGroup>
        <Label>流用元用額</Label>
        <RadioGroup>
          <Radio
            type="radio"
            name="isCold"
            value="cold"
            checked={reservationData.isCold}
            onChange={handleChange}
          />
          <span>含む</span>
          <Radio
            type="radio"
            name="isCold"
            value=""
            checked={!reservationData.isCold}
            onChange={handleChange}
          />
          <span>含まない</span>
        </RadioGroup>
      </FormGroup>
      <FormGroup>
        <Checkbox
          type="checkbox"
          name="isFixed"
          checked={reservationData.isFixed}
          onChange={handleChange}
        />
        <span>最終査定額を含む</span>
        <Note>
          予算確定前でも最終査定額を決算見込額として集計することができます。
          集計する最大補正回数を指定して下さい。
        </Note>
      </FormGroup>
      <FormGroup>
        <Label>処理概要</Label>
        <Note>
          本年度を指定して、決算見込額の集計回数を指定して下さい。
          予算規則を指定した決算見込回数に集計します。
          同度でも実行できますが、｢決算見込登録｣で修正した内容は削除されますので、
          注意して下さい。
        </Note>
      </FormGroup>
      <ButtonGroup>
        <CancelButton type="button">キャンセル</CancelButton>
        <SubmitButton type="submit">OK</SubmitButton>
      </ButtonGroup>
    </Form>
  );
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  font-weight: bold;
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

const Radio = styled.input`
  margin-right: 0.5rem;
`;

const Checkbox = styled.input`
  margin-right: 0.5rem;
`;

const Note = styled.p`
  font-size: 0.875rem;
  color: #666;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 1rem;
`;

const CancelButton = styled.button`
  padding: 0.5rem 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #eee;
  cursor: pointer;
`;

const SubmitButton = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
`;

// Example usage
const App: React.FC = () => {
  const handleSubmit = (data: ReservationData) => {
    console.log('Submitted data:', data);
  };

  return (
    <div>
      <h1>Reservation Form</h1>
      <ReservationForm onSubmit={handleSubmit} />
    </div>
  );
};

export default App;