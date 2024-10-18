import React from 'react';
import styled from 'styled-components';

type ReservationFormProps = {
  onSubmit: (data: ReservationData) => void;
};

type ReservationData = {
  selectedYear: number;
  expectedArrivalDate: Date | null;
  stayDays: number;
  smoking: boolean;
  roomType: string;
  paymentMethod: string;
  couponCode: string;
  arrivalTime: string;
  roomPreference: string;
  breakfastIncluded: boolean;
  parkingIncluded: boolean;
  comment: string;
};

const ReservationForm: React.FC<ReservationFormProps> = ({ onSubmit }) => {
  const currentYear = new Date().getFullYear();
  const yearOptions = [currentYear, currentYear + 1, currentYear + 2];

  const [formData, setFormData] = React.useState<ReservationData>({
    selectedYear: currentYear,
    expectedArrivalDate: null,
    stayDays: 1,
    smoking: false,
    roomType: '洋室',
    paymentMethod: '現金',
    couponCode: '',
    arrivalTime: '',
    roomPreference: '',
    breakfastIncluded: true,
    parkingIncluded: false,
    comment: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type, checked } = event.target;
    const newValue = type === 'checkbox' ? checked : value;
    setFormData(prevData => ({ ...prevData, [name]: newValue }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(formData);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        予約年度:
        <Select name="selectedYear" value={formData.selectedYear} onChange={handleChange}>
          {yearOptions.map(year => (
            <option key={year} value={year}>
              {year}年
            </option>
          ))}
        </Select>
      </Label>

      <Label>
        予約編成区分:
        <Select name="roomType" value={formData.roomType} onChange={handleChange}>
          <option value="洋室">洋室</option>
          <option value="和室">和室</option>
        </Select>
      </Label>

      <Label>
        最終査定値:
        <RadioGroup>
          <Label>
            <input
              type="radio"
              name="roomPreference"
              value="眺望要求優先"
              checked={formData.roomPreference === '眺望要求優先'}
              onChange={handleChange}
            />
            眺望要求優先
          </Label>
          <Label>
            <input
              type="radio"
              name="roomPreference"
              value="査定額優先"
              checked={formData.roomPreference === '査定額優先'}
              onChange={handleChange}
            />
            査定額優先
          </Label>
        </RadioGroup>
      </Label>

      <Label>
        <Checkbox
          type="checkbox"
          name="breakfastIncluded"
          checked={formData.breakfastIncluded}
          onChange={handleChange}
        />
        予算見積に朝食を組み込む
      </Label>

      <Label>
        <Checkbox
          type="checkbox"
          name="parkingIncluded"
          checked={formData.parkingIncluded}
          onChange={handleChange}
        />
        予算見積に駐車料金を組み込む 
      </Label>

      <FieldSet>
        <legend>範囲指定</legend>
        <Label>
          所属:
          <input type="text" name="couponCode" value={formData.couponCode} onChange={handleChange} />
          ～
          <input type="text" name="couponCode" value={formData.couponCode} onChange={handleChange} />  
        </Label>
        <Label>
          予算料日:
          <input type="date" name="expectedArrivalDate" onChange={handleChange} />
          ～ 
          <input type="date" name="expectedArrivalDate" onChange={handleChange} />
        </Label>

        <Label>
          定員区分: 
          <Select name="stayDays" value={formData.stayDays} onChange={handleChange}>
            <option value="1">経営</option>
            <option value="2">臨時</option>
            <option value="3">新規</option>
          </Select>
        </Label>
      </FieldSet>

      <Label>
        集計対象:
        <RadioGroup>
          <Label>
            <input
              type="radio"
              name="arrivalTime"
              value="全体"
              checked={formData.arrivalTime === '全体'}
              onChange={handleChange}
            />
            全体  
          </Label>
          <Label>
            <input
              type="radio"
              name="arrivalTime"
              value="プロジェクト"
              checked={formData.arrivalTime === 'プロジェクト'}
              onChange={handleChange}
            />  
            プロジェクト
          </Label>
          <Label>
            <input
              type="radio"
              name="arrivalTime"
              value="セグメント"
              checked={formData.arrivalTime === 'セグメント'}
              onChange={handleChange}
            />
            セグメント  
          </Label>
        </RadioGroup>
      </Label>

      <SubmitButton type="submit">予約</SubmitButton>
    </Form>
  );
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  background-color: #f0f0f0;
  border-radius: 8px;
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Select = styled.select`
  padding: 0.5rem;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

const RadioGroup = styled.div`
  display: flex;
  gap: 1rem;
`;

const Checkbox = styled.input`
  margin-right: 0.5rem;
`;

const FieldSet = styled.fieldset`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 1rem;
`;

const SubmitButton = styled.button`
  padding: 0.75rem 1rem;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  align-self: flex-start;

  &:hover {
    background-color: #0056b3;
  }
`;

// Usage example
const App: React.FC = () => {
  const handleReservationSubmit = (data: ReservationData) => {
    console.log('Reservation data:', data);
    // Handle reservation submission logic here
  };

  return (
    <div>
      <h1>Reservation Form</h1>
      <ReservationForm onSubmit={handleReservationSubmit} />
    </div>
  );
};

export default App;